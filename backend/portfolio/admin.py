from django.contrib import admin
from .models import Profile, Project, Experience, Skill, Education

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'email', 'location')
    search_fields = ('name', 'title', 'email')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'featured', 'created_at', 'slug')
    list_filter = ('featured', 'created_at')
    search_fields = ('title', 'tech_stack', 'description')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'company', 'duration', 'type')
    list_filter = ('type',)
    search_fields = ('role', 'company', 'description')

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'proficiency')
    list_filter = ('category',)
    search_fields = ('name',)

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('title', 'institution', 'period')
    search_fields = ('title', 'institution', 'outcome')
