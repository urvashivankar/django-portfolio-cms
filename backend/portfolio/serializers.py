import markdown
from rest_framework import serializers
from .models import Profile, Project, Experience, Skill, Education

class ProfileSerializer(serializers.ModelSerializer):
    bio_html = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = '__all__'

    def get_bio_html(self, obj):
        if obj.bio:
            return markdown.markdown(obj.bio)
        return ""

class ProjectSerializer(serializers.ModelSerializer):
    description_html = serializers.SerializerMethodField()
    tech_stack_list = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = '__all__'

    def get_description_html(self, obj):
        if obj.description:
            return markdown.markdown(obj.description)
        return ""

    def get_tech_stack_list(self, obj):
        if obj.tech_stack:
            return [tech.strip() for tech in obj.tech_stack.split(',')]
        return []

class ExperienceSerializer(serializers.ModelSerializer):
    description_html = serializers.SerializerMethodField()

    class Meta:
        model = Experience
        fields = '__all__'

    def get_description_html(self, obj):
        if obj.description:
            return markdown.markdown(obj.description)
        return ""

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    outcome_html = serializers.SerializerMethodField()

    class Meta:
        model = Education
        fields = '__all__'

    def get_outcome_html(self, obj):
        if obj.outcome:
            return markdown.markdown(obj.outcome)
        return ""
