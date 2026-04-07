from django.db import models
from django.utils.text import slugify

class Profile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100, help_text="e.g., Full Stack Developer")
    bio = models.TextField(help_text="Supports Markdown")
    location = models.CharField(max_length=100)
    email = models.EmailField()
    github = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    portfolio_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profiles"

class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    category = models.CharField(max_length=100, default="Full Stack")
    description = models.TextField(help_text="Supports Markdown")
    tech_stack = models.CharField(max_length=255, help_text="Comma separated, e.g., React, Django, PostgreSQL")
    github_link = models.URLField(blank=True, null=True)
    live_link = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']

class Experience(models.Model):
    TYPE_CHOICES = (
        ('internship', 'Internship'),
        ('full-time', 'Full-time'),
        ('part-time', 'Part-time'),
        ('freelance', 'Freelance'),
        ('event', 'Event'),
    )

    company = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    duration = models.CharField(max_length=100, help_text="e.g., Jan 2026 – Apr 2026")
    description = models.TextField(help_text="Supports Markdown")
    type = models.CharField(max_length=50, choices=TYPE_CHOICES, default='full-time')

    def __str__(self):
        return f"{self.role} at {self.company}"

    class Meta:
        ordering = ['id'] # You might want to order by a specific date field if applied later

class Skill(models.Model):
    CATEGORY_CHOICES = (
        ('frontend', 'Frontend'),
        ('backend', 'Backend'),
        ('tools', 'Tools'),
        ('other', 'Other'),
    )

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='frontend')
    proficiency = models.IntegerField(help_text="1 to 100", default=50)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['category', '-proficiency']

class Education(models.Model):
    title = models.CharField(max_length=100, help_text="e.g., B.Tech CSE")
    institution = models.CharField(max_length=200, help_text="e.g., Parul University")
    period = models.CharField(max_length=100, help_text="e.g., 2023 - 2026 | 8.0 CGPA")
    outcome = models.TextField(help_text="Supports Markdown")

    def __str__(self):
        return f"{self.title} at {self.institution}"

    class Meta:
        ordering = ['-period']
