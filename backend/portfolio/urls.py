from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, ProjectViewSet, ExperienceViewSet, SkillViewSet, EducationViewSet

router = DefaultRouter()
router.register(r'profile', ProfileViewSet, basename='profile')
router.register(r'projects', ProjectViewSet, basename='projects')
router.register(r'experience', ExperienceViewSet, basename='experience')
router.register(r'skills', SkillViewSet, basename='skills')
router.register(r'education', EducationViewSet, basename='education')

urlpatterns = [
    path('', include(router.urls)),
]
