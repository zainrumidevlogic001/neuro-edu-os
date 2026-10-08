import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/App.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { HashRouter, Routes, Route, Navigate } from "/node_modules/.vite/deps/react-router-dom.js?v=d53b2b6e";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=620eb88c"; const useState = __vite__cjsImport4_react["useState"]; const useEffect = __vite__cjsImport4_react["useEffect"];
import { getCurrentUser } from "/src/lib/store.ts";
import { getLanguage, setLanguage as saveLanguage } from "/src/lib/i18n.ts";
import Landing from "/src/pages/Landing.tsx?t=1791459422635";
import Login from "/src/pages/Login.tsx";
import TeacherDashboard from "/src/pages/TeacherDashboard.tsx";
import StudentDashboard from "/src/pages/StudentDashboard.tsx";
import CourseDetail from "/src/pages/CourseDetail.tsx";
import ProctoredQuiz from "/src/pages/ProctoredQuiz.tsx";
import OfflineManager from "/src/pages/OfflineManager.tsx";
import ParentPortal from "/src/pages/ParentPortal.tsx";
import CertificateGenerator from "/src/pages/CertificateGenerator.tsx";
function App() {
  _s();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(getLanguage());
  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
    document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = language === "ur" ? "ur" : "en";
  }, []);
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    saveLanguage(lang);
  };
  if (loading) {
    return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" }, void 0, false, {
        fileName: "/workspace/src/App.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-surface-200 text-sm", children: "Loading Neuro-Edu OS..." }, void 0, false, {
        fileName: "/workspace/src/App.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/App.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/App.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(HashRouter, { children: /* @__PURE__ */ jsxDEV(Routes, { children: [
    /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Landing, { user, setUser, language, onLanguageChange: handleLanguageChange }, void 0, false, {
      fileName: "/workspace/src/App.tsx",
      lineNumber: 68,
      columnNumber: 34
    }, this) }, void 0, false, {
      fileName: "/workspace/src/App.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/login", element: /* @__PURE__ */ jsxDEV(Login, { setUser, language, onLanguageChange: handleLanguageChange }, void 0, false, {
      fileName: "/workspace/src/App.tsx",
      lineNumber: 69,
      columnNumber: 39
    }, this) }, void 0, false, {
      fileName: "/workspace/src/App.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(
      Route,
      {
        path: "/teacher",
        element: user?.role === "TEACHER" || user?.role === "ADMIN" ? /* @__PURE__ */ jsxDEV(TeacherDashboard, { user, language, onLanguageChange: handleLanguageChange }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/workspace/src/App.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      Route,
      {
        path: "/student",
        element: user ? /* @__PURE__ */ jsxDEV(StudentDashboard, { user, language, onLanguageChange: handleLanguageChange }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/workspace/src/App.tsx",
        lineNumber: 76,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      Route,
      {
        path: "/course/:id",
        element: user ? /* @__PURE__ */ jsxDEV(CourseDetail, { user, language, onLanguageChange: handleLanguageChange }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/workspace/src/App.tsx",
        lineNumber: 82,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      Route,
      {
        path: "/quiz",
        element: user ? /* @__PURE__ */ jsxDEV(ProctoredQuiz, { user, language }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/workspace/src/App.tsx",
        lineNumber: 88,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      Route,
      {
        path: "/offline",
        element: user ? /* @__PURE__ */ jsxDEV(OfflineManager, { user, language }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/workspace/src/App.tsx",
        lineNumber: 94,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      Route,
      {
        path: "/parent",
        element: /* @__PURE__ */ jsxDEV(ParentPortal, { language }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 102,
          columnNumber: 20
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/workspace/src/App.tsx",
        lineNumber: 100,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      Route,
      {
        path: "/certificate/:courseId",
        element: user ? /* @__PURE__ */ jsxDEV(CertificateGenerator, { language }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
          fileName: "/workspace/src/App.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/workspace/src/App.tsx",
        lineNumber: 104,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/workspace/src/App.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/workspace/src/App.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
_s(App, "nZHe3sDPEogUWEv1vN4NkCL8v84=");
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUVoRDtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsTUFBSztBQUFBLFFBQ0wsU0FBU0EsT0FDTCx1QkFBQyx3QkFBcUIsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF5QyxJQUN6Qyx1QkFBQyxZQUFTLElBQUcsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXFCO0FBQUE7QUFBQSxNQUozQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJK0I7QUFBQSxPQXpDakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTJDQSxLQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBNkNBO0FBRUo7QUFBQ0QsR0EvRVFELEtBQUc7QUFBQSxLQUFIQTtBQWlGVCxlQUFlQTtBQUFJLElBQUFjO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIkhhc2hSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIk5hdmlnYXRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRDdXJyZW50VXNlciIsImdldExhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzYXZlTGFuZ3VhZ2UiLCJMYW5kaW5nIiwiTG9naW4iLCJUZWFjaGVyRGFzaGJvYXJkIiwiU3R1ZGVudERhc2hib2FyZCIsIkNvdXJzZURldGFpbCIsIlByb2N0b3JlZFF1aXoiLCJPZmZsaW5lTWFuYWdlciIsIlBhcmVudFBvcnRhbCIsIkNlcnRpZmljYXRlR2VuZXJhdG9yIiwiQXBwIiwiX3MiLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibGFuZ3VhZ2UiLCJjdXJyZW50VXNlciIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZGlyIiwibGFuZyIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwicm9sZSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGVzLCBSb3V0ZSwgTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciwgVXNlciB9IGZyb20gJy4vbGliL3N0b3JlJztcbmltcG9ydCB7IGdldExhbmd1YWdlLCBzZXRMYW5ndWFnZSBhcyBzYXZlTGFuZ3VhZ2UsIExhbmd1YWdlIH0gZnJvbSAnLi9saWIvaTE4bic7XG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL3BhZ2VzL0xhbmRpbmcnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vcGFnZXMvTG9naW4nO1xuaW1wb3J0IFRlYWNoZXJEYXNoYm9hcmQgZnJvbSAnLi9wYWdlcy9UZWFjaGVyRGFzaGJvYXJkJztcbmltcG9ydCBTdHVkZW50RGFzaGJvYXJkIGZyb20gJy4vcGFnZXMvU3R1ZGVudERhc2hib2FyZCc7XG5pbXBvcnQgQ291cnNlRGV0YWlsIGZyb20gJy4vcGFnZXMvQ291cnNlRGV0YWlsJztcbmltcG9ydCBQcm9jdG9yZWRRdWl6IGZyb20gJy4vcGFnZXMvUHJvY3RvcmVkUXVpeic7XG5pbXBvcnQgT2ZmbGluZU1hbmFnZXIgZnJvbSAnLi9wYWdlcy9PZmZsaW5lTWFuYWdlcic7XG5pbXBvcnQgUGFyZW50UG9ydGFsIGZyb20gJy4vcGFnZXMvUGFyZW50UG9ydGFsJztcbmltcG9ydCBDZXJ0aWZpY2F0ZUdlbmVyYXRvciBmcm9tICcuL3BhZ2VzL0NlcnRpZmljYXRlR2VuZXJhdG9yJztcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlPExhbmd1YWdlPihnZXRMYW5ndWFnZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcbiAgICBzZXRVc2VyKGN1cnJlbnRVc2VyKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBcbiAgICAvLyBTZXQgaW5pdGlhbCBsYW5ndWFnZSBkaXJlY3Rpb25cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID0gbGFuZ3VhZ2UgPT09ICd1cicgPyAncnRsJyA6ICdsdHInO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gbGFuZ3VhZ2UgPT09ICd1cicgPyAndXInIDogJ2VuJztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUxhbmd1YWdlQ2hhbmdlID0gKGxhbmc6IExhbmd1YWdlKSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UobGFuZyk7XG4gICAgc2F2ZUxhbmd1YWdlKGxhbmcpO1xuICB9O1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLXN1cmZhY2UtOTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCBib3JkZXItMiBib3JkZXItYnJhbmQtNTAwIGJvcmRlci10LXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3VyZmFjZS0yMDAgdGV4dC1zbVwiPkxvYWRpbmcgTmV1cm8tRWR1IE9TLi4uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIYXNoUm91dGVyPlxuICAgICAgPFJvdXRlcz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PExhbmRpbmcgdXNlcj17dXNlcn0gc2V0VXNlcj17c2V0VXNlcn0gbGFuZ3VhZ2U9e2xhbmd1YWdlfSBvbkxhbmd1YWdlQ2hhbmdlPXtoYW5kbGVMYW5ndWFnZUNoYW5nZX0gLz59IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luIHNldFVzZXI9e3NldFVzZXJ9IGxhbmd1YWdlPXtsYW5ndWFnZX0gb25MYW5ndWFnZUNoYW5nZT17aGFuZGxlTGFuZ3VhZ2VDaGFuZ2V9IC8+fSAvPlxuICAgICAgICA8Um91dGUgXG4gICAgICAgICAgcGF0aD1cIi90ZWFjaGVyXCIgXG4gICAgICAgICAgZWxlbWVudD17dXNlcj8ucm9sZSA9PT0gJ1RFQUNIRVInIHx8IHVzZXI/LnJvbGUgPT09ICdBRE1JTicgXG4gICAgICAgICAgICA/IDxUZWFjaGVyRGFzaGJvYXJkIHVzZXI9e3VzZXIhfSBsYW5ndWFnZT17bGFuZ3VhZ2V9IG9uTGFuZ3VhZ2VDaGFuZ2U9e2hhbmRsZUxhbmd1YWdlQ2hhbmdlfSAvPiBcbiAgICAgICAgICAgIDogPE5hdmlnYXRlIHRvPVwiL2xvZ2luXCIgLz59IFxuICAgICAgICAvPlxuICAgICAgICA8Um91dGUgXG4gICAgICAgICAgcGF0aD1cIi9zdHVkZW50XCIgXG4gICAgICAgICAgZWxlbWVudD17dXNlciBcbiAgICAgICAgICAgID8gPFN0dWRlbnREYXNoYm9hcmQgdXNlcj17dXNlcn0gbGFuZ3VhZ2U9e2xhbmd1YWdlfSBvbkxhbmd1YWdlQ2hhbmdlPXtoYW5kbGVMYW5ndWFnZUNoYW5nZX0gLz4gXG4gICAgICAgICAgICA6IDxOYXZpZ2F0ZSB0bz1cIi9sb2dpblwiIC8+fSBcbiAgICAgICAgLz5cbiAgICAgICAgPFJvdXRlIFxuICAgICAgICAgIHBhdGg9XCIvY291cnNlLzppZFwiIFxuICAgICAgICAgIGVsZW1lbnQ9e3VzZXIgXG4gICAgICAgICAgICA/IDxDb3Vyc2VEZXRhaWwgdXNlcj17dXNlcn0gbGFuZ3VhZ2U9e2xhbmd1YWdlfSBvbkxhbmd1YWdlQ2hhbmdlPXtoYW5kbGVMYW5ndWFnZUNoYW5nZX0gLz4gXG4gICAgICAgICAgICA6IDxOYXZpZ2F0ZSB0bz1cIi9sb2dpblwiIC8+fSBcbiAgICAgICAgLz5cbiAgICAgICAgPFJvdXRlIFxuICAgICAgICAgIHBhdGg9XCIvcXVpelwiIFxuICAgICAgICAgIGVsZW1lbnQ9e3VzZXIgXG4gICAgICAgICAgICA/IDxQcm9jdG9yZWRRdWl6IHVzZXI9e3VzZXJ9IGxhbmd1YWdlPXtsYW5ndWFnZX0gLz4gXG4gICAgICAgICAgICA6IDxOYXZpZ2F0ZSB0bz1cIi9sb2dpblwiIC8+fSBcbiAgICAgICAgLz5cbiAgICAgICAgPFJvdXRlIFxuICAgICAgICAgIHBhdGg9XCIvb2ZmbGluZVwiIFxuICAgICAgICAgIGVsZW1lbnQ9e3VzZXIgXG4gICAgICAgICAgICA/IDxPZmZsaW5lTWFuYWdlciB1c2VyPXt1c2VyfSBsYW5ndWFnZT17bGFuZ3VhZ2V9IC8+IFxuICAgICAgICAgICAgOiA8TmF2aWdhdGUgdG89XCIvbG9naW5cIiAvPn0gXG4gICAgICAgIC8+XG4gICAgICAgIDxSb3V0ZSBcbiAgICAgICAgICBwYXRoPVwiL3BhcmVudFwiIFxuICAgICAgICAgIGVsZW1lbnQ9ezxQYXJlbnRQb3J0YWwgbGFuZ3VhZ2U9e2xhbmd1YWdlfSAvPn0gXG4gICAgICAgIC8+XG4gICAgICAgIDxSb3V0ZSBcbiAgICAgICAgICBwYXRoPVwiL2NlcnRpZmljYXRlLzpjb3Vyc2VJZFwiIFxuICAgICAgICAgIGVsZW1lbnQ9e3VzZXIgXG4gICAgICAgICAgICA/IDxDZXJ0aWZpY2F0ZUdlbmVyYXRvciBsYW5ndWFnZT17bGFuZ3VhZ2V9IC8+IFxuICAgICAgICAgICAgOiA8TmF2aWdhdGUgdG89XCIvbG9naW5cIiAvPn0gXG4gICAgICAgIC8+XG4gICAgICA8L1JvdXRlcz5cbiAgICA8L0hhc2hSb3V0ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJmaWxlIjoiL3dvcmtzcGFjZS9zcmMvQXBwLnRzeCJ9