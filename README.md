# Neuro-Edu OS — Phase 3 (Final)

> Complete Learning Management System with Proctoring, Gamification, Offline Support, Certificates & Bilingual UI.

![Phase 3](https://img.shields.io/badge/Phase-3_Final-purple) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![PWA](https://img.shields.io/badge/PWA-Ready-orange) ![Bilingual](https://img.shields.io/badge/Bilingual-EN%2FUR-green)

## 🧠 Overview

Neuro-Edu OS is a complete, production-ready learning platform with all features working 100% frontend-only.

### ✨ All Features

| Phase | Feature | Status |
|-------|---------|--------|
| 1 | Premium Dark Landing Page (Linear-inspired) | ✅ |
| 1 | Teacher Dashboard (Courses + Lectures) | ✅ |
| 1 | Student Dashboard (Browse + Enroll) | ✅ |
| 1 | HD Video Player with Controls | ✅ |
| 1 | Progress Tracking | ✅ |
| 2 | Proctored Quiz System (Anti-cheating) | ✅ |
| 2 | Gamification Engine (XP, Streaks, Levels) | ✅ |
| 2 | Offline PWA (Dexie.js IndexedDB) | ✅ |
| 3 | WhatsApp Parental Reports | ✅ |
| 3 | Parent Portal | ✅ |
| 3 | Urdu Language Support (Bilingual) | ✅ |
| 3 | AI Certificate Generator (Canvas) | ✅ |
| 3 | PWA Manifest + Service Worker | ✅ |
| 3 | Fully Responsive + Footer | ✅ |

## 🚀 Quick Start

### 📥 Download Project

**Option 1: Big Red Button (Recommended)**
- Click the **"📦 Download All Source Files (ZIP)"** button on the landing page
- Instantly downloads all 30 files as `neuro-edu-os.zip`

**Option 2: Direct Link**
- Visit `/download-zip.html` on your deployed site
- Auto-generates and downloads the ZIP file

**Option 3: File Explorer**
- Visit `/explorer.html` to browse and download individual files
- Or click "Download All as ZIP" button

### 🛠️ Run Locally

```bash
# Extract the ZIP file
unzip neuro-edu-os.zip
cd neuro-edu-os

# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:3000
```

**No database needed!** Everything runs in the browser.

## 📁 Project Structure

```
├── public/
│   ├── manifest.json           # PWA manifest
│   └── sw.js                   # Service worker
├── src/
│   ├── components/
│   │   ├── LanguageToggle.tsx  # EN/اردو switcher
│   │   └── Footer.tsx          # Reusable footer
│   ├── pages/
│   │   ├── Landing.tsx         # Premium landing page
│   │   ├── Login.tsx           # Auth + Parent Portal link
│   │   ├── TeacherDashboard.tsx # Course management + WhatsApp reports
│   │   ├── StudentDashboard.tsx # Gamification bar + certificates
│   │   ├── CourseDetail.tsx    # Video player
│   │   ├── ProctoredQuiz.tsx   # Anti-cheating quiz
│   │   ├── OfflineManager.tsx  # Downloads + attendance
│   │   ├── ParentPortal.tsx    # 🆕 Parent view + WhatsApp
│   │   └── CertificateGenerator.tsx # 🆕 Canvas certificates
│   ├── lib/
│   │   ├── store.ts            # localStorage data layer
│   │   ├── db.ts               # Dexie.js IndexedDB
│   │   ├── gamification.ts     # XP, streaks, badges
│   │   └── i18n.ts             # 🆕 English + Urdu translations
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── prisma/
│   └── schema.prisma           # Future backend schema
├── .env.example                # Future env template
└── README.md
```

## 🛡️ Proctored Quiz System

- **Tab Switch Detection**: `document.visibilitychange` API
- **Counter**: "Tab Switch: X/3" displayed in real-time
- **Auto-Submit**: After 3 switches → flagged automatically
- **Fullscreen Enforcement**: Required before starting
- **Result Analysis**: Weak topic identification, per-topic breakdown
- **XP Rewards**: +10 XP per correct answer + confetti

## 🎮 Gamification Engine

| Element | Details |
|---------|---------|
| **XP** | +10 per correct quiz answer |
| **Streak** | Daily login tracking (resets if missed) |
| **Levels** | 15 levels (0 → 2400 XP) |
| **Leagues** | Bronze → Silver → Gold → Diamond → Legend |
| **Badges** | 9 unlockable achievement badges |
| **Confetti** | Canvas confetti on pass & level-up |

## 📱 Offline PWA

- **Dexie.js** IndexedDB for offline storage
- **Download courses** for offline video access
- **Attendance tracking** with sync status
- **Service Worker** for caching
- **Installable** on mobile devices

## 💬 WhatsApp Parental Reports

- **Parent Portal**: View child's XP, streak, attendance, flagged quizzes
- **Generate Report**: Creates formatted WhatsApp message
- **Auto-open**: `wa.me/?text=...` link
- **Teacher Dashboard**: "Send Report to Parent" button
- **Message Format**:
  ```
  Assalam-o-Alaikum,
  Your child [Name] has:
  • XP: X
  • Streak: Y days 🔥
  • Weak Topic: Z
  • Flagged: N
  From Neuro-Edu OS
  ```

## 🌐 Bilingual Support (EN / اردو)

- **Language Toggle**: Globe icon in navbar
- **Full Translation**: All UI text in both languages
- **RTL Support**: Automatic direction switching for Urdu
- **Noto Nastaliq Urdu**: Beautiful Urdu typography
- **Persistent**: Language choice saved in localStorage

## 🎓 AI Certificate Generator

- **100% Frontend**: HTML5 Canvas (no API needed)
- **Premium Design**: Gradient background, decorative borders, logo
- **Dynamic Content**: Student name, course title, date, unique ID
- **Download**: `canvas.toDataURL()` → PNG file
- **Trigger**: Shows "Download Certificate" button when course 100% complete

## 🎨 Premium UI Features

- Dark mode with glass morphism
- Framer Motion animations throughout
- Custom scrollbars & gradient text
- Responsive on all devices
- PWA installable
- Footer with "Built with Neuro-Edu OS"

## 🔮 Future Enhancements (Phase 4+)

- [ ] PostgreSQL + Prisma backend
- [ ] AI proctoring (face/eye tracking)
- [ ] Stripe payment integration
- [ ] Real-time collaboration
- [ ] Push notifications
- [ ] Video transcoding pipeline

## 📝 License

MIT © 2026 Neuro-Edu OS

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, Dexie.js, and Framer Motion**
