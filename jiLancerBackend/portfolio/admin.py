from django.contrib import admin
from .models import SocialMediaLink, Project, Freelancer, Employer

# Register the SocialMediaLink model
@admin.register(SocialMediaLink)
class SocialMediaLinkAdmin(admin.ModelAdmin):
    list_display = ('platform', 'url')
    search_fields = ('platform',)

# Register the Project model
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'link')
    search_fields = ('title',)

# Register the Freelancer model
@admin.register(Freelancer)
class FreelancerAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'rating')
    search_fields = ('name', 'user__username')
    list_filter = ('rating',)
    readonly_fields = ('image',)  # To preview the image in the admin panel

# Register the Employer model
@admin.register(Employer)
class EmployerAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'rating')
    search_fields = ('name', 'user__username')
    list_filter = ('rating',)
    readonly_fields = ('image',)  # To preview the image in the admin panel
