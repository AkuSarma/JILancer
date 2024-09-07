from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

# Customizing the UserAdmin to handle the additional fields
class CustomUserAdmin(UserAdmin):
    # Define the fields to be displayed in the admin panel
    list_display = ('username', 'email', 'is_freelancer', 'is_staff')
    
    # Specify which fields to include in the add and change forms
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'is_freelancer')}
        ),
    )
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('email',)}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
        ('Freelancer Status', {'fields': ('is_freelancer',)}),
    )

# Register the CustomUser model using the CustomUserAdmin class
admin.site.register(CustomUser, CustomUserAdmin)
