from django.shortcuts import render
from .models import ProjectPage


def project_page_view(request):
    projects = ProjectPage.objects.all()
    return render(request, 'project/project.html', {
        'projects': projects
    })