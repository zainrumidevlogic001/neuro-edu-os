import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/ProctoredQuiz.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/pages/ProctoredQuiz.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=620eb88c"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useCallback = __vite__cjsImport3_react["useCallback"]; const useRef = __vite__cjsImport3_react["useRef"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=d53b2b6e";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=6e0f127a";
import {
  Brain,
  ArrowLeft,
  Clock,
  AlertTriangle,
  Maximize,
  CheckCircle2,
  XCircle,
  Trophy,
  Shield,
  Eye,
  Flag,
  BookOpen,
  ChevronRight,
  Target,
  Zap,
  Award
} from "/node_modules/.vite/deps/lucide-react.js?v=6a865639";
import { saveQuizResult } from "/src/lib/db.ts";
import { addXP, recordQuizPass, getGamificationState } from "/src/lib/gamification.ts";
import { t } from "/src/lib/i18n.ts";
import Footer from "/src/components/Footer.tsx";
const QUIZ_DATA = {
  title: "React Fundamentals Assessment",
  description: "Test your knowledge of React concepts, hooks, and best practices.",
  questions: [
    {
      id: "q1",
      question: "What is the primary purpose of useEffect in React?",
      options: [
        "To manage component state",
        "To perform side effects after render",
        "To optimize component performance",
        "To handle user events"
      ],
      correctAnswer: "To perform side effects after render",
      topic: "Hooks",
      difficulty: "easy"
    },
    {
      id: "q2",
      question: "Which hook would you use to memoize an expensive calculation?",
      options: ["useEffect", "useState", "useMemo", "useCallback"],
      correctAnswer: "useMemo",
      topic: "Hooks",
      difficulty: "medium"
    },
    {
      id: "q3",
      question: 'What does the "key" prop help React with?',
      options: [
        "Styling components",
        "Identifying elements in lists for efficient updates",
        "Passing data between components",
        "Handling form submissions"
      ],
      correctAnswer: "Identifying elements in lists for efficient updates",
      topic: "Rendering",
      difficulty: "easy"
    },
    {
      id: "q4",
      question: "What is the correct way to update state based on previous state?",
      options: [
        "setState(state + 1)",
        "setState(prev => prev + 1)",
        "state = state + 1",
        "this.state += 1"
      ],
      correctAnswer: "setState(prev => prev + 1)",
      topic: "State Management",
      difficulty: "medium"
    },
    {
      id: "q5",
      question: "Which pattern is best for sharing logic between components?",
      options: [
        "Higher-Order Components only",
        "Render Props only",
        "Custom Hooks",
        "Class inheritance"
      ],
      correctAnswer: "Custom Hooks",
      topic: "Patterns",
      difficulty: "medium"
    },
    {
      id: "q6",
      question: "What triggers a re-render in React?",
      options: [
        "Only state changes",
        "State or prop changes",
        "Only prop changes",
        "Only parent re-renders"
      ],
      correctAnswer: "State or prop changes",
      topic: "Rendering",
      difficulty: "easy"
    },
    {
      id: "q7",
      question: "What is React's Virtual DOM?",
      options: [
        "A browser API",
        "A lightweight copy of the actual DOM in memory",
        "A CSS framework",
        "A server-side rendering technique"
      ],
      correctAnswer: "A lightweight copy of the actual DOM in memory",
      topic: "Core Concepts",
      difficulty: "easy"
    },
    {
      id: "q8",
      question: "When should you use useCallback?",
      options: [
        "For every function in a component",
        "When passing callbacks to optimized child components",
        "Only in class components",
        "Never, it's deprecated"
      ],
      correctAnswer: "When passing callbacks to optimized child components",
      topic: "Performance",
      difficulty: "hard"
    },
    {
      id: "q9",
      question: "What is the purpose of React.memo?",
      options: [
        "To memoize state values",
        "To prevent unnecessary re-renders of functional components",
        "To create memoized effects",
        "To store component history"
      ],
      correctAnswer: "To prevent unnecessary re-renders of functional components",
      topic: "Performance",
      difficulty: "medium"
    },
    {
      id: "q10",
      question: "What is the correct order of useEffect cleanup?",
      options: [
        "Cleanup runs before the effect",
        "Cleanup runs after the component unmounts or before the next effect",
        "Cleanup never runs",
        "Cleanup runs only on mount"
      ],
      correctAnswer: "Cleanup runs after the component unmounts or before the next effect",
      topic: "Hooks",
      difficulty: "hard"
    }
  ]
};
const MAX_TAB_SWITCHES = 3;
const QUIZ_TIME_LIMIT = 600;
export default function ProctoredQuiz({ user, language }) {
  _s();
  const tr = t(language);
  const navigate = useNavigate();
  const [phase, setPhase] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [isFlagged, setIsFlagged] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_LIMIT);
  const [startTime, setStartTime] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [xpAnimation, setXpAnimation] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const timerRef = useRef(null);
  useEffect(() => {
    if (phase !== "quiz") return;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const newCount = tabSwitchCount + 1;
        setTabSwitchCount(newCount);
        setShowWarning(true);
        if (newCount >= MAX_TAB_SWITCHES) {
          setIsFlagged(true);
          handleSubmit(true);
        }
        setTimeout(() => setShowWarning(false), 3e3);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [phase, tabSwitchCount]);
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);
  useEffect(() => {
    if (phase !== "quiz") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);
  const enterFullscreen = useCallback(() => {
    document.documentElement.requestFullscreen?.().catch(() => {
    });
  }, []);
  const startQuiz = () => {
    enterFullscreen();
    setPhase("quiz");
    setStartTime(Date.now());
  };
  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };
  const calculateResults = () => {
    const questions = QUIZ_DATA.questions;
    let correct = 0;
    const topicScores = {};
    const answerDetails = questions.map((q) => {
      const selected = answers[q.id] || "";
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) correct++;
      if (!topicScores[q.topic]) topicScores[q.topic] = { correct: 0, total: 0 };
      topicScores[q.topic].total++;
      if (isCorrect) topicScores[q.topic].correct++;
      return {
        questionId: q.id,
        selectedAnswer: selected,
        correctAnswer: q.correctAnswer,
        isCorrect,
        topic: q.topic
      };
    });
    let weakTopic = "None";
    let lowestScore = Infinity;
    for (const [topic, score] of Object.entries(topicScores)) {
      const ratio = score.correct / score.total;
      if (ratio < lowestScore) {
        lowestScore = ratio;
        weakTopic = topic;
      }
    }
    return {
      score: correct,
      totalQuestions: questions.length,
      tabSwitchCount,
      weakTopic,
      isFlagged: isFlagged || tabSwitchCount >= MAX_TAB_SWITCHES,
      timeTaken: Math.round((Date.now() - startTime) / 1e3),
      answers: answerDetails,
      topicScores
    };
  };
  const handleSubmit = async (autoSubmit = false) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const results2 = calculateResults();
    const passed2 = results2.score >= Math.ceil(results2.totalQuestions * 0.6);
    await saveQuizResult({
      userId: user.id,
      quizId: "react-fundamentals",
      quizTitle: QUIZ_DATA.title,
      score: results2.score,
      totalQuestions: results2.totalQuestions,
      tabSwitchCount: results2.tabSwitchCount,
      weakTopic: results2.weakTopic,
      isFlagged: results2.isFlagged,
      timeTaken: results2.timeTaken,
      answers: results2.answers
    });
    if (passed2 && !autoSubmit) {
      const xpAmount = results2.score * 10;
      const { leveledUp } = addXP(xpAmount);
      recordQuizPass();
      setXpGained(xpAmount);
      setXpAnimation(true);
      import("/node_modules/.vite/deps/canvas-confetti.js?v=098f0496").then(({ default: confetti }) => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      });
      if (leveledUp) {
        setTimeout(() => {
          import("/node_modules/.vite/deps/canvas-confetti.js?v=098f0496").then(({ default: confetti }) => {
            confetti({
              particleCount: 200,
              spread: 120,
              origin: { y: 0.5 }
            });
          });
        }, 1e3);
      }
    }
    setPhase("result");
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  const getResults = () => {
    return calculateResults();
  };
  if (phase === "intro") {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 grid-bg pointer-events-none" }, void 0, false, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 378,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 glass border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-14", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: () => navigate("/student"), className: "flex items-center gap-2 text-surface-200 hover:text-white transition-colors", children: [
          /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 384,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm", children: "Back" }, void 0, false, {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 385,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 383,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-6 h-6 rounded-md bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Brain, { className: "w-3.5 h-3.5 text-white" }, void 0, false, {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 389,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 388,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium", children: "Neuro-Edu OS" }, void 0, false, {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 391,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 387,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", {}, void 0, false, {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 393,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 382,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 381,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 380,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("main", { className: "max-w-2xl mx-auto px-4 sm:px-6 py-12", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "text-center mb-10",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxDEV(Shield, { className: "w-8 h-8 text-red-400" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 405,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 404,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-bold mb-3", children: "Proctored Assessment" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 407,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-surface-200", children: QUIZ_DATA.description }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 408,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 399,
            columnNumber: 11
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
              /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDEV(AlertTriangle, { className: "w-5 h-5 text-amber-400" }, void 0, false, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 418,
                  columnNumber: 15
                }, this),
                "Proctoring Rules"
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 417,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
                { icon: Eye, text: "Tab switches are monitored (max 3 allowed)", color: "text-blue-400" },
                { icon: Maximize, text: "Fullscreen mode will be enforced", color: "text-purple-400" },
                { icon: Clock, text: `Time limit: ${Math.floor(QUIZ_TIME_LIMIT / 60)} minutes`, color: "text-green-400" },
                { icon: Flag, text: "Exceeding tab switch limit auto-submits & flags your attempt", color: "text-red-400" }
              ].map(
                (rule, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-surface-900/50 border border-white/5", children: [
                  /* @__PURE__ */ jsxDEV(rule.icon, { className: `w-5 h-5 ${rule.color} shrink-0` }, void 0, false, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 429,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-surface-200", children: rule.text }, void 0, false, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 430,
                    columnNumber: 19
                  }, this)
                ] }, i, true, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 428,
                  columnNumber: 15
                }, this)
              ) }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 421,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 411,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "rounded-2xl border border-white/10 bg-surface-800/30 p-6 mb-8",
            children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-5 h-5 text-brand-400" }, void 0, false, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 443,
                  columnNumber: 15
                }, this),
                "Quiz Details"
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 442,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-xl bg-surface-900/50", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-brand-300", children: QUIZ_DATA.questions.length }, void 0, false, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 448,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200", children: "Questions" }, void 0, false, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 449,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 447,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-xl bg-surface-900/50", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-green-300", children: [
                    Math.floor(QUIZ_TIME_LIMIT / 60),
                    " min"
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 452,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200", children: "Time Limit" }, void 0, false, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 453,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 451,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-xl bg-surface-900/50", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-amber-300", children: "60%" }, void 0, false, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 456,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200", children: "Pass Mark" }, void 0, false, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 457,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 455,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-xl bg-surface-900/50", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-purple-300", children: "+XP" }, void 0, false, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 460,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200", children: "Reward" }, void 0, false, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 461,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 459,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 446,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 436,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            children: [
              !isFullscreen && /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: enterFullscreen,
                  className: "w-full mb-4 px-4 py-3 text-sm font-medium border border-white/10 rounded-xl text-surface-200 hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxDEV(Maximize, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                      lineNumber: 476,
                      columnNumber: 17
                    }, this),
                    "Enter Fullscreen First"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 472,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: startQuiz,
                  className: "w-full px-8 py-4 text-sm font-semibold bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 rounded-xl transition-all hover:shadow-xl hover:shadow-brand-600/20 flex items-center justify-center gap-2 group",
                  children: [
                    /* @__PURE__ */ jsxDEV(Target, { className: "w-5 h-5" }, void 0, false, {
                      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                      lineNumber: 484,
                      columnNumber: 15
                    }, this),
                    "Begin Assessment",
                    /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform" }, void 0, false, {
                      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                      lineNumber: 486,
                      columnNumber: 15
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 480,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 466,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 398,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
      lineNumber: 377,
      columnNumber: 7
    }, this);
  }
  if (phase === "quiz") {
    const question = QUIZ_DATA.questions[currentQuestion];
    const progress = (currentQuestion + 1) / QUIZ_DATA.questions.length * 100;
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white", children: [
      /* @__PURE__ */ jsxDEV(AnimatePresence, { children: showWarning && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { y: -100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: -100, opacity: 0 },
          className: "fixed top-16 left-0 right-0 z-50 mx-4 sm:mx-auto sm:max-w-lg",
          children: /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-red-500/20 border border-red-500/40 backdrop-blur-sm flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(AlertTriangle, { className: "w-5 h-5 text-red-400 shrink-0" }, void 0, false, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 511,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-red-300", children: "Tab Switch Detected!" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 513,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-red-300/70", children: [
                "Warning ",
                tabSwitchCount,
                "/",
                MAX_TAB_SWITCHES,
                " — ",
                MAX_TAB_SWITCHES - tabSwitchCount,
                " remaining"
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 514,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 512,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 510,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 504,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 502,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(AnimatePresence, { children: xpAnimation && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0, opacity: 0 },
          className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]",
          children: /* @__PURE__ */ jsxDEV("div", { className: "p-6 rounded-2xl bg-gradient-to-br from-brand-600 to-purple-600 shadow-2xl shadow-brand-600/30", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-3xl font-bold text-white text-center", children: [
              "+",
              xpGained,
              " XP!"
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 531,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-white/70 text-center mt-1", children: "Quiz Passed!" }, void 0, false, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 532,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 530,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 524,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 522,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-40 glass border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-14", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxDEV("div", { className: `flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${tabSwitchCount >= MAX_TAB_SWITCHES - 1 ? "bg-red-500/20 text-red-300 border border-red-500/30" : tabSwitchCount > 0 ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : "bg-green-500/20 text-green-300 border border-green-500/30"}`, children: [
          /* @__PURE__ */ jsxDEV(Eye, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 550,
            columnNumber: 19
          }, this),
          "Tab Switch: ",
          tabSwitchCount,
          "/",
          MAX_TAB_SWITCHES
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 543,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 542,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: `flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-mono font-medium ${timeLeft < 60 ? "bg-red-500/20 text-red-300 animate-pulse" : "bg-surface-800/50 text-white"}`, children: [
          /* @__PURE__ */ jsxDEV(Clock, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 557,
            columnNumber: 17
          }, this),
          formatTime(timeLeft)
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 554,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 541,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 540,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 539,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "h-1 bg-surface-800", children: /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          className: "h-full bg-gradient-to-r from-brand-500 to-purple-500",
          initial: { width: 0 },
          animate: { width: `${progress}%` },
          transition: { duration: 0.3 }
        },
        void 0,
        false,
        {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 566,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 565,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("main", { className: "max-w-2xl mx-auto px-4 sm:px-6 py-8", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "px-2.5 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20", children: [
                  "Q",
                  currentQuestion + 1,
                  "/",
                  QUIZ_DATA.questions.length
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 583,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: `px-2.5 py-1 text-xs font-medium rounded-full border ${question.difficulty === "easy" ? "bg-green-500/10 text-green-300 border-green-500/20" : question.difficulty === "medium" ? "bg-amber-500/10 text-amber-300 border-amber-500/20" : "bg-red-500/10 text-red-300 border-red-500/20"}`, children: question.difficulty }, void 0, false, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 586,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "px-2.5 py-1 text-xs font-medium bg-surface-800/50 text-surface-200 rounded-full border border-white/5", children: question.topic }, void 0, false, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 593,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 582,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { className: "text-xl sm:text-2xl font-semibold mb-8 leading-relaxed", children: question.question }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 598,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: question.options.map((option, idx) => {
                const isSelected = answers[question.id] === option;
                return /* @__PURE__ */ jsxDEV(
                  motion.button,
                  {
                    whileHover: { scale: 1.01 },
                    whileTap: { scale: 0.99 },
                    onClick: () => handleAnswer(question.id, option),
                    className: `w-full text-left p-4 rounded-xl border transition-all ${isSelected ? "border-brand-500/50 bg-brand-500/10 text-white" : "border-white/10 bg-surface-800/30 text-surface-200 hover:border-white/20 hover:bg-surface-800/50"}`,
                    children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: `w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-medium ${isSelected ? "bg-brand-500 text-white" : "bg-surface-900/50 text-surface-200"}`, children: String.fromCharCode(65 + idx) }, void 0, false, {
                        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                        lineNumber: 618,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-sm sm:text-base", children: option }, void 0, false, {
                        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                        lineNumber: 623,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                      lineNumber: 617,
                      columnNumber: 21
                    }, this)
                  },
                  idx,
                  false,
                  {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 606,
                    columnNumber: 19
                  },
                  this
                );
              }) }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 602,
                columnNumber: 13
              }, this)
            ]
          },
          currentQuestion,
          true,
          {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 576,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mt-10 pt-6 border-t border-white/5", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setCurrentQuestion(Math.max(0, currentQuestion - 1)),
              disabled: currentQuestion === 0,
              className: "px-4 py-2.5 text-sm font-medium border border-white/10 rounded-xl text-surface-200 hover:text-white hover:border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed",
              children: "Previous"
            },
            void 0,
            false,
            {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 633,
              columnNumber: 13
            },
            this
          ),
          currentQuestion === QUIZ_DATA.questions.length - 1 ? /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => handleSubmit(false),
              className: "px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 rounded-xl transition-all flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 646,
                  columnNumber: 17
                }, this),
                "Submit Quiz"
              ]
            },
            void 0,
            true,
            {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 642,
              columnNumber: 13
            },
            this
          ) : /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setCurrentQuestion(Math.min(QUIZ_DATA.questions.length - 1, currentQuestion + 1)),
              className: "px-4 py-2.5 text-sm font-medium bg-brand-600 hover:bg-brand-500 rounded-xl transition-all flex items-center gap-2",
              children: [
                "Next",
                /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 655,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 650,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 632,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-1.5 mt-6 flex-wrap", children: QUIZ_DATA.questions.map(
          (q, idx) => /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setCurrentQuestion(idx),
              className: `w-7 h-7 rounded-full text-[10px] font-medium transition-all ${idx === currentQuestion ? "bg-brand-500 text-white scale-110" : answers[q.id] ? "bg-green-500/20 text-green-300 border border-green-500/30" : "bg-surface-800/50 text-surface-200 border border-white/5"}`,
              children: idx + 1
            },
            q.id,
            false,
            {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 663,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, false, {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 661,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 575,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
      lineNumber: 500,
      columnNumber: 7
    }, this);
  }
  const results = getResults();
  const passed = results.score >= Math.ceil(results.totalQuestions * 0.6);
  const percentage = Math.round(results.score / results.totalQuestions * 100);
  const state = getGamificationState();
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 grid-bg pointer-events-none" }, void 0, false, {
      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
      lineNumber: 691,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 glass border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-14", children: [
      /* @__PURE__ */ jsxDEV("button", { onClick: () => navigate("/student"), className: "flex items-center gap-2 text-surface-200 hover:text-white transition-colors", children: [
        /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 697,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm", children: "Dashboard" }, void 0, false, {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 698,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 696,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium", children: "Quiz Results" }, void 0, false, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 700,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", {}, void 0, false, {
        fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
        lineNumber: 701,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
      lineNumber: 695,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
      lineNumber: 694,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
      lineNumber: 693,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-2xl mx-auto px-4 sm:px-6 py-8", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          className: "text-center mb-8",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: `w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${passed ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20" : "bg-gradient-to-br from-red-500/20 to-orange-500/20"}`, children: passed ? /* @__PURE__ */ jsxDEV(Trophy, { className: "w-10 h-10 text-green-400" }, void 0, false, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 717,
              columnNumber: 13
            }, this) : /* @__PURE__ */ jsxDEV(XCircle, { className: "w-10 h-10 text-red-400" }, void 0, false, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 719,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 713,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-bold mb-2", children: passed ? "Quiz Passed!" : "Quiz Failed" }, void 0, false, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 722,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-surface-200", children: passed ? "Great job! Keep up the momentum." : "Don't worry, practice makes perfect." }, void 0, false, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 725,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 708,
          columnNumber: 9
        },
        this
      ),
      results.isFlagged && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          className: "mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3",
          children: [
            /* @__PURE__ */ jsxDEV(Flag, { className: "w-5 h-5 text-red-400 shrink-0" }, void 0, false, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 737,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-red-300", children: "Assessment Flagged" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 739,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-red-300/70", children: "Multiple tab switches detected. This attempt has been flagged for review." }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 740,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 738,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 732,
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
          children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-center p-3 rounded-xl bg-surface-900/50", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-brand-300", children: [
                percentage,
                "%"
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 754,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-1", children: "Score" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 755,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 753,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-center p-3 rounded-xl bg-surface-900/50", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-green-300", children: [
                results.score,
                "/",
                results.totalQuestions
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 758,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-1", children: "Correct" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 759,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 757,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-center p-3 rounded-xl bg-surface-900/50", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-amber-300", children: formatTime(results.timeTaken) }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 762,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-1", children: "Time Taken" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 763,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 761,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-center p-3 rounded-xl bg-surface-900/50", children: [
              /* @__PURE__ */ jsxDEV("p", { className: `text-2xl font-bold ${results.tabSwitchCount > 0 ? "text-red-300" : "text-green-300"}`, children: results.tabSwitchCount }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 766,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 mt-1", children: "Tab Switches" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 769,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 765,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
            lineNumber: 752,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 746,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          className: "rounded-2xl border border-white/10 bg-surface-800/30 p-6 mb-6",
          children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Target, { className: "w-5 h-5 text-brand-400" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 782,
                columnNumber: 13
              }, this),
              "Performance Analysis"
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 781,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/20 mb-4", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200 mb-1", children: "Your weak topic is" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 787,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xl font-bold gradient-text", children: results.weakTopic }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 788,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200/70 mt-2", children: "Focus more on this area to improve your overall score." }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 789,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 786,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: Object.entries(results.topicScores).map(([topic, score]) => {
              const pct = Math.round(score.correct / score.total * 100);
              return /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-1", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-surface-200", children: topic }, void 0, false, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 801,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: `text-xs font-medium ${pct >= 80 ? "text-green-300" : pct >= 50 ? "text-amber-300" : "text-red-300"}`, children: [
                    score.correct,
                    "/",
                    score.total,
                    " (",
                    pct,
                    "%)"
                  ] }, void 0, true, {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 802,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 800,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-full h-2 rounded-full bg-surface-900/50 overflow-hidden", children: /* @__PURE__ */ jsxDEV(
                  motion.div,
                  {
                    initial: { width: 0 },
                    animate: { width: `${pct}%` },
                    transition: { duration: 0.8, delay: 0.3 },
                    className: `h-full rounded-full ${pct >= 80 ? "bg-gradient-to-r from-green-500 to-emerald-500" : pct >= 50 ? "bg-gradient-to-r from-amber-500 to-yellow-500" : "bg-gradient-to-r from-red-500 to-orange-500"}`
                  },
                  void 0,
                  false,
                  {
                    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                    lineNumber: 809,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 808,
                  columnNumber: 19
                }, this)
              ] }, topic, true, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 799,
                columnNumber: 17
              }, this);
            }) }, void 0, false, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 795,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 775,
          columnNumber: 9
        },
        this
      ),
      passed && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "rounded-2xl border border-white/10 bg-surface-800/30 p-6 mb-6",
          children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Zap, { className: "w-5 h-5 text-amber-400" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 835,
                columnNumber: 15
              }, this),
              "Rewards Earned"
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 834,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/20", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Award, { className: "w-6 h-6 text-white" }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 840,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 839,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-bold text-white", children: [
                  "+",
                  results.score * 10,
                  " XP"
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 843,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200", children: [
                  "Total XP: ",
                  state.xp,
                  " • Level ",
                  state.level,
                  " • ",
                  state.league,
                  " League"
                ] }, void 0, true, {
                  fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                  lineNumber: 844,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 842,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
              lineNumber: 838,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 828,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4 },
          className: "flex gap-3",
          children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => navigate("/student"),
                className: "flex-1 px-4 py-3 text-sm font-medium border border-white/10 rounded-xl text-surface-200 hover:text-white hover:border-white/20 transition-all",
                children: "Back to Dashboard"
              },
              void 0,
              false,
              {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 857,
                columnNumber: 11
              },
              this
            ),
            !passed && /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => {
                  setPhase("intro");
                  setCurrentQuestion(0);
                  setAnswers({});
                  setTabSwitchCount(0);
                  setIsFlagged(false);
                  setTimeLeft(QUIZ_TIME_LIMIT);
                },
                className: "flex-1 px-4 py-3 text-sm font-semibold bg-brand-600 hover:bg-brand-500 rounded-xl transition-all",
                children: "Retry Quiz"
              },
              void 0,
              false,
              {
                fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
                lineNumber: 864,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
          lineNumber: 851,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
      lineNumber: 706,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { language }, void 0, false, {
      fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
      lineNumber: 881,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/workspace/src/pages/ProctoredQuiz.tsx",
    lineNumber: 690,
    columnNumber: 5
  }, this);
}
_s(ProctoredQuiz, "LQndlEwYbVHMnl/62GR8lHBLDqY=", false, function() {
  return [useNavigate];
});
_c = ProctoredQuiz;
var _c;
$RefreshReg$(_c, "ProctoredQuiz");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/pages/ProctoredQuiz.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/pages/ProctoredQuiz.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBc1dROzs7Ozs7Ozs7Ozs7Ozs7OztBQXRXUixTQUFTQSxVQUFVQyxXQUFXQyxhQUFhQyxjQUFjO0FBQ3pELFNBQVNDLG1CQUFtQjtBQUM1QixTQUFTQyxRQUFRQyx1QkFBdUI7QUFDeEM7QUFBQSxFQUNFQztBQUFBQSxFQUFPQztBQUFBQSxFQUFXQztBQUFBQSxFQUFPQztBQUFBQSxFQUFlQztBQUFBQSxFQUFVQztBQUFBQSxFQUNsREM7QUFBQUEsRUFBU0M7QUFBQUEsRUFBUUM7QUFBQUEsRUFBUUM7QUFBQUEsRUFBS0M7QUFBQUEsRUFBTUM7QUFBQUEsRUFBVUM7QUFBQUEsRUFDOUNDO0FBQUFBLEVBQVFDO0FBQUFBLEVBQUtDO0FBQUFBLE9BQ1I7QUFFUCxTQUFTQyxzQkFBc0I7QUFDL0IsU0FBU0MsT0FBT0MsZ0JBQWdCQyw0QkFBNEI7QUFDNUQsU0FBbUJDLFNBQVM7QUFDNUIsT0FBT0MsWUFBWTtBQWlCbkIsTUFBTUMsWUFBMkU7QUFBQSxFQUMvRUMsT0FBTztBQUFBLEVBQ1BDLGFBQWE7QUFBQSxFQUNiQyxXQUFXO0FBQUEsSUFDVDtBQUFBLE1BQ0VDLElBQUk7QUFBQSxNQUNKQyxVQUFVO0FBQUEsTUFDVkMsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUF1QjtBQUFBLE1BRXpCQyxlQUFlO0FBQUEsTUFDZkMsT0FBTztBQUFBLE1BQ1BDLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQTtBQUFBLE1BQ0VMLElBQUk7QUFBQSxNQUNKQyxVQUFVO0FBQUEsTUFDVkMsU0FBUyxDQUFDLGFBQWEsWUFBWSxXQUFXLGFBQWE7QUFBQSxNQUMzREMsZUFBZTtBQUFBLE1BQ2ZDLE9BQU87QUFBQSxNQUNQQyxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxNQUNFTCxJQUFJO0FBQUEsTUFDSkMsVUFBVTtBQUFBLE1BQ1ZDLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFBMkI7QUFBQSxNQUU3QkMsZUFBZTtBQUFBLE1BQ2ZDLE9BQU87QUFBQSxNQUNQQyxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxNQUNFTCxJQUFJO0FBQUEsTUFDSkMsVUFBVTtBQUFBLE1BQ1ZDLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFBaUI7QUFBQSxNQUVuQkMsZUFBZTtBQUFBLE1BQ2ZDLE9BQU87QUFBQSxNQUNQQyxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxNQUNFTCxJQUFJO0FBQUEsTUFDSkMsVUFBVTtBQUFBLE1BQ1ZDLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFBbUI7QUFBQSxNQUVyQkMsZUFBZTtBQUFBLE1BQ2ZDLE9BQU87QUFBQSxNQUNQQyxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxNQUNFTCxJQUFJO0FBQUEsTUFDSkMsVUFBVTtBQUFBLE1BQ1ZDLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFBd0I7QUFBQSxNQUUxQkMsZUFBZTtBQUFBLE1BQ2ZDLE9BQU87QUFBQSxNQUNQQyxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxNQUNFTCxJQUFJO0FBQUEsTUFDSkMsVUFBVTtBQUFBLE1BQ1ZDLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFBbUM7QUFBQSxNQUVyQ0MsZUFBZTtBQUFBLE1BQ2ZDLE9BQU87QUFBQSxNQUNQQyxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxNQUNFTCxJQUFJO0FBQUEsTUFDSkMsVUFBVTtBQUFBLE1BQ1ZDLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFBeUI7QUFBQSxNQUUzQkMsZUFBZTtBQUFBLE1BQ2ZDLE9BQU87QUFBQSxNQUNQQyxZQUFZO0FB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QjtBQUFBLGdCQUNBLFdBQVU7QUFBQSxnQkFBa0c7QUFBQTtBQUFBLGNBVDlHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVlBO0FBQUE7QUFBQTtBQUFBLFFBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTJCQTtBQUFBLFNBNUtGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0E2S0E7QUFBQSxJQUVBLHVCQUFDLFVBQU8sWUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTJCO0FBQUEsT0EvTDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FnTUE7QUFFSjtBQUFDSSxHQTVyQnVCSCxlQUFhO0FBQUEsVUFFbEJyQyxXQUFXO0FBQUE7QUFBQSxLQUZOcUM7QUFBYSxJQUFBNEg7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZU5hdmlnYXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQnJhaW4iLCJBcnJvd0xlZnQiLCJDbG9jayIsIkFsZXJ0VHJpYW5nbGUiLCJNYXhpbWl6ZSIsIkNoZWNrQ2lyY2xlMiIsIlhDaXJjbGUiLCJUcm9waHkiLCJTaGllbGQiLCJFeWUiLCJGbGFnIiwiQm9va09wZW4iLCJDaGV2cm9uUmlnaHQiLCJUYXJnZXQiLCJaYXAiLCJBd2FyZCIsInNhdmVRdWl6UmVzdWx0IiwiYWRkWFAiLCJyZWNvcmRRdWl6UGFzcyIsImdldEdhbWlmaWNhdGlvblN0YXRlIiwidCIsIkZvb3RlciIsIlFVSVpfREFUQSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJxdWVzdGlvbnMiLCJpZCIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJ0b3BpYyIsImRpZmZpY3VsdHkiLCJNQVhfVEFCX1NXSVRDSEVTIiwiUVVJWl9USU1FX0xJTUlUIiwiUHJvY3RvcmVkUXVpeiIsInVzZXIiLCJsYW5ndWFnZSIsIl9zIiwidHIiLCJuYXZpZ2F0ZSIsInBoYXNlIiwic2V0UGhhc2UiLCJjdXJyZW50UXVlc3Rpb24iLCJzZXRDdXJyZW50UXVlc3Rpb24iLCJhbnN3ZXJzIiwic2V0QW5zd2VycyIsInRhYlN3aXRjaENvdW50Iiwic2V0VGFiU3dpdGNoQ291bnQiLCJpc0ZsYWdnZWQiLCJzZXRJc0ZsYWdnZWQiLCJpc0Z1bGxzY3JlZW4iLCJzZXRJc0Z1bGxzY3JlZW4iLCJ0aW1lTGVmdCIsInNldFRpbWVMZWZ0Iiwic3RhcnRUaW1lIiwic2V0U3RhcnRUaW1lIiwic2hvd1dhcm5pbmciLCJzZXRTaG93V2FybmluZyIsInhwQW5pbWF0aW9uIiwic2V0WHBBbmltYXRpb24iLCJ4cEdhaW5lZCIsInNldFhwR2FpbmVkIiwidGltZXJSZWYiLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiZG9jdW1lbnQiLCJoaWRkZW4iLCJuZXdDb3VudCIsImhhbmRsZVN1Ym1pdCIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUZ1bGxzY3JlZW5DaGFuZ2UiLCJmdWxsc2NyZWVuRWxlbWVudCIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiZW50ZXJGdWxsc2NyZWVuIiwiZG9jdW1lbnRFbGVtZW50IiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJjYXRjaCIsInN0YXJ0UXVpeiIsIkRhdGUiLCJub3ciLCJoYW5kbGVBbnN3ZXIiLCJxdWVzdGlvbklkIiwiYW5zd2VyIiwiY2FsY3VsYXRlUmVzdWx0cyIsImNvcnJlY3QiLCJ0b3BpY1Njb3JlcyIsImFuc3dlckRldGFpbHMiLCJtYXAiLCJxIiwic2VsZWN0ZWQiLCJpc0NvcnJlY3QiLCJ0b3RhbCIsInNlbGVjdGVkQW5zd2VyIiwid2Vha1RvcGljIiwibG93ZXN0U2NvcmUiLCJJbmZpbml0eSIsInNjb3JlIiwiT2JqZWN0IiwiZW50cmllcyIsInJhdGlvIiwidG90YWxRdWVzdGlvbnMiLCJsZW5ndGgiLCJ0aW1lVGFrZW4iLCJNYXRoIiwicm91bmQiLCJhdXRvU3VibWl0IiwicmVzdWx0cyIsInBhc3NlZCIsImNlaWwiLCJ1c2VySWQiLCJxdWl6SWQiLCJxdWl6VGl0bGUiLCJ4cEFtb3VudCIsImxldmVsZWRVcCIsInRoZW4iLCJkZWZhdWx0IiwiY29uZmV0dGkiLCJwYXJ0aWNsZUNvdW50Iiwic3ByZWFkIiwib3JpZ2luIiwieSIsImZvcm1hdFRpbWUiLCJzZWNvbmRzIiwibWlucyIsImZsb29yIiwic2VjcyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRSZXN1bHRzIiwib3BhY2l0eSIsImRlbGF5IiwiaWNvbiIsInRleHQiLCJjb2xvciIsInJ1bGUiLCJpIiwicHJvZ3Jlc3MiLCJzY2FsZSIsIndpZHRoIiwiZHVyYXRpb24iLCJ4Iiwib3B0aW9uIiwiaWR4IiwiaXNTZWxlY3RlZCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1heCIsIm1pbiIsInBlcmNlbnRhZ2UiLCJzdGF0ZSIsInBjdCIsInhwIiwibGV2ZWwiLCJsZWFndWUiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQcm9jdG9yZWRRdWl6LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBcbiAgQnJhaW4sIEFycm93TGVmdCwgQ2xvY2ssIEFsZXJ0VHJpYW5nbGUsIE1heGltaXplLCBDaGVja0NpcmNsZTIsXG4gIFhDaXJjbGUsIFRyb3BoeSwgU2hpZWxkLCBFeWUsIEZsYWcsIEJvb2tPcGVuLCBDaGV2cm9uUmlnaHQsXG4gIFRhcmdldCwgWmFwLCBBd2FyZFxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2xpYi9zdG9yZSc7XG5pbXBvcnQgeyBzYXZlUXVpelJlc3VsdCB9IGZyb20gJy4uL2xpYi9kYic7XG5pbXBvcnQgeyBhZGRYUCwgcmVjb3JkUXVpelBhc3MsIGdldEdhbWlmaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vbGliL2dhbWlmaWNhdGlvbic7XG5pbXBvcnQgeyBMYW5ndWFnZSwgdCB9IGZyb20gJy4uL2xpYi9pMThuJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5pbnRlcmZhY2UgUHJvY3RvcmVkUXVpelByb3BzIHtcbiAgdXNlcjogVXNlcjtcbiAgbGFuZ3VhZ2U6IExhbmd1YWdlO1xufVxuXG4vLyBRdWl6IGRhdGFcbmludGVyZmFjZSBRdWVzdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIG9wdGlvbnM6IHN0cmluZ1tdO1xuICBjb3JyZWN0QW5zd2VyOiBzdHJpbmc7XG4gIHRvcGljOiBzdHJpbmc7XG4gIGRpZmZpY3VsdHk6ICdlYXN5JyB8ICdtZWRpdW0nIHwgJ2hhcmQnO1xufVxuXG5jb25zdCBRVUlaX0RBVEE6IHsgdGl0bGU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZzsgcXVlc3Rpb25zOiBRdWVzdGlvbltdIH0gPSB7XG4gIHRpdGxlOiAnUmVhY3QgRnVuZGFtZW50YWxzIEFzc2Vzc21lbnQnLFxuICBkZXNjcmlwdGlvbjogJ1Rlc3QgeW91ciBrbm93bGVkZ2Ugb2YgUmVhY3QgY29uY2VwdHMsIGhvb2tzLCBhbmQgYmVzdCBwcmFjdGljZXMuJyxcbiAgcXVlc3Rpb25zOiBbXG4gICAge1xuICAgICAgaWQ6ICdxMScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIHByaW1hcnkgcHVycG9zZSBvZiB1c2VFZmZlY3QgaW4gUmVhY3Q/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1RvIG1hbmFnZSBjb21wb25lbnQgc3RhdGUnLFxuICAgICAgICAnVG8gcGVyZm9ybSBzaWRlIGVmZmVjdHMgYWZ0ZXIgcmVuZGVyJyxcbiAgICAgICAgJ1RvIG9wdGltaXplIGNvbXBvbmVudCBwZXJmb3JtYW5jZScsXG4gICAgICAgICdUbyBoYW5kbGUgdXNlciBldmVudHMnXG4gICAgICBdLFxuICAgICAgY29ycmVjdEFuc3dlcjogJ1RvIHBlcmZvcm0gc2lkZSBlZmZlY3RzIGFmdGVyIHJlbmRlcicsXG4gICAgICB0b3BpYzogJ0hvb2tzJyxcbiAgICAgIGRpZmZpY3VsdHk6ICdlYXN5J1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdxMicsXG4gICAgICBxdWVzdGlvbjogJ1doaWNoIGhvb2sgd291bGQgeW91IHVzZSB0byBtZW1vaXplIGFuIGV4cGVuc2l2ZSBjYWxjdWxhdGlvbj8nLFxuICAgICAgb3B0aW9uczogWyd1c2VFZmZlY3QnLCAndXNlU3RhdGUnLCAndXNlTWVtbycsICd1c2VDYWxsYmFjayddLFxuICAgICAgY29ycmVjdEFuc3dlcjogJ3VzZU1lbW8nLFxuICAgICAgdG9waWM6ICdIb29rcycsXG4gICAgICBkaWZmaWN1bHR5OiAnbWVkaXVtJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdxMycsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgZG9lcyB0aGUgXCJrZXlcIiBwcm9wIGhlbHAgUmVhY3Qgd2l0aD8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnU3R5bGluZyBjb21wb25lbnRzJyxcbiAgICAgICAgJ0lkZW50aWZ5aW5nIGVsZW1lbnRzIGluIGxpc3RzIGZvciBlZmZpY2llbnQgdXBkYXRlcycsXG4gICAgICAgICdQYXNzaW5nIGRhdGEgYmV0d2VlbiBjb21wb25lbnRzJyxcbiAgICAgICAgJ0hhbmRsaW5nIGZvcm0gc3VibWlzc2lvbnMnXG4gICAgICBdLFxuICAgICAgY29ycmVjdEFuc3dlcjogJ0lkZW50aWZ5aW5nIGVsZW1lbnRzIGluIGxpc3RzIGZvciBlZmZpY2llbnQgdXBkYXRlcycsXG4gICAgICB0b3BpYzogJ1JlbmRlcmluZycsXG4gICAgICBkaWZmaWN1bHR5OiAnZWFzeSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncTQnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBjb3JyZWN0IHdheSB0byB1cGRhdGUgc3RhdGUgYmFzZWQgb24gcHJldmlvdXMgc3RhdGU/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ3NldFN0YXRlKHN0YXRlICsgMSknLFxuICAgICAgICAnc2V0U3RhdGUocHJldiA9PiBwcmV2ICsgMSknLFxuICAgICAgICAnc3RhdGUgPSBzdGF0ZSArIDEnLFxuICAgICAgICAndGhpcy5zdGF0ZSArPSAxJ1xuICAgICAgXSxcbiAgICAgIGNvcnJlY3RBbnN3ZXI6ICdzZXRTdGF0ZShwcmV2ID0+IHByZXYgKyAxKScsXG4gICAgICB0b3BpYzogJ1N0YXRlIE1hbmFnZW1lbnQnLFxuICAgICAgZGlmZmljdWx0eTogJ21lZGl1bSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncTUnLFxuICAgICAgcXVlc3Rpb246ICdXaGljaCBwYXR0ZXJuIGlzIGJlc3QgZm9yIHNoYXJpbmcgbG9naWMgYmV0d2VlbiBjb21wb25lbnRzPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdIaWdoZXItT3JkZXIgQ29tcG9uZW50cyBvbmx5JyxcbiAgICAgICAgJ1JlbmRlciBQcm9wcyBvbmx5JyxcbiAgICAgICAgJ0N1c3RvbSBIb29rcycsXG4gICAgICAgICdDbGFzcyBpbmhlcml0YW5jZSdcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0QW5zd2VyOiAnQ3VzdG9tIEhvb2tzJyxcbiAgICAgIHRvcGljOiAnUGF0dGVybnMnLFxuICAgICAgZGlmZmljdWx0eTogJ21lZGl1bSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncTYnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IHRyaWdnZXJzIGEgcmUtcmVuZGVyIGluIFJlYWN0PycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdPbmx5IHN0YXRlIGNoYW5nZXMnLFxuICAgICAgICAnU3RhdGUgb3IgcHJvcCBjaGFuZ2VzJyxcbiAgICAgICAgJ09ubHkgcHJvcCBjaGFuZ2VzJyxcbiAgICAgICAgJ09ubHkgcGFyZW50IHJlLXJlbmRlcnMnXG4gICAgICBdLFxuICAgICAgY29ycmVjdEFuc3dlcjogJ1N0YXRlIG9yIHByb3AgY2hhbmdlcycsXG4gICAgICB0b3BpYzogJ1JlbmRlcmluZycsXG4gICAgICBkaWZmaWN1bHR5OiAnZWFzeSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncTcnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIFJlYWN0XFwncyBWaXJ0dWFsIERPTT8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnQSBicm93c2VyIEFQSScsXG4gICAgICAgICdBIGxpZ2h0d2VpZ2h0IGNvcHkgb2YgdGhlIGFjdHVhbCBET00gaW4gbWVtb3J5JyxcbiAgICAgICAgJ0EgQ1NTIGZyYW1ld29yaycsXG4gICAgICAgICdBIHNlcnZlci1zaWRlIHJlbmRlcmluZyB0ZWNobmlxdWUnXG4gICAgICBdLFxuICAgICAgY29ycmVjdEFuc3dlcjogJ0EgbGlnaHR3ZWlnaHQgY29weSBvZiB0aGUgYWN0dWFsIERPTSBpbiBtZW1vcnknLFxuICAgICAgdG9waWM6ICdDb3JlIENvbmNlcHRzJyxcbiAgICAgIGRpZmZpY3VsdHk6ICdlYXN5J1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdxOCcsXG4gICAgICBxdWVzdGlvbjogJ1doZW4gc2hvdWxkIHlvdSB1c2UgdXNlQ2FsbGJhY2s/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0ZvciBldmVyeSBmdW5jdGlvbiBpbiBhIGNvbXBvbmVudCcsXG4gICAgICAgICdXaGVuIHBhc3NpbmcgY2FsbGJhY2tzIHRvIG9wdGltaXplZCBjaGlsZCBjb21wb25lbnRzJyxcbiAgICAgICAgJ09ubHkgaW4gY2xhc3MgY29tcG9uZW50cycsXG4gICAgICAgICdOZXZlciwgaXRcXCdzIGRlcHJlY2F0ZWQnXG4gICAgICBdLFxuICAgICAgY29ycmVjdEFuc3dlcjogJ1doZW4gcGFzc2luZyBjYWxsYmFja3MgdG8gb3B0aW1pemVkIGNoaWxkIGNvbXBvbmVudHMnLFxuICAgICAgdG9waWM6ICdQZXJmb3JtYW5jZScsXG4gICAgICBkaWZmaWN1bHR5OiAnaGFyZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncTknLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBwdXJwb3NlIG9mIFJlYWN0Lm1lbW8/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1RvIG1lbW9pemUgc3RhdGUgdmFsdWVzJyxcbiAgICAgICAgJ1RvIHByZXZlbnQgdW5uZWNlc3NhcnkgcmUtcmVuZGVycyBvZiBmdW5jdGlvbmFsIGNvbXBvbmVudHMnLFxuICAgICAgICAnVG8gY3JlYXRlIG1lbW9pemVkIGVmZmVjdHMnLFxuICAgICAgICAnVG8gc3RvcmUgY29tcG9uZW50IGhpc3RvcnknXG4gICAgICBdLFxuICAgICAgY29ycmVjdEFuc3dlcjogJ1RvIHByZXZlbnQgdW5uZWNlc3NhcnkgcmUtcmVuZGVycyBvZiBmdW5jdGlvbmFsIGNvbXBvbmVudHMnLFxuICAgICAgdG9waWM6ICdQZXJmb3JtYW5jZScsXG4gICAgICBkaWZmaWN1bHR5OiAnbWVkaXVtJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdxMTAnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBjb3JyZWN0IG9yZGVyIG9mIHVzZUVmZmVjdCBjbGVhbnVwPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdDbGVhbnVwIHJ1bnMgYmVmb3JlIHRoZSBlZmZlY3QnLFxuICAgICAgICAnQ2xlYW51cCBydW5zIGFmdGVyIHRoZSBjb21wb25lbnQgdW5tb3VudHMgb3IgYmVmb3JlIHRoZSBuZXh0IGVmZmVjdCcsXG4gICAgICAgICdDbGVhbnVwIG5ldmVyIHJ1bnMnLFxuICAgICAgICAnQ2xlYW51cCBydW5zIG9ubHkgb24gbW91bnQnXG4gICAgICBdLFxuICAgICAgY29ycmVjdEFuc3dlcjogJ0NsZWFudXAgcnVucyBhZnRlciB0aGUgY29tcG9uZW50IHVubW91bnRzIG9yIGJlZm9yZSB0aGUgbmV4dCBlZmZlY3QnLFxuICAgICAgdG9waWM6ICdIb29rcycsXG4gICAgICBkaWZmaWN1bHR5OiAnaGFyZCdcbiAgICB9XG4gIF1cbn07XG5cbmNvbnN0IE1BWF9UQUJfU1dJVENIRVMgPSAzO1xuY29uc3QgUVVJWl9USU1FX0xJTUlUID0gNjAwOyAvLyAxMCBtaW51dGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2N0b3JlZFF1aXooeyB1c2VyLCBsYW5ndWFnZSB9OiBQcm9jdG9yZWRRdWl6UHJvcHMpIHtcbiAgY29uc3QgdHIgPSB0KGxhbmd1YWdlKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBbcGhhc2UsIHNldFBoYXNlXSA9IHVzZVN0YXRlPCdpbnRybycgfCAncXVpeicgfCAncmVzdWx0Jz4oJ2ludHJvJyk7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2Fuc3dlcnMsIHNldEFuc3dlcnNdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oe30pO1xuICBjb25zdCBbdGFiU3dpdGNoQ291bnQsIHNldFRhYlN3aXRjaENvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNGbGFnZ2VkLCBzZXRJc0ZsYWdnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNGdWxsc2NyZWVuLCBzZXRJc0Z1bGxzY3JlZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGltZUxlZnQsIHNldFRpbWVMZWZ0XSA9IHVzZVN0YXRlKFFVSVpfVElNRV9MSU1JVCk7XG4gIGNvbnN0IFtzdGFydFRpbWUsIHNldFN0YXJ0VGltZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbc2hvd1dhcm5pbmcsIHNldFNob3dXYXJuaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3hwQW5pbWF0aW9uLCBzZXRYcEFuaW1hdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt4cEdhaW5lZCwgc2V0WHBHYWluZWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHRpbWVyUmVmID0gdXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGw+KG51bGwpO1xuXG4gIC8vIFRhYiBzd2l0Y2ggZGV0ZWN0aW9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBoYXNlICE9PSAncXVpeicpIHJldHVybjtcblxuICAgIGNvbnN0IGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvdW50ID0gdGFiU3dpdGNoQ291bnQgKyAxO1xuICAgICAgICBzZXRUYWJTd2l0Y2hDb3VudChuZXdDb3VudCk7XG4gICAgICAgIHNldFNob3dXYXJuaW5nKHRydWUpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG5ld0NvdW50ID49IE1BWF9UQUJfU1dJVENIRVMpIHtcbiAgICAgICAgICBzZXRJc0ZsYWdnZWQodHJ1ZSk7XG4gICAgICAgICAgaGFuZGxlU3VibWl0KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dXYXJuaW5nKGZhbHNlKSwgMzAwMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xuICB9LCBbcGhhc2UsIHRhYlN3aXRjaENvdW50XSk7XG5cbiAgLy8gRnVsbHNjcmVlbiBkZXRlY3Rpb25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVGdWxsc2NyZWVuQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgc2V0SXNGdWxsc2NyZWVuKCEhZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpO1xuICAgIH07XG4gICAgXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsIGhhbmRsZUZ1bGxzY3JlZW5DaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgaGFuZGxlRnVsbHNjcmVlbkNoYW5nZSk7XG4gIH0sIFtdKTtcblxuICAvLyBUaW1lclxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwaGFzZSAhPT0gJ3F1aXonKSByZXR1cm47XG4gICAgXG4gICAgdGltZXJSZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFRpbWVMZWZ0KHByZXYgPT4ge1xuICAgICAgICBpZiAocHJldiA8PSAxKSB7XG4gICAgICAgICAgaGFuZGxlU3VibWl0KGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldiAtIDE7XG4gICAgICB9KTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodGltZXJSZWYuY3VycmVudCkgY2xlYXJJbnRlcnZhbCh0aW1lclJlZi5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbcGhhc2VdKTtcblxuICBjb25zdCBlbnRlckZ1bGxzY3JlZW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuPy4oKS5jYXRjaCgoKSA9PiB7fSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzdGFydFF1aXogPSAoKSA9PiB7XG4gICAgZW50ZXJGdWxsc2NyZWVuKCk7XG4gICAgc2V0UGhhc2UoJ3F1aXonKTtcbiAgICBzZXRTdGFydFRpbWUoRGF0ZS5ub3coKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQW5zd2VyID0gKHF1ZXN0aW9uSWQ6IHN0cmluZywgYW5zd2VyOiBzdHJpbmcpID0+IHtcbiAgICBzZXRBbnN3ZXJzKHByZXYgPT4gKHsgLi4ucHJldiwgW3F1ZXN0aW9uSWRdOiBhbnN3ZXIgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGNhbGN1bGF0ZVJlc3VsdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcXVlc3Rpb25zID0gUVVJWl9EQVRBLnF1ZXN0aW9ucztcbiAgICBsZXQgY29ycmVjdCA9IDA7XG4gICAgY29uc3QgdG9waWNTY29yZXM6IFJlY29yZDxzdHJpbmcsIHsgY29ycmVjdDogbnVtYmVyOyB0b3RhbDogbnVtYmVyIH0+ID0ge307XG4gICAgY29uc3QgYW5zd2VyRGV0YWlscyA9IHF1ZXN0aW9ucy5tYXAocSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGFuc3dlcnNbcS5pZF0gfHwgJyc7XG4gICAgICBjb25zdCBpc0NvcnJlY3QgPSBzZWxlY3RlZCA9PT0gcS5jb3JyZWN0QW5zd2VyO1xuICAgICAgaWYgKGlzQ29ycmVjdCkgY29ycmVjdCsrO1xuICAgICAgXG4gICAgICBpZiAoIXRvcGljU2NvcmVzW3EudG9waWNdKSB0b3BpY1Njb3Jlc1txLnRvcGljXSA9IHsgY29ycmVjdDogMCwgdG90YWw6IDAgfTtcbiAgICAgIHRvcGljU2NvcmVzW3EudG9waWNdLnRvdGFsKys7XG4gICAgICBpZiAoaXNDb3JyZWN0KSB0b3BpY1Njb3Jlc1txLnRvcGljXS5jb3JyZWN0Kys7XG4gICAgICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHF1ZXN0aW9uSWQ6IHEuaWQsXG4gICAgICAgIHNlbGVjdGVkQW5zd2VyOiBzZWxlY3RlZCxcbiAgICAgICAgY29ycmVjdEFuc3dlcjogcS5jb3JyZWN0QW5zd2VyLFxuICAgICAgICBpc0NvcnJlY3QsXG4gICAgICAgIHRvcGljOiBxLnRvcGljXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8gRmluZCB3ZWFrIHRvcGljXG4gICAgbGV0IHdlYWtUb3BpYyA9ICdOb25lJztcbiAgICBsZXQgbG93ZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICBmb3IgKGNvbnN0IFt0b3BpYywgc2NvcmVdIG9mIE9iamVjdC5lbnRyaWVzKHRvcGljU2NvcmVzKSkge1xuICAgICAgY29uc3QgcmF0aW8gPSBzY29yZS5jb3JyZWN0IC8gc2NvcmUudG90YWw7XG4gICAgICBpZiAocmF0aW8gPCBsb3dlc3RTY29yZSkge1xuICAgICAgICBsb3dlc3RTY29yZSA9IHJhdGlvO1xuICAgICAgICB3ZWFrVG9waWMgPSB0b3BpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2NvcmU6IGNvcnJlY3QsXG4gICAgICB0b3RhbFF1ZXN0aW9uczogcXVlc3Rpb25zLmxlbmd0aCxcbiAgICAgIHRhYlN3aXRjaENvdW50LFxuICAgICAgd2Vha1RvcGljLFxuICAgICAgaXNGbGFnZ2VkOiBpc0ZsYWdnZWQgfHwgdGFiU3dpdGNoQ291bnQgPj0gTUFYX1RBQl9TV0lUQ0hFUyxcbiAgICAgIHRpbWVUYWtlbjogTWF0aC5yb3VuZCgoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSkgLyAxMDAwKSxcbiAgICAgIGFuc3dlcnM6IGFuc3dlckRldGFpbHMsXG4gICAgICB0b3BpY1Njb3Jlc1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGF1dG9TdWJtaXQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xuICAgIGlmICh0aW1lclJlZi5jdXJyZW50KSBjbGVhckludGVydmFsKHRpbWVyUmVmLmN1cnJlbnQpO1xuICAgIFxuICAgIGNvbnN0IHJlc3VsdHMgPSBjYWxjdWxhdGVSZXN1bHRzKCk7XG4gICAgY29uc3QgcGFzc2VkID0gcmVzdWx0cy5zY29yZSA+PSBNYXRoLmNlaWwocmVzdWx0cy50b3RhbFF1ZXN0aW9ucyAqIDAuNik7XG4gICAgXG4gICAgLy8gU2F2ZSB0byBEZXhpZVxuICAgIGF3YWl0IHNhdmVRdWl6UmVzdWx0KHtcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgIHF1aXpJZDogJ3JlYWN0LWZ1bmRhbWVudGFscycsXG4gICAgICBxdWl6VGl0bGU6IFFVSVpfREFUQS50aXRsZSxcbiAgICAgIHNjb3JlOiByZXN1bHRzLnNjb3JlLFxuICAgICAgdG90YWxRdWVzdGlvbnM6IHJlc3VsdHMudG90YWxRdWVzdGlvbnMsXG4gICAgICB0YWJTd2l0Y2hDb3VudDogcmVzdWx0cy50YWJTd2l0Y2hDb3VudCxcbiAgICAgIHdlYWtUb3BpYzogcmVzdWx0cy53ZWFrVG9waWMsXG4gICAgICBpc0ZsYWdnZWQ6IHJlc3VsdHMuaXNGbGFnZ2VkLFxuICAgICAgdGltZVRha2VuOiByZXN1bHRzLnRpbWVUYWtlbixcbiAgICAgIGFuc3dlcnM6IHJlc3VsdHMuYW5zd2Vyc1xuICAgIH0pO1xuXG4gICAgLy8gQXdhcmQgWFAgaWYgcGFzc2VkXG4gICAgaWYgKHBhc3NlZCAmJiAhYXV0b1N1Ym1pdCkge1xuICAgICAgY29uc3QgeHBBbW91bnQgPSByZXN1bHRzLnNjb3JlICogMTA7XG4gICAgICBjb25zdCB7IGxldmVsZWRVcCB9ID0gYWRkWFAoeHBBbW91bnQpO1xuICAgICAgcmVjb3JkUXVpelBhc3MoKTtcbiAgICAgIHNldFhwR2FpbmVkKHhwQW1vdW50KTtcbiAgICAgIHNldFhwQW5pbWF0aW9uKHRydWUpO1xuICAgICAgXG4gICAgICAvLyBUcmlnZ2VyIGNvbmZldHRpXG4gICAgICBpbXBvcnQoJ2NhbnZhcy1jb25mZXR0aScpLnRoZW4oKHsgZGVmYXVsdDogY29uZmV0dGkgfSkgPT4ge1xuICAgICAgICBjb25mZXR0aSh7XG4gICAgICAgICAgcGFydGljbGVDb3VudDogMTAwLFxuICAgICAgICAgIHNwcmVhZDogNzAsXG4gICAgICAgICAgb3JpZ2luOiB7IHk6IDAuNiB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGlmIChsZXZlbGVkVXApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaW1wb3J0KCdjYW52YXMtY29uZmV0dGknKS50aGVuKCh7IGRlZmF1bHQ6IGNvbmZldHRpIH0pID0+IHtcbiAgICAgICAgICAgIGNvbmZldHRpKHtcbiAgICAgICAgICAgICAgcGFydGljbGVDb3VudDogMjAwLFxuICAgICAgICAgICAgICBzcHJlYWQ6IDEyMCxcbiAgICAgICAgICAgICAgb3JpZ2luOiB7IHk6IDAuNSB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0UGhhc2UoJ3Jlc3VsdCcpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1hdFRpbWUgPSAoc2Vjb25kczogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbWlucyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBjb25zdCBzZWNzID0gc2Vjb25kcyAlIDYwO1xuICAgIHJldHVybiBgJHttaW5zfToke3NlY3MudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWA7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmVzdWx0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gY2FsY3VsYXRlUmVzdWx0cygpO1xuICB9O1xuXG4gIC8vIElOVFJPIFBIQVNFXG4gIGlmIChwaGFzZSA9PT0gJ2ludHJvJykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1zdXJmYWNlLTkwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBncmlkLWJnIHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuICAgICAgICBcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MCBnbGFzcyBib3JkZXItYiBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcHgtNCBzbTpweC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTE0XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9zdHVkZW50Jyl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc3VyZmFjZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgIDxBcnJvd0xlZnQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPkJhY2s8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYgaC02IHJvdW5kZWQtbWQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1icmFuZC01MDAgdG8tcHVycGxlLTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPEJyYWluIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5OZXVyby1FZHUgT1M8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG8gcHgtNCBzbTpweC02IHB5LTEyXCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcmVkLTUwMC8yMCB0by1vcmFuZ2UtNTAwLzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNlwiPlxuICAgICAgICAgICAgICA8U2hpZWxkIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1yZWQtNDAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi0zXCI+UHJvY3RvcmVkIEFzc2Vzc21lbnQ8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdXJmYWNlLTIwMFwiPntRVUlaX0RBVEEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBiZy1zdXJmYWNlLTgwMC8zMCBwLTYgbWItNlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi00IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxBbGVydFRyaWFuZ2xlIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1hbWJlci00MDBcIiAvPlxuICAgICAgICAgICAgICBQcm9jdG9yaW5nIFJ1bGVzXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICB7IGljb246IEV5ZSwgdGV4dDogJ1RhYiBzd2l0Y2hlcyBhcmUgbW9uaXRvcmVkIChtYXggMyBhbGxvd2VkKScsIGNvbG9yOiAndGV4dC1ibHVlLTQwMCcgfSxcbiAgICAgICAgICAgICAgICB7IGljb246IE1heGltaXplLCB0ZXh0OiAnRnVsbHNjcmVlbiBtb2RlIHdpbGwgYmUgZW5mb3JjZWQnLCBjb2xvcjogJ3RleHQtcHVycGxlLTQwMCcgfSxcbiAgICAgICAgICAgICAgICB7IGljb246IENsb2NrLCB0ZXh0OiBgVGltZSBsaW1pdDogJHtNYXRoLmZsb29yKFFVSVpfVElNRV9MSU1JVCAvIDYwKX0gbWludXRlc2AsIGNvbG9yOiAndGV4dC1ncmVlbi00MDAnIH0sXG4gICAgICAgICAgICAgICAgeyBpY29uOiBGbGFnLCB0ZXh0OiAnRXhjZWVkaW5nIHRhYiBzd2l0Y2ggbGltaXQgYXV0by1zdWJtaXRzICYgZmxhZ3MgeW91ciBhdHRlbXB0JywgY29sb3I6ICd0ZXh0LXJlZC00MDAnIH0sXG4gICAgICAgICAgICAgIF0ubWFwKChydWxlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHAtMyByb3VuZGVkLXhsIGJnLXN1cmZhY2UtOTAwLzUwIGJvcmRlciBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICAgICAgICAgICAgPHJ1bGUuaWNvbiBjbGFzc05hbWU9e2B3LTUgaC01ICR7cnVsZS5jb2xvcn0gc2hyaW5rLTBgfSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXN1cmZhY2UtMjAwXCI+e3J1bGUudGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4yIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXN1cmZhY2UtODAwLzMwIHAtNiBtYi04XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPEJvb2tPcGVuIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1icmFuZC00MDBcIiAvPlxuICAgICAgICAgICAgICBRdWl6IERldGFpbHNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC14bCBiZy1zdXJmYWNlLTkwMC81MFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWJyYW5kLTMwMFwiPntRVUlaX0RBVEEucXVlc3Rpb25zLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwXCI+UXVlc3Rpb25zPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC14bCBiZy1zdXJmYWNlLTkwMC81MFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTMwMFwiPntNYXRoLmZsb29yKFFVSVpfVElNRV9MSU1JVCAvIDYwKX0gbWluPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdXJmYWNlLTIwMFwiPlRpbWUgTGltaXQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLXhsIGJnLXN1cmZhY2UtOTAwLzUwXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtYW1iZXItMzAwXCI+NjAlPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdXJmYWNlLTIwMFwiPlBhc3MgTWFyazwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQteGwgYmctc3VyZmFjZS05MDAvNTBcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1wdXJwbGUtMzAwXCI+K1hQPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdXJmYWNlLTIwMFwiPlJld2FyZDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjMgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWlzRnVsbHNjcmVlbiAmJiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlbnRlckZ1bGxzY3JlZW59XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTQgcHgtNCBweS0zIHRleHQtc20gZm9udC1tZWRpdW0gYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByb3VuZGVkLXhsIHRleHQtc3VyZmFjZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGUvMjAgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1heGltaXplIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgIEVudGVyIEZ1bGxzY3JlZW4gRmlyc3RcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydFF1aXp9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC04IHB5LTQgdGV4dC1zbSBmb250LXNlbWlib2xkIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1icmFuZC02MDAgdG8tcHVycGxlLTYwMCBob3Zlcjpmcm9tLWJyYW5kLTUwMCBob3Zlcjp0by1wdXJwbGUtNTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LXhsIGhvdmVyOnNoYWRvdy1icmFuZC02MDAvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgZ3JvdXBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGFyZ2V0IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICBCZWdpbiBBc3Nlc3NtZW50XG4gICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0wLjUgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy8gUVVJWiBQSEFTRVxuICBpZiAocGhhc2UgPT09ICdxdWl6Jykge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gUVVJWl9EQVRBLnF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dO1xuICAgIGNvbnN0IHByb2dyZXNzID0gKChjdXJyZW50UXVlc3Rpb24gKyAxKSAvIFFVSVpfREFUQS5xdWVzdGlvbnMubGVuZ3RoKSAqIDEwMDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1zdXJmYWNlLTkwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIHsvKiBUYWIgc3dpdGNoIHdhcm5pbmcgKi99XG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAge3Nob3dXYXJuaW5nICYmIChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogLTEwMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyB5OiAtMTAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0xNiBsZWZ0LTAgcmlnaHQtMCB6LTUwIG14LTQgc206bXgtYXV0byBzbTptYXgtdy1sZ1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctcmVkLTUwMC8yMCBib3JkZXIgYm9yZGVyLXJlZC01MDAvNDAgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxBbGVydFRyaWFuZ2xlIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1yZWQtNDAwIHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJlZC0zMDBcIj5UYWIgU3dpdGNoIERldGVjdGVkITwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtMzAwLzcwXCI+V2FybmluZyB7dGFiU3dpdGNoQ291bnR9L3tNQVhfVEFCX1NXSVRDSEVTfSDigJQge01BWF9UQUJfU1dJVENIRVMgLSB0YWJTd2l0Y2hDb3VudH0gcmVtYWluaW5nPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cblxuICAgICAgICB7LyogWFAgQW5pbWF0aW9uICovfVxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIHt4cEFuaW1hdGlvbiAmJiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyBzY2FsZTogMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMS8yIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB6LVsxMDBdXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1icmFuZC02MDAgdG8tcHVycGxlLTYwMCBzaGFkb3ctMnhsIHNoYWRvdy1icmFuZC02MDAvMzBcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiPit7eHBHYWluZWR9IFhQITwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUvNzAgdGV4dC1jZW50ZXIgbXQtMVwiPlF1aXogUGFzc2VkITwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG5cbiAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei00MCBnbGFzcyBib3JkZXItYiBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcHgtNCBzbTpweC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTE0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtbWVkaXVtICR7XG4gICAgICAgICAgICAgICAgICB0YWJTd2l0Y2hDb3VudCA+PSBNQVhfVEFCX1NXSVRDSEVTIC0gMSBcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctcmVkLTUwMC8yMCB0ZXh0LXJlZC0zMDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwLzMwJyBcbiAgICAgICAgICAgICAgICAgICAgOiB0YWJTd2l0Y2hDb3VudCA+IDAgXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLWFtYmVyLTUwMC8yMCB0ZXh0LWFtYmVyLTMwMCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8zMCdcbiAgICAgICAgICAgICAgICAgICAgOiAnYmctZ3JlZW4tNTAwLzIwIHRleHQtZ3JlZW4tMzAwIGJvcmRlciBib3JkZXItZ3JlZW4tNTAwLzMwJ1xuICAgICAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICAgIDxFeWUgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgVGFiIFN3aXRjaDoge3RhYlN3aXRjaENvdW50fS97TUFYX1RBQl9TV0lUQ0hFU31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEgcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtbW9ubyBmb250LW1lZGl1bSAke1xuICAgICAgICAgICAgICAgIHRpbWVMZWZ0IDwgNjAgPyAnYmctcmVkLTUwMC8yMCB0ZXh0LXJlZC0zMDAgYW5pbWF0ZS1wdWxzZScgOiAnYmctc3VyZmFjZS04MDAvNTAgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUodGltZUxlZnQpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICB7LyogUHJvZ3Jlc3MgQmFyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMSBiZy1zdXJmYWNlLTgwMFwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJyYW5kLTUwMCB0by1wdXJwbGUtNTAwXCJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgd2lkdGg6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUXVlc3Rpb24gKi99XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvIHB4LTQgc206cHgtNiBweS04XCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGtleT17Y3VycmVudFF1ZXN0aW9ufVxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAyMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHg6IC0yMCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItNlwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yLjUgcHktMSB0ZXh0LXhzIGZvbnQtbWVkaXVtIGJnLWJyYW5kLTUwMC8xMCB0ZXh0LWJyYW5kLTMwMCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1icmFuZC01MDAvMjBcIj5cbiAgICAgICAgICAgICAgICBRe2N1cnJlbnRRdWVzdGlvbiArIDF9L3tRVUlaX0RBVEEucXVlc3Rpb25zLmxlbmd0aH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BweC0yLjUgcHktMSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHJvdW5kZWQtZnVsbCBib3JkZXIgJHtcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi5kaWZmaWN1bHR5ID09PSAnZWFzeScgPyAnYmctZ3JlZW4tNTAwLzEwIHRleHQtZ3JlZW4tMzAwIGJvcmRlci1ncmVlbi01MDAvMjAnIDpcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi5kaWZmaWN1bHR5ID09PSAnbWVkaXVtJyA/ICdiZy1hbWJlci01MDAvMTAgdGV4dC1hbWJlci0zMDAgYm9yZGVyLWFtYmVyLTUwMC8yMCcgOlxuICAgICAgICAgICAgICAgICdiZy1yZWQtNTAwLzEwIHRleHQtcmVkLTMwMCBib3JkZXItcmVkLTUwMC8yMCdcbiAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5kaWZmaWN1bHR5fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIuNSBweS0xIHRleHQteHMgZm9udC1tZWRpdW0gYmctc3VyZmFjZS04MDAvNTAgdGV4dC1zdXJmYWNlLTIwMCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICAgICAge3F1ZXN0aW9uLnRvcGljfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgc206dGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi04IGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICB7cXVlc3Rpb24ucXVlc3Rpb259XG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICB7cXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wdGlvbiwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGFuc3dlcnNbcXVlc3Rpb24uaWRdID09PSBvcHRpb247XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjAxIH19XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk5IH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlcihxdWVzdGlvbi5pZCwgb3B0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIHRleHQtbGVmdCBwLTQgcm91bmRlZC14bCBib3JkZXIgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItYnJhbmQtNTAwLzUwIGJnLWJyYW5kLTUwMC8xMCB0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXdoaXRlLzEwIGJnLXN1cmZhY2UtODAwLzMwIHRleHQtc3VyZmFjZS0yMDAgaG92ZXI6Ym9yZGVyLXdoaXRlLzIwIGhvdmVyOmJnLXN1cmZhY2UtODAwLzUwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy04IGgtOCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTAgdGV4dC1zbSBmb250LW1lZGl1bSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZCA/ICdiZy1icmFuZC01MDAgdGV4dC13aGl0ZScgOiAnYmctc3VyZmFjZS05MDAvNTAgdGV4dC1zdXJmYWNlLTIwMCdcbiAgICAgICAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGlkeCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWJhc2VcIj57b3B0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICB7LyogTmF2aWdhdGlvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC0xMCBwdC02IGJvcmRlci10IGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRRdWVzdGlvbihNYXRoLm1heCgwLCBjdXJyZW50UXVlc3Rpb24gLSAxKSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UXVlc3Rpb24gPT09IDB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMi41IHRleHQtc20gZm9udC1tZWRpdW0gYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByb3VuZGVkLXhsIHRleHQtc3VyZmFjZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGUvMjAgdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6b3BhY2l0eS0zMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24gPT09IFFVSVpfREFUQS5xdWVzdGlvbnMubGVuZ3RoIC0gMSA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdChmYWxzZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0yLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1icmFuZC02MDAgdG8tcHVycGxlLTYwMCBob3Zlcjpmcm9tLWJyYW5kLTUwMCBob3Zlcjp0by1wdXJwbGUtNTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICBTdWJtaXQgUXVpelxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UXVlc3Rpb24oTWF0aC5taW4oUVVJWl9EQVRBLnF1ZXN0aW9ucy5sZW5ndGggLSAxLCBjdXJyZW50UXVlc3Rpb24gKyAxKSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yLjUgdGV4dC1zbSBmb250LW1lZGl1bSBiZy1icmFuZC02MDAgaG92ZXI6YmctYnJhbmQtNTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBRdWVzdGlvbiBkb3RzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEuNSBtdC02IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAge1FVSVpfREFUQS5xdWVzdGlvbnMubWFwKChxLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17cS5pZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UXVlc3Rpb24oaWR4KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTcgaC03IHJvdW5kZWQtZnVsbCB0ZXh0LVsxMHB4XSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgaWR4ID09PSBjdXJyZW50UXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgPyAnYmctYnJhbmQtNTAwIHRleHQtd2hpdGUgc2NhbGUtMTEwJ1xuICAgICAgICAgICAgICAgICAgICA6IGFuc3dlcnNbcS5pZF1cbiAgICAgICAgICAgICAgICAgICAgPyAnYmctZ3JlZW4tNTAwLzIwIHRleHQtZ3JlZW4tMzAwIGJvcmRlciBib3JkZXItZ3JlZW4tNTAwLzMwJ1xuICAgICAgICAgICAgICAgICAgICA6ICdiZy1zdXJmYWNlLTgwMC81MCB0ZXh0LXN1cmZhY2UtMjAwIGJvcmRlciBib3JkZXItd2hpdGUvNSdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpZHggKyAxfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy8gUkVTVUxUIFBIQVNFXG4gIGNvbnN0IHJlc3VsdHMgPSBnZXRSZXN1bHRzKCk7XG4gIGNvbnN0IHBhc3NlZCA9IHJlc3VsdHMuc2NvcmUgPj0gTWF0aC5jZWlsKHJlc3VsdHMudG90YWxRdWVzdGlvbnMgKiAwLjYpO1xuICBjb25zdCBwZXJjZW50YWdlID0gTWF0aC5yb3VuZCgocmVzdWx0cy5zY29yZSAvIHJlc3VsdHMudG90YWxRdWVzdGlvbnMpICogMTAwKTtcbiAgY29uc3Qgc3RhdGUgPSBnZXRHYW1pZmljYXRpb25TdGF0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc3VyZmFjZS05MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGdyaWQtYmcgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG4gICAgICBcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTAgZ2xhc3MgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBweC00IHNtOnB4LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTE0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvc3R1ZGVudCcpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgPEFycm93TGVmdCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPkRhc2hib2FyZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPlF1aXogUmVzdWx0czwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG8gcHgtNCBzbTpweC02IHB5LThcIj5cbiAgICAgICAgey8qIFJlc3VsdCBIZWFkZXIgKi99XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45IH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLThcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTIwIGgtMjAgcm91bmRlZC0yeGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi02ICR7XG4gICAgICAgICAgICBwYXNzZWQgPyAnYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi01MDAvMjAgdG8tZW1lcmFsZC01MDAvMjAnIDogJ2JnLWdyYWRpZW50LXRvLWJyIGZyb20tcmVkLTUwMC8yMCB0by1vcmFuZ2UtNTAwLzIwJ1xuICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgIHtwYXNzZWQgPyAoXG4gICAgICAgICAgICAgIDxUcm9waHkgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHRleHQtZ3JlZW4tNDAwXCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxYQ2lyY2xlIGNsYXNzTmFtZT1cInctMTAgaC0xMCB0ZXh0LXJlZC00MDBcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgICAgIHtwYXNzZWQgPyAnUXVpeiBQYXNzZWQhJyA6ICdRdWl6IEZhaWxlZCd9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN1cmZhY2UtMjAwXCI+XG4gICAgICAgICAgICB7cGFzc2VkID8gJ0dyZWF0IGpvYiEgS2VlcCB1cCB0aGUgbW9tZW50dW0uJyA6ICdEb25cXCd0IHdvcnJ5LCBwcmFjdGljZSBtYWtlcyBwZXJmZWN0Lid9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgey8qIEZsYWdnZWQgV2FybmluZyAqL31cbiAgICAgICAge3Jlc3VsdHMuaXNGbGFnZ2VkICYmIChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi02IHAtNCByb3VuZGVkLXhsIGJnLXJlZC01MDAvMTAgYm9yZGVyIGJvcmRlci1yZWQtNTAwLzMwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxhZyBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtcmVkLTQwMCBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcmVkLTMwMFwiPkFzc2Vzc21lbnQgRmxhZ2dlZDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC0zMDAvNzBcIj5NdWx0aXBsZSB0YWIgc3dpdGNoZXMgZGV0ZWN0ZWQuIFRoaXMgYXR0ZW1wdCBoYXMgYmVlbiBmbGFnZ2VkIGZvciByZXZpZXcuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBTY29yZSBDYXJkICovfVxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjEgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXN1cmZhY2UtODAwLzMwIHAtNiBtYi02XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTMgcm91bmRlZC14bCBiZy1zdXJmYWNlLTkwMC81MFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1icmFuZC0zMDBcIj57cGVyY2VudGFnZX0lPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDAgbXQtMVwiPlNjb3JlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtMyByb3VuZGVkLXhsIGJnLXN1cmZhY2UtOTAwLzUwXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTMwMFwiPntyZXN1bHRzLnNjb3JlfS97cmVzdWx0cy50b3RhbFF1ZXN0aW9uc308L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdXJmYWNlLTIwMCBtdC0xXCI+Q29ycmVjdDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTMgcm91bmRlZC14bCBiZy1zdXJmYWNlLTkwMC81MFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1hbWJlci0zMDBcIj57Zm9ybWF0VGltZShyZXN1bHRzLnRpbWVUYWtlbil9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDAgbXQtMVwiPlRpbWUgVGFrZW48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0zIHJvdW5kZWQteGwgYmctc3VyZmFjZS05MDAvNTBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC0yeGwgZm9udC1ib2xkICR7cmVzdWx0cy50YWJTd2l0Y2hDb3VudCA+IDAgPyAndGV4dC1yZWQtMzAwJyA6ICd0ZXh0LWdyZWVuLTMwMCd9YH0+XG4gICAgICAgICAgICAgICAge3Jlc3VsdHMudGFiU3dpdGNoQ291bnR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwIG10LTFcIj5UYWIgU3dpdGNoZXM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIHsvKiBXZWFrIFRvcGljIEFuYWx5c2lzICovfVxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjIgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXN1cmZhY2UtODAwLzMwIHAtNiBtYi02XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPFRhcmdldCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYnJhbmQtNDAwXCIgLz5cbiAgICAgICAgICAgIFBlcmZvcm1hbmNlIEFuYWx5c2lzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1icmFuZC01MDAvMTAgdG8tcHVycGxlLTUwMC8xMCBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC8yMCBtYi00XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3VyZmFjZS0yMDAgbWItMVwiPllvdXIgd2VhayB0b3BpYyBpczwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGdyYWRpZW50LXRleHRcIj57cmVzdWx0cy53ZWFrVG9waWN9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwLzcwIG10LTJcIj5cbiAgICAgICAgICAgICAgRm9jdXMgbW9yZSBvbiB0aGlzIGFyZWEgdG8gaW1wcm92ZSB5b3VyIG92ZXJhbGwgc2NvcmUuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogVG9waWMgQnJlYWtkb3duICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMocmVzdWx0cy50b3BpY1Njb3JlcykubWFwKChbdG9waWMsIHNjb3JlXSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwY3QgPSBNYXRoLnJvdW5kKChzY29yZS5jb3JyZWN0IC8gc2NvcmUudG90YWwpICogMTAwKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dG9waWN9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3VyZmFjZS0yMDBcIj57dG9waWN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXhzIGZvbnQtbWVkaXVtICR7XG4gICAgICAgICAgICAgICAgICAgICAgcGN0ID49IDgwID8gJ3RleHQtZ3JlZW4tMzAwJyA6IHBjdCA+PSA1MCA/ICd0ZXh0LWFtYmVyLTMwMCcgOiAndGV4dC1yZWQtMzAwJ1xuICAgICAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge3Njb3JlLmNvcnJlY3R9L3tzY29yZS50b3RhbH0gKHtwY3R9JSlcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTIgcm91bmRlZC1mdWxsIGJnLXN1cmZhY2UtOTAwLzUwIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgd2lkdGg6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHdpZHRoOiBgJHtwY3R9JWAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjgsIGRlbGF5OiAwLjMgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLWZ1bGwgcm91bmRlZC1mdWxsICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwY3QgPj0gODAgPyAnYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTUwMCB0by1lbWVyYWxkLTUwMCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGN0ID49IDUwID8gJ2JnLWdyYWRpZW50LXRvLXIgZnJvbS1hbWJlci01MDAgdG8teWVsbG93LTUwMCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JnLWdyYWRpZW50LXRvLXIgZnJvbS1yZWQtNTAwIHRvLW9yYW5nZS01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgey8qIFhQIFJld2FyZCAqL31cbiAgICAgICAge3Bhc3NlZCAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4zIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXN1cmZhY2UtODAwLzMwIHAtNiBtYi02XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPFphcCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICAgICAgUmV3YXJkcyBFYXJuZWRcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHAtNCByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1icmFuZC01MDAvMTAgdG8tcHVycGxlLTUwMC8xMCBib3JkZXIgYm9yZGVyLWJyYW5kLTUwMC8yMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYnJhbmQtNTAwIHRvLXB1cnBsZS02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8QXdhcmQgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC13aGl0ZVwiPit7cmVzdWx0cy5zY29yZSAqIDEwfSBYUDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDBcIj5Ub3RhbCBYUDoge3N0YXRlLnhwfSDigKIgTGV2ZWwge3N0YXRlLmxldmVsfSDigKIge3N0YXRlLmxlYWd1ZX0gTGVhZ3VlPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogQWN0aW9ucyAqL31cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC40IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBnYXAtM1wiXG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL3N0dWRlbnQnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweC00IHB5LTMgdGV4dC1zbSBmb250LW1lZGl1bSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQteGwgdGV4dC1zdXJmYWNlLTIwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci13aGl0ZS8yMCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQmFjayB0byBEYXNoYm9hcmRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7IXBhc3NlZCAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQaGFzZSgnaW50cm8nKTtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UXVlc3Rpb24oMCk7XG4gICAgICAgICAgICAgICAgc2V0QW5zd2Vycyh7fSk7XG4gICAgICAgICAgICAgICAgc2V0VGFiU3dpdGNoQ291bnQoMCk7XG4gICAgICAgICAgICAgICAgc2V0SXNGbGFnZ2VkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lTGVmdChRVUlaX1RJTUVfTElNSVQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHgtNCBweS0zIHRleHQtc20gZm9udC1zZW1pYm9sZCBiZy1icmFuZC02MDAgaG92ZXI6YmctYnJhbmQtNTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXRyeSBRdWl6XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxGb290ZXIgbGFuZ3VhZ2U9e2xhbmd1YWdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvd29ya3NwYWNlL3NyYy9wYWdlcy9Qcm9jdG9yZWRRdWl6LnRzeCJ9