# Generated by Django 5.1.1 on 2024-09-09 04:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employer',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='employer_images/'),
        ),
        migrations.AddField(
            model_name='freelancer',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='freelancer_images/'),
        ),
    ]