from django.urls import path
from .views import project_page_view

urlpatterns = [
    path('', project_page_view, name='projects'),
]