#  Developer Portfolio CMS 

A professional, production-ready Developer Portfolio CMS built with **Django** and **Django REST Framework** to power a high-performance **React/Vite** frontend.

This project allows you to manage your entire professional identity—projects, skills, experience, and profile—through an integrated admin dashboard, with changes automatically reflected in your frontend portfolio.

---

## Features

- **Admin Dashboard**: Fully manageable via Django Admin (`admin/admin123`).
- **REST API**: Clean read-only endpoints for all portfolio sections.
- **Dynamic Updates**: Zero code changes required for content updates.
- **Markdown Support**: Rich text support for bios and project descriptions.
- **Glassmorphic UI**: Premium React frontend with Framer Motion animations.
- **CORS Configured**: Seamless communication between frontend and backend.

---

## Tech Stack

### Backend
- **Django**: Core web framework.
- **Django REST Framework**: API development.
- **SQLite**: Default database (supports PostgreSQL).
- **CORS Headers**: Secure cross-origin resource sharing.

### Frontend
- **React 18+**: UI library.
- **Vite**: Modern build tool.
- **Framer Motion**: Advanced animations.
- **Lucide Icons**: Professional iconography.
- **Axios**: API communication.

---

## API Endpoints

| Endpoint           | Description                      |
|--------------------|----------------------------------|
| `/api/profile/`    | Personal name, title, bio        |
| `/api/projects/`   | Portfolio project gallery        |
| `/api/experience/` | Professional work history        |
| `/api/education/`  | Academic background              |
| `/api/skills/`     | Technical stack grouped by category |

---

## Installation & Setup

### 1. Backend Setup
```bash
cd backend
pip install -r ..\requirements.txt
python manage.py migrate
python manage.py createsuperuser  # Use admin / admin123
python manage.py runserver
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## Admin Panel
URL: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

Manage your professional presence:
- **Profile**: Name, Title, Detailed Bio.
- **Projects**: Title, Tech Stack, Github/Live Links, Images.
- **Skills**: Categorized technical capabilities.
- **Experience**: Work history and validated impacts.
- **Education**: Degrees and academic achievements.

---

## Connecting Your Frontend

The backend is decoupled and follows the **CMS-as-a-Service** pattern.

1. **Client Configuration**: Use `axios` to connect to `http://127.0.0.1:8000/api/`.
2. **Dynamic Mapping**: Replace static local JSON/arrays with the `usePortfolioData` hook.
3. **Automatic Deployment**: Any changes made in the Admin panel reflect instantly.

---

## Professional Use Case

This architecture allows you to maintain a **stunning, high-end portfolio** while keeping the content as easy to edit as a blog. No more manual code edits for every new project or skill—just log in, add, and save. 🚀



