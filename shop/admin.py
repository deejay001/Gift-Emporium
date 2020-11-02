from django.contrib import admin
from .models import Category, Product

# Register your models here.


@admin.register(Category)
class ACategory(admin.ModelAdmin):
    list_display = ('title',)


@admin.register(Product)
class AdminProduct(admin.ModelAdmin):
    list_display = ('title', 'category', 'prize', 'photo', 'created_on', 'status')
    list_filter = ('status', 'created_on', 'category')
    search_fields = ['title']
