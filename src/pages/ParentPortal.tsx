import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/ParentPortal.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/pages/ParentPortal.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=620eb88c"; const useState = __vite__cjsImport3_react["useState"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=d53b2b6e";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=6e0f127a";
import { ArrowLeft, MessageCircle, User, TrendingUp, AlertTriangle, Calendar, Brain, Flame } from "/node_modules/.vite/deps/lucide-react.js?v=6a865639";
import { getGamificationState } from "/src/lib/gamification.ts";
import { t } from "/src/lib/i18n.ts";
import Footer from "/src/components/Footer.tsx";
export default function ParentPortal({ language }) {
  _s();
  const navigate = useNavigate();
  const tr = t(language);
  const [studentId, setStudentId] = useState("");
  const [report, setReport] = useState(null);
  const [error, setError] = useState("");
  const handleViewReport = () => {
    setError("");
    try {
      const state = getGamificationState();
      const attendance = JSON.parse(localStorage.getItem("neuroedu_attendance") || "[]");
      const quizResults = JSON.parse(localStorage.getItem("neuroedu_quizResults") || "[]");
      const flaggedQuizzes = quizResults.filter((q) => q.isFlagged).length;
      const currentUser = JSON.parse(localStorage.getItem("neuroedu_current_user") || "{}");
      const studentName = currentUser.name || "Student";
      setReport({
        state,
        attendance,
        flaggedQuizzes,
        studentName
      });
    } catch (err) {
      setError(tr.childNotFound);
    }
  };
  const handleWhatsAppReport = () => {
    if (!report) return;
    const { state, flaggedQuizzes, studentName } = report;
    const quizResults = JSON.parse(localStorage.getItem("neuroedu_quizResults") || "[]");
    let weakTopic = "N/A";
    if (quizResults.length > 0) {
      const latestQuiz = quizResults[quizResults.length - 1];
      weakTopic = latestQuiz.weakTopic || "N/A";
    }
    const message = `Assalam-o-Alaikum,

Your child ${studentName} has:
• XP: ${state.xp}
• Streak: ${state.streak} days 🔥
• Level: ${state.level} (${state.league})
• Weak Topic: ${weakTopic}
• Flagged Quizzes: ${flaggedQuizzes}

From Neuro-Edu OS`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 grid-bg pointer-events-none" }, void 0, false, {
      fileName: "/workspace/src/pages/ParentPortal.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 glass border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-14", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => navigate("/"),
          className: "flex items-center gap-2 text-surface-200 hover:text-white transition-colors",
          children: [
            /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/workspace/src/pages/ParentPortal.tsx",
              lineNumber: 114,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm", children: tr.backToHome }, void 0, false, {
              fileName: "/workspace/src/pages/ParentPortal.tsx",
              lineNumber: 115,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/ParentPortal.tsx",
          lineNumber: 110,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-6 h-6 rounded-md bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Brain, { className: "w-3.5 h-3.5 text-white" }, void 0, false, {
          fileName: "/workspace/src/pages/ParentPortal.tsx",
          lineNumber: 119,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/workspace/src/pages/ParentPortal.tsx",
          lineNumber: 118,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium", children: tr.parentPortal }, void 0, false, {
          fileName: "/workspace/src/pages/ParentPortal.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/ParentPortal.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "w-16" }, void 0, false, {
        fileName: "/workspace/src/pages/ParentPortal.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/ParentPortal.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/ParentPortal.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/ParentPortal.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxDEV(User, { className: "w-8 h-8 text-blue-400" }, void 0, false, {
              fileName: "/workspace/src/pages/ParentPortal.tsx",
              lineNumber: 135,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/workspace/src/pages/ParentPortal.tsx",
              lineNumber: 134,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-bold mb-3", children: tr.parentPortal }, void 0, false, {
              fileName: "/workspace/src/pages/ParentPortal.tsx",
              lineNumber: 137,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-surface-200", children: tr.childProgress }, void 0, false, {
              fileName: "/workspace/src/pages/ParentPortal.tsx",
              lineNumber: 138,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/ParentPortal.tsx",
          lineNumber: 129,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "rounded-2xl border border-white/10 bg-surface-800/30 p-6 mb-6",
          children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mb-4", children: tr.enterChildId }, void 0, false, {
              fileName: "/workspace/src/pages/ParentPortal.tsx",
              lineNumber: 148,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  value: studentId,
                  onChange: (e) => setStudentId(e.target.value),
                  placeholder: "e.g., student-123",
                  className: "flex-1 px-4 py-3 rounded-xl bg-surface-900/50 border border-white/10 text-white placeholder:text-surface-200/50 focus:outline-none focus:border-brand-500/50"
                },
                void 0,
                false,
                {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 150,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: handleViewReport,
                  className: "px-6 py-3 text-sm font-semibold bg-brand-600 hover:bg-brand-500 rounded-xl transition-all",
                  children: tr.viewReport
                },
                void 0,
                false,
                {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 157,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ParentPortal.tsx",
              lineNumber: 149,
              columnNumber: 11
            }, this),
            error && /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-sm text-red-400", children: error }, void 0, false, {
              fileName: "/workspace/src/pages/ParentPortal.tsx",
              lineNumber: 165,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/ParentPortal.tsx",
          lineNumber: 142,
          columnNumber: 9
        },
        this
      ),
      report && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-surface-800/30 border border-white/5", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-5 h-5 text-brand-400" }, void 0, false, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 181,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-surface-200", children: "XP" }, void 0, false, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 182,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 180,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: report.state.xp }, void 0, false, {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 184,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ParentPortal.tsx",
                lineNumber: 179,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-surface-800/30 border border-white/5", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxDEV(Flame, { className: "w-5 h-5 text-orange-400" }, void 0, false, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 189,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-surface-200", children: "Streak" }, void 0, false, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 190,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 188,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: [
                  report.state.streak,
                  " days"
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 192,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ParentPortal.tsx",
                lineNumber: 187,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-surface-800/30 border border-white/5", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxDEV(Calendar, { className: "w-5 h-5 text-green-400" }, void 0, false, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 197,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-surface-200", children: tr.attendance }, void 0, false, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 198,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 196,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: report.attendance.length }, void 0, false, {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 200,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ParentPortal.tsx",
                lineNumber: 195,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-surface-800/30 border border-white/5", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxDEV(AlertTriangle, { className: "w-5 h-5 text-red-400" }, void 0, false, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 205,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-surface-200", children: tr.flaggedQuizzes }, void 0, false, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 206,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 204,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: report.flaggedQuizzes }, void 0, false, {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 208,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ParentPortal.tsx",
                lineNumber: 203,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ParentPortal.tsx",
              lineNumber: 178,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl border border-white/10 bg-surface-800/30", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-4", children: "Level & League" }, void 0, false, {
                fileName: "/workspace/src/pages/ParentPortal.tsx",
                lineNumber: 214,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-4xl", children: report.state.league === "Bronze" ? "🥉" : report.state.league === "Silver" ? "🥈" : report.state.league === "Gold" ? "🥇" : "💎" }, void 0, false, {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 216,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xl font-bold", children: [
                    report.state.league,
                    " League"
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 218,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200", children: [
                    "Level ",
                    report.state.level
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 219,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ParentPortal.tsx",
                  lineNumber: 217,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ParentPortal.tsx",
                lineNumber: 215,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ParentPortal.tsx",
              lineNumber: 213,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              motion.button,
              {
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                onClick: handleWhatsAppReport,
                className: "w-full p-4 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-600/20",
                children: [
                  /* @__PURE__ */ jsxDEV(MessageCircle, { className: "w-6 h-6" }, void 0, false, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 231,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-semibold", children: tr.generateWhatsApp }, void 0, false, {
                    fileName: "/workspace/src/pages/ParentPortal.tsx",
                    lineNumber: 232,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/workspace/src/pages/ParentPortal.tsx",
                lineNumber: 225,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/ParentPortal.tsx",
          lineNumber: 171,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/ParentPortal.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { language }, void 0, false, {
      fileName: "/workspace/src/pages/ParentPortal.tsx",
      lineNumber: 238,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/workspace/src/pages/ParentPortal.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}
_s(ParentPortal, "7RcJ4zksbEEd3aC5mzNnVWvEyt8=", false, function() {
  return [useNavigate];
});
_c = ParentPortal;
var _c;
$RefreshReg$(_c, "ParentPortal");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/pages/ParentPortal.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/pages/ParentPortal.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTFHSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBNEdBO0FBQUEsSUFFQSx1QkFBQyxVQUFPLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEyQjtBQUFBLE9Bdkk3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBd0lBO0FBRUo7QUFBQ25ELEdBaE51QkYsY0FBWTtBQUFBLFVBQ2pCYixXQUFXO0FBQUE7QUFBQSxLQUROYTtBQUFZLElBQUFzRDtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZU5hdmlnYXRlIiwibW90aW9uIiwiQXJyb3dMZWZ0IiwiTWVzc2FnZUNpcmNsZSIsIlVzZXIiLCJUcmVuZGluZ1VwIiwiQWxlcnRUcmlhbmdsZSIsIkNhbGVuZGFyIiwiQnJhaW4iLCJGbGFtZSIsImdldEdhbWlmaWNhdGlvblN0YXRlIiwidCIsIkZvb3RlciIsIlBhcmVudFBvcnRhbCIsImxhbmd1YWdlIiwiX3MiLCJuYXZpZ2F0ZSIsInRyIiwic3R1ZGVudElkIiwic2V0U3R1ZGVudElkIiwicmVwb3J0Iiwic2V0UmVwb3J0IiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVZpZXdSZXBvcnQiLCJzdGF0ZSIsImF0dGVuZGFuY2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicXVpelJlc3VsdHMiLCJmbGFnZ2VkUXVpenplcyIsImZpbHRlciIsInEiLCJpc0ZsYWdnZWQiLCJsZW5ndGgiLCJjdXJyZW50VXNlciIsInN0dWRlbnROYW1lIiwibmFtZSIsImVyciIsImNoaWxkTm90Rm91bmQiLCJoYW5kbGVXaGF0c0FwcFJlcG9ydCIsIndlYWtUb3BpYyIsImxhdGVzdFF1aXoiLCJtZXNzYWdlIiwieHAiLCJzdHJlYWsiLCJsZXZlbCIsImxlYWd1ZSIsImVuY29kZWRNZXNzYWdlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwid2luZG93Iiwib3BlbiIsImJhY2tUb0hvbWUiLCJwYXJlbnRQb3J0YWwiLCJvcGFjaXR5IiwieSIsImNoaWxkUHJvZ3Jlc3MiLCJkZWxheSIsImVudGVyQ2hpbGRJZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZpZXdSZXBvcnQiLCJzY2FsZSIsImdlbmVyYXRlV2hhdHNBcHAiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQYXJlbnRQb3J0YWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgQXJyb3dMZWZ0LCBNZXNzYWdlQ2lyY2xlLCBVc2VyLCBUcmVuZGluZ1VwLCBBbGVydFRyaWFuZ2xlLCBDYWxlbmRhciwgQnJhaW4sIEZsYW1lIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IGdldEdhbWlmaWNhdGlvblN0YXRlLCBHYW1pZmljYXRpb25TdGF0ZSB9IGZyb20gJy4uL2xpYi9nYW1pZmljYXRpb24nO1xuaW1wb3J0IHsgZ2V0QXR0ZW5kYW5jZSwgQXR0ZW5kYW5jZVJlY29yZCB9IGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBMYW5ndWFnZSwgdCB9IGZyb20gJy4uL2xpYi9pMThuJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5pbnRlcmZhY2UgUGFyZW50UG9ydGFsUHJvcHMge1xuICBsYW5ndWFnZTogTGFuZ3VhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcmVudFBvcnRhbCh7IGxhbmd1YWdlIH06IFBhcmVudFBvcnRhbFByb3BzKSB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgdHIgPSB0KGxhbmd1YWdlKTtcbiAgY29uc3QgW3N0dWRlbnRJZCwgc2V0U3R1ZGVudElkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlcG9ydCwgc2V0UmVwb3J0XSA9IHVzZVN0YXRlPHtcbiAgICBzdGF0ZTogR2FtaWZpY2F0aW9uU3RhdGU7XG4gICAgYXR0ZW5kYW5jZTogQXR0ZW5kYW5jZVJlY29yZFtdO1xuICAgIGZsYWdnZWRRdWl6emVzOiBudW1iZXI7XG4gICAgc3R1ZGVudE5hbWU6IHN0cmluZztcbiAgfSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVWaWV3UmVwb3J0ID0gKCkgPT4ge1xuICAgIHNldEVycm9yKCcnKTtcbiAgICBcbiAgICAvLyBJbiBhIHJlYWwgYXBwLCB3ZSdkIGZldGNoIGZyb20gc2VydmVyXG4gICAgLy8gRm9yIGRlbW8sIHdlIHVzZSBsb2NhbFN0b3JhZ2UgZGF0YVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGdldEdhbWlmaWNhdGlvblN0YXRlKCk7XG4gICAgICBjb25zdCBhdHRlbmRhbmNlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmV1cm9lZHVfYXR0ZW5kYW5jZScpIHx8ICdbXScpO1xuICAgICAgXG4gICAgICAvLyBDaGVjayBmb3IgZmxhZ2dlZCBxdWl6emVzXG4gICAgICBjb25zdCBxdWl6UmVzdWx0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25ldXJvZWR1X3F1aXpSZXN1bHRzJykgfHwgJ1tdJyk7XG4gICAgICBjb25zdCBmbGFnZ2VkUXVpenplcyA9IHF1aXpSZXN1bHRzLmZpbHRlcigocTogYW55KSA9PiBxLmlzRmxhZ2dlZCkubGVuZ3RoO1xuICAgICAgXG4gICAgICAvLyBHZXQgc3R1ZGVudCBuYW1lIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICBjb25zdCBjdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25ldXJvZWR1X2N1cnJlbnRfdXNlcicpIHx8ICd7fScpO1xuICAgICAgY29uc3Qgc3R1ZGVudE5hbWUgPSBjdXJyZW50VXNlci5uYW1lIHx8ICdTdHVkZW50JztcbiAgICAgIFxuICAgICAgc2V0UmVwb3J0KHtcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGF0dGVuZGFuY2UsXG4gICAgICAgIGZsYWdnZWRRdWl6emVzLFxuICAgICAgICBzdHVkZW50TmFtZVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcih0ci5jaGlsZE5vdEZvdW5kKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlV2hhdHNBcHBSZXBvcnQgPSAoKSA9PiB7XG4gICAgaWYgKCFyZXBvcnQpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCB7IHN0YXRlLCBmbGFnZ2VkUXVpenplcywgc3R1ZGVudE5hbWUgfSA9IHJlcG9ydDtcbiAgICBcbiAgICAvLyBGaW5kIHdlYWsgdG9waWMgZnJvbSBxdWl6IHJlc3VsdHNcbiAgICBjb25zdCBxdWl6UmVzdWx0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25ldXJvZWR1X3F1aXpSZXN1bHRzJykgfHwgJ1tdJyk7XG4gICAgbGV0IHdlYWtUb3BpYyA9ICdOL0EnO1xuICAgIGlmIChxdWl6UmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsYXRlc3RRdWl6ID0gcXVpelJlc3VsdHNbcXVpelJlc3VsdHMubGVuZ3RoIC0gMV07XG4gICAgICB3ZWFrVG9waWMgPSBsYXRlc3RRdWl6LndlYWtUb3BpYyB8fCAnTi9BJztcbiAgICB9XG4gICAgXG4gICAgLy8gQ3JlYXRlIFdoYXRzQXBwIG1lc3NhZ2VcbiAgICBjb25zdCBtZXNzYWdlID0gYEFzc2FsYW0tby1BbGFpa3VtLFxuXG5Zb3VyIGNoaWxkICR7c3R1ZGVudE5hbWV9IGhhczpcbuKAoiBYUDogJHtzdGF0ZS54cH1cbuKAoiBTdHJlYWs6ICR7c3RhdGUuc3RyZWFrfSBkYXlzIPCflKVcbuKAoiBMZXZlbDogJHtzdGF0ZS5sZXZlbH0gKCR7c3RhdGUubGVhZ3VlfSlcbuKAoiBXZWFrIFRvcGljOiAke3dlYWtUb3BpY31cbuKAoiBGbGFnZ2VkIFF1aXp6ZXM6ICR7ZmxhZ2dlZFF1aXp6ZXN9XG5cbkZyb20gTmV1cm8tRWR1IE9TYDtcbiAgICBcbiAgICBjb25zdCBlbmNvZGVkTWVzc2FnZSA9IGVuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKTtcbiAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly93YS5tZS8/dGV4dD0ke2VuY29kZWRNZXNzYWdlfWAsICdfYmxhbmsnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLXN1cmZhY2UtOTAwIHRleHQtd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBncmlkLWJnIHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuXG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MCBnbGFzcyBib3JkZXItYiBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHB4LTQgc206cHgtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy8nKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zdXJmYWNlLTIwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFycm93TGVmdCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPnt0ci5iYWNrVG9Ib21lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNiBoLTYgcm91bmRlZC1tZCBiZy1ncmFkaWVudC10by1iciBmcm9tLWJyYW5kLTUwMCB0by1wdXJwbGUtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEJyYWluIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPnt0ci5wYXJlbnRQb3J0YWx9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTZcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBweC00IHNtOnB4LTYgcHktOFwiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiByb3VuZGVkLTJ4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLWJsdWUtNTAwLzIwIHRvLWN5YW4tNTAwLzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNlwiPlxuICAgICAgICAgICAgPFVzZXIgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LWJsdWUtNDAwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTNcIj57dHIucGFyZW50UG9ydGFsfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdXJmYWNlLTIwMFwiPnt0ci5jaGlsZFByb2dyZXNzfTwvcD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIHsvKiBTdHVkZW50IElEIElucHV0ICovfVxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjEgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXN1cmZhY2UtODAwLzMwIHAtNiBtYi02XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItNFwiPnt0ci5lbnRlckNoaWxkSWR9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdHVkZW50SWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3R1ZGVudElkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuLCBzdHVkZW50LTEyM1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweC00IHB5LTMgcm91bmRlZC14bCBiZy1zdXJmYWNlLTkwMC81MCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRleHQtd2hpdGUgcGxhY2Vob2xkZXI6dGV4dC1zdXJmYWNlLTIwMC81MCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJyYW5kLTUwMC81MFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVWaWV3UmVwb3J0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1zbSBmb250LXNlbWlib2xkIGJnLWJyYW5kLTYwMCBob3ZlcjpiZy1icmFuZC01MDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0ci52aWV3UmVwb3J0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1zbSB0ZXh0LXJlZC00MDBcIj57ZXJyb3J9PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICB7LyogUmVwb3J0ICovfVxuICAgICAgICB7cmVwb3J0ICYmIChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIFN0YXRzIEdyaWQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1zdXJmYWNlLTgwMC8zMCBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1icmFuZC00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwXCI+WFA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3JlcG9ydC5zdGF0ZS54cH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1zdXJmYWNlLTgwMC8zMCBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxGbGFtZSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtb3JhbmdlLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDBcIj5TdHJlYWs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3JlcG9ydC5zdGF0ZS5zdHJlYWt9IGRheXM8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1zdXJmYWNlLTgwMC8zMCBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxDYWxlbmRhciBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JlZW4tNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdXJmYWNlLTIwMFwiPnt0ci5hdHRlbmRhbmNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57cmVwb3J0LmF0dGVuZGFuY2UubGVuZ3RofTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLXN1cmZhY2UtODAwLzMwIGJvcmRlciBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXJlZC00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwXCI+e3RyLmZsYWdnZWRRdWl6emVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57cmVwb3J0LmZsYWdnZWRRdWl6emVzfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIExldmVsICYgTGVhZ3VlICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBiZy1zdXJmYWNlLTgwMC8zMFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTRcIj5MZXZlbCAmIExlYWd1ZTwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsXCI+e3JlcG9ydC5zdGF0ZS5sZWFndWUgPT09ICdCcm9uemUnID8gJ/CfpYknIDogcmVwb3J0LnN0YXRlLmxlYWd1ZSA9PT0gJ1NpbHZlcicgPyAn8J+liCcgOiByZXBvcnQuc3RhdGUubGVhZ3VlID09PSAnR29sZCcgPyAn8J+lhycgOiAn8J+Sjid9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e3JlcG9ydC5zdGF0ZS5sZWFndWV9IExlYWd1ZTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zdXJmYWNlLTIwMFwiPkxldmVsIHtyZXBvcnQuc3RhdGUubGV2ZWx9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogV2hhdHNBcHAgUmVwb3J0IEJ1dHRvbiAqL31cbiAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDIgfX1cbiAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTggfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlV2hhdHNBcHBSZXBvcnR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTQgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTYwMCB0by1ncmVlbi03MDAgaG92ZXI6ZnJvbS1ncmVlbi01MDAgaG92ZXI6dG8tZ3JlZW4tNjAwIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0zIHNoYWRvdy1sZyBzaGFkb3ctZ3JlZW4tNjAwLzIwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lc3NhZ2VDaXJjbGUgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPnt0ci5nZW5lcmF0ZVdoYXRzQXBwfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxGb290ZXIgbGFuZ3VhZ2U9e2xhbmd1YWdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvd29ya3NwYWNlL3NyYy9wYWdlcy9QYXJlbnRQb3J0YWwudHN4In0=