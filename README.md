# 🌍 JourneyJar

A full-stack travel journal application built using the MERN stack. JourneyJar allows users to securely document their travel experiences with images, organize memories, search stories, and manage their personal travel journal.

## 🚀 Live Demo

- **Frontend:** https://journeyjar-2.onrender.com
- **Backend:** https://journeyjar-1.onrender.com

---

## ✨ Features

### 👤 User Features

- User Registration & Login
- JWT Authentication
- Create Travel Stories
- Edit & Delete Travel Stories
- Upload Travel Images
- Search Stories
- Filter Stories by Date
- Mark Stories as Favorites
- Responsive User Interface

### 🔒 Security Features

- Password Hashing using bcryptjs
- JWT Authentication
- Protected Routes
- Secure API Access

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Redux Toolkit
- Axios
- Tailwind CSS
- React Icons

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- JWT (JSON Web Tokens)
- bcryptjs

### Deployment

- Frontend: Render Static Site
- Backend: Render Web Service
- Database: MongoDB Atlas

---

## 🏛️ System Architecture

```
React Frontend
      │
      ▼
 Axios API Calls
      │
      ▼
 Express Backend
      │
      ▼
 MongoDB Database
```

---

## 📂 Project Structure

```
JourneyJar
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── utils
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/MrinalChaubey/JOURNEYJAR.git
cd JOURNEYJAR
```

### Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### Run the Application

#### Backend

```bash
cd backend
npm run dev
```

#### Frontend

```bash
cd frontend
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

BASE_URL=http://localhost:3000
```

---

## 🔗 API Endpoints

### Authentication

```
POST /api/auth/create-account
POST /api/auth/login
GET  /api/auth/get-user
```

### Travel Stories

```
GET    /api/story/get-all
POST   /api/story/add
PUT    /api/story/edit/:id
DELETE /api/story/delete/:id
PUT    /api/story/update-is-favourite/:id
GET    /api/story/search
GET    /api/story/filter
```

### Images

```
POST   /api/story/upload-image
DELETE /api/story/delete-image
```

---

## 📊 Core Modules

### Authentication Module

- User Registration
- User Login
- JWT Authentication
- Protected Routes

### Travel Story Module

- Create Story
- Edit Story
- Delete Story
- Search Stories
- Filter Stories
- Favorite Stories

### Image Module

- Upload Images
- Delete Images

---

## 💡 Key Learnings

- Building RESTful APIs using Express.js
- JWT Authentication & Authorization
- Image Uploads using Multer
- MongoDB Data Modeling with Mongoose
- State Management using Redux Toolkit
- Full-Stack Application Deployment
- Responsive UI Development

---

## 👨‍💻 Author

**Mrinal Chaubey**

- GitHub: https://github.com/MrinalChaubey
- LinkedIn: https://www.linkedin.com/in/mrinal-chaubey-44a317290/

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates further development.

If you found this project helpful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates further development.
