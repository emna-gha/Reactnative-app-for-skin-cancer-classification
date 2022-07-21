
import React,{createContext, useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../utils/config';

export const AuthContext = createContext ();

export const AuthProvider =({children})=> {
    const [isLoading,setIsLoading]=useState (false);
    const [userToken,setUserToken]= useState(null);
    const [userInfo, setUserInfo]= useState(null);

    const register = (username, email,phone_number, password) => {

        setIsLoading(true);
    
        axios
          .post(`${BASE_URL}/auth/signup/`, {
            username,
            email,
            phone_number,
            password
          })
          .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
          })
          .catch(e => {
            console.log(`register error ${e}`);
            
          });
          setIsLoading(false);
      };
    



    const login=(email,password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/auth/login/`,{
            email,
            password

        })
        .then(res =>{
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            


            
            console.log('user Token: '+ userInfo.tokens.access);
            setUserToken(userInfo.tokens.access);
            
            AsyncStorage.setItem('userToken',userInfo.tokens.access);
            
            setIsLoading(false);
        })
        .catch (e => {
            console.log(`Login error ${e}`);

        });
        //setUserToken ('sdfg');
        //AsyncStorage.setItem('userToken','sdfg');
        setIsLoading(false);
    }
    const logout =()=> {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }
    const isLoggedIn = async()=> {
        try{
            setIsLoading(true);
            let userInfo = await  AsyncStorage.getItem('userInfo');
            let userToken = await  AsyncStorage.getItem('userToken');
            userInfo= JSON.parse(userInfo);

            if (userInfo){
                
                setUserToken (userToken);
                setUserToken (userInfo);

            }
            setIsLoading(false);

        } catch (e){
            console.log(`isLogged in error ${e}`);
        }
        
    }

    useEffect( ()=> {
        isLoggedIn();
    }, []);

    return(
        <AuthContext.Provider value={{register,login,logout,isLoading,userToken,userInfo}} >
            {children}
        </AuthContext.Provider>
    );
}