"use strict";
(self["webpackChunkcopy_variables_pro"] = self["webpackChunkcopy_variables_pro"] || []).push([["src_components_ui_button_tsx"],{

/***/ "./src/components/ui/button.tsx":
/*!**************************************!*\
  !*** ./src/components/ui/button.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   buttonVariants: () => (/* binding */ buttonVariants),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-slot */ "./node_modules/@radix-ui/react-slot/dist/index.mjs");
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "./src/lib/utils.ts");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Button = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_a, ref) => {
    var { className, variant, size, asChild = false } = _a, props = __rest(_a, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot : "button";
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, Object.assign({ className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(buttonVariants({ variant, size, className })), ref: ref }, props)));
});
Button.displayName = "Button";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);



/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs");


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}


/***/ }),

/***/ "./node_modules/class-variance-authority/dist/index.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/class-variance-authority/dist/index.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cva: () => (/* binding */ cva),
/* harmony export */   cx: () => (/* binding */ cx)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/class-variance-authority/node_modules/clsx/dist/clsx.mjs");

const falsyToString = (value)=>typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
const cx = clsx__WEBPACK_IMPORTED_MODULE_0__.clsx;
const cva = (base, config)=>{
    return (props)=>{
        var ref;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants , defaultVariants  } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1)=>{
            let { class: cvClass , className: cvClassName , ...compoundVariantOptions } = param1;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
};


//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/class-variance-authority/node_modules/clsx/dist/clsx.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/class-variance-authority/node_modules/clsx/dist/clsx.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfdWlfYnV0dG9uX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGNBQWMsU0FBSSxJQUFJLFNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsY0FBYztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytCO0FBQ2E7QUFDRztBQUNkO0FBQ2pDLHVCQUF1Qiw2REFBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0QsZUFBZSw2Q0FBZ0I7QUFDL0IsVUFBVSw0Q0FBNEM7QUFDdEQsMkJBQTJCLHNEQUFJO0FBQy9CLFlBQVksZ0RBQW1CLHVCQUF1QixXQUFXLDhDQUFFLGtCQUFrQiwwQkFBMEIsY0FBYztBQUM3SCxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxNQUFNLEVBQUM7QUFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q047QUFDYTtBQUNsQztBQUNQLFdBQVcsdURBQU8sQ0FBQywwQ0FBSTtBQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKNEI7QUFDNUI7QUFDTyxXQUFXLHNDQUFJO0FBQ2Y7QUFDUDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOEJBQThCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0Esa0JBQWtCLHNFQUFzRTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQzdDQSxjQUFjLGFBQWEsK0NBQStDLHVEQUF1RCxXQUFXLDBDQUEwQyx5Q0FBeUMsU0FBZ0IsZ0JBQWdCLHFCQUFxQixtQkFBbUIsa0RBQWtELFNBQVMsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcHktdmFyaWFibGVzLXByby8uL3NyYy9jb21wb25lbnRzL3VpL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vY29weS12YXJpYWJsZXMtcHJvLy4vc3JjL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly9jb3B5LXZhcmlhYmxlcy1wcm8vLi9ub2RlX21vZHVsZXMvY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5L2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2NvcHktdmFyaWFibGVzLXByby8uL25vZGVfbW9kdWxlcy9jbGFzcy12YXJpYW5jZS1hdXRob3JpdHkvbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNsb3QgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjtcbmltcG9ydCB7IGN2YSB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5jb25zdCBidXR0b25WYXJpYW50cyA9IGN2YShcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTEgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwXCIsIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgICB2YXJpYW50OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBcImJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgc2hhZG93IGhvdmVyOmJnLXByaW1hcnkvOTBcIixcbiAgICAgICAgICAgIGRlc3RydWN0aXZlOiBcImJnLWRlc3RydWN0aXZlIHRleHQtZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZCBzaGFkb3ctc20gaG92ZXI6YmctZGVzdHJ1Y3RpdmUvOTBcIixcbiAgICAgICAgICAgIG91dGxpbmU6IFwiYm9yZGVyIGJvcmRlci1pbnB1dCBiZy1iYWNrZ3JvdW5kIHNoYWRvdy1zbSBob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgICAgICAgc2Vjb25kYXJ5OiBcImJnLXNlY29uZGFyeSB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIHNoYWRvdy1zbSBob3ZlcjpiZy1zZWNvbmRhcnkvODBcIixcbiAgICAgICAgICAgIGdob3N0OiBcImhvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgICAgICBsaW5rOiBcInRleHQtcHJpbWFyeSB1bmRlcmxpbmUtb2Zmc2V0LTQgaG92ZXI6dW5kZXJsaW5lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiaC05IHB4LTQgcHktMlwiLFxuICAgICAgICAgICAgc206IFwiaC04IHJvdW5kZWQtbWQgcHgtMyB0ZXh0LXhzXCIsXG4gICAgICAgICAgICBsZzogXCJoLTEwIHJvdW5kZWQtbWQgcHgtOFwiLFxuICAgICAgICAgICAgaWNvbjogXCJoLTkgdy05XCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxuICAgIH0sXG59KTtcbmNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKF9hLCByZWYpID0+IHtcbiAgICB2YXIgeyBjbGFzc05hbWUsIHZhcmlhbnQsIHNpemUsIGFzQ2hpbGQgPSBmYWxzZSB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIiwgXCJ2YXJpYW50XCIsIFwic2l6ZVwiLCBcImFzQ2hpbGRcIl0pO1xuICAgIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IFwiYnV0dG9uXCI7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KENvbXAsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNuKGJ1dHRvblZhcmlhbnRzKHsgdmFyaWFudCwgc2l6ZSwgY2xhc3NOYW1lIH0pKSwgcmVmOiByZWYgfSwgcHJvcHMpKSk7XG59KTtcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9IFwiQnV0dG9uXCI7XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5leHBvcnQgeyBCdXR0b24sIGJ1dHRvblZhcmlhbnRzIH07XG4iLCJpbXBvcnQgeyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IHR3TWVyZ2UgfSBmcm9tIFwidGFpbHdpbmQtbWVyZ2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBjbiguLi5pbnB1dHMpIHtcbiAgICByZXR1cm4gdHdNZXJnZShjbHN4KGlucHV0cykpO1xufVxuIiwiaW1wb3J0IHsgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG5jb25zdCBmYWxzeVRvU3RyaW5nID0gKHZhbHVlKT0+dHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiA/IFwiXCIuY29uY2F0KHZhbHVlKSA6IHZhbHVlID09PSAwID8gXCIwXCIgOiB2YWx1ZTtcbmV4cG9ydCBjb25zdCBjeCA9IGNsc3g7XG5leHBvcnQgY29uc3QgY3ZhID0gKGJhc2UsIGNvbmZpZyk9PntcbiAgICByZXR1cm4gKHByb3BzKT0+e1xuICAgICAgICB2YXIgcmVmO1xuICAgICAgICBpZiAoKGNvbmZpZyA9PT0gbnVsbCB8fCBjb25maWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmZpZy52YXJpYW50cykgPT0gbnVsbCkgcmV0dXJuIGN4KGJhc2UsIHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5jbGFzcywgcHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLmNsYXNzTmFtZSk7XG4gICAgICAgIGNvbnN0IHsgdmFyaWFudHMgLCBkZWZhdWx0VmFyaWFudHMgIH0gPSBjb25maWc7XG4gICAgICAgIGNvbnN0IGdldFZhcmlhbnRDbGFzc05hbWVzID0gT2JqZWN0LmtleXModmFyaWFudHMpLm1hcCgodmFyaWFudCk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRQcm9wID0gcHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzW3ZhcmlhbnRdO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhcmlhbnRQcm9wID0gZGVmYXVsdFZhcmlhbnRzID09PSBudWxsIHx8IGRlZmF1bHRWYXJpYW50cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVmYXVsdFZhcmlhbnRzW3ZhcmlhbnRdO1xuICAgICAgICAgICAgaWYgKHZhcmlhbnRQcm9wID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRLZXkgPSBmYWxzeVRvU3RyaW5nKHZhcmlhbnRQcm9wKSB8fCBmYWxzeVRvU3RyaW5nKGRlZmF1bHRWYXJpYW50UHJvcCk7XG4gICAgICAgICAgICByZXR1cm4gdmFyaWFudHNbdmFyaWFudF1bdmFyaWFudEtleV07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwcm9wc1dpdGhvdXRVbmRlZmluZWQgPSBwcm9wcyAmJiBPYmplY3QuZW50cmllcyhwcm9wcykucmVkdWNlKChhY2MsIHBhcmFtKT0+e1xuICAgICAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IHBhcmFtO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgY29uc3QgZ2V0Q29tcG91bmRWYXJpYW50Q2xhc3NOYW1lcyA9IGNvbmZpZyA9PT0gbnVsbCB8fCBjb25maWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYgPSBjb25maWcuY29tcG91bmRWYXJpYW50cykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucmVkdWNlKChhY2MsIHBhcmFtMSk9PntcbiAgICAgICAgICAgIGxldCB7IGNsYXNzOiBjdkNsYXNzICwgY2xhc3NOYW1lOiBjdkNsYXNzTmFtZSAsIC4uLmNvbXBvdW5kVmFyaWFudE9wdGlvbnMgfSA9IHBhcmFtMTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhjb21wb3VuZFZhcmlhbnRPcHRpb25zKS5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgICAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IHBhcmFtO1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmluY2x1ZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdFZhcmlhbnRzLFxuICAgICAgICAgICAgICAgICAgICAuLi5wcm9wc1dpdGhvdXRVbmRlZmluZWRcbiAgICAgICAgICAgICAgICB9W2tleV0pIDogKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdFZhcmlhbnRzLFxuICAgICAgICAgICAgICAgICAgICAuLi5wcm9wc1dpdGhvdXRVbmRlZmluZWRcbiAgICAgICAgICAgICAgICB9KVtrZXldID09PSB2YWx1ZTtcbiAgICAgICAgICAgIH0pID8gW1xuICAgICAgICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICAgICAgICBjdkNsYXNzLFxuICAgICAgICAgICAgICAgIGN2Q2xhc3NOYW1lXG4gICAgICAgICAgICBdIDogYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJldHVybiBjeChiYXNlLCBnZXRWYXJpYW50Q2xhc3NOYW1lcywgZ2V0Q29tcG91bmRWYXJpYW50Q2xhc3NOYW1lcywgcHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLmNsYXNzLCBwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuY2xhc3NOYW1lKTtcbiAgICB9O1xufTtcblxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIiwiZnVuY3Rpb24gcihlKXt2YXIgdCxmLG49XCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGUpbis9ZTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWlmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdJiYoZj1yKGVbdF0pKSYmKG4mJihuKz1cIiBcIiksbis9Zik7ZWxzZSBmb3IodCBpbiBlKWVbdF0mJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBmdW5jdGlvbiBjbHN4KCl7Zm9yKHZhciBlLHQsZj0wLG49XCJcIjtmPGFyZ3VtZW50cy5sZW5ndGg7KShlPWFyZ3VtZW50c1tmKytdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9