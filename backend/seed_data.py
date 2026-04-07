import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from portfolio.models import Profile, Project, Experience, Skill, Education

def seed():
    # Clear existing data
    Profile.objects.all().delete()
    Project.objects.all().delete()
    Experience.objects.all().delete()
    Skill.objects.all().delete()
    Education.objects.all().delete()
    print("Cleared existing data")

    # Profile
    Profile.objects.create(
        name="Urvashi Vankar",
        title="Full Stack AI Developer",
        bio="I am a Full Stack AI Developer dedicated to engineering high-performance, scalable systems that bridge the gap between complex AI models and intuitive user experiences. My expertise lies in designing modern web architectures and intelligent backend systems. From pixel-perfect interfaces to low-latency neural integrations, I focus on technical excellence and purposeful code to build digital products that matter.",
        location="Vadodara, Gujarat",
        email="urvashi@example.com",
        github="https://github.com/urvashivankar",
        linkedin="https://linkedin.com/in/urvashivankar",
        portfolio_url="https://urvashivankar.dev"
    )
    print("Created Profile")

    # Projects
    projects = [
        {
            "title": "Roshni Enterprise",
            "category": "E-commerce • Business",
            "description": "A full-featured e-commerce platform for industrial equipment with custom inventory management and order tracking.",
            "tech_stack": "Next.js, Node.js, MongoDB, TailwindCSS",
            "github_link": "https://github.com/urvashivankar/roshni-enterprise",
            "image": "/projects/roshni-enterprise.png",
            "featured": True
        } ,
        {
            "title": "AI Mock Interview Platform",
            "category": "EdTech • AI",
            "description": "An intelligent platform that simulates technical interviews using LLMs to provide real-time feedback and grading.",
            "tech_stack": "React, FastAPI, Gemini API, PostgreSQL",
            "github_link": "https://github.com/urvashivankar/ai-interview",
            "image": "/projects/ai-mock-interview.png",
            "featured": True
        } ,
        {
            "title": "Aqua Guardian",
            "category": "Sustainability • AI",
            "description": "Architected a full-stack AI-powered water pollution reporting and monitoring system, enabling real-time validation and tracking. Recognized among the Top 10 innovations at a Gujarat Innovation Showcase event.",
            "tech_stack": "Python, Django, React, TensorFlow, PostgreSQL",
            "github_link": "https://github.com/urvashivankar/aqua-guardian",
            "live_link": "https://aqua-guardian.dev",
            "image": "/projects/aqua-guardian.png",
            "featured": True
        } ,
        {
            "title": "Fake News Detector",
            "category": "AI • Security",
            "description": "Machine learning system to detect misinformation in social media feeds using NLP and credibility scoring.",
            "tech_stack": "Python, Scikit-learn, Flask, React",
            "github_link": "https://github.com/urvashivankar/fake-news-detector",
            "image": "/projects/fake-news-detector.png",
            "featured": False
        }
    ]
    for p_data in projects:
        Project.objects.create(**p_data)
    print("Created Projects")

    # Experience
    experiences = [
        {
            "company": "MaMo TechnoLabs LLP",
            "role": "Full Stack Developer Intern",
            "duration": "Jan 2026 – Present",
            "description": "Contributing to real-world web and app solutions in a collaborative team setting focusing on Next.js and Django architectures.",
            "type": "internship"
        } ,
        {
            "company": "CII & YI Events",
            "role": "Event Coordinator",
            "duration": "2024 - 2025",
            "description": "Spearheaded end-to-end coordination for high-profile events, managing logistics and delegate engagement for industry summits.",
            "type": "volunteer"
        } ,
        {
            "company": "KS Technologies",
            "role": "Python Developer",
            "duration": "2022",
            "description": "Developed Python backend features and performed API integrations for web applications.",
            "type": "internship"
        }
    ]
    for exp in experiences:
        Experience.objects.create(**exp)
    print("Created Experience")

    # Skills
    skills = [
        # Frontend Development
        ("React", "Frontend Development", 95),
        ("Next.js", "Frontend Development", 90),
        ("Framer Motion", "Frontend Development", 85),
        ("Tailwind CSS", "Frontend Development", 95),
        ("JavaScript", "Frontend Development", 95),
        # Backend Development
        ("FastAPI", "Backend Development", 90),
        ("Node.js", "Backend Development", 85),
        ("Django", "Backend Development", 85),
        ("PostgreSQL", "Backend Development", 90),
        ("MySQL", "Backend Development", 85),
        ("MongoDB", "Backend Development", 85),
        ("Supabase", "Backend Development", 80),
        ("REST APIs", "Backend Development", 95),
        # AI Integration
        ("LLM APIs", "AI Integration", 95),
        ("Gemini AI", "AI Integration", 90),
        ("RAG Systems", "AI Integration", 85),
        ("Prompt Engineering", "AI Integration", 95),
        ("Python", "AI Integration", 95),
        ("AI/ML", "AI Integration", 90),
        # Deployment & DevOps
        ("Docker", "Deployment & DevOps", 80),
        ("Git", "Deployment & DevOps", 95),
        ("AWS (Basic)", "Deployment & DevOps", 70),
        ("Vercel", "Deployment & DevOps", 90),
        ("Render", "Deployment & DevOps", 85),
        ("n8n", "Deployment & DevOps", 80)
    ]
    for name, cat, prof in skills:
        Skill.objects.create(name=name, category=cat, proficiency=prof)
    print("Created Skills")

    # Education
    Education.objects.create(
        title="B.Tech CSE",
        institution="Parul University",
        period="2023 - 2026 | 8.0 CGPA",
        outcome="Focused on AI, Machine Learning, and Full-Stack Development."
    )
    Education.objects.create(
        title="Diploma in Computer Science",
        institution="Parul Polytechnic Institute",
        period="2020 - 2023 | 8 CGPA",
        outcome="Acquired fundamental knowledge in software engineering, database management, and system architecture."
    )
    print("Created Education")

if __name__ == "__main__":
    seed()
