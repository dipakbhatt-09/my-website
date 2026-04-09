from django.shortcuts import render
from .models import Hero, Skill, Project, About


def home_view(request):
    hero = Hero.objects.first()
    skills = Skill.objects.all()
    projects = Project.objects.all()
    context = {
        'hero': hero,
        'skills': skills,
        'projects': projects
    }
    return render(request, 'core/home.html', context)


def about_view(request):
    about = About.objects.first()
    context = {
        'about': about
    }
    return render(request, 'core/about.html', context)