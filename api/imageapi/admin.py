from django.contrib import admin

# Register your models here.




from .models import Image

# Register your models here.


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display=['date_time', 'source','area','comment']
    list_filter=['date_time', 'source','area','comment']