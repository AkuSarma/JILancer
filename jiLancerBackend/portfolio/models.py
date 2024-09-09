from django.db import models
from user_authentication.models import CustomUser

# SocialMediaLink Model
class SocialMediaLink(models.Model):
    platform = models.CharField(max_length=50)
    url = models.URLField()

    def __str__(self):
        return self.platform

# Project Model (used for both Freelancer projects and Employer projects given)
class Project(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='project_images/')  # Requires Pillow library
    link = models.URLField()

    def __str__(self):
        return self.title

# Freelancer Model
class Freelancer(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='freelancer_profile')
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='freelancer_images/', blank=True, null=True)  # Add ImageField for profile picture
    rating = models.FloatField()
    bio = models.TextField()
    social_media_links = models.ManyToManyField(SocialMediaLink, related_name='freelancers')
    skills = models.JSONField()  # Store skills as a list of strings
    projects = models.ManyToManyField(Project, related_name='freelancers_projects')
    completed_work = models.ManyToManyField(Project, related_name='freelancers_completed_work')
    certifications = models.JSONField()  # Store certifications as a list of strings
    achievements = models.JSONField()  # Store achievements as a list of strings
    languages = models.JSONField()  # Store languages as a list of strings

    def __str__(self):
        return self.name

# Employer Model
class Employer(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='employer_profile')
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='employer_images/', blank=True, null=True)  # Add ImageField for profile picture
    rating = models.FloatField()
    bio = models.TextField()
    social_media_links = models.ManyToManyField(SocialMediaLink, related_name='employers')
    projects_given = models.ManyToManyField(Project, related_name='employers_projects_given')

    def __str__(self):
        return self.name
