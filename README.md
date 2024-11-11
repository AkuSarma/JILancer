## JILancer
### SIH hackathon project
- - -

# Project Concept
Freelancing Opportunities for India there is a significant gap in connecting freelancers and gig workers with short-term and project-based job opportunities. The platform will connect freelancers with a wide range of job opportunities and provide them with tools to manage projects efficiently, leading to better job satisfaction and increased income opportunities.

By addressing these gaps, your freelancing platform can offer a more comprehensive and supportive environment for freelancers, making it not just a job marketplace, but a platform for professional growth, community building, and social impact.

## Table of Contents
- Features
- Tech Stack
- Installation
- Contributing

## Features
- Freelancer & Employer Profiles: Users can create detailed profiles to showcase skills or job requirements.
- AI-powered Search: Advanced search functionality to match freelancers with employers based on skills, ratings, and more.
- Skill Verification: Verifies freelancer skills to ensure credibility.
- Secure Payment Gateway: Facilitates secure payments with escrow support.
- Learning Resources: Provides tutorials, tips, and resources for freelancers.
- Real-time Notifications: Keeps users updated on job applications, messages, and more.
- Project Management: Track and manage projects with built-in tools.

## Tech Stack
- Frontend
- - React - Component-based UI library for building a dynamic and responsive user interface.
- - Tailwind CSS - Utility-first CSS framework used for styling the frontend.
- Backend
- - Django - Python web framework for developing the backend and handling database operations.
- - Django REST Framework - Used to build APIs to connect the frontend with the backend.
- - SQLite3 - Database for development purposes; can be switched to PostgreSQL for production.

## Installation
> Prerequisites
- Node.js and npm
- Python 3.x
- Django
> Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/JILancer.git
cd JILancer
```

2. **backend setup**
```bash
cd backend
python3 -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

3. **Run migrations to set up the database:**
```bash
python manage.py migrate
Start the Django server:
```
4. **Run backend**
```bash
python manage.py runserver
```

5. **Frontend setup**
>on new terminal navigate to the frontend folder:

```bash
# install dependencies
npm install
# Start the React development server:
npm start
```
> Open your browser and navigate to http://localhost:3000 to see the application in action.


## Contributing
We welcome contributions! Please fork the repository, make changes, and submit a pull request.

> Fork the Project
- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

- - -