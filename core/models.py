from django.db import models

# Hero Section model
class Hero(models.Model):
    greeting = models.CharField(max_length=100, default="Hi, I'm")
    name = models.CharField(max_length=50)
    tagline = models.TextField()
    description = models.TextField()
    profile_image = models.ImageField(upload_to='home/hero/')

    def __str__(self):
        return f"{self.name} Hero Section"


# Skill Section  model
class Skill(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    icon = models.ImageField(upload_to='home/skills/', blank=True, null=True)

    def __str__(self):
        return self.name


# Projects Section model
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    live_link = models.URLField(blank=True)
    github_link = models.URLField(blank=True)
    image = models.ImageField(upload_to='home/projects/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# About Section model
class About(models.Model):
    subtitle = models.CharField(max_length=100, default="Hi, I'm Dipak Bhatt")
    bio_1 = models.TextField()
    bio_2 = models.TextField()

    def __str__(self):
        return "About Page Content"
