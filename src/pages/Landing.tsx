import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Landing.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/pages/Landing.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=620eb88c"; const useState = __vite__cjsImport3_react["useState"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=d53b2b6e";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=6e0f127a";
import {
  Brain,
  Zap,
  Shield,
  BookOpen,
  Play,
  ChevronRight,
  Star,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Globe,
  Code2,
  Cpu,
  Download
} from "/node_modules/.vite/deps/lucide-react.js?v=6a865639";
import { logout } from "/src/lib/store.ts";
import { t } from "/src/lib/i18n.ts";
import LanguageToggle from "/src/components/LanguageToggle.tsx";
import Footer from "/src/components/Footer.tsx";
export default function Landing({ user, setUser, language, onLanguageChange }) {
  _s();
  const tr = t(language);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLogout = () => {
    logout();
    setUser(null);
  };
  const handleDownloadZip = () => {
    window.open("/download-zip.html", "_blank");
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 grid-bg pointer-events-none" }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "fixed bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("nav", { className: "fixed top-0 left-0 right-0 z-50 glass border-b border-white/5", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Brain, { className: "w-5 h-5 text-white" }, void 0, false, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-bold tracking-tight", children: "Neuro-Edu OS" }, void 0, false, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex items-center gap-8", children: [
          /* @__PURE__ */ jsxDEV("a", { href: "#features", className: "text-sm text-surface-200 hover:text-white transition-colors", children: "Features" }, void 0, false, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: "#courses", className: "text-sm text-surface-200 hover:text-white transition-colors", children: "Courses" }, void 0, false, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { onClick: () => navigate("/parent"), className: "text-sm text-surface-200 hover:text-white transition-colors", children: "Parent Portal" }, void 0, false, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: "/explorer.html", className: "text-sm text-surface-200 hover:text-white transition-colors flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV("span", { children: "📂" }, void 0, false, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 80,
              columnNumber: 17
            }, this),
            " Files"
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV(LanguageToggle, { language, onLanguageChange }, void 0, false, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this),
          user ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-surface-200", children: [
              user.role === "TEACHER" ? "👨‍🏫" : "🎓",
              " ",
              user.name
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 88,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => navigate(user.role === "TEACHER" ? "/teacher" : "/student"),
                className: "px-4 py-2 text-sm font-medium bg-brand-600 hover:bg-brand-500 rounded-lg transition-all",
                children: "Dashboard"
              },
              void 0,
              false,
              {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 91,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleLogout,
                className: "px-4 py-2 text-sm font-medium text-surface-200 hover:text-white transition-colors",
                children: "Logout"
              },
              void 0,
              false,
              {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 97,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => navigate("/login"),
                className: "px-4 py-2 text-sm font-medium text-surface-200 hover:text-white transition-colors",
                children: "Sign In"
              },
              void 0,
              false,
              {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 106,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => navigate("/login"),
                className: "px-4 py-2 text-sm font-medium bg-brand-600 hover:bg-brand-500 rounded-lg transition-all hover:shadow-lg hover:shadow-brand-600/20",
                children: "Get Started"
              },
              void 0,
              false,
              {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 112,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: "md:hidden p-2 text-surface-200",
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            children: mobileMenuOpen ? /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 127,
              columnNumber: 33
            }, this) : /* @__PURE__ */ jsxDEV(Menu, { className: "w-5 h-5" }, void 0, false, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 127,
              columnNumber: 61
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 123,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/Landing.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/workspace/src/pages/Landing.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      mobileMenuOpen && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          className: "md:hidden border-t border-white/5 bg-surface-900/95 backdrop-blur-xl",
          children: /* @__PURE__ */ jsxDEV("div", { className: "px-4 py-4 space-y-3", children: [
            /* @__PURE__ */ jsxDEV("a", { href: "#features", className: "block text-sm text-surface-200 py-2", children: "Features" }, void 0, false, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 140,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "#courses", className: "block text-sm text-surface-200 py-2", children: "Courses" }, void 0, false, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 141,
              columnNumber: 15
            }, this),
            user ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => {
                    navigate(user.role === "TEACHER" ? "/teacher" : "/student");
                    setMobileMenuOpen(false);
                  },
                  className: "block w-full text-left px-4 py-2 text-sm font-medium bg-brand-600 rounded-lg",
                  children: "Dashboard"
                },
                void 0,
                false,
                {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 144,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  },
                  className: "block w-full text-left px-4 py-2 text-sm text-surface-200",
                  children: "Logout"
                },
                void 0,
                false,
                {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 150,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 143,
              columnNumber: 13
            }, this) : /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => {
                  navigate("/login");
                  setMobileMenuOpen(false);
                },
                className: "block w-full text-left px-4 py-2 text-sm font-medium bg-brand-600 rounded-lg",
                children: "Get Started"
              },
              void 0,
              false,
              {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 158,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 134,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "relative pt-32 pb-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/20 bg-brand-500/5 mb-8", children: [
              /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5 text-brand-400" }, void 0, false, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 179,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-brand-300", children: "Phase 2 — Proctoring, Gamification & Offline" }, void 0, false, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 180,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 178,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-white", children: "Learn Smarter with" }, void 0, false, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 184,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 185,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "gradient-text", children: "Neuro-Edu OS" }, void 0, false, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 186,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 183,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-lg sm:text-xl text-surface-200 max-w-2xl mx-auto mb-10 leading-relaxed", children: "The next-generation learning platform built for focused education. Premium video courses, progress tracking, and a distraction-free experience." }, void 0, false, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 189,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.2, duration: 0.5 },
                className: "mb-8",
                children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: handleDownloadZip,
                      className: "group relative w-full sm:w-auto px-10 py-5 text-base sm:text-lg font-bold rounded-2xl transition-all",
                      children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity blur-lg group-hover:blur-xl" }, void 0, false, {
                          fileName: "/workspace/src/pages/Landing.tsx",
                          lineNumber: 206,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "relative flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-2xl px-10 py-5 group-hover:from-red-500 group-hover:via-red-400 group-hover:to-orange-400 transition-all shadow-2xl shadow-red-600/30 group-hover:shadow-red-500/50", children: [
                          /* @__PURE__ */ jsxDEV(Download, { className: "w-6 h-6 text-white group-hover:animate-bounce" }, void 0, false, {
                            fileName: "/workspace/src/pages/Landing.tsx",
                            lineNumber: 210,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-white", children: "📦 Download All Source Files (ZIP)" }, void 0, false, {
                            fileName: "/workspace/src/pages/Landing.tsx",
                            lineNumber: 211,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { className: "hidden sm:inline text-white/70 text-sm ml-2", children: "30 files • Ready to deploy" }, void 0, false, {
                            fileName: "/workspace/src/pages/Landing.tsx",
                            lineNumber: 212,
                            columnNumber: 19
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/workspace/src/pages/Landing.tsx",
                          lineNumber: 209,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 rounded-2xl border-2 border-red-500/50 animate-ping opacity-20" }, void 0, false, {
                          fileName: "/workspace/src/pages/Landing.tsx",
                          lineNumber: 216,
                          columnNumber: 17
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/workspace/src/pages/Landing.tsx",
                      lineNumber: 201,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-3 text-center", children: "Click to instantly download all 30 project files as neuro-edu-os.zip" }, void 0, false, {
                    fileName: "/workspace/src/pages/Landing.tsx",
                    lineNumber: 219,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 195,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => navigate("/login"),
                  className: "w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-brand-600 hover:bg-brand-500 rounded-xl transition-all hover:shadow-xl hover:shadow-brand-600/20 flex items-center justify-center gap-2 group",
                  children: [
                    "Start Learning Free",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform" }, void 0, false, {
                      fileName: "/workspace/src/pages/Landing.tsx",
                      lineNumber: 230,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 225,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => navigate("/login"),
                  className: "w-full sm:w-auto px-8 py-3.5 text-sm font-semibold border border-white/10 hover:border-white/20 rounded-xl transition-all hover:bg-white/5 flex items-center justify-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxDEV(Play, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/workspace/src/pages/Landing.tsx",
                      lineNumber: 236,
                      columnNumber: 17
                    }, this),
                    "Watch Demo"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 232,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 224,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 173,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.3 },
          className: "mt-16 relative",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto max-w-4xl rounded-2xl border border-white/10 bg-surface-800/50 backdrop-blur-sm overflow-hidden glow", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-white/5", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-3 h-3 rounded-full bg-red-500/80" }, void 0, false, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 251,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-3 h-3 rounded-full bg-yellow-500/80" }, void 0, false, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 252,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-3 h-3 rounded-full bg-green-500/80" }, void 0, false, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 253,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "ml-2 text-xs text-surface-200", children: "Neuro-Edu OS — Dashboard" }, void 0, false, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 254,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 250,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "p-6 sm:p-8", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
                  { icon: BookOpen, label: "Active Courses", value: "12", color: "text-blue-400" },
                  { icon: Play, label: "Hours Watched", value: "47.5", color: "text-green-400" },
                  { icon: Star, label: "Completion Rate", value: "89%", color: "text-amber-400" }
                ].map(
                  (stat, i) => /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-surface-900/50 border border-white/5", children: [
                    /* @__PURE__ */ jsxDEV(stat.icon, { className: `w-5 h-5 ${stat.color} mb-2` }, void 0, false, {
                      fileName: "/workspace/src/pages/Landing.tsx",
                      lineNumber: 264,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-white", children: stat.value }, void 0, false, {
                      fileName: "/workspace/src/pages/Landing.tsx",
                      lineNumber: 265,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-1", children: stat.label }, void 0, false, {
                      fileName: "/workspace/src/pages/Landing.tsx",
                      lineNumber: 266,
                      columnNumber: 23
                    }, this)
                  ] }, i, true, {
                    fileName: "/workspace/src/pages/Landing.tsx",
                    lineNumber: 263,
                    columnNumber: 19
                  }, this)
                ) }, void 0, false, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 257,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3", children: ["React", "System Design", "AI/ML", "DevOps"].map(
                  (tag, i) => /* @__PURE__ */ jsxDEV("div", { className: "px-3 py-2 rounded-lg bg-brand-500/10 border border-brand-500/20 text-center", children: /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-brand-300", children: tag }, void 0, false, {
                    fileName: "/workspace/src/pages/Landing.tsx",
                    lineNumber: 273,
                    columnNumber: 23
                  }, this) }, i, false, {
                    fileName: "/workspace/src/pages/Landing.tsx",
                    lineNumber: 272,
                    columnNumber: 19
                  }, this)
                ) }, void 0, false, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 270,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 256,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 249,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-20 -left-20 w-40 h-40 bg-brand-600/20 rounded-full blur-[80px] animate-pulse-glow" }, void 0, false, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 280,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-[80px] animate-pulse-glow" }, void 0, false, {
              fileName: "/workspace/src/pages/Landing.tsx",
              lineNumber: 281,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 243,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 172,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-12 border-y border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
      { value: "10K+", label: "Active Students" },
      { value: "500+", label: "Video Lectures" },
      { value: "50+", label: "Expert Teachers" },
      { value: "98%", label: "Satisfaction Rate" }
    ].map(
      (stat, i) => /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-2xl sm:text-3xl font-bold gradient-text", children: stat.value }, void 0, false, {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 297,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200 mt-1", children: stat.label }, void 0, false, {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 298,
          columnNumber: 17
        }, this)
      ] }, i, true, {
        fileName: "/workspace/src/pages/Landing.tsx",
        lineNumber: 296,
        columnNumber: 13
      }, this)
    ) }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 289,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 288,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 287,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "features", className: "py-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-bold mb-4", children: [
          "Built for ",
          /* @__PURE__ */ jsxDEV("span", { className: "gradient-text", children: "Focused Learning" }, void 0, false, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 310,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 309,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-surface-200 max-w-xl mx-auto", children: "Every feature is designed to minimize distractions and maximize knowledge retention." }, void 0, false, {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 312,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/Landing.tsx",
        lineNumber: 308,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        {
          icon: Shield,
          title: "Proctored Quizzes",
          description: "Anti-cheating system with tab-switch detection, fullscreen enforcement, and auto-flagging.",
          color: "from-red-500/20 to-red-600/10"
        },
        {
          icon: Zap,
          title: "Gamification Engine",
          description: "Duolingo-style XP, streaks, levels, leagues, and badges. Stay motivated every day.",
          color: "from-amber-500/20 to-amber-600/10"
        },
        {
          icon: Globe,
          title: "Offline PWA",
          description: "Download courses for offline viewing with Dexie.js. Attendance syncs when back online.",
          color: "from-cyan-500/20 to-cyan-600/10"
        },
        {
          icon: Play,
          title: "HD Video Player",
          description: "Custom video player with download support, progress tracking, and smooth controls.",
          color: "from-blue-500/20 to-blue-600/10"
        },
        {
          icon: Brain,
          title: "Smart Analytics",
          description: "Weak topic analysis, progress bars, and performance breakdowns after every quiz.",
          color: "from-purple-500/20 to-purple-600/10"
        },
        {
          icon: Code2,
          title: "Modern Stack",
          description: "React 18, TypeScript, Tailwind CSS, Dexie.js, Framer Motion. Production-ready code.",
          color: "from-rose-500/20 to-rose-600/10"
        }
      ].map(
        (feature, i) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "group p-6 rounded-2xl border border-white/5 bg-surface-800/30 hover:bg-surface-800/50 hover:border-white/10 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: `w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsxDEV(feature.icon, { className: "w-6 h-6 text-white" }, void 0, false, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 365,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 364,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-white mb-2", children: feature.title }, void 0, false, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 367,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200 leading-relaxed", children: feature.description }, void 0, false, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 368,
                columnNumber: 17
              }, this)
            ]
          },
          i,
          true,
          {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 356,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/workspace/src/pages/Landing.tsx",
        lineNumber: 317,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 307,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 306,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "courses", className: "py-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-bold mb-4", children: [
          "Explore ",
          /* @__PURE__ */ jsxDEV("span", { className: "gradient-text", children: "Top Courses" }, void 0, false, {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 380,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 379,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-surface-200 max-w-xl mx-auto", children: "Curated by industry experts. Learn at your own pace." }, void 0, false, {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 382,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/Landing.tsx",
        lineNumber: 378,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        { title: "Advanced React Patterns", category: "Development", lectures: 3, icon: Code2 },
        { title: "System Design Fundamentals", category: "Architecture", lectures: 2, icon: Cpu },
        { title: "AI/ML for Developers", category: "AI & ML", lectures: 1, icon: Brain }
      ].map(
        (course, i) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.15 },
            className: "group rounded-2xl border border-white/5 bg-surface-800/30 overflow-hidden hover:border-brand-500/30 transition-all duration-300 cursor-pointer",
            onClick: () => navigate("/login"),
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "h-40 bg-gradient-to-br from-brand-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden", children: [
                /* @__PURE__ */ jsxDEV(course.icon, { className: "w-16 h-16 text-brand-400/50 group-hover:scale-110 transition-transform duration-500" }, void 0, false, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 403,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-surface-800/80 to-transparent" }, void 0, false, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 404,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 402,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsxDEV("span", { className: "px-2 py-0.5 text-[10px] font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20", children: course.category }, void 0, false, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 408,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 407,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-semibold text-white mb-1 group-hover:text-brand-300 transition-colors", children: course.title }, void 0, false, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 412,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200", children: [
                  course.lectures,
                  " lectures"
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/Landing.tsx",
                  lineNumber: 415,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 406,
                columnNumber: 17
              }, this)
            ]
          },
          i,
          true,
          {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 393,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/workspace/src/pages/Landing.tsx",
        lineNumber: 387,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 377,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 376,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-3xl border border-white/10 bg-surface-800/30 p-8 sm:p-12 text-center overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-600/10 to-purple-600/10" }, void 0, false, {
        fileName: "/workspace/src/pages/Landing.tsx",
        lineNumber: 427,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-brand-600/10 rounded-full blur-[80px]" }, void 0, false, {
        fileName: "/workspace/src/pages/Landing.tsx",
        lineNumber: 428,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl sm:text-4xl font-bold mb-4", children: "Ready to level up your skills?" }, void 0, false, {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 431,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-surface-200 mb-8 max-w-lg mx-auto", children: "Join thousands of learners already using Neuro-Edu OS to accelerate their career growth." }, void 0, false, {
          fileName: "/workspace/src/pages/Landing.tsx",
          lineNumber: 434,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => navigate("/login"),
            className: "px-8 py-3.5 text-sm font-semibold bg-brand-600 hover:bg-brand-500 rounded-xl transition-all hover:shadow-xl hover:shadow-brand-600/20 inline-flex items-center gap-2 group",
            children: [
              "Get Started — It's Free",
              /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform" }, void 0, false, {
                fileName: "/workspace/src/pages/Landing.tsx",
                lineNumber: 442,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/workspace/src/pages/Landing.tsx",
            lineNumber: 437,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/Landing.tsx",
        lineNumber: 430,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 426,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 425,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 424,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { language }, void 0, false, {
      fileName: "/workspace/src/pages/Landing.tsx",
      lineNumber: 449,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/workspace/src/pages/Landing.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
_s(Landing, "N4Yqs9Z5j9QgBDIPVSmVN5+ODcI=", false, function() {
  return [useNavigate];
});
_c = Landing;
var _c;
$RefreshReg$(_c, "Landing");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/pages/Landing.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/pages/Landing.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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aWVsZCIsIkJvb2tPcGVuIiwiUGxheSIsIkNoZXZyb25SaWdodCIsIlN0YXIiLCJBcnJvd1JpZ2h0IiwiTWVudSIsIlgiLCJTcGFya2xlcyIsIkdsb2JlIiwiQ29kZTIiLCJDcHUiLCJEb3dubG9hZCIsImxvZ291dCIsInQiLCJMYW5ndWFnZVRvZ2dsZSIsIkZvb3RlciIsIkxhbmRpbmciLCJ1c2VyIiwic2V0VXNlciIsImxhbmd1YWdlIiwib25MYW5ndWFnZUNoYW5nZSIsIl9zIiwidHIiLCJuYXZpZ2F0ZSIsIm1vYmlsZU1lbnVPcGVuIiwic2V0TW9iaWxlTWVudU9wZW4iLCJoYW5kbGVMb2dvdXQiLCJoYW5kbGVEb3dubG9hZFppcCIsIndpbmRvdyIsIm9wZW4iLCJyb2xlIiwibmFtZSIsIm9wYWNpdHkiLCJ5IiwiZHVyYXRpb24iLCJzY2FsZSIsImRlbGF5IiwiaWNvbiIsImxhYmVsIiwidmFsdWUiLCJjb2xvciIsIm1hcCIsInN0YXQiLCJpIiwidGFnIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZlYXR1cmUiLCJvbmNlIiwiY2F0ZWdvcnkiLCJsZWN0dXJlcyIsImNvdXJzZSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkxhbmRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgXG4gIEJyYWluLCBaYXAsIFNoaWVsZCwgQm9va09wZW4sIFBsYXksIENoZXZyb25SaWdodCwgXG4gIEdyYWR1YXRpb25DYXAsIFVzZXJzLCBTdGFyLCBBcnJvd1JpZ2h0LCBNZW51LCBYLFxuICBTcGFya2xlcywgR2xvYmUsIENvZGUyLCBDcHUsIERvd25sb2FkXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBVc2VyLCBsb2dvdXQgfSBmcm9tICcuLi9saWIvc3RvcmUnO1xuXG5pbXBvcnQgeyBMYW5ndWFnZSwgdCB9IGZyb20gJy4uL2xpYi9pMThuJztcbmltcG9ydCBMYW5ndWFnZVRvZ2dsZSBmcm9tICcuLi9jb21wb25lbnRzL0xhbmd1YWdlVG9nZ2xlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5pbnRlcmZhY2UgTGFuZGluZ1Byb3BzIHtcbiAgdXNlcjogVXNlciB8IG51bGw7XG4gIHNldFVzZXI6ICh1c2VyOiBVc2VyIHwgbnVsbCkgPT4gdm9pZDtcbiAgbGFuZ3VhZ2U6IExhbmd1YWdlO1xuICBvbkxhbmd1YWdlQ2hhbmdlOiAobGFuZzogTGFuZ3VhZ2UpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmcoeyB1c2VyLCBzZXRVc2VyLCBsYW5ndWFnZSwgb25MYW5ndWFnZUNoYW5nZSB9OiBMYW5kaW5nUHJvcHMpIHtcbiAgY29uc3QgdHIgPSB0KGxhbmd1YWdlKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBbbW9iaWxlTWVudU9wZW4sIHNldE1vYmlsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9nb3V0KCk7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZFppcCA9ICgpID0+IHtcbiAgICAvLyBSZWRpcmVjdCB0byBhdXRvLWRvd25sb2FkIHBhZ2VcbiAgICB3aW5kb3cub3BlbignL2Rvd25sb2FkLXppcC5odG1sJywgJ19ibGFuaycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc3VyZmFjZS05MDAgdGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIHsvKiBCYWNrZ3JvdW5kIEVmZmVjdHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZ3JpZC1iZyBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB3LVs4MDBweF0gaC1bNjAwcHhdIGJnLWJyYW5kLTYwMC81IHJvdW5kZWQtZnVsbCBibHVyLVsxMjBweF0gcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIHJpZ2h0LTAgdy1bNjAwcHhdIGgtWzQwMHB4XSBiZy1wdXJwbGUtNjAwLzUgcm91bmRlZC1mdWxsIGJsdXItWzEwMHB4XSBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cblxuICAgICAgey8qIE5hdmlnYXRpb24gKi99XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgZ2xhc3MgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtbGcgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1icmFuZC01MDAgdG8tcHVycGxlLTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxCcmFpbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRcIj5OZXVyby1FZHUgT1M8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIERlc2t0b3AgTmF2ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNmZWF0dXJlc1wiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zdXJmYWNlLTIwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCI+RmVhdHVyZXM8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjY291cnNlc1wiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zdXJmYWNlLTIwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCI+Q291cnNlczwvYT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL3BhcmVudCcpfSBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3VyZmFjZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiPlBhcmVudCBQb3J0YWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9leHBsb3Jlci5odG1sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7wn5OCPC9zcGFuPiBGaWxlc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPExhbmd1YWdlVG9nZ2xlIGxhbmd1YWdlPXtsYW5ndWFnZX0gb25MYW5ndWFnZUNoYW5nZT17b25MYW5ndWFnZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zdXJmYWNlLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7dXNlci5yb2xlID09PSAnVEVBQ0hFUicgPyAn8J+RqOKAjfCfj6snIDogJ/CfjpMnfSB7dXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSh1c2VyLnJvbGUgPT09ICdURUFDSEVSJyA/ICcvdGVhY2hlcicgOiAnL3N0dWRlbnQnKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gYmctYnJhbmQtNjAwIGhvdmVyOmJnLWJyYW5kLTUwMCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvbG9naW4nKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zdXJmYWNlLTIwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvbG9naW4nKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gYmctYnJhbmQtNjAwIGhvdmVyOmJnLWJyYW5kLTUwMCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy1sZyBob3ZlcjpzaGFkb3ctYnJhbmQtNjAwLzIwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBNb2JpbGUgbWVudSBidXR0b24gKi99XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBwLTIgdGV4dC1zdXJmYWNlLTIwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuKCFtb2JpbGVNZW51T3Blbil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttb2JpbGVNZW51T3BlbiA/IDxYIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiA6IDxNZW51IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTW9iaWxlIE1lbnUgKi99XG4gICAgICAgIHttb2JpbGVNZW51T3BlbiAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTEwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBib3JkZXItdCBib3JkZXItd2hpdGUvNSBiZy1zdXJmYWNlLTkwMC85NSBiYWNrZHJvcC1ibHVyLXhsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktNCBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNmZWF0dXJlc1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1zdXJmYWNlLTIwMCBweS0yXCI+RmVhdHVyZXM8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjY291cnNlc1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1zdXJmYWNlLTIwMCBweS0yXCI+Q291cnNlczwvYT5cbiAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBuYXZpZ2F0ZSh1c2VyLnJvbGUgPT09ICdURUFDSEVSJyA/ICcvdGVhY2hlcicgOiAnL3N0dWRlbnQnKTsgc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpOyB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgdGV4dC1sZWZ0IHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIGJnLWJyYW5kLTYwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBoYW5kbGVMb2dvdXQoKTsgc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpOyB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgdGV4dC1sZWZ0IHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtc3VyZmFjZS0yMDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgbmF2aWdhdGUoJy9sb2dpbicpOyBzZXRNb2JpbGVNZW51T3BlbihmYWxzZSk7IH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgdGV4dC1sZWZ0IHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIGJnLWJyYW5kLTYwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgPC9uYXY+XG5cbiAgICAgIHsvKiBIZXJvIFNlY3Rpb24gKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwdC0zMiBwYi0yMCBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtMyBweS0xLjUgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItYnJhbmQtNTAwLzIwIGJnLWJyYW5kLTUwMC81IG1iLThcIj5cbiAgICAgICAgICAgICAgPFNwYXJrbGVzIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtYnJhbmQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWJyYW5kLTMwMFwiPlBoYXNlIDIg4oCUIFByb2N0b3JpbmcsIEdhbWlmaWNhdGlvbiAmIE9mZmxpbmU8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHNtOnRleHQtNXhsIG1kOnRleHQtN3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCBsZWFkaW5nLVsxLjFdIG1iLTZcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkxlYXJuIFNtYXJ0ZXIgd2l0aDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyYWRpZW50LXRleHRcIj5OZXVyby1FZHUgT1M8L3NwYW4+XG4gICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQteGwgdGV4dC1zdXJmYWNlLTIwMCBtYXgtdy0yeGwgbXgtYXV0byBtYi0xMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgVGhlIG5leHQtZ2VuZXJhdGlvbiBsZWFybmluZyBwbGF0Zm9ybSBidWlsdCBmb3IgZm9jdXNlZCBlZHVjYXRpb24uIFxuICAgICAgICAgICAgICBQcmVtaXVtIHZpZGVvIGNvdXJzZXMsIHByb2dyZXNzIHRyYWNraW5nLCBhbmQgYSBkaXN0cmFjdGlvbi1mcmVlIGV4cGVyaWVuY2UuXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIHsvKiBCSUcgUkVEIERPV05MT0FEIFpJUCBCVVRUT04gKi99XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjIsIGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItOFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZFppcH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSB3LWZ1bGwgc206dy1hdXRvIHB4LTEwIHB5LTUgdGV4dC1iYXNlIHNtOnRleHQtbGcgZm9udC1ib2xkIHJvdW5kZWQtMnhsIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKiBBbmltYXRlZCBnbG93IGJhY2tncm91bmQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1yZWQtNjAwIHZpYS1yZWQtNTAwIHRvLW9yYW5nZS01MDAgcm91bmRlZC0yeGwgb3BhY2l0eS04MCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgYmx1ci1sZyBncm91cC1ob3ZlcjpibHVyLXhsXCIgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7LyogQnV0dG9uIHN1cmZhY2UgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMyBiZy1ncmFkaWVudC10by1yIGZyb20tcmVkLTYwMCB2aWEtcmVkLTUwMCB0by1vcmFuZ2UtNTAwIHJvdW5kZWQtMnhsIHB4LTEwIHB5LTUgZ3JvdXAtaG92ZXI6ZnJvbS1yZWQtNTAwIGdyb3VwLWhvdmVyOnZpYS1yZWQtNDAwIGdyb3VwLWhvdmVyOnRvLW9yYW5nZS00MDAgdHJhbnNpdGlvbi1hbGwgc2hhZG93LTJ4bCBzaGFkb3ctcmVkLTYwMC8zMCBncm91cC1ob3ZlcjpzaGFkb3ctcmVkLTUwMC81MFwiPlxuICAgICAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC13aGl0ZSBncm91cC1ob3ZlcjphbmltYXRlLWJvdW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+8J+TpiBEb3dubG9hZCBBbGwgU291cmNlIEZpbGVzIChaSVApPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZSB0ZXh0LXdoaXRlLzcwIHRleHQtc20gbWwtMlwiPjMwIGZpbGVzIOKAoiBSZWFkeSB0byBkZXBsb3k8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogUHVsc2UgcmluZyBhbmltYXRpb24gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtMnhsIGJvcmRlci0yIGJvcmRlci1yZWQtNTAwLzUwIGFuaW1hdGUtcGluZyBvcGFjaXR5LTIwXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwIG10LTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBDbGljayB0byBpbnN0YW50bHkgZG93bmxvYWQgYWxsIDMwIHByb2plY3QgZmlsZXMgYXMgbmV1cm8tZWR1LW9zLnppcFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvbG9naW4nKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIHB4LTggcHktMy41IHRleHQtc20gZm9udC1zZW1pYm9sZCBiZy1icmFuZC02MDAgaG92ZXI6YmctYnJhbmQtNTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LXhsIGhvdmVyOnNoYWRvdy1icmFuZC02MDAvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgZ3JvdXBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3RhcnQgTGVhcm5pbmcgRnJlZVxuICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctNCBoLTQgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMC41IHRyYW5zaXRpb24tdHJhbnNmb3JtXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL2xvZ2luJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byBweC04IHB5LTMuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBob3Zlcjpib3JkZXItd2hpdGUvMjAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy13aGl0ZS81IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQbGF5IGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgIFdhdGNoIERlbW9cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICB7LyogSGVybyBWaXN1YWwgKi99XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBkZWxheTogMC4zIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xNiByZWxhdGl2ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIG1heC13LTR4bCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXN1cmZhY2UtODAwLzUwIGJhY2tkcm9wLWJsdXItc20gb3ZlcmZsb3ctaGlkZGVuIGdsb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTMgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMyBoLTMgcm91bmRlZC1mdWxsIGJnLXJlZC01MDAvODBcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zIGgtMyByb3VuZGVkLWZ1bGwgYmcteWVsbG93LTUwMC84MFwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMgaC0zIHJvdW5kZWQtZnVsbCBiZy1ncmVlbi01MDAvODBcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwXCI+TmV1cm8tRWR1IE9TIOKAlCBEYXNoYm9hcmQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzbTpwLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgIHsgaWNvbjogQm9va09wZW4sIGxhYmVsOiAnQWN0aXZlIENvdXJzZXMnLCB2YWx1ZTogJzEyJywgY29sb3I6ICd0ZXh0LWJsdWUtNDAwJyB9LFxuICAgICAgICAgICAgICAgICAgICB7IGljb246IFBsYXksIGxhYmVsOiAnSG91cnMgV2F0Y2hlZCcsIHZhbHVlOiAnNDcuNScsIGNvbG9yOiAndGV4dC1ncmVlbi00MDAnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWNvbjogU3RhciwgbGFiZWw6ICdDb21wbGV0aW9uIFJhdGUnLCB2YWx1ZTogJzg5JScsIGNvbG9yOiAndGV4dC1hbWJlci00MDAnIH0sXG4gICAgICAgICAgICAgICAgICBdLm1hcCgoc3RhdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctc3VyZmFjZS05MDAvNTAgYm9yZGVyIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0YXQuaWNvbiBjbGFzc05hbWU9e2B3LTUgaC01ICR7c3RhdC5jb2xvcn0gbWItMmB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj57c3RhdC52YWx1ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwIG10LTFcIj57c3RhdC5sYWJlbH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIHtbJ1JlYWN0JywgJ1N5c3RlbSBEZXNpZ24nLCAnQUkvTUwnLCAnRGV2T3BzJ10ubWFwKCh0YWcsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInB4LTMgcHktMiByb3VuZGVkLWxnIGJnLWJyYW5kLTUwMC8xMCBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC8yMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1icmFuZC0zMDBcIj57dGFnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBEZWNvcmF0aXZlIGdyYWRpZW50IG9yYnMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMjAgLWxlZnQtMjAgdy00MCBoLTQwIGJnLWJyYW5kLTYwMC8yMCByb3VuZGVkLWZ1bGwgYmx1ci1bODBweF0gYW5pbWF0ZS1wdWxzZS1nbG93XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS0yMCAtcmlnaHQtMjAgdy00MCBoLTQwIGJnLXB1cnBsZS02MDAvMjAgcm91bmRlZC1mdWxsIGJsdXItWzgwcHhdIGFuaW1hdGUtcHVsc2UtZ2xvd1wiIC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIFN0YXRzIEJhciAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTEyIGJvcmRlci15IGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLThcIj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICcxMEsrJywgbGFiZWw6ICdBY3RpdmUgU3R1ZGVudHMnIH0sXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICc1MDArJywgbGFiZWw6ICdWaWRlbyBMZWN0dXJlcycgfSxcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJzUwKycsIGxhYmVsOiAnRXhwZXJ0IFRlYWNoZXJzJyB9LFxuICAgICAgICAgICAgICB7IHZhbHVlOiAnOTglJywgbGFiZWw6ICdTYXRpc2ZhY3Rpb24gUmF0ZScgfSxcbiAgICAgICAgICAgIF0ubWFwKChzdGF0LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGZvbnQtYm9sZCBncmFkaWVudC10ZXh0XCI+e3N0YXQudmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zdXJmYWNlLTIwMCBtdC0xXCI+e3N0YXQubGFiZWx9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEZlYXR1cmVzIFNlY3Rpb24gKi99XG4gICAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCIgY2xhc3NOYW1lPVwicHktMjAgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTZcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPlxuICAgICAgICAgICAgICBCdWlsdCBmb3IgPHNwYW4gY2xhc3NOYW1lPVwiZ3JhZGllbnQtdGV4dFwiPkZvY3VzZWQgTGVhcm5pbmc8L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdXJmYWNlLTIwMCBtYXgtdy14bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIEV2ZXJ5IGZlYXR1cmUgaXMgZGVzaWduZWQgdG8gbWluaW1pemUgZGlzdHJhY3Rpb25zIGFuZCBtYXhpbWl6ZSBrbm93bGVkZ2UgcmV0ZW50aW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogU2hpZWxkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUHJvY3RvcmVkIFF1aXp6ZXMnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW50aS1jaGVhdGluZyBzeXN0ZW0gd2l0aCB0YWItc3dpdGNoIGRldGVjdGlvbiwgZnVsbHNjcmVlbiBlbmZvcmNlbWVudCwgYW5kIGF1dG8tZmxhZ2dpbmcuJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2Zyb20tcmVkLTUwMC8yMCB0by1yZWQtNjAwLzEwJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246IFphcCxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0dhbWlmaWNhdGlvbiBFbmdpbmUnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRHVvbGluZ28tc3R5bGUgWFAsIHN0cmVha3MsIGxldmVscywgbGVhZ3VlcywgYW5kIGJhZGdlcy4gU3RheSBtb3RpdmF0ZWQgZXZlcnkgZGF5LicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdmcm9tLWFtYmVyLTUwMC8yMCB0by1hbWJlci02MDAvMTAnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogR2xvYmUsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdPZmZsaW5lIFBXQScsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdEb3dubG9hZCBjb3Vyc2VzIGZvciBvZmZsaW5lIHZpZXdpbmcgd2l0aCBEZXhpZS5qcy4gQXR0ZW5kYW5jZSBzeW5jcyB3aGVuIGJhY2sgb25saW5lLicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdmcm9tLWN5YW4tNTAwLzIwIHRvLWN5YW4tNjAwLzEwJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246IFBsYXksXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIRCBWaWRlbyBQbGF5ZXInLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ3VzdG9tIHZpZGVvIHBsYXllciB3aXRoIGRvd25sb2FkIHN1cHBvcnQsIHByb2dyZXNzIHRyYWNraW5nLCBhbmQgc21vb3RoIGNvbnRyb2xzLicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdmcm9tLWJsdWUtNTAwLzIwIHRvLWJsdWUtNjAwLzEwJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246IEJyYWluLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU21hcnQgQW5hbHl0aWNzJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1dlYWsgdG9waWMgYW5hbHlzaXMsIHByb2dyZXNzIGJhcnMsIGFuZCBwZXJmb3JtYW5jZSBicmVha2Rvd25zIGFmdGVyIGV2ZXJ5IHF1aXouJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2Zyb20tcHVycGxlLTUwMC8yMCB0by1wdXJwbGUtNjAwLzEwJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246IENvZGUyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTW9kZXJuIFN0YWNrJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JlYWN0IDE4LCBUeXBlU2NyaXB0LCBUYWlsd2luZCBDU1MsIERleGllLmpzLCBGcmFtZXIgTW90aW9uLiBQcm9kdWN0aW9uLXJlYWR5IGNvZGUuJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2Zyb20tcm9zZS01MDAvMjAgdG8tcm9zZS02MDAvMTAnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXS5tYXAoKGZlYXR1cmUsIGkpID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogaSAqIDAuMSB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHAtNiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzUgYmctc3VyZmFjZS04MDAvMzAgaG92ZXI6Ymctc3VyZmFjZS04MDAvNTAgaG92ZXI6Ym9yZGVyLXdoaXRlLzEwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMTIgaC0xMiByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLWJyICR7ZmVhdHVyZS5jb2xvcn0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm1gfT5cbiAgICAgICAgICAgICAgICAgIDxmZWF0dXJlLmljb24gY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgbWItMlwiPntmZWF0dXJlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXN1cmZhY2UtMjAwIGxlYWRpbmctcmVsYXhlZFwiPntmZWF0dXJlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogQ291cnNlcyBQcmV2aWV3ICovfVxuICAgICAgPHNlY3Rpb24gaWQ9XCJjb3Vyc2VzXCIgY2xhc3NOYW1lPVwicHktMjAgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTZcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPlxuICAgICAgICAgICAgICBFeHBsb3JlIDxzcGFuIGNsYXNzTmFtZT1cImdyYWRpZW50LXRleHRcIj5Ub3AgQ291cnNlczwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN1cmZhY2UtMjAwIG1heC13LXhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgQ3VyYXRlZCBieSBpbmR1c3RyeSBleHBlcnRzLiBMZWFybiBhdCB5b3VyIG93biBwYWNlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IHRpdGxlOiAnQWR2YW5jZWQgUmVhY3QgUGF0dGVybnMnLCBjYXRlZ29yeTogJ0RldmVsb3BtZW50JywgbGVjdHVyZXM6IDMsIGljb246IENvZGUyIH0sXG4gICAgICAgICAgICAgIHsgdGl0bGU6ICdTeXN0ZW0gRGVzaWduIEZ1bmRhbWVudGFscycsIGNhdGVnb3J5OiAnQXJjaGl0ZWN0dXJlJywgbGVjdHVyZXM6IDIsIGljb246IENwdSB9LFxuICAgICAgICAgICAgICB7IHRpdGxlOiAnQUkvTUwgZm9yIERldmVsb3BlcnMnLCBjYXRlZ29yeTogJ0FJICYgTUwnLCBsZWN0dXJlczogMSwgaWNvbjogQnJhaW4gfSxcbiAgICAgICAgICAgIF0ubWFwKChjb3Vyc2UsIGkpID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogaSAqIDAuMTUgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzUgYmctc3VyZmFjZS04MDAvMzAgb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOmJvcmRlci1icmFuZC01MDAvMzAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL2xvZ2luJyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNDAgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1icmFuZC02MDAvMjAgdG8tcHVycGxlLTYwMC8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxjb3Vyc2UuaWNvbiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgdGV4dC1icmFuZC00MDAvNTAgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXN1cmZhY2UtODAwLzgwIHRvLXRyYW5zcGFyZW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMC41IHRleHQtWzEwcHhdIGZvbnQtbWVkaXVtIGJnLWJyYW5kLTUwMC8xMCB0ZXh0LWJyYW5kLTMwMCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1icmFuZC01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y291cnNlLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIG1iLTEgZ3JvdXAtaG92ZXI6dGV4dC1icmFuZC0zMDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAge2NvdXJzZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDBcIj57Y291cnNlLmxlY3R1cmVzfSBsZWN0dXJlczwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogQ1RBIFNlY3Rpb24gKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yMCBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXN1cmZhY2UtODAwLzMwIHAtOCBzbTpwLTEyIHRleHQtY2VudGVyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYnJhbmQtNjAwLzEwIHRvLXB1cnBsZS02MDAvMTBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHctWzUwMHB4XSBoLVsyMDBweF0gYmctYnJhbmQtNjAwLzEwIHJvdW5kZWQtZnVsbCBibHVyLVs4MHB4XVwiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgUmVhZHkgdG8gbGV2ZWwgdXAgeW91ciBza2lsbHM/XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3VyZmFjZS0yMDAgbWItOCBtYXgtdy1sZyBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgSm9pbiB0aG91c2FuZHMgb2YgbGVhcm5lcnMgYWxyZWFkeSB1c2luZyBOZXVyby1FZHUgT1MgdG8gYWNjZWxlcmF0ZSB0aGVpciBjYXJlZXIgZ3Jvd3RoLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL2xvZ2luJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtOCBweS0zLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIGJnLWJyYW5kLTYwMCBob3ZlcjpiZy1icmFuZC01MDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3cteGwgaG92ZXI6c2hhZG93LWJyYW5kLTYwMC8yMCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZ3JvdXBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWQg4oCUIEl0J3MgRnJlZVxuICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0wLjUgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPEZvb3RlciBsYW5ndWFnZT17bGFuZ3VhZ2V9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii93b3Jrc3BhY2Uvc3JjL3BhZ2VzL0xhbmRpbmcudHN4In0=