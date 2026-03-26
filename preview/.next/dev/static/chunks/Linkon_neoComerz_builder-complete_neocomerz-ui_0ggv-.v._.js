(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrimaryButton",
    ()=>PrimaryButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PrimaryButton({ children, icon, href, onClick, variant = 'primary', className = '', style = {}, ...props }) {
    const baseClassName = "px-4 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-xl sm:rounded-2xl inline-flex justify-center items-center gap-1.5 sm:gap-2 hover:opacity-90 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 outline-none whitespace-nowrap w-full sm:w-auto text-decoration-none";
    const variantStyles = {
        primary: {
            background: '#F36621',
            color: 'white'
        },
        secondary: {
            background: 'white',
            color: '#F36621'
        }
    };
    const buttonStyle = {
        ...variantStyles[variant],
        ...style
    };
    const finalClassName = `${baseClassName} ${className}`;
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: finalClassName,
            style: buttonStyle,
            children: [
                icon,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight sm:leading-8 md:leading-9 lg:leading-10",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Button.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Button.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: finalClassName,
        style: buttonStyle,
        onClick: onClick,
        ...props,
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight sm:leading-8 md:leading-9 lg:leading-10",
                children: children
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Button.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Button.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = PrimaryButton;
var _c;
__turbopack_context__.k.register(_c, "PrimaryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/CheckListItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/react-icons@5.6.0_react@19.2.0/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
;
;
function CheckListItem({ children, iconClassName = "w-5 h-5 text-green-500 flex-shrink-0 mt-1", textClassName = "text-zinc-800 text-md leading-6" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCheckCircleFill"], {
                className: iconClassName
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/CheckListItem.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: textClassName,
                children: children
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/CheckListItem.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/CheckListItem.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = CheckListItem;
var _c;
__turbopack_context__.k.register(_c, "CheckListItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SectionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeader({ title, description, className = "text-center mb-16", titleClassName = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-[56px] lg:leading-[64px]", descriptionClassName = "max-w-4xl mx-auto mt-6 text-zinc-800 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: titleClassName,
                children: title
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SectionHeader.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: descriptionClassName,
                children: description
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SectionHeader.tsx",
                lineNumber: 14,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SectionHeader.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Helpline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const WhatsAppIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M42 24C42 33.9411 33.9411 42 24 42C20.2082 42 16.6903 40.8276 13.789 38.8255L7.63636 40.3636L9.24864 34.3176C7.20139 31.396 6 27.8383 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z",
                fill: "url(#paint0_linear_3149_857)"
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 27.7663 3.9915 31.3011 5.72771 34.3575L3 45L13.9723 42.4557C16.9521 44.0782 20.3684 45 24 45ZM24 41.7692C33.8137 41.7692 41.7692 33.8137 41.7692 24C41.7692 14.1863 33.8137 6.23077 24 6.23077C14.1863 6.23077 6.23077 14.1863 6.23077 24C6.23077 27.7891 7.41675 31.3012 9.43776 34.1853L7.84615 40.1538L13.9199 38.6354C16.784 40.6118 20.2569 41.7692 24 41.7692Z",
                fill: "#D7FFDD"
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.75 14.2501C18.2507 13.2472 17.4848 13.336 16.711 13.336C15.3281 13.336 13.1719 14.9924 13.1719 18.0752C13.1719 20.6017 14.2852 23.3673 18.0366 27.5044C21.6571 31.4971 26.4141 33.5625 30.3633 33.4922C34.3125 33.4218 35.125 30.0234 35.125 28.8757C35.125 28.367 34.8094 28.1132 34.5919 28.0443C33.2461 27.3984 30.764 26.195 30.1992 25.9688C29.6345 25.7427 29.3396 26.0486 29.1563 26.2149C28.6441 26.703 27.6289 28.1414 27.2813 28.4649C26.9337 28.7885 26.4154 28.6247 26.1998 28.5024C25.4062 28.184 23.2544 27.2269 21.5392 25.5642C19.418 23.5079 19.2935 22.8005 18.8939 22.1707C18.5741 21.6669 18.8087 21.3578 18.9258 21.2227C19.3828 20.6954 20.0139 19.8812 20.2969 19.4766C20.5799 19.072 20.3552 18.4578 20.2204 18.0752C19.6407 16.4298 19.1495 15.0524 18.75 14.2501Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "paint0_linear_3149_857",
                    x1: "39.75",
                    y1: "10.5",
                    x2: "6",
                    y2: "42",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: "#5BD066"
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                            lineNumber: 34,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#27B43E"
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                            lineNumber: 35,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                    lineNumber: 26,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = WhatsAppIcon;
function Helpline({ whatsappNumber = "+880 1712-508063" }) {
    const formattedNumber = whatsappNumber.replace(/[^0-9+]/g, '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: `https://wa.me/${formattedNumber}`,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `WhatsApp Customer Support: ${whatsappNumber}`,
        className: "block w-fit cursor-pointer rounded-2xl border-2 border-green-500 bg-white px-5 py-1.5 transition-colors duration-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center gap-1 text-green-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base leading-5 underline",
                        children: "যেকোন প্রয়োজনে"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute left-[126px] top-[-30px] transition-transform duration-200 hover:scale-110",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {}, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2xl font-semibold leading-8 text-green-500",
                children: whatsappNumber
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
_c1 = Helpline;
var _c, _c1;
__turbopack_context__.k.register(_c, "WhatsAppIcon");
__turbopack_context__.k.register(_c1, "Helpline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesignAndFit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/react-icons@5.6.0_react@19.2.0/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$CheckListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/CheckListItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Helpline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
const imageCards = [
    {
        bgImage: "url('/ui-package/images/feature-1/feature-1.webp')",
        title: 'ফিল:',
        description: 'সফট, স্কিন-ফ্রেন্ডলি, আরামদায়ক'
    },
    {
        bgImage: "url('/ui-package/images/feature-1/feature-2.webp')",
        title: 'থিকনেস:',
        description: 'রাজকীয় কারুকাজে অভিজাত্যের ছোঁয়া'
    },
    {
        bgImage: "url('/ui-package/images/feature-1/feature-3.webp')",
        title: 'ফ্রি অফার:',
        description: 'প্রিমিয়াম কোয়ালিটির পায়জামা সম্পূর্ণ ফ্রি!'
    }
];
const detailCards = [
    {
        title: 'Design & Cut',
        items: [
            'Modern Quality silhouette',
            'Clean finishing & elegant tailoring',
            'এমন ডিজাইন যা আলাদা করে নজর কাড়ে'
        ]
    },
    {
        title: 'Fit & Styling',
        items: [
            'Comfortable fit – ঢিলাও না, আঁটসাঁটও না',
            'Casual, festive বা semi-formal—সব জায়গায় মানানসই',
            'Dupatta ও dress balance perfectly matched'
        ]
    },
    {
        title: 'Color & Variations',
        items: [
            'Trend-based colour selection',
            'Limited colour runs (স্টক শেষ হলে আর আসবে না)'
        ]
    }
];
function DesignAndFit({ title, subtitle, imageCards = [], detailCards = [], ctaButton = {
    text: "এখনই অর্ডার করুন",
    href: "#order-form"
}, colors = {
    primary: '#F36621',
    text: '#27272a',
    background: '#f3f4f6'
} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gray-100 pt-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-800",
                                        children: "ইন্ডিয়ান এমব্রয়ডারি,"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                        lineNumber: 98,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-800",
                                        children: "পাঞ্জাবি সাশ্রয় দামে "
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                        lineNumber: 98,
                                        columnNumber: 83
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        style: {
                                            color: '#F36621'
                                        },
                                        children: "- আজকের সেরা ডিল"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                        lineNumber: 98,
                                        columnNumber: 145
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-4",
                            children: imageCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[680px] rounded-2xl bg-cover bg-center relative p-6 flex flex-col justify-end overflow-hidden group",
                                    style: {
                                        backgroundImage: card.image ? `url(${card.image})` : undefined
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105",
                                            style: {
                                                backgroundImage: card.image ? `url(${card.image})` : undefined
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-60 rounded-2xl p-6 z-10 absolute left-0 bottom-0",
                                            style: {
                                                backgroundColor: '#F36621'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-2 -right-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCheckCircleFill"], {
                                                        className: "w-7 h-7 text-green-500 bg-white rounded-full border-2 border-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white text-2xl font-['Li_Ador_Noirrit'] font-semibold leading-10",
                                                    children: card.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-xl font-['Li_Ador_Noirrit'] font-semibold leading-7",
                                                    children: card.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white pt-24 pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-4",
                            children: detailCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-6",
                                    style: {
                                        backgroundColor: 'rgba(243, 102, 33, 0.1)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-zinc-800 text-3xl font-semibold leading-8 mb-3",
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: card.items?.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$CheckListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: item.text
                                                }, itemIndex, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 flex justify-center items-start flex-wrap gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrimaryButton"], {
                                    href: "#order-form",
                                    children: "এখনই অর্ডার করুন"
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Helpline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_c = DesignAndFit;
var _c;
__turbopack_context__.k.register(_c, "DesignAndFit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/react-icons@5.6.0_react@19.2.0/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const WhatsAppButton = ({ phoneNumber, labelText, className = "" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[16px] transition-colors shadow-lg hover:shadow-xl ${className}`,
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                className: "w-6 h-6 md:w-8 md:h-8 text-white"
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-start leading-tight",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs sm:text-sm font-semibold text-white/90",
                        children: labelText
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base sm:text-lg md:text-xl font-bold text-white tracking-wide",
                        children: phoneNumber
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WhatsAppButton;
function FAQUI({ heading = 'সাধারণ প্রশ্ন', descriptionPart1 = 'আমাদের গ্রাহকরা সবসময়ই আমাদের অভিজ্ঞতা নিয়ে সন্তুষ্ট! প্রথম যোগাযোগ থেকে শুরু করে চূড়ান্ত ডেলিভারি পর্যন্ত ', descriptionPart2 = 'আমরা সর্বোচ্চ মানের সেবা ও পণ্য দেওয়ার চেষ্টা করি,', descriptionPart3 = ' যা প্রত্যাশার থেকেও বেশি আনন্দ দেয়।', contactLabel = 'যেকোনো প্রয়োজনে', contactNumber = '01712508063', faqs = [], colors = {} }) {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    const primaryColor = colors.primary || '#5b21b6';
    const backgroundColor = colors.background || '#ede9fe';
    const faqBackgroundColor = colors.faqBackground || '#f5f5f5';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full overflow-hidden",
        style: {
            backgroundColor
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-start w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[1440px] flex flex-col lg:flex-row justify-start items-center gap-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-[40%] py-10 lg:py-20 flex justify-center lg:justify-start items-start px-4 sm:px-8 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-lg p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] flex flex-col justify-start items-start gap-6 sm:gap-8 shadow-xl",
                            style: {
                                backgroundColor: primaryColor
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex flex-col justify-center items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[64px] font-bengali",
                                            children: heading
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "w-full text-lg sm:text-xl lg:text-2xl leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-normal",
                                                    children: descriptionPart1
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-amber-200 font-semibold mx-1",
                                                    children: descriptionPart2
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-normal",
                                                    children: descriptionPart3
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full overflow-visible",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppButton, {
                                        phoneNumber: contactNumber,
                                        labelText: contactLabel,
                                        className: "w-full bg-[#25D366] hover:bg-[#1DA851]"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 py-12 lg:py-44 px-6 sm:px-12 lg:pl-32 lg:pr-16 flex flex-col justify-start items-stretch lg:ml-[-100px] z-0",
                        style: {
                            backgroundColor: faqBackgroundColor
                        },
                        children: faqs.map((faq, index)=>{
                            const isOpen = openIndex === index;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full py-5 sm:py-6 border-b border-zinc-300 transition-all duration-300 ease-in-out hover:bg-black/5 last:border-b-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggleFAQ(index),
                                    className: "w-full flex justify-between items-start gap-4 sm:gap-6 text-left group",
                                    "aria-expanded": isOpen,
                                    "aria-controls": `faq-answer-${index}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col justify-start items-start gap-0 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug transition-colors duration-200 break-words font-bengali",
                                                    style: {
                                                        color: isOpen ? primaryColor : '#27272a'
                                                    },
                                                    children: faq.question
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    id: `faq-answer-${index}`,
                                                    className: `w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-neutral-700 font-bengali pb-2",
                                                        children: faq.answer
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center rounded-full transition-colors",
                                            style: {
                                                backgroundColor: isOpen ? `${primaryColor}20` : '#e4e4e7'
                                            },
                                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMinus"], {
                                                className: "w-3 h-3 sm:w-4 sm:h-4",
                                                style: {
                                                    color: primaryColor
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                                lineNumber: 147,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                                                className: "w-3 h-3 sm:w-4 sm:h-4 text-neutral-900"
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                                lineNumber: 149,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                            lineNumber: 142,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                    lineNumber: 115,
                                    columnNumber: 19
                                }, this)
                            }, index, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                                lineNumber: 111,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(FAQUI, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c1 = FAQUI;
var _c, _c1;
__turbopack_context__.k.register(_c, "WhatsAppButton");
__turbopack_context__.k.register(_c1, "FAQUI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-1.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/feature-1.0.049~i80g~zr.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-1.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-1.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-1.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 316,
    height: 562,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRtgAAABXRUJQVlA4TMsAAAAvA8ABAM1VICICHghACgMAAIAFmAIQRIEACQAQAAAAAAAAAAAAAAAAAAAEAAABEQQIoJRA9woAAAB4IMAmAAAAAOf/HK9SqgIFAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAJESIl5IMAmAAAAAOffu9erAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhwqWaRJex1I/LwSIbSrNcmideTSvVaSqPOyX10hN12wgRFhBTRWvu3zwPlcaP5xT8d7l+iWnRj0jGQAQA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-2.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/feature-2.0s_igqdrlt.ws.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-2.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-2.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-2.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 316,
    height: 562,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMgAAAAvA8ABAM1VICICHggACQAAAAAD2zODB4MNAAMAAAAAAAAAAAAAAAAAAGAAADzAAzCwYQw25B4AAMADATYBAAAAOP9e2bkICQAAAIAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAgBB41c8DATkBAAAAOP9+N0EiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYKWLSIj/bQX9E0QI1VupzIljo2k9aKkw7NS4cGOLkUrOa2tzB8Bpu56F8Ey6tLdK3rO8005PBiuDg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-3.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/feature-3.0do.p4pjba0ax.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-3.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-3.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-3.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 320,
    height: 380,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRv4AAABXRUJQVlA4TPEAAAAvBsABAM1VICICHghADgIAAIB1a2uGlBgCAWkZQwBABAAAAAAAAAAAAAAAAAAAAAAoAAAChQ+Q4msAAAAeCLANAwAAwPkn/czmBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMFxHNo0HgjIDQMAAMD53+83WgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqJUkH1mxYbr9N+s+7eNflIYNup7VnuIZt66mJCJ7rvqKPeoUrylHwTEx/j5nWXW/ya0nQwZ0rPTPDu9C+pMsmc34bS9s+vcrggUzXU0BQZByK5EdbME6xEJbxkkAAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-4.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/feature-4.0w1nufn6a_1bc.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-4.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-4.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-4.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 320,
    height: 380,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRhABAABXRUJQVlA4TAQBAAAvBsABAM1VICICHgiADQIAAIAJwXlI/kQAQIAAABw4AAAAAAAAAAAAAAAAAAAgRAAQKPwu3qNX/eUDAADwQACOEAAAAM5/67Y0QUBCAi8AAAAAAAAAAAAAAAAAAAAAAAAgAACACBSAEqD68OeBAOQgAAAAnP//r/9FlBSGCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA1bT1V4uc43gVk+nyJMmL493jjgavbcA4Dq5oIAwSgHLlqQnUBjfWpIRCKLx513bc9+VMT6paRvncWXuSKd9zKeAgRL9hxac8B8WD/7h6W7NtkN8bPfdynfmymG3VObhffsZYrNpjd6h4qy9qaA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Features
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/react-icons@5.6.0_react@19.2.0/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$CheckListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/CheckListItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Helpline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-1.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-1.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-2.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-2.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-3.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-3.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-4.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/feature-1/feature-4.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
;
;
const defaultImages = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: 'Model in a yellow traditional dress'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: 'Model in a pink traditional dress'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: 'Model in a green traditional dress'
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$feature$2d$1$2f$feature$2d$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: 'Back view of a model in a green traditional dress'
    }
];
function Features({ title, description, features = [], images = defaultImages, ctaButton = {
    text: "এখনই অর্ডার করুন",
    href: "#order-form"
}, tagline = "এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেন্ডের অংশ।", colors = {
    primary: '#F36621',
    text: '#222F28',
    background: '#ffffff'
}, whatsappNumber = "+880 1712-508063" }) {
    const { primary = '#F36621', text = '#222F28', background = '#ffffff' } = colors;
    const defaultTagline = "এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেন্ডের অংশ।";
    const defaultTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            "কেন ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: primary
                },
                children: "আলাদা করে"
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                lineNumber: 40,
                columnNumber: 30
            }, this),
            " নজর কাড়ে"
        ]
    }, void 0, true);
    const defaultDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            "শুধু সুন্দর নয়, আরামদায়কও। আমাদের ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-semibold",
                style: {
                    color: primary
                },
                children: "প্রিমিয়াম কোয়ালিটির"
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                lineNumber: 41,
                columnNumber: 68
            }, this),
            " Quality Panjabi সেট ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-semibold",
                style: {
                    color: primary
                },
                children: "আপনাকে দেবে এক অনন্য অভিজ্ঞতা।"
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                lineNumber: 41,
                columnNumber: 176
            }, this),
            " প্রতিটি স্টিচে রয়েছে আমাদের নিখুঁত কারুকার্য।"
        ]
    }, void 0, true);
    const displayTitle = title === "কেন এটা আলাদা করে নজর কাড়ে" ? defaultTitle : title;
    const displayDescription = description === "শুধু সুন্দর নয়, আরামদায়কও। আমাদের প্রিমিয়াম কোয়ালিটির Quality Panjabi সেট আপনাকে দেবে এক অনন্য অভিজ্ঞতা। প্রতিটি স্টিচে রয়েছে আমাদের নিখুঁত কারুকার্য।" ? defaultDescription : description;
    const displayTagline = typeof tagline === 'string' && tagline.trim().length > 0 ? tagline : defaultTagline;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-12 md:py-24",
        style: {
            backgroundColor: background
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6 lg:gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "text-left mb-0",
                                titleClassName: "text-[#222F28] text-3xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[64px]",
                                descriptionClassName: "mt-4 text-[#222F28] text-base md:text-xl lg:text-2xl leading-relaxed lg:leading-7 max-w-none mx-0",
                                title: displayTitle,
                                description: displayDescription
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3",
                                children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$CheckListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        iconClassName: "w-6 h-6 md:w-7 md:h-7 text-green-500 flex-shrink-0",
                                        textClassName: "text-[#222F28] text-lg md:text-xl font-semibold leading-tight lg:leading-7",
                                        children: feature.text
                                    }, index, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                        lineNumber: 62,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl md:rounded-[32px] p-6 md:p-8 self-start w-full md:w-[376px]",
                                style: {
                                    backgroundColor: primary
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row items-center gap-6 md:gap-0 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: ctaButton.href,
                                                className: "px-4 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 bg-white rounded-xl sm:rounded-2xl inline-flex justify-center items-center gap-1.5 sm:gap-2 hover:bg-gray-50 active:scale-95 transition-all w-full md:w-auto z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuShoppingBag"], {
                                                        className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
                                                        style: {
                                                            color: primary
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "justify-start text-lg sm:text-xl md:text-xl font-bold leading-tight sm:leading-8 md:leading-10",
                                                        style: {
                                                            color: primary
                                                        },
                                                        children: ctaButton.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                                lineNumber: 74,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full md:w-auto flex justify-center md:block md:absolute md:left-[90%] md:ml-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Helpline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    whatsappNumber: whatsappNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                                lineNumber: 83,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                        lineNumber: 73,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-8 text-white text-xl md:text-3xl font-bold leading-tight md:leading-9 max-w-sm",
                                        children: displayTagline
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: (images || defaultImages).map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-w-1 aspect-h-1 group overflow-hidden rounded-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out",
                                    src: image.src,
                                    alt: image.alt || `Feature image ${index + 1}`
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                    lineNumber: 96,
                                    columnNumber: 33
                                }, this)
                            }, index, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                                lineNumber: 95,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
                lineNumber: 50,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
            lineNumber: 49,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
_c = Features;
var _c;
__turbopack_context__.k.register(_c, "Features");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product1.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/product1.0c6ii~qekmaxy.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product1.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product1.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product1.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 670,
    height: 540,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/webp;base64,UklGRu4AAABXRUJQVlA4TOEAAAAvB0ABEM1VICICHgiADQIAAADm5bLIcAQ4AAACAAIAAAAAAAAAAAAAAAAAOADiDgcgAAR+8YM/e3kAAAAPBOQEAAAA4Pzva0UCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCV+nkgaDkIAAAA5/9+VzSMMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjJMHc/8oARL/KAGqrJDRkYvMpE+vmm+dRSL0a4kP3hznXaaXxTTQWz0BglEGtfdG/Y/XsNfEr4BXRH8RFTwcGpCJu8A635rNFjifaXsgEA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product2.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/product2.03w_3om7m7aa9.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product2.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product2.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product2.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1092,
    height: 1386,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRs4AAABXRUJQVlA4TMEAAAAvBcABAM1VICICHghADgIAAIBvRYMHiBECAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAe2Mg4mf9/wUAAPBAJAAAAAAAzr8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwB5ISwwCAADA+b8fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgMIusmOoCLaNFZQ49RciRt0v+7hfbMSe9jQeV2XnnG7gFMv2sSwAiQAQf+CaIMzFwW4vAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product3.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/product3.0xg.f2gywuul4.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product3.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product3.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product3.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1092,
    height: 1386,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRvAAAABXRUJQVlA4TOQAAAAvBcABAM1VICICHghACgMAAID6WiACgwAQAAAGGAAAAAAAAAAAAAAAAAAAAGBAAQAAAIRvfFDVAQAAeCAgIQwAAADnf08BKBgMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAW2H28x4Iyg4CAADA+b9s4AoBQPFDAAAAAAAECAAAAAAAAAAAAABAAQQQAIYYAABgGBAXWWFBL11D8GiA5NZqGXcZF7cPspT+HS/38veSz0dq20nXCn7nbrln28n6V9orkpGUVvhvmrHChwFA+AAAsrXImvoHQMS9vNfxzPO+dwE="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product4.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/product4.134_7gb5lz2a4.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product4.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product4.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product4.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1092,
    height: 1386,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRvIAAABXRUJQVlA4TOUAAAAvBcABAM1VICICHghADgIAAID9RzRAVgAAAgGABwAAAAAAgAwAAAAAgg0AAAAAAAQEAgFQkAT16w8AAMADQTuBAAAAOP+XBQ2c4wQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAoN23fA0FLYQAAADj/V7dhpwAAGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAwCgqofuQJBW47JLVlFTDsY6avzvPbfABdtvPzL95W7+mtR18FQjyal1bswn+oy2QnViQF2bm/twoHaIDAyABgyKc1aa/0ARrD73GVab3jyQ8AAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryCol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product1.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product1.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product2.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product2.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product3.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product3.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product4.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product4.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
function GalleryCol({ title = "Our Product Gallery", description = "Check out our latest collection and high-quality product images.", images = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 1"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 2"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 3"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 4"
    }
] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600 max-w-2xl mx-auto",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `grid grid-cols-1 sm:grid-cols-2 ${images.length === 1 ? "lg:grid-cols-1" : images.length === 2 ? "lg:grid-cols-2" : images.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-6`,
                    children: images.slice(0, 4).map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group aspect-square overflow-hidden rounded-2xl bg-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image.src,
                                    alt: image.alt || `Gallery image ${index + 1}`,
                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = GalleryCol;
var _c;
__turbopack_context__.k.register(_c, "GalleryCol");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product5.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/product5.034wh3uw_-iqk.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product5.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product5.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product5.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 545,
    height: 692,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRtgAAABXRUJQVlA4TMsAAAAvBcABAM1VICICHghADgIAAID/iQDJAwAaABABiAEAAAAAAACAJAQADABAwAAAAABABABgWEJY/T0AAMADITgBAAAAOP/7FQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKD2HkjRCQQAAMD5v+8WwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwATWKvFEemA6HXexzttzTIwprHLtSs0RGZ4b7g9/nz8ZM25pfN+Ik/Jatr6gAwaUAE3oqBkZiEpl4AQA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product1.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product1.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product2.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product2.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product3.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product3.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product4.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product4.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product5.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product5.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
function GalleryGrid({ title = "Curated Collection", description = "Explore our visually stunning grid of premium products and lifestyle shots.", images = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Featured"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 1"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 2"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 3"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 4"
    }
] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-gray-50/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                (title || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mb-16",
                    children: [
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx",
                            lineNumber: 31,
                            columnNumber: 15
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg md:text-xl text-gray-600 leading-relaxed",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `grid grid-cols-1 sm:grid-cols-2 ${images.length === 1 ? "md:grid-cols-1" : images.length === 2 ? "md:grid-cols-2" : images.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"} gap-4 min-h-[200px]`,
                    children: images.slice(0, 9).map((image, index)=>{
                        // Featured logic (2x2) only applies if we have at least 4 images and this is the first one
                        const isFeatured = index === 0 && images.length >= 4;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative group overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 ${isFeatured ? "md:col-span-2 md:row-span-2 h-full" : "h-full"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image.src,
                                    alt: image.alt || `Gallery image ${index + 1}`,
                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = GalleryGrid;
var _c;
__turbopack_context__.k.register(_c, "GalleryGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryGrid6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product1.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product1.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product2.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product2.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product3.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product3.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product4.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product4.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product5.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/products/product5.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
function GalleryGrid6({ title = "Premium Collection", description = "A specialized 6-pack grid for your finest products.", images = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Featured"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 1"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 2"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 3"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 4"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$products$2f$product1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        alt: "Product 5"
    }
] }) {
    const imagesToDisplay = images.slice(0, 6);
    const count = imagesToDisplay.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                (title || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx",
                            lineNumber: 35,
                            columnNumber: 15
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600 max-w-2xl mx-auto",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `grid grid-cols-1 sm:grid-cols-2 ${count === 1 ? "md:grid-cols-1" : count === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-2 md:gap-3`,
                    children: imagesToDisplay.map((image, index)=>{
                        // Featured logic: First image is 2x2 if we have 4 or more images
                        const isFeatured = index === 0 && count >= 4;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative group overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 ${isFeatured ? "md:col-span-2 md:row-span-2 h-full" : "h-full"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image.src,
                                    alt: image.alt || `Gallery image ${index + 1}`,
                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx",
                            lineNumber: 57,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = GalleryGrid6;
var _c;
__turbopack_context__.k.register(_c, "GalleryGrid6");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/neoComerz-logo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/neoComerz-logo.03k0fmbwf-rxh.svg");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/neoComerz-logo.svg.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/neoComerz-logo.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$neoComerz$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/neoComerz-logo.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$neoComerz$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 44,
    height: 44,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/heroBg.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/heroBg.0zrwa57usy3sy.jpg");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/heroBg.jpg.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/heroBg.jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$heroBg$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/heroBg.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$heroBg$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1920,
    height: 758,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAADAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDoLqCJL8hI1QBIsBRgD5yKdzvSSprTq/yP/9k="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$neoComerz$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$neoComerz$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/neoComerz-logo.svg.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/neoComerz-logo.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$heroBg$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$heroBg$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/heroBg.jpg.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/heroBg.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
function Hero({ backgroundImage = __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$heroBg$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$heroBg$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src, logo = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$neoComerz$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$neoComerz$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
    alt: "Logo",
    width: 150,
    height: 50
}, title = "👑 STYLISH & COMFORTABLE", titleSize, subtitle = "✨ LUXURY SUMMER COLLECTION", subtitleSize, discountTag = "UP TO 50% OFF", discountTagSize, cta = {
    text: "SHOP NOW",
    href: "#"
}, secondaryCta, settings = {
    overlayOpacity: 10,
    overlayColor: "#000000",
    textAlignment: "center",
    contentAlignment: "right"
}, theme = {
    primaryColor: "#F36621",
    textColor: "#222F28"
} }) {
    const { overlayOpacity = 10, overlayColor = "#000000", textAlignment = "center", contentAlignment = "right" } = settings;
    const { primaryColor = "#F36621", textColor = "#222F28" } = theme;
    const { src: finalLogoSrc = __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$neoComerz$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$neoComerz$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src, alt: finalLogoAlt = "Logo", width: finalLogoWidth = 150, height: finalLogoHeight = 50 } = logo || {};
    const alignmentClasses = {
        left: "md:justify-start md:items-end",
        center: "md:justify-center md:items-end",
        right: "md:justify-end md:items-end"
    };
    const contentAlignmentClasses = {
        left: "md:ml-[100px] md:mr-auto",
        center: "md:mx-auto",
        right: "md:mr-[180px] md:ml-auto"
    };
    const textAlignmentClasses = {
        left: "text-left items-start",
        center: "text-center items-center",
        right: "text-right items-end"
    };
    // Defensive checks for legacy data structures
    const displayTitle = typeof title === 'object' ? title.main : title;
    const displaySubtitle = typeof subtitle === 'object' ? subtitle.subtitle : subtitle;
    const displayDiscount = typeof discountTag === 'object' ? discountTag.discount : discountTag;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden",
        style: backgroundImage ? {
            backgroundImage: `url('${backgroundImage}')`
        } : {
            backgroundColor: "#f3f4f6"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundColor: overlayColor,
                    opacity: (overlayOpacity || 0) / 100
                }
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 h-full flex items-end justify-center p-4 md:p-0 ${alignmentClasses[contentAlignment]}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full max-w-md bg-white/90 backdrop-blur-sm p-8 flex flex-col gap-6 rounded-3xl rounded-t-[400px] md:max-w-none md:rounded-b-none md:w-[640px] md:bg-white/80 md:pt-12 md:pb-16 md:px-12 md:gap-8 md:rounded-t-[400px] lg:w-[720px] lg:px-16 lg:rounded-t-[500px] ${contentAlignmentClasses[contentAlignment]} ${textAlignmentClasses[textAlignment]}`,
                    children: [
                        finalLogoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: finalLogoSrc,
                            alt: finalLogoAlt,
                            width: finalLogoWidth,
                            height: finalLogoHeight,
                            style: {
                                width: "auto",
                                height: "auto"
                            },
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `self-stretch flex flex-col justify-start ${textAlignmentClasses[textAlignment]}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: textAlignment === 'center' ? 'text-center' : '',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-4xl sm:text-5xl font-bold leading-tight md:text-7xl lg:text-8xl md:leading-[1.1] lg:leading-[96px]",
                                        style: {
                                            color: primaryColor,
                                            fontSize: titleSize || undefined
                                        },
                                        children: displayTitle
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-2xl sm:text-3xl font-normal leading-tight mt-1 md:text-6xl md:leading-[1.1] lg:leading-[72px]",
                                        style: {
                                            color: textColor,
                                            fontSize: subtitleSize || undefined
                                        },
                                        children: displaySubtitle
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        displayDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: textAlignment === 'center' ? 'text-center' : '',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-4xl sm:text-5xl leading-tight mt-1 md:text-7xl lg:text-7xl md:leading-[1.1] lg:leading-[72px]",
                                style: {
                                    color: textColor,
                                    fontSize: discountTagSize || undefined
                                },
                                children: displayDiscount
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 w-full sm:w-auto",
                            children: [
                                cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrimaryButton"], {
                                    href: cta.href,
                                    icon: cta.icon,
                                    style: {
                                        background: primaryColor
                                    },
                                    children: cta.text
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                secondaryCta?.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrimaryButton"], {
                                    href: secondaryCta.href,
                                    icon: secondaryCta.icon,
                                    variant: "secondary",
                                    style: {
                                        borderColor: primaryColor,
                                        color: primaryColor
                                    },
                                    children: secondaryCta.text
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/hero-bg.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/hero-bg.10dn6bx0dz3l4.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/hero-bg.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/hero-bg.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$hero$2d$bg$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/hero-bg.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$hero$2d$bg$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2880,
    height: 1173,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/webp;base64,UklGRrgAAABXRUJQVlA4TKwAAAAvB4AAAM1VICICHgiGCQAAAICROwAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAEIALwV2B9AIAADwQkBoAAACA878PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYosiveSCYBgAAAADnv4oEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg8MgC4ILLI+jnLNv2gYdUOGp6t2wk4J/HHkk3nfkD"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/Logo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/Logo.0i0mwn7895l~f.svg");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/Logo.svg.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/Logo.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/Logo.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 190,
    height: 40,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InlineHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$hero$2d$bg$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$hero$2d$bg$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/hero-bg.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/hero-bg.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/Logo.svg.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/Logo.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
function InlineHero({ backgroundImage = __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$hero$2d$bg$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$hero$2d$bg$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src, backgroundImageAlt = 'Pakistani Dress Collection Background', logoSrc = __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src, logoAlt = 'NeoComerz Logo', logoWidth = 200, logoHeight = 60, titlePrimary = '🌟 প্রিমিয়াম', titleSecondary = 'Pakistani Elite Dress', description = 'সেই ডিজাইন—যেটা পরলে আলাদা করে কিছু বলার দরকার পড়ে না. ফ্যাশন-লাভারদের নতুন obsession', ctaText = 'এখনই অর্ডার করুন', ctaHref = '#order', theme = {
    primaryColor: '#27272a',
    secondaryColor: '#5b21b6',
    textColor: '#27272a'
} }) {
    const { primaryColor, secondaryColor, textColor } = theme;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "image-container absolute inset-0 z-0 h-full w-full",
                children: backgroundImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: backgroundImage,
                    alt: backgroundImageAlt,
                    fill: true,
                    className: "object-cover object-center hero-bg-mobile",
                    priority: true,
                    quality: 90
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                    lineNumber: 34,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto max-w-[1440px] flex",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[720px] px-4 sm:px-8 pt-6 sm:pt-12 md:pt-16 pb-12 sm:pb-24 md:pb-32 flex flex-col justify-start items-start gap-6 sm:gap-12 md:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start items-center mb-12 sm:mb-20 md:mb-32",
                            children: logoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: logoSrc,
                                alt: logoAlt,
                                width: logoWidth,
                                height: logoHeight,
                                className: "h-10 sm:h-14 md:h-16 w-auto hero-logo",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                                lineNumber: 50,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "self-stretch inline-flex flex-col justify-start items-start gap-8 sm:gap-12 md:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "self-stretch flex flex-col justify-start items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "justify-start text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-bengali leading-[1.2] md:leading-[96px]",
                                            style: {
                                                color: primaryColor
                                            },
                                            children: titlePrimary
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                                            lineNumber: 63,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "self-stretch justify-start text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-['Li_Ador_Noirrit'] leading-[1.2] md:leading-[72px]",
                                            style: {
                                                color: secondaryColor
                                            },
                                            children: titleSecondary
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                                            lineNumber: 69,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "self-stretch justify-start text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-bengali leading-[1.5] md:leading-7",
                                    style: {
                                        color: textColor
                                    },
                                    children: [
                                        description,
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "hidden sm:block"
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                                            lineNumber: 81,
                                            columnNumber: 29
                                        }, this),
                                        ' '
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this),
                                ctaText && ctaHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: ctaHref,
                                    className: "px-6 py-3 sm:px-8 sm:py-4 text-white text-base sm:text-lg lg:text-xl font-bold rounded-lg transition-colors shadow-lg",
                                    style: {
                                        backgroundColor: secondaryColor
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.opacity = '0.9',
                                    onMouseLeave: (e)=>e.currentTarget.style.opacity = '1',
                                    children: ctaText
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                                    lineNumber: 85,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_c = InlineHero;
var _c;
__turbopack_context__.k.register(_c, "InlineHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-main.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/hero-main.05~r~f6wkp0kx.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-main.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-main.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$main$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-main.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$main$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 826,
    height: 915,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRgQBAABXRUJQVlA4TPgAAAAvBsABAM1VICICHgiADQIAAIAWvI4HAAAIAoAEAAB0AAAAAAAAAAAAABAIdwggAXWIAEEPwMuprNoBAAA8EIAcBAAAgPO/71u+iSGCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAIEqqt7jwQYCIIAACA89+qfA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcODRbZFGl7tIRmMEPozASN2/COYX2BNg0CcDhCSBFtWuvS1Ecdy7L22RS9SRU/t3OdZeU0DFNGkScpjPXLqurljdds4pMurOqcdmhvLe4nziF7wOza6n18bPy6/1Lcwx9EnqBw=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-overlay.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/hero-overlay.0jfrzkntho7el.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-overlay.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-overlay.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$overlay$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-overlay.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$overlay$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 438,
    height: 556,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRv4AAABXRUJQVlA4TPIAAAAvBcABAM1VICICHgiADQIAAIDv1FYCAQcEAAAAAEAAAAAAAAAAAAAAAAAAAAD8APAogIC78yrfxwsAAMADAbBBAAAAOH/jDhKAHgEECHXzCwAAAAAAAAABAAABAgAAAA78AAIAAEQAALj//z4PBNiGAQAA4PyTXo9xHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOfYfO3eJXJ1l+4CgAJ8zB+AGdg4793YZ6DdF1CySfys37AGMijZGNVmFfRza8+SlHcnyj2Hve5ofMO8VEBV85++Y3lHlbUfK6klf5WA4/NKlqfy58wMHnkPp1S+nQ=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/left-shadow.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/left-shadow.0w_484swaips0.webp");}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/left-shadow.webp.mjs { IMAGE => \"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/left-shadow.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$left$2d$shadow$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/left-shadow.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$left$2d$shadow$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 338,
    height: 730,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4TDkAAAAvA8ABAM1VICICHogEAAAAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAEAEREngIA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LayeredHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$main$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$main$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-main.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-main.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$overlay$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$overlay$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-overlay.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/hero-overlay.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$left$2d$shadow$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$left$2d$shadow$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/left-shadow.webp.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-2/left-shadow.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/Logo.svg.mjs { IMAGE => "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/images/hero-3/Logo.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
function LayeredHero({ logo = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
    alt: "Logo image",
    width: 230,
    height: 60
}, mainImage = __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$main$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$main$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src, mainImageAlt = "Collection Models", overlayImage = __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$overlay$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$hero$2d$overlay$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src, overlayImageAlt = "Featured Product", shadowImage = __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$left$2d$shadow$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$2$2f$left$2d$shadow$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src, shadowImageAlt = "Decorative shadow", watermarkText = "Shirt", titlePrimary = "🌟 এই শীতের", titleSecondary = "স্টাইল গেমে আনুন নতুনত্ব", description = "শীত এলেই শুরু হয় স্টাইলের নতুন অধ্যায়। এত কম দামে প্রিমিয়াম কোয়ালিটি Sweatshirt and Pant। এই শীতের স্টাইল গেমে আনুন নতুনত্ব। বাজেট ফ্রেন্ডলি প্রাইসে পাচ্ছেন আমাদের এক্সক্লুসিভ প্রিমিয়াম Sweatshirt Collection - যা আপনার লুককে করবে আরো স্টাইলিশ ও আকর্ষনীয়।", productName = "Sweat Shirt Set", originalPrice = "৳1427", discountPrice = "৳999", priceSuffix = "only", cta = {
    text: "অর্ডার করুন (৩০% ছাড়ে)",
    href: "#order"
}, settings = {
    showWatermark: true,
    showShadow: true,
    showPolaroid: true,
    showCtaIcon: true
}, theme = {
    primaryColor: "#FBBF24",
    textColor: "#222F28",
    descriptionColor: "#6B6B6B"
} }) {
    const { showWatermark = true, showShadow = true, showPolaroid = true, showCtaIcon = true } = settings;
    const { primaryColor = "#FBBF24", textColor = "#222F28", descriptionColor = "#6B6B6B" } = theme;
    const { src: finalLogoSrc = __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$images$2f$hero$2d$3$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src, alt: finalLogoAlt = "Logo image", width: finalLogoWidth = 230, height: finalLogoHeight = 60 } = logo || {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full flex flex-col-reverse lg:flex-row bg-white px-4 m-0 p-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden xl:block absolute top-8 left-6 lg:left-24 lg:top-6 z-20 mb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "logo relative w-[230px] h-20",
                    children: finalLogoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: finalLogoSrc,
                        alt: finalLogoAlt,
                        fill: true,
                        className: "object-contain object-left"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            showShadow && shadowImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden 2xl:block absolute left-0 top-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: shadowImage,
                    alt: shadowImageAlt,
                    fill: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full lg:w-[60%] flex flex-col xl:mt-10 2xl:pl-[13%] justify-center px-4 sm:px-8 lg:px-24 py-14 overflow-hidden pl-[5%]",
                children: [
                    showWatermark && watermarkText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-46 top-1/2 -translate-y-1/2 translate-x-[35%] pointer-events-none select-none z-0 hidden lg:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-oswald text-[160px] font-bold text-gray-300/50 tracking-widest uppercase",
                            style: {
                                writingMode: "vertical-lr",
                                textOrientation: "mixed"
                            },
                            children: watermarkText
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full lg:max-w-xl text-center lg:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "self-stretch inline-flex flex-col justify-center items-center lg:items-start lg:justify-start gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "z-20 block xl:hidden mb-20 lg:mb-16 relative w-[230px] h-[60px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "logo",
                                            children: finalLogoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: finalLogoSrc,
                                                alt: finalLogoAlt,
                                                width: finalLogoWidth,
                                                height: finalLogoHeight,
                                                className: "h-auto",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "self-stretch justify-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl sm:text-4xl xl:text-6xl font-bold font-['Hind_Siliguri'] leading-snug lg:leading-[74px]",
                                                style: {
                                                    color: primaryColor
                                                },
                                                children: titlePrimary
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl sm:text-4xl xl:text-6xl font-bold font-['Hind_Siliguri'] leading-snug xl:leading-[74px]",
                                                style: {
                                                    color: textColor
                                                },
                                                children: [
                                                    " ",
                                                    titleSecondary,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "self-stretch justify-start text-base sm:text-lg font-medium font-['Hind_Siliguri'] leading-relaxed",
                                        style: {
                                            color: descriptionColor
                                        },
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-lg lg:text-2xl",
                                        style: {
                                            color: textColor
                                        },
                                        children: [
                                            productName,
                                            " - ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 text-md lg:text-base line-through",
                                                children: originalPrice
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                                lineNumber: 144,
                                                columnNumber: 31
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: primaryColor
                                                },
                                                children: discountPrice
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                                lineNumber: 144,
                                                columnNumber: 119
                                            }, this),
                                            " ",
                                            priceSuffix
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: cta?.href || "#order",
                                className: "px-6 sm:px-8 mt-8 py-4 inline-flex justify-center items-center gap-2 w-full sm:w-auto cursor-pointer transition-colors",
                                style: {
                                    backgroundColor: primaryColor
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.opacity = "0.9",
                                onMouseLeave: (e)=>e.currentTarget.style.opacity = "1",
                                children: [
                                    showCtaIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 relative overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "21",
                                            viewBox: "0 0 18 21",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 5H12C12 3.34315 10.6569 2 9 2C7.3431 2 6 3.34315 6 5ZM4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5H17C17.5523 5 18 5.44772 18 6V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V6C0 5.44772 0.44772 5 1 5H4ZM2 7V19H16V7H2ZM6 9C6 10.6569 7.3431 12 9 12C10.6569 12 12 10.6569 12 9H14C14 11.7614 11.7614 14 9 14C6.23858 14 4 11.7614 4 9H6Z",
                                                fill: "#161616"
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center justify-start text-xl font-semibold font-['Hind_Siliguri'] leading-6",
                                        style: {
                                            color: textColor
                                        },
                                        children: cta?.text || "অর্ডার করুন (৩০% ছাড়ে)"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-[40%] h-[380px] sm:h-[500px] lg:h-[645px] xl:h-full relative order-first lg:order-0",
                children: mainImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: mainImage,
                            alt: mainImageAlt,
                            fill: true,
                            className: "relative! object-cover w-full h-full",
                            sizes: "(max-width: 1024px) 100vw, 40vw",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/10 pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            showPolaroid && overlayImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden 2xl:block absolute top-[65%] lg:top-1/2 left-1/2 lg:left-[60%] transform -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] z-30 w-[280px] sm:w-[320px] lg:w-[380px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform hover:rotate-0 duration-500 ease-out",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 pb-16 lg:p-5 lg:pb-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[350px] lg:h-[450px] overflow-hidden bg-gray-100 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: overlayImage,
                            alt: overlayImageAlt,
                            fill: true,
                            className: "object-cover hover:scale-105 transition-transform duration-700",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                            lineNumber: 205,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                        lineNumber: 204,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c = LayeredHero;
var _c;
__turbopack_context__.k.register(_c, "LayeredHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormHelpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocalizedString",
    ()=>getLocalizedString,
    "getSizesArray",
    ()=>getSizesArray,
    "getVariantDisplayValues",
    ()=>getVariantDisplayValues
]);
const getLocalizedString = (val)=>{
    if (!val) return "";
    if (typeof val === 'string') return val;
    if (typeof val === 'object') {
        const extracted = val.en || val.bn || Object.values(val)[0] || "";
        return typeof extracted === 'object' ? JSON.stringify(extracted) : String(extracted);
    }
    return String(val);
};
const getSizesArray = (sizes)=>{
    if (!sizes) return [];
    if (Array.isArray(sizes)) {
        return sizes.map((s)=>{
            const raw = typeof s === 'string' ? s : s?.name || s?.label || s?.value || String(s?.id || s);
            return String(raw || '').trim();
        }).filter(Boolean);
    }
    if (typeof sizes === 'string') {
        return sizes.split(',').map((s)=>s.trim()).filter(Boolean);
    }
    return [];
};
const getVariantDisplayValues = (variant)=>{
    if (!variant) return {
        label: "",
        value: ""
    };
    if (variant.attribute_name && variant.attribute_value) {
        return {
            label: getLocalizedString(variant.attribute_name),
            value: getLocalizedString(variant.attribute_value)
        };
    }
    if (variant.variant_name && variant.variant_value) {
        return {
            label: getLocalizedString(variant.variant_name),
            value: getLocalizedString(variant.variant_value)
        };
    }
    const ignoredKeys = [
        'id',
        'price',
        'product_id',
        'created_at',
        'updated_at',
        'deleted_at',
        'image',
        'thumbnail',
        'thumbnail_url',
        'sku',
        'stock',
        'quantity',
        'sizes',
        'name',
        'title',
        'description',
        'current_pricing',
        'attributes',
        'variants',
        'status',
        'is_active',
        'type'
    ];
    for (const key of Object.keys(variant)){
        if (!ignoredKeys.includes(key) && variant[key] !== null && variant[key] !== undefined && typeof variant[key] !== 'object' && variant[key] !== '') {
            const displayLabel = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
            return {
                label: displayLabel,
                value: String(variant[key])
            };
        }
    }
    let fallbackValue = variant.name || variant.title || variant.sku || "";
    let extracted = fallbackValue;
    if (fallbackValue && typeof fallbackValue === 'object') {
        extracted = fallbackValue.name || fallbackValue.value || fallbackValue.title || fallbackValue;
    }
    return {
        label: "",
        value: getLocalizedString(extracted)
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderFormProductList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/react-icons@5.6.0_react@19.2.0/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/react-icons@5.6.0_react@19.2.0/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormHelpers.ts [app-client] (ecmascript)");
;
;
;
;
function OrderFormProductList({ isLoadingProduct, productData, variants, allowedVariants, maxVariantsToShow, selectedVariantId, setSelectedVariantId, selectedSize, setSelectedSize, quantity, setQuantity, primaryColor, rawProductName, productPrice, productImage, productImageAlt, displayProductName, displayProductPrice, displayProductImage }) {
    const variantLimit = Math.max(0, maxVariantsToShow ?? variants.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 p-3 lg:p-6 bg-white flex flex-col justify-start items-start gap-4 border-b lg:border-b-0 lg:border-r border-neutral-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-zinc-800 text-2xl lg:text-3xl font-bold leading-tight",
                children: "Select Product"
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            isLoadingProduct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full p-4 text-center text-zinc-500 bg-neutral-50 rounded-xl border border-neutral-200",
                children: "Loading products..."
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this) : productData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col gap-3",
                children: variants.length > 0 ? variants.slice(0, variantLimit).map((variant)=>{
                    const isSelected = String(variant.id) === String(selectedVariantId);
                    const { label: vLabel, value: vValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariantDisplayValues"])(variant);
                    const dName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedString"])(rawProductName);
                    const vPrice = variant.price ?? variant.current_pricing?.unit_price ?? variant.current_pricing?.retail_price ?? productData?.price ?? productData?.current_pricing?.unit_price ?? productData?.current_pricing?.retail_price;
                    const hasPrice = vPrice !== null && vPrice !== undefined && String(vPrice).trim() !== '';
                    const dPrice = hasPrice ? String(vPrice).includes('৳') ? String(vPrice) : `৳${vPrice}` : productPrice || "৳1499";
                    const vImage = variant.image || variant.thumbnail || productData?.image || productData?.thumbnail_image || productData?.thumbnail || productData?.thumbnail_url || productImage;
                    let sizes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizesArray"])(variant.sizes || productData?.sizes);
                    if (allowedVariants && allowedVariants.length > 0) {
                        const allowedList = allowedVariants.map((a)=>(a.name || '').toLowerCase().trim()).filter(Boolean);
                        if (allowedList.length > 0) {
                            sizes = sizes.filter((s)=>allowedList.some((allowed)=>s.toLowerCase().trim() === allowed || s.toLowerCase().trim().includes(allowed)));
                        }
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>{
                            setSelectedVariantId(variant.id);
                            const nextSizes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizesArray"])(variant.sizes || productData?.sizes);
                            if (selectedSize && !nextSizes.includes(selectedSize)) {
                                setSelectedSize('');
                            }
                        },
                        className: "p-4 bg-white border rounded-xl flex flex-col gap-4 cursor-pointer transition-all",
                        style: {
                            borderColor: isSelected ? primaryColor : '#e5e5e5',
                            backgroundColor: isSelected ? '#ffffff' : '#ffffff',
                            borderWidth: isSelected ? '2px' : '1px',
                            boxShadow: isSelected ? `0 4px 6px -1px rgba(0, 0, 0, 0.1)` : 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 mt-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 rounded-full border-2 flex items-center justify-center p-0.5 transition-all",
                                            style: {
                                                borderColor: isSelected ? primaryColor : '#d4d4d8'
                                            },
                                            children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full rounded-full",
                                                style: {
                                                    backgroundColor: primaryColor
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                                lineNumber: 105,
                                                columnNumber: 40
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                            lineNumber: 101,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                        lineNumber: 100,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col flex-1 gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm lg:text-base font-semibold text-zinc-800 break-words whitespace-normal leading-snug",
                                                children: dName
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                                lineNumber: 110,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-zinc-500",
                                                        children: "Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm lg:text-base font-bold",
                                                        style: {
                                                            color: primaryColor
                                                        },
                                                        children: dPrice
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                                lineNumber: 113,
                                                columnNumber: 23
                                            }, this),
                                            vValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block px-2 py-1 bg-white border rounded w-fit mt-1",
                                                style: {
                                                    borderColor: primaryColor
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold",
                                                    style: {
                                                        color: primaryColor
                                                    },
                                                    children: [
                                                        vLabel ? `${vLabel}: ` : '',
                                                        vValue
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                                lineNumber: 121,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                        lineNumber: 109,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 ml-2",
                                        children: vImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: vImage,
                                            alt: productImageAlt || "Product",
                                            className: "w-20 h-20 rounded-lg object-cover border border-neutral-100 bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                            lineNumber: 134,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 rounded-lg bg-neutral-100 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuShoppingBag"], {
                                                className: "w-6 h-6 text-neutral-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                                lineNumber: 137,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                            lineNumber: 136,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                        lineNumber: 132,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                lineNumber: 99,
                                columnNumber: 19
                            }, this),
                            sizes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-zinc-800",
                                        children: "Size:"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                        lineNumber: 145,
                                        columnNumber: 23
                                    }, this),
                                    sizes.map((size)=>{
                                        const isSizeSelected = isSelected && selectedSize === size;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                setSelectedVariantId(variant.id);
                                                setSelectedSize(size);
                                            },
                                            className: `w-9 h-9 flex items-center justify-center rounded border text-xs font-bold transition-all ${isSizeSelected ? 'border-blue-600 text-blue-600' : 'border-neutral-200 text-zinc-600 hover:border-neutral-400'}`,
                                            style: isSizeSelected ? {
                                                borderColor: primaryColor,
                                                color: primaryColor,
                                                backgroundColor: `${primaryColor}10`
                                            } : {},
                                            children: size
                                        }, size, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                            lineNumber: 149,
                                            columnNumber: 27
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this)
                        ]
                    }, variant.id, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this);
                }) : // Single product with no variants
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-white border rounded-xl flex flex-col gap-4 transition-all",
                    style: {
                        borderColor: primaryColor,
                        backgroundColor: '#ffffff',
                        borderWidth: '2px',
                        boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 mt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 rounded-full border-2 flex items-center justify-center p-0.5 transition-all",
                                        style: {
                                            borderColor: primaryColor
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full rounded-full",
                                            style: {
                                                backgroundColor: primaryColor
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                            lineNumber: 188,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                        lineNumber: 184,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col flex-1 gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm lg:text-base font-semibold text-zinc-800 break-words whitespace-normal leading-snug",
                                            children: displayProductName
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                            lineNumber: 193,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-zinc-500",
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm lg:text-base font-bold",
                                                    style: {
                                                        color: primaryColor
                                                    },
                                                    children: displayProductPrice
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                    lineNumber: 192,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 ml-2",
                                    children: displayProductImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: displayProductImage,
                                        alt: productImageAlt || "Product",
                                        className: "w-20 h-20 rounded-lg object-cover border border-neutral-100 bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                        lineNumber: 206,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 rounded-lg bg-neutral-100 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuShoppingBag"], {
                                            className: "w-6 h-6 text-neutral-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                            lineNumber: 209,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                        lineNumber: 208,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                    lineNumber: 204,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                            lineNumber: 182,
                            columnNumber: 15
                        }, this),
                        (()=>{
                            let sizes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizesArray"])(productData?.sizes);
                            if (allowedVariants && allowedVariants.length > 0) {
                                const allowedList = allowedVariants.map((a)=>(a.name || '').toLowerCase().trim()).filter(Boolean);
                                if (allowedList.length > 0) {
                                    sizes = sizes.filter((s)=>allowedList.some((allowed)=>s.toLowerCase().trim() === allowed || s.toLowerCase().trim().includes(allowed)));
                                }
                            }
                            if (sizes.length === 0) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-zinc-800",
                                        children: "Size:"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                        lineNumber: 228,
                                        columnNumber: 21
                                    }, this),
                                    sizes.map((size)=>{
                                        const isSizeSelected = selectedSize === size;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                setSelectedSize(size);
                                            },
                                            className: `w-9 h-9 flex items-center justify-center rounded border text-xs font-bold transition-all ${isSizeSelected ? 'border-blue-600 text-blue-600' : 'border-neutral-200 text-zinc-600 hover:border-neutral-400'}`,
                                            style: isSizeSelected ? {
                                                borderColor: primaryColor,
                                                color: primaryColor,
                                                backgroundColor: `${primaryColor}10`
                                            } : {},
                                            children: size
                                        }, size, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                            lineNumber: 232,
                                            columnNumber: 23
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                lineNumber: 227,
                                columnNumber: 19
                            }, this);
                        })()
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                    lineNumber: 173,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full p-4 text-center text-zinc-500 bg-neutral-50 rounded-xl border border-neutral-200",
                children: "No product selected"
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                lineNumber: 255,
                columnNumber: 9
            }, this),
            productData?.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "w-full mt-2 text-sm text-zinc-600 font-normal leading-relaxed max-h-32 overflow-y-auto custom-scrollbar pr-2 whitespace-pre-wrap",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedString"])(productData.description)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mt-2 p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-zinc-800 font-semibold text-sm lg:text-base",
                        children: "Quantity:"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setQuantity(Math.max(1, quantity - 1)),
                                className: "w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-zinc-600 hover:bg-neutral-100 transition-all duration-200 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMinus"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-8 text-center text-sm font-bold text-zinc-800",
                                children: quantity
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setQuantity(quantity + 1),
                                className: "w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-zinc-600 hover:bg-neutral-100 transition-all duration-200 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = OrderFormProductList;
var _c;
__turbopack_context__.k.register(_c, "OrderFormProductList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderFormCartSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function OrderFormCartSummary({ isLoadingProduct, displayProductName, selectedSize, quantity, subtotal, shippingCharge, total }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 self-stretch p-4 lg:p-6 bg-neutral-50 border-b lg:border-b-0 lg:border-r border-violet-200 flex flex-col justify-start items-start gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-zinc-800 text-2xl lg:text-3xl font-bold leading-tight",
                children: "Your Cart"
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "self-stretch flex flex-col justify-start items-start gap-1 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-zinc-800 text-lg lg:text-xl font-semibold leading-6",
                        children: "Product"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "self-stretch p-4 bg-white rounded-2xl border border-neutral-200 flex justify-between items-end gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-zinc-800 text-lg lg:text-xl font-semibold leading-6",
                                        children: isLoadingProduct ? "Loading..." : displayProductName
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    selectedSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-zinc-500 mt-1 font-medium bg-neutral-100 px-2 py-0.5 rounded",
                                        children: [
                                            "Size: ",
                                            selectedSize
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-end gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm lg:text-base text-zinc-600 font-semibold",
                                        children: [
                                            "Qty: ",
                                            quantity
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-800 text-lg lg:text-xl font-semibold leading-6",
                                        children: [
                                            "৳",
                                            subtotal
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "self-stretch px-4 flex flex-col justify-start items-start gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-zinc-800 text-lg lg:text-xl font-semibold leading-6",
                        children: "Summary"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "self-stretch flex justify-between items-start text-zinc-800 text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Sub-Total"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "৳",
                                    subtotal
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                lineNumber: 49,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "self-stretch flex justify-between items-start text-zinc-800 text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Shipping Charge"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "৳",
                                    shippingCharge
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                lineNumber: 52,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "self-stretch pt-2 mt-2 border-t border-neutral-200 flex justify-between items-start text-zinc-800 text-xl font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "৳",
                                    total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                                lineNumber: 55,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = OrderFormCartSummary;
var _c;
__turbopack_context__.k.register(_c, "OrderFormCartSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderFormBillingFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/react-icons@5.6.0_react@19.2.0/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
;
;
function OrderFormBillingFields({ primaryColor, namePlaceholder, phonePlaceholder, addressPlaceholder, notesPlaceholder, cashOnDeliveryText, privacyPolicyUrl, submitButtonText, name, setName, phone, setPhone, address, setAddress, notes, setNotes, shippingOptions, selectedShipping, setSelectedShipping, isSubmitting }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 self-stretch p-4 lg:p-6 bg-neutral-100 flex flex-col justify-start items-start gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-black text-2xl lg:text-3xl font-bold leading-tight",
                        children: "Enter Billing Details"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-800 text-sm lg:text-base leading-5",
                        children: [
                            "Your personal data will be used to process your order, and for other purposes described in our",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: privacyPolicyUrl || "/privacy-policy",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-blue-700 underline transition-colors hover:text-blue-500",
                                children: [
                                    " ",
                                    "privacy policy."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "self-stretch flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-black text-lg lg:text-xl font-semibold leading-6",
                                children: [
                                    "আপনার নাম ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: primaryColor
                                        },
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                        lineNumber: 69,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: namePlaceholder || "আপনার নাম",
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                className: "mt-1 w-full p-3 bg-white rounded-lg border text-base lg:text-xl font-semibold text-black placeholder-neutral-400 outline-none focus:ring-2 transition-all duration-200 border-neutral-200 focus:ring-lime-500",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-black text-lg lg:text-xl font-semibold leading-6",
                                children: [
                                    "আপনার মোবাইল নাম্বার ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: primaryColor
                                        },
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                        lineNumber: 83,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                placeholder: phonePlaceholder || "+8801 XXX XXXXXX",
                                value: phone,
                                onChange: (e)=>setPhone(e.target.value),
                                className: "mt-1 w-full p-3 bg-white rounded-lg border text-base lg:text-xl font-semibold text-black placeholder-neutral-400 outline-none focus:ring-2 transition-all duration-200 border-neutral-200 focus:ring-lime-500",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "self-stretch flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-black text-lg lg:text-xl font-semibold leading-6",
                                children: [
                                    "শিপিং এরিয়া সিলেক্ট করুন ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: primaryColor
                                        },
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                        lineNumber: 99,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 border-t border-neutral-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                    className: "w-full",
                                    role: "radiogroup",
                                    "aria-label": "Shipping options",
                                    children: shippingOptions.map((option, index)=>{
                                        const optionId = option.id ?? String(index);
                                        const isSelected = selectedShipping === optionId;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "cursor-pointer py-3 border-b border-neutral-200 flex justify-between items-center transition-all duration-200 hover:bg-violet-200/50 rounded-lg -mx-2 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "shipping-option",
                                                            value: optionId,
                                                            checked: isSelected,
                                                            onChange: ()=>setSelectedShipping(optionId),
                                                            className: "sr-only"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 flex items-center justify-center p-0.5 transition-all duration-200",
                                                            style: {
                                                                borderColor: isSelected ? '#65a30d' : '#e5e5e5'
                                                            },
                                                            children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-full bg-lime-600 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-zinc-800 text-base lg:text-xl font-normal leading-6",
                                                            children: option.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-800 text-base lg:text-xl font-semibold leading-6",
                                                    children: [
                                                        "৳ ",
                                                        option.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, option.id ?? `${option.label}-${index}`, true, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-black text-lg lg:text-xl font-semibold leading-6",
                                children: [
                                    "আপনার ঠিকানা ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: primaryColor
                                        },
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                        lineNumber: 147,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: addressPlaceholder || "আপনার ঠিকানা",
                                value: address,
                                onChange: (e)=>setAddress(e.target.value),
                                className: "mt-1 w-full p-3 bg-white rounded-lg border h-24 text-base lg:text-xl font-semibold text-black placeholder-neutral-400 outline-none focus:ring-2 transition-all duration-200 resize-none border-neutral-200 focus:ring-lime-500",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-black text-lg lg:text-xl font-semibold leading-6",
                        children: "অর্ডার নোট (যদি থাকে)"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        placeholder: notesPlaceholder || "লিখুন",
                        value: notes,
                        onChange: (e)=>setNotes(e.target.value),
                        className: "mt-1 w-full text-black p-3 bg-white rounded-lg border border-neutral-200 h-24 text-base lg:text-xl font-semibold placeholder-neutral-400 outline-none focus:ring-2 transition-all duration-200 resize-none focus:ring-lime-500"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "self-stretch rounded-2xl overflow-hidden w-full",
                style: {
                    backgroundColor: `${primaryColor}20`,
                    border: `2px solid ${primaryColor}`,
                    boxShadow: `inset 0 0 0 4px ${primaryColor}20`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 text-center text-sm lg:text-base",
                        style: {
                            color: primaryColor
                        },
                        children: cashOnDeliveryText || "Cash on delivery. We prioritizing frictionless payments"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "w-full px-5 py-3 lg:px-7 lg:py-3.5 rounded-t-xl inline-flex justify-center items-center gap-2 transition-all duration-300 hover:opacity-95 hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4",
                        style: {
                            backgroundColor: primaryColor,
                            boxShadow: `0 0 0 4px ${primaryColor}30`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuShoppingBag"], {
                                className: `w-8 h-8 lg:w-10 lg:h-10 text-white transition-transform ${isSubmitting ? 'animate-pulse' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-xl lg:text-2xl font-bold leading-tight lg:leading-10",
                                children: isSubmitting ? 'Processing...' : submitButtonText || 'অর্ডার কনফার্ম করুন'
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = OrderFormBillingFields;
var _c;
__turbopack_context__.k.register(_c, "OrderFormBillingFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderFormUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormProductList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormProductList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormCartSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormCartSummary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormBillingFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormBillingFields.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderFormHelpers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function OrderFormUI({ title, description, submitButtonText, productImage, productImageAlt, productName, productPrice, shippingOptions = [], namePlaceholder, phonePlaceholder, addressPlaceholder, notesPlaceholder, cashOnDeliveryText, privacyPolicyUrl, colors = {}, apiBaseUrl, apiKey, productId, orderPlacementUrl, maxVariantsToShow, maxProductsToShow, allowedVariants }) {
    _s();
    const primaryColor = colors.primary || '#F36621';
    const textColor = colors.text || '#27272a';
    const backgroundColor = colors.background || '#f3e8ff';
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedShipping, setSelectedShipping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(shippingOptions[0]?.id || '');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [allProducts, setAllProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingProduct, setIsLoadingProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedVariantId, setSelectedVariantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Backward-compatible fallback for previously saved content.
    const effectiveMaxVariantsToShow = maxVariantsToShow ?? maxProductsToShow;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderFormUI.useEffect": ()=>{
            const fetchProducts = {
                "OrderFormUI.useEffect.fetchProducts": async ()=>{
                    setIsLoadingProduct(true);
                    try {
                        const baseUrl = apiBaseUrl || __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL;
                        if (!baseUrl) return;
                        const headers = {
                            "Accept": "application/json"
                        };
                        if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;
                        if (!productId) {
                            console.warn("OrderFormUI: productId is required to fetch product data.");
                            setIsLoadingProduct(false);
                            return;
                        }
                        const endpoint = `${baseUrl.replace(/\/$/, '')}/products/${productId}`;
                        const url = endpoint;
                        const res = await fetch(url, {
                            headers
                        });
                        const data = await res.json();
                        const payload = data?.data ?? data?.product ?? data;
                        const items = Array.isArray(payload) ? payload : payload ? [
                            payload
                        ] : [];
                        setAllProducts(items);
                    } catch (err) {
                        console.warn("Products API failed:", err);
                    } finally{
                        setIsLoadingProduct(false);
                    }
                }
            }["OrderFormUI.useEffect.fetchProducts"];
            fetchProducts();
        }
    }["OrderFormUI.useEffect"], [
        apiBaseUrl,
        apiKey,
        productId
    ]);
    const effectiveProductId = productId ?? allProducts[0]?.id ?? '';
    const productData = allProducts.find((p)=>String(p.id) === String(effectiveProductId)) || allProducts[0];
    let rawVariants = productData?.variants || productData?.attributes || [];
    let filteredVariants = rawVariants;
    if (allowedVariants && allowedVariants.length > 0) {
        const allowedList = allowedVariants.map((a)=>(a.name || '').toLowerCase().trim()).filter(Boolean);
        if (allowedList.length > 0) {
            filteredVariants = rawVariants.filter((v)=>{
                const { label, value } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariantDisplayValues"])(v);
                const nameStr = String(v.name || v.title || v.sku || value || '').toLowerCase().trim();
                const sizes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizesArray"])(v.sizes || productData?.sizes).map((s)=>s.toLowerCase().trim());
                const colors = [
                    String(v.color || '').toLowerCase().trim(),
                    String(v.attribute_value || '').toLowerCase().trim()
                ].filter(Boolean);
                return allowedList.some((allowed)=>nameStr === allowed || nameStr.includes(allowed) || sizes.includes(allowed) || colors.includes(allowed) || String(label).toLowerCase().trim() === allowed);
            });
        }
    }
    const variants = filteredVariants;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderFormUI.useEffect": ()=>{
            if (variants.length > 0) {
                if (!variants.find({
                    "OrderFormUI.useEffect": (v)=>String(v.id) === String(selectedVariantId)
                }["OrderFormUI.useEffect"])) {
                    setSelectedVariantId(variants[0].id);
                }
            } else {
                setSelectedVariantId('');
            }
        }
    }["OrderFormUI.useEffect"], [
        variants,
        selectedVariantId
    ]);
    const selectedVariantData = variants.find((v)=>String(v.id) === String(selectedVariantId)) || variants[0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderFormUI.useEffect": ()=>{
            const availableSizes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizesArray"])(selectedVariantData?.sizes || productData?.sizes);
            if (selectedSize && !availableSizes.includes(selectedSize)) {
                setSelectedSize('');
            }
        }
    }["OrderFormUI.useEffect"], [
        selectedVariantData,
        productData,
        selectedSize
    ]);
    const rawTitle = title || "Stock সীমিত – আজই অর্ডার করুন!";
    const rawProductName = productData?.name || productData?.title || productName || "প্রিমিয়াম Quality Panjabi";
    const displayTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedString"])(rawTitle);
    const { value: globalVariantValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariantDisplayValues"])(selectedVariantData);
    const displayProductName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalizedString"])(rawProductName) + (globalVariantValue ? ` - ${globalVariantValue}` : "");
    const variantPrice = selectedVariantData?.price ?? selectedVariantData?.current_pricing?.unit_price ?? selectedVariantData?.current_pricing?.retail_price;
    const basePrice = productData?.price ?? productData?.current_pricing?.unit_price ?? productData?.current_pricing?.retail_price;
    const finalPrice = variantPrice ?? basePrice;
    const hasFinalPrice = finalPrice !== null && finalPrice !== undefined && String(finalPrice).trim() !== '';
    const displayProductPrice = hasFinalPrice ? String(finalPrice).includes('৳') ? String(finalPrice) : `৳${finalPrice}` : productPrice || "৳1499";
    const displayProductImage = selectedVariantData?.image || selectedVariantData?.thumbnail || productData?.image || productData?.thumbnail_image || productData?.thumbnail || productData?.thumbnail_url || productImage;
    const selectedShippingOption = shippingOptions.find((opt)=>opt.id === selectedShipping) || shippingOptions[0];
    const shippingCharge = selectedShippingOption?.price || 0;
    const productPriceNum = parseFloat(String(displayProductPrice).replace(/[^\d.]/g, '') || '0');
    const subtotal = productPriceNum * quantity;
    const total = subtotal + shippingCharge;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        const baseUrl = apiBaseUrl || __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL;
        const submitUrl = orderPlacementUrl || (baseUrl ? `${baseUrl.replace(/\/$/, '')}/orders` : null);
        const payload = {
            product_id: effectiveProductId,
            variant_id: selectedVariantId || undefined,
            size: selectedSize || undefined,
            name,
            phone,
            address,
            notes,
            quantity,
            shipping_id: selectedShipping,
            total_amount: total
        };
        if (submitUrl) {
            try {
                const headers = {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                };
                if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;
                const res = await fetch(submitUrl, {
                    method: "POST",
                    headers,
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error("API Submission failed");
                setIsSubmitting(false);
                alert('Order submitted successfully!');
                setName('');
                setPhone('');
                setAddress('');
                setNotes('');
                setQuantity(1);
            } catch (err) {
                setIsSubmitting(false);
                alert('Failed to submit order. Please try again or contact support.');
            }
        } else {
            setTimeout(()=>{
                setIsSubmitting(false);
                alert('Order submitted successfully! (Simulated)');
                setName('');
                setPhone('');
                setAddress('');
                setNotes('');
                setQuantity(1);
            }, 2000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24",
        style: {
            backgroundColor
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-start items-center gap-8 lg:gap-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "self-stretch flex flex-col justify-start items-center gap-4 mb-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[64px]",
                            style: {
                                color: textColor
                            },
                            children: displayTitle
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderForm.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-lg md:text-xl lg:text-2xl font-normal leading-7 mt-0",
                            style: {
                                color: textColor
                            },
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderForm.tsx",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderForm.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "self-stretch rounded-2xl grid grid-cols-1 lg:grid-cols-3 overflow-hidden shadow-xl lg:shadow-none bg-white lg:bg-transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormProductList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isLoadingProduct: isLoadingProduct,
                            productData: productData,
                            variants: variants,
                            allowedVariants: allowedVariants,
                            maxVariantsToShow: effectiveMaxVariantsToShow,
                            selectedVariantId: selectedVariantId,
                            setSelectedVariantId: setSelectedVariantId,
                            selectedSize: selectedSize,
                            setSelectedSize: setSelectedSize,
                            quantity: quantity,
                            setQuantity: setQuantity,
                            primaryColor: primaryColor,
                            rawProductName: rawProductName,
                            productPrice: productPrice,
                            productImage: productImage,
                            productImageAlt: productImageAlt,
                            displayProductName: displayProductName,
                            displayProductPrice: displayProductPrice,
                            displayProductImage: displayProductImage
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderForm.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormCartSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isLoadingProduct: isLoadingProduct,
                            displayProductName: displayProductName,
                            selectedSize: selectedSize,
                            quantity: quantity,
                            subtotal: subtotal,
                            shippingCharge: shippingCharge,
                            total: total
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderForm.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderFormBillingFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            primaryColor: primaryColor,
                            namePlaceholder: namePlaceholder,
                            phonePlaceholder: phonePlaceholder,
                            addressPlaceholder: addressPlaceholder,
                            notesPlaceholder: notesPlaceholder,
                            cashOnDeliveryText: cashOnDeliveryText,
                            privacyPolicyUrl: privacyPolicyUrl,
                            submitButtonText: submitButtonText,
                            name: name,
                            setName: setName,
                            phone: phone,
                            setPhone: setPhone,
                            address: address,
                            setAddress: setAddress,
                            notes: notes,
                            setNotes: setNotes,
                            shippingOptions: shippingOptions,
                            selectedShipping: selectedShipping,
                            setSelectedShipping: setSelectedShipping,
                            isSubmitting: isSubmitting
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderForm.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderForm.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderForm.tsx",
            lineNumber: 221,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderForm.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_s(OrderFormUI, "PygHEHvUyJF22B52oSgrW2eBJCI=");
_c = OrderFormUI;
var _c;
__turbopack_context__.k.register(_c, "OrderFormUI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QualityUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/react-icons@5.6.0_react@19.2.0/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
;
;
function QualityUI({ title, subtitle, imageCards = [], detailCards = [], ctaButton, colors = {} }) {
    const primaryColor = colors.primary || '#F36621';
    const textColor = colors.text || '#27272a';
    const backgroundColor = colors.background || '#f3f4f6';
    function CheckListItem({ children }) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCheckCircleFill"], {
                    className: "w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-700 leading-relaxed",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    function PrimaryButton({ href, children }) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href || '#',
            className: "inline-block px-8 py-4 text-white font-bold rounded-lg transition-all hover:opacity-90 shadow-lg",
            style: {
                backgroundColor: primaryColor
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-24",
                style: {
                    backgroundColor: '#f3f4f6'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-bold leading-tight mb-4",
                                style: {
                                    color: textColor
                                },
                                children: [
                                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this),
                                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        style: {
                                            color: primaryColor
                                        },
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-4",
                            children: imageCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[680px] rounded-2xl bg-cover bg-center relative p-6 flex flex-col justify-end overflow-hidden group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105",
                                            style: {
                                                backgroundImage: card.image ? `url(${card.image})` : undefined
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-60 rounded-2xl p-6 z-10 absolute left-0 bottom-0",
                                            style: {
                                                backgroundColor: primaryColor
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-2 -right-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCheckCircleFill"], {
                                                        className: "w-7 h-7 text-green-500 bg-white rounded-full border-2 border-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white text-2xl font-bold leading-10",
                                                    children: card.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-xl font-semibold leading-7",
                                                    children: card.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white pt-24 pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-4",
                            children: detailCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-6",
                                    style: {
                                        backgroundColor: `${primaryColor}10`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-semibold leading-8 mb-3",
                                            style: {
                                                color: textColor
                                            },
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: card.items?.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckListItem, {
                                                    children: item.text
                                                }, itemIndex, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 flex justify-center items-start flex-wrap gap-4",
                            children: ctaButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimaryButton, {
                                href: ctaButton.href,
                                children: ctaButton.text
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = QualityUI;
var _c;
__turbopack_context__.k.register(_c, "QualityUI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SizeChartUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/react-icons@5.6.0_react@19.2.0/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
;
;
;
function SizeChartUI({ title, description, sizeData = [], chartImage, chartImageAlt, whatsappText, whatsappNumber, contactText, returnPolicy, colors = {} }) {
    const primaryColor = colors.primary || '#10b981';
    const textColor = colors.text || '#27272a';
    const backgroundColor = colors.background || '#ffffff';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-start items-center gap-8 lg:gap-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-zinc-800 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[64px] text-center",
                            style: {
                                color: textColor
                            },
                            children: title || "সাইজ চার্ট"
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-600 text-lg mt-4 text-center",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "self-stretch grid lg:grid-cols-3 gap-8 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 rounded-2xl border border-zinc-200 overflow-hidden bg-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-[2fr_1fr_1fr_1fr_1fr] min-w-[600px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        [
                                            'M',
                                            'L',
                                            'XL',
                                            'XXL'
                                        ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 flex items-center justify-center border-b border-l border-zinc-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-zinc-800 text-lg md:text-xl",
                                                    children: size
                                                }, void 0, false, {
                                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this)
                                            }, size, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this)),
                                        sizeData.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 border-t border-zinc-200 ${rowIndex === 0 ? 'border-t-0' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-zinc-800 text-base md:text-lg",
                                                                children: row.measurement
                                                            }, void 0, false, {
                                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-zinc-600 text-xs md:text-sm mt-1",
                                                                children: row.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 flex items-center justify-center border-t border-l border-zinc-200 ${rowIndex === 0 ? 'border-t-0' : ''}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-zinc-800 text-lg md:text-xl",
                                                            children: row.m
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 flex items-center justify-center border-t border-l border-zinc-200 ${rowIndex === 0 ? 'border-t-0' : ''}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-zinc-800 text-lg md:text-xl",
                                                            children: row.l
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 flex items-center justify-center border-t border-l border-zinc-200 ${rowIndex === 0 ? 'border-t-0' : ''}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-zinc-800 text-lg md:text-xl",
                                                            children: row.xl
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 flex items-center justify-center border-t border-l border-zinc-200 ${rowIndex === 0 ? 'border-t-0' : ''}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-zinc-800 text-lg md:text-xl",
                                                            children: row.xxl
                                                        }, void 0, false, {
                                                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, row.measurement, true, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1 bg-gray-100 rounded-2xl flex items-center justify-center p-8 h-full min-h-[300px]",
                            children: chartImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: chartImage,
                                alt: chartImageAlt || "Sweatshirt measurement guide",
                                className: "max-w-full h-auto object-contain max-h-[400px]"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-zinc-500 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Chart Image"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: "Upload an image to display here"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "self-stretch p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8",
                    style: {
                        backgroundColor: primaryColor
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex-1 text-white text-lg md:text-2xl font-semibold leading-relaxed md:leading-7 text-center md:text-left",
                            children: returnPolicy || "অবশ্যই 100% কনফার্ম হয়ে অর্ডারটি করবেন। সাইজে প্রবলেম হলে অথবা অন্য কোন সমস্যা হলে রিটার্ন বা এক্সচেঞ্জ করে নিতে পারবেন ৩ দিনের ভেতরে।"
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 text-white text-center md:text-right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:items-end gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center md:justify-end gap-2 text-white/90",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base md:text-xl font-semibold",
                                                children: whatsappText || "যেকোন প্রয়োজনে"
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsWhatsapp"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl md:text-3xl font-bold font-mono",
                                        children: whatsappNumber || "01712508063"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl md:text-4xl lg:text-5xl font-bold mt-1",
                                        children: contactText || "যোগাযোগ করুন"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = SizeChartUI;
var _c;
__turbopack_context__.k.register(_c, "SizeChartUI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialsUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SectionHeader.tsx [app-client] (ecmascript)");
'use client';
;
;
function TestimonialsUI({ title = "গ্রাহকের মতামত", description = "আমাদের গ্রাহকরা সবসময়ই আমাদের অভিজ্ঞতা নিয়ে সন্তুষ্ট! প্রথম যোগাযোগ থেকে শুরু করে চূড়ান্ত ডেলিভারি পর্যন্ত আমরা সর্বোচ্চ মানের সেবা ও পণ্য দেওয়ার চেষ্টা করি, যা প্রত্যাশার থেকেও বেশি আনন্দ দেয়।", images = [], initialDisplayCount = 8, loadMoreCount = 4, loadMoreText = "আরো দেখুন", loadingText = "লোড হচ্ছে...", colors = {} }) {
    const textColor = colors.text || '#27272a';
    const backgroundColor = colors.background || '#f3f4f6';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-24 pb-40 relative",
        style: {
            backgroundColor
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "text-center",
                    titleClassName: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-[56px] lg:leading-[64px]",
                    descriptionClassName: "mt-4 max-w-5xl mx-auto text-2xl leading-7",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: textColor
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx",
                        lineNumber: 46,
                        columnNumber: 18
                    }, this),
                    description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: textColor
                        },
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx",
                        lineNumber: 47,
                        columnNumber: 24
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                        children: images.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group rounded-lg overflow-hidden relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: testimonial.src,
                                    alt: testimonial.alt || `Testimonial screenshot ${index + 1}`,
                                    className: "w-full h-[500px] rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out object-cover object-bottom",
                                    loading: index < 4 ? 'eager' : 'lazy'
                                }, void 0, false, {
                                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            }, `${testimonial.src}-${index}`, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = TestimonialsUI;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsUI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// UI Components
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$CheckListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/CheckListItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$DesignAndFit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$FAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryCol$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryGrid6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Helpline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$InlineHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$LayeredHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$OrderForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/OrderForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Quality$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SizeChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx [app-client] (ecmascript) <export default as Hero>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx [app-client] (ecmascript) <export default as LayeredHeroUI>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayeredHeroUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$LayeredHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$LayeredHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx [app-client] (ecmascript) <export default as InlineHeroUI>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InlineHeroUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$InlineHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$InlineHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx [app-client] (ecmascript) <export default as GalleryColUI>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryColUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryCol$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryCol$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx [app-client] (ecmascript) <export default as GalleryGridUI>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryGridUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx [app-client] (ecmascript) <export default as GalleryGrid6UI>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryGrid6UI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryGrid6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryGrid6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx [app-client] (ecmascript) <export default as FeaturesUI>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx [app-client] (ecmascript) <export default as DesignAndFitUI>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesignAndFitUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$DesignAndFit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$DesignAndFit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx [app-client] (ecmascript) <export default as SizeChartUI>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SizeChartUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SizeChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SizeChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx [app-client] (ecmascript) <export default as FAQUI>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$FAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$FAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx [app-client] (ecmascript) <export default as QualityUI>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QualityUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Quality$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Quality$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx [app-client] (ecmascript) <export default as TestimonialsUI>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx [app-client] (ecmascript) <export default as Helpline>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Helpline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Helpline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Helpline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx [app-client] (ecmascript)");
}),
"[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PreviewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/node_modules/.pnpm/next@16.2.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hero$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Hero.tsx [app-client] (ecmascript) <export default as Hero>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$LayeredHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayeredHeroUI$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/LayeredHero.tsx [app-client] (ecmascript) <export default as LayeredHeroUI>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$InlineHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InlineHeroUI$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/InlineHero.tsx [app-client] (ecmascript) <export default as InlineHeroUI>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryCol$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GalleryColUI$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryCol.tsx [app-client] (ecmascript) <export default as GalleryColUI>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GalleryGridUI$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid.tsx [app-client] (ecmascript) <export default as GalleryGridUI>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryGrid6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GalleryGrid6UI$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/GalleryGrid6.tsx [app-client] (ecmascript) <export default as GalleryGrid6UI>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FeaturesUI$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Features.tsx [app-client] (ecmascript) <export default as FeaturesUI>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$DesignAndFit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DesignAndFitUI$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/DesignAndFit.tsx [app-client] (ecmascript) <export default as DesignAndFitUI>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SizeChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SizeChartUI$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/SizeChart.tsx [app-client] (ecmascript) <export default as SizeChartUI>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$FAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FAQUI$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/FAQ.tsx [app-client] (ecmascript) <export default as FAQUI>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Quality$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QualityUI$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Quality.tsx [app-client] (ecmascript) <export default as QualityUI>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TestimonialsUI$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Testimonials.tsx [app-client] (ecmascript) <export default as TestimonialsUI>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Helpline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Helpline$3e$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Helpline.tsx [app-client] (ecmascript) <export default as Helpline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/src/ui/Button.tsx [app-client] (ecmascript)");
'use client';
;
;
function PreviewPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-20 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-0 z-50 bg-white shadow-md p-4 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-orange-600",
                        children: "NeoComerz UI Component Preview"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#hero",
                                className: "hover:text-orange-600",
                                children: "Heroes"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 27,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#gallery",
                                className: "hover:text-orange-600",
                                children: "Galleries"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 28,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#commerce",
                                className: "hover:text-orange-600",
                                children: "Commerce"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 29,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#info",
                                className: "hover:text-orange-600",
                                children: "Info"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 30,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "px-8 text-2xl font-bold mb-4 bg-gray-100 py-2",
                        children: "Hero Components"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "px-8 text-lg font-semibold text-gray-500 mb-2 underline",
                                        children: "Classic Hero"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hero$3e$__["Hero"], {
                                        title: "Classic Hero Component",
                                        subtitle: "The standard for high-converting landing pages"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "px-8 text-lg font-semibold text-gray-500 mb-2 underline",
                                        children: "Layered Hero"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$LayeredHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayeredHeroUI$3e$__["LayeredHeroUI"], {
                                        titlePrimary: "Layered Hero",
                                        titleSecondary: "Multi-dimensional presentation"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "px-8 text-lg font-semibold text-gray-500 mb-2 underline",
                                        children: "Inline Hero"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$InlineHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InlineHeroUI$3e$__["InlineHeroUI"], {
                                        titlePrimary: "Industrial Hero",
                                        titleSecondary: "Bold and Product-focused"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "gallery",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "px-8 text-2xl font-bold mb-4 bg-gray-100 py-2",
                        children: "Gallery Components"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GalleryGridUI$3e$__["GalleryGridUI"], {
                                title: "Standard Gallery Grid"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 64,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryGrid6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GalleryGrid6UI$3e$__["GalleryGrid6UI"], {
                                title: "6-Pack Gallery Grid"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 65,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$GalleryCol$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GalleryColUI$3e$__["GalleryColUI"], {
                                title: "Basic Gallery Columns"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 66,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "commerce",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "px-8 text-2xl font-bold mb-4 bg-gray-100 py-2",
                        children: "Commerce & Details"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FeaturesUI$3e$__["FeaturesUI"], {
                                title: "Product Features Section",
                                description: "Experience the combined power of modern aesthetics and functional design.",
                                tagline: "EXCEPTIONAL CRAFTSMANSHIP",
                                features: [
                                    {
                                        text: "Premium quality materials"
                                    },
                                    {
                                        text: "Ergonomic and comfortable fit"
                                    },
                                    {
                                        text: "Durable and long-lasting build"
                                    }
                                ],
                                colors: {
                                    primary: '#F36621',
                                    text: '#222F28',
                                    background: '#f9fafb'
                                },
                                ctaButton: {
                                    text: "View Details",
                                    href: "#"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$DesignAndFit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DesignAndFitUI$3e$__["DesignAndFitUI"], {
                                title: "Design & Fit Showcase",
                                subtitle: "Perfectly tailored for your comfort",
                                imageCards: [
                                    {
                                        title: "Premium Fabric",
                                        description: "Breathable and soft natural fibers",
                                        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400"
                                    },
                                    {
                                        title: "Expert Tailoring",
                                        description: "Precision cut for the perfect fit",
                                        image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?auto=format&fit=crop&w=400"
                                    }
                                ],
                                detailCards: [
                                    {
                                        title: "Craftsmanship",
                                        items: [
                                            {
                                                text: "Hand-stitched transitions"
                                            },
                                            {
                                                text: "Reinforced seams"
                                            }
                                        ]
                                    },
                                    {
                                        title: "Material",
                                        items: [
                                            {
                                                text: "100% Organic Cotton"
                                            },
                                            {
                                                text: "Eco-friendly dyes"
                                            }
                                        ]
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$SizeChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SizeChartUI$3e$__["SizeChartUI"], {
                                title: "Product Size Chart",
                                sizeData: [
                                    {
                                        measurement: "Chest",
                                        description: "Underarm to underarm",
                                        m: "20",
                                        l: "22",
                                        xl: "24",
                                        xxl: "26"
                                    },
                                    {
                                        measurement: "Length",
                                        description: "Shoulder to hem",
                                        m: "28",
                                        l: "29",
                                        xl: "30",
                                        xxl: "31"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "px-8 text-2xl font-bold mb-4 bg-gray-100 py-2",
                        children: "Information & Trust"
                    }, void 0, false, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$FAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FAQUI$3e$__["FAQUI"], {
                                heading: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Quality$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QualityUI$3e$__["QualityUI"], {
                                title: "Quality Assurance"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TestimonialsUI$3e$__["TestimonialsUI"], {
                                title: "Customer Testimonials"
                            }, void 0, false, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-500 mb-2 underline",
                                        children: "Support & Buttons"
                                    }, void 0, false, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-6 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Helpline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Helpline$3e$__["Helpline"], {}, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrimaryButton"], {
                                                children: "Primary Action"
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Linkon$2f$neoComerz$2f$builder$2d$complete$2f$neocomerz$2d$ui$2f$src$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrimaryButton"], {
                                                variant: "secondary",
                                                children: "Secondary Action"
                                            }, void 0, false, {
                                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Linkon/neoComerz/builder-complete/neocomerz-ui/preview/app/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = PreviewPage;
var _c;
__turbopack_context__.k.register(_c, "PreviewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Linkon_neoComerz_builder-complete_neocomerz-ui_0ggv-.v._.js.map