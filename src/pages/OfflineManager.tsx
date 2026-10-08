import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/OfflineManager.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/pages/OfflineManager.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=620eb88c"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=d53b2b6e";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=6e0f127a";
import {
  Brain,
  ArrowLeft,
  Download,
  Wifi,
  WifiOff,
  Cloud,
  CloudOff,
  CheckCircle2,
  Clock,
  Trash2,
  RefreshCw,
  HardDrive,
  Calendar,
  ArrowUpCircle
} from "/node_modules/.vite/deps/lucide-react.js?v=6a865639";
import { getCourses } from "/src/lib/store.ts";
import {
  getOfflineCourses,
  deleteOfflineCourse,
  saveCourseForOffline,
  getAttendance,
  markAttendance,
  syncAttendance
} from "/src/lib/db.ts";
import { t } from "/src/lib/i18n.ts";
import Footer from "/src/components/Footer.tsx";
export default function OfflineManager({ user, language }) {
  _s();
  const tr = t(language);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("downloads");
  const [offlineCourses, setOfflineCourses] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [downloading, setDownloading] = useState(null);
  const [syncing, setSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState("");
  const [availableCourses, setAvailableCourses] = useState(getCourses().filter((c) => c.published));
  useEffect(() => {
    loadData();
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  const loadData = async () => {
    const courses = await getOfflineCourses();
    setOfflineCourses(courses);
    const att = await getAttendance(user.id);
    setAttendance(att);
  };
  const handleDownload = async (courseId) => {
    setDownloading(courseId);
    const course = availableCourses.find((c) => c.id === courseId);
    if (!course) return;
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    const offlineCourse = {
      id: course.id,
      title: course.title,
      description: course.description,
      category: course.category,
      teacherName: course.teacherName,
      lectures: course.lectures.map((l) => ({
        id: l.id,
        title: l.title,
        description: l.description,
        videoUrl: l.videoUrl,
        duration: l.duration,
        order: l.order,
        // Mock video blob (in real app, fetch actual video)
        videoBlob: new Blob(["mock-video-data"], { type: "video/mp4" })
      })),
      downloadedAt: Date.now(),
      size: course.lectures.length * 50 * 1024 * 1024
      // Mock: 50MB per lecture
    };
    await saveCourseForOffline(offlineCourse);
    setDownloading(null);
    loadData();
  };
  const handleDeleteOffline = async (courseId) => {
    await deleteOfflineCourse(courseId);
    loadData();
  };
  const handleMarkAttendance = async (courseId, courseTitle) => {
    await markAttendance(user.id, courseId, courseTitle, isOnline);
    loadData();
  };
  const handleSync = async () => {
    setSyncing(true);
    setSyncMessage("");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const count = await syncAttendance();
    setSyncMessage(`Synced ${count} records successfully!`);
    setSyncing(false);
    loadData();
    setTimeout(() => setSyncMessage(""), 3e3);
  };
  const formatSize = (bytes) => {
    if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(0)} MB`;
    return `${(bytes / 1024).toFixed(0)} KB`;
  };
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const unsyncedCount = attendance.filter((a) => !a.isSynced).length;
  const totalOfflineSize = offlineCourses.reduce((sum, c) => sum + c.size, 0);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 grid-bg pointer-events-none" }, void 0, false, {
      fileName: "/workspace/src/pages/OfflineManager.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 glass border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-14", children: [
      /* @__PURE__ */ jsxDEV("button", { onClick: () => navigate("/student"), className: "flex items-center gap-2 text-surface-200 hover:text-white transition-colors", children: [
        /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/workspace/src/pages/OfflineManager.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm", children: "Back" }, void 0, false, {
          fileName: "/workspace/src/pages/OfflineManager.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/OfflineManager.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-6 h-6 rounded-md bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Brain, { className: "w-3.5 h-3.5 text-white" }, void 0, false, {
          fileName: "/workspace/src/pages/OfflineManager.tsx",
          lineNumber: 169,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/workspace/src/pages/OfflineManager.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium", children: "Offline Manager" }, void 0, false, {
          fileName: "/workspace/src/pages/OfflineManager.tsx",
          lineNumber: 171,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/OfflineManager.tsx",
        lineNumber: 167,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: `flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${isOnline ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`, children: [
        isOnline ? /* @__PURE__ */ jsxDEV(Wifi, { className: "w-3.5 h-3.5" }, void 0, false, {
          fileName: "/workspace/src/pages/OfflineManager.tsx",
          lineNumber: 176,
          columnNumber: 27
        }, this) : /* @__PURE__ */ jsxDEV(WifiOff, { className: "w-3.5 h-3.5" }, void 0, false, {
          fileName: "/workspace/src/pages/OfflineManager.tsx",
          lineNumber: 176,
          columnNumber: 62
        }, this),
        isOnline ? "Online" : "Offline"
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/OfflineManager.tsx",
        lineNumber: 173,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/OfflineManager.tsx",
      lineNumber: 162,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/OfflineManager.tsx",
      lineNumber: 161,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/OfflineManager.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-8 p-1 rounded-xl bg-surface-800/30 border border-white/5", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setActiveTab("downloads"),
            className: `flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === "downloads" ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20" : "text-surface-200 hover:text-white"}`,
            children: /* @__PURE__ */ jsxDEV("span", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Download, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 195,
                columnNumber: 15
              }, this),
              "Downloads",
              /* @__PURE__ */ jsxDEV("span", { className: "px-1.5 py-0.5 text-[10px] rounded-full bg-white/10", children: offlineCourses.length }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 197,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 194,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/OfflineManager.tsx",
            lineNumber: 186,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setActiveTab("attendance"),
            className: `flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === "attendance" ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20" : "text-surface-200 hover:text-white"}`,
            children: /* @__PURE__ */ jsxDEV("span", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Calendar, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 209,
                columnNumber: 15
              }, this),
              "Attendance",
              unsyncedCount > 0 && /* @__PURE__ */ jsxDEV("span", { className: "px-1.5 py-0.5 text-[10px] rounded-full bg-amber-500/20 text-amber-300", children: unsyncedCount }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 212,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 208,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/OfflineManager.tsx",
            lineNumber: 200,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/OfflineManager.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      activeTab === "downloads" && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-surface-800/30 border border-white/5 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-surface-200 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV(HardDrive, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/workspace/src/pages/OfflineManager.tsx",
                    lineNumber: 228,
                    columnNumber: 19
                  }, this),
                  "Offline Storage Used"
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/OfflineManager.tsx",
                  lineNumber: 227,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium text-brand-300", children: formatSize(totalOfflineSize) }, void 0, false, {
                  fileName: "/workspace/src/pages/OfflineManager.tsx",
                  lineNumber: 231,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 226,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "w-full h-2 rounded-full bg-surface-900/50 overflow-hidden", children: /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${Math.min(totalOfflineSize / (2 * 1024 * 1024 * 1024) * 100, 100)}%` },
                  className: "h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
                },
                void 0,
                false,
                {
                  fileName: "/workspace/src/pages/OfflineManager.tsx",
                  lineNumber: 234,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 233,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-surface-200/60 mt-1", children: "of 2 GB available" }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 240,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 225,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mb-4", children: "Downloaded Courses" }, void 0, false, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 244,
              columnNumber: 13
            }, this),
            offlineCourses.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-12 rounded-2xl border border-white/5 bg-surface-800/20", children: [
              /* @__PURE__ */ jsxDEV(Download, { className: "w-12 h-12 text-surface-200/20 mx-auto mb-4" }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 248,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200", children: "No courses downloaded yet" }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 249,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200/60 mt-1", children: "Download courses to access them offline" }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 250,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 247,
              columnNumber: 11
            }, this) : /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: offlineCourses.map(
              (course) => /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  layout: true,
                  className: "p-4 rounded-xl bg-surface-800/30 border border-white/5",
                  children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-semibold text-white truncate", children: course.title }, void 0, false, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 262,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-1", children: [
                        course.lectures.length,
                        " lectures • ",
                        formatSize(course.size)
                      ] }, void 0, true, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 263,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-surface-200/60 mt-1", children: [
                        "Downloaded ",
                        formatDate(course.downloadedAt)
                      ] }, void 0, true, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 264,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 261,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => handleDeleteOffline(course.id),
                        className: "p-2 rounded-lg text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-all",
                        children: /* @__PURE__ */ jsxDEV(Trash2, { className: "w-4 h-4" }, void 0, false, {
                          fileName: "/workspace/src/pages/OfflineManager.tsx",
                          lineNumber: 270,
                          columnNumber: 25
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 266,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/OfflineManager.tsx",
                    lineNumber: 260,
                    columnNumber: 21
                  }, this)
                },
                course.id,
                false,
                {
                  fileName: "/workspace/src/pages/OfflineManager.tsx",
                  lineNumber: 255,
                  columnNumber: 13
                },
                this
              )
            ) }, void 0, false, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 253,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mt-8 mb-4", children: "Available Courses" }, void 0, false, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 279,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: availableCourses.map((course) => {
              const isDownloaded = offlineCourses.some((c) => c.id === course.id);
              const isDownloading = downloading === course.id;
              return /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  layout: true,
                  className: "p-4 rounded-xl bg-surface-800/30 border border-white/5",
                  children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-semibold text-white truncate", children: course.title }, void 0, false, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 293,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-1", children: [
                        course.lectures.length,
                        " lectures"
                      ] }, void 0, true, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 294,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 292,
                      columnNumber: 23
                    }, this),
                    isDownloaded ? /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-green-500/10 text-green-300 rounded-lg border border-green-500/20", children: [
                      /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5" }, void 0, false, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 298,
                        columnNumber: 27
                      }, this),
                      "Downloaded"
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 297,
                      columnNumber: 21
                    }, this) : /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => handleDownload(course.id),
                        disabled: isDownloading,
                        className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-brand-600 hover:bg-brand-500 rounded-lg transition-all disabled:opacity-50",
                        children: isDownloading ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                          /* @__PURE__ */ jsxDEV(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }, void 0, false, {
                            fileName: "/workspace/src/pages/OfflineManager.tsx",
                            lineNumber: 309,
                            columnNumber: 31
                          }, this),
                          "Downloading..."
                        ] }, void 0, true, {
                          fileName: "/workspace/src/pages/OfflineManager.tsx",
                          lineNumber: 308,
                          columnNumber: 23
                        }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                          /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
                            fileName: "/workspace/src/pages/OfflineManager.tsx",
                            lineNumber: 314,
                            columnNumber: 31
                          }, this),
                          "Download"
                        ] }, void 0, true, {
                          fileName: "/workspace/src/pages/OfflineManager.tsx",
                          lineNumber: 313,
                          columnNumber: 23
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 302,
                        columnNumber: 21
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/OfflineManager.tsx",
                    lineNumber: 291,
                    columnNumber: 21
                  }, this)
                },
                course.id,
                false,
                {
                  fileName: "/workspace/src/pages/OfflineManager.tsx",
                  lineNumber: 286,
                  columnNumber: 17
                },
                this
              );
            }) }, void 0, false, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 280,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/OfflineManager.tsx",
          lineNumber: 220,
          columnNumber: 9
        },
        this
      ),
      activeTab === "attendance" && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-surface-800/30 border border-white/5 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                  isOnline ? /* @__PURE__ */ jsxDEV(Cloud, { className: "w-5 h-5 text-green-400" }, void 0, false, {
                    fileName: "/workspace/src/pages/OfflineManager.tsx",
                    lineNumber: 339,
                    columnNumber: 17
                  }, this) : /* @__PURE__ */ jsxDEV(CloudOff, { className: "w-5 h-5 text-red-400" }, void 0, false, {
                    fileName: "/workspace/src/pages/OfflineManager.tsx",
                    lineNumber: 341,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-white", children: isOnline ? "Connected to server" : "Offline mode active" }, void 0, false, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 344,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200", children: unsyncedCount > 0 ? `${unsyncedCount} record${unsyncedCount > 1 ? "s" : ""} pending sync` : "All records synced" }, void 0, false, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 347,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/OfflineManager.tsx",
                    lineNumber: 343,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/OfflineManager.tsx",
                  lineNumber: 337,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: handleSync,
                    disabled: !isOnline || syncing || unsyncedCount === 0,
                    className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-brand-600 hover:bg-brand-500 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                    children: syncing ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                      /* @__PURE__ */ jsxDEV(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }, void 0, false, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 361,
                        columnNumber: 23
                      }, this),
                      "Syncing..."
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 360,
                      columnNumber: 17
                    }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                      /* @__PURE__ */ jsxDEV(ArrowUpCircle, { className: "w-3.5 h-3.5" }, void 0, false, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 366,
                        columnNumber: 23
                      }, this),
                      "Sync Now"
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 365,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/workspace/src/pages/OfflineManager.tsx",
                    lineNumber: 354,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 336,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(AnimatePresence, { children: syncMessage && /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  className: "mt-3 p-2 rounded-lg bg-green-500/10 border border-green-500/20",
                  children: /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-green-300", children: syncMessage }, void 0, false, {
                    fileName: "/workspace/src/pages/OfflineManager.tsx",
                    lineNumber: 381,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/workspace/src/pages/OfflineManager.tsx",
                  lineNumber: 375,
                  columnNumber: 15
                },
                this
              ) }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 373,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 335,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mb-4", children: "Mark Attendance" }, void 0, false, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 388,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 mb-8", children: availableCourses.slice(0, 3).map(
              (course) => /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  layout: true,
                  className: "p-4 rounded-xl bg-surface-800/30 border border-white/5",
                  children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-semibold text-white truncate", children: course.title }, void 0, false, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 398,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-1", children: course.category }, void 0, false, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 399,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 397,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => handleMarkAttendance(course.id, course.title),
                        className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-brand-600 hover:bg-brand-500 rounded-lg transition-all",
                        children: [
                          /* @__PURE__ */ jsxDEV(Calendar, { className: "w-3.5 h-3.5" }, void 0, false, {
                            fileName: "/workspace/src/pages/OfflineManager.tsx",
                            lineNumber: 405,
                            columnNumber: 23
                          }, this),
                          "Mark Present"
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 401,
                        columnNumber: 21
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/OfflineManager.tsx",
                    lineNumber: 396,
                    columnNumber: 19
                  }, this)
                },
                course.id,
                false,
                {
                  fileName: "/workspace/src/pages/OfflineManager.tsx",
                  lineNumber: 391,
                  columnNumber: 13
                },
                this
              )
            ) }, void 0, false, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 389,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mb-4", children: "Attendance History" }, void 0, false, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 414,
              columnNumber: 13
            }, this),
            attendance.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-12 rounded-2xl border border-white/5 bg-surface-800/20", children: [
              /* @__PURE__ */ jsxDEV(Calendar, { className: "w-12 h-12 text-surface-200/20 mx-auto mb-4" }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 418,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200", children: "No attendance records yet" }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 419,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200/60 mt-1", children: "Mark your attendance for courses above" }, void 0, false, {
                fileName: "/workspace/src/pages/OfflineManager.tsx",
                lineNumber: 420,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 417,
              columnNumber: 11
            }, this) : /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: attendance.slice(0, 20).map(
              (record) => /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: 1, x: 0 },
                  className: "p-3 rounded-xl bg-surface-800/30 border border-white/5 flex items-center gap-3",
                  children: [
                    /* @__PURE__ */ jsxDEV("div", { className: `w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${record.isSynced ? "bg-green-500/20 text-green-400" : "bg-amber-500/20 text-amber-400"}`, children: record.isSynced ? /* @__PURE__ */ jsxDEV(Cloud, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 437,
                      columnNumber: 17
                    }, this) : /* @__PURE__ */ jsxDEV(Clock, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 439,
                      columnNumber: 17
                    }, this) }, void 0, false, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 431,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-white truncate", children: record.courseTitle }, void 0, false, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 443,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-surface-200/60", children: new Date(record.timestamp).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      }) }, void 0, false, {
                        fileName: "/workspace/src/pages/OfflineManager.tsx",
                        lineNumber: 444,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 442,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: `px-2 py-0.5 text-[10px] font-medium rounded-full ${record.isSynced ? "bg-green-500/10 text-green-300 border border-green-500/20" : "bg-amber-500/10 text-amber-300 border border-amber-500/20"}`, children: record.isSynced ? "Synced" : "Pending" }, void 0, false, {
                      fileName: "/workspace/src/pages/OfflineManager.tsx",
                      lineNumber: 454,
                      columnNumber: 21
                    }, this)
                  ]
                },
                record.id,
                true,
                {
                  fileName: "/workspace/src/pages/OfflineManager.tsx",
                  lineNumber: 425,
                  columnNumber: 13
                },
                this
              )
            ) }, void 0, false, {
              fileName: "/workspace/src/pages/OfflineManager.tsx",
              lineNumber: 423,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/OfflineManager.tsx",
          lineNumber: 330,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/OfflineManager.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { language }, void 0, false, {
      fileName: "/workspace/src/pages/OfflineManager.tsx",
      lineNumber: 469,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/workspace/src/pages/OfflineManager.tsx",
    lineNumber: 156,
    columnNumber: 5
  }, this);
}
_s(OfflineManager, "FClwKLNOnopWO4IJB0o/tAauzNo=", false, function() {
  return [useNavigate];
});
_c = OfflineManager;
var _c;
$RefreshReg$(_c, "OfflineManager");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/pages/OfflineManager.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/pages/OfflineManager.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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d0JBQ1R0QixPQUFPO0FBQUEsd0JBQ1BDLEtBQUs7QUFBQSx3QkFDTEMsTUFBTTtBQUFBLHdCQUNOQyxRQUFRO0FBQUEsc0JBQ1YsQ0FBQyxLQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUUE7QUFBQSx5QkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVdBO0FBQUEsb0JBQ0EsdUJBQUMsVUFBSyxXQUFXLG9EQUNmaUIsT0FBT2QsV0FDSCw4REFDQSwyREFBMkQsSUFFOURjLGlCQUFPZCxXQUFXLFdBQVcsYUFMaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFNQTtBQUFBO0FBQUE7QUFBQSxnQkFsQ0tjLE9BQU8xRDtBQUFBQSxnQkFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBb0NBO0FBQUEsWUFDRCxLQXZDSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXdDQTtBQUFBO0FBQUE7QUFBQSxRQXJJSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF1SUE7QUFBQSxTQTFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBNFJBO0FBQUEsSUFFQSx1QkFBQyxVQUFPLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEyQjtBQUFBLE9BelQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMFRBO0FBRUo7QUFBQ2hDLEdBN2F1QkgsZ0JBQWM7QUFBQSxVQUVuQjFCLFdBQVc7QUFBQTtBQUFBLEtBRk4wQjtBQUFjLElBQUFnRztBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU5hdmlnYXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQnJhaW4iLCJBcnJvd0xlZnQiLCJEb3dubG9hZCIsIldpZmkiLCJXaWZpT2ZmIiwiQ2xvdWQiLCJDbG91ZE9mZiIsIkNoZWNrQ2lyY2xlMiIsIkNsb2NrIiwiVHJhc2gyIiwiUmVmcmVzaEN3IiwiSGFyZERyaXZlIiwiQ2FsZW5kYXIiLCJBcnJvd1VwQ2lyY2xlIiwiZ2V0Q291cnNlcyIsImdldE9mZmxpbmVDb3Vyc2VzIiwiZGVsZXRlT2ZmbGluZUNvdXJzZSIsInNhdmVDb3Vyc2VGb3JPZmZsaW5lIiwiZ2V0QXR0ZW5kYW5jZSIsIm1hcmtBdHRlbmRhbmNlIiwic3luY0F0dGVuZGFuY2UiLCJ0IiwiRm9vdGVyIiwiT2ZmbGluZU1hbmFnZXIiLCJ1c2VyIiwibGFuZ3VhZ2UiLCJfcyIsInRyIiwibmF2aWdhdGUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJvZmZsaW5lQ291cnNlcyIsInNldE9mZmxpbmVDb3Vyc2VzIiwiYXR0ZW5kYW5jZSIsInNldEF0dGVuZGFuY2UiLCJpc09ubGluZSIsInNldElzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiZG93bmxvYWRpbmciLCJzZXREb3dubG9hZGluZyIsInN5bmNpbmciLCJzZXRTeW5jaW5nIiwic3luY01lc3NhZ2UiLCJzZXRTeW5jTWVzc2FnZSIsImF2YWlsYWJsZUNvdXJzZXMiLCJzZXRBdmFpbGFibGVDb3Vyc2VzIiwiZmlsdGVyIiwiYyIsInB1Ymxpc2hlZCIsImxvYWREYXRhIiwiaGFuZGxlT25saW5lIiwiaGFuZGxlT2ZmbGluZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY291cnNlcyIsImF0dCIsImlkIiwiaGFuZGxlRG93bmxvYWQiLCJjb3Vyc2VJZCIsImNvdXJzZSIsImZpbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJvZmZsaW5lQ291cnNlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwidGVhY2hlck5hbWUiLCJsZWN0dXJlcyIsIm1hcCIsImwiLCJ2aWRlb1VybCIsImR1cmF0aW9uIiwib3JkZXIiLCJ2aWRlb0Jsb2IiLCJCbG9iIiwidHlwZSIsImRvd25sb2FkZWRBdCIsIkRhdGUiLCJub3ciLCJzaXplIiwibGVuZ3RoIiwiaGFuZGxlRGVsZXRlT2ZmbGluZSIsImhhbmRsZU1hcmtBdHRlbmRhbmNlIiwiY291cnNlVGl0bGUiLCJoYW5kbGVTeW5jIiwiY291bnQiLCJmb3JtYXRTaXplIiwiYnl0ZXMiLCJ0b0ZpeGVkIiwiZm9ybWF0RGF0ZSIsInRpbWVzdGFtcCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInVuc3luY2VkQ291bnQiLCJhIiwiaXNTeW5jZWQiLCJ0b3RhbE9mZmxpbmVTaXplIiwicmVkdWNlIiwic3VtIiwib3BhY2l0eSIsInkiLCJ3aWR0aCIsIk1hdGgiLCJtaW4iLCJpc0Rvd25sb2FkZWQiLCJzb21lIiwiaXNEb3dubG9hZGluZyIsImhlaWdodCIsInNsaWNlIiwicmVjb3JkIiwieCIsIndlZWtkYXkiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJPZmZsaW5lTWFuYWdlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgXG4gIEJyYWluLCBBcnJvd0xlZnQsIERvd25sb2FkLCBXaWZpLCBXaWZpT2ZmLCBDbG91ZCwgXG4gIENsb3VkT2ZmLCBDaGVja0NpcmNsZTIsIENsb2NrLCBCb29rT3BlbiwgVHJhc2gyLFxuICBSZWZyZXNoQ3csIEhhcmREcml2ZSwgQ2FsZW5kYXIsIE1hcFBpbiwgQXJyb3dVcENpcmNsZVxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgVXNlciwgZ2V0Q291cnNlcyB9IGZyb20gJy4uL2xpYi9zdG9yZSc7XG5pbXBvcnQgeyBcbiAgT2ZmbGluZUNvdXJzZSwgZ2V0T2ZmbGluZUNvdXJzZXMsIGRlbGV0ZU9mZmxpbmVDb3Vyc2UsIGlzQ291cnNlT2ZmbGluZSxcbiAgc2F2ZUNvdXJzZUZvck9mZmxpbmUsIGdldEF0dGVuZGFuY2UsIG1hcmtBdHRlbmRhbmNlLCBzeW5jQXR0ZW5kYW5jZSxcbiAgQXR0ZW5kYW5jZVJlY29yZFxufSBmcm9tICcuLi9saWIvZGInO1xuXG5pbXBvcnQgeyBMYW5ndWFnZSwgdCB9IGZyb20gJy4uL2xpYi9pMThuJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5pbnRlcmZhY2UgT2ZmbGluZU1hbmFnZXJQcm9wcyB7XG4gIHVzZXI6IFVzZXI7XG4gIGxhbmd1YWdlOiBMYW5ndWFnZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2ZmbGluZU1hbmFnZXIoeyB1c2VyLCBsYW5ndWFnZSB9OiBPZmZsaW5lTWFuYWdlclByb3BzKSB7XG4gIGNvbnN0IHRyID0gdChsYW5ndWFnZSk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPCdkb3dubG9hZHMnIHwgJ2F0dGVuZGFuY2UnPignZG93bmxvYWRzJyk7XG4gIGNvbnN0IFtvZmZsaW5lQ291cnNlcywgc2V0T2ZmbGluZUNvdXJzZXNdID0gdXNlU3RhdGU8T2ZmbGluZUNvdXJzZVtdPihbXSk7XG4gIGNvbnN0IFthdHRlbmRhbmNlLCBzZXRBdHRlbmRhbmNlXSA9IHVzZVN0YXRlPEF0dGVuZGFuY2VSZWNvcmRbXT4oW10pO1xuICBjb25zdCBbaXNPbmxpbmUsIHNldElzT25saW5lXSA9IHVzZVN0YXRlKG5hdmlnYXRvci5vbkxpbmUpO1xuICBjb25zdCBbZG93bmxvYWRpbmcsIHNldERvd25sb2FkaW5nXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3luY2luZywgc2V0U3luY2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzeW5jTWVzc2FnZSwgc2V0U3luY01lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYXZhaWxhYmxlQ291cnNlcywgc2V0QXZhaWxhYmxlQ291cnNlc10gPSB1c2VTdGF0ZShnZXRDb3Vyc2VzKCkuZmlsdGVyKGMgPT4gYy5wdWJsaXNoZWQpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWREYXRhKCk7XG4gICAgXG4gICAgY29uc3QgaGFuZGxlT25saW5lID0gKCkgPT4gc2V0SXNPbmxpbmUodHJ1ZSk7XG4gICAgY29uc3QgaGFuZGxlT2ZmbGluZSA9ICgpID0+IHNldElzT25saW5lKGZhbHNlKTtcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgaGFuZGxlT25saW5lKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGhhbmRsZU9mZmxpbmUpO1xuICAgIFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25saW5lJywgaGFuZGxlT25saW5lKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgaGFuZGxlT2ZmbGluZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBnZXRPZmZsaW5lQ291cnNlcygpO1xuICAgIHNldE9mZmxpbmVDb3Vyc2VzKGNvdXJzZXMpO1xuICAgIGNvbnN0IGF0dCA9IGF3YWl0IGdldEF0dGVuZGFuY2UodXNlci5pZCk7XG4gICAgc2V0QXR0ZW5kYW5jZShhdHQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKGNvdXJzZUlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXREb3dubG9hZGluZyhjb3Vyc2VJZCk7XG4gICAgXG4gICAgY29uc3QgY291cnNlID0gYXZhaWxhYmxlQ291cnNlcy5maW5kKGMgPT4gYy5pZCA9PT0gY291cnNlSWQpO1xuICAgIGlmICghY291cnNlKSByZXR1cm47XG5cbiAgICAvLyBTaW11bGF0ZSBkb3dubG9hZGluZyB2aWRlbyBibG9ic1xuICAgIC8vIEluIGEgcmVhbCBhcHAsIHdlJ2QgZmV0Y2ggdGhlIGFjdHVhbCB2aWRlbyBhbmQgc3RvcmUgYXMgQmxvYlxuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDAwKSk7XG5cbiAgICBjb25zdCBvZmZsaW5lQ291cnNlOiBPZmZsaW5lQ291cnNlID0ge1xuICAgICAgaWQ6IGNvdXJzZS5pZCxcbiAgICAgIHRpdGxlOiBjb3Vyc2UudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogY291cnNlLmRlc2NyaXB0aW9uLFxuICAgICAgY2F0ZWdvcnk6IGNvdXJzZS5jYXRlZ29yeSxcbiAgICAgIHRlYWNoZXJOYW1lOiBjb3Vyc2UudGVhY2hlck5hbWUsXG4gICAgICBsZWN0dXJlczogY291cnNlLmxlY3R1cmVzLm1hcChsID0+ICh7XG4gICAgICAgIGlkOiBsLmlkLFxuICAgICAgICB0aXRsZTogbC50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGwuZGVzY3JpcHRpb24sXG4gICAgICAgIHZpZGVvVXJsOiBsLnZpZGVvVXJsLFxuICAgICAgICBkdXJhdGlvbjogbC5kdXJhdGlvbixcbiAgICAgICAgb3JkZXI6IGwub3JkZXIsXG4gICAgICAgIC8vIE1vY2sgdmlkZW8gYmxvYiAoaW4gcmVhbCBhcHAsIGZldGNoIGFjdHVhbCB2aWRlbylcbiAgICAgICAgdmlkZW9CbG9iOiBuZXcgQmxvYihbJ21vY2stdmlkZW8tZGF0YSddLCB7IHR5cGU6ICd2aWRlby9tcDQnIH0pXG4gICAgICB9KSksXG4gICAgICBkb3dubG9hZGVkQXQ6IERhdGUubm93KCksXG4gICAgICBzaXplOiBjb3Vyc2UubGVjdHVyZXMubGVuZ3RoICogNTAgKiAxMDI0ICogMTAyNCAvLyBNb2NrOiA1ME1CIHBlciBsZWN0dXJlXG4gICAgfTtcblxuICAgIGF3YWl0IHNhdmVDb3Vyc2VGb3JPZmZsaW5lKG9mZmxpbmVDb3Vyc2UpO1xuICAgIHNldERvd25sb2FkaW5nKG51bGwpO1xuICAgIGxvYWREYXRhKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlT2ZmbGluZSA9IGFzeW5jIChjb3Vyc2VJZDogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgZGVsZXRlT2ZmbGluZUNvdXJzZShjb3Vyc2VJZCk7XG4gICAgbG9hZERhdGEoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNYXJrQXR0ZW5kYW5jZSA9IGFzeW5jIChjb3Vyc2VJZDogc3RyaW5nLCBjb3Vyc2VUaXRsZTogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgbWFya0F0dGVuZGFuY2UodXNlci5pZCwgY291cnNlSWQsIGNvdXJzZVRpdGxlLCBpc09ubGluZSk7XG4gICAgbG9hZERhdGEoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFN5bmNpbmcodHJ1ZSk7XG4gICAgc2V0U3luY01lc3NhZ2UoJycpO1xuICAgIFxuICAgIC8vIFNpbXVsYXRlIHN5bmMgZGVsYXlcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTUwMCkpO1xuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgc3luY0F0dGVuZGFuY2UoKTtcbiAgICBcbiAgICBzZXRTeW5jTWVzc2FnZShgU3luY2VkICR7Y291bnR9IHJlY29yZHMgc3VjY2Vzc2Z1bGx5IWApO1xuICAgIHNldFN5bmNpbmcoZmFsc2UpO1xuICAgIGxvYWREYXRhKCk7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRTeW5jTWVzc2FnZSgnJyksIDMwMDApO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1hdFNpemUgPSAoYnl0ZXM6IG51bWJlcikgPT4ge1xuICAgIGlmIChieXRlcyA+PSAxMDI0ICogMTAyNCAqIDEwMjQpIHJldHVybiBgJHsoYnl0ZXMgLyAoMTAyNCAqIDEwMjQgKiAxMDI0KSkudG9GaXhlZCgxKX0gR0JgO1xuICAgIGlmIChieXRlcyA+PSAxMDI0ICogMTAyNCkgcmV0dXJuIGAkeyhieXRlcyAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMCl9IE1CYDtcbiAgICByZXR1cm4gYCR7KGJ5dGVzIC8gMTAyNCkudG9GaXhlZCgwKX0gS0JgO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1hdERhdGUgPSAodGltZXN0YW1wOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdW5zeW5jZWRDb3VudCA9IGF0dGVuZGFuY2UuZmlsdGVyKGEgPT4gIWEuaXNTeW5jZWQpLmxlbmd0aDtcbiAgY29uc3QgdG90YWxPZmZsaW5lU2l6ZSA9IG9mZmxpbmVDb3Vyc2VzLnJlZHVjZSgoc3VtLCBjKSA9PiBzdW0gKyBjLnNpemUsIDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc3VyZmFjZS05MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGdyaWQtYmcgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTUwIGdsYXNzIGJvcmRlci1iIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcHgtNCBzbTpweC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL3N0dWRlbnQnKX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zdXJmYWNlLTIwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgIDxBcnJvd0xlZnQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc21cIj5CYWNrPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02IGgtNiByb3VuZGVkLW1kIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYnJhbmQtNTAwIHRvLXB1cnBsZS02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8QnJhaW4gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+T2ZmbGluZSBNYW5hZ2VyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtbWVkaXVtICR7XG4gICAgICAgICAgICAgIGlzT25saW5lID8gJ2JnLWdyZWVuLTUwMC8yMCB0ZXh0LWdyZWVuLTMwMCcgOiAnYmctcmVkLTUwMC8yMCB0ZXh0LXJlZC0zMDAnXG4gICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgIHtpc09ubGluZSA/IDxXaWZpIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz4gOiA8V2lmaU9mZiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+fVxuICAgICAgICAgICAgICB7aXNPbmxpbmUgPyAnT25saW5lJyA6ICdPZmZsaW5lJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBweC00IHNtOnB4LTYgcHktOFwiPlxuICAgICAgICB7LyogVGFicyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi04IHAtMSByb3VuZGVkLXhsIGJnLXN1cmZhY2UtODAwLzMwIGJvcmRlciBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignZG93bmxvYWRzJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHgtNCBweS0yLjUgcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gJ2Rvd25sb2FkcydcbiAgICAgICAgICAgICAgICA/ICdiZy1icmFuZC02MDAgdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LWJyYW5kLTYwMC8yMCdcbiAgICAgICAgICAgICAgICA6ICd0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIERvd25sb2Fkc1xuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0xLjUgcHktMC41IHRleHQtWzEwcHhdIHJvdW5kZWQtZnVsbCBiZy13aGl0ZS8xMFwiPntvZmZsaW5lQ291cnNlcy5sZW5ndGh9PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignYXR0ZW5kYW5jZScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC0xIHB4LTQgcHktMi41IHJvdW5kZWQtbGcgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdhdHRlbmRhbmNlJ1xuICAgICAgICAgICAgICAgID8gJ2JnLWJyYW5kLTYwMCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzaGFkb3ctYnJhbmQtNjAwLzIwJ1xuICAgICAgICAgICAgICAgIDogJ3RleHQtc3VyZmFjZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxDYWxlbmRhciBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgQXR0ZW5kYW5jZVxuICAgICAgICAgICAgICB7dW5zeW5jZWRDb3VudCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTEuNSBweS0wLjUgdGV4dC1bMTBweF0gcm91bmRlZC1mdWxsIGJnLWFtYmVyLTUwMC8yMCB0ZXh0LWFtYmVyLTMwMFwiPnt1bnN5bmNlZENvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIERvd25sb2FkcyBUYWIgKi99XG4gICAgICAgIHthY3RpdmVUYWIgPT09ICdkb3dubG9hZHMnICYmIChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIFN0b3JhZ2UgSW5mbyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctc3VyZmFjZS04MDAvMzAgYm9yZGVyIGJvcmRlci13aGl0ZS81IG1iLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zdXJmYWNlLTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPEhhcmREcml2ZSBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgIE9mZmxpbmUgU3RvcmFnZSBVc2VkXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1icmFuZC0zMDBcIj57Zm9ybWF0U2l6ZSh0b3RhbE9mZmxpbmVTaXplKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTIgcm91bmRlZC1mdWxsIGJnLXN1cmZhY2UtOTAwLzUwIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHdpZHRoOiAwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHdpZHRoOiBgJHtNYXRoLm1pbigodG90YWxPZmZsaW5lU2l6ZSAvICgyICogMTAyNCAqIDEwMjQgKiAxMDI0KSkgKiAxMDAsIDEwMCl9JWAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJyYW5kLTUwMCB0by1wdXJwbGUtNTAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdXJmYWNlLTIwMC82MCBtdC0xXCI+b2YgMiBHQiBhdmFpbGFibGU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIERvd25sb2FkZWQgQ291cnNlcyAqL31cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItNFwiPkRvd25sb2FkZWQgQ291cnNlczwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtvZmZsaW5lQ291cnNlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTIgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci13aGl0ZS81IGJnLXN1cmZhY2UtODAwLzIwXCI+XG4gICAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cInctMTIgaC0xMiB0ZXh0LXN1cmZhY2UtMjAwLzIwIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXN1cmZhY2UtMjAwXCI+Tm8gY291cnNlcyBkb3dubG9hZGVkIHlldDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDAvNjAgbXQtMVwiPkRvd25sb2FkIGNvdXJzZXMgdG8gYWNjZXNzIHRoZW0gb2ZmbGluZTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgIHtvZmZsaW5lQ291cnNlcy5tYXAoY291cnNlID0+IChcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17Y291cnNlLmlkfVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctc3VyZmFjZS04MDAvMzAgYm9yZGVyIGJvcmRlci13aGl0ZS81XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB0cnVuY2F0ZVwiPntjb3Vyc2UudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdXJmYWNlLTIwMCBtdC0xXCI+e2NvdXJzZS5sZWN0dXJlcy5sZW5ndGh9IGxlY3R1cmVzIOKAoiB7Zm9ybWF0U2l6ZShjb3Vyc2Uuc2l6ZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdXJmYWNlLTIwMC82MCBtdC0xXCI+RG93bmxvYWRlZCB7Zm9ybWF0RGF0ZShjb3Vyc2UuZG93bmxvYWRlZEF0KX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlT2ZmbGluZShjb3Vyc2UuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbGcgdGV4dC1yZWQtNDAwLzYwIGhvdmVyOnRleHQtcmVkLTQwMCBob3ZlcjpiZy1yZWQtNTAwLzEwIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2gyIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7LyogQXZhaWxhYmxlIHRvIERvd25sb2FkICovfVxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtdC04IG1iLTRcIj5BdmFpbGFibGUgQ291cnNlczwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICB7YXZhaWxhYmxlQ291cnNlcy5tYXAoY291cnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0Rvd25sb2FkZWQgPSBvZmZsaW5lQ291cnNlcy5zb21lKGMgPT4gYy5pZCA9PT0gY291cnNlLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0Rvd25sb2FkaW5nID0gZG93bmxvYWRpbmcgPT09IGNvdXJzZS5pZDtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NvdXJzZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLXN1cmZhY2UtODAwLzMwIGJvcmRlciBib3JkZXItd2hpdGUvNVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHRydW5jYXRlXCI+e2NvdXJzZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwIG10LTFcIj57Y291cnNlLmxlY3R1cmVzLmxlbmd0aH0gbGVjdHVyZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAge2lzRG93bmxvYWRlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gYmctZ3JlZW4tNTAwLzEwIHRleHQtZ3JlZW4tMzAwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmVlbi01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEb3dubG9hZChjb3Vyc2UuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEb3dubG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIGJnLWJyYW5kLTYwMCBob3ZlcjpiZy1icmFuZC01MDAgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRG93bmxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWZyZXNoQ3cgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkaW5nLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIEF0dGVuZGFuY2UgVGFiICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAnYXR0ZW5kYW5jZScgJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogU3luYyBTdGF0dXMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLXN1cmZhY2UtODAwLzMwIGJvcmRlciBib3JkZXItd2hpdGUvNSBtYi02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAge2lzT25saW5lID8gKFxuICAgICAgICAgICAgICAgICAgICA8Q2xvdWQgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyZWVuLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8Q2xvdWRPZmYgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXJlZC00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpc09ubGluZSA/ICdDb25uZWN0ZWQgdG8gc2VydmVyJyA6ICdPZmZsaW5lIG1vZGUgYWN0aXZlJ31cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dW5zeW5jZWRDb3VudCA+IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke3Vuc3luY2VkQ291bnR9IHJlY29yZCR7dW5zeW5jZWRDb3VudCA+IDEgPyAncycgOiAnJ30gcGVuZGluZyBzeW5jYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnQWxsIHJlY29yZHMgc3luY2VkJ31cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3luY31cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNPbmxpbmUgfHwgc3luY2luZyB8fCB1bnN5bmNlZENvdW50ID09PSAwfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIGJnLWJyYW5kLTYwMCBob3ZlcjpiZy1icmFuZC01MDAgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3N5bmNpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPFJlZnJlc2hDdyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIFN5bmNpbmcuLi5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1VwQ2lyY2xlIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICBTeW5jIE5vd1xuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICB7c3luY01lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBoZWlnaHQ6ICdhdXRvJyB9fVxuICAgICAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIHAtMiByb3VuZGVkLWxnIGJnLWdyZWVuLTUwMC8xMCBib3JkZXIgYm9yZGVyLWdyZWVuLTUwMC8yMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmVlbi0zMDBcIj57c3luY01lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBNYXJrIEF0dGVuZGFuY2UgKi99XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTRcIj5NYXJrIEF0dGVuZGFuY2U8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgbWItOFwiPlxuICAgICAgICAgICAgICB7YXZhaWxhYmxlQ291cnNlcy5zbGljZSgwLCAzKS5tYXAoY291cnNlID0+IChcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtjb3Vyc2UuaWR9XG4gICAgICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLXN1cmZhY2UtODAwLzMwIGJvcmRlciBib3JkZXItd2hpdGUvNVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB0cnVuY2F0ZVwiPntjb3Vyc2UudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDAgbXQtMVwiPntjb3Vyc2UuY2F0ZWdvcnl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1hcmtBdHRlbmRhbmNlKGNvdXJzZS5pZCwgY291cnNlLnRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gYmctYnJhbmQtNjAwIGhvdmVyOmJnLWJyYW5kLTUwMCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhciBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgTWFyayBQcmVzZW50XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQXR0ZW5kYW5jZSBIaXN0b3J5ICovfVxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi00XCI+QXR0ZW5kYW5jZSBIaXN0b3J5PC9oMj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2F0dGVuZGFuY2UubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTEyIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItd2hpdGUvNSBiZy1zdXJmYWNlLTgwMC8yMFwiPlxuICAgICAgICAgICAgICAgIDxDYWxlbmRhciBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgdGV4dC1zdXJmYWNlLTIwMC8yMCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zdXJmYWNlLTIwMFwiPk5vIGF0dGVuZGFuY2UgcmVjb3JkcyB5ZXQ8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwLzYwIG10LTFcIj5NYXJrIHlvdXIgYXR0ZW5kYW5jZSBmb3IgY291cnNlcyBhYm92ZTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgIHthdHRlbmRhbmNlLnNsaWNlKDAsIDIwKS5tYXAoKHJlY29yZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXtyZWNvcmQuaWR9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTEwIH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC14bCBiZy1zdXJmYWNlLTgwMC8zMCBib3JkZXIgYm9yZGVyLXdoaXRlLzUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctOCBoLTggcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wICR7XG4gICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLmlzU3luY2VkIFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZ3JlZW4tNTAwLzIwIHRleHQtZ3JlZW4tNDAwJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWFtYmVyLTUwMC8yMCB0ZXh0LWFtYmVyLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuaXNTeW5jZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvdWQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSB0cnVuY2F0ZVwiPntyZWNvcmQuY291cnNlVGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc3VyZmFjZS0yMDAvNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShyZWNvcmQudGltZXN0YW1wKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5OiAnc2hvcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHB4LTIgcHktMC41IHRleHQtWzEwcHhdIGZvbnQtbWVkaXVtIHJvdW5kZWQtZnVsbCAke1xuICAgICAgICAgICAgICAgICAgICAgIHJlY29yZC5pc1N5bmNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZ3JlZW4tNTAwLzEwIHRleHQtZ3JlZW4tMzAwIGJvcmRlciBib3JkZXItZ3JlZW4tNTAwLzIwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctYW1iZXItNTAwLzEwIHRleHQtYW1iZXItMzAwIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzIwJ1xuICAgICAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5pc1N5bmNlZCA/ICdTeW5jZWQnIDogJ1BlbmRpbmcnfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxGb290ZXIgbGFuZ3VhZ2U9e2xhbmd1YWdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvd29ya3NwYWNlL3NyYy9wYWdlcy9PZmZsaW5lTWFuYWdlci50c3gifQ==