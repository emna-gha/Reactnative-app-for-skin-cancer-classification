from django.contrib import admin


from .models import Visit

# Register your models here.


@admin.register(Visit)
class VisitAdmin(admin.ModelAdmin):
    list_display=['datevisit', 'notes']
    list_filter=['datevisit','created_on','updated_on' ]