import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/StudentDashboard.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/pages/StudentDashboard.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=620eb88c"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=d53b2b6e";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=6e0f127a";
import {
  Brain,
  BookOpen,
  Play,
  Clock,
  TrendingUp,
  LogOut,
  Search,
  Filter,
  ChevronRight,
  Flame,
  Trophy,
  Download,
  Shield,
  HardDrive,
  Award,
  CheckCircle2
} from "/node_modules/.vite/deps/lucide-react.js?v=6a865639";
import { getCourses, getEnrollments, enrollStudent, getProgress, logout } from "/src/lib/store.ts";
import {
  getGamificationState,
  updateStreak,
  getXPForNextLevel,
  getLeagueColor,
  getLeagueIcon
} from "/src/lib/gamification.ts";
import { isCourseOffline } from "/src/lib/db.ts";
import { t } from "/src/lib/i18n.ts";
import LanguageToggle from "/src/components/LanguageToggle.tsx";
import Footer from "/src/components/Footer.tsx";
export default function StudentDashboard({ user, language, onLanguageChange }) {
  _s();
  const tr = t(language);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [enrolledIds, setEnrolledIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [gamiState, setGamiState] = useState(getGamificationState());
  const [offlineCourseIds, setOfflineCourseIds] = useState([]);
  const [showXpPopup, setShowXpPopup] = useState(false);
  useEffect(() => {
    const updatedState = updateStreak();
    setGamiState(updatedState);
    loadCourses();
    loadOfflineStatus();
  }, []);
  const loadCourses = () => {
    const allCourses = getCourses().filter((c) => c.published);
    setCourses(allCourses);
    const enrollments = getEnrollments(user.id);
    setEnrolledIds(enrollments.map((e) => e.courseId));
  };
  const loadOfflineStatus = async () => {
    const ids = [];
    for (const course of courses) {
      if (await isCourseOffline(course.id)) {
        ids.push(course.id);
      }
    }
    setOfflineCourseIds(ids);
  };
  const handleEnroll = (courseId) => {
    enrollStudent(user.id, courseId);
    loadCourses();
  };
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const progress = getProgress(user.id);
  const completedLectures = progress.filter((p) => p.completed).length;
  const totalEnrolledLectures = courses.filter((c) => enrolledIds.includes(c.id)).reduce((sum, c) => sum + c.lectures.length, 0);
  const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];
  const xpProgress = getXPForNextLevel(gamiState.xp);
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "All" || course.category === filterCategory;
    return matchesSearch && matchesCategory;
  });
  const enrolledCourses = courses.filter((c) => enrolledIds.includes(c.id));
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 grid-bg pointer-events-none" }, void 0, false, {
      fileName: "/workspace/src/pages/StudentDashboard.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 glass border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: () => navigate("/"), className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Brain, { className: "w-5 h-5 text-white" }, void 0, false, {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 122,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-bold hidden sm:block", children: "Neuro-Edu OS" }, void 0, false, {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20", children: "Student" }, void 0, false, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/StudentDashboard.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV(LanguageToggle, { language, onLanguageChange }, void 0, false, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 132,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-surface-200 hidden sm:block", children: [
          "🎓 ",
          user.name
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: handleLogout,
            className: "p-2 rounded-lg text-surface-200 hover:text-white hover:bg-white/5 transition-all",
            children: /* @__PURE__ */ jsxDEV(LogOut, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 138,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 134,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/StudentDashboard.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/StudentDashboard.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/StudentDashboard.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/StudentDashboard.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          className: "mb-6",
          children: /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl border border-white/10 bg-surface-800/40 backdrop-blur-sm p-4 sm:p-5", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                /* @__PURE__ */ jsxDEV("div", { className: `w-12 h-12 rounded-xl bg-gradient-to-br ${getLeagueColor(gamiState.league)} flex items-center justify-center text-xl shadow-lg`, children: getLeagueIcon(gamiState.league) }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 158,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-900 border border-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] font-bold text-brand-300", children: gamiState.level }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 162,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 161,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 157,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-bold text-white", children: [
                    gamiState.xp,
                    " XP"
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 167,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-surface-200", children: [
                    "Level ",
                    gamiState.level
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 168,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "px-1.5 py-0.5 text-[9px] font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20", children: gamiState.league }, void 0, false, {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 169,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 166,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-full h-2 rounded-full bg-surface-900/50 overflow-hidden", children: /* @__PURE__ */ jsxDEV(
                  motion.div,
                  {
                    initial: { width: 0 },
                    animate: { width: `${xpProgress.progress}%` },
                    transition: { duration: 1, ease: "easeOut" },
                    className: "h-full rounded-full bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 174,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 173,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-surface-200/60 mt-0.5", children: [
                  xpProgress.current,
                  "/",
                  xpProgress.needed,
                  " XP to Level ",
                  gamiState.level + 1
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 181,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 165,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 156,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 sm:gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20", children: [
                /* @__PURE__ */ jsxDEV(Flame, { className: "w-4 h-4 text-orange-400" }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 190,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-bold text-orange-300", children: gamiState.streak }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 191,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-orange-300/70", children: "day streak" }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 192,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 189,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => navigate("/quiz"),
                  className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all",
                  children: [
                    /* @__PURE__ */ jsxDEV(Shield, { className: "w-4 h-4 text-red-400" }, void 0, false, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 198,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-red-300", children: "Take Quiz" }, void 0, false, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 199,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 194,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => navigate("/offline"),
                  className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all",
                  children: [
                    /* @__PURE__ */ jsxDEV(HardDrive, { className: "w-4 h-4 text-cyan-400" }, void 0, false, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 205,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-cyan-300 hidden sm:inline", children: "Offline" }, void 0, false, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 206,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 201,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 188,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 154,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 153,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 148,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl sm:text-3xl font-bold", children: [
          "Welcome back, ",
          user.name.split(" ")[0],
          " 👋"
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 215,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200 mt-1", children: "Continue your learning journey" }, void 0, false, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 216,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/StudentDashboard.tsx",
        lineNumber: 214,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.05 },
            className: "p-3 sm:p-4 rounded-xl bg-surface-800/30 border border-white/5",
            children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 sm:gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-4 h-4 sm:w-5 sm:h-5 text-blue-400" }, void 0, false, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 229,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 228,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-lg sm:text-2xl font-bold", children: enrolledCourses.length }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 232,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] sm:text-xs text-surface-200", children: "Enrolled" }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 233,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 231,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 227,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 221,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 },
            className: "p-3 sm:p-4 rounded-xl bg-surface-800/30 border border-white/5",
            children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 sm:gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Play, { className: "w-4 h-4 sm:w-5 sm:h-5 text-green-400" }, void 0, false, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 245,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 244,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-lg sm:text-2xl font-bold", children: completedLectures }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 248,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] sm:text-xs text-surface-200", children: "Completed" }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 249,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 247,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 243,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 237,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.15 },
            className: "p-3 sm:p-4 rounded-xl bg-surface-800/30 border border-white/5",
            children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 sm:gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-4 h-4 sm:w-5 sm:h-5 text-purple-400" }, void 0, false, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 261,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 260,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-lg sm:text-2xl font-bold", children: [
                  totalEnrolledLectures > 0 ? Math.round(completedLectures / totalEnrolledLectures * 100) : 0,
                  "%"
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 264,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] sm:text-xs text-surface-200", children: "Progress" }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 267,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 263,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 259,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 253,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "p-3 sm:p-4 rounded-xl bg-surface-800/30 border border-white/5",
            children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 sm:gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Award, { className: "w-4 h-4 sm:w-5 sm:h-5 text-amber-400" }, void 0, false, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 279,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 278,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-lg sm:text-2xl font-bold", children: gamiState.badges.length }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 282,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] sm:text-xs text-surface-200", children: "Badges" }, void 0, false, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 283,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 281,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 277,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 271,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/StudentDashboard.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, this),
      gamiState.badges.length > 0 && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.25 },
          className: "mb-8",
          children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-sm font-semibold text-surface-200 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Trophy, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 298,
                columnNumber: 15
              }, this),
              "Recent Badges"
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 297,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 overflow-x-auto pb-2", children: gamiState.badges.slice(-5).map(
              (badge) => /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-800/30 border border-white/5 shrink-0",
                  children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-lg", children: badge.icon }, void 0, false, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 309,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-medium text-white", children: badge.name }, void 0, false, {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 311,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-surface-200/60", children: badge.description }, void 0, false, {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 312,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 310,
                      columnNumber: 19
                    }, this)
                  ]
                },
                badge.id,
                true,
                {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 303,
                  columnNumber: 13
                },
                this
              )
            ) }, void 0, false, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 301,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 291,
          columnNumber: 9
        },
        this
      ),
      enrolledCourses.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Clock, { className: "w-4 h-4 text-brand-400" }, void 0, false, {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 324,
            columnNumber: 15
          }, this),
          "My Courses"
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 323,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: enrolledCourses.map((course) => {
          const courseProgress = progress.filter(
            (p) => course.lectures.some((l) => l.id === p.lectureId) && p.completed
          ).length;
          const totalLectures = course.lectures.length;
          const percent = totalLectures > 0 ? Math.round(courseProgress / totalLectures * 100) : 0;
          const isOffline = offlineCourseIds.includes(course.id);
          return /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              whileHover: { y: -2 },
              onClick: () => navigate(`/course/${course.id}`),
              className: "group cursor-pointer rounded-2xl border border-white/5 bg-surface-800/30 overflow-hidden hover:border-brand-500/30 transition-all",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "h-32 bg-gradient-to-br from-brand-600/20 to-purple-600/20 flex items-center justify-center relative", children: [
                  /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-12 h-12 text-brand-400/40 group-hover:scale-110 transition-transform duration-500" }, void 0, false, {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 344,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "absolute top-3 right-3 flex items-center gap-1.5", children: [
                    isOffline && /* @__PURE__ */ jsxDEV("span", { className: "px-1.5 py-0.5 text-[9px] font-medium bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20", children: "Offline" }, void 0, false, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 347,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-green-500/10 text-green-300 rounded-full border border-green-500/20", children: [
                      percent,
                      "%"
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 351,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 345,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 343,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "p-4", children: [
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-semibold text-white group-hover:text-brand-300 transition-colors truncate", children: course.title }, void 0, false, {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 357,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-1", children: course.teacherName }, void 0, false, {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 360,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "mt-3", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "w-full h-1.5 rounded-full bg-surface-900/50 overflow-hidden", children: /* @__PURE__ */ jsxDEV(
                      motion.div,
                      {
                        initial: { width: 0 },
                        animate: { width: `${percent}%` },
                        transition: { duration: 0.8, delay: 0.2 },
                        className: "h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 363,
                        columnNumber: 27
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 362,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-surface-200/60 mt-1", children: [
                      courseProgress,
                      "/",
                      totalLectures,
                      " lectures"
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 370,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 361,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 356,
                  columnNumber: 21
                }, this)
              ]
            },
            course.id,
            true,
            {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 337,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 327,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/StudentDashboard.tsx",
        lineNumber: 322,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Search, { className: "w-4 h-4 text-brand-400" }, void 0, false, {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 383,
            columnNumber: 13
          }, this),
          "Browse Courses"
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 382,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-3 mb-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxDEV(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-200/50" }, void 0, false, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 390,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                placeholder: "Search courses...",
                className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-800/50 border border-white/10 text-sm text-white placeholder:text-surface-200/50 focus:outline-none focus:border-brand-500/50"
              },
              void 0,
              false,
              {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 391,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 389,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 overflow-x-auto pb-1", children: [
            /* @__PURE__ */ jsxDEV(Filter, { className: "w-4 h-4 text-surface-200/50 shrink-0" }, void 0, false, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 400,
              columnNumber: 15
            }, this),
            categories.map(
              (cat) => /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => setFilterCategory(cat),
                  className: `px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${filterCategory === cat ? "bg-brand-600 text-white" : "bg-surface-800/50 text-surface-200 hover:text-white border border-white/10"}`,
                  children: cat
                },
                cat,
                false,
                {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 402,
                  columnNumber: 15
                },
                this
              )
            )
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 399,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 388,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: filteredCourses.map((course) => {
          const enrolled = enrolledIds.includes(course.id);
          const isOffline = offlineCourseIds.includes(course.id);
          return /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              className: "group rounded-2xl border border-white/5 bg-surface-800/30 overflow-hidden hover:border-brand-500/30 transition-all",
              children: [
                /* @__PURE__ */ jsxDEV(
                  "div",
                  {
                    className: "h-32 bg-gradient-to-br from-brand-600/20 to-purple-600/20 flex items-center justify-center relative cursor-pointer",
                    onClick: () => navigate(`/course/${course.id}`),
                    children: [
                      /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-12 h-12 text-brand-400/40 group-hover:scale-110 transition-transform duration-500" }, void 0, false, {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 434,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20", children: course.category }, void 0, false, {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 436,
                        columnNumber: 23
                      }, this) }, void 0, false, {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 435,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-3 right-3 flex items-center gap-1.5", children: [
                        isOffline && /* @__PURE__ */ jsxDEV("span", { className: "px-1.5 py-0.5 text-[9px] font-medium bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20", children: /* @__PURE__ */ jsxDEV(Download, { className: "w-2.5 h-2.5 inline" }, void 0, false, {
                          fileName: "/workspace/src/pages/StudentDashboard.tsx",
                          lineNumber: 443,
                          columnNumber: 27
                        }, this) }, void 0, false, {
                          fileName: "/workspace/src/pages/StudentDashboard.tsx",
                          lineNumber: 442,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-surface-900/80 text-surface-200 rounded-full", children: [
                          course.lectures.length,
                          " lec"
                        ] }, void 0, true, {
                          fileName: "/workspace/src/pages/StudentDashboard.tsx",
                          lineNumber: 446,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 440,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 430,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "p-4", children: [
                  /* @__PURE__ */ jsxDEV(
                    "h3",
                    {
                      className: "text-sm font-semibold text-white group-hover:text-brand-300 transition-colors cursor-pointer truncate",
                      onClick: () => navigate(`/course/${course.id}`),
                      children: course.title
                    },
                    void 0,
                    false,
                    {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 452,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-1 line-clamp-2", children: course.description }, void 0, false, {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 458,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mt-4 gap-2", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-surface-200/60 truncate", children: [
                      "by ",
                      course.teacherName
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 460,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 shrink-0", children: enrolled ? /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => navigate(`/course/${course.id}`),
                        className: "px-3 py-1.5 text-xs font-medium bg-brand-600/20 text-brand-300 rounded-lg border border-brand-500/20 hover:bg-brand-600/30 transition-all flex items-center gap-1",
                        children: [
                          "Continue ",
                          /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-3 h-3" }, void 0, false, {
                            fileName: "/workspace/src/pages/StudentDashboard.tsx",
                            lineNumber: 467,
                            columnNumber: 38
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 463,
                        columnNumber: 25
                      },
                      this
                    ) : /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => handleEnroll(course.id),
                        className: "px-3 py-1.5 text-xs font-medium bg-brand-600 hover:bg-brand-500 text-white rounded-lg transition-all",
                        children: "Enroll Free"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 470,
                        columnNumber: 25
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 461,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/StudentDashboard.tsx",
                    lineNumber: 459,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 451,
                  columnNumber: 19
                }, this)
              ]
            },
            course.id,
            true,
            {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 424,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 418,
          columnNumber: 11
        }, this),
        filteredCourses.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsxDEV(Search, { className: "w-10 h-10 text-surface-200/20 mx-auto mb-3" }, void 0, false, {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 487,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200", children: "No courses found" }, void 0, false, {
            fileName: "/workspace/src/pages/StudentDashboard.tsx",
            lineNumber: 488,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 486,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/StudentDashboard.tsx",
        lineNumber: 381,
        columnNumber: 9
      }, this),
      enrolledCourses.filter((c) => {
        const courseProgress = progress.filter(
          (p) => c.lectures.some((l) => l.id === p.lectureId) && p.completed
        ).length;
        return c.lectures.length > 0 && courseProgress === c.lectures.length;
      }).length > 0 && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          className: "mt-10 mb-8",
          children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Award, { className: "w-4 h-4 text-amber-400" }, void 0, false, {
                fileName: "/workspace/src/pages/StudentDashboard.tsx",
                lineNumber: 506,
                columnNumber: 15
              }, this),
              tr.certificate
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 505,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: enrolledCourses.filter((c) => {
              const courseProgress = progress.filter(
                (p) => c.lectures.some((l) => l.id === p.lectureId) && p.completed
              ).length;
              return c.lectures.length > 0 && courseProgress === c.lectures.length;
            }).map(
              (course) => /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  whileHover: { y: -2 },
                  className: "p-4 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-yellow-500/5",
                  children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-3", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Award, { className: "w-5 h-5 text-amber-400" }, void 0, false, {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 523,
                        columnNumber: 23
                      }, this) }, void 0, false, {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 522,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { children: [
                        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-semibold text-white", children: course.title }, void 0, false, {
                          fileName: "/workspace/src/pages/StudentDashboard.tsx",
                          lineNumber: 526,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-green-300 flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-3 h-3" }, void 0, false, {
                            fileName: "/workspace/src/pages/StudentDashboard.tsx",
                            lineNumber: 528,
                            columnNumber: 25
                          }, this),
                          " 100% Complete"
                        ] }, void 0, true, {
                          fileName: "/workspace/src/pages/StudentDashboard.tsx",
                          lineNumber: 527,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 525,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/StudentDashboard.tsx",
                      lineNumber: 521,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => navigate(`/certificate/${course.id}`),
                        className: "w-full px-3 py-2 text-xs font-medium bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-lg transition-all flex items-center justify-center gap-1.5",
                        children: [
                          /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
                            fileName: "/workspace/src/pages/StudentDashboard.tsx",
                            lineNumber: 536,
                            columnNumber: 21
                          }, this),
                          tr.downloadCertificate
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/workspace/src/pages/StudentDashboard.tsx",
                        lineNumber: 532,
                        columnNumber: 19
                      },
                      this
                    )
                  ]
                },
                course.id,
                true,
                {
                  fileName: "/workspace/src/pages/StudentDashboard.tsx",
                  lineNumber: 516,
                  columnNumber: 13
                },
                this
              )
            ) }, void 0, false, {
              fileName: "/workspace/src/pages/StudentDashboard.tsx",
              lineNumber: 509,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/StudentDashboard.tsx",
          lineNumber: 500,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/StudentDashboard.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { language }, void 0, false, {
      fileName: "/workspace/src/pages/StudentDashboard.tsx",
      lineNumber: 546,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/workspace/src/pages/StudentDashboard.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}
_s(StudentDashboard, "BSRsAu+pFby2efgcZNUdLpZ+A/Q=", false, function() {
  return [useNavigate];
});
_c = StudentDashboard;
var _c;
$RefreshReg$(_c, "StudentDashboard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/pages/StudentDashboard.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/pages/StudentDashboard.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QkFDbkQsV0FBVTtBQUFBLHdCQUVWO0FBQUEsaURBQUMsWUFBUyxXQUFVLGlCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFpQztBQUFBLDBCQUNoQ3hCLEdBQUcwRjtBQUFBQTtBQUFBQTtBQUFBQSxzQkFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJLN0QsT0FBT0w7QUFBQUEsZ0JBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXVCQTtBQUFBLFlBQ0QsS0EvQkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFnQ0E7QUFBQTtBQUFBO0FBQUEsUUF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BMENBO0FBQUEsU0E1WUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQThZQTtBQUFBLElBRUEsdUJBQUMsVUFBTyxZQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBMkI7QUFBQSxPQW5iN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW9iQTtBQUVKO0FBQUN6QixHQXZmdUJKLGtCQUFnQjtBQUFBLFVBRXJCaEMsV0FBVztBQUFBO0FBQUEsS0FGTmdDO0FBQWdCLElBQUFnRztBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU5hdmlnYXRlIiwibW90aW9uIiwiQnJhaW4iLCJCb29rT3BlbiIsIlBsYXkiLCJDbG9jayIsIlRyZW5kaW5nVXAiLCJMb2dPdXQiLCJTZWFyY2giLCJGaWx0ZXIiLCJDaGV2cm9uUmlnaHQiLCJGbGFtZSIsIlRyb3BoeSIsIkRvd25sb2FkIiwiU2hpZWxkIiwiSGFyZERyaXZlIiwiQXdhcmQiLCJDaGVja0NpcmNsZTIiLCJnZXRDb3Vyc2VzIiwiZ2V0RW5yb2xsbWVudHMiLCJlbnJvbGxTdHVkZW50IiwiZ2V0UHJvZ3Jlc3MiLCJsb2dvdXQiLCJnZXRHYW1pZmljYXRpb25TdGF0ZSIsInVwZGF0ZVN0cmVhayIsImdldFhQRm9yTmV4dExldmVsIiwiZ2V0TGVhZ3VlQ29sb3IiLCJnZXRMZWFndWVJY29uIiwiaXNDb3Vyc2VPZmZsaW5lIiwidCIsIkxhbmd1YWdlVG9nZ2xlIiwiRm9vdGVyIiwiU3R1ZGVudERhc2hib2FyZCIsInVzZXIiLCJsYW5ndWFnZSIsIm9uTGFuZ3VhZ2VDaGFuZ2UiLCJfcyIsInRyIiwibmF2aWdhdGUiLCJjb3Vyc2VzIiwic2V0Q291cnNlcyIsImVucm9sbGVkSWRzIiwic2V0RW5yb2xsZWRJZHMiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZmlsdGVyQ2F0ZWdvcnkiLCJzZXRGaWx0ZXJDYXRlZ29yeSIsImdhbWlTdGF0ZSIsInNldEdhbWlTdGF0ZSIsIm9mZmxpbmVDb3Vyc2VJZHMiLCJzZXRPZmZsaW5lQ291cnNlSWRzIiwic2hvd1hwUG9wdXAiLCJzZXRTaG93WHBQb3B1cCIsInVwZGF0ZWRTdGF0ZSIsImxvYWRDb3Vyc2VzIiwibG9hZE9mZmxpbmVTdGF0dXMiLCJhbGxDb3Vyc2VzIiwiZmlsdGVyIiwiYyIsInB1Ymxpc2hlZCIsImVucm9sbG1lbnRzIiwiaWQiLCJtYXAiLCJlIiwiY291cnNlSWQiLCJpZHMiLCJjb3Vyc2UiLCJwdXNoIiwiaGFuZGxlRW5yb2xsIiwiaGFuZGxlTG9nb3V0IiwicHJvZ3Jlc3MiLCJjb21wbGV0ZWRMZWN0dXJlcyIsInAiLCJjb21wbGV0ZWQiLCJsZW5ndGgiLCJ0b3RhbEVucm9sbGVkTGVjdHVyZXMiLCJpbmNsdWRlcyIsInJlZHVjZSIsInN1bSIsImxlY3R1cmVzIiwiY2F0ZWdvcmllcyIsIkFycmF5IiwiZnJvbSIsIlNldCIsImNhdGVnb3J5IiwieHBQcm9ncmVzcyIsInhwIiwiZmlsdGVyZWRDb3Vyc2VzIiwibWF0Y2hlc1NlYXJjaCIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJkZXNjcmlwdGlvbiIsIm1hdGNoZXNDYXRlZ29yeSIsImVucm9sbGVkQ291cnNlcyIsIm5hbWUiLCJvcGFjaXR5IiwieSIsImxlYWd1ZSIsImxldmVsIiwid2lkdGgiLCJkdXJhdGlvbiIsImVhc2UiLCJjdXJyZW50IiwibmVlZGVkIiwic3RyZWFrIiwic3BsaXQiLCJkZWxheSIsIk1hdGgiLCJyb3VuZCIsImJhZGdlcyIsInNsaWNlIiwiYmFkZ2UiLCJzY2FsZSIsImljb24iLCJjb3Vyc2VQcm9ncmVzcyIsInNvbWUiLCJsIiwibGVjdHVyZUlkIiwidG90YWxMZWN0dXJlcyIsInBlcmNlbnQiLCJpc09mZmxpbmUiLCJ0ZWFjaGVyTmFtZSIsInRhcmdldCIsInZhbHVlIiwiY2F0IiwiZW5yb2xsZWQiLCJjZXJ0aWZpY2F0ZSIsImRvd25sb2FkQ2VydGlmaWNhdGUiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTdHVkZW50RGFzaGJvYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBcbiAgQnJhaW4sIEJvb2tPcGVuLCBQbGF5LCBDbG9jaywgVHJlbmRpbmdVcCwgXG4gIExvZ091dCwgU2VhcmNoLCBGaWx0ZXIsIENoZXZyb25SaWdodCxcbiAgRmxhbWUsIFRyb3BoeSwgRG93bmxvYWQsIFNoaWVsZCwgSGFyZERyaXZlLFxuICBaYXAsIEF3YXJkLCBUYXJnZXQsIFN0YXIsIENoZWNrQ2lyY2xlMlxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgVXNlciwgQ291cnNlLCBnZXRDb3Vyc2VzLCBnZXRFbnJvbGxtZW50cywgZW5yb2xsU3R1ZGVudCwgaXNFbnJvbGxlZCwgZ2V0UHJvZ3Jlc3MsIGxvZ291dCB9IGZyb20gJy4uL2xpYi9zdG9yZSc7XG5pbXBvcnQgeyBcbiAgZ2V0R2FtaWZpY2F0aW9uU3RhdGUsIHVwZGF0ZVN0cmVhaywgZ2V0WFBGb3JOZXh0TGV2ZWwsIFxuICBnZXRMZWFndWVDb2xvciwgZ2V0TGVhZ3VlSWNvbiwgR2FtaWZpY2F0aW9uU3RhdGUgXG59IGZyb20gJy4uL2xpYi9nYW1pZmljYXRpb24nO1xuaW1wb3J0IHsgaXNDb3Vyc2VPZmZsaW5lIH0gZnJvbSAnLi4vbGliL2RiJztcblxuaW1wb3J0IHsgTGFuZ3VhZ2UsIHQgfSBmcm9tICcuLi9saWIvaTE4bic7XG5pbXBvcnQgTGFuZ3VhZ2VUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5ndWFnZVRvZ2dsZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuaW50ZXJmYWNlIFN0dWRlbnREYXNoYm9hcmRQcm9wcyB7XG4gIHVzZXI6IFVzZXI7XG4gIGxhbmd1YWdlOiBMYW5ndWFnZTtcbiAgb25MYW5ndWFnZUNoYW5nZTogKGxhbmc6IExhbmd1YWdlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHVkZW50RGFzaGJvYXJkKHsgdXNlciwgbGFuZ3VhZ2UsIG9uTGFuZ3VhZ2VDaGFuZ2UgfTogU3R1ZGVudERhc2hib2FyZFByb3BzKSB7XG4gIGNvbnN0IHRyID0gdChsYW5ndWFnZSk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW2NvdXJzZXMsIHNldENvdXJzZXNdID0gdXNlU3RhdGU8Q291cnNlW10+KFtdKTtcbiAgY29uc3QgW2Vucm9sbGVkSWRzLCBzZXRFbnJvbGxlZElkc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2ZpbHRlckNhdGVnb3J5LCBzZXRGaWx0ZXJDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnQWxsJyk7XG4gIGNvbnN0IFtnYW1pU3RhdGUsIHNldEdhbWlTdGF0ZV0gPSB1c2VTdGF0ZTxHYW1pZmljYXRpb25TdGF0ZT4oZ2V0R2FtaWZpY2F0aW9uU3RhdGUoKSk7XG4gIGNvbnN0IFtvZmZsaW5lQ291cnNlSWRzLCBzZXRPZmZsaW5lQ291cnNlSWRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtzaG93WHBQb3B1cCwgc2V0U2hvd1hwUG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVXBkYXRlIHN0cmVhayBvbiBsb2dpblxuICAgIGNvbnN0IHVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZVN0cmVhaygpO1xuICAgIHNldEdhbWlTdGF0ZSh1cGRhdGVkU3RhdGUpO1xuICAgIGxvYWRDb3Vyc2VzKCk7XG4gICAgbG9hZE9mZmxpbmVTdGF0dXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvYWRDb3Vyc2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbENvdXJzZXMgPSBnZXRDb3Vyc2VzKCkuZmlsdGVyKGMgPT4gYy5wdWJsaXNoZWQpO1xuICAgIHNldENvdXJzZXMoYWxsQ291cnNlcyk7XG4gICAgY29uc3QgZW5yb2xsbWVudHMgPSBnZXRFbnJvbGxtZW50cyh1c2VyLmlkKTtcbiAgICBzZXRFbnJvbGxlZElkcyhlbnJvbGxtZW50cy5tYXAoZSA9PiBlLmNvdXJzZUlkKSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZE9mZmxpbmVTdGF0dXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY291cnNlIG9mIGNvdXJzZXMpIHtcbiAgICAgIGlmIChhd2FpdCBpc0NvdXJzZU9mZmxpbmUoY291cnNlLmlkKSkge1xuICAgICAgICBpZHMucHVzaChjb3Vyc2UuaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRPZmZsaW5lQ291cnNlSWRzKGlkcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW5yb2xsID0gKGNvdXJzZUlkOiBzdHJpbmcpID0+IHtcbiAgICBlbnJvbGxTdHVkZW50KHVzZXIuaWQsIGNvdXJzZUlkKTtcbiAgICBsb2FkQ291cnNlcygpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBsb2dvdXQoKTtcbiAgICBuYXZpZ2F0ZSgnLycpO1xuICB9O1xuXG4gIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3ModXNlci5pZCk7XG4gIGNvbnN0IGNvbXBsZXRlZExlY3R1cmVzID0gcHJvZ3Jlc3MuZmlsdGVyKHAgPT4gcC5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgY29uc3QgdG90YWxFbnJvbGxlZExlY3R1cmVzID0gY291cnNlc1xuICAgIC5maWx0ZXIoYyA9PiBlbnJvbGxlZElkcy5pbmNsdWRlcyhjLmlkKSlcbiAgICAucmVkdWNlKChzdW0sIGMpID0+IHN1bSArIGMubGVjdHVyZXMubGVuZ3RoLCAwKTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gWydBbGwnLCAuLi5BcnJheS5mcm9tKG5ldyBTZXQoY291cnNlcy5tYXAoYyA9PiBjLmNhdGVnb3J5KSkpXTtcbiAgY29uc3QgeHBQcm9ncmVzcyA9IGdldFhQRm9yTmV4dExldmVsKGdhbWlTdGF0ZS54cCk7XG5cbiAgY29uc3QgZmlsdGVyZWRDb3Vyc2VzID0gY291cnNlcy5maWx0ZXIoY291cnNlID0+IHtcbiAgICBjb25zdCBtYXRjaGVzU2VhcmNoID0gY291cnNlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgIGNvdXJzZS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIGNvbnN0IG1hdGNoZXNDYXRlZ29yeSA9IGZpbHRlckNhdGVnb3J5ID09PSAnQWxsJyB8fCBjb3Vyc2UuY2F0ZWdvcnkgPT09IGZpbHRlckNhdGVnb3J5O1xuICAgIHJldHVybiBtYXRjaGVzU2VhcmNoICYmIG1hdGNoZXNDYXRlZ29yeTtcbiAgfSk7XG5cbiAgY29uc3QgZW5yb2xsZWRDb3Vyc2VzID0gY291cnNlcy5maWx0ZXIoYyA9PiBlbnJvbGxlZElkcy5pbmNsdWRlcyhjLmlkKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1zdXJmYWNlLTkwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICB7LyogQmFja2dyb3VuZCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBncmlkLWJnIHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuXG4gICAgICB7LyogVG9wIEJhciAqL31cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTAgZ2xhc3MgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnLycpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWxnIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYnJhbmQtNTAwIHRvLXB1cnBsZS02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxCcmFpbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIGhpZGRlbiBzbTpibG9ja1wiPk5ldXJvLUVkdSBPUzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMC41IHRleHQtWzEwcHhdIGZvbnQtbWVkaXVtIGJnLWJsdWUtNTAwLzEwIHRleHQtYmx1ZS0zMDAgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItYmx1ZS01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICBTdHVkZW50XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxMYW5ndWFnZVRvZ2dsZSBsYW5ndWFnZT17bGFuZ3VhZ2V9IG9uTGFuZ3VhZ2VDaGFuZ2U9e29uTGFuZ3VhZ2VDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zdXJmYWNlLTIwMCBoaWRkZW4gc206YmxvY2tcIj7wn46TIHt1c2VyLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnIHRleHQtc3VyZmFjZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy13aGl0ZS81IHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMb2dPdXQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIHsvKiBNYWluIENvbnRlbnQgKi99XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCBweS02XCI+XG4gICAgICAgIHsvKiBHYW1pZmljYXRpb24gQmFyICovfVxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTEwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItNlwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgYmctc3VyZmFjZS04MDAvNDAgYmFja2Ryb3AtYmx1ci1zbSBwLTQgc206cC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIGdhcC00IHNtOmdhcC02XCI+XG4gICAgICAgICAgICAgIHsvKiBYUCAmIExldmVsICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTEyIGgtMTIgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by1iciAke2dldExlYWd1ZUNvbG9yKGdhbWlTdGF0ZS5sZWFndWUpfSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhsIHNoYWRvdy1sZ2B9PlxuICAgICAgICAgICAgICAgICAgICB7Z2V0TGVhZ3VlSWNvbihnYW1pU3RhdGUubGVhZ3VlKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTEgLXJpZ2h0LTEgdy01IGgtNSByb3VuZGVkLWZ1bGwgYmctc3VyZmFjZS05MDAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGZvbnQtYm9sZCB0ZXh0LWJyYW5kLTMwMFwiPntnYW1pU3RhdGUubGV2ZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGVcIj57Z2FtaVN0YXRlLnhwfSBYUDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdXJmYWNlLTIwMFwiPkxldmVsIHtnYW1pU3RhdGUubGV2ZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0xLjUgcHktMC41IHRleHQtWzlweF0gZm9udC1tZWRpdW0gYmctYnJhbmQtNTAwLzEwIHRleHQtYnJhbmQtMzAwIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC8yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtnYW1pU3RhdGUubGVhZ3VlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMiByb3VuZGVkLWZ1bGwgYmctc3VyZmFjZS05MDAvNTAgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyB3aWR0aDogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgd2lkdGg6IGAke3hwUHJvZ3Jlc3MucHJvZ3Jlc3N9JWAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBlYXNlOiAnZWFzZU91dCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgcm91bmRlZC1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1icmFuZC01MDAgdmlhLXB1cnBsZS01MDAgdG8tcGluay01MDBcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXN1cmZhY2UtMjAwLzYwIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICB7eHBQcm9ncmVzcy5jdXJyZW50fS97eHBQcm9ncmVzcy5uZWVkZWR9IFhQIHRvIExldmVsIHtnYW1pU3RhdGUubGV2ZWwgKyAxfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogU3RyZWFrICYgUXVpY2sgU3RhdHMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgc206Z2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xLjUgcm91bmRlZC1sZyBiZy1vcmFuZ2UtNTAwLzEwIGJvcmRlciBib3JkZXItb3JhbmdlLTUwMC8yMFwiPlxuICAgICAgICAgICAgICAgICAgPEZsYW1lIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1vcmFuZ2UtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtb3JhbmdlLTMwMFwiPntnYW1pU3RhdGUuc3RyZWFrfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtb3JhbmdlLTMwMC83MFwiPmRheSBzdHJlYWs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9xdWl6Jyl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMgcHktMS41IHJvdW5kZWQtbGcgYmctcmVkLTUwMC8xMCBib3JkZXIgYm9yZGVyLXJlZC01MDAvMjAgaG92ZXI6YmctcmVkLTUwMC8yMCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFNoaWVsZCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcmVkLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtcmVkLTMwMFwiPlRha2UgUXVpejwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL29mZmxpbmUnKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xLjUgcm91bmRlZC1sZyBiZy1jeWFuLTUwMC8xMCBib3JkZXIgYm9yZGVyLWN5YW4tNTAwLzIwIGhvdmVyOmJnLWN5YW4tNTAwLzIwIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SGFyZERyaXZlIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1jeWFuLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtY3lhbi0zMDAgaGlkZGVuIHNtOmlubGluZVwiPk9mZmxpbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICB7LyogV2VsY29tZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGZvbnQtYm9sZFwiPldlbGNvbWUgYmFjaywge3VzZXIubmFtZS5zcGxpdCgnICcpWzBdfSDwn5GLPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3VyZmFjZS0yMDAgbXQtMVwiPkNvbnRpbnVlIHlvdXIgbGVhcm5pbmcgam91cm5leTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFN0YXRzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTQgZ2FwLTMgc206Z2FwLTQgbWItOFwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMDUgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBzbTpwLTQgcm91bmRlZC14bCBiZy1zdXJmYWNlLTgwMC8zMCBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgc206Z2FwLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IHNtOnctMTAgc206aC0xMCByb3VuZGVkLWxnIGJnLWJsdWUtNTAwLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEJvb2tPcGVuIGNsYXNzTmFtZT1cInctNCBoLTQgc206dy01IHNtOmgtNSB0ZXh0LWJsdWUtNDAwXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LTJ4bCBmb250LWJvbGRcIj57ZW5yb2xsZWRDb3Vyc2VzLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gc206dGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwXCI+RW5yb2xsZWQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIHNtOnAtNCByb3VuZGVkLXhsIGJnLXN1cmZhY2UtODAwLzMwIGJvcmRlciBib3JkZXItd2hpdGUvNVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBzbTpnYXAtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggc206dy0xMCBzbTpoLTEwIHJvdW5kZWQtbGcgYmctZ3JlZW4tNTAwLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFBsYXkgY2xhc3NOYW1lPVwidy00IGgtNCBzbTp3LTUgc206aC01IHRleHQtZ3JlZW4tNDAwXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LTJ4bCBmb250LWJvbGRcIj57Y29tcGxldGVkTGVjdHVyZXN9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHNtOnRleHQteHMgdGV4dC1zdXJmYWNlLTIwMFwiPkNvbXBsZXRlZDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4xNSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIHNtOnAtNCByb3VuZGVkLXhsIGJnLXN1cmZhY2UtODAwLzMwIGJvcmRlciBib3JkZXItd2hpdGUvNVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBzbTpnYXAtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggc206dy0xMCBzbTpoLTEwIHJvdW5kZWQtbGcgYmctcHVycGxlLTUwMC8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwIGNsYXNzTmFtZT1cInctNCBoLTQgc206dy01IHNtOmgtNSB0ZXh0LXB1cnBsZS00MDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQtMnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAge3RvdGFsRW5yb2xsZWRMZWN0dXJlcyA+IDAgPyBNYXRoLnJvdW5kKChjb21wbGV0ZWRMZWN0dXJlcyAvIHRvdGFsRW5yb2xsZWRMZWN0dXJlcykgKiAxMDApIDogMH0lXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHNtOnRleHQteHMgdGV4dC1zdXJmYWNlLTIwMFwiPlByb2dyZXNzPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBzbTpwLTQgcm91bmRlZC14bCBiZy1zdXJmYWNlLTgwMC8zMCBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgc206Z2FwLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IHNtOnctMTAgc206aC0xMCByb3VuZGVkLWxnIGJnLWFtYmVyLTUwMC8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxBd2FyZCBjbGFzc05hbWU9XCJ3LTQgaC00IHNtOnctNSBzbTpoLTUgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQtMnhsIGZvbnQtYm9sZFwiPntnYW1pU3RhdGUuYmFkZ2VzLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gc206dGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwXCI+QmFkZ2VzPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEJhZGdlcyBSb3cgKi99XG4gICAgICAgIHtnYW1pU3RhdGUuYmFkZ2VzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMjUgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLThcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1zdXJmYWNlLTIwMCBtYi0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxUcm9waHkgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWFtYmVyLTQwMFwiIC8+XG4gICAgICAgICAgICAgIFJlY2VudCBCYWRnZXNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG92ZXJmbG93LXgtYXV0byBwYi0yXCI+XG4gICAgICAgICAgICAgIHtnYW1pU3RhdGUuYmFkZ2VzLnNsaWNlKC01KS5tYXAoKGJhZGdlKSA9PiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17YmFkZ2UuaWR9XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0zIHB5LTIgcm91bmRlZC14bCBiZy1zdXJmYWNlLTgwMC8zMCBib3JkZXIgYm9yZGVyLXdoaXRlLzUgc2hyaW5rLTBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj57YmFkZ2UuaWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj57YmFkZ2UubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3VyZmFjZS0yMDAvNjBcIj57YmFkZ2UuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogRW5yb2xsZWQgQ291cnNlcyAqL31cbiAgICAgICAge2Vucm9sbGVkQ291cnNlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPENsb2NrIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1icmFuZC00MDBcIiAvPlxuICAgICAgICAgICAgICBNeSBDb3Vyc2VzXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICAgIHtlbnJvbGxlZENvdXJzZXMubWFwKChjb3Vyc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3Vyc2VQcm9ncmVzcyA9IHByb2dyZXNzLmZpbHRlcihwID0+IFxuICAgICAgICAgICAgICAgICAgY291cnNlLmxlY3R1cmVzLnNvbWUobCA9PiBsLmlkID09PSBwLmxlY3R1cmVJZCkgJiYgcC5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICApLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbExlY3R1cmVzID0gY291cnNlLmxlY3R1cmVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gdG90YWxMZWN0dXJlcyA+IDAgPyBNYXRoLnJvdW5kKChjb3Vyc2VQcm9ncmVzcyAvIHRvdGFsTGVjdHVyZXMpICogMTAwKSA6IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNPZmZsaW5lID0gb2ZmbGluZUNvdXJzZUlkcy5pbmNsdWRlcyhjb3Vyc2UuaWQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17Y291cnNlLmlkfVxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvY291cnNlLyR7Y291cnNlLmlkfWApfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzUgYmctc3VyZmFjZS04MDAvMzAgb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOmJvcmRlci1icmFuZC01MDAvMzAgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMzIgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1icmFuZC02MDAvMjAgdG8tcHVycGxlLTYwMC8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCb29rT3BlbiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgdGV4dC1icmFuZC00MDAvNDAgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMyByaWdodC0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc09mZmxpbmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0xLjUgcHktMC41IHRleHQtWzlweF0gZm9udC1tZWRpdW0gYmctY3lhbi01MDAvMTAgdGV4dC1jeWFuLTMwMCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1jeWFuLTUwMC8yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9mZmxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMC41IHRleHQtWzEwcHhdIGZvbnQtbWVkaXVtIGJnLWdyZWVuLTUwMC8xMCB0ZXh0LWdyZWVuLTMwMCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1ncmVlbi01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3BlcmNlbnR9JVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgZ3JvdXAtaG92ZXI6dGV4dC1icmFuZC0zMDAgdHJhbnNpdGlvbi1jb2xvcnMgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vyc2UudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDAgbXQtMVwiPntjb3Vyc2UudGVhY2hlck5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLjUgcm91bmRlZC1mdWxsIGJnLXN1cmZhY2UtOTAwLzUwIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHdpZHRoOiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB3aWR0aDogYCR7cGVyY2VudH0lYCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgZGVsYXk6IDAuMiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJyYW5kLTUwMCB0by1wdXJwbGUtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdXJmYWNlLTIwMC82MCBtdC0xXCI+e2NvdXJzZVByb2dyZXNzfS97dG90YWxMZWN0dXJlc30gbGVjdHVyZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIEJyb3dzZSBDb3Vyc2VzICovfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYnJhbmQtNDAwXCIgLz5cbiAgICAgICAgICAgIEJyb3dzZSBDb3Vyc2VzXG4gICAgICAgICAgPC9oMj5cblxuICAgICAgICAgIHsvKiBTZWFyY2ggJiBGaWx0ZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC0zIG1iLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTQgaC00IHRleHQtc3VyZmFjZS0yMDAvNTBcIiAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGNvdXJzZXMuLi5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwbC0xMCBwci00IHB5LTIuNSByb3VuZGVkLXhsIGJnLXN1cmZhY2UtODAwLzUwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgdGV4dC1zbSB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyOnRleHQtc3VyZmFjZS0yMDAvNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1icmFuZC01MDAvNTBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG92ZXJmbG93LXgtYXV0byBwYi0xXCI+XG4gICAgICAgICAgICAgIDxGaWx0ZXIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXN1cmZhY2UtMjAwLzUwIHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdCA9PiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXtjYXR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXJDYXRlZ29yeShjYXQpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xLjUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckNhdGVnb3J5ID09PSBjYXRcbiAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1icmFuZC02MDAgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1zdXJmYWNlLTgwMC81MCB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCdcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjYXR9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ291cnNlIEdyaWQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRDb3Vyc2VzLm1hcCgoY291cnNlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVucm9sbGVkID0gZW5yb2xsZWRJZHMuaW5jbHVkZXMoY291cnNlLmlkKTtcbiAgICAgICAgICAgICAgY29uc3QgaXNPZmZsaW5lID0gb2ZmbGluZUNvdXJzZUlkcy5pbmNsdWRlcyhjb3Vyc2UuaWQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17Y291cnNlLmlkfVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzUgYmctc3VyZmFjZS04MDAvMzAgb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOmJvcmRlci1icmFuZC01MDAvMzAgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMzIgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1icmFuZC02MDAvMjAgdG8tcHVycGxlLTYwMC8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvY291cnNlLyR7Y291cnNlLmlkfWApfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Qm9va09wZW4gY2xhc3NOYW1lPVwidy0xMiBoLTEyIHRleHQtYnJhbmQtNDAwLzQwIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0zIGxlZnQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMC41IHRleHQtWzEwcHhdIGZvbnQtbWVkaXVtIGJnLWJyYW5kLTUwMC8xMCB0ZXh0LWJyYW5kLTMwMCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1icmFuZC01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vyc2UuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMyByaWdodC0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXNPZmZsaW5lICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTEuNSBweS0wLjUgdGV4dC1bOXB4XSBmb250LW1lZGl1bSBiZy1jeWFuLTUwMC8xMCB0ZXh0LWN5YW4tMzAwIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWN5YW4tNTAwLzIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJ3LTIuNSBoLTIuNSBpbmxpbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBweS0wLjUgdGV4dC1bMTBweF0gZm9udC1tZWRpdW0gYmctc3VyZmFjZS05MDAvODAgdGV4dC1zdXJmYWNlLTIwMCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vyc2UubGVjdHVyZXMubGVuZ3RofSBsZWNcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgZ3JvdXAtaG92ZXI6dGV4dC1icmFuZC0zMDAgdHJhbnNpdGlvbi1jb2xvcnMgY3Vyc29yLXBvaW50ZXIgdHJ1bmNhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvY291cnNlLyR7Y291cnNlLmlkfWApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2NvdXJzZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwIG10LTEgbGluZS1jbGFtcC0yXCI+e2NvdXJzZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDAvNjAgdHJ1bmNhdGVcIj5ieSB7Y291cnNlLnRlYWNoZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbnJvbGxlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvY291cnNlLyR7Y291cnNlLmlkfWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gYmctYnJhbmQtNjAwLzIwIHRleHQtYnJhbmQtMzAwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1icmFuZC01MDAvMjAgaG92ZXI6YmctYnJhbmQtNjAwLzMwIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVlIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVucm9sbChjb3Vyc2UuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gYmctYnJhbmQtNjAwIGhvdmVyOmJnLWJyYW5kLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5yb2xsIEZyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge2ZpbHRlcmVkQ291cnNlcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMlwiPlxuICAgICAgICAgICAgICA8U2VhcmNoIGNsYXNzTmFtZT1cInctMTAgaC0xMCB0ZXh0LXN1cmZhY2UtMjAwLzIwIG14LWF1dG8gbWItM1wiIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zdXJmYWNlLTIwMFwiPk5vIGNvdXJzZXMgZm91bmQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ2VydGlmaWNhdGUgRG93bmxvYWRzIGZvciBDb21wbGV0ZWQgQ291cnNlcyAqL31cbiAgICAgICAge2Vucm9sbGVkQ291cnNlcy5maWx0ZXIoYyA9PiB7XG4gICAgICAgICAgY29uc3QgY291cnNlUHJvZ3Jlc3MgPSBwcm9ncmVzcy5maWx0ZXIocCA9PiBcbiAgICAgICAgICAgIGMubGVjdHVyZXMuc29tZShsID0+IGwuaWQgPT09IHAubGVjdHVyZUlkKSAmJiBwLmNvbXBsZXRlZFxuICAgICAgICAgICkubGVuZ3RoO1xuICAgICAgICAgIHJldHVybiBjLmxlY3R1cmVzLmxlbmd0aCA+IDAgJiYgY291cnNlUHJvZ3Jlc3MgPT09IGMubGVjdHVyZXMubGVuZ3RoO1xuICAgICAgICB9KS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xMCBtYi04XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPEF3YXJkIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICB7dHIuY2VydGlmaWNhdGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICAgIHtlbnJvbGxlZENvdXJzZXMuZmlsdGVyKGMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdXJzZVByb2dyZXNzID0gcHJvZ3Jlc3MuZmlsdGVyKHAgPT4gXG4gICAgICAgICAgICAgICAgICBjLmxlY3R1cmVzLnNvbWUobCA9PiBsLmlkID09PSBwLmxlY3R1cmVJZCkgJiYgcC5jb21wbGV0ZWRcbiAgICAgICAgICAgICAgICApLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5sZWN0dXJlcy5sZW5ndGggPiAwICYmIGNvdXJzZVByb2dyZXNzID09PSBjLmxlY3R1cmVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgfSkubWFwKGNvdXJzZSA9PiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17Y291cnNlLmlkfVxuICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzIwIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYW1iZXItNTAwLzUgdG8teWVsbG93LTUwMC81XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by1iciBmcm9tLWFtYmVyLTUwMC8yMCB0by15ZWxsb3ctNTAwLzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEF3YXJkIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57Y291cnNlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1ncmVlbi0zMDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZTIgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+IDEwMCUgQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvY2VydGlmaWNhdGUvJHtjb3Vyc2UuaWR9YCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgdGV4dC14cyBmb250LW1lZGl1bSBiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItNjAwIHRvLXllbGxvdy02MDAgaG92ZXI6ZnJvbS1hbWJlci01MDAgaG92ZXI6dG8teWVsbG93LTUwMCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7dHIuZG93bmxvYWRDZXJ0aWZpY2F0ZX1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxGb290ZXIgbGFuZ3VhZ2U9e2xhbmd1YWdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvd29ya3NwYWNlL3NyYy9wYWdlcy9TdHVkZW50RGFzaGJvYXJkLnRzeCJ9