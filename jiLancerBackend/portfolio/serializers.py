from rest_framework import serializers
from .models import SocialMediaLink, Project, Freelancer, Employer

class SocialMediaLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaLink
        fields = ['platform', 'url']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['title', 'image', 'link']

class FreelancerSerializer(serializers.ModelSerializer):
    social_media_links = SocialMediaLinkSerializer(many=True)
    projects = ProjectSerializer(many=True)
    completed_work = ProjectSerializer(many=True)

    class Meta:
        model = Freelancer
        fields = ['user', 'name', 'image', 'rating', 'bio', 'social_media_links', 'skills', 'projects', 'completed_work', 'certifications', 'achievements', 'languages']

    def create(self, validated_data):
        social_media_data = validated_data.pop('social_media_links')
        projects_data = validated_data.pop('projects')
        completed_work_data = validated_data.pop('completed_work')
        
        freelancer = Freelancer.objects.create(**validated_data)

        for social_media in social_media_data:
            social_media_obj, created = SocialMediaLink.objects.get_or_create(**social_media)
            freelancer.social_media_links.add(social_media_obj)

        for project in projects_data:
            project_obj, created = Project.objects.get_or_create(**project)
            freelancer.projects.add(project_obj)

        for work in completed_work_data:
            work_obj, created = Project.objects.get_or_create(**work)
            freelancer.completed_work.add(work_obj)

        return freelancer

class EmployerSerializer(serializers.ModelSerializer):
    social_media_links = SocialMediaLinkSerializer(many=True)
    projects_given = ProjectSerializer(many=True)

    class Meta:
        model = Employer
        fields = ['user', 'name', 'image', 'rating', 'bio', 'social_media_links', 'projects_given']

    def create(self, validated_data):
        social_media_data = validated_data.pop('social_media_links')
        projects_given_data = validated_data.pop('projects_given')

        employer = Employer.objects.create(**validated_data)

        for social_media in social_media_data:
            social_media_obj, created = SocialMediaLink.objects.get_or_create(**social_media)
            employer.social_media_links.add(social_media_obj)

        for project in projects_given_data:
            project_obj, created = Project.objects.get_or_create(**project)
            employer.projects_given.add(project_obj)

        return employer
