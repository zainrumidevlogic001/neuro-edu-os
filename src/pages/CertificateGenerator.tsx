import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/CertificateGenerator.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/pages/CertificateGenerator.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=620eb88c"; const useRef = __vite__cjsImport3_react["useRef"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { useNavigate, useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=d53b2b6e";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=6e0f127a";
import { ArrowLeft, Download, Award, Brain } from "/node_modules/.vite/deps/lucide-react.js?v=6a865639";
import { getCourseById } from "/src/lib/store.ts";
import { getCurrentUser } from "/src/lib/store.ts";
import { t } from "/src/lib/i18n.ts";
import Footer from "/src/components/Footer.tsx";
export default function CertificateGenerator({ language }) {
  _s();
  const navigate = useNavigate();
  const { courseId } = useParams();
  const tr = t(language);
  const canvasRef = useRef(null);
  const [generating, setGenerating] = useState(false);
  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (courseId) {
      const c = getCourseById(courseId);
      setCourse(c);
    }
    const u = getCurrentUser();
    setUser(u);
  }, [courseId]);
  useEffect(() => {
    if (course && user && canvasRef.current) {
      generateCertificate();
    }
  }, [course, user]);
  const generateCertificate = () => {
    if (!canvasRef.current || !course || !user) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = 1200;
    canvas.height = 850;
    const gradient = ctx.createLinearGradient(0, 0, 1200, 850);
    gradient.addColorStop(0, "#1a1a2e");
    gradient.addColorStop(0.5, "#16213e");
    gradient.addColorStop(1, "#0f3460");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 850);
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 1160, 810);
    ctx.strokeStyle = "#818cf8";
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, 1120, 770);
    const cornerSize = 60;
    ctx.strokeStyle = "#a78bfa";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(40, 100);
    ctx.lineTo(40, 40);
    ctx.lineTo(100, 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1100, 40);
    ctx.lineTo(1160, 40);
    ctx.lineTo(1160, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(40, 750);
    ctx.lineTo(40, 810);
    ctx.lineTo(100, 810);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(1100, 810);
    ctx.lineTo(1160, 810);
    ctx.lineTo(1160, 750);
    ctx.stroke();
    ctx.fillStyle = "#6366f1";
    ctx.beginPath();
    ctx.arc(600, 120, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 40px Arial";
    ctx.textAlign = "center";
    ctx.fillText("🧠", 600, 135);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 48px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText(tr.certOfCompletion, 600, 220);
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(400, 240);
    ctx.lineTo(800, 240);
    ctx.stroke();
    ctx.fillStyle = "#a5b4fc";
    ctx.font = "24px Georgia, serif";
    ctx.fillText(tr.thisIsToCertify, 600, 300);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 56px Georgia, serif";
    ctx.fillText(user.name || "Student Name", 600, 380);
    ctx.strokeStyle = "#818cf8";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(350, 400);
    ctx.lineTo(850, 400);
    ctx.stroke();
    ctx.fillStyle = "#a5b4fc";
    ctx.font = "24px Georgia, serif";
    ctx.fillText(tr.successfullyCompleted, 600, 460);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 36px Georgia, serif";
    ctx.fillText(course.title || "Course Name", 600, 520);
    const date = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    ctx.fillStyle = "#a5b4fc";
    ctx.font = "20px Georgia, serif";
    ctx.fillText(`${tr.issuedOn} ${date}`, 600, 600);
    const certId = `NEURO-${Date.now().toString(36).toUpperCase()}`;
    ctx.fillStyle = "#818cf8";
    ctx.font = "16px monospace";
    ctx.fillText(`${tr.certificateId}: ${certId}`, 600, 650);
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(450, 720);
    ctx.lineTo(750, 720);
    ctx.stroke();
    ctx.fillStyle = "#a5b4fc";
    ctx.font = "18px Georgia, serif";
    ctx.fillText("Neuro-Edu OS", 600, 750);
    ctx.fillStyle = "#64748b";
    ctx.font = "14px Arial";
    ctx.fillText("© 2026 Neuro-Edu OS. All rights reserved.", 600, 790);
  };
  const downloadCertificate = () => {
    if (!canvasRef.current) return;
    setGenerating(true);
    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const link = document.createElement("a");
      link.download = `certificate-${course?.title?.replace(/\s+/g, "-") || "course"}-${user?.name?.replace(/\s+/g, "-") || "student"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      setGenerating(false);
    }, 500);
  };
  if (!course || !user) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-surface-200", children: tr.loading }, void 0, false, {
      fileName: "/workspace/src/pages/CertificateGenerator.tsx",
      lineNumber: 229,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/CertificateGenerator.tsx",
      lineNumber: 228,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/CertificateGenerator.tsx",
      lineNumber: 227,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 grid-bg pointer-events-none" }, void 0, false, {
      fileName: "/workspace/src/pages/CertificateGenerator.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 glass border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-14", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => navigate(`/course/${courseId}`),
          className: "flex items-center gap-2 text-surface-200 hover:text-white transition-colors",
          children: [
            /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/workspace/src/pages/CertificateGenerator.tsx",
              lineNumber: 247,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm", children: tr.backToHome }, void 0, false, {
              fileName: "/workspace/src/pages/CertificateGenerator.tsx",
              lineNumber: 248,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/CertificateGenerator.tsx",
          lineNumber: 243,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-6 h-6 rounded-md bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Brain, { className: "w-3.5 h-3.5 text-white" }, void 0, false, {
          fileName: "/workspace/src/pages/CertificateGenerator.tsx",
          lineNumber: 252,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/workspace/src/pages/CertificateGenerator.tsx",
          lineNumber: 251,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium", children: tr.certificate }, void 0, false, {
          fileName: "/workspace/src/pages/CertificateGenerator.tsx",
          lineNumber: 254,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/pages/CertificateGenerator.tsx",
        lineNumber: 250,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "w-16" }, void 0, false, {
        fileName: "/workspace/src/pages/CertificateGenerator.tsx",
        lineNumber: 256,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/CertificateGenerator.tsx",
      lineNumber: 242,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/CertificateGenerator.tsx",
      lineNumber: 241,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/CertificateGenerator.tsx",
      lineNumber: 240,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-8", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-8",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxDEV(Award, { className: "w-8 h-8 text-amber-400" }, void 0, false, {
              fileName: "/workspace/src/pages/CertificateGenerator.tsx",
              lineNumber: 268,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/workspace/src/pages/CertificateGenerator.tsx",
              lineNumber: 267,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-bold mb-3", children: tr.courseCompleted }, void 0, false, {
              fileName: "/workspace/src/pages/CertificateGenerator.tsx",
              lineNumber: 270,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-surface-200", children: tr.congrats }, void 0, false, {
              fileName: "/workspace/src/pages/CertificateGenerator.tsx",
              lineNumber: 271,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/workspace/src/pages/CertificateGenerator.tsx",
          lineNumber: 262,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: 0.2 },
          className: "rounded-2xl border border-white/10 bg-surface-800/30 p-6 mb-6 overflow-hidden",
          children: /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[1200/850] w-full max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV(
            "canvas",
            {
              ref: canvasRef,
              className: "w-full h-full rounded-lg shadow-2xl"
            },
            void 0,
            false,
            {
              fileName: "/workspace/src/pages/CertificateGenerator.tsx",
              lineNumber: 282,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/workspace/src/pages/CertificateGenerator.tsx",
            lineNumber: 281,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/workspace/src/pages/CertificateGenerator.tsx",
          lineNumber: 275,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "flex justify-center",
          children: /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: downloadCertificate,
              disabled: generating,
              className: "px-8 py-4 text-lg font-semibold bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 rounded-xl transition-all flex items-center gap-3 shadow-xl shadow-brand-600/20 disabled:opacity-50",
              children: generating ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }, void 0, false, {
                  fileName: "/workspace/src/pages/CertificateGenerator.tsx",
                  lineNumber: 303,
                  columnNumber: 17
                }, this),
                tr.generating
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/CertificateGenerator.tsx",
                lineNumber: 302,
                columnNumber: 13
              }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                /* @__PURE__ */ jsxDEV(Download, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "/workspace/src/pages/CertificateGenerator.tsx",
                  lineNumber: 308,
                  columnNumber: 17
                }, this),
                tr.downloadCertificate
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/CertificateGenerator.tsx",
                lineNumber: 307,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/workspace/src/pages/CertificateGenerator.tsx",
              lineNumber: 296,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/workspace/src/pages/CertificateGenerator.tsx",
          lineNumber: 290,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/workspace/src/pages/CertificateGenerator.tsx",
      lineNumber: 261,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { language }, void 0, false, {
      fileName: "/workspace/src/pages/CertificateGenerator.tsx",
      lineNumber: 316,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/workspace/src/pages/CertificateGenerator.tsx",
    lineNumber: 236,
    columnNumber: 5
  }, this);
}
_s(CertificateGenerator, "MvHHu3rqsrWpMgw6alYySgppATM=", false, function() {
  return [useNavigate, useParams];
});
_c = CertificateGenerator;
var _c;
$RefreshReg$(_c, "CertificateGenerator");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/pages/CertificateGenerator.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/pages/CertificateGenerator.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBLHFCQUdBO0FBQUE7QUFBQSxZQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWdCQTtBQUFBO0FBQUEsUUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdUJBO0FBQUEsU0FwREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXFEQTtBQUFBLElBRUEsdUJBQUMsVUFBTyxZQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBMkI7QUFBQSxPQWhGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWlGQTtBQUVKO0FBQUN6RCxHQTlSdUJGLHNCQUFvQjtBQUFBLFVBQ3pCWCxhQUNJQyxTQUFTO0FBQUE7QUFBQSxLQUZSVTtBQUFvQixJQUFBOEU7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIm1vdGlvbiIsIkFycm93TGVmdCIsIkRvd25sb2FkIiwiQXdhcmQiLCJCcmFpbiIsImdldENvdXJzZUJ5SWQiLCJnZXRDdXJyZW50VXNlciIsInQiLCJGb290ZXIiLCJDZXJ0aWZpY2F0ZUdlbmVyYXRvciIsImxhbmd1YWdlIiwiX3MiLCJuYXZpZ2F0ZSIsImNvdXJzZUlkIiwidHIiLCJjYW52YXNSZWYiLCJnZW5lcmF0aW5nIiwic2V0R2VuZXJhdGluZyIsImNvdXJzZSIsInNldENvdXJzZSIsInVzZXIiLCJzZXRVc2VyIiwiYyIsInUiLCJjdXJyZW50IiwiZ2VuZXJhdGVDZXJ0aWZpY2F0ZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlUmVjdCIsImNvcm5lclNpemUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiY2VydE9mQ29tcGxldGlvbiIsInRoaXNJc1RvQ2VydGlmeSIsIm5hbWUiLCJzdWNjZXNzZnVsbHlDb21wbGV0ZWQiLCJ0aXRsZSIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaXNzdWVkT24iLCJjZXJ0SWQiLCJub3ciLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiY2VydGlmaWNhdGVJZCIsImRvd25sb2FkQ2VydGlmaWNhdGUiLCJzZXRUaW1lb3V0IiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRvd25sb2FkIiwicmVwbGFjZSIsImhyZWYiLCJ0b0RhdGFVUkwiLCJjbGljayIsImxvYWRpbmciLCJiYWNrVG9Ib21lIiwiY2VydGlmaWNhdGUiLCJvcGFjaXR5IiwieSIsImNvdXJzZUNvbXBsZXRlZCIsImNvbmdyYXRzIiwic2NhbGUiLCJkZWxheSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNlcnRpZmljYXRlR2VuZXJhdG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IEFycm93TGVmdCwgRG93bmxvYWQsIEF3YXJkLCBCcmFpbiwgQ2hlY2tDaXJjbGUyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IGdldENvdXJzZUJ5SWQgfSBmcm9tICcuLi9saWIvc3RvcmUnO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi9saWIvc3RvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UsIHQgfSBmcm9tICcuLi9saWIvaTE4bic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuaW50ZXJmYWNlIENlcnRpZmljYXRlR2VuZXJhdG9yUHJvcHMge1xuICBsYW5ndWFnZTogTGFuZ3VhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlcnRpZmljYXRlR2VuZXJhdG9yKHsgbGFuZ3VhZ2UgfTogQ2VydGlmaWNhdGVHZW5lcmF0b3JQcm9wcykge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHsgY291cnNlSWQgfSA9IHVzZVBhcmFtczx7IGNvdXJzZUlkOiBzdHJpbmcgfT4oKTtcbiAgY29uc3QgdHIgPSB0KGxhbmd1YWdlKTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW2dlbmVyYXRpbmcsIHNldEdlbmVyYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY291cnNlLCBzZXRDb3Vyc2VdID0gdXNlU3RhdGU8YW55PihudWxsKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8YW55PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb3Vyc2VJZCkge1xuICAgICAgY29uc3QgYyA9IGdldENvdXJzZUJ5SWQoY291cnNlSWQpO1xuICAgICAgc2V0Q291cnNlKGMpO1xuICAgIH1cbiAgICBjb25zdCB1ID0gZ2V0Q3VycmVudFVzZXIoKTtcbiAgICBzZXRVc2VyKHUpO1xuICB9LCBbY291cnNlSWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb3Vyc2UgJiYgdXNlciAmJiBjYW52YXNSZWYuY3VycmVudCkge1xuICAgICAgZ2VuZXJhdGVDZXJ0aWZpY2F0ZSgpO1xuICAgIH1cbiAgfSwgW2NvdXJzZSwgdXNlcl0pO1xuXG4gIGNvbnN0IGdlbmVyYXRlQ2VydGlmaWNhdGUgPSAoKSA9PiB7XG4gICAgaWYgKCFjYW52YXNSZWYuY3VycmVudCB8fCAhY291cnNlIHx8ICF1c2VyKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKCFjdHgpIHJldHVybjtcblxuICAgIC8vIFNldCBjYW52YXMgc2l6ZVxuICAgIGNhbnZhcy53aWR0aCA9IDEyMDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDg1MDtcblxuICAgIC8vIEJhY2tncm91bmQgZ3JhZGllbnRcbiAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAxMjAwLCA4NTApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnIzFhMWEyZScpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjUsICcjMTYyMTNlJyk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICcjMGYzNDYwJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCAxMjAwLCA4NTApO1xuXG4gICAgLy8gQm9yZGVyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyM2MzY2ZjEnO1xuICAgIGN0eC5saW5lV2lkdGggPSA4O1xuICAgIGN0eC5zdHJva2VSZWN0KDIwLCAyMCwgMTE2MCwgODEwKTtcblxuICAgIC8vIElubmVyIGJvcmRlclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjODE4Y2Y4JztcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlUmVjdCg0MCwgNDAsIDExMjAsIDc3MCk7XG5cbiAgICAvLyBEZWNvcmF0aXZlIGNvcm5lcnNcbiAgICBjb25zdCBjb3JuZXJTaXplID0gNjA7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyNhNzhiZmEnO1xuICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgIFxuICAgIC8vIFRvcC1sZWZ0IGNvcm5lclxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDQwLCAxMDApO1xuICAgIGN0eC5saW5lVG8oNDAsIDQwKTtcbiAgICBjdHgubGluZVRvKDEwMCwgNDApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICAvLyBUb3AtcmlnaHQgY29ybmVyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMTEwMCwgNDApO1xuICAgIGN0eC5saW5lVG8oMTE2MCwgNDApO1xuICAgIGN0eC5saW5lVG8oMTE2MCwgMTAwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgLy8gQm90dG9tLWxlZnQgY29ybmVyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oNDAsIDc1MCk7XG4gICAgY3R4LmxpbmVUbyg0MCwgODEwKTtcbiAgICBjdHgubGluZVRvKDEwMCwgODEwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgLy8gQm90dG9tLXJpZ2h0IGNvcm5lclxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDExMDAsIDgxMCk7XG4gICAgY3R4LmxpbmVUbygxMTYwLCA4MTApO1xuICAgIGN0eC5saW5lVG8oMTE2MCwgNzUwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyBMb2dvL0ljb24gYXJlYVxuICAgIGN0eC5maWxsU3R5bGUgPSAnIzYzNjZmMSc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoNjAwLCAxMjAsIDM1LCAwLCBNYXRoLlBJICogMik7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBcbiAgICAvLyBCcmFpbiBpY29uIChzaW1wbGlmaWVkKVxuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgY3R4LmZvbnQgPSAnYm9sZCA0MHB4IEFyaWFsJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY3R4LmZpbGxUZXh0KCfwn6egJywgNjAwLCAxMzUpO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xuICAgIGN0eC5mb250ID0gJ2JvbGQgNDhweCBHZW9yZ2lhLCBzZXJpZic7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGN0eC5maWxsVGV4dCh0ci5jZXJ0T2ZDb21wbGV0aW9uLCA2MDAsIDIyMCk7XG5cbiAgICAvLyBEZWNvcmF0aXZlIGxpbmVcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzYzNjZmMSc7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oNDAwLCAyNDApO1xuICAgIGN0eC5saW5lVG8oODAwLCAyNDApO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIC8vIFwiVGhpcyBpcyB0byBjZXJ0aWZ5IHRoYXRcIlxuICAgIGN0eC5maWxsU3R5bGUgPSAnI2E1YjRmYyc7XG4gICAgY3R4LmZvbnQgPSAnMjRweCBHZW9yZ2lhLCBzZXJpZic7XG4gICAgY3R4LmZpbGxUZXh0KHRyLnRoaXNJc1RvQ2VydGlmeSwgNjAwLCAzMDApO1xuXG4gICAgLy8gU3R1ZGVudCBuYW1lXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjdHguZm9udCA9ICdib2xkIDU2cHggR2VvcmdpYSwgc2VyaWYnO1xuICAgIGN0eC5maWxsVGV4dCh1c2VyLm5hbWUgfHwgJ1N0dWRlbnQgTmFtZScsIDYwMCwgMzgwKTtcblxuICAgIC8vIERlY29yYXRpdmUgbGluZSB1bmRlciBuYW1lXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyM4MThjZjgnO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDM1MCwgNDAwKTtcbiAgICBjdHgubGluZVRvKDg1MCwgNDAwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyBcImhhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkXCJcbiAgICBjdHguZmlsbFN0eWxlID0gJyNhNWI0ZmMnO1xuICAgIGN0eC5mb250ID0gJzI0cHggR2VvcmdpYSwgc2VyaWYnO1xuICAgIGN0eC5maWxsVGV4dCh0ci5zdWNjZXNzZnVsbHlDb21wbGV0ZWQsIDYwMCwgNDYwKTtcblxuICAgIC8vIENvdXJzZSBuYW1lXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjdHguZm9udCA9ICdib2xkIDM2cHggR2VvcmdpYSwgc2VyaWYnO1xuICAgIGN0eC5maWxsVGV4dChjb3Vyc2UudGl0bGUgfHwgJ0NvdXJzZSBOYW1lJywgNjAwLCA1MjApO1xuXG4gICAgLy8gRGF0ZVxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7IFxuICAgICAgeWVhcjogJ251bWVyaWMnLCBcbiAgICAgIG1vbnRoOiAnbG9uZycsIFxuICAgICAgZGF5OiAnbnVtZXJpYycgXG4gICAgfSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjYTViNGZjJztcbiAgICBjdHguZm9udCA9ICcyMHB4IEdlb3JnaWEsIHNlcmlmJztcbiAgICBjdHguZmlsbFRleHQoYCR7dHIuaXNzdWVkT259ICR7ZGF0ZX1gLCA2MDAsIDYwMCk7XG5cbiAgICAvLyBDZXJ0aWZpY2F0ZSBJRFxuICAgIGNvbnN0IGNlcnRJZCA9IGBORVVSTy0ke0RhdGUubm93KCkudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKCl9YDtcbiAgICBjdHguZmlsbFN0eWxlID0gJyM4MThjZjgnO1xuICAgIGN0eC5mb250ID0gJzE2cHggbW9ub3NwYWNlJztcbiAgICBjdHguZmlsbFRleHQoYCR7dHIuY2VydGlmaWNhdGVJZH06ICR7Y2VydElkfWAsIDYwMCwgNjUwKTtcblxuICAgIC8vIFNpZ25hdHVyZSBsaW5lXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyM2MzY2ZjEnO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDQ1MCwgNzIwKTtcbiAgICBjdHgubGluZVRvKDc1MCwgNzIwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gJyNhNWI0ZmMnO1xuICAgIGN0eC5mb250ID0gJzE4cHggR2VvcmdpYSwgc2VyaWYnO1xuICAgIGN0eC5maWxsVGV4dCgnTmV1cm8tRWR1IE9TJywgNjAwLCA3NTApO1xuXG4gICAgLy8gRm9vdGVyIHRleHRcbiAgICBjdHguZmlsbFN0eWxlID0gJyM2NDc0OGInO1xuICAgIGN0eC5mb250ID0gJzE0cHggQXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dCgnwqkgMjAyNiBOZXVyby1FZHUgT1MuIEFsbCByaWdodHMgcmVzZXJ2ZWQuJywgNjAwLCA3OTApO1xuICB9O1xuXG4gIGNvbnN0IGRvd25sb2FkQ2VydGlmaWNhdGUgPSAoKSA9PiB7XG4gICAgaWYgKCFjYW52YXNSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIFxuICAgIHNldEdlbmVyYXRpbmcodHJ1ZSk7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG4gICAgICBcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBsaW5rLmRvd25sb2FkID0gYGNlcnRpZmljYXRlLSR7Y291cnNlPy50aXRsZT8ucmVwbGFjZSgvXFxzKy9nLCAnLScpIHx8ICdjb3Vyc2UnfS0ke3VzZXI/Lm5hbWU/LnJlcGxhY2UoL1xccysvZywgJy0nKSB8fCAnc3R1ZGVudCd9LnBuZ2A7XG4gICAgICBsaW5rLmhyZWYgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgIFxuICAgICAgc2V0R2VuZXJhdGluZyhmYWxzZSk7XG4gICAgfSwgNTAwKTtcbiAgfTtcblxuICBpZiAoIWNvdXJzZSB8fCAhdXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1zdXJmYWNlLTkwMCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN1cmZhY2UtMjAwXCI+e3RyLmxvYWRpbmd9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLXN1cmZhY2UtOTAwIHRleHQtd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBncmlkLWJnIHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuXG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MCBnbGFzcyBib3JkZXItYiBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgc206cHgtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoYC9jb3Vyc2UvJHtjb3Vyc2VJZH1gKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zdXJmYWNlLTIwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFycm93TGVmdCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPnt0ci5iYWNrVG9Ib21lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNiBoLTYgcm91bmRlZC1tZCBiZy1ncmFkaWVudC10by1iciBmcm9tLWJyYW5kLTUwMCB0by1wdXJwbGUtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEJyYWluIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPnt0ci5jZXJ0aWZpY2F0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgc206cHgtNiBweS04XCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLThcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC0yeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1hbWJlci01MDAvMjAgdG8teWVsbG93LTUwMC8yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTZcIj5cbiAgICAgICAgICAgIDxBd2FyZCBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtYW1iZXItNDAwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTNcIj57dHIuY291cnNlQ29tcGxldGVkfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdXJmYWNlLTIwMFwiPnt0ci5jb25ncmF0c308L3A+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICB7LyogQ2VydGlmaWNhdGUgUHJldmlldyAqL31cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjk1IH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMiB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgYmctc3VyZmFjZS04MDAvMzAgcC02IG1iLTYgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LVsxMjAwLzg1MF0gdy1mdWxsIG1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJvdW5kZWQtbGcgc2hhZG93LTJ4bFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgey8qIERvd25sb2FkIEJ1dHRvbiAqL31cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4zIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtkb3dubG9hZENlcnRpZmljYXRlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2dlbmVyYXRpbmd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC04IHB5LTQgdGV4dC1sZyBmb250LXNlbWlib2xkIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1icmFuZC02MDAgdG8tcHVycGxlLTYwMCBob3Zlcjpmcm9tLWJyYW5kLTUwMCBob3Zlcjp0by1wdXJwbGUtNTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgc2hhZG93LXhsIHNoYWRvdy1icmFuZC02MDAvMjAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2dlbmVyYXRpbmcgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUgaC01IGJvcmRlci0yIGJvcmRlci13aGl0ZSBib3JkZXItdC10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICAgICAgICB7dHIuZ2VuZXJhdGluZ31cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICB7dHIuZG93bmxvYWRDZXJ0aWZpY2F0ZX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxGb290ZXIgbGFuZ3VhZ2U9e2xhbmd1YWdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvd29ya3NwYWNlL3NyYy9wYWdlcy9DZXJ0aWZpY2F0ZUdlbmVyYXRvci50c3gifQ==