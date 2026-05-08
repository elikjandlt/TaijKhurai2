module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/async_hooks [external] (async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/lib/apollo/apollo-wrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloWrapper",
    ()=>ApolloWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/link/http/HttpLink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client-integration-nextjs/dist/index.ssr.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
function makeClient() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApolloClient"]({
        cache: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InMemoryCache"](),
        link: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpLink"]({
            uri: ("TURBOPACK compile-time value", "https://taijkhurai.next.erxes.io/gateway/graphql") ?? "",
            headers: {
                "erxes-app-token": ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6InlXb3dRczBWSzRXYkRId29hdmRZZCIsImlhdCI6MTc3ODA2NDA2NX0.DW6XRLVIO3e2ursYYLf0TCClQZY2oCfdpY5d9sGQ6bk") ?? ""
            }
        })
    });
}
function ApolloWrapper({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApolloNextAppProvider"], {
        makeClient: makeClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/lib/apollo/apollo-wrapper.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/user.mjs [app-ssr] (ecmascript) <export default as User>");
"use client";
;
;
;
;
;
function useCurrentLocale() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const segments = pathname.split("/");
    return segments[1] === "en" ? "en" : "mn";
}
function Header() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("nav");
    const locale = useCurrentLocale();
    const navItems = [
        {
            label: t("home"),
            href: "/"
        },
        {
            label: t("collections"),
            href: "/collections"
        },
        {
            label: t("customFurniture"),
            href: "/services"
        },
        {
            label: t("aiCustomizer"),
            href: "/ai-customizer"
        },
        {
            label: t("portfolio"),
            href: "/portfolio"
        },
        {
            label: t("about"),
            href: "/about"
        },
        {
            label: t("blog"),
            href: "/blog"
        },
        {
            label: t("contact"),
            href: "/contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-white/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-12 h-20 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-[22px] font-semibold tracking-[2px] text-[#FAFAFA]",
                    children: "Taij-Khurai"
                }, void 0, false, {
                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden lg:flex items-center gap-7",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "text-sm text-[#B5B0AB] transition-colors hover:text-[#FAFAFA]",
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-[#B5B0AB] hover:text-[#FAFAFA] transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocaleSwitcher, {
                            currentLocale: locale
                        }, void 0, false, {
                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "hidden sm:flex items-center px-6 py-3 bg-[#C9A96E] text-[#0D0D0D] text-[13px] font-medium rounded-sm hover:bg-[#B8985D] transition-colors",
                            children: t("bookConsultation")
                        }, void 0, false, {
                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function LocaleSwitcher({ currentLocale }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const otherLocale = currentLocale === "mn" ? "en" : "mn";
    const newPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`) || `/${otherLocale}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: newPath,
        className: "text-[13px] text-[#9A9590] hover:text-[#FAFAFA] transition-colors",
        children: currentLocale === "mn" ? "MN | EN" : "EN | MN"
    }, void 0, false, {
        fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Header.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Footer() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("footer");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#0D0D0D] border-t border-white/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-12 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-16 lg:gap-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:w-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-xl font-semibold tracking-[2px] text-[#FAFAFA]",
                                    children: "Taij-Khurai"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm leading-relaxed text-[#9A9590]",
                                    children: t("description")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 grid grid-cols-2 md:grid-cols-3 gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[13px] font-semibold text-[#FAFAFA] mb-3",
                                            children: t("explore")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: [
                                                {
                                                    label: "Collections",
                                                    href: "/collections"
                                                },
                                                {
                                                    label: "Custom Furniture",
                                                    href: "/services"
                                                },
                                                {
                                                    label: "AI Customizer",
                                                    href: "/ai-customizer"
                                                },
                                                {
                                                    label: "Portfolio",
                                                    href: "/portfolio"
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: "text-sm text-[#9A9590] hover:text-[#FAFAFA] transition-colors",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 21
                                                    }, this)
                                                }, item.label, false, {
                                                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[13px] font-semibold text-[#FAFAFA] mb-3",
                                            children: t("company")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: [
                                                {
                                                    label: "About Us",
                                                    href: "/about"
                                                },
                                                {
                                                    label: "Blog / Inspiration",
                                                    href: "/blog"
                                                },
                                                {
                                                    label: "Contact",
                                                    href: "/contact"
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: "text-sm text-[#9A9590] hover:text-[#FAFAFA] transition-colors",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 21
                                                    }, this)
                                                }, item.label, false, {
                                                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[13px] font-semibold text-[#FAFAFA] mb-3",
                                            children: t("support")
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: [
                                                "FAQ",
                                                "Delivery",
                                                "Product Care",
                                                "Warranty"
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/",
                                                        className: "text-sm text-[#9A9590] hover:text-[#FAFAFA] transition-colors",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, this)
                                                }, item, false, {
                                                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[#5A5A5A]",
                            children: t("rights")
                        }, void 0, false, {
                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6 text-xs text-[#5A5A5A]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-[#9A9590] transition-colors",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-[#9A9590] transition-colors",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-[#9A9590] transition-colors",
                                    children: "Cookie Policy"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/src/components/layout/Footer.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ng8oqp._.js.map