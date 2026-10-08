import { v4 as uuidv4 } from "/node_modules/.vite/deps/uuid.js?v=6d598c74";
const KEYS = {
  USERS: "neuroedu_users",
  COURSES: "neuroedu_courses",
  ENROLLMENTS: "neuroedu_enrollments",
  PROGRESS: "neuroedu_progress",
  CURRENT_USER: "neuroedu_current_user"
};
const SEED_COURSES = [
  {
    id: "course-1",
    title: "Advanced React Patterns",
    description: "Master advanced React patterns including compound components, render props, hooks composition, and performance optimization techniques used in production applications.",
    thumbnail: "",
    category: "Development",
    published: true,
    price: 0,
    teacherId: "teacher-1",
    teacherName: "Sarah Chen",
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    lectures: [
      {
        id: "lec-1-1",
        title: "Compound Components Pattern",
        description: "Learn how to build flexible component APIs using the compound components pattern.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        duration: 1820,
        order: 1,
        courseId: "course-1",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "lec-1-2",
        title: "Render Props & HOCs",
        description: "Deep dive into render props and higher-order components for maximum reusability.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        duration: 2140,
        order: 2,
        courseId: "course-1",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "lec-1-3",
        title: "Custom Hooks Composition",
        description: "Build powerful custom hooks by composing smaller, focused hooks together.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        duration: 1560,
        order: 3,
        courseId: "course-1",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]
  },
  {
    id: "course-2",
    title: "System Design Fundamentals",
    description: "Learn to design scalable systems from scratch. Cover load balancing, caching, database sharding, and microservices architecture.",
    thumbnail: "",
    category: "Architecture",
    published: true,
    price: 0,
    teacherId: "teacher-1",
    teacherName: "Sarah Chen",
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    lectures: [
      {
        id: "lec-2-1",
        title: "Load Balancing Strategies",
        description: "Understanding different load balancing algorithms and when to use each.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        duration: 2400,
        order: 1,
        courseId: "course-2",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "lec-2-2",
        title: "Caching Patterns",
        description: "Redis, Memcached, CDN caching, and cache invalidation strategies.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        duration: 1980,
        order: 2,
        courseId: "course-2",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]
  },
  {
    id: "course-3",
    title: "AI/ML for Developers",
    description: "Practical machine learning for software engineers. Build and deploy ML models using Python, TensorFlow, and modern MLOps tools.",
    thumbnail: "",
    category: "AI & ML",
    published: true,
    price: 0,
    teacherId: "teacher-1",
    teacherName: "Dr. Alex Rivera",
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    lectures: [
      {
        id: "lec-3-1",
        title: "Neural Networks from Scratch",
        description: "Build a neural network from scratch to understand the fundamentals.",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        duration: 2700,
        order: 1,
        courseId: "course-3",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]
  }
];
function getItem(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}
function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function initializeStore() {
  const courses = getItem(KEYS.COURSES, []);
  if (courses.length === 0) {
    setItem(KEYS.COURSES, SEED_COURSES);
  }
}
initializeStore();
export function getCurrentUser() {
  return getItem(KEYS.CURRENT_USER, null);
}
export function login(email, password) {
  const users = getItem(KEYS.USERS, []);
  const user = users.find((u) => u.email === email);
  if (user) {
    setItem(KEYS.CURRENT_USER, user);
    return user;
  }
  return null;
}
export function register(name, email, password, role) {
  const users = getItem(KEYS.USERS, []);
  const existing = users.find((u) => u.email === email);
  if (existing) throw new Error("Email already registered");
  const user = {
    id: uuidv4(),
    email,
    name,
    role,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  users.push(user);
  setItem(KEYS.USERS, users);
  setItem(KEYS.CURRENT_USER, user);
  return user;
}
export function logout() {
  localStorage.removeItem(KEYS.CURRENT_USER);
}
export function getCourses() {
  return getItem(KEYS.COURSES, []);
}
export function getCourseById(id) {
  return getCourses().find((c) => c.id === id);
}
export function getCoursesByTeacher(teacherId) {
  return getCourses().filter((c) => c.teacherId === teacherId);
}
export function createCourse(course) {
  const courses = getCourses();
  const newCourse = {
    ...course,
    id: uuidv4(),
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    lectures: []
  };
  courses.push(newCourse);
  setItem(KEYS.COURSES, courses);
  return newCourse;
}
export function updateCourse(id, updates) {
  const courses = getCourses();
  const index = courses.findIndex((c) => c.id === id);
  if (index === -1) return void 0;
  courses[index] = { ...courses[index], ...updates };
  setItem(KEYS.COURSES, courses);
  return courses[index];
}
export function deleteCourse(id) {
  const courses = getCourses().filter((c) => c.id !== id);
  setItem(KEYS.COURSES, courses);
}
export function addLecture(courseId, lecture) {
  const courses = getCourses();
  const course = courses.find((c) => c.id === courseId);
  if (!course) throw new Error("Course not found");
  const newLecture = {
    ...lecture,
    id: uuidv4(),
    courseId,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  course.lectures.push(newLecture);
  setItem(KEYS.COURSES, courses);
  return newLecture;
}
export function deleteLecture(courseId, lectureId) {
  const courses = getCourses();
  const course = courses.find((c) => c.id === courseId);
  if (!course) return;
  course.lectures = course.lectures.filter((l) => l.id !== lectureId);
  setItem(KEYS.COURSES, courses);
}
export function getEnrollments(userId) {
  return getItem(KEYS.ENROLLMENTS, []).filter((e) => e.userId === userId);
}
export function enrollStudent(userId, courseId) {
  const enrollments = getItem(KEYS.ENROLLMENTS, []);
  const existing = enrollments.find((e) => e.userId === userId && e.courseId === courseId);
  if (existing) return existing;
  const enrollment = {
    id: uuidv4(),
    userId,
    courseId,
    enrolledAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  enrollments.push(enrollment);
  setItem(KEYS.ENROLLMENTS, enrollments);
  return enrollment;
}
export function isEnrolled(userId, courseId) {
  return getEnrollments(userId).some((e) => e.courseId === courseId);
}
export function getProgress(userId) {
  return getItem(KEYS.PROGRESS, []).filter((p) => p.userId === userId);
}
export function updateProgress(userId, lectureId, position, completed) {
  const progress = getItem(KEYS.PROGRESS, []);
  const existing = progress.findIndex((p) => p.userId === userId && p.lectureId === lectureId);
  const entry = {
    id: existing >= 0 ? progress[existing].id : uuidv4(),
    userId,
    lectureId,
    completed,
    lastPosition: position,
    watchedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (existing >= 0) {
    progress[existing] = entry;
  } else {
    progress.push(entry);
  }
  setItem(KEYS.PROGRESS, progress);
  return entry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5ldXJvLUVkdSBPUyAtIERhdGEgU3RvcmUgKGxvY2FsU3RvcmFnZS1iYXNlZCBmb3IgUGhhc2UgMSlcbi8vIFJlcGxhY2Ugd2l0aCBQcmlzbWEgQVBJIGNhbGxzIHdoZW4gZGVwbG95aW5nIHdpdGggUG9zdGdyZVNRTFxuXG5pbXBvcnQgeyBVc2VyLCBDb3Vyc2UsIExlY3R1cmUsIEVucm9sbG1lbnQsIExlY3R1cmVQcm9ncmVzcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgdHlwZSB7IFVzZXIsIENvdXJzZSwgTGVjdHVyZSwgRW5yb2xsbWVudCwgTGVjdHVyZVByb2dyZXNzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBLRVlTID0ge1xuICBVU0VSUzogJ25ldXJvZWR1X3VzZXJzJyxcbiAgQ09VUlNFUzogJ25ldXJvZWR1X2NvdXJzZXMnLFxuICBFTlJPTExNRU5UUzogJ25ldXJvZWR1X2Vucm9sbG1lbnRzJyxcbiAgUFJPR1JFU1M6ICduZXVyb2VkdV9wcm9ncmVzcycsXG4gIENVUlJFTlRfVVNFUjogJ25ldXJvZWR1X2N1cnJlbnRfdXNlcicsXG59O1xuXG4vLyBTZWVkIGRhdGEgZm9yIGRlbW9cbmNvbnN0IFNFRURfQ09VUlNFUzogQ291cnNlW10gPSBbXG4gIHtcbiAgICBpZDogJ2NvdXJzZS0xJyxcbiAgICB0aXRsZTogJ0FkdmFuY2VkIFJlYWN0IFBhdHRlcm5zJyxcbiAgICBkZXNjcmlwdGlvbjogJ01hc3RlciBhZHZhbmNlZCBSZWFjdCBwYXR0ZXJucyBpbmNsdWRpbmcgY29tcG91bmQgY29tcG9uZW50cywgcmVuZGVyIHByb3BzLCBob29rcyBjb21wb3NpdGlvbiwgYW5kIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiB0ZWNobmlxdWVzIHVzZWQgaW4gcHJvZHVjdGlvbiBhcHBsaWNhdGlvbnMuJyxcbiAgICB0aHVtYm5haWw6ICcnLFxuICAgIGNhdGVnb3J5OiAnRGV2ZWxvcG1lbnQnLFxuICAgIHB1Ymxpc2hlZDogdHJ1ZSxcbiAgICBwcmljZTogMCxcbiAgICB0ZWFjaGVySWQ6ICd0ZWFjaGVyLTEnLFxuICAgIHRlYWNoZXJOYW1lOiAnU2FyYWggQ2hlbicsXG4gICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgbGVjdHVyZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdsZWMtMS0xJyxcbiAgICAgICAgdGl0bGU6ICdDb21wb3VuZCBDb21wb25lbnRzIFBhdHRlcm4nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xlYXJuIGhvdyB0byBidWlsZCBmbGV4aWJsZSBjb21wb25lbnQgQVBJcyB1c2luZyB0aGUgY29tcG91bmQgY29tcG9uZW50cyBwYXR0ZXJuLicsXG4gICAgICAgIHZpZGVvVXJsOiAnaHR0cHM6Ly9jb21tb25kYXRhc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9ndHYtdmlkZW9zLWJ1Y2tldC9zYW1wbGUvQmlnQnVja0J1bm55Lm1wNCcsXG4gICAgICAgIGR1cmF0aW9uOiAxODIwLFxuICAgICAgICBvcmRlcjogMSxcbiAgICAgICAgY291cnNlSWQ6ICdjb3Vyc2UtMScsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdsZWMtMS0yJyxcbiAgICAgICAgdGl0bGU6ICdSZW5kZXIgUHJvcHMgJiBIT0NzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWVwIGRpdmUgaW50byByZW5kZXIgcHJvcHMgYW5kIGhpZ2hlci1vcmRlciBjb21wb25lbnRzIGZvciBtYXhpbXVtIHJldXNhYmlsaXR5LicsXG4gICAgICAgIHZpZGVvVXJsOiAnaHR0cHM6Ly9jb21tb25kYXRhc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9ndHYtdmlkZW9zLWJ1Y2tldC9zYW1wbGUvRWxlcGhhbnRzRHJlYW0ubXA0JyxcbiAgICAgICAgZHVyYXRpb246IDIxNDAsXG4gICAgICAgIG9yZGVyOiAyLFxuICAgICAgICBjb3Vyc2VJZDogJ2NvdXJzZS0xJyxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2xlYy0xLTMnLFxuICAgICAgICB0aXRsZTogJ0N1c3RvbSBIb29rcyBDb21wb3NpdGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQnVpbGQgcG93ZXJmdWwgY3VzdG9tIGhvb2tzIGJ5IGNvbXBvc2luZyBzbWFsbGVyLCBmb2N1c2VkIGhvb2tzIHRvZ2V0aGVyLicsXG4gICAgICAgIHZpZGVvVXJsOiAnaHR0cHM6Ly9jb21tb25kYXRhc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9ndHYtdmlkZW9zLWJ1Y2tldC9zYW1wbGUvRm9yQmlnZ2VyQmxhemVzLm1wNCcsXG4gICAgICAgIGR1cmF0aW9uOiAxNTYwLFxuICAgICAgICBvcmRlcjogMyxcbiAgICAgICAgY291cnNlSWQ6ICdjb3Vyc2UtMScsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6ICdjb3Vyc2UtMicsXG4gICAgdGl0bGU6ICdTeXN0ZW0gRGVzaWduIEZ1bmRhbWVudGFscycsXG4gICAgZGVzY3JpcHRpb246ICdMZWFybiB0byBkZXNpZ24gc2NhbGFibGUgc3lzdGVtcyBmcm9tIHNjcmF0Y2guIENvdmVyIGxvYWQgYmFsYW5jaW5nLCBjYWNoaW5nLCBkYXRhYmFzZSBzaGFyZGluZywgYW5kIG1pY3Jvc2VydmljZXMgYXJjaGl0ZWN0dXJlLicsXG4gICAgdGh1bWJuYWlsOiAnJyxcbiAgICBjYXRlZ29yeTogJ0FyY2hpdGVjdHVyZScsXG4gICAgcHVibGlzaGVkOiB0cnVlLFxuICAgIHByaWNlOiAwLFxuICAgIHRlYWNoZXJJZDogJ3RlYWNoZXItMScsXG4gICAgdGVhY2hlck5hbWU6ICdTYXJhaCBDaGVuJyxcbiAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICBsZWN0dXJlczogW1xuICAgICAge1xuICAgICAgICBpZDogJ2xlYy0yLTEnLFxuICAgICAgICB0aXRsZTogJ0xvYWQgQmFsYW5jaW5nIFN0cmF0ZWdpZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1VuZGVyc3RhbmRpbmcgZGlmZmVyZW50IGxvYWQgYmFsYW5jaW5nIGFsZ29yaXRobXMgYW5kIHdoZW4gdG8gdXNlIGVhY2guJyxcbiAgICAgICAgdmlkZW9Vcmw6ICdodHRwczovL2NvbW1vbmRhdGFzdG9yYWdlLmdvb2dsZWFwaXMuY29tL2d0di12aWRlb3MtYnVja2V0L3NhbXBsZS9Gb3JCaWdnZXJFc2NhcGVzLm1wNCcsXG4gICAgICAgIGR1cmF0aW9uOiAyNDAwLFxuICAgICAgICBvcmRlcjogMSxcbiAgICAgICAgY291cnNlSWQ6ICdjb3Vyc2UtMicsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdsZWMtMi0yJyxcbiAgICAgICAgdGl0bGU6ICdDYWNoaW5nIFBhdHRlcm5zJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdSZWRpcywgTWVtY2FjaGVkLCBDRE4gY2FjaGluZywgYW5kIGNhY2hlIGludmFsaWRhdGlvbiBzdHJhdGVnaWVzLicsXG4gICAgICAgIHZpZGVvVXJsOiAnaHR0cHM6Ly9jb21tb25kYXRhc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9ndHYtdmlkZW9zLWJ1Y2tldC9zYW1wbGUvRm9yQmlnZ2VyRnVuLm1wNCcsXG4gICAgICAgIGR1cmF0aW9uOiAxOTgwLFxuICAgICAgICBvcmRlcjogMixcbiAgICAgICAgY291cnNlSWQ6ICdjb3Vyc2UtMicsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6ICdjb3Vyc2UtMycsXG4gICAgdGl0bGU6ICdBSS9NTCBmb3IgRGV2ZWxvcGVycycsXG4gICAgZGVzY3JpcHRpb246ICdQcmFjdGljYWwgbWFjaGluZSBsZWFybmluZyBmb3Igc29mdHdhcmUgZW5naW5lZXJzLiBCdWlsZCBhbmQgZGVwbG95IE1MIG1vZGVscyB1c2luZyBQeXRob24sIFRlbnNvckZsb3csIGFuZCBtb2Rlcm4gTUxPcHMgdG9vbHMuJyxcbiAgICB0aHVtYm5haWw6ICcnLFxuICAgIGNhdGVnb3J5OiAnQUkgJiBNTCcsXG4gICAgcHVibGlzaGVkOiB0cnVlLFxuICAgIHByaWNlOiAwLFxuICAgIHRlYWNoZXJJZDogJ3RlYWNoZXItMScsXG4gICAgdGVhY2hlck5hbWU6ICdEci4gQWxleCBSaXZlcmEnLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIGxlY3R1cmVzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnbGVjLTMtMScsXG4gICAgICAgIHRpdGxlOiAnTmV1cmFsIE5ldHdvcmtzIGZyb20gU2NyYXRjaCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQnVpbGQgYSBuZXVyYWwgbmV0d29yayBmcm9tIHNjcmF0Y2ggdG8gdW5kZXJzdGFuZCB0aGUgZnVuZGFtZW50YWxzLicsXG4gICAgICAgIHZpZGVvVXJsOiAnaHR0cHM6Ly9jb21tb25kYXRhc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9ndHYtdmlkZW9zLWJ1Y2tldC9zYW1wbGUvRm9yQmlnZ2VySm95cmlkZXMubXA0JyxcbiAgICAgICAgZHVyYXRpb246IDI3MDAsXG4gICAgICAgIG9yZGVyOiAxLFxuICAgICAgICBjb3Vyc2VJZDogJ2NvdXJzZS0zJyxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBnZXRJdGVtPFQ+KGtleTogc3RyaW5nLCBmYWxsYmFjazogVCk6IFQge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IGZhbGxiYWNrO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsbGJhY2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0SXRlbTxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xufVxuXG4vLyBJbml0aWFsaXplIHNlZWQgZGF0YVxuZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JlKCkge1xuICBjb25zdCBjb3Vyc2VzID0gZ2V0SXRlbTxDb3Vyc2VbXT4oS0VZUy5DT1VSU0VTLCBbXSk7XG4gIGlmIChjb3Vyc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHNldEl0ZW0oS0VZUy5DT1VSU0VTLCBTRUVEX0NPVVJTRVMpO1xuICB9XG59XG5cbmluaXRpYWxpemVTdG9yZSgpO1xuXG4vLyBBdXRoXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKTogVXNlciB8IG51bGwge1xuICByZXR1cm4gZ2V0SXRlbTxVc2VyIHwgbnVsbD4oS0VZUy5DVVJSRU5UX1VTRVIsIG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFVzZXIgfCBudWxsIHtcbiAgY29uc3QgdXNlcnMgPSBnZXRJdGVtPFVzZXJbXT4oS0VZUy5VU0VSUywgW10pO1xuICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUuZW1haWwgPT09IGVtYWlsKTtcbiAgaWYgKHVzZXIpIHtcbiAgICBzZXRJdGVtKEtFWVMuQ1VSUkVOVF9VU0VSLCB1c2VyKTtcbiAgICByZXR1cm4gdXNlcjtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgcm9sZTogJ1NUVURFTlQnIHwgJ1RFQUNIRVInKTogVXNlciB7XG4gIGNvbnN0IHVzZXJzID0gZ2V0SXRlbTxVc2VyW10+KEtFWVMuVVNFUlMsIFtdKTtcbiAgY29uc3QgZXhpc3RpbmcgPSB1c2Vycy5maW5kKHUgPT4gdS5lbWFpbCA9PT0gZW1haWwpO1xuICBpZiAoZXhpc3RpbmcpIHRocm93IG5ldyBFcnJvcignRW1haWwgYWxyZWFkeSByZWdpc3RlcmVkJyk7XG4gIFxuICBjb25zdCB1c2VyOiBVc2VyID0ge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICBlbWFpbCxcbiAgICBuYW1lLFxuICAgIHJvbGUsXG4gICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gIH07XG4gIHVzZXJzLnB1c2godXNlcik7XG4gIHNldEl0ZW0oS0VZUy5VU0VSUywgdXNlcnMpO1xuICBzZXRJdGVtKEtFWVMuQ1VSUkVOVF9VU0VSLCB1c2VyKTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKTogdm9pZCB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEtFWVMuQ1VSUkVOVF9VU0VSKTtcbn1cblxuLy8gQ291cnNlc1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvdXJzZXMoKTogQ291cnNlW10ge1xuICByZXR1cm4gZ2V0SXRlbTxDb3Vyc2VbXT4oS0VZUy5DT1VSU0VTLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3Vyc2VCeUlkKGlkOiBzdHJpbmcpOiBDb3Vyc2UgfCB1bmRlZmluZWQge1xuICByZXR1cm4gZ2V0Q291cnNlcygpLmZpbmQoYyA9PiBjLmlkID09PSBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3Vyc2VzQnlUZWFjaGVyKHRlYWNoZXJJZDogc3RyaW5nKTogQ291cnNlW10ge1xuICByZXR1cm4gZ2V0Q291cnNlcygpLmZpbHRlcihjID0+IGMudGVhY2hlcklkID09PSB0ZWFjaGVySWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ291cnNlKGNvdXJzZTogT21pdDxDb3Vyc2UsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdsZWN0dXJlcyc+KTogQ291cnNlIHtcbiAgY29uc3QgY291cnNlcyA9IGdldENvdXJzZXMoKTtcbiAgY29uc3QgbmV3Q291cnNlOiBDb3Vyc2UgPSB7XG4gICAgLi4uY291cnNlLFxuICAgIGlkOiB1dWlkdjQoKSxcbiAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICBsZWN0dXJlczogW10sXG4gIH07XG4gIGNvdXJzZXMucHVzaChuZXdDb3Vyc2UpO1xuICBzZXRJdGVtKEtFWVMuQ09VUlNFUywgY291cnNlcyk7XG4gIHJldHVybiBuZXdDb3Vyc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb3Vyc2UoaWQ6IHN0cmluZywgdXBkYXRlczogUGFydGlhbDxDb3Vyc2U+KTogQ291cnNlIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgY291cnNlcyA9IGdldENvdXJzZXMoKTtcbiAgY29uc3QgaW5kZXggPSBjb3Vyc2VzLmZpbmRJbmRleChjID0+IGMuaWQgPT09IGlkKTtcbiAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgY291cnNlc1tpbmRleF0gPSB7IC4uLmNvdXJzZXNbaW5kZXhdLCAuLi51cGRhdGVzIH07XG4gIHNldEl0ZW0oS0VZUy5DT1VSU0VTLCBjb3Vyc2VzKTtcbiAgcmV0dXJuIGNvdXJzZXNbaW5kZXhdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ291cnNlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgY291cnNlcyA9IGdldENvdXJzZXMoKS5maWx0ZXIoYyA9PiBjLmlkICE9PSBpZCk7XG4gIHNldEl0ZW0oS0VZUy5DT1VSU0VTLCBjb3Vyc2VzKTtcbn1cblxuLy8gTGVjdHVyZXNcbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWN0dXJlKGNvdXJzZUlkOiBzdHJpbmcsIGxlY3R1cmU6IE9taXQ8TGVjdHVyZSwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ2NvdXJzZUlkJz4pOiBMZWN0dXJlIHtcbiAgY29uc3QgY291cnNlcyA9IGdldENvdXJzZXMoKTtcbiAgY29uc3QgY291cnNlID0gY291cnNlcy5maW5kKGMgPT4gYy5pZCA9PT0gY291cnNlSWQpO1xuICBpZiAoIWNvdXJzZSkgdGhyb3cgbmV3IEVycm9yKCdDb3Vyc2Ugbm90IGZvdW5kJyk7XG4gIFxuICBjb25zdCBuZXdMZWN0dXJlOiBMZWN0dXJlID0ge1xuICAgIC4uLmxlY3R1cmUsXG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIGNvdXJzZUlkLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICB9O1xuICBjb3Vyc2UubGVjdHVyZXMucHVzaChuZXdMZWN0dXJlKTtcbiAgc2V0SXRlbShLRVlTLkNPVVJTRVMsIGNvdXJzZXMpO1xuICByZXR1cm4gbmV3TGVjdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxlY3R1cmUoY291cnNlSWQ6IHN0cmluZywgbGVjdHVyZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgY291cnNlcyA9IGdldENvdXJzZXMoKTtcbiAgY29uc3QgY291cnNlID0gY291cnNlcy5maW5kKGMgPT4gYy5pZCA9PT0gY291cnNlSWQpO1xuICBpZiAoIWNvdXJzZSkgcmV0dXJuO1xuICBjb3Vyc2UubGVjdHVyZXMgPSBjb3Vyc2UubGVjdHVyZXMuZmlsdGVyKGwgPT4gbC5pZCAhPT0gbGVjdHVyZUlkKTtcbiAgc2V0SXRlbShLRVlTLkNPVVJTRVMsIGNvdXJzZXMpO1xufVxuXG4vLyBFbnJvbGxtZW50c1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVucm9sbG1lbnRzKHVzZXJJZDogc3RyaW5nKTogRW5yb2xsbWVudFtdIHtcbiAgcmV0dXJuIGdldEl0ZW08RW5yb2xsbWVudFtdPihLRVlTLkVOUk9MTE1FTlRTLCBbXSkuZmlsdGVyKGUgPT4gZS51c2VySWQgPT09IHVzZXJJZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnJvbGxTdHVkZW50KHVzZXJJZDogc3RyaW5nLCBjb3Vyc2VJZDogc3RyaW5nKTogRW5yb2xsbWVudCB7XG4gIGNvbnN0IGVucm9sbG1lbnRzID0gZ2V0SXRlbTxFbnJvbGxtZW50W10+KEtFWVMuRU5ST0xMTUVOVFMsIFtdKTtcbiAgY29uc3QgZXhpc3RpbmcgPSBlbnJvbGxtZW50cy5maW5kKGUgPT4gZS51c2VySWQgPT09IHVzZXJJZCAmJiBlLmNvdXJzZUlkID09PSBjb3Vyc2VJZCk7XG4gIGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nO1xuICBcbiAgY29uc3QgZW5yb2xsbWVudDogRW5yb2xsbWVudCA9IHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgdXNlcklkLFxuICAgIGNvdXJzZUlkLFxuICAgIGVucm9sbGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfTtcbiAgZW5yb2xsbWVudHMucHVzaChlbnJvbGxtZW50KTtcbiAgc2V0SXRlbShLRVlTLkVOUk9MTE1FTlRTLCBlbnJvbGxtZW50cyk7XG4gIHJldHVybiBlbnJvbGxtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbnJvbGxlZCh1c2VySWQ6IHN0cmluZywgY291cnNlSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0RW5yb2xsbWVudHModXNlcklkKS5zb21lKGUgPT4gZS5jb3Vyc2VJZCA9PT0gY291cnNlSWQpO1xufVxuXG4vLyBQcm9ncmVzc1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2dyZXNzKHVzZXJJZDogc3RyaW5nKTogTGVjdHVyZVByb2dyZXNzW10ge1xuICByZXR1cm4gZ2V0SXRlbTxMZWN0dXJlUHJvZ3Jlc3NbXT4oS0VZUy5QUk9HUkVTUywgW10pLmZpbHRlcihwID0+IHAudXNlcklkID09PSB1c2VySWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3ModXNlcklkOiBzdHJpbmcsIGxlY3R1cmVJZDogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyLCBjb21wbGV0ZWQ6IGJvb2xlYW4pOiBMZWN0dXJlUHJvZ3Jlc3Mge1xuICBjb25zdCBwcm9ncmVzcyA9IGdldEl0ZW08TGVjdHVyZVByb2dyZXNzW10+KEtFWVMuUFJPR1JFU1MsIFtdKTtcbiAgY29uc3QgZXhpc3RpbmcgPSBwcm9ncmVzcy5maW5kSW5kZXgocCA9PiBwLnVzZXJJZCA9PT0gdXNlcklkICYmIHAubGVjdHVyZUlkID09PSBsZWN0dXJlSWQpO1xuICBcbiAgY29uc3QgZW50cnk6IExlY3R1cmVQcm9ncmVzcyA9IHtcbiAgICBpZDogZXhpc3RpbmcgPj0gMCA/IHByb2dyZXNzW2V4aXN0aW5nXS5pZCA6IHV1aWR2NCgpLFxuICAgIHVzZXJJZCxcbiAgICBsZWN0dXJlSWQsXG4gICAgY29tcGxldGVkLFxuICAgIGxhc3RQb3NpdGlvbjogcG9zaXRpb24sXG4gICAgd2F0Y2hlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gIH07XG4gIFxuICBpZiAoZXhpc3RpbmcgPj0gMCkge1xuICAgIHByb2dyZXNzW2V4aXN0aW5nXSA9IGVudHJ5O1xuICB9IGVsc2Uge1xuICAgIHByb2dyZXNzLnB1c2goZW50cnkpO1xuICB9XG4gIHNldEl0ZW0oS0VZUy5QUk9HUkVTUywgcHJvZ3Jlc3MpO1xuICByZXR1cm4gZW50cnk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUlBLFNBQVMsTUFBTSxjQUFjO0FBSTdCLE1BQU0sT0FBTztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsYUFBYTtBQUFBLEVBQ2IsVUFBVTtBQUFBLEVBQ1YsY0FBYztBQUNoQjtBQUdBLE1BQU0sZUFBeUI7QUFBQSxFQUM3QjtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsV0FBVztBQUFBLElBQ1gs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