import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/TeacherDashboard.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/pages/TeacherDashboard.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=620eb88c"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=d53b2b6e";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=6e0f127a";
import {
  Brain,
  Plus,
  BookOpen,
  Video,
  Trash2,
  LogOut,
  Eye,
  EyeOff,
  ChevronDown,
  Upload,
  LayoutDashboard,
  X,
  Check,
  Users,
  MessageCircle
} from "/node_modules/.vite/deps/lucide-react.js?v=6a865639";
import { getCoursesByTeacher, createCourse, addLecture, deleteCourse, deleteLecture, logout } from "/src/lib/store.ts";
import { t } from "/src/lib/i18n.ts";
import LanguageToggle from "/src/components/LanguageToggle.tsx";
import Footer from "/src/components/Footer.tsx";
export default function TeacherDashboard({ user, language, onLanguageChange }) {
  _s();
  const tr = t(language);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [showLectureForm, setShowLectureForm] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseCategory, setCourseCategory] = useState("Development");
  const [lectureTitle, setLectureTitle] = useState("");
  const [lectureDescription, setLectureDescription] = useState("");
  const [lectureVideoUrl, setLectureVideoUrl] = useState("");
  useEffect(() => {
    loadCourses();
  }, []);
  const loadCourses = () => {
    setCourses(getCoursesByTeacher(user.id));
  };
  const handleCreateCourse = (e) => {
    e.preventDefault();
    if (!courseTitle.trim()) return;
    createCourse({
      title: courseTitle,
      description: courseDescription,
      category: courseCategory,
      published: true,
      price: 0,
      teacherId: user.id,
      teacherName: user.name
    });
    setCourseTitle("");
    setCourseDescription("");
    setCourseCategory("Development");
    setShowCourseForm(false);
    loadCourses();
  };
  const handleAddLecture = (e, courseId) => {
    e.preventDefault();
    if (!lectureTitle.trim() || !lectureVideoUrl.trim()) return;
    const course = courses.find((c) => c.id === courseId);
    const order = course ? course.lectures.length + 1 : 1;
    addLecture(courseId, {
      title: lectureTitle,
      description: lectureDescription,
      videoUrl: lectureVideoUrl,
      duration: 0,
      order
    });
    setLectureTitle("");
    setLectureDescription("");
    setLectureVideoUrl("");
    setShowLectureForm(null);
    loadCourses();
  };
  const handleDeleteCourse = (courseId) => {
    if (confirm("Delete this course and all its lectures?")) {
      deleteCourse(courseId);
      loadCourses();
    }
  };
  const handleDeleteLecture = (courseId, lectureId) => {
    if (confirm("Delete this lecture?")) {
      deleteLecture(courseId, lectureId);
      loadCourses();
    }
  };
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const categories = ["Development", "Design", "Business", "Marketing", "AI & ML", "Architecture", "Data Science"];
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 grid-bg pointer-events-none" }, void 0, false, {
      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 glass border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: () => navigate("/"), className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Brain, { className: "w-5 h-5 text-white" }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 142,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-bold hidden sm:block", children: "Neuro-Edu OS" }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 144,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 140,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-amber-500/10 text-amber-300 rounded-full border border-amber-500/20", children: "Teacher" }, void 0, false, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV(LanguageToggle, { language, onLanguageChange }, void 0, false, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-surface-200 hidden sm:block", children: [
          "👨‍🏫 ",
          user.name
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => navigate("/parent"),
            className: "p-2 rounded-lg text-surface-200 hover:text-white hover:bg-white/5 transition-all",
            title: "Parent Portal",
            children: /* @__PURE__ */ jsxDEV(Users, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/workspace/src/pages/TeacherDashboard.tsx",
              lineNumber: 159,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 154,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: handleLogout,
            className: "p-2 rounded-lg text-surface-200 hover:text-white hover:bg-white/5 transition-all",
            children: /* @__PURE__ */ jsxDEV(LogOut, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/workspace/src/pages/TeacherDashboard.tsx",
              lineNumber: 165,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 161,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
      lineNumber: 138,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl sm:text-3xl font-bold", children: "Teacher Dashboard" }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 177,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200 mt-1", children: "Manage your courses and lectures" }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 178,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowCourseForm(true),
            className: "px-4 py-2.5 text-sm font-medium bg-brand-600 hover:bg-brand-500 rounded-xl transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-brand-600/20",
            children: [
              /* @__PURE__ */ jsxDEV(Plus, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                lineNumber: 184,
                columnNumber: 13
              }, this),
              "New Course"
            ]
          },
          void 0,
          true,
          {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 180,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-surface-800/30 border border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-5 h-5 text-blue-400" }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 194,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 193,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: courses.length }, void 0, false, {
              fileName: "/workspace/src/pages/TeacherDashboard.tsx",
              lineNumber: 197,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200", children: "Total Courses" }, void 0, false, {
              fileName: "/workspace/src/pages/TeacherDashboard.tsx",
              lineNumber: 198,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 196,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-surface-800/30 border border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Video, { className: "w-5 h-5 text-green-400" }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: courses.reduce((sum, c) => sum + c.lectures.length, 0) }, void 0, false, {
              fileName: "/workspace/src/pages/TeacherDashboard.tsx",
              lineNumber: 208,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200", children: "Total Lectures" }, void 0, false, {
              fileName: "/workspace/src/pages/TeacherDashboard.tsx",
              lineNumber: 209,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-surface-800/30 border border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(LayoutDashboard, { className: "w-5 h-5 text-purple-400" }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 216,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 215,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: courses.filter((c) => c.published).length }, void 0, false, {
              fileName: "/workspace/src/pages/TeacherDashboard.tsx",
              lineNumber: 219,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200", children: "Published" }, void 0, false, {
              fileName: "/workspace/src/pages/TeacherDashboard.tsx",
              lineNumber: 220,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 218,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 214,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 213,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: courses.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-16 rounded-2xl border border-white/5 bg-surface-800/20", children: [
        /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-12 h-12 text-surface-200/30 mx-auto mb-4" }, void 0, false, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 230,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium text-surface-200 mb-2", children: "No courses yet" }, void 0, false, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 231,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200/60 mb-4", children: "Create your first course to get started" }, void 0, false, {
          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
          lineNumber: 232,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowCourseForm(true),
            className: "px-4 py-2 text-sm font-medium bg-brand-600 hover:bg-brand-500 rounded-lg transition-all",
            children: "Create Course"
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 233,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
        lineNumber: 229,
        columnNumber: 11
      }, this) : courses.map(
        (course) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            layout: true,
            className: "rounded-2xl border border-white/5 bg-surface-800/30 overflow-hidden",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-5", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20", children: course.category }, void 0, false, {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 252,
                      columnNumber: 25
                    }, this),
                    course.published ? /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium bg-green-500/10 text-green-300 rounded-full border border-green-500/20", children: [
                      /* @__PURE__ */ jsxDEV(Eye, { className: "w-2.5 h-2.5" }, void 0, false, {
                        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                        lineNumber: 257,
                        columnNumber: 29
                      }, this),
                      " Published"
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 256,
                      columnNumber: 21
                    }, this) : /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium bg-amber-500/10 text-amber-300 rounded-full border border-amber-500/20", children: [
                      /* @__PURE__ */ jsxDEV(EyeOff, { className: "w-2.5 h-2.5" }, void 0, false, {
                        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                        lineNumber: 261,
                        columnNumber: 29
                      }, this),
                      " Draft"
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 260,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                    lineNumber: 251,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-white truncate", children: course.title }, void 0, false, {
                    fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                    lineNumber: 265,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200 mt-1 line-clamp-1", children: course.description }, void 0, false, {
                    fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                    lineNumber: 266,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200/60 mt-2", children: [
                    course.lectures.length,
                    " lectures"
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                    lineNumber: 267,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                  lineNumber: 250,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => setExpandedCourse(expandedCourse === course.id ? null : course.id),
                      className: "p-2 rounded-lg text-surface-200 hover:text-white hover:bg-white/5 transition-all",
                      children: /* @__PURE__ */ jsxDEV(ChevronDown, { className: `w-4 h-4 transition-transform ${expandedCourse === course.id ? "rotate-180" : ""}` }, void 0, false, {
                        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                        lineNumber: 274,
                        columnNumber: 25
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 270,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => handleDeleteCourse(course.id),
                      className: "p-2 rounded-lg text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-all",
                      children: /* @__PURE__ */ jsxDEV(Trash2, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                        lineNumber: 280,
                        columnNumber: 25
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 276,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                  lineNumber: 269,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                lineNumber: 249,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                lineNumber: 248,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(AnimatePresence, { children: expandedCourse === course.id && /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.2 },
                  className: "border-t border-white/5 overflow-hidden",
                  children: /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-5 space-y-3", children: [
                    course.lectures.length === 0 ? /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200/60 text-center py-4", children: "No lectures yet. Add your first lecture below." }, void 0, false, {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 298,
                      columnNumber: 19
                    }, this) : course.lectures.map(
                      (lecture, idx) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-surface-900/50 border border-white/5", children: [
                        /* @__PURE__ */ jsxDEV("span", { className: "w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center text-xs font-medium text-brand-300 shrink-0", children: idx + 1 }, void 0, false, {
                          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                          lineNumber: 302,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-white truncate", children: lecture.title }, void 0, false, {
                            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                            lineNumber: 306,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200/60 truncate", children: lecture.description }, void 0, false, {
                            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                            lineNumber: 307,
                            columnNumber: 33
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                          lineNumber: 305,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV(
                          "button",
                          {
                            onClick: () => handleDeleteLecture(course.id, lecture.id),
                            className: "p-1.5 rounded-lg text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-all shrink-0",
                            children: /* @__PURE__ */ jsxDEV(Trash2, { className: "w-3.5 h-3.5" }, void 0, false, {
                              fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                              lineNumber: 313,
                              columnNumber: 33
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                            lineNumber: 309,
                            columnNumber: 31
                          },
                          this
                        )
                      ] }, lecture.id, true, {
                        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                        lineNumber: 301,
                        columnNumber: 19
                      }, this)
                    ),
                    showLectureForm === course.id ? /* @__PURE__ */ jsxDEV("form", { onSubmit: (e) => handleAddLecture(e, course.id), className: "p-4 rounded-xl bg-surface-900/50 border border-brand-500/20 space-y-3", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-medium text-white", children: "Add Lecture" }, void 0, false, {
                          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                          lineNumber: 323,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("button", { type: "button", onClick: () => setShowLectureForm(null), children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4 text-surface-200" }, void 0, false, {
                          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                          lineNumber: 325,
                          columnNumber: 33
                        }, this) }, void 0, false, {
                          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                          lineNumber: 324,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                        lineNumber: 322,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV(
                        "input",
                        {
                          type: "text",
                          value: lectureTitle,
                          onChange: (e) => setLectureTitle(e.target.value),
                          placeholder: "Lecture title",
                          className: "w-full px-3 py-2 rounded-lg bg-surface-800/50 border border-white/10 text-sm text-white placeholder:text-surface-200/50 focus:outline-none focus:border-brand-500/50"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                          lineNumber: 328,
                          columnNumber: 29
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "input",
                        {
                          type: "text",
                          value: lectureDescription,
                          onChange: (e) => setLectureDescription(e.target.value),
                          placeholder: "Description (optional)",
                          className: "w-full px-3 py-2 rounded-lg bg-surface-800/50 border border-white/10 text-sm text-white placeholder:text-surface-200/50 focus:outline-none focus:border-brand-500/50"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                          lineNumber: 335,
                          columnNumber: 29
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "input",
                        {
                          type: "url",
                          value: lectureVideoUrl,
                          onChange: (e) => setLectureVideoUrl(e.target.value),
                          placeholder: "Video URL (mp4 link)",
                          className: "w-full px-3 py-2 rounded-lg bg-surface-800/50 border border-white/10 text-sm text-white placeholder:text-surface-200/50 focus:outline-none focus:border-brand-500/50"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                          lineNumber: 342,
                          columnNumber: 29
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          type: "submit",
                          className: "w-full px-3 py-2 text-sm font-medium bg-brand-600 hover:bg-brand-500 rounded-lg transition-all flex items-center justify-center gap-2",
                          children: [
                            /* @__PURE__ */ jsxDEV(Check, { className: "w-3.5 h-3.5" }, void 0, false, {
                              fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                              lineNumber: 353,
                              columnNumber: 31
                            }, this),
                            "Add Lecture"
                          ]
                        },
                        void 0,
                        true,
                        {
                          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                          lineNumber: 349,
                          columnNumber: 29
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 321,
                      columnNumber: 19
                    }, this) : /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => setShowLectureForm(course.id),
                        className: "w-full p-3 rounded-xl border border-dashed border-white/10 text-sm text-surface-200 hover:text-white hover:border-brand-500/30 transition-all flex items-center justify-center gap-2",
                        children: [
                          /* @__PURE__ */ jsxDEV(Upload, { className: "w-4 h-4" }, void 0, false, {
                            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                            lineNumber: 362,
                            columnNumber: 29
                          }, this),
                          "Add Lecture"
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                        lineNumber: 358,
                        columnNumber: 19
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                    lineNumber: 296,
                    columnNumber: 23
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                  lineNumber: 289,
                  columnNumber: 15
                },
                this
              ) }, void 0, false, {
                fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                lineNumber: 287,
                columnNumber: 17
              }, this)
            ]
          },
          course.id,
          true,
          {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 242,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: showCourseForm && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
        onClick: () => setShowCourseForm(false),
        children: /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.95, opacity: 0 },
            onClick: (e) => e.stopPropagation(),
            className: "w-full max-w-lg rounded-2xl bg-surface-800 border border-white/10 p-6",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold", children: "Create New Course" }, void 0, false, {
                  fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                  lineNumber: 394,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("button", { onClick: () => setShowCourseForm(false), className: "p-1 rounded-lg text-surface-200 hover:text-white", children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                  lineNumber: 396,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                  lineNumber: 395,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                lineNumber: 393,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("form", { onSubmit: handleCreateCourse, className: "space-y-4", children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-surface-200 mb-1.5", children: "Course Title" }, void 0, false, {
                    fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                    lineNumber: 402,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      type: "text",
                      value: courseTitle,
                      onChange: (e) => setCourseTitle(e.target.value),
                      placeholder: "e.g., Advanced TypeScript Patterns",
                      className: "w-full px-4 py-3 rounded-xl bg-surface-900/50 border border-white/10 text-white placeholder:text-surface-200/50 focus:outline-none focus:border-brand-500/50",
                      required: true
                    },
                    void 0,
                    false,
                    {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 403,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                  lineNumber: 401,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-surface-200 mb-1.5", children: "Description" }, void 0, false, {
                    fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                    lineNumber: 414,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "textarea",
                    {
                      value: courseDescription,
                      onChange: (e) => setCourseDescription(e.target.value),
                      placeholder: "What will students learn?",
                      rows: 3,
                      className: "w-full px-4 py-3 rounded-xl bg-surface-900/50 border border-white/10 text-white placeholder:text-surface-200/50 focus:outline-none focus:border-brand-500/50 resize-none"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 415,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                  lineNumber: 413,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-surface-200 mb-1.5", children: "Category" }, void 0, false, {
                    fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                    lineNumber: 425,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "select",
                    {
                      value: courseCategory,
                      onChange: (e) => setCourseCategory(e.target.value),
                      className: "w-full px-4 py-3 rounded-xl bg-surface-900/50 border border-white/10 text-white focus:outline-none focus:border-brand-500/50",
                      children: categories.map(
                        (cat) => /* @__PURE__ */ jsxDEV("option", { value: cat, children: cat }, cat, false, {
                          fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                          lineNumber: 432,
                          columnNumber: 19
                        }, this)
                      )
                    },
                    void 0,
                    false,
                    {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 426,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                  lineNumber: 424,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 pt-2", children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowCourseForm(false),
                      className: "flex-1 px-4 py-3 text-sm font-medium border border-white/10 rounded-xl text-surface-200 hover:text-white hover:border-white/20 transition-all",
                      children: "Cancel"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 438,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      type: "submit",
                      className: "flex-1 px-4 py-3 text-sm font-medium bg-brand-600 hover:bg-brand-500 rounded-xl transition-all",
                      children: "Create Course"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                      lineNumber: 445,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                  lineNumber: 437,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/TeacherDashboard.tsx",
                lineNumber: 400,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 386,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
        lineNumber: 379,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
      lineNumber: 377,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8", children: /* @__PURE__ */ jsxDEV(
      motion.button,
      {
        whileHover: { scale: 1.01 },
        whileTap: { scale: 0.99 },
        onClick: () => {
          const message = `Assalam-o-Alaikum, this is a progress report from Neuro-Edu OS.
Teacher: ${user.name}
Courses: ${courses.length}
Total Lectures: ${courses.reduce((sum, c) => sum + c.lectures.length, 0)}

From Neuro-Edu OS`;
          window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
        },
        className: "w-full p-4 rounded-2xl bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-500/20 hover:border-green-500/40 transition-all flex items-center justify-center gap-3",
        children: [
          /* @__PURE__ */ jsxDEV(MessageCircle, { className: "w-5 h-5 text-green-400" }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 469,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium text-green-300", children: tr.sendReport }, void 0, false, {
            fileName: "/workspace/src/pages/TeacherDashboard.tsx",
            lineNumber: 470,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/workspace/src/pages/TeacherDashboard.tsx",
        lineNumber: 460,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
      lineNumber: 459,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { language }, void 0, false, {
      fileName: "/workspace/src/pages/TeacherDashboard.tsx",
      lineNumber: 474,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/workspace/src/pages/TeacherDashboard.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}
_s(TeacherDashboard, "VhtgfyBa0auMP2UG6IUjrrVIQ6o=", false, function() {
  return [useNavigate];
});
_c = TeacherDashboard;
var _c;
$RefreshReg$(_c, "TeacherDashboard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/pages/TeacherDashboard.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/pages/TeacherDashboard.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQTtBQUFBO0FBQUEsV0ErRUE7QUFBQSxJQUdBLHVCQUFDLFNBQUksV0FBVSwrQ0FDYjtBQUFBLE1BQUMsT0FBTztBQUFBLE1BQVA7QUFBQSxRQUNDLFlBQVksRUFBRXlELE9BQU8sS0FBSztBQUFBLFFBQzFCLFVBQVUsRUFBRUEsT0FBTyxLQUFLO0FBQUEsUUFDeEIsU0FBUyxNQUFNO0FBQ2IsZ0JBQU1HLFVBQVU7QUFBQSxXQUE2RXJFLEtBQUt1QyxJQUFJO0FBQUEsV0FBY2pDLFFBQVF5QyxNQUFNO0FBQUEsa0JBQXFCekMsUUFBUWtELE9BQU8sQ0FBQ0MsS0FBS2IsTUFBTWEsTUFBTWIsRUFBRUUsU0FBU0MsUUFBUSxDQUFDLENBQUM7QUFBQTtBQUFBO0FBQzdNdUIsaUJBQU9DLEtBQUssdUJBQXVCQyxtQkFBbUJILE9BQU8sQ0FBQyxJQUFJLFFBQVE7QUFBQSxRQUM1RTtBQUFBLFFBQ0EsV0FBVTtBQUFBLFFBRVY7QUFBQSxpQ0FBQyxpQkFBYyxXQUFVLDRCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpRDtBQUFBLFVBQ2pELHVCQUFDLFVBQUssV0FBVSxzQ0FBc0NqRSxhQUFHcUUsY0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBb0U7QUFBQTtBQUFBO0FBQUEsTUFWdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBV0EsS0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBYUE7QUFBQSxJQUVBLHVCQUFDLFVBQU8sWUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTJCO0FBQUEsT0F2VjdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F3VkE7QUFFSjtBQUFDdEUsR0FyYnVCSixrQkFBZ0I7QUFBQSxVQUVyQjNCLFdBQVc7QUFBQTtBQUFBLEtBRk4yQjtBQUFnQixJQUFBMkU7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VOYXZpZ2F0ZSIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkJyYWluIiwiUGx1cyIsIkJvb2tPcGVuIiwiVmlkZW8iLCJUcmFzaDIiLCJMb2dPdXQiLCJFeWUiLCJFeWVPZmYiLCJDaGV2cm9uRG93biIsIlVwbG9hZCIsIkxheW91dERhc2hib2FyZCIsIlgiLCJDaGVjayIsIlVzZXJzIiwiTWVzc2FnZUNpcmNsZSIsImdldENvdXJzZXNCeVRlYWNoZXIiLCJjcmVhdGVDb3Vyc2UiLCJhZGRMZWN0dXJlIiwiZGVsZXRlQ291cnNlIiwiZGVsZXRlTGVjdHVyZSIsImxvZ291dCIsInQiLCJMYW5ndWFnZVRvZ2dsZSIsIkZvb3RlciIsIlRlYWNoZXJEYXNoYm9hcmQiLCJ1c2VyIiwibGFuZ3VhZ2UiLCJvbkxhbmd1YWdlQ2hhbmdlIiwiX3MiLCJ0ciIsIm5hdmlnYXRlIiwiY291cnNlcyIsInNldENvdXJzZXMiLCJzaG93Q291cnNlRm9ybSIsInNldFNob3dDb3Vyc2VGb3JtIiwic2hvd0xlY3R1cmVGb3JtIiwic2V0U2hvd0xlY3R1cmVGb3JtIiwiZXhwYW5kZWRDb3Vyc2UiLCJzZXRFeHBhbmRlZENvdXJzZSIsImNvdXJzZVRpdGxlIiwic2V0Q291cnNlVGl0bGUiLCJjb3Vyc2VEZXNjcmlwdGlvbiIsInNldENvdXJzZURlc2NyaXB0aW9uIiwiY291cnNlQ2F0ZWdvcnkiLCJzZXRDb3Vyc2VDYXRlZ29yeSIsImxlY3R1cmVUaXRsZSIsInNldExlY3R1cmVUaXRsZSIsImxlY3R1cmVEZXNjcmlwdGlvbiIsInNldExlY3R1cmVEZXNjcmlwdGlvbiIsImxlY3R1cmVWaWRlb1VybCIsInNldExlY3R1cmVWaWRlb1VybCIsImxvYWRDb3Vyc2VzIiwiaWQiLCJoYW5kbGVDcmVhdGVDb3Vyc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwicHVibGlzaGVkIiwicHJpY2UiLCJ0ZWFjaGVySWQiLCJ0ZWFjaGVyTmFtZSIsIm5hbWUiLCJoYW5kbGVBZGRMZWN0dXJlIiwiY291cnNlSWQiLCJjb3Vyc2UiLCJmaW5kIiwiYyIsIm9yZGVyIiwibGVjdHVyZXMiLCJsZW5ndGgiLCJ2aWRlb1VybCIsImR1cmF0aW9uIiwiaGFuZGxlRGVsZXRlQ291cnNlIiwiY29uZmlybSIsImhhbmRsZURlbGV0ZUxlY3R1cmUiLCJsZWN0dXJlSWQiLCJoYW5kbGVMb2dvdXQiLCJjYXRlZ29yaWVzIiwicmVkdWNlIiwic3VtIiwiZmlsdGVyIiwibWFwIiwiaGVpZ2h0Iiwib3BhY2l0eSIsImxlY3R1cmUiLCJpZHgiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNjYWxlIiwic3RvcFByb3BhZ2F0aW9uIiwiY2F0IiwibWVzc2FnZSIsIndpbmRvdyIsIm9wZW4iLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZW5kUmVwb3J0IiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiVGVhY2hlckRhc2hib2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgXG4gIEJyYWluLCBQbHVzLCBCb29rT3BlbiwgVmlkZW8sIFRyYXNoMiwgRWRpdDMsIFxuICBMb2dPdXQsIEV5ZSwgRXllT2ZmLCBDaGV2cm9uRG93biwgVXBsb2FkLFxuICBMYXlvdXREYXNoYm9hcmQsIFgsIENoZWNrLCBVc2VycywgTWVzc2FnZUNpcmNsZVxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgVXNlciwgQ291cnNlLCBnZXRDb3Vyc2VzQnlUZWFjaGVyLCBjcmVhdGVDb3Vyc2UsIGFkZExlY3R1cmUsIGRlbGV0ZUNvdXJzZSwgZGVsZXRlTGVjdHVyZSwgbG9nb3V0IH0gZnJvbSAnLi4vbGliL3N0b3JlJztcblxuaW1wb3J0IHsgTGFuZ3VhZ2UsIHQgfSBmcm9tICcuLi9saWIvaTE4bic7XG5pbXBvcnQgTGFuZ3VhZ2VUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5ndWFnZVRvZ2dsZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuaW50ZXJmYWNlIFRlYWNoZXJEYXNoYm9hcmRQcm9wcyB7XG4gIHVzZXI6IFVzZXI7XG4gIGxhbmd1YWdlOiBMYW5ndWFnZTtcbiAgb25MYW5ndWFnZUNoYW5nZTogKGxhbmc6IExhbmd1YWdlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFjaGVyRGFzaGJvYXJkKHsgdXNlciwgbGFuZ3VhZ2UsIG9uTGFuZ3VhZ2VDaGFuZ2UgfTogVGVhY2hlckRhc2hib2FyZFByb3BzKSB7XG4gIGNvbnN0IHRyID0gdChsYW5ndWFnZSk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW2NvdXJzZXMsIHNldENvdXJzZXNdID0gdXNlU3RhdGU8Q291cnNlW10+KFtdKTtcbiAgY29uc3QgW3Nob3dDb3Vyc2VGb3JtLCBzZXRTaG93Q291cnNlRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93TGVjdHVyZUZvcm0sIHNldFNob3dMZWN0dXJlRm9ybV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2V4cGFuZGVkQ291cnNlLCBzZXRFeHBhbmRlZENvdXJzZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICAvLyBDb3Vyc2UgZm9ybSBzdGF0ZVxuICBjb25zdCBbY291cnNlVGl0bGUsIHNldENvdXJzZVRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NvdXJzZURlc2NyaXB0aW9uLCBzZXRDb3Vyc2VEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjb3Vyc2VDYXRlZ29yeSwgc2V0Q291cnNlQ2F0ZWdvcnldID0gdXNlU3RhdGUoJ0RldmVsb3BtZW50Jyk7XG5cbiAgLy8gTGVjdHVyZSBmb3JtIHN0YXRlXG4gIGNvbnN0IFtsZWN0dXJlVGl0bGUsIHNldExlY3R1cmVUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsZWN0dXJlRGVzY3JpcHRpb24sIHNldExlY3R1cmVEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsZWN0dXJlVmlkZW9VcmwsIHNldExlY3R1cmVWaWRlb1VybF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkQ291cnNlcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9hZENvdXJzZXMgPSAoKSA9PiB7XG4gICAgc2V0Q291cnNlcyhnZXRDb3Vyc2VzQnlUZWFjaGVyKHVzZXIuaWQpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDcmVhdGVDb3Vyc2UgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghY291cnNlVGl0bGUudHJpbSgpKSByZXR1cm47XG5cbiAgICBjcmVhdGVDb3Vyc2Uoe1xuICAgICAgdGl0bGU6IGNvdXJzZVRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGNvdXJzZURlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZUNhdGVnb3J5LFxuICAgICAgcHVibGlzaGVkOiB0cnVlLFxuICAgICAgcHJpY2U6IDAsXG4gICAgICB0ZWFjaGVySWQ6IHVzZXIuaWQsXG4gICAgICB0ZWFjaGVyTmFtZTogdXNlci5uYW1lLFxuICAgIH0pO1xuXG4gICAgc2V0Q291cnNlVGl0bGUoJycpO1xuICAgIHNldENvdXJzZURlc2NyaXB0aW9uKCcnKTtcbiAgICBzZXRDb3Vyc2VDYXRlZ29yeSgnRGV2ZWxvcG1lbnQnKTtcbiAgICBzZXRTaG93Q291cnNlRm9ybShmYWxzZSk7XG4gICAgbG9hZENvdXJzZXMoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRMZWN0dXJlID0gKGU6IFJlYWN0LkZvcm1FdmVudCwgY291cnNlSWQ6IHN0cmluZykgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWxlY3R1cmVUaXRsZS50cmltKCkgfHwgIWxlY3R1cmVWaWRlb1VybC50cmltKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvdXJzZSA9IGNvdXJzZXMuZmluZChjID0+IGMuaWQgPT09IGNvdXJzZUlkKTtcbiAgICBjb25zdCBvcmRlciA9IGNvdXJzZSA/IGNvdXJzZS5sZWN0dXJlcy5sZW5ndGggKyAxIDogMTtcblxuICAgIGFkZExlY3R1cmUoY291cnNlSWQsIHtcbiAgICAgIHRpdGxlOiBsZWN0dXJlVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogbGVjdHVyZURlc2NyaXB0aW9uLFxuICAgICAgdmlkZW9Vcmw6IGxlY3R1cmVWaWRlb1VybCxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgb3JkZXIsXG4gICAgfSk7XG5cbiAgICBzZXRMZWN0dXJlVGl0bGUoJycpO1xuICAgIHNldExlY3R1cmVEZXNjcmlwdGlvbignJyk7XG4gICAgc2V0TGVjdHVyZVZpZGVvVXJsKCcnKTtcbiAgICBzZXRTaG93TGVjdHVyZUZvcm0obnVsbCk7XG4gICAgbG9hZENvdXJzZXMoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVDb3Vyc2UgPSAoY291cnNlSWQ6IHN0cmluZykgPT4ge1xuICAgIGlmIChjb25maXJtKCdEZWxldGUgdGhpcyBjb3Vyc2UgYW5kIGFsbCBpdHMgbGVjdHVyZXM/JykpIHtcbiAgICAgIGRlbGV0ZUNvdXJzZShjb3Vyc2VJZCk7XG4gICAgICBsb2FkQ291cnNlcygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVMZWN0dXJlID0gKGNvdXJzZUlkOiBzdHJpbmcsIGxlY3R1cmVJZDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGNvbmZpcm0oJ0RlbGV0ZSB0aGlzIGxlY3R1cmU/JykpIHtcbiAgICAgIGRlbGV0ZUxlY3R1cmUoY291cnNlSWQsIGxlY3R1cmVJZCk7XG4gICAgICBsb2FkQ291cnNlcygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9nb3V0KCk7XG4gICAgbmF2aWdhdGUoJy8nKTtcbiAgfTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gWydEZXZlbG9wbWVudCcsICdEZXNpZ24nLCAnQnVzaW5lc3MnLCAnTWFya2V0aW5nJywgJ0FJICYgTUwnLCAnQXJjaGl0ZWN0dXJlJywgJ0RhdGEgU2NpZW5jZSddO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc3VyZmFjZS05MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgey8qIEJhY2tncm91bmQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZ3JpZC1iZyBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cblxuICAgICAgey8qIFRvcCBCYXIgKi99XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTUwIGdsYXNzIGJvcmRlci1iIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTE2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy8nKX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1sZyBiZy1ncmFkaWVudC10by1iciBmcm9tLWJyYW5kLTUwMCB0by1wdXJwbGUtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8QnJhaW4gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBoaWRkZW4gc206YmxvY2tcIj5OZXVyby1FZHUgT1M8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTAuNSB0ZXh0LVsxMHB4XSBmb250LW1lZGl1bSBiZy1hbWJlci01MDAvMTAgdGV4dC1hbWJlci0zMDAgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzIwXCI+XG4gICAgICAgICAgICAgICAgVGVhY2hlclxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8TGFuZ3VhZ2VUb2dnbGUgbGFuZ3VhZ2U9e2xhbmd1YWdlfSBvbkxhbmd1YWdlQ2hhbmdlPXtvbkxhbmd1YWdlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3VyZmFjZS0yMDAgaGlkZGVuIHNtOmJsb2NrXCI+8J+RqOKAjfCfj6sge3VzZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL3BhcmVudCcpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnIHRleHQtc3VyZmFjZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy13aGl0ZS81IHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhcmVudCBQb3J0YWxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFVzZXJzIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1sZyB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TG9nT3V0IGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICB7LyogTWFpbiBDb250ZW50ICovfVxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggcHktOFwiPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBtYi04XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWJvbGRcIj5UZWFjaGVyIERhc2hib2FyZDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3VyZmFjZS0yMDAgbXQtMVwiPk1hbmFnZSB5b3VyIGNvdXJzZXMgYW5kIGxlY3R1cmVzPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDb3Vyc2VGb3JtKHRydWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yLjUgdGV4dC1zbSBmb250LW1lZGl1bSBiZy1icmFuZC02MDAgaG92ZXI6YmctYnJhbmQtNTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgaG92ZXI6c2hhZG93LWxnIGhvdmVyOnNoYWRvdy1icmFuZC02MDAvMjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQbHVzIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgTmV3IENvdXJzZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU3RhdHMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMyBnYXAtNCBtYi04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1zdXJmYWNlLTgwMC8zMCBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1sZyBiZy1ibHVlLTUwMC8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxCb29rT3BlbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYmx1ZS00MDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57Y291cnNlcy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdXJmYWNlLTIwMFwiPlRvdGFsIENvdXJzZXM8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1zdXJmYWNlLTgwMC8zMCBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1sZyBiZy1ncmVlbi01MDAvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8VmlkZW8gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyZWVuLTQwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntjb3Vyc2VzLnJlZHVjZSgoc3VtLCBjKSA9PiBzdW0gKyBjLmxlY3R1cmVzLmxlbmd0aCwgMCl9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdXJmYWNlLTIwMFwiPlRvdGFsIExlY3R1cmVzPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctc3VyZmFjZS04MDAvMzAgYm9yZGVyIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtbGcgYmctcHVycGxlLTUwMC8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMYXlvdXREYXNoYm9hcmQgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXB1cnBsZS00MDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57Y291cnNlcy5maWx0ZXIoYyA9PiBjLnB1Ymxpc2hlZCkubGVuZ3RofTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDBcIj5QdWJsaXNoZWQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBDb3Vyc2UgTGlzdCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICB7Y291cnNlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTE2IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItd2hpdGUvNSBiZy1zdXJmYWNlLTgwMC8yMFwiPlxuICAgICAgICAgICAgICA8Qm9va09wZW4gY2xhc3NOYW1lPVwidy0xMiBoLTEyIHRleHQtc3VyZmFjZS0yMDAvMzAgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1zdXJmYWNlLTIwMCBtYi0yXCI+Tm8gY291cnNlcyB5ZXQ8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3VyZmFjZS0yMDAvNjAgbWItNFwiPkNyZWF0ZSB5b3VyIGZpcnN0IGNvdXJzZSB0byBnZXQgc3RhcnRlZDwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDb3Vyc2VGb3JtKHRydWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIGJnLWJyYW5kLTYwMCBob3ZlcjpiZy1icmFuZC01MDAgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDcmVhdGUgQ291cnNlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGNvdXJzZXMubWFwKChjb3Vyc2UpID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBrZXk9e2NvdXJzZS5pZH1cbiAgICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzUgYmctc3VyZmFjZS04MDAvMzAgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKiBDb3Vyc2UgSGVhZGVyICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNtOnAtNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTAuNSB0ZXh0LVsxMHB4XSBmb250LW1lZGl1bSBiZy1icmFuZC01MDAvMTAgdGV4dC1icmFuZC0zMDAgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItYnJhbmQtNTAwLzIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vyc2UuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291cnNlLnB1Ymxpc2hlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgcHgtMiBweS0wLjUgdGV4dC1bMTBweF0gZm9udC1tZWRpdW0gYmctZ3JlZW4tNTAwLzEwIHRleHQtZ3JlZW4tMzAwIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWdyZWVuLTUwMC8yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeWUgY2xhc3NOYW1lPVwidy0yLjUgaC0yLjVcIiAvPiBQdWJsaXNoZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgcHgtMiBweS0wLjUgdGV4dC1bMTBweF0gZm9udC1tZWRpdW0gYmctYW1iZXItNTAwLzEwIHRleHQtYW1iZXItMzAwIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeWVPZmYgY2xhc3NOYW1lPVwidy0yLjUgaC0yLjVcIiAvPiBEcmFmdFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB0cnVuY2F0ZVwiPntjb3Vyc2UudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3VyZmFjZS0yMDAgbXQtMSBsaW5lLWNsYW1wLTFcIj57Y291cnNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDAvNjAgbXQtMlwiPntjb3Vyc2UubGVjdHVyZXMubGVuZ3RofSBsZWN0dXJlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZENvdXJzZShleHBhbmRlZENvdXJzZSA9PT0gY291cnNlLmlkID8gbnVsbCA6IGNvdXJzZS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1sZyB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT17YHctNCBoLTQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtleHBhbmRlZENvdXJzZSA9PT0gY291cnNlLmlkID8gJ3JvdGF0ZS0xODAnIDogJyd9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVDb3Vyc2UoY291cnNlLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnIHRleHQtcmVkLTQwMC82MCBob3Zlcjp0ZXh0LXJlZC00MDAgaG92ZXI6YmctcmVkLTUwMC8xMCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoMiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBFeHBhbmRlZDogTGVjdHVyZXMgKi99XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICAgIHtleHBhbmRlZENvdXJzZSA9PT0gY291cnNlLmlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IGhlaWdodDogMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgaGVpZ2h0OiAnYXV0bycsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICBleGl0PXt7IGhlaWdodDogMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci13aGl0ZS81IG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTpwLTUgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291cnNlLmxlY3R1cmVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXN1cmZhY2UtMjAwLzYwIHRleHQtY2VudGVyIHB5LTRcIj5ObyBsZWN0dXJlcyB5ZXQuIEFkZCB5b3VyIGZpcnN0IGxlY3R1cmUgYmVsb3cuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY291cnNlLmxlY3R1cmVzLm1hcCgobGVjdHVyZSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xlY3R1cmUuaWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHAtMyByb3VuZGVkLXhsIGJnLXN1cmZhY2UtOTAwLzUwIGJvcmRlciBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy02IGgtNiByb3VuZGVkLWZ1bGwgYmctYnJhbmQtNTAwLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1icmFuZC0zMDAgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkeCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSB0cnVuY2F0ZVwiPntsZWN0dXJlLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwLzYwIHRydW5jYXRlXCI+e2xlY3R1cmUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZUxlY3R1cmUoY291cnNlLmlkLCBsZWN0dXJlLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgcm91bmRlZC1sZyB0ZXh0LXJlZC00MDAvNjAgaG92ZXI6dGV4dC1yZWQtNDAwIGhvdmVyOmJnLXJlZC01MDAvMTAgdHJhbnNpdGlvbi1hbGwgc2hyaW5rLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2gyIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBMZWN0dXJlICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dMZWN0dXJlRm9ybSA9PT0gY291cnNlLmlkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZUFkZExlY3R1cmUoZSwgY291cnNlLmlkKX0gY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctc3VyZmFjZS05MDAvNTAgYm9yZGVyIGJvcmRlci1icmFuZC01MDAvMjAgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5BZGQgTGVjdHVyZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TGVjdHVyZUZvcm0obnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtc3VyZmFjZS0yMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGVjdHVyZVRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMZWN0dXJlVGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZWN0dXJlIHRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgcm91bmRlZC1sZyBiZy1zdXJmYWNlLTgwMC81MCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRleHQtc20gdGV4dC13aGl0ZSBwbGFjZWhvbGRlcjp0ZXh0LXN1cmZhY2UtMjAwLzUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYnJhbmQtNTAwLzUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xlY3R1cmVEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGVjdHVyZURlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQtbGcgYmctc3VyZmFjZS04MDAvNTAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCB0ZXh0LXNtIHRleHQtd2hpdGUgcGxhY2Vob2xkZXI6dGV4dC1zdXJmYWNlLTIwMC81MCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJyYW5kLTUwMC81MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xlY3R1cmVWaWRlb1VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGVjdHVyZVZpZGVvVXJsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmlkZW8gVVJMIChtcDQgbGluaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiByb3VuZGVkLWxnIGJnLXN1cmZhY2UtODAwLzUwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgdGV4dC1zbSB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyOnRleHQtc3VyZmFjZS0yMDAvNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1icmFuZC01MDAvNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gYmctYnJhbmQtNjAwIGhvdmVyOmJnLWJyYW5kLTUwMCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIExlY3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dMZWN0dXJlRm9ybShjb3Vyc2UuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItd2hpdGUvMTAgdGV4dC1zbSB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLWJyYW5kLTUwMC8zMCB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBMZWN0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIENyZWF0ZSBDb3Vyc2UgTW9kYWwgKi99XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICB7c2hvd0NvdXJzZUZvcm0gJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGJnLWJsYWNrLzYwIGJhY2tkcm9wLWJsdXItc21cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NvdXJzZUZvcm0oZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDAuOTUsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICBleGl0PXt7IHNjYWxlOiAwLjk1LCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGcgcm91bmRlZC0yeGwgYmctc3VyZmFjZS04MDAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBwLTZcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+Q3JlYXRlIE5ldyBDb3Vyc2U8L2gyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvd0NvdXJzZUZvcm0oZmFsc2UpfSBjbGFzc05hbWU9XCJwLTEgcm91bmRlZC1sZyB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQ3JlYXRlQ291cnNlfSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zdXJmYWNlLTIwMCBtYi0xLjVcIj5Db3Vyc2UgVGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvdXJzZVRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvdXJzZVRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuLCBBZHZhbmNlZCBUeXBlU2NyaXB0IFBhdHRlcm5zXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLXhsIGJnLXN1cmZhY2UtOTAwLzUwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlcjp0ZXh0LXN1cmZhY2UtMjAwLzUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYnJhbmQtNTAwLzUwXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zdXJmYWNlLTIwMCBtYi0xLjVcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvdXJzZURlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvdXJzZURlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IHdpbGwgc3R1ZGVudHMgbGVhcm4/XCJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLXhsIGJnLXN1cmZhY2UtOTAwLzUwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlcjp0ZXh0LXN1cmZhY2UtMjAwLzUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYnJhbmQtNTAwLzUwIHJlc2l6ZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zdXJmYWNlLTIwMCBtYi0xLjVcIj5DYXRlZ29yeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Vyc2VDYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3Vyc2VDYXRlZ29yeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgcm91bmRlZC14bCBiZy1zdXJmYWNlLTkwMC81MCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1icmFuZC01MDAvNTBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2F0fSB2YWx1ZT17Y2F0fT57Y2F0fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDb3Vyc2VGb3JtKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZC14bCB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlLzIwIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweC00IHB5LTMgdGV4dC1zbSBmb250LW1lZGl1bSBiZy1icmFuZC02MDAgaG92ZXI6YmctYnJhbmQtNTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgQ291cnNlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuXG4gICAgICB7LyogU2VuZCBSZXBvcnQgdG8gUGFyZW50IEJ1dHRvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggbXQtOFwiPlxuICAgICAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDEgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45OSB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgQXNzYWxhbS1vLUFsYWlrdW0sIHRoaXMgaXMgYSBwcm9ncmVzcyByZXBvcnQgZnJvbSBOZXVyby1FZHUgT1MuXFxuVGVhY2hlcjogJHt1c2VyLm5hbWV9XFxuQ291cnNlczogJHtjb3Vyc2VzLmxlbmd0aH1cXG5Ub3RhbCBMZWN0dXJlczogJHtjb3Vyc2VzLnJlZHVjZSgoc3VtLCBjKSA9PiBzdW0gKyBjLmxlY3R1cmVzLmxlbmd0aCwgMCl9XFxuXFxuRnJvbSBOZXVyby1FZHUgT1NgO1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vd2EubWUvP3RleHQ9JHtlbmNvZGVVUklDb21wb25lbnQobWVzc2FnZSl9YCwgJ19ibGFuaycpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCByb3VuZGVkLTJ4bCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNjAwLzIwIHRvLWdyZWVuLTcwMC8yMCBib3JkZXIgYm9yZGVyLWdyZWVuLTUwMC8yMCBob3Zlcjpib3JkZXItZ3JlZW4tNTAwLzQwIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0zXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxNZXNzYWdlQ2lyY2xlIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1ncmVlbi00MDBcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmVlbi0zMDBcIj57dHIuc2VuZFJlcG9ydH08L3NwYW4+XG4gICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyIGxhbmd1YWdlPXtsYW5ndWFnZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL3dvcmtzcGFjZS9zcmMvcGFnZXMvVGVhY2hlckRhc2hib2FyZC50c3gifQ==