from django.shortcuts import render
from .models import SkillPageSkill

def skill_page_view(request):
    skills = SkillPageSkill.objects.all()
    return render(request, 'skill/skill.html', {'skills': skills})