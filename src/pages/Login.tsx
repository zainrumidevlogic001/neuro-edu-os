import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Login.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/pages/Login.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=620eb88c"; const useState = __vite__cjsImport3_react["useState"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=d53b2b6e";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=6e0f127a";
import { Brain, ArrowLeft, Eye, EyeOff } from "/node_modules/.vite/deps/lucide-react.js?v=6a865639";
import { login, register } from "/src/lib/store.ts";
import { t } from "/src/lib/i18n.ts";
import LanguageToggle from "/src/components/LanguageToggle.tsx";
import Footer from "/src/components/Footer.tsx";
export default function Login({ setUser, language, onLanguageChange }) {
  _s();
  const tr = t(language);
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (isRegister) {
      if (!name || !email || !password) {
        setError("All fields are required");
        return;
      }
      try {
        const user = register(name, email, password, role);
        setUser(user);
        navigate(role === "TEACHER" ? "/teacher" : "/student");
      } catch (err) {
        setError(err.message);
      }
    } else {
      if (!email || !password) {
        setError("All fields are required");
        return;
      }
      const user = login(email, password);
      if (user) {
        setUser(user);
        navigate(user.role === "TEACHER" ? "/teacher" : "/student");
      } else {
        setError("Invalid credentials. Try registering first.");
      }
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-surface-900 text-white flex flex-col", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 grid-bg pointer-events-none" }, void 0, false, {
      fileName: "/workspace/src/pages/Login.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" }, void 0, false, {
      fileName: "/workspace/src/pages/Login.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 p-4", children: /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: () => navigate("/"),
        className: "flex items-center gap-2 text-sm text-surface-200 hover:text-white transition-colors",
        children: [
          /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/workspace/src/pages/Login.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this),
          "Back to Home"
        ]
      },
      void 0,
      true,
      {
        fileName: "/workspace/src/pages/Login.tsx",
        lineNumber: 86,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/workspace/src/pages/Login.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex items-center justify-center px-4 pb-12", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "w-full max-w-md",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(Brain, { className: "w-7 h-7 text-white" }, void 0, false, {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 104,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 103,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl font-bold", children: isRegister ? "Create your account" : "Welcome back" }, void 0, false, {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 106,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-surface-200 mt-2", children: isRegister ? "Start your learning journey today" : "Sign in to continue learning" }, void 0, false, {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 109,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/Login.tsx",
            lineNumber: 102,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            isRegister && /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-surface-200 mb-1.5", children: "Full Name" }, void 0, false, {
                fileName: "/workspace/src/pages/Login.tsx",
                lineNumber: 117,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  placeholder: "John Doe",
                  className: "w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-white/10 text-white placeholder:text-surface-200/50 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                },
                void 0,
                false,
                {
                  fileName: "/workspace/src/pages/Login.tsx",
                  lineNumber: 118,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 116,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-surface-200 mb-1.5", children: "Email" }, void 0, false, {
                fileName: "/workspace/src/pages/Login.tsx",
                lineNumber: 129,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  placeholder: "you@example.com",
                  className: "w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-white/10 text-white placeholder:text-surface-200/50 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                },
                void 0,
                false,
                {
                  fileName: "/workspace/src/pages/Login.tsx",
                  lineNumber: 130,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 128,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-surface-200 mb-1.5", children: "Password" }, void 0, false, {
                fileName: "/workspace/src/pages/Login.tsx",
                lineNumber: 140,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: showPassword ? "text" : "password",
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    placeholder: "••••••••",
                    className: "w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-white/10 text-white placeholder:text-surface-200/50 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all pr-12"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/workspace/src/pages/Login.tsx",
                    lineNumber: 142,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword(!showPassword),
                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-surface-200 hover:text-white",
                    children: showPassword ? /* @__PURE__ */ jsxDEV(EyeOff, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/workspace/src/pages/Login.tsx",
                      lineNumber: 154,
                      columnNumber: 35
                    }, this) : /* @__PURE__ */ jsxDEV(Eye, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/workspace/src/pages/Login.tsx",
                      lineNumber: 154,
                      columnNumber: 68
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/workspace/src/pages/Login.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/Login.tsx",
                lineNumber: 141,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 139,
              columnNumber: 13
            }, this),
            isRegister && /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-surface-200 mb-1.5", children: "I am a" }, void 0, false, {
                fileName: "/workspace/src/pages/Login.tsx",
                lineNumber: 161,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => setRole("STUDENT"),
                    className: `p-3 rounded-xl border text-sm font-medium transition-all ${role === "STUDENT" ? "border-brand-500/50 bg-brand-500/10 text-brand-300" : "border-white/10 bg-surface-800/50 text-surface-200 hover:border-white/20"}`,
                    children: "🎓 Student"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/workspace/src/pages/Login.tsx",
                    lineNumber: 163,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => setRole("TEACHER"),
                    className: `p-3 rounded-xl border text-sm font-medium transition-all ${role === "TEACHER" ? "border-brand-500/50 bg-brand-500/10 text-brand-300" : "border-white/10 bg-surface-800/50 text-surface-200 hover:border-white/20"}`,
                    children: "👨‍🏫 Teacher"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/workspace/src/pages/Login.tsx",
                    lineNumber: 174,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/workspace/src/pages/Login.tsx",
                lineNumber: 162,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 160,
              columnNumber: 13
            }, this),
            error && /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-300", children: error }, void 0, false, {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 190,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "submit",
                className: "w-full px-4 py-3.5 text-sm font-semibold bg-brand-600 hover:bg-brand-500 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/20",
                children: isRegister ? "Create Account" : "Sign In"
              },
              void 0,
              false,
              {
                fileName: "/workspace/src/pages/Login.tsx",
                lineNumber: 195,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/Login.tsx",
            lineNumber: 114,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => {
                setIsRegister(!isRegister);
                setError("");
              },
              className: "text-sm text-surface-200 hover:text-white transition-colors",
              children: isRegister ? "Already have an account? Sign in" : "Don't have an account? Register"
            },
            void 0,
            false,
            {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 204,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/workspace/src/pages/Login.tsx",
            lineNumber: 203,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-8 p-4 rounded-xl bg-surface-800/30 border border-white/5", children: /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 text-center", children: [
            "💡 ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Demo:" }, void 0, false, {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 215,
              columnNumber: 18
            }, this),
            " Register as a Teacher or Student to explore the dashboards. All data is stored locally in your browser."
          ] }, void 0, true, {
            fileName: "/workspace/src/pages/Login.tsx",
            lineNumber: 214,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/workspace/src/pages/Login.tsx",
            lineNumber: 213,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => navigate("/parent"),
              className: "text-xs text-brand-400 hover:text-brand-300 transition-colors",
              children: "🏠 Parent Portal →"
            },
            void 0,
            false,
            {
              fileName: "/workspace/src/pages/Login.tsx",
              lineNumber: 222,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/workspace/src/pages/Login.tsx",
            lineNumber: 221,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/workspace/src/pages/Login.tsx",
        lineNumber: 97,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/workspace/src/pages/Login.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "fixed bottom-4 right-4 z-50", children: /* @__PURE__ */ jsxDEV(LanguageToggle, { language, onLanguageChange }, void 0, false, {
      fileName: "/workspace/src/pages/Login.tsx",
      lineNumber: 234,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/workspace/src/pages/Login.tsx",
      lineNumber: 233,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { language }, void 0, false, {
      fileName: "/workspace/src/pages/Login.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/workspace/src/pages/Login.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}
_s(Login, "05kW9/zKor37LKzjstGGfOf0dCE=", false, function() {
  return [useNavigate];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/pages/Login.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/pages/Login.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VOYXZpZ2F0ZSIsIm1vdGlvbiIsIkJyYWluIiwiQXJyb3dMZWZ0IiwiRXllIiwiRXllT2ZmIiwibG9naW4iLCJyZWdpc3RlciIsInQiLCJMYW5ndWFnZVRvZ2dsZSIsIkZvb3RlciIsIkxvZ2luIiwic2V0VXNlciIsImxhbmd1YWdlIiwib25MYW5ndWFnZUNoYW5nZSIsIl9zIiwidHIiLCJuYXZpZ2F0ZSIsImlzUmVnaXN0ZXIiLCJzZXRJc1JlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvbGUiLCJzZXRSb2xlIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJlcnIiLCJtZXNzYWdlIiwib3BhY2l0eSIsInkiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkxvZ2luLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IEJyYWluLCBBcnJvd0xlZnQsIEV5ZSwgRXllT2ZmIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IGxvZ2luLCByZWdpc3RlciwgVXNlciB9IGZyb20gJy4uL2xpYi9zdG9yZSc7XG5cbmltcG9ydCB7IExhbmd1YWdlLCB0IH0gZnJvbSAnLi4vbGliL2kxOG4nO1xuaW1wb3J0IExhbmd1YWdlVG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvTGFuZ3VhZ2VUb2dnbGUnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmludGVyZmFjZSBMb2dpblByb3BzIHtcbiAgc2V0VXNlcjogKHVzZXI6IFVzZXIgfCBudWxsKSA9PiB2b2lkO1xuICBsYW5ndWFnZTogTGFuZ3VhZ2U7XG4gIG9uTGFuZ3VhZ2VDaGFuZ2U6IChsYW5nOiBMYW5ndWFnZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oeyBzZXRVc2VyLCBsYW5ndWFnZSwgb25MYW5ndWFnZUNoYW5nZSB9OiBMb2dpblByb3BzKSB7XG4gIGNvbnN0IHRyID0gdChsYW5ndWFnZSk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgW2lzUmVnaXN0ZXIsIHNldElzUmVnaXN0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGU8J1NUVURFTlQnIHwgJ1RFQUNIRVInPignU1RVREVOVCcpO1xuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldEVycm9yKCcnKTtcblxuICAgIGlmIChpc1JlZ2lzdGVyKSB7XG4gICAgICBpZiAoIW5hbWUgfHwgIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgICAgICBzZXRFcnJvcignQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlciA9IHJlZ2lzdGVyKG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcm9sZSk7XG4gICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICAgIG5hdmlnYXRlKHJvbGUgPT09ICdURUFDSEVSJyA/ICcvdGVhY2hlcicgOiAnL3N0dWRlbnQnKTtcbiAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgc2V0RXJyb3IoJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZXIgPSBsb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICAgICAgbmF2aWdhdGUodXNlci5yb2xlID09PSAnVEVBQ0hFUicgPyAnL3RlYWNoZXInIDogJy9zdHVkZW50Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcignSW52YWxpZCBjcmVkZW50aWFscy4gVHJ5IHJlZ2lzdGVyaW5nIGZpcnN0LicpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLXN1cmZhY2UtOTAwIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgey8qIEJhY2tncm91bmQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZ3JpZC1iZyBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTEvNCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHctWzYwMHB4XSBoLVs0MDBweF0gYmctYnJhbmQtNjAwLzUgcm91bmRlZC1mdWxsIGJsdXItWzEyMHB4XSBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cblxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBwLTRcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvJyl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICA+XG4gICAgICAgICAgPEFycm93TGVmdCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICBCYWNrIHRvIEhvbWVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEZvcm0gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IHBiLTEyXCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1icmFuZC01MDAgdG8tcHVycGxlLTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTRcIj5cbiAgICAgICAgICAgICAgPEJyYWluIGNsYXNzTmFtZT1cInctNyBoLTcgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAge2lzUmVnaXN0ZXIgPyAnQ3JlYXRlIHlvdXIgYWNjb3VudCcgOiAnV2VsY29tZSBiYWNrJ31cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3VyZmFjZS0yMDAgbXQtMlwiPlxuICAgICAgICAgICAgICB7aXNSZWdpc3RlciA/ICdTdGFydCB5b3VyIGxlYXJuaW5nIGpvdXJuZXkgdG9kYXknIDogJ1NpZ24gaW4gdG8gY29udGludWUgbGVhcm5pbmcnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICB7aXNSZWdpc3RlciAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zdXJmYWNlLTIwMCBtYi0xLjVcIj5GdWxsIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0zIHJvdW5kZWQteGwgYmctc3VyZmFjZS04MDAvNTAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyOnRleHQtc3VyZmFjZS0yMDAvNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1icmFuZC01MDAvNTAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctYnJhbmQtNTAwLzIwIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc3VyZmFjZS0yMDAgbWItMS41XCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdUBleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLXhsIGJnLXN1cmZhY2UtODAwLzUwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgdGV4dC13aGl0ZSBwbGFjZWhvbGRlcjp0ZXh0LXN1cmZhY2UtMjAwLzUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYnJhbmQtNTAwLzUwIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLWJyYW5kLTUwMC8yMCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zdXJmYWNlLTIwMCBtYi0xLjVcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgcm91bmRlZC14bCBiZy1zdXJmYWNlLTgwMC81MCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRleHQtd2hpdGUgcGxhY2Vob2xkZXI6dGV4dC1zdXJmYWNlLTIwMC81MCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJyYW5kLTUwMC81MCBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1icmFuZC01MDAvMjAgdHJhbnNpdGlvbi1hbGwgcHItMTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0zIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyA8RXllT2ZmIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPiA6IDxFeWUgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7aXNSZWdpc3RlciAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zdXJmYWNlLTIwMCBtYi0xLjVcIj5JIGFtIGE8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Um9sZSgnU1RVREVOVCcpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTMgcm91bmRlZC14bCBib3JkZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgICAgIHJvbGUgPT09ICdTVFVERU5UJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLWJyYW5kLTUwMC81MCBiZy1icmFuZC01MDAvMTAgdGV4dC1icmFuZC0zMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItd2hpdGUvMTAgYmctc3VyZmFjZS04MDAvNTAgdGV4dC1zdXJmYWNlLTIwMCBob3Zlcjpib3JkZXItd2hpdGUvMjAnXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDwn46TIFN0dWRlbnRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Um9sZSgnVEVBQ0hFUicpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTMgcm91bmRlZC14bCBib3JkZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgICAgIHJvbGUgPT09ICdURUFDSEVSJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLWJyYW5kLTUwMC81MCBiZy1icmFuZC01MDAvMTAgdGV4dC1icmFuZC0zMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItd2hpdGUvMTAgYmctc3VyZmFjZS04MDAvNTAgdGV4dC1zdXJmYWNlLTIwMCBob3Zlcjpib3JkZXItd2hpdGUvMjAnXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDwn5Go4oCN8J+PqyBUZWFjaGVyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLXhsIGJnLXJlZC01MDAvMTAgYm9yZGVyIGJvcmRlci1yZWQtNTAwLzIwIHRleHQtc20gdGV4dC1yZWQtMzAwXCI+XG4gICAgICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgYmctYnJhbmQtNjAwIGhvdmVyOmJnLWJyYW5kLTUwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy1sZyBob3ZlcjpzaGFkb3ctYnJhbmQtNjAwLzIwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2lzUmVnaXN0ZXIgPyAnQ3JlYXRlIEFjY291bnQnIDogJ1NpZ24gSW4nfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0SXNSZWdpc3RlcighaXNSZWdpc3Rlcik7IHNldEVycm9yKCcnKTsgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNSZWdpc3RlciA/ICdBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gU2lnbiBpbicgOiBcIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gUmVnaXN0ZXJcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIERlbW8gaGludCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggcC00IHJvdW5kZWQteGwgYmctc3VyZmFjZS04MDAvMzAgYm9yZGVyIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAg8J+SoSA8c3Ryb25nPkRlbW86PC9zdHJvbmc+IFJlZ2lzdGVyIGFzIGEgVGVhY2hlciBvciBTdHVkZW50IHRvIGV4cGxvcmUgdGhlIGRhc2hib2FyZHMuIFxuICAgICAgICAgICAgICBBbGwgZGF0YSBpcyBzdG9yZWQgbG9jYWxseSBpbiB5b3VyIGJyb3dzZXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUGFyZW50IFBvcnRhbCBMaW5rICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL3BhcmVudCcpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYnJhbmQtNDAwIGhvdmVyOnRleHQtYnJhbmQtMzAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg8J+PoCBQYXJlbnQgUG9ydGFsIOKGklxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTGFuZ3VhZ2UgVG9nZ2xlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00IHotNTBcIj5cbiAgICAgICAgPExhbmd1YWdlVG9nZ2xlIGxhbmd1YWdlPXtsYW5ndWFnZX0gb25MYW5ndWFnZUNoYW5nZT17b25MYW5ndWFnZUNoYW5nZX0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Rm9vdGVyIGxhbmd1YWdlPXtsYW5ndWFnZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL3dvcmtzcGFjZS9zcmMvcGFnZXMvTG9naW4udHN4In0=