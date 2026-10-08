import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/CourseDetail.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/pages/CourseDetail.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=620eb88c"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"];
import { useParams, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=d53b2b6e";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=6e0f127a";
import {
  Brain,
  ArrowLeft,
  Play,
  Pause,
  Download,
  Check,
  CheckCircle2,
  BookOpen,
  Volume2,
  VolumeX,
  Maximize,
  SkipForward,
  SkipBack
} from "/node_modules/.vite/deps/lucide-react.js?v=6a865639";
import { getCourseById, isEnrolled, enrollStudent, getProgress, updateProgress, logout } from "/src/lib/store.ts";
import { t } from "/src/lib/i18n.ts";
import LanguageToggle from "/src/components/LanguageToggle.tsx";
import Footer from "/src/components/Footer.tsx";
export default function CourseDetail({ user, language, onLanguageChange }) {
  _s();
  const tr = t(language);
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [course, setCourse] = useState(null);
  const [enrolled, setEnrolled] = useState(false);
  const [currentLecture, setCurrentLecture] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [completedLectures, setCompletedLectures] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    if (!id) return;
    const c = getCourseById(id);
    if (c) {
      setCourse(c);
      setEnrolled(isEnrolled(user.id, id));
      if (c.lectures.length > 0) {
        setCurrentLecture(c.lectures[0]);
      }
      const progress = getProgress(user.id);
      const completed = progress.filter((p) => p.completed && c.lectures.some((l) => l.id === p.lectureId)).map((p) => p.lectureId);
      setCompletedLectures(completed);
    }
  }, [id, user.id]);
  const handleEnroll = () => {
    if (course) {
      enrollStudent(user.id, course.id);
      setEnrolled(true);
    }
  };
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };
  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };
  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };
  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };
  const handleLectureSelect = (lecture) => {
    setCurrentLecture(lecture);
    setIsPlaying(false);
    setCurrentTime(0);
    setShowSidebar(false);
  };
  const handleNextLecture = () => {
    if (!course || !currentLecture) return;
    const idx = course.lectures.findIndex((l) => l.id === currentLecture.id);
    if (idx < course.lectures.length - 1) {
      handleLectureSelect(course.lectures[idx + 1]);
    }
  };
  const handlePrevLecture = () => {
    if (!course || !currentLecture) return;
    const idx = course.lectures.findIndex((l) => l.id === currentLecture.id);
    if (idx > 0) {
      handleLectureSelect(course.lectures[idx - 1]);
    }
  };
  const handleMarkComplete = () => {
    if (!currentLecture) return;
    updateProgress(user.id, currentLecture.id, currentTime, true);
    setCompletedLectures((prev) => [.../* @__PURE__ */ new Set([...prev, currentLecture.id])]);
  };
  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (currentLecture) {
      updateProgress(user.id, currentLecture.id, duration, true);
      setCompletedLectures((prev) => [.../* @__PURE__ */ new Set([...prev, currentLecture.id])]);
    }
  };
  const handleDownload = () => {
    if (!currentLecture) return;
    const link = document.createElement("a");
    link.href = currentLecture.videoUrl;
    link.download = `${currentLecture.title}.mp4`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  if (!course) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-12 h-12 text-surface-200/30 mx-auto mb-4" }, void 0, false, {
        fileName: "/workspace/src/pages/CourseDetail.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-2", children: "Course not found" }, void 0, false, {
        fileName: "/workspace/src/pages/CourseDetail.tsx",
        lineNumber: 183,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: () => navigate("/student"), className: "text-sm text-brand-400 hover:text-brand-300", children: "Back to Dashboard" }, void 0, false, {
        fileName: "/workspace/src/pages/CourseDetail.tsx",
        lineNumber: 184,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/CourseDetail.tsx",
      lineNumber: 181,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/CourseDetail.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 glass border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "px-4 sm:px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-14", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: () => navigate("/student"), className: "p-1.5 rounded-lg text-surface-200 hover:text-white hover:bg-white/5 transition-all", children: /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 200,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 199,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "hidden sm:flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-6 h-6 rounded-md bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Brain, { className: "w-3.5 h-3.5 text-white" }, void 0, false, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 204,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 203,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium truncate max-w-[200px]", children: course.title }, void 0, false, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 202,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/CourseDetail.tsx",
        lineNumber: 198,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(LanguageToggle, { language, onLanguageChange }, void 0, false, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 210,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: handleLogout,
            className: "p-2 rounded-lg text-surface-200 hover:text-white hover:bg-white/5 transition-all",
            children: /* @__PURE__ */ jsxDEV("span", { className: "text-xs", children: "Logout" }, void 0, false, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 215,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 211,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/CourseDetail.tsx",
        lineNumber: 209,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/CourseDetail.tsx",
      lineNumber: 197,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/CourseDetail.tsx",
      lineNumber: 196,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/CourseDetail.tsx",
      lineNumber: 195,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col lg:flex-row", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: !enrolled ? (
        /* Enrollment View */
        /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-8", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl overflow-hidden border border-white/10 bg-surface-800/30", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-48 sm:h-64 bg-gradient-to-br from-brand-600/20 to-purple-600/20 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-20 h-20 text-brand-400/30" }, void 0, false, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 231,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 230,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 sm:p-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20", children: course.category }, void 0, false, {
                fileName: "/workspace/src/pages/CourseDetail.tsx",
                lineNumber: 235,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-surface-900/50 text-surface-200 rounded-full", children: [
                course.lectures.length,
                " lectures"
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/CourseDetail.tsx",
                lineNumber: 238,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 234,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl sm:text-3xl font-bold mb-3", children: course.title }, void 0, false, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 242,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-surface-200 mb-6 leading-relaxed", children: course.description }, void 0, false, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 243,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-sm text-surface-200", children: [
              /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-4 h-4" }, void 0, false, {
                fileName: "/workspace/src/pages/CourseDetail.tsx",
                lineNumber: 246,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                "by ",
                course.teacherName
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/CourseDetail.tsx",
                lineNumber: 247,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 245,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 244,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleEnroll,
                className: "w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-brand-600 hover:bg-brand-500 rounded-xl transition-all hover:shadow-xl hover:shadow-brand-600/20 flex items-center justify-center gap-2",
                children: [
                  /* @__PURE__ */ jsxDEV(Play, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 254,
                    columnNumber: 23
                  }, this),
                  "Enroll for Free"
                ]
              },
              void 0,
              true,
              {
                fileName: "/workspace/src/pages/CourseDetail.tsx",
                lineNumber: 250,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 233,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 229,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 228,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this)
      ) : (
        /* Video Player View */
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative bg-black", children: [
            currentLecture && /* @__PURE__ */ jsxDEV(
              "video",
              {
                ref: videoRef,
                src: currentLecture.videoUrl,
                className: "w-full aspect-video max-h-[70vh]",
                onTimeUpdate: handleTimeUpdate,
                onLoadedMetadata: handleLoadedMetadata,
                onEnded: handleVideoEnded,
                onPlay: () => setIsPlaying(true),
                onPause: () => setIsPlaying(false),
                playsInline: true
              },
              void 0,
              false,
              {
                fileName: "/workspace/src/pages/CourseDetail.tsx",
                lineNumber: 267,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4", children: [
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "range",
                  min: 0,
                  max: duration || 0,
                  value: currentTime,
                  onChange: handleSeek,
                  className: "w-full h-1 rounded-full appearance-none bg-white/20 cursor-pointer mb-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-500",
                  style: {
                    background: `linear-gradient(to right, rgb(99, 102, 241) ${currentTime / (duration || 1) * 100}%, rgba(255,255,255,0.2) ${currentTime / (duration || 1) * 100}%)`
                  }
                },
                void 0,
                false,
                {
                  fileName: "/workspace/src/pages/CourseDetail.tsx",
                  lineNumber: 283,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxDEV("button", { onClick: handlePrevLecture, className: "p-1.5 rounded-lg hover:bg-white/10 transition-all", children: /* @__PURE__ */ jsxDEV(SkipBack, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 298,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 297,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("button", { onClick: handlePlayPause, className: "p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all", children: isPlaying ? /* @__PURE__ */ jsxDEV(Pause, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 301,
                    columnNumber: 38
                  }, this) : /* @__PURE__ */ jsxDEV(Play, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 301,
                    columnNumber: 70
                  }, this) }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 300,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("button", { onClick: handleNextLecture, className: "p-1.5 rounded-lg hover:bg-white/10 transition-all", children: /* @__PURE__ */ jsxDEV(SkipForward, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 304,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 303,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("button", { onClick: handleMuteToggle, className: "p-1.5 rounded-lg hover:bg-white/10 transition-all", children: isMuted ? /* @__PURE__ */ jsxDEV(VolumeX, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 307,
                    columnNumber: 36
                  }, this) : /* @__PURE__ */ jsxDEV(Volume2, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 307,
                    columnNumber: 70
                  }, this) }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 306,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-white/70", children: [
                    formatTime(currentTime),
                    " / ",
                    formatTime(duration)
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 309,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/CourseDetail.tsx",
                  lineNumber: 296,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV("button", { onClick: handleDownload, className: "p-1.5 rounded-lg hover:bg-white/10 transition-all", title: "Download", children: /* @__PURE__ */ jsxDEV(Download, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 315,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 314,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("button", { onClick: handleFullscreen, className: "p-1.5 rounded-lg hover:bg-white/10 transition-all", children: /* @__PURE__ */ jsxDEV(Maximize, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 318,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 317,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => setShowSidebar(!showSidebar),
                      className: "p-1.5 rounded-lg hover:bg-white/10 transition-all lg:hidden",
                      children: /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "/workspace/src/pages/CourseDetail.tsx",
                        lineNumber: 325,
                        columnNumber: 25
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/workspace/src/pages/CourseDetail.tsx",
                      lineNumber: 321,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/CourseDetail.tsx",
                  lineNumber: 313,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/CourseDetail.tsx",
                lineNumber: 295,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 281,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 265,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-4 sm:p-6 border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold", children: currentLecture?.title }, void 0, false, {
                fileName: "/workspace/src/pages/CourseDetail.tsx",
                lineNumber: 336,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200 mt-1", children: currentLecture?.description }, void 0, false, {
                fileName: "/workspace/src/pages/CourseDetail.tsx",
                lineNumber: 337,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 335,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 shrink-0", children: [
              completedLectures.includes(currentLecture?.id || "") ? /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-green-500/10 text-green-300 rounded-lg border border-green-500/20", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5" }, void 0, false, {
                  fileName: "/workspace/src/pages/CourseDetail.tsx",
                  lineNumber: 342,
                  columnNumber: 25
                }, this),
                " Completed"
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/CourseDetail.tsx",
                lineNumber: 341,
                columnNumber: 19
              }, this) : /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: handleMarkComplete,
                  className: "flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-brand-600/20 text-brand-300 rounded-lg border border-brand-500/20 hover:bg-brand-600/30 transition-all",
                  children: [
                    /* @__PURE__ */ jsxDEV(Check, { className: "w-3.5 h-3.5" }, void 0, false, {
                      fileName: "/workspace/src/pages/CourseDetail.tsx",
                      lineNumber: 349,
                      columnNumber: 25
                    }, this),
                    " Mark Complete"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/workspace/src/pages/CourseDetail.tsx",
                  lineNumber: 345,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: handleDownload,
                  className: "flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-surface-800/50 text-surface-200 rounded-lg border border-white/10 hover:border-white/20 transition-all",
                  children: [
                    /* @__PURE__ */ jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
                      fileName: "/workspace/src/pages/CourseDetail.tsx",
                      lineNumber: 356,
                      columnNumber: 23
                    }, this),
                    " Download"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/workspace/src/pages/CourseDetail.tsx",
                  lineNumber: 352,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 339,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 334,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 333,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 263,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/workspace/src/pages/CourseDetail.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: `
          ${showSidebar ? "fixed inset-0 z-40 bg-black/50 lg:static lg:bg-transparent" : "hidden"}
          lg:block lg:w-80 xl:w-96 shrink-0 border-l border-white/5
        `, children: /* @__PURE__ */ jsxDEV("div", { className: "h-full bg-surface-850 lg:bg-surface-900 overflow-y-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "sticky top-0 bg-surface-850/95 lg:bg-surface-900/95 backdrop-blur-sm border-b border-white/5 p-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-semibold", children: "Course Content" }, void 0, false, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 373,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-0.5", children: [
              completedLectures.length,
              "/",
              course.lectures.length,
              " completed"
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 374,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 372,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setShowSidebar(false),
              className: "lg:hidden p-1 rounded text-surface-200",
              children: "✕"
            },
            void 0,
            false,
            {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 378,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 371,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-3 space-y-1", children: course.lectures.map((lecture, idx) => {
          const isCompleted = completedLectures.includes(lecture.id);
          const isCurrent = currentLecture?.id === lecture.id;
          return /* @__PURE__ */ jsxDEV(
            motion.button,
            {
              whileHover: { x: 2 },
              onClick: () => enrolled && handleLectureSelect(lecture),
              className: `w-full text-left p-3 rounded-xl transition-all ${isCurrent ? "bg-brand-600/10 border border-brand-500/20" : "hover:bg-white/5 border border-transparent"} ${!enrolled ? "opacity-50 cursor-not-allowed" : ""}`,
              disabled: !enrolled,
              children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV("div", { className: `w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${isCompleted ? "bg-green-500/20 text-green-400" : isCurrent ? "bg-brand-500/20 text-brand-400" : "bg-surface-800 text-surface-200"}`, children: isCompleted ? /* @__PURE__ */ jsxDEV(Check, { className: "w-3.5 h-3.5" }, void 0, false, {
                  fileName: "/workspace/src/pages/CourseDetail.tsx",
                  lineNumber: 412,
                  columnNumber: 25
                }, this) : /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium", children: idx + 1 }, void 0, false, {
                  fileName: "/workspace/src/pages/CourseDetail.tsx",
                  lineNumber: 414,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "/workspace/src/pages/CourseDetail.tsx",
                  lineNumber: 404,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: `text-sm font-medium truncate ${isCurrent ? "text-brand-300" : "text-white"}`, children: lecture.title }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 418,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-surface-200/60 mt-0.5", children: lecture.description ? lecture.description.slice(0, 40) + "..." : "No description" }, void 0, false, {
                    fileName: "/workspace/src/pages/CourseDetail.tsx",
                    lineNumber: 421,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/CourseDetail.tsx",
                  lineNumber: 417,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/CourseDetail.tsx",
                lineNumber: 403,
                columnNumber: 21
              }, this)
            },
            lecture.id,
            false,
            {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 392,
              columnNumber: 19
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 386,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-4 border-t border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-xl bg-surface-800/50 border border-white/5", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-surface-200", children: "Progress" }, void 0, false, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 435,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-brand-300", children: [
              course.lectures.length > 0 ? Math.round(completedLectures.length / course.lectures.length * 100) : 0,
              "%"
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 436,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 434,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-full h-1.5 rounded-full bg-surface-900/50 overflow-hidden", children: /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500 transition-all duration-500",
              style: { width: `${course.lectures.length > 0 ? completedLectures.length / course.lectures.length * 100 : 0}%` }
            },
            void 0,
            false,
            {
              fileName: "/workspace/src/pages/CourseDetail.tsx",
              lineNumber: 441,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "/workspace/src/pages/CourseDetail.tsx",
            lineNumber: 440,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 433,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/workspace/src/pages/CourseDetail.tsx",
          lineNumber: 432,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/CourseDetail.tsx",
        lineNumber: 370,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/workspace/src/pages/CourseDetail.tsx",
        lineNumber: 366,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/CourseDetail.tsx",
      lineNumber: 222,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { language }, void 0, false, {
      fileName: "/workspace/src/pages/CourseDetail.tsx",
      lineNumber: 452,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/workspace/src/pages/CourseDetail.tsx",
    lineNumber: 193,
    columnNumber: 5
  }, this);
}
_s(CourseDetail, "NX0fZrHNmk5egQU593lSaiYhwX8=", false, function() {
  return [useParams, useNavigate];
});
_c = CourseDetail;
var _c;
$RefreshReg$(_c, "CourseDetail");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/pages/CourseDetail.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/pages/CourseDetail.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBS0E7QUFBQSxVQUNBLHVCQUFDLFNBQUksV0FBVSwrREFDYjtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0MsV0FBVTtBQUFBLGNBQ1YsT0FBTyxFQUFFbUUsT0FBTyxHQUFHdkYsT0FBT21CLFNBQVNDLFNBQVMsSUFBS04sa0JBQWtCTSxTQUFTcEIsT0FBT21CLFNBQVNDLFNBQVUsTUFBTSxDQUFDLElBQUk7QUFBQTtBQUFBLFlBRm5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUVxSCxLQUh2SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUtBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYUEsS0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZUE7QUFBQSxXQTdFRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOEVBLEtBbEZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFtRkE7QUFBQSxTQW5PRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBb09BO0FBQUEsSUFFQSx1QkFBQyxVQUFPLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEyQjtBQUFBLE9BblE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBb1FBO0FBRUo7QUFBQ3pCLEdBL1p1QkosY0FBWTtBQUFBLFVBRW5CekIsV0FDRUMsV0FBVztBQUFBO0FBQUEsS0FITndCO0FBQVksSUFBQWlHO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlUGFyYW1zIiwidXNlTmF2aWdhdGUiLCJtb3Rpb24iLCJCcmFpbiIsIkFycm93TGVmdCIsIlBsYXkiLCJQYXVzZSIsIkRvd25sb2FkIiwiQ2hlY2siLCJDaGVja0NpcmNsZTIiLCJCb29rT3BlbiIsIlZvbHVtZTIiLCJWb2x1bWVYIiwiTWF4aW1pemUiLCJTa2lwRm9yd2FyZCIsIlNraXBCYWNrIiwiZ2V0Q291cnNlQnlJZCIsImlzRW5yb2xsZWQiLCJlbnJvbGxTdHVkZW50IiwiZ2V0UHJvZ3Jlc3MiLCJ1cGRhdGVQcm9ncmVzcyIsImxvZ291dCIsInQiLCJMYW5ndWFnZVRvZ2dsZSIsIkZvb3RlciIsIkNvdXJzZURldGFpbCIsInVzZXIiLCJsYW5ndWFnZSIsIm9uTGFuZ3VhZ2VDaGFuZ2UiLCJfcyIsInRyIiwiaWQiLCJuYXZpZ2F0ZSIsInZpZGVvUmVmIiwiY291cnNlIiwic2V0Q291cnNlIiwiZW5yb2xsZWQiLCJzZXRFbnJvbGxlZCIsImN1cnJlbnRMZWN0dXJlIiwic2V0Q3VycmVudExlY3R1cmUiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImlzTXV0ZWQiLCJzZXRJc011dGVkIiwiY29tcGxldGVkTGVjdHVyZXMiLCJzZXRDb21wbGV0ZWRMZWN0dXJlcyIsInNob3dTaWRlYmFyIiwic2V0U2hvd1NpZGViYXIiLCJjIiwibGVjdHVyZXMiLCJsZW5ndGgiLCJwcm9ncmVzcyIsImNvbXBsZXRlZCIsImZpbHRlciIsInAiLCJzb21lIiwibCIsImxlY3R1cmVJZCIsIm1hcCIsImhhbmRsZUVucm9sbCIsImhhbmRsZVBsYXlQYXVzZSIsImN1cnJlbnQiLCJwYXVzZSIsInBsYXkiLCJoYW5kbGVUaW1lVXBkYXRlIiwiaGFuZGxlTG9hZGVkTWV0YWRhdGEiLCJoYW5kbGVTZWVrIiwiZSIsInRpbWUiLCJwYXJzZUZsb2F0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVNdXRlVG9nZ2xlIiwibXV0ZWQiLCJoYW5kbGVGdWxsc2NyZWVuIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJoYW5kbGVMZWN0dXJlU2VsZWN0IiwibGVjdHVyZSIsImhhbmRsZU5leHRMZWN0dXJlIiwiaWR4IiwiZmluZEluZGV4IiwiaGFuZGxlUHJldkxlY3R1cmUiLCJoYW5kbGVNYXJrQ29tcGxldGUiLCJwcmV2IiwiU2V0IiwiaGFuZGxlVmlkZW9FbmRlZCIsImhhbmRsZURvd25sb2FkIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJ2aWRlb1VybCIsImRvd25sb2FkIiwidGl0bGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiZm9ybWF0VGltZSIsInNlY29uZHMiLCJtaW5zIiwiTWF0aCIsImZsb29yIiwic2VjcyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJoYW5kbGVMb2dvdXQiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidGVhY2hlck5hbWUiLCJiYWNrZ3JvdW5kIiwiaW5jbHVkZXMiLCJpc0NvbXBsZXRlZCIsImlzQ3VycmVudCIsIngiLCJzbGljZSIsInJvdW5kIiwid2lkdGgiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDb3Vyc2VEZXRhaWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgXG4gIEJyYWluLCBBcnJvd0xlZnQsIFBsYXksIFBhdXNlLCBEb3dubG9hZCwgQ2hlY2ssIENoZWNrQ2lyY2xlMixcbiAgQ2xvY2ssIEJvb2tPcGVuLCBWb2x1bWUyLCBWb2x1bWVYLCBNYXhpbWl6ZSwgU2tpcEZvcndhcmQsXG4gIFNraXBCYWNrLCBDaGV2cm9uTGVmdCwgQ2hldnJvblJpZ2h0XG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBVc2VyLCBDb3Vyc2UsIExlY3R1cmUsIGdldENvdXJzZUJ5SWQsIGlzRW5yb2xsZWQsIGVucm9sbFN0dWRlbnQsIGdldFByb2dyZXNzLCB1cGRhdGVQcm9ncmVzcywgbG9nb3V0IH0gZnJvbSAnLi4vbGliL3N0b3JlJztcblxuaW1wb3J0IHsgTGFuZ3VhZ2UsIHQgfSBmcm9tICcuLi9saWIvaTE4bic7XG5pbXBvcnQgTGFuZ3VhZ2VUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5ndWFnZVRvZ2dsZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuaW50ZXJmYWNlIENvdXJzZURldGFpbFByb3BzIHtcbiAgdXNlcjogVXNlcjtcbiAgbGFuZ3VhZ2U6IExhbmd1YWdlO1xuICBvbkxhbmd1YWdlQ2hhbmdlOiAobGFuZzogTGFuZ3VhZ2UpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZURldGFpbCh7IHVzZXIsIGxhbmd1YWdlLCBvbkxhbmd1YWdlQ2hhbmdlIH06IENvdXJzZURldGFpbFByb3BzKSB7XG4gIGNvbnN0IHRyID0gdChsYW5ndWFnZSk7XG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtczx7IGlkOiBzdHJpbmcgfT4oKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcbiAgXG4gIGNvbnN0IFtjb3Vyc2UsIHNldENvdXJzZV0gPSB1c2VTdGF0ZTxDb3Vyc2UgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Vucm9sbGVkLCBzZXRFbnJvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyZW50TGVjdHVyZSwgc2V0Q3VycmVudExlY3R1cmVdID0gdXNlU3RhdGU8TGVjdHVyZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNNdXRlZCwgc2V0SXNNdXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb21wbGV0ZWRMZWN0dXJlcywgc2V0Q29tcGxldGVkTGVjdHVyZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3Nob3dTaWRlYmFyLCBzZXRTaG93U2lkZWJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlkKSByZXR1cm47XG4gICAgY29uc3QgYyA9IGdldENvdXJzZUJ5SWQoaWQpO1xuICAgIGlmIChjKSB7XG4gICAgICBzZXRDb3Vyc2UoYyk7XG4gICAgICBzZXRFbnJvbGxlZChpc0Vucm9sbGVkKHVzZXIuaWQsIGlkKSk7XG4gICAgICBpZiAoYy5sZWN0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldEN1cnJlbnRMZWN0dXJlKGMubGVjdHVyZXNbMF0pO1xuICAgICAgfVxuICAgICAgLy8gTG9hZCBwcm9ncmVzc1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRQcm9ncmVzcyh1c2VyLmlkKTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IHByb2dyZXNzLmZpbHRlcihwID0+IHAuY29tcGxldGVkICYmIGMubGVjdHVyZXMuc29tZShsID0+IGwuaWQgPT09IHAubGVjdHVyZUlkKSkubWFwKHAgPT4gcC5sZWN0dXJlSWQpO1xuICAgICAgc2V0Q29tcGxldGVkTGVjdHVyZXMoY29tcGxldGVkKTtcbiAgICB9XG4gIH0sIFtpZCwgdXNlci5pZF0pO1xuXG4gIGNvbnN0IGhhbmRsZUVucm9sbCA9ICgpID0+IHtcbiAgICBpZiAoY291cnNlKSB7XG4gICAgICBlbnJvbGxTdHVkZW50KHVzZXIuaWQsIGNvdXJzZS5pZCk7XG4gICAgICBzZXRFbnJvbGxlZCh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGxheVBhdXNlID0gKCkgPT4ge1xuICAgIGlmICghdmlkZW9SZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGF1c2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlkZW9SZWYuY3VycmVudC5wbGF5KCk7XG4gICAgfVxuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUaW1lVXBkYXRlID0gKCkgPT4ge1xuICAgIGlmICghdmlkZW9SZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIHNldEN1cnJlbnRUaW1lKHZpZGVvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvYWRlZE1ldGFkYXRhID0gKCkgPT4ge1xuICAgIGlmICghdmlkZW9SZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIHNldER1cmF0aW9uKHZpZGVvUmVmLmN1cnJlbnQuZHVyYXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlZWsgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoIXZpZGVvUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBjb25zdCB0aW1lID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgdmlkZW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IHRpbWU7XG4gICAgc2V0Q3VycmVudFRpbWUodGltZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTXV0ZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBpZiAoIXZpZGVvUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICB2aWRlb1JlZi5jdXJyZW50Lm11dGVkID0gIWlzTXV0ZWQ7XG4gICAgc2V0SXNNdXRlZCghaXNNdXRlZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRnVsbHNjcmVlbiA9ICgpID0+IHtcbiAgICBpZiAoIXZpZGVvUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpZiAodmlkZW9SZWYuY3VycmVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgdmlkZW9SZWYuY3VycmVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMZWN0dXJlU2VsZWN0ID0gKGxlY3R1cmU6IExlY3R1cmUpID0+IHtcbiAgICBzZXRDdXJyZW50TGVjdHVyZShsZWN0dXJlKTtcbiAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgIHNldEN1cnJlbnRUaW1lKDApO1xuICAgIHNldFNob3dTaWRlYmFyKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOZXh0TGVjdHVyZSA9ICgpID0+IHtcbiAgICBpZiAoIWNvdXJzZSB8fCAhY3VycmVudExlY3R1cmUpIHJldHVybjtcbiAgICBjb25zdCBpZHggPSBjb3Vyc2UubGVjdHVyZXMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gY3VycmVudExlY3R1cmUuaWQpO1xuICAgIGlmIChpZHggPCBjb3Vyc2UubGVjdHVyZXMubGVuZ3RoIC0gMSkge1xuICAgICAgaGFuZGxlTGVjdHVyZVNlbGVjdChjb3Vyc2UubGVjdHVyZXNbaWR4ICsgMV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmV2TGVjdHVyZSA9ICgpID0+IHtcbiAgICBpZiAoIWNvdXJzZSB8fCAhY3VycmVudExlY3R1cmUpIHJldHVybjtcbiAgICBjb25zdCBpZHggPSBjb3Vyc2UubGVjdHVyZXMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gY3VycmVudExlY3R1cmUuaWQpO1xuICAgIGlmIChpZHggPiAwKSB7XG4gICAgICBoYW5kbGVMZWN0dXJlU2VsZWN0KGNvdXJzZS5sZWN0dXJlc1tpZHggLSAxXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1hcmtDb21wbGV0ZSA9ICgpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRMZWN0dXJlKSByZXR1cm47XG4gICAgdXBkYXRlUHJvZ3Jlc3ModXNlci5pZCwgY3VycmVudExlY3R1cmUuaWQsIGN1cnJlbnRUaW1lLCB0cnVlKTtcbiAgICBzZXRDb21wbGV0ZWRMZWN0dXJlcyhwcmV2ID0+IFsuLi5uZXcgU2V0KFsuLi5wcmV2LCBjdXJyZW50TGVjdHVyZS5pZF0pXSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVmlkZW9FbmRlZCA9ICgpID0+IHtcbiAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgIGlmIChjdXJyZW50TGVjdHVyZSkge1xuICAgICAgdXBkYXRlUHJvZ3Jlc3ModXNlci5pZCwgY3VycmVudExlY3R1cmUuaWQsIGR1cmF0aW9uLCB0cnVlKTtcbiAgICAgIHNldENvbXBsZXRlZExlY3R1cmVzKHByZXYgPT4gWy4uLm5ldyBTZXQoWy4uLnByZXYsIGN1cnJlbnRMZWN0dXJlLmlkXSldKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAoKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50TGVjdHVyZSkgcmV0dXJuO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gY3VycmVudExlY3R1cmUudmlkZW9Vcmw7XG4gICAgbGluay5kb3dubG9hZCA9IGAke2N1cnJlbnRMZWN0dXJlLnRpdGxlfS5tcDRgO1xuICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgfTtcblxuICBjb25zdCBmb3JtYXRUaW1lID0gKHNlY29uZHM6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgY29uc3Qgc2VjcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKTtcbiAgICByZXR1cm4gYCR7bWluc306JHtzZWNzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBsb2dvdXQoKTtcbiAgICBuYXZpZ2F0ZSgnLycpO1xuICB9O1xuXG4gIGlmICghY291cnNlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLXN1cmZhY2UtOTAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxCb29rT3BlbiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgdGV4dC1zdXJmYWNlLTIwMC8zMCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXCI+Q291cnNlIG5vdCBmb3VuZDwvaDI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL3N0dWRlbnQnKX0gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJyYW5kLTQwMCBob3Zlcjp0ZXh0LWJyYW5kLTMwMFwiPlxuICAgICAgICAgICAgQmFjayB0byBEYXNoYm9hcmRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1zdXJmYWNlLTkwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICB7LyogVG9wIEJhciAqL31cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTAgZ2xhc3MgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTE0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9zdHVkZW50Jyl9IGNsYXNzTmFtZT1cInAtMS41IHJvdW5kZWQtbGcgdGV4dC1zdXJmYWNlLTIwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgICAgICA8QXJyb3dMZWZ0IGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNiBoLTYgcm91bmRlZC1tZCBiZy1ncmFkaWVudC10by1iciBmcm9tLWJyYW5kLTUwMCB0by1wdXJwbGUtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8QnJhaW4gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0cnVuY2F0ZSBtYXgtdy1bMjAwcHhdXCI+e2NvdXJzZS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxMYW5ndWFnZVRvZ2dsZSBsYW5ndWFnZT17bGFuZ3VhZ2V9IG9uTGFuZ3VhZ2VDaGFuZ2U9e29uTGFuZ3VhZ2VDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtbGcgdGV4dC1zdXJmYWNlLTIwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14c1wiPkxvZ291dDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93XCI+XG4gICAgICAgIHsvKiBNYWluIENvbnRlbnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTBcIj5cbiAgICAgICAgICB7IWVucm9sbGVkID8gKFxuICAgICAgICAgICAgLyogRW5yb2xsbWVudCBWaWV3ICovXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTpwLThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItd2hpdGUvMTAgYmctc3VyZmFjZS04MDAvMzBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00OCBzbTpoLTY0IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYnJhbmQtNjAwLzIwIHRvLXB1cnBsZS02MDAvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJvb2tPcGVuIGNsYXNzTmFtZT1cInctMjAgaC0yMCB0ZXh0LWJyYW5kLTQwMC8zMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHNtOnAtOFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTAuNSB0ZXh0LVsxMHB4XSBmb250LW1lZGl1bSBiZy1icmFuZC01MDAvMTAgdGV4dC1icmFuZC0zMDAgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItYnJhbmQtNTAwLzIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291cnNlLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTAuNSB0ZXh0LVsxMHB4XSBmb250LW1lZGl1bSBiZy1zdXJmYWNlLTkwMC81MCB0ZXh0LXN1cmZhY2UtMjAwIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdXJzZS5sZWN0dXJlcy5sZW5ndGh9IGxlY3R1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGZvbnQtYm9sZCBtYi0zXCI+e2NvdXJzZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN1cmZhY2UtMjAwIG1iLTYgbGVhZGluZy1yZWxheGVkXCI+e2NvdXJzZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LXN1cmZhY2UtMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9va09wZW4gY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ieSB7Y291cnNlLnRlYWNoZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFbnJvbGx9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byBweC04IHB5LTMuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgYmctYnJhbmQtNjAwIGhvdmVyOmJnLWJyYW5kLTUwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy14bCBob3ZlcjpzaGFkb3ctYnJhbmQtNjAwLzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxQbGF5IGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIEVucm9sbCBmb3IgRnJlZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAvKiBWaWRlbyBQbGF5ZXIgVmlldyAqL1xuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgey8qIFZpZGVvIFBsYXllciAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1ibGFja1wiPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50TGVjdHVyZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgICAgICAgcmVmPXt2aWRlb1JlZn1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50TGVjdHVyZS52aWRlb1VybH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGFzcGVjdC12aWRlbyBtYXgtaC1bNzB2aF1cIlxuICAgICAgICAgICAgICAgICAgICBvblRpbWVVcGRhdGU9e2hhbmRsZVRpbWVVcGRhdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGVkTWV0YWRhdGE9e2hhbmRsZUxvYWRlZE1ldGFkYXRhfVxuICAgICAgICAgICAgICAgICAgICBvbkVuZGVkPXtoYW5kbGVWaWRlb0VuZGVkfVxuICAgICAgICAgICAgICAgICAgICBvblBsYXk9eygpID0+IHNldElzUGxheWluZyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgb25QYXVzZT17KCkgPT4gc2V0SXNQbGF5aW5nKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHsvKiBDdXN0b20gQ29udHJvbHMgT3ZlcmxheSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjay85MCB0by10cmFuc3BhcmVudCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBQcm9ncmVzcyBCYXIgKi99XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICBtYXg9e2R1cmF0aW9uIHx8IDB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50VGltZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlZWt9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEgcm91bmRlZC1mdWxsIGFwcGVhcmFuY2Utbm9uZSBiZy13aGl0ZS8yMCBjdXJzb3ItcG9pbnRlciBtYi0zIFsmOjotd2Via2l0LXNsaWRlci10aHVtYl06YXBwZWFyYW5jZS1ub25lIFsmOjotd2Via2l0LXNsaWRlci10aHVtYl06dy0zIFsmOjotd2Via2l0LXNsaWRlci10aHVtYl06aC0zIFsmOjotd2Via2l0LXNsaWRlci10aHVtYl06cm91bmRlZC1mdWxsIFsmOjotd2Via2l0LXNsaWRlci10aHVtYl06YmctYnJhbmQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoOTksIDEwMiwgMjQxKSAkeyhjdXJyZW50VGltZSAvIChkdXJhdGlvbiB8fCAxKSkgKiAxMDB9JSwgcmdiYSgyNTUsMjU1LDI1NSwwLjIpICR7KGN1cnJlbnRUaW1lIC8gKGR1cmF0aW9uIHx8IDEpKSAqIDEwMH0lKWBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVByZXZMZWN0dXJlfSBjbGFzc05hbWU9XCJwLTEuNSByb3VuZGVkLWxnIGhvdmVyOmJnLXdoaXRlLzEwIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpcEJhY2sgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQbGF5UGF1c2V9IGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWxnIGJnLXdoaXRlLzEwIGhvdmVyOmJnLXdoaXRlLzIwIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNQbGF5aW5nID8gPFBhdXNlIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiA6IDxQbGF5IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHRMZWN0dXJlfSBjbGFzc05hbWU9XCJwLTEuNSByb3VuZGVkLWxnIGhvdmVyOmJnLXdoaXRlLzEwIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpcEZvcndhcmQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVNdXRlVG9nZ2xlfSBjbGFzc05hbWU9XCJwLTEuNSByb3VuZGVkLWxnIGhvdmVyOmJnLXdoaXRlLzEwIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNNdXRlZCA/IDxWb2x1bWVYIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPiA6IDxWb2x1bWUyIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtd2hpdGUvNzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRUaW1lKGN1cnJlbnRUaW1lKX0gLyB7Zm9ybWF0VGltZShkdXJhdGlvbil9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRG93bmxvYWR9IGNsYXNzTmFtZT1cInAtMS41IHJvdW5kZWQtbGcgaG92ZXI6Ymctd2hpdGUvMTAgdHJhbnNpdGlvbi1hbGxcIiB0aXRsZT1cIkRvd25sb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVGdWxsc2NyZWVufSBjbGFzc05hbWU9XCJwLTEuNSByb3VuZGVkLWxnIGhvdmVyOmJnLXdoaXRlLzEwIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWF4aW1pemUgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIE1vYmlsZSBzaWRlYmFyIHRvZ2dsZSAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1NpZGViYXIoIXNob3dTaWRlYmFyKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEuNSByb3VuZGVkLWxnIGhvdmVyOmJnLXdoaXRlLzEwIHRyYW5zaXRpb24tYWxsIGxnOmhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2tPcGVuIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogTGVjdHVyZSBJbmZvICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTpwLTYgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e2N1cnJlbnRMZWN0dXJlPy50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3VyZmFjZS0yMDAgbXQtMVwiPntjdXJyZW50TGVjdHVyZT8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb21wbGV0ZWRMZWN0dXJlcy5pbmNsdWRlcyhjdXJyZW50TGVjdHVyZT8uaWQgfHwgJycpID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gYmctZ3JlZW4tNTAwLzEwIHRleHQtZ3JlZW4tMzAwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmVlbi01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZTIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPiBDb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWFya0NvbXBsZXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSBiZy1icmFuZC02MDAvMjAgdGV4dC1icmFuZC0zMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC8yMCBob3ZlcjpiZy1icmFuZC02MDAvMzAgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+IE1hcmsgQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gYmctc3VyZmFjZS04MDAvNTAgdGV4dC1zdXJmYWNlLTIwMCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItd2hpdGUvMTAgaG92ZXI6Ym9yZGVyLXdoaXRlLzIwIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+IERvd25sb2FkXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFNpZGViYXIgLSBMZWN0dXJlIExpc3QgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgJHtzaG93U2lkZWJhciA/ICdmaXhlZCBpbnNldC0wIHotNDAgYmctYmxhY2svNTAgbGc6c3RhdGljIGxnOmJnLXRyYW5zcGFyZW50JyA6ICdoaWRkZW4nfVxuICAgICAgICAgIGxnOmJsb2NrIGxnOnctODAgeGw6dy05NiBzaHJpbmstMCBib3JkZXItbCBib3JkZXItd2hpdGUvNVxuICAgICAgICBgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBiZy1zdXJmYWNlLTg1MCBsZzpiZy1zdXJmYWNlLTkwMCBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIGJnLXN1cmZhY2UtODUwLzk1IGxnOmJnLXN1cmZhY2UtOTAwLzk1IGJhY2tkcm9wLWJsdXItc20gYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzUgcC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5Db3Vyc2UgQ29udGVudDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAge2NvbXBsZXRlZExlY3R1cmVzLmxlbmd0aH0ve2NvdXJzZS5sZWN0dXJlcy5sZW5ndGh9IGNvbXBsZXRlZFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1NpZGViYXIoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBwLTEgcm91bmRlZCB0ZXh0LXN1cmZhY2UtMjAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIOKclVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAge2NvdXJzZS5sZWN0dXJlcy5tYXAoKGxlY3R1cmUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ29tcGxldGVkID0gY29tcGxldGVkTGVjdHVyZXMuaW5jbHVkZXMobGVjdHVyZS5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50ID0gY3VycmVudExlY3R1cmU/LmlkID09PSBsZWN0dXJlLmlkO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17bGVjdHVyZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB4OiAyIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVucm9sbGVkICYmIGhhbmRsZUxlY3R1cmVTZWxlY3QobGVjdHVyZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCB0ZXh0LWxlZnQgcC0zIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWJyYW5kLTYwMC8xMCBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC8yMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hvdmVyOmJnLXdoaXRlLzUgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCdcbiAgICAgICAgICAgICAgICAgICAgfSAkeyFlbnJvbGxlZCA/ICdvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZCcgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVucm9sbGVkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTcgaC03IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZ3JlZW4tNTAwLzIwIHRleHQtZ3JlZW4tNDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzQ3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1icmFuZC01MDAvMjAgdGV4dC1icmFuZC00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLXN1cmZhY2UtODAwIHRleHQtc3VyZmFjZS0yMDAnXG4gICAgICAgICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQ29tcGxldGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bVwiPntpZHggKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC1zbSBmb250LW1lZGl1bSB0cnVuY2F0ZSAke2lzQ3VycmVudCA/ICd0ZXh0LWJyYW5kLTMwMCcgOiAndGV4dC13aGl0ZSd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWN0dXJlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1zdXJmYWNlLTIwMC82MCBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xlY3R1cmUuZGVzY3JpcHRpb24gPyBsZWN0dXJlLmRlc2NyaXB0aW9uLnNsaWNlKDAsIDQwKSArICcuLi4nIDogJ05vIGRlc2NyaXB0aW9uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFByb2dyZXNzIFN1bW1hcnkgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXItdCBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLXhsIGJnLXN1cmZhY2UtODAwLzUwIGJvcmRlciBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdXJmYWNlLTIwMFwiPlByb2dyZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWJyYW5kLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y291cnNlLmxlY3R1cmVzLmxlbmd0aCA+IDAgPyBNYXRoLnJvdW5kKChjb21wbGV0ZWRMZWN0dXJlcy5sZW5ndGggLyBjb3Vyc2UubGVjdHVyZXMubGVuZ3RoKSAqIDEwMCkgOiAwfSVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTEuNSByb3VuZGVkLWZ1bGwgYmctc3VyZmFjZS05MDAvNTAgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgcm91bmRlZC1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1icmFuZC01MDAgdG8tcHVycGxlLTUwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7Y291cnNlLmxlY3R1cmVzLmxlbmd0aCA+IDAgPyAoY29tcGxldGVkTGVjdHVyZXMubGVuZ3RoIC8gY291cnNlLmxlY3R1cmVzLmxlbmd0aCkgKiAxMDAgOiAwfSVgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyIGxhbmd1YWdlPXtsYW5ndWFnZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL3dvcmtzcGFjZS9zcmMvcGFnZXMvQ291cnNlRGV0YWlsLnRzeCJ9