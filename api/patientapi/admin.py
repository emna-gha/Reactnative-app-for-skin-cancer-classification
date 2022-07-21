from django.contrib import admin


# Register your models here.




from .models import Patient

# Register your models here.


@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display=['first_name', 'last_name','birth_date','gender','email', 'phone']
    list_filter=['first_name', 'last_name','birth_date','email', 'phone','updated_on']