import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/LanguageToggle.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/components/LanguageToggle.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=6e0f127a";
import { Globe } from "/node_modules/.vite/deps/lucide-react.js?v=6a865639";
import { setLanguage as saveLanguage } from "/src/lib/i18n.ts";
export default function LanguageToggle({ language, onLanguageChange }) {
  const toggleLanguage = () => {
    const newLang = language === "en" ? "ur" : "en";
    saveLanguage(newLang);
    onLanguageChange(newLang);
  };
  return /* @__PURE__ */ jsxDEV(
    motion.button,
    {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      onClick: toggleLanguage,
      className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-800/50 border border-white/10 hover:border-brand-500/30 transition-all text-xs font-medium",
      title: language === "en" ? "Switch to Urdu" : "Switch to English",
      children: [
        /* @__PURE__ */ jsxDEV(Globe, { className: "w-3.5 h-3.5 text-brand-400" }, void 0, false, {
          fileName: "/workspace/src/components/LanguageToggle.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: language === "ur" ? "font-urdu" : "", children: language === "en" ? "اردو" : "EN" }, void 0, false, {
          fileName: "/workspace/src/components/LanguageToggle.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/workspace/src/components/LanguageToggle.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    this
  );
}
_c = LanguageToggle;
var _c;
$RefreshReg$(_c, "LanguageToggle");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/components/LanguageToggle.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/components/LanguageToggle.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBeUJNOzs7Ozs7Ozs7Ozs7Ozs7O0FBeEJOLFNBQVNBLGNBQWM7QUFDdkIsU0FBU0MsYUFBYTtBQUN0QixTQUFnQ0MsZUFBZUMsb0JBQW9CO0FBT25FLHdCQUF3QkMsZUFBZSxFQUFFQyxVQUFVQyxpQkFBc0MsR0FBRztBQUMxRixRQUFNQyxpQkFBaUJBLE1BQU07QUFDM0IsVUFBTUMsVUFBb0JILGFBQWEsT0FBTyxPQUFPO0FBQ3JERixpQkFBYUssT0FBTztBQUNwQkYscUJBQWlCRSxPQUFPO0FBQUEsRUFDMUI7QUFFQSxTQUNFO0FBQUEsSUFBQyxPQUFPO0FBQUEsSUFBUDtBQUFBLE1BQ0MsWUFBWSxFQUFFQyxPQUFPLEtBQUs7QUFBQSxNQUMxQixVQUFVLEVBQUVBLE9BQU8sS0FBSztBQUFBLE1BQ3hCLFNBQVNGO0FBQUFBLE1BQ1QsV0FBVTtBQUFBLE1BQ1YsT0FBT0YsYUFBYSxPQUFPLG1CQUFtQjtBQUFBLE1BRTlDO0FBQUEsK0JBQUMsU0FBTSxXQUFVLGdDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTZDO0FBQUEsUUFDN0MsdUJBQUMsVUFBSyxXQUFXQSxhQUFhLE9BQU8sY0FBYyxJQUNoREEsdUJBQWEsT0FBTyxTQUFTLFFBRGhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBO0FBQUE7QUFBQSxJQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVdBO0FBRUo7QUFBQ0ssS0FyQnVCTjtBQUFjLElBQUFNO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIm1vdGlvbiIsIkdsb2JlIiwic2V0TGFuZ3VhZ2UiLCJzYXZlTGFuZ3VhZ2UiLCJMYW5ndWFnZVRvZ2dsZSIsImxhbmd1YWdlIiwib25MYW5ndWFnZUNoYW5nZSIsInRvZ2dsZUxhbmd1YWdlIiwibmV3TGFuZyIsInNjYWxlIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTGFuZ3VhZ2VUb2dnbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBHbG9iZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBMYW5ndWFnZSwgZ2V0TGFuZ3VhZ2UsIHNldExhbmd1YWdlIGFzIHNhdmVMYW5ndWFnZSB9IGZyb20gJy4uL2xpYi9pMThuJztcblxuaW50ZXJmYWNlIExhbmd1YWdlVG9nZ2xlUHJvcHMge1xuICBsYW5ndWFnZTogTGFuZ3VhZ2U7XG4gIG9uTGFuZ3VhZ2VDaGFuZ2U6IChsYW5nOiBMYW5ndWFnZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZ3VhZ2VUb2dnbGUoeyBsYW5ndWFnZSwgb25MYW5ndWFnZUNoYW5nZSB9OiBMYW5ndWFnZVRvZ2dsZVByb3BzKSB7XG4gIGNvbnN0IHRvZ2dsZUxhbmd1YWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0xhbmc6IExhbmd1YWdlID0gbGFuZ3VhZ2UgPT09ICdlbicgPyAndXInIDogJ2VuJztcbiAgICBzYXZlTGFuZ3VhZ2UobmV3TGFuZyk7XG4gICAgb25MYW5ndWFnZUNoYW5nZShuZXdMYW5nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG4gICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NSB9fVxuICAgICAgb25DbGljaz17dG9nZ2xlTGFuZ3VhZ2V9XG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMgcHktMS41IHJvdW5kZWQtbGcgYmctc3VyZmFjZS04MDAvNTAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBob3Zlcjpib3JkZXItYnJhbmQtNTAwLzMwIHRyYW5zaXRpb24tYWxsIHRleHQteHMgZm9udC1tZWRpdW1cIlxuICAgICAgdGl0bGU9e2xhbmd1YWdlID09PSAnZW4nID8gJ1N3aXRjaCB0byBVcmR1JyA6ICdTd2l0Y2ggdG8gRW5nbGlzaCd9XG4gICAgPlxuICAgICAgPEdsb2JlIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtYnJhbmQtNDAwXCIgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17bGFuZ3VhZ2UgPT09ICd1cicgPyAnZm9udC11cmR1JyA6ICcnfT5cbiAgICAgICAge2xhbmd1YWdlID09PSAnZW4nID8gJ9in2LHYr9mIJyA6ICdFTid9XG4gICAgICA8L3NwYW4+XG4gICAgPC9tb3Rpb24uYnV0dG9uPlxuICApO1xufVxuIl0sImZpbGUiOiIvd29ya3NwYWNlL3NyYy9jb21wb25lbnRzL0xhbmd1YWdlVG9nZ2xlLnRzeCJ9