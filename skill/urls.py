from django.urls import path
from .views import skill_page_view  # skill app ko view matra

urlpatterns = [
    path('', skill_page_view, name='skills'),
]