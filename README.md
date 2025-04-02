# 📅 Daily Planner

## Overview
A web-based daily planner inspired by the **AREA BOOK** used in The Church of Jesus Christ of Latter-day Saints, adapted for general productivity. This tool helps users schedule, track, and reflect on their daily activities.

## 🚀 Features
- **Appointments & Tasks**: Schedule tasks, meetings, and events.
- **Daily/Weekly/Monthly Views**: Organized calendar layout.
- **Goals & Reflections**: Track spiritual, personal, or professional goals.
- **Progress Tracking**: Monitor completed tasks and habits.
- **Scripture & Inspirational Quotes**: Daily scripture suggestions.
- **Cloud Syncing**: Access planner from any device.
- **Collaboration (Optional)**: Share schedules with others.

## 🛠️ Tech Stack
- **Frontend**: React (Next.js) + Tailwind CSS
- **Backend**: Firebase (Firestore & Authentication)
- **Hosting**: Firebase Hosting (or Vercel for frontend)
- **Authentication**: Google Sign-In / Email-Password Auth

## 📂 Project Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/daily-planner.git
cd daily-planner
```

### 2️⃣ Install Dependencies
```bash
yarn install  # or npm install
```

### 3️⃣ Setup Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a project and enable **Firestore & Authentication**
3. Copy your Firebase config and create a `.env.local` file:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4️⃣ Run the App
```bash
yarn dev  # or npm run dev
```

## 👥 Team Members
- **Takudzwa Mutamburigwa**
- **[Member 2]**
- **[Member 3]**
- **[Member 4]**

## 📌 Roadmap
- [ ] Set up Firebase authentication
- [ ] Create the calendar UI
- [ ] Implement task management
- [ ] Add scripture & goal tracking

## 📝 License
MIT License
