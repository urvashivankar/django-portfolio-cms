from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Profile, Project, Experience, Skill, Education
from .serializers import (
    ProfileSerializer, 
    ProjectSerializer, 
    ExperienceSerializer, 
    SkillSerializer,
    EducationSerializer
)

class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['featured']
    search_fields = ['title', 'tech_stack']
    ordering_fields = ['created_at', 'title']
    lookup_field = 'slug'

class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['category']
    ordering_fields = ['proficiency']

class EducationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
