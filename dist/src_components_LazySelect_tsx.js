"use strict";
(self["webpackChunkcopy_variables_pro"] = self["webpackChunkcopy_variables_pro"] || []).push([["src_components_LazySelect_tsx"],{

/***/ "./src/components/LazySelect.tsx":
/*!***************************************!*\
  !*** ./src/components/LazySelect.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/select */ "./src/components/ui/select.tsx");


const LazySelect = ({ onValueChange, collections }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_select__WEBPACK_IMPORTED_MODULE_1__.Select, { onValueChange: onValueChange },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_select__WEBPACK_IMPORTED_MODULE_1__.SelectTrigger, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_select__WEBPACK_IMPORTED_MODULE_1__.SelectValue, { placeholder: "Select a Collection" })),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_select__WEBPACK_IMPORTED_MODULE_1__.SelectContent, null, collections.map((collection) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_select__WEBPACK_IMPORTED_MODULE_1__.SelectItem, { key: collection.id, value: collection.id }, collection.name))))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LazySelect);


/***/ }),

/***/ "./src/components/ui/select.tsx":
/*!**************************************!*\
  !*** ./src/components/ui/select.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select),
/* harmony export */   SelectContent: () => (/* binding */ SelectContent),
/* harmony export */   SelectGroup: () => (/* binding */ SelectGroup),
/* harmony export */   SelectItem: () => (/* binding */ SelectItem),
/* harmony export */   SelectLabel: () => (/* binding */ SelectLabel),
/* harmony export */   SelectScrollDownButton: () => (/* binding */ SelectScrollDownButton),
/* harmony export */   SelectScrollUpButton: () => (/* binding */ SelectScrollUpButton),
/* harmony export */   SelectSeparator: () => (/* binding */ SelectSeparator),
/* harmony export */   SelectTrigger: () => (/* binding */ SelectTrigger),
/* harmony export */   SelectValue: () => (/* binding */ SelectValue),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-icons */ "./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js");
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-select */ "./node_modules/@radix-ui/react-select/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ "./src/lib/utils.ts");
"use client";
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




const Select = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Root;
const SelectGroup = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Group;
const SelectValue = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Value;
const SelectTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Trigger, Object.assign({ ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className) }, props),
        children,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Icon, { asChild: true },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_3__.CaretSortIcon, { className: "h-4 w-4 opacity-50" }))));
});
SelectTrigger.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Trigger.displayName;
const SelectScrollUpButton = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ScrollUpButton, Object.assign({ ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("flex cursor-default items-center justify-center py-1", className) }, props),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronUpIcon, null)));
});
SelectScrollUpButton.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ScrollUpButton.displayName;
const SelectScrollDownButton = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ScrollDownButton, Object.assign({ ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("flex cursor-default items-center justify-center py-1", className) }, props),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, null)));
});
SelectScrollDownButton.displayName =
    _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ScrollDownButton.displayName;
const SelectContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_a, ref) => {
    var { className, children, position = "popper" } = _a, props = __rest(_a, ["className", "children", "position"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Portal, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Content, Object.assign({ ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position: position }, props),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectScrollUpButton, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Viewport, { className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("p-1", position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]") }, children),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectScrollDownButton, null))));
});
SelectContent.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Content.displayName;
const SelectLabel = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Label, Object.assign({ ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("px-2 py-1.5 text-sm font-semibold", className) }, props)));
});
SelectLabel.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Label.displayName;
const SelectItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Item, Object.assign({ ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className) }, props),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ItemIndicator, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_3__.CheckIcon, { className: "h-4 w-4" }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ItemText, null, children)));
});
SelectItem.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Item.displayName;
const SelectSeparator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Separator, Object.assign({ ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("-mx-1 my-1 h-px bg-muted", className) }, props)));
});
SelectSeparator.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Separator.displayName;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);



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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlLE1BQU0sRUFBQztBQUM2STs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RXZJO0FBQ2E7QUFDbEM7QUFDUCxXQUFXLHVEQUFPLENBQUMsMENBQUk7QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3B5LXZhcmlhYmxlcy1wcm8vLi9zcmMvY29tcG9uZW50cy9MYXp5U2VsZWN0LnRzeCIsIndlYnBhY2s6Ly9jb3B5LXZhcmlhYmxlcy1wcm8vLi9zcmMvY29tcG9uZW50cy91aS9zZWxlY3QudHN4Iiwid2VicGFjazovL2NvcHktdmFyaWFibGVzLXByby8uL3NyYy9saWIvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdCwgU2VsZWN0Q29udGVudCwgU2VsZWN0SXRlbSwgU2VsZWN0VHJpZ2dlciwgU2VsZWN0VmFsdWUsIH0gZnJvbSBcIi4vdWkvc2VsZWN0XCI7XG5jb25zdCBMYXp5U2VsZWN0ID0gKHsgb25WYWx1ZUNoYW5nZSwgY29sbGVjdGlvbnMgfSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0LCB7IG9uVmFsdWVDaGFuZ2U6IG9uVmFsdWVDaGFuZ2UgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdFRyaWdnZXIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0VmFsdWUsIHsgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IGEgQ29sbGVjdGlvblwiIH0pKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRlbnQsIG51bGwsIGNvbGxlY3Rpb25zLm1hcCgoY29sbGVjdGlvbikgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0SXRlbSwgeyBrZXk6IGNvbGxlY3Rpb24uaWQsIHZhbHVlOiBjb2xsZWN0aW9uLmlkIH0sIGNvbGxlY3Rpb24ubmFtZSkpKSkpKTtcbmV4cG9ydCBkZWZhdWx0IExhenlTZWxlY3Q7XG4iLCJcInVzZSBjbGllbnRcIjtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZXRTb3J0SWNvbiwgQ2hlY2tJY29uLCBDaGV2cm9uRG93bkljb24sIENoZXZyb25VcEljb24sIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1pY29uc1wiO1xuaW1wb3J0ICogYXMgU2VsZWN0UHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuY29uc3QgU2VsZWN0ID0gU2VsZWN0UHJpbWl0aXZlLlJvb3Q7XG5jb25zdCBTZWxlY3RHcm91cCA9IFNlbGVjdFByaW1pdGl2ZS5Hcm91cDtcbmNvbnN0IFNlbGVjdFZhbHVlID0gU2VsZWN0UHJpbWl0aXZlLlZhbHVlO1xuY29uc3QgU2VsZWN0VHJpZ2dlciA9IFJlYWN0LmZvcndhcmRSZWYoKF9hLCByZWYpID0+IHtcbiAgICB2YXIgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0UHJpbWl0aXZlLlRyaWdnZXIsIE9iamVjdC5hc3NpZ24oeyByZWY6IHJlZiwgY2xhc3NOYW1lOiBjbihcImZsZXggaC05IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1pbnB1dCBiZy10cmFuc3BhcmVudCBweC0zIHB5LTIgdGV4dC1zbSBzaGFkb3ctc20gcmluZy1vZmZzZXQtYmFja2dyb3VuZCBwbGFjZWhvbGRlcjp0ZXh0LW11dGVkLWZvcmVncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXJpbmcgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTAgWyY+c3Bhbl06bGluZS1jbGFtcC0xXCIsIGNsYXNzTmFtZSkgfSwgcHJvcHMpLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RQcmltaXRpdmUuSWNvbiwgeyBhc0NoaWxkOiB0cnVlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmV0U29ydEljb24sIHsgY2xhc3NOYW1lOiBcImgtNCB3LTQgb3BhY2l0eS01MFwiIH0pKSkpO1xufSk7XG5TZWxlY3RUcmlnZ2VyLmRpc3BsYXlOYW1lID0gU2VsZWN0UHJpbWl0aXZlLlRyaWdnZXIuZGlzcGxheU5hbWU7XG5jb25zdCBTZWxlY3RTY3JvbGxVcEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKF9hLCByZWYpID0+IHtcbiAgICB2YXIgeyBjbGFzc05hbWUgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCJdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0UHJpbWl0aXZlLlNjcm9sbFVwQnV0dG9uLCBPYmplY3QuYXNzaWduKHsgcmVmOiByZWYsIGNsYXNzTmFtZTogY24oXCJmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xXCIsIGNsYXNzTmFtZSkgfSwgcHJvcHMpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENoZXZyb25VcEljb24sIG51bGwpKSk7XG59KTtcblNlbGVjdFNjcm9sbFVwQnV0dG9uLmRpc3BsYXlOYW1lID0gU2VsZWN0UHJpbWl0aXZlLlNjcm9sbFVwQnV0dG9uLmRpc3BsYXlOYW1lO1xuY29uc3QgU2VsZWN0U2Nyb2xsRG93bkJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKF9hLCByZWYpID0+IHtcbiAgICB2YXIgeyBjbGFzc05hbWUgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCJdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0UHJpbWl0aXZlLlNjcm9sbERvd25CdXR0b24sIE9iamVjdC5hc3NpZ24oeyByZWY6IHJlZiwgY2xhc3NOYW1lOiBjbihcImZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTFcIiwgY2xhc3NOYW1lKSB9LCBwcm9wcyksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hldnJvbkRvd25JY29uLCBudWxsKSkpO1xufSk7XG5TZWxlY3RTY3JvbGxEb3duQnV0dG9uLmRpc3BsYXlOYW1lID1cbiAgICBTZWxlY3RQcmltaXRpdmUuU2Nyb2xsRG93bkJ1dHRvbi5kaXNwbGF5TmFtZTtcbmNvbnN0IFNlbGVjdENvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmKChfYSwgcmVmKSA9PiB7XG4gICAgdmFyIHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcG9zaXRpb24gPSBcInBvcHBlclwiIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwicG9zaXRpb25cIl0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RQcmltaXRpdmUuUG9ydGFsLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdFByaW1pdGl2ZS5Db250ZW50LCBPYmplY3QuYXNzaWduKHsgcmVmOiByZWYsIGNsYXNzTmFtZTogY24oXCJyZWxhdGl2ZSB6LTUwIG1heC1oLTk2IG1pbi13LVs4cmVtXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYmctcG9wb3ZlciB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbWQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yXCIsIHBvc2l0aW9uID09PSBcInBvcHBlclwiICYmXG4gICAgICAgICAgICAgICAgXCJkYXRhLVtzaWRlPWJvdHRvbV06dHJhbnNsYXRlLXktMSBkYXRhLVtzaWRlPWxlZnRdOi10cmFuc2xhdGUteC0xIGRhdGEtW3NpZGU9cmlnaHRdOnRyYW5zbGF0ZS14LTEgZGF0YS1bc2lkZT10b3BdOi10cmFuc2xhdGUteS0xXCIsIGNsYXNzTmFtZSksIHBvc2l0aW9uOiBwb3NpdGlvbiB9LCBwcm9wcyksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdFNjcm9sbFVwQnV0dG9uLCBudWxsKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0UHJpbWl0aXZlLlZpZXdwb3J0LCB7IGNsYXNzTmFtZTogY24oXCJwLTFcIiwgcG9zaXRpb24gPT09IFwicG9wcGVyXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJoLVt2YXIoLS1yYWRpeC1zZWxlY3QtdHJpZ2dlci1oZWlnaHQpXSB3LWZ1bGwgbWluLXctW3ZhcigtLXJhZGl4LXNlbGVjdC10cmlnZ2VyLXdpZHRoKV1cIikgfSwgY2hpbGRyZW4pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RTY3JvbGxEb3duQnV0dG9uLCBudWxsKSkpKTtcbn0pO1xuU2VsZWN0Q29udGVudC5kaXNwbGF5TmFtZSA9IFNlbGVjdFByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lO1xuY29uc3QgU2VsZWN0TGFiZWwgPSBSZWFjdC5mb3J3YXJkUmVmKChfYSwgcmVmKSA9PiB7XG4gICAgdmFyIHsgY2xhc3NOYW1lIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdFByaW1pdGl2ZS5MYWJlbCwgT2JqZWN0LmFzc2lnbih7IHJlZjogcmVmLCBjbGFzc05hbWU6IGNuKFwicHgtMiBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkXCIsIGNsYXNzTmFtZSkgfSwgcHJvcHMpKSk7XG59KTtcblNlbGVjdExhYmVsLmRpc3BsYXlOYW1lID0gU2VsZWN0UHJpbWl0aXZlLkxhYmVsLmRpc3BsYXlOYW1lO1xuY29uc3QgU2VsZWN0SXRlbSA9IFJlYWN0LmZvcndhcmRSZWYoKF9hLCByZWYpID0+IHtcbiAgICB2YXIgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0UHJpbWl0aXZlLkl0ZW0sIE9iamVjdC5hc3NpZ24oeyByZWY6IHJlZiwgY2xhc3NOYW1lOiBjbihcInJlbGF0aXZlIGZsZXggdy1mdWxsIGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB5LTEuNSBwbC0yIHByLTggdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTBcIiwgY2xhc3NOYW1lKSB9LCBwcm9wcyksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImFic29sdXRlIHJpZ2h0LTIgZmxleCBoLTMuNSB3LTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RQcmltaXRpdmUuSXRlbUluZGljYXRvciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrSWNvbiwgeyBjbGFzc05hbWU6IFwiaC00IHctNFwiIH0pKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0UHJpbWl0aXZlLkl0ZW1UZXh0LCBudWxsLCBjaGlsZHJlbikpKTtcbn0pO1xuU2VsZWN0SXRlbS5kaXNwbGF5TmFtZSA9IFNlbGVjdFByaW1pdGl2ZS5JdGVtLmRpc3BsYXlOYW1lO1xuY29uc3QgU2VsZWN0U2VwYXJhdG9yID0gUmVhY3QuZm9yd2FyZFJlZigoX2EsIHJlZikgPT4ge1xuICAgIHZhciB7IGNsYXNzTmFtZSB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIl0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RQcmltaXRpdmUuU2VwYXJhdG9yLCBPYmplY3QuYXNzaWduKHsgcmVmOiByZWYsIGNsYXNzTmFtZTogY24oXCItbXgtMSBteS0xIGgtcHggYmctbXV0ZWRcIiwgY2xhc3NOYW1lKSB9LCBwcm9wcykpKTtcbn0pO1xuU2VsZWN0U2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gU2VsZWN0UHJpbWl0aXZlLlNlcGFyYXRvci5kaXNwbGF5TmFtZTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcbmV4cG9ydCB7IFNlbGVjdCwgU2VsZWN0R3JvdXAsIFNlbGVjdFZhbHVlLCBTZWxlY3RUcmlnZ2VyLCBTZWxlY3RDb250ZW50LCBTZWxlY3RMYWJlbCwgU2VsZWN0SXRlbSwgU2VsZWN0U2VwYXJhdG9yLCBTZWxlY3RTY3JvbGxVcEJ1dHRvbiwgU2VsZWN0U2Nyb2xsRG93bkJ1dHRvbiwgfTtcbiIsImltcG9ydCB7IGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gXCJ0YWlsd2luZC1tZXJnZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNuKC4uLmlucHV0cykge1xuICAgIHJldHVybiB0d01lcmdlKGNsc3goaW5wdXRzKSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=