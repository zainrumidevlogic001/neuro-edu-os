import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Footer.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=620eb88c"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/workspace/src/components/Footer.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Brain } from "/node_modules/.vite/deps/lucide-react.js?v=6a865639";
import { t } from "/src/lib/i18n.ts";
export default function Footer({ language }) {
  const tr = t(language);
  return /* @__PURE__ */ jsxDEV("footer", { className: "border-t border-white/5 py-8 mt-16", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Brain, { className: "w-5 h-5 text-white" }, void 0, false, {
          fileName: "/workspace/src/components/Footer.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/workspace/src/components/Footer.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-semibold", children: "Neuro-Edu OS" }, void 0, false, {
          fileName: "/workspace/src/components/Footer.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/components/Footer.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200 text-center", children: [
        "© 2026 Neuro-Edu OS. ",
        tr.phase3
      ] }, void 0, true, {
        fileName: "/workspace/src/components/Footer.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-xs text-surface-200 hover:text-white transition-colors", children: "Privacy" }, void 0, false, {
          fileName: "/workspace/src/components/Footer.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-xs text-surface-200 hover:text-white transition-colors", children: "Terms" }, void 0, false, {
          fileName: "/workspace/src/components/Footer.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-xs text-surface-200 hover:text-white transition-colors", children: "Contact" }, void 0, false, {
          fileName: "/workspace/src/components/Footer.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/workspace/src/components/Footer.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/workspace/src/components/Footer.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-6 pt-6 border-t border-white/5 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-surface-200/60", children: [
      tr.builtWith,
      " • Phase 3 Complete"
    ] }, void 0, true, {
      fileName: "/workspace/src/components/Footer.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/workspace/src/components/Footer.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/workspace/src/components/Footer.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/workspace/src/components/Footer.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
_c = Footer;
var _c;
$RefreshReg$(_c, "Footer");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/workspace/src/components/Footer.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/workspace/src/components/Footer.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JjOzs7Ozs7Ozs7Ozs7Ozs7O0FBaEJkLFNBQVNBLGFBQWE7QUFDdEIsU0FBbUJDLFNBQVM7QUFNNUIsd0JBQXdCQyxPQUFPLEVBQUVDLFNBQXNCLEdBQUc7QUFDeEQsUUFBTUMsS0FBS0gsRUFBRUUsUUFBUTtBQUVyQixTQUNFLHVCQUFDLFlBQU8sV0FBVSxzQ0FDaEIsaUNBQUMsU0FBSSxXQUFVLDBDQUNiO0FBQUEsMkJBQUMsU0FBSSxXQUFVLGdFQUNiO0FBQUEsNkJBQUMsU0FBSSxXQUFVLDJCQUNiO0FBQUEsK0JBQUMsU0FBSSxXQUFVLHNHQUNiLGlDQUFDLFNBQU0sV0FBVSx3QkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFxQyxLQUR2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxRQUNBLHVCQUFDLFVBQUssV0FBVSx5QkFBd0IsNEJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBb0Q7QUFBQSxXQUp0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBS0E7QUFBQSxNQUVBLHVCQUFDLE9BQUUsV0FBVSx3Q0FBc0M7QUFBQTtBQUFBLFFBQzNCQyxHQUFHQztBQUFBQSxXQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxNQUVBLHVCQUFDLFNBQUksV0FBVSwyQkFDYjtBQUFBLCtCQUFDLE9BQUUsTUFBSyxLQUFJLFdBQVUsK0RBQTZELHVCQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxRQUNBLHVCQUFDLE9BQUUsTUFBSyxLQUFJLFdBQVUsK0RBQTZELHFCQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxRQUNBLHVCQUFDLE9BQUUsTUFBSyxLQUFJLFdBQVUsK0RBQTZELHVCQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxXQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFVQTtBQUFBLFNBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F1QkE7QUFBQSxJQUVBLHVCQUFDLFNBQUksV0FBVSxpREFDYixpQ0FBQyxPQUFFLFdBQVUsK0JBQ1ZEO0FBQUFBLFNBQUdFO0FBQUFBLE1BQVU7QUFBQSxTQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUE7QUFBQSxPQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBK0JBLEtBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FpQ0E7QUFFSjtBQUFDQyxLQXZDdUJMO0FBQU0sSUFBQUs7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiQnJhaW4iLCJ0IiwiRm9vdGVyIiwibGFuZ3VhZ2UiLCJ0ciIsInBoYXNlMyIsImJ1aWx0V2l0aCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkZvb3Rlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJhaW4gfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UsIHQgfSBmcm9tICcuLi9saWIvaTE4bic7XG5cbmludGVyZmFjZSBGb290ZXJQcm9wcyB7XG4gIGxhbmd1YWdlOiBMYW5ndWFnZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHsgbGFuZ3VhZ2UgfTogRm9vdGVyUHJvcHMpIHtcbiAgY29uc3QgdHIgPSB0KGxhbmd1YWdlKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItd2hpdGUvNSBweS04IG10LTE2XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtbGcgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1icmFuZC01MDAgdG8tcHVycGxlLTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8QnJhaW4gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkXCI+TmV1cm8tRWR1IE9TPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdXJmYWNlLTIwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgwqkgMjAyNiBOZXVyby1FZHUgT1MuIHt0ci5waGFzZTN9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN1cmZhY2UtMjAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgUHJpdmFjeVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICBUZXJtc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHB0LTYgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3VyZmFjZS0yMDAvNjBcIj5cbiAgICAgICAgICAgIHt0ci5idWlsdFdpdGh9IOKAoiBQaGFzZSAzIENvbXBsZXRlXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuIl0sImZpbGUiOiIvd29ya3NwYWNlL3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3gifQ==