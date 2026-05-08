module.exports = [
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@formatjs/fast-memoize/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memoize",
    ()=>memoize,
    "strategies",
    ()=>strategies
]);
//#region packages/fast-memoize/index.ts
function memoize(fn, options) {
    const cache = options && options.cache ? options.cache : cacheDefault;
    const serializer = options && options.serializer ? options.serializer : serializerDefault;
    return (options && options.strategy ? options.strategy : strategyDefault)(fn, {
        cache,
        serializer
    });
}
function isPrimitive(value) {
    return value == null || typeof value === "number" || typeof value === "boolean";
}
function monadic(fn, cache, serializer, arg) {
    const cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    let computedValue = cache.get(cacheKey);
    if (typeof computedValue === "undefined") {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    const args = Array.prototype.slice.call(arguments, 3);
    const cacheKey = serializer(args);
    let computedValue = cache.get(cacheKey);
    if (typeof computedValue === "undefined") {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    const strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
const serializerDefault = function() {
    return JSON.stringify(arguments);
};
var ObjectWithoutPrototypeCache = class {
    constructor(){
        this.cache = Object.create(null);
    }
    get(key) {
        return this.cache[key];
    }
    set(key, value) {
        this.cache[key] = value;
    }
};
const cacheDefault = {
    create: function create() {
        return new ObjectWithoutPrototypeCache();
    }
};
const strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic
};
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/use-intl/dist/esm/development/formatters-r4aAmsMP.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I",
    ()=>IntlError,
    "a",
    ()=>IntlErrorCode,
    "b",
    ()=>createCache,
    "c",
    ()=>createIntlFormatters,
    "m",
    ()=>memoFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@formatjs/fast-memoize/index.js [app-ssr] (ecmascript)");
;
class IntlError extends Error {
    constructor(code, originalMessage){
        let message = code;
        if (originalMessage) {
            message += ': ' + originalMessage;
        }
        super(message);
        this.code = code;
        if (originalMessage) {
            this.originalMessage = originalMessage;
        }
    }
}
var IntlErrorCode = /*#__PURE__*/ function(IntlErrorCode) {
    IntlErrorCode["MISSING_MESSAGE"] = "MISSING_MESSAGE";
    IntlErrorCode["MISSING_FORMAT"] = "MISSING_FORMAT";
    IntlErrorCode["ENVIRONMENT_FALLBACK"] = "ENVIRONMENT_FALLBACK";
    IntlErrorCode["INSUFFICIENT_PATH"] = "INSUFFICIENT_PATH";
    IntlErrorCode["INVALID_MESSAGE"] = "INVALID_MESSAGE";
    IntlErrorCode["INVALID_KEY"] = "INVALID_KEY";
    IntlErrorCode["FORMATTING_ERROR"] = "FORMATTING_ERROR";
    return IntlErrorCode;
}(IntlErrorCode || {});
function createCache() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {}
    };
}
function createMemoCache(store) {
    return {
        create () {
            return {
                get (key) {
                    return store[key];
                },
                set (key, value) {
                    store[key] = value;
                }
            };
        }
    };
}
function memoFn(fn, cache) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(fn, {
        cache: createMemoCache(cache),
        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
    });
}
function memoConstructor(ConstructorFn, cache) {
    return memoFn((...args)=>new ConstructorFn(...args), cache);
}
function createIntlFormatters(cache) {
    const getDateTimeFormat = memoConstructor(Intl.DateTimeFormat, cache.dateTime);
    const getNumberFormat = memoConstructor(Intl.NumberFormat, cache.number);
    const getPluralRules = memoConstructor(Intl.PluralRules, cache.pluralRules);
    const getRelativeTimeFormat = memoConstructor(Intl.RelativeTimeFormat, cache.relativeTime);
    const getListFormat = memoConstructor(Intl.ListFormat, cache.list);
    const getDisplayNames = memoConstructor(Intl.DisplayNames, cache.displayNames);
    return {
        getDateTimeFormat,
        getNumberFormat,
        getPluralRules,
        getRelativeTimeFormat,
        getListFormat,
        getDisplayNames
    };
}
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/use-intl/dist/esm/development/format-message/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>formatMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$intl$2d$messageformat$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/intl-messageformat/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/use-intl/dist/esm/development/formatters-r4aAmsMP.js [app-ssr] (ecmascript)");
;
;
;
/**
 * `intl-messageformat` uses separate keys for `date` and `time`, but there's
 * only one native API: `Intl.DateTimeFormat`. Additionally you might want to
 * include both a time and a date in a value, therefore the separation doesn't
 * seem so useful. We offer a single `dateTime` namespace instead, but we have
 * to convert the format before `intl-messageformat` can be used.
 */ function convertFormatsToIntlMessageFormat(globalFormats, inlineFormats, timeZone) {
    const mfDateDefaults = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$intl$2d$messageformat$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlMessageFormat"].formats.date;
    const mfTimeDefaults = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$intl$2d$messageformat$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlMessageFormat"].formats.time;
    const dateTimeFormats = {
        ...globalFormats?.dateTime,
        ...inlineFormats?.dateTime
    };
    const allFormats = {
        date: {
            ...mfDateDefaults,
            ...dateTimeFormats
        },
        time: {
            ...mfTimeDefaults,
            ...dateTimeFormats
        },
        number: {
            ...globalFormats?.number,
            ...inlineFormats?.number
        }
    };
    if (timeZone) {
        // The only way to set a time zone with `intl-messageformat` is to merge it into the formats
        // https://github.com/formatjs/formatjs/blob/8256c5271505cf2606e48e3c97ecdd16ede4f1b5/packages/intl/src/message.ts#L15
        [
            'date',
            'time'
        ].forEach((property)=>{
            const formats = allFormats[property];
            for (const [key, value] of Object.entries(formats)){
                formats[key] = {
                    timeZone,
                    ...value
                };
            }
        });
    }
    return allFormats;
}
// Placed here for improved tree shaking. Somehow when this is placed in
// `formatters.tsx`, then it can't be shaken off from `next-intl`.
function createMessageFormatter(cache, intlFormatters) {
    const getMessageFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])((...args)=>new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$intl$2d$messageformat$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlMessageFormat"](args[0], args[1], args[2], {
            formatters: intlFormatters,
            ...args[3]
        }), cache.message);
    return getMessageFormat;
}
function getPlainMessage(candidate, values) {
    // To improve runtime performance, only compile message if:
    return(// 1. Values are provided
    values || // 2. There are escaped braces (e.g. "'{name'}")
    /'[{}]/.test(candidate) || // 3. There are missing arguments or tags (dev-only error handling)
    /<|{/.test(candidate) ? undefined // Compile
     : candidate // Don't compile
    );
}
/**
 * Compiles and formats an ICU message at runtime using intl-messageformat.
 * This is the default implementation used when messages are not precompiled.
 */ function formatMessage(/** The raw ICU message string (or precompiled message, though this implementation ignores precompilation) */ ...[key, message, values, options]) {
    if (Array.isArray(message)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].INVALID_MESSAGE, `Message at \`${key}\` resolved to an array, but only strings are supported. See https://next-intl.dev/docs/usage/translations#arrays-of-messages`);
    }
    if (typeof message === 'object') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].INSUFFICIENT_PATH, `Message at \`${key}\` resolved to \`${typeof message}\`, but only strings are supported. Use a \`.\` to retrieve nested messages. See https://next-intl.dev/docs/usage/translations#structuring-messages`);
    }
    // Hot path that avoids creating an `IntlMessageFormat` instance
    if (typeof message === 'string') {
        const plainMessage = getPlainMessage(message, values);
        if (plainMessage) return plainMessage;
    }
    const { cache, formats, formatters, globalFormats, locale, timeZone } = options;
    // Lazy init the message formatter for better tree
    // shaking in case message formatting is not used.
    if (!formatters.getMessageFormat) {
        formatters.getMessageFormat = createMessageFormatter(cache, formatters);
    }
    let messageFormat;
    try {
        messageFormat = formatters.getMessageFormat(message, locale, convertFormatsToIntlMessageFormat(globalFormats, formats, timeZone), {
            formatters: {
                ...formatters,
                getDateTimeFormat (locales, dateTimeOptions) {
                    // Workaround for https://github.com/formatjs/formatjs/issues/4279
                    return formatters.getDateTimeFormat(locales, {
                        ...dateTimeOptions,
                        timeZone: dateTimeOptions?.timeZone ?? timeZone
                    });
                }
            }
        });
    } catch (error) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].INVALID_MESSAGE, `${error.message} (${error.originalMessage})`);
    }
    const formattedMessage = messageFormat.format(// @ts-expect-error `intl-messageformat` expects a different format
    // for rich text elements since a recent minor update. This
    // needs to be evaluated in detail, possibly also in regard
    // to be able to format to parts.
    values);
    // Limit the function signature to return strings or React elements
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(formattedMessage) || // Arrays of React elements
    Array.isArray(formattedMessage) || typeof formattedMessage === 'string' ? formattedMessage : String(formattedMessage);
}
// `t.raw` is supported
formatMessage.raw = true;
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/use-intl/dist/esm/development/initializeConfig-CUsOI8u2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>createBaseTranslator,
    "b",
    ()=>defaultOnError,
    "c",
    ()=>createFormatter,
    "d",
    ()=>defaultGetMessageFallback,
    "i",
    ()=>initializeConfig,
    "r",
    ()=>resolveNamespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$format$2d$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/use-intl/dist/esm/development/format-message/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/use-intl/dist/esm/development/formatters-r4aAmsMP.js [app-ssr] (ecmascript)");
;
;
;
function joinPath(...parts) {
    return parts.filter(Boolean).join('.');
}
/**
 * Contains defaults that are used for all entry points into the core.
 * See also `InitializedIntlConfiguration`.
 */ function defaultGetMessageFallback(props) {
    return joinPath(props.namespace, props.key);
}
function defaultOnError(error) {
    console.error(error);
}
function prepareTranslationValues(values) {
    // Related to https://github.com/formatjs/formatjs/issues/1467
    const transformedValues = {};
    Object.keys(values).forEach((key)=>{
        let index = 0;
        const value = values[key];
        let transformed;
        if (typeof value === 'function') {
            transformed = (chunks)=>{
                const result = value(chunks);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(result) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(result, {
                    key: key + index++
                }) : result;
            };
        } else {
            transformed = value;
        }
        transformedValues[key] = transformed;
    });
    return transformedValues;
}
function resolvePath(locale, messages, key, namespace) {
    const fullKey = joinPath(namespace, key);
    if (!messages) {
        throw new Error(`No messages available at \`${namespace}\`.`);
    }
    let message = messages;
    key.split('.').forEach((part)=>{
        const next = message[part];
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (part == null || next == null) {
            throw new Error(`Could not resolve \`${fullKey}\` in messages for locale \`${locale}\`.`);
        }
        message = next;
    });
    return message;
}
function getMessagesOrError(locale, messages, namespace) {
    try {
        if (!messages) {
            throw new Error(`No messages were configured.`);
        }
        const retrievedMessages = namespace ? resolvePath(locale, messages, namespace) : messages;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!retrievedMessages) {
            throw new Error(`No messages for namespace \`${namespace}\` found.`);
        }
        return retrievedMessages;
    } catch (error) {
        const intlError = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].MISSING_MESSAGE, error.message);
        return intlError;
    }
}
function createBaseTranslator(config) {
    const messagesOrError = getMessagesOrError(config.locale, config.messages, config.namespace);
    return createBaseTranslatorImpl({
        ...config,
        messagesOrError
    });
}
function createBaseTranslatorImpl({ cache, formats: globalFormats, formatters, getMessageFallback = defaultGetMessageFallback, locale, messagesOrError, namespace, onError, timeZone }) {
    const hasMessagesError = messagesOrError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"];
    function getFallbackFromErrorAndNotify(key, code, message, fallback) {
        const error = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](code, message);
        onError(error);
        return fallback ?? getMessageFallback({
            error,
            key,
            namespace
        });
    }
    function translateBaseFn(/** Use a dot to indicate a level of nesting (e.g. `namespace.nestedLabel`). */ key, /** Key value pairs for values to interpolate into the message. */ values, /** Provide custom formats for numbers, dates and times. */ formats, _fallback) {
        const fallback = _fallback;
        let message;
        if (hasMessagesError) {
            if (fallback) {
                message = fallback;
            } else {
                onError(messagesOrError);
                return getMessageFallback({
                    error: messagesOrError,
                    key,
                    namespace
                });
            }
        } else {
            const messages = messagesOrError;
            try {
                message = resolvePath(locale, messages, key, namespace);
            } catch (error) {
                if (fallback) {
                    message = fallback;
                } else {
                    return getFallbackFromErrorAndNotify(key, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].MISSING_MESSAGE, error.message, fallback);
                }
            }
        }
        try {
            const messagePath = joinPath(namespace, key);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$format$2d$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(messagePath, // @ts-expect-error -- We have additional validation either in `compile-format.tsx` or in case of `format-only.tsx` in the loader
            message, values ? prepareTranslationValues(values) : values, {
                cache,
                formatters,
                globalFormats,
                formats,
                locale,
                timeZone
            });
        } catch (error) {
            let errorCode, errorMessage;
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"]) {
                errorCode = error.code;
                errorMessage = error.originalMessage;
            } else {
                errorCode = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].FORMATTING_ERROR;
                errorMessage = error.message;
            }
            return getFallbackFromErrorAndNotify(key, errorCode, errorMessage, fallback);
        }
    }
    function translateFn(/** Use a dot to indicate a level of nesting (e.g. `namespace.nestedLabel`). */ key, /** Key value pairs for values to interpolate into the message. */ values, /** Custom formats for numbers, dates and times. */ formats, _fallback) {
        const result = translateBaseFn(key, values, formats, _fallback);
        if (typeof result !== 'string') {
            return getFallbackFromErrorAndNotify(key, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].INVALID_MESSAGE, `The message \`${key}\` in ${namespace ? `namespace \`${namespace}\`` : 'messages'} didn't resolve to a string. If you want to format rich text, use \`t.rich\` instead.`);
        }
        return result;
    }
    translateFn.rich = translateBaseFn;
    // Augment `translateBaseFn` to return plain strings
    translateFn.markup = (key, values, formats, _fallback)=>{
        const result = translateBaseFn(key, // @ts-expect-error -- `MarkupTranslationValues` is practically a sub type
        // of `RichTranslationValues` but TypeScript isn't smart enough here.
        values, formats, _fallback);
        if (typeof result !== 'string') {
            const error = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].FORMATTING_ERROR, "`t.markup` only accepts functions for formatting that receive and return strings.\n\nE.g. t.markup('markup', {b: (chunks) => `<b>${chunks}</b>`})");
            onError(error);
            return getMessageFallback({
                error,
                key,
                namespace
            });
        }
        return result;
    };
    translateFn.raw = (key)=>{
        {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$format$2d$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].raw) {
                throw new Error('`t.raw` is not supported when messages are precompiled.');
            }
        }
        if (hasMessagesError) {
            onError(messagesOrError);
            return getMessageFallback({
                error: messagesOrError,
                key,
                namespace
            });
        }
        const messages = messagesOrError;
        try {
            return resolvePath(locale, messages, key, namespace);
        } catch (error) {
            return getFallbackFromErrorAndNotify(key, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].MISSING_MESSAGE, error.message);
        }
    };
    translateFn.has = (key)=>{
        if (hasMessagesError) {
            return false;
        }
        try {
            resolvePath(locale, messagesOrError, key, namespace);
            return true;
        } catch  {
            return false;
        }
    };
    return translateFn;
}
/**
 * For the strictly typed messages to work we have to wrap the namespace into
 * a mandatory prefix. See https://stackoverflow.com/a/71529575/343045
 */ function resolveNamespace(namespace, namespacePrefix) {
    return namespace === namespacePrefix ? undefined : namespace.slice((namespacePrefix + '.').length);
}
const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * (365 / 12); // Approximation
const QUARTER = MONTH * 3;
const YEAR = DAY * 365;
const UNIT_SECONDS = {
    second: SECOND,
    seconds: SECOND,
    minute: MINUTE,
    minutes: MINUTE,
    hour: HOUR,
    hours: HOUR,
    day: DAY,
    days: DAY,
    week: WEEK,
    weeks: WEEK,
    month: MONTH,
    months: MONTH,
    quarter: QUARTER,
    quarters: QUARTER,
    year: YEAR,
    years: YEAR
};
function resolveRelativeTimeUnit(seconds) {
    const absValue = Math.abs(seconds);
    if (absValue < MINUTE) {
        return 'second';
    } else if (absValue < HOUR) {
        return 'minute';
    } else if (absValue < DAY) {
        return 'hour';
    } else if (absValue < WEEK) {
        return 'day';
    } else if (absValue < MONTH) {
        return 'week';
    } else if (absValue < YEAR) {
        return 'month';
    }
    return 'year';
}
function calculateRelativeTimeValue(seconds, unit) {
    // We have to round the resulting values, as `Intl.RelativeTimeFormat`
    // will include fractions like '2.1 hours ago'.
    return Math.round(seconds / UNIT_SECONDS[unit]);
}
function createFormatter(props) {
    const { _cache: cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(), _formatters: formatters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(cache), formats, locale, onError = defaultOnError, timeZone: globalTimeZone } = props;
    function applyTimeZone(options) {
        if (!options?.timeZone) {
            if (globalTimeZone) {
                options = {
                    ...options,
                    timeZone: globalTimeZone
                };
            } else {
                onError(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].ENVIRONMENT_FALLBACK, `The \`timeZone\` parameter wasn't provided and there is no global default configured. Consider adding a global default to avoid markup mismatches caused by environment differences. Learn more: https://next-intl.dev/docs/configuration#time-zone`));
            }
        }
        return options;
    }
    function resolveFormatOrOptions(typeFormats, formatOrOptions, overrides) {
        let options;
        if (typeof formatOrOptions === 'string') {
            const formatName = formatOrOptions;
            options = typeFormats?.[formatName];
            if (!options) {
                const error = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].MISSING_FORMAT, `Format \`${formatName}\` is not available.`);
                onError(error);
                throw error;
            }
        } else {
            options = formatOrOptions;
        }
        if (overrides) {
            options = {
                ...options,
                ...overrides
            };
        }
        return options;
    }
    function getFormattedValue(formatOrOptions, overrides, typeFormats, formatter, getFallback) {
        let options;
        try {
            options = resolveFormatOrOptions(typeFormats, formatOrOptions, overrides);
        } catch  {
            return getFallback();
        }
        try {
            return formatter(options);
        } catch (error) {
            onError(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].FORMATTING_ERROR, error.message));
            return getFallback();
        }
    }
    function dateTime(value, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.dateTime, (options)=>{
            options = applyTimeZone(options);
            return formatters.getDateTimeFormat(locale, options).format(value);
        }, ()=>String(value));
    }
    function dateTimeRange(start, end, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.dateTime, (options)=>{
            options = applyTimeZone(options);
            return formatters.getDateTimeFormat(locale, options).formatRange(start, end);
        }, ()=>[
                dateTime(start),
                dateTime(end)
            ].join(' – '));
    }
    function number(value, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.number, (options)=>formatters.getNumberFormat(locale, options).format(value), ()=>String(value));
    }
    function getGlobalNow() {
        // Only read when necessary to avoid triggering a `dynamicIO` error
        // unnecessarily (`now` is only needed for `format.relativeTime`)
        if (props.now) {
            return props.now;
        } else {
            onError(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].ENVIRONMENT_FALLBACK, `The \`now\` parameter wasn't provided to \`relativeTime\` and there is no global default configured, therefore the current time will be used as a fallback. See https://next-intl.dev/docs/usage/dates-times#relative-times-usenow`));
            return new Date();
        }
    }
    function relativeTime(date, nowOrOptions) {
        try {
            let nowDate, unit;
            const opts = {};
            if (nowOrOptions instanceof Date || typeof nowOrOptions === 'number') {
                nowDate = new Date(nowOrOptions);
            } else if (nowOrOptions) {
                if (nowOrOptions.now != null) {
                    nowDate = new Date(nowOrOptions.now);
                } else {
                    nowDate = getGlobalNow();
                }
                unit = nowOrOptions.unit;
                opts.style = nowOrOptions.style;
                // @ts-expect-error -- Types are slightly outdated
                opts.numberingSystem = nowOrOptions.numberingSystem;
            }
            if (!nowDate) {
                nowDate = getGlobalNow();
            }
            const dateDate = new Date(date);
            const seconds = (dateDate.getTime() - nowDate.getTime()) / 1000;
            if (!unit) {
                unit = resolveRelativeTimeUnit(seconds);
            }
            // `numeric: 'auto'` can theoretically produce output like "yesterday",
            // but it only works with integers. E.g. -1 day will produce "yesterday",
            // but -1.1 days will produce "-1.1 days". Rounding before formatting is
            // not desired, as the given dates might cross a threshold were the
            // output isn't correct anymore. Example: 2024-01-08T23:00:00.000Z and
            // 2024-01-08T01:00:00.000Z would produce "yesterday", which is not the
            // case. By using `always` we can ensure correct output. The only exception
            // is the formatting of times <1 second as "now".
            opts.numeric = unit === 'second' ? 'auto' : 'always';
            const value = calculateRelativeTimeValue(seconds, unit);
            return formatters.getRelativeTimeFormat(locale, opts).format(value, unit);
        } catch (error) {
            onError(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].FORMATTING_ERROR, error.message));
            return String(date);
        }
    }
    function list(value, formatOrOptions, overrides) {
        const serializedValue = [];
        const richValues = new Map();
        // `formatToParts` only accepts strings, therefore we have to temporarily
        // replace React elements with a placeholder ID that can be used to retrieve
        // the original value afterwards.
        let index = 0;
        for (const item of value){
            let serializedItem;
            if (typeof item === 'object') {
                serializedItem = String(index);
                richValues.set(serializedItem, item);
            } else {
                serializedItem = String(item);
            }
            serializedValue.push(serializedItem);
            index++;
        }
        return getFormattedValue(formatOrOptions, overrides, formats?.list, // @ts-expect-error -- `richValues.size` is used to determine the return type, but TypeScript can't infer the meaning of this correctly
        (options)=>{
            const result = formatters.getListFormat(locale, options).formatToParts(serializedValue).map((part)=>part.type === 'literal' ? part.value : richValues.get(part.value) || part.value);
            if (richValues.size > 0) {
                return result;
            } else {
                return result.join('');
            }
        }, ()=>String(value));
    }
    function displayName(value, formatOrOptions, overrides) {
        return getFormattedValue(formatOrOptions, overrides, formats?.displayName, (options)=>// `options` is guaranteed non-null because our overloads require
            // either inline options or a named format that resolves to options.
            formatters.getDisplayNames(locale, options).of(value), ()=>value);
    }
    return {
        dateTime,
        number,
        relativeTime,
        list,
        dateTimeRange,
        displayName
    };
}
function validateMessagesSegment(messages, invalidKeyLabels, parentPath) {
    Object.entries(messages).forEach(([key, messageOrMessages])=>{
        if (key.includes('.')) {
            let keyLabel = key;
            if (parentPath) keyLabel += ` (at ${parentPath})`;
            invalidKeyLabels.push(keyLabel);
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (messageOrMessages != null && typeof messageOrMessages === 'object') {
            validateMessagesSegment(messageOrMessages, invalidKeyLabels, joinPath(parentPath, key));
        }
    });
}
function validateMessages(messages, onError) {
    const invalidKeyLabels = [];
    validateMessagesSegment(messages, invalidKeyLabels);
    if (invalidKeyLabels.length > 0) {
        onError(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].INVALID_KEY, `Namespace keys cannot contain the character "." as this is used to express nesting. Please remove it or replace it with another character.

Invalid ${invalidKeyLabels.length === 1 ? 'key' : 'keys'}: ${invalidKeyLabels.join(', ')}

If you're migrating from a flat structure, you can convert your messages as follows:

import {set} from "lodash";

const input = {
  "one.one": "1.1",
  "one.two": "1.2",
  "two.one.one": "2.1.1"
};

const output = Object.entries(input).reduce(
  (acc, [key, value]) => set(acc, key, value),
  {}
);

// Output:
//
// {
//   "one": {
//     "one": "1.1",
//     "two": "1.2"
//   },
//   "two": {
//     "one": {
//       "one": "2.1.1"
//     }
//   }
// }
`));
    }
}
/**
 * Enhances the incoming props with defaults.
 */ function initializeConfig({ formats, getMessageFallback, messages, onError, ...rest }) {
    const finalOnError = onError || defaultOnError;
    const finalGetMessageFallback = getMessageFallback || defaultGetMessageFallback;
    {
        if (messages) {
            validateMessages(messages, finalOnError);
        }
    }
    return {
        ...rest,
        formats: formats || undefined,
        messages: messages || undefined,
        onError: finalOnError,
        getMessageFallback: finalGetMessageFallback
    };
}
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntlProvider",
    ()=>IntlProvider,
    "_useExtracted",
    ()=>useExtracted,
    "useFormatter",
    ()=>useFormatter,
    "useLocale",
    ()=>useLocale,
    "useMessages",
    ()=>useMessages,
    "useNow",
    ()=>useNow,
    "useTimeZone",
    ()=>useTimeZone,
    "useTranslations",
    ()=>useTranslations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/use-intl/dist/esm/development/formatters-r4aAmsMP.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CUsOI8u2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/use-intl/dist/esm/development/initializeConfig-CUsOI8u2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
const IntlContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function IntlProvider({ children, formats, getMessageFallback, locale, messages, now, onError, timeZone }) {
    const prevContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(IntlContext);
    // The formatter cache is released when the locale changes. For
    // long-running apps with a persistent `IntlProvider` at the root,
    // this can reduce the memory footprint (e.g. in React Native).
    const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return prevContext?.cache || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])();
    }, [
        locale,
        prevContext?.cache
    ]);
    const formatters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>prevContext?.formatters || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(cache), [
        cache,
        prevContext?.formatters
    ]);
    // Memoizing this value helps to avoid triggering a re-render of all
    // context consumers in case the configuration didn't change. However,
    // if some of the non-primitive values change, a re-render will still
    // be triggered. Note that there's no need to put `memo` on `IntlProvider`
    // itself, because the `children` typically change on every render.
    // There's some burden on the consumer side if it's important to reduce
    // re-renders, put that's how React works.
    // See: https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#context-updates-and-render-optimizations
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CUsOI8u2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])({
                locale,
                // (required by provider)
                formats: formats === undefined ? prevContext?.formats : formats,
                getMessageFallback: getMessageFallback || prevContext?.getMessageFallback,
                messages: messages === undefined ? prevContext?.messages : messages,
                now: now || prevContext?.now,
                onError: onError || prevContext?.onError,
                timeZone: timeZone || prevContext?.timeZone
            }),
            formatters,
            cache
        }), [
        cache,
        formats,
        formatters,
        getMessageFallback,
        locale,
        messages,
        now,
        onError,
        prevContext,
        timeZone
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(IntlContext.Provider, {
        value: value,
        children: children
    });
}
function useIntlContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(IntlContext);
    if (!context) {
        throw new Error('No intl context found. Have you configured the provider? See https://next-intl.dev/docs/usage/configuration#server-client-components');
    }
    return context;
}
let hasWarnedForMissingTimezone = false;
const isServer = ("TURBOPACK compile-time value", "undefined") === 'undefined';
function useTranslationsImpl(allMessagesPrefixed, namespacePrefixed, namespacePrefix) {
    const { cache, formats: globalFormats, formatters, getMessageFallback, locale, onError, timeZone } = useIntlContext();
    // The `namespacePrefix` is part of the type system.
    // See the comment in the hook invocation.
    const allMessages = allMessagesPrefixed[namespacePrefix];
    const namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CUsOI8u2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(namespacePrefixed, namespacePrefix);
    if (!timeZone && !hasWarnedForMissingTimezone && isServer) {
        // eslint-disable-next-line react-compiler/react-compiler
        hasWarnedForMissingTimezone = true;
        onError(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$formatters$2d$r4aAmsMP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"].ENVIRONMENT_FALLBACK, `There is no \`timeZone\` configured, this can lead to markup mismatches caused by environment differences. Consider adding a global default: https://next-intl.dev/docs/configuration#time-zone`));
    }
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CUsOI8u2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])({
            cache,
            formatters,
            getMessageFallback,
            messages: allMessages,
            namespace,
            onError,
            formats: globalFormats,
            locale,
            timeZone
        }), [
        cache,
        formatters,
        getMessageFallback,
        allMessages,
        namespace,
        onError,
        globalFormats,
        locale,
        timeZone
    ]);
    return translate;
}
/**
 * Translates messages from the given namespace by using the ICU syntax.
 * See https://formatjs.io/docs/core-concepts/icu-syntax.
 *
 * If no namespace is provided, all available messages are returned.
 * The namespace can also indicate nesting by using a dot
 * (e.g. `namespace.Component`).
 */ function useTranslations(namespace) {
    const context = useIntlContext();
    const messages = context.messages;
    // We have to wrap the actual hook so the type inference for the optional
    // namespace works correctly. See https://stackoverflow.com/a/71529575/343045
    // The prefix ("!") is arbitrary.
    // @ts-expect-error Use the explicit annotation instead
    return useTranslationsImpl({
        '!': messages
    }, // @ts-expect-error
    namespace ? `!.${namespace}` : '!', '!');
}
function useLocale() {
    return useIntlContext().locale;
}
function getNow() {
    return new Date();
}
/**
 * @see https://next-intl.dev/docs/usage/dates-times#relative-times-usenow
 */ function useNow(options) {
    const updateInterval = options?.updateInterval;
    const { now: globalNow } = useIntlContext();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(globalNow || getNow());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!updateInterval) return;
        const intervalId = setInterval(()=>{
            setNow(getNow());
        }, updateInterval);
        return ()=>{
            clearInterval(intervalId);
        };
    }, [
        globalNow,
        updateInterval
    ]);
    return updateInterval == null && globalNow ? globalNow : now;
}
function useTimeZone() {
    return useIntlContext().timeZone;
}
function useMessages() {
    const context = useIntlContext();
    if (!context.messages) {
        throw new Error('No messages found. Have you configured them correctly? See https://next-intl.dev/docs/configuration#messages');
    }
    return context.messages;
}
function useFormatter() {
    const { formats, formatters, locale, now: globalNow, onError, timeZone } = useIntlContext();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CUsOI8u2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])({
            formats,
            locale,
            now: globalNow,
            onError,
            timeZone,
            _formatters: formatters
        }), [
        formats,
        formatters,
        globalNow,
        locale,
        onError,
        timeZone
    ]);
}
function getArgs(messageOrParams, ...rest) {
    let message, values, formats;
    if (typeof messageOrParams === 'string') {
        message = messageOrParams;
        values = rest[0];
        formats = rest[1];
    } else {
        message = messageOrParams.message;
        values = messageOrParams.values;
        formats = messageOrParams.formats;
    // `description` is is not used at runtime
    }
    // @ts-expect-error -- Secret fallback parameter
    return [
        undefined,
        // Always use fallback if not compiled
        values,
        formats,
        message
    ];
}
// Note: This API is usually compiled into `useTranslations`,
// but there is some fallback handling which allows this hook
// to still work when not being compiled.
//
// This is relevant for:
// - Isolated environments like tests, Storybook, etc.
// - Fallbacks in case an extracted message is not yet available
function useExtracted(namespace) {
    const t = useTranslations(namespace);
    function translateFn(...params) {
        // @ts-expect-error -- Passing `undefined` as an ID is secretly allowed here
        return t(...getArgs(...params));
    }
    translateFn.rich = (...params)=>// @ts-expect-error -- Passing `undefined` as an ID is secretly allowed here
        t.rich(...getArgs(...params));
    translateFn.markup = (...params)=>// @ts-expect-error -- Passing `undefined` as an ID is secretly allowed here
        t.markup(...getArgs(...params));
    translateFn.has = function translateHasFn(// eslint-disable-next-line @typescript-eslint/no-unused-vars
    message) {
        // Not really something better we can do here
        return true;
    };
    return translateFn;
}
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@formatjs/icu-skeleton-parser/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDateTimeSkeleton",
    ()=>parseDateTimeSkeleton,
    "parseNumberSkeleton",
    ()=>parseNumberSkeleton,
    "parseNumberSkeletonFromString",
    ()=>parseNumberSkeletonFromString
]);
//#region packages/icu-skeleton-parser/date-time.ts
/**
* https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
* with some tweaks
*/ const DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
* Parse Date time skeleton into Intl.DateTimeFormatOptions
* Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* @public
* @param skeleton skeleton string
*/ function parseDateTimeSkeleton(skeleton) {
    const result = {};
    skeleton.replace(DATE_TIME_REGEX, (match)=>{
        const len = match.length;
        switch(match[0]){
            case "G":
                result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
                break;
            case "y":
                result.year = len === 2 ? "2-digit" : "numeric";
                break;
            case "Y":
            case "u":
            case "U":
            case "r":
                throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
                throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
                result.month = [
                    "numeric",
                    "2-digit",
                    "short",
                    "long",
                    "narrow"
                ][len - 1];
                break;
            case "w":
            case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
                result.day = [
                    "numeric",
                    "2-digit"
                ][len - 1];
                break;
            case "D":
            case "F":
            case "g":
                throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
                result.weekday = len === 4 ? "long" : len === 5 ? "narrow" : "short";
                break;
            case "e":
                if (len < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                result.weekday = [
                    "short",
                    "long",
                    "narrow",
                    "short"
                ][len - 4];
                break;
            case "c":
                if (len < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                result.weekday = [
                    "short",
                    "long",
                    "narrow",
                    "short"
                ][len - 4];
                break;
            case "a":
                result.hour12 = true;
                break;
            case "b":
            case "B":
                throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
                result.hourCycle = "h12";
                result.hour = [
                    "numeric",
                    "2-digit"
                ][len - 1];
                break;
            case "H":
                result.hourCycle = "h23";
                result.hour = [
                    "numeric",
                    "2-digit"
                ][len - 1];
                break;
            case "K":
                result.hourCycle = "h11";
                result.hour = [
                    "numeric",
                    "2-digit"
                ][len - 1];
                break;
            case "k":
                result.hourCycle = "h24";
                result.hour = [
                    "numeric",
                    "2-digit"
                ][len - 1];
                break;
            case "j":
            case "J":
            case "C":
                throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
                result.minute = [
                    "numeric",
                    "2-digit"
                ][len - 1];
                break;
            case "s":
                result.second = [
                    "numeric",
                    "2-digit"
                ][len - 1];
                break;
            case "S":
            case "A":
                throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
                result.timeZoneName = len < 4 ? "short" : "long";
                break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
                throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        }
        return "";
    });
    return result;
}
//#endregion
//#region node_modules/.aspect_rules_js/@formatjs_generated+unicode@0.0.0/node_modules/@formatjs_generated/unicode/icu-skeleton-parser-regex.js
const WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
//#endregion
//#region packages/icu-skeleton-parser/number.ts
function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) throw new Error("Number skeleton cannot be empty");
    const stringTokens = skeleton.split(WHITE_SPACE_REGEX).filter((x)=>x.length > 0);
    const tokens = [];
    for (const stringToken of stringTokens){
        let stemAndOptions = stringToken.split("/");
        if (stemAndOptions.length === 0) throw new Error("Invalid number skeleton");
        const [stem, ...options] = stemAndOptions;
        for (const option of options)if (option.length === 0) throw new Error("Invalid number skeleton");
        tokens.push({
            stem,
            options
        });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, "");
}
const FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
const SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
const INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
const CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    const result = {};
    if (str[str.length - 1] === "r") result.roundingPriority = "morePrecision";
    else if (str[str.length - 1] === "s") result.roundingPriority = "lessPrecision";
    str.replace(SIGNIFICANT_PRECISION_REGEX, function(_, g1, g2) {
        if (typeof g2 !== "string") {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        } else if (g2 === "+") result.minimumSignificantDigits = g1.length;
        else if (g1[0] === "#") result.maximumSignificantDigits = g1.length;
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length + (typeof g2 === "string" ? g2.length : 0);
        }
        return "";
    });
    return result;
}
function parseSign(str) {
    switch(str){
        case "sign-auto":
            return {
                signDisplay: "auto"
            };
        case "sign-accounting":
        case "()":
            return {
                currencySign: "accounting"
            };
        case "sign-always":
        case "+!":
            return {
                signDisplay: "always"
            };
        case "sign-accounting-always":
        case "()!":
            return {
                signDisplay: "always",
                currencySign: "accounting"
            };
        case "sign-except-zero":
        case "+?":
            return {
                signDisplay: "exceptZero"
            };
        case "sign-accounting-except-zero":
        case "()?":
            return {
                signDisplay: "exceptZero",
                currencySign: "accounting"
            };
        case "sign-never":
        case "+_":
            return {
                signDisplay: "never"
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    let result;
    if (stem[0] === "E" && stem[1] === "E") {
        result = {
            notation: "engineering"
        };
        stem = stem.slice(2);
    } else if (stem[0] === "E") {
        result = {
            notation: "scientific"
        };
        stem = stem.slice(1);
    }
    if (result) {
        const signDisplay = stem.slice(0, 2);
        if (signDisplay === "+!") {
            result.signDisplay = "always";
            stem = stem.slice(2);
        } else if (signDisplay === "+?") {
            result.signDisplay = "exceptZero";
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) throw new Error("Malformed concise eng/scientific notation");
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    const result = {};
    const signOpts = parseSign(opt);
    if (signOpts) return signOpts;
    return result;
}
/**
* https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
*/ function parseNumberSkeleton(tokens) {
    let result = {};
    for (const token of tokens){
        switch(token.stem){
            case "percent":
            case "%":
                result.style = "percent";
                continue;
            case "%x100":
                result.style = "percent";
                result.scale = 100;
                continue;
            case "currency":
                result.style = "currency";
                result.currency = token.options[0];
                continue;
            case "group-off":
            case ",_":
                result.useGrouping = false;
                continue;
            case "precision-integer":
            case ".":
                result.maximumFractionDigits = 0;
                continue;
            case "measure-unit":
            case "unit":
                result.style = "unit";
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case "compact-short":
            case "K":
                result.notation = "compact";
                result.compactDisplay = "short";
                continue;
            case "compact-long":
            case "KK":
                result.notation = "compact";
                result.compactDisplay = "long";
                continue;
            case "scientific":
                result = {
                    ...result,
                    notation: "scientific",
                    ...token.options.reduce((all, opt)=>({
                            ...all,
                            ...parseNotationOptions(opt)
                        }), {})
                };
                continue;
            case "engineering":
                result = {
                    ...result,
                    notation: "engineering",
                    ...token.options.reduce((all, opt)=>({
                            ...all,
                            ...parseNotationOptions(opt)
                        }), {})
                };
                continue;
            case "notation-simple":
                result.notation = "standard";
                continue;
            case "unit-width-narrow":
                result.currencyDisplay = "narrowSymbol";
                result.unitDisplay = "narrow";
                continue;
            case "unit-width-short":
                result.currencyDisplay = "code";
                result.unitDisplay = "short";
                continue;
            case "unit-width-full-name":
                result.currencyDisplay = "name";
                result.unitDisplay = "long";
                continue;
            case "unit-width-iso-code":
                result.currencyDisplay = "symbol";
                continue;
            case "scale":
                result.scale = parseFloat(token.options[0]);
                continue;
            case "rounding-mode-floor":
                result.roundingMode = "floor";
                continue;
            case "rounding-mode-ceiling":
                result.roundingMode = "ceil";
                continue;
            case "rounding-mode-down":
                result.roundingMode = "trunc";
                continue;
            case "rounding-mode-up":
                result.roundingMode = "expand";
                continue;
            case "rounding-mode-half-even":
                result.roundingMode = "halfEven";
                continue;
            case "rounding-mode-half-down":
                result.roundingMode = "halfTrunc";
                continue;
            case "rounding-mode-half-up":
                result.roundingMode = "halfExpand";
                continue;
            case "integer-width":
                if (token.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                token.options[0].replace(INTEGER_WIDTH_REGEX, function(_, g1, g2, g3, g4, g5) {
                    if (g1) result.minimumIntegerDigits = g2.length;
                    else if (g3 && g4) throw new Error("We currently do not support maximum integer digits");
                    else if (g5) throw new Error("We currently do not support exact integer digits");
                    return "";
                });
                continue;
        }
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            if (token.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            token.stem.replace(FRACTION_PRECISION_REGEX, function(_, g1, g2, g3, g4, g5) {
                if (g2 === "*") result.minimumFractionDigits = g1.length;
                else if (g3 && g3[0] === "#") result.maximumFractionDigits = g3.length;
                else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                } else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return "";
            });
            const opt = token.options[0];
            if (opt === "w") result = {
                ...result,
                trailingZeroDisplay: "stripIfInteger"
            };
            else if (opt) result = {
                ...result,
                ...parseSignificantPrecision(opt)
            };
            continue;
        }
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = {
                ...result,
                ...parseSignificantPrecision(token.stem)
            };
            continue;
        }
        const signOpts = parseSign(token.stem);
        if (signOpts) result = {
            ...result,
            ...signOpts
        };
        const conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) result = {
            ...result,
            ...conciseScientificAndEngineeringOpts
        };
    }
    return result;
}
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@formatjs/icu-messageformat-parser/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SKELETON_TYPE",
    ()=>SKELETON_TYPE,
    "TYPE",
    ()=>TYPE,
    "_Parser",
    ()=>_Parser,
    "createLiteralElement",
    ()=>createLiteralElement,
    "createNumberElement",
    ()=>createNumberElement,
    "isArgumentElement",
    ()=>isArgumentElement,
    "isDateElement",
    ()=>isDateElement,
    "isDateTimeSkeleton",
    ()=>isDateTimeSkeleton,
    "isLiteralElement",
    ()=>isLiteralElement,
    "isNumberElement",
    ()=>isNumberElement,
    "isNumberSkeleton",
    ()=>isNumberSkeleton,
    "isPluralElement",
    ()=>isPluralElement,
    "isPoundElement",
    ()=>isPoundElement,
    "isSelectElement",
    ()=>isSelectElement,
    "isStructurallySame",
    ()=>isStructurallySame,
    "isTagElement",
    ()=>isTagElement,
    "isTimeElement",
    ()=>isTimeElement,
    "parse",
    ()=>parse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@formatjs/icu-skeleton-parser/index.js [app-ssr] (ecmascript)");
;
//#region packages/icu-messageformat-parser/error.ts
let ErrorKind = /* @__PURE__ */ function(ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */ ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */ ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */ ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */ ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */ ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */ ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */ ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */ ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */ ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */ ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */ ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */ ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */ ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */ ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */ ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */ ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */ ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
	* Expecting a message fragment after the `plural` or `selectordinal` selector
	* (e.g. `{foo, plural, one}`)
	*/ ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */ ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
	* Duplicate selectors in `plural` or `selectordinal` argument.
	* (e.g. {foo, plural, one {#} one {#}})
	*/ ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
	* (e.g. {foo, select, apple {apple} apple {apple}})
	*/ ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */ ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */ ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */ ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */ ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */ ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
    return ErrorKind;
}({});
//#endregion
//#region packages/icu-messageformat-parser/types.ts
let TYPE = /* @__PURE__ */ function(TYPE) {
    /**
	* Raw text
	*/ TYPE[TYPE["literal"] = 0] = "literal";
    /**
	* Variable w/o any format, e.g `var` in `this is a {var}`
	*/ TYPE[TYPE["argument"] = 1] = "argument";
    /**
	* Variable w/ number format
	*/ TYPE[TYPE["number"] = 2] = "number";
    /**
	* Variable w/ date format
	*/ TYPE[TYPE["date"] = 3] = "date";
    /**
	* Variable w/ time format
	*/ TYPE[TYPE["time"] = 4] = "time";
    /**
	* Variable w/ select format
	*/ TYPE[TYPE["select"] = 5] = "select";
    /**
	* Variable w/ plural format
	*/ TYPE[TYPE["plural"] = 6] = "plural";
    /**
	* Only possible within plural argument.
	* This is the `#` symbol that will be substituted with the count.
	*/ TYPE[TYPE["pound"] = 7] = "pound";
    /**
	* XML-like tag
	*/ TYPE[TYPE["tag"] = 8] = "tag";
    return TYPE;
}({});
let SKELETON_TYPE = /* @__PURE__ */ function(SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
    return SKELETON_TYPE;
}({});
/**
* Type Guards
*/ function isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function isNumberElement(el) {
    return el.type === TYPE.number;
}
function isDateElement(el) {
    return el.type === TYPE.date;
}
function isTimeElement(el) {
    return el.type === TYPE.time;
}
function isSelectElement(el) {
    return el.type === TYPE.select;
}
function isPluralElement(el) {
    return el.type === TYPE.plural;
}
function isPoundElement(el) {
    return el.type === TYPE.pound;
}
function isTagElement(el) {
    return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
    return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
    return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.dateTime);
}
function createLiteralElement(value) {
    return {
        type: TYPE.literal,
        value
    };
}
function createNumberElement(value, style) {
    return {
        type: TYPE.number,
        value,
        style
    };
}
//#endregion
//#region node_modules/.aspect_rules_js/@formatjs_generated+unicode@0.0.0/node_modules/@formatjs_generated/unicode/icu-messageformat-parser-regex.js
const SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
//#endregion
//#region node_modules/.aspect_rules_js/@formatjs_generated+cldr.core@0.0.0/node_modules/@formatjs_generated/cldr.core/time-data.js
const timeData = {
    "001": [
        "H",
        "h"
    ],
    "419": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "AC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AD": [
        "H",
        "hB"
    ],
    "AE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "AF": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "AG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AL": [
        "h",
        "H",
        "hB"
    ],
    "AM": [
        "H",
        "hB"
    ],
    "AO": [
        "H",
        "hB"
    ],
    "AR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "AS": [
        "h",
        "H"
    ],
    "AT": [
        "H",
        "hB"
    ],
    "AU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AW": [
        "H",
        "hB"
    ],
    "AX": [
        "H"
    ],
    "AZ": [
        "H",
        "hB",
        "h"
    ],
    "BA": [
        "H",
        "hB",
        "h"
    ],
    "BB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BD": [
        "h",
        "hB",
        "H"
    ],
    "BE": [
        "H",
        "hB"
    ],
    "BF": [
        "H",
        "hB"
    ],
    "BG": [
        "H",
        "hB",
        "h"
    ],
    "BH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "BI": [
        "H",
        "h"
    ],
    "BJ": [
        "H",
        "hB"
    ],
    "BL": [
        "H",
        "hB"
    ],
    "BM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BN": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "BO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "BQ": [
        "H"
    ],
    "BR": [
        "H",
        "hB"
    ],
    "BS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BT": [
        "h",
        "H"
    ],
    "BW": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BY": [
        "H",
        "h"
    ],
    "BZ": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CA": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "CC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CD": [
        "hB",
        "H"
    ],
    "CF": [
        "H",
        "h",
        "hB"
    ],
    "CG": [
        "H",
        "hB"
    ],
    "CH": [
        "H",
        "hB",
        "h"
    ],
    "CI": [
        "H",
        "hB"
    ],
    "CK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CL": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CM": [
        "H",
        "h",
        "hB"
    ],
    "CN": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "CO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CP": [
        "H"
    ],
    "CR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CU": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "CV": [
        "H",
        "hB"
    ],
    "CW": [
        "H",
        "hB"
    ],
    "CX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CY": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "CZ": [
        "H"
    ],
    "DE": [
        "H",
        "hB"
    ],
    "DG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "DJ": [
        "h",
        "H"
    ],
    "DK": [
        "H"
    ],
    "DM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "DO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "DZ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "EC": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "EE": [
        "H",
        "hB"
    ],
    "EG": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ER": [
        "h",
        "H"
    ],
    "ES": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "ET": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "FI": [
        "H"
    ],
    "FJ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "FM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FO": [
        "H",
        "h"
    ],
    "FR": [
        "H",
        "hB"
    ],
    "GA": [
        "H",
        "hB"
    ],
    "GB": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GD": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GE": [
        "H",
        "hB",
        "h"
    ],
    "GF": [
        "H",
        "hB"
    ],
    "GG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GH": [
        "h",
        "H"
    ],
    "GI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GL": [
        "H",
        "h"
    ],
    "GM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GN": [
        "H",
        "hB"
    ],
    "GP": [
        "H",
        "hB"
    ],
    "GQ": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "GR": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "GS": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GT": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "GU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GW": [
        "H",
        "hB"
    ],
    "GY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "HK": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "HN": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "HR": [
        "H",
        "hB"
    ],
    "HU": [
        "H",
        "h"
    ],
    "IC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "ID": [
        "H"
    ],
    "IE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IL": [
        "H",
        "hB"
    ],
    "IM": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IN": [
        "h",
        "H"
    ],
    "IO": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IQ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "IR": [
        "hB",
        "H"
    ],
    "IS": [
        "H"
    ],
    "IT": [
        "H",
        "hB"
    ],
    "JE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "JM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "JO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "JP": [
        "H",
        "K",
        "h"
    ],
    "KE": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "KG": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KH": [
        "hB",
        "h",
        "H",
        "hb"
    ],
    "KI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KM": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KN": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KP": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KW": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "KY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KZ": [
        "H",
        "hB"
    ],
    "LA": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "LB": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LI": [
        "H",
        "hB",
        "h"
    ],
    "LK": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "LR": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LS": [
        "h",
        "H"
    ],
    "LT": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "LU": [
        "H",
        "h",
        "hB"
    ],
    "LV": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "LY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MC": [
        "H",
        "hB"
    ],
    "MD": [
        "H",
        "hB"
    ],
    "ME": [
        "H",
        "hB",
        "h"
    ],
    "MF": [
        "H",
        "hB"
    ],
    "MG": [
        "H",
        "h"
    ],
    "MH": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ML": [
        "H"
    ],
    "MM": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "MN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MP": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MQ": [
        "H",
        "hB"
    ],
    "MR": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MS": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MT": [
        "H",
        "h"
    ],
    "MU": [
        "H",
        "h"
    ],
    "MV": [
        "H",
        "h"
    ],
    "MW": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MX": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "MY": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "MZ": [
        "H",
        "hB"
    ],
    "NA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NC": [
        "H",
        "hB"
    ],
    "NE": [
        "H"
    ],
    "NF": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NI": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NL": [
        "H",
        "hB"
    ],
    "NO": [
        "H",
        "h"
    ],
    "NP": [
        "H",
        "h",
        "hB"
    ],
    "NR": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NU": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "OM": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PF": [
        "H",
        "h",
        "hB"
    ],
    "PG": [
        "h",
        "H"
    ],
    "PH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PK": [
        "h",
        "hB",
        "H"
    ],
    "PL": [
        "H",
        "h"
    ],
    "PM": [
        "H",
        "hB"
    ],
    "PN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "PR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PS": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PT": [
        "H",
        "hB"
    ],
    "PW": [
        "h",
        "H"
    ],
    "PY": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "QA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "RE": [
        "H",
        "hB"
    ],
    "RO": [
        "H",
        "hB"
    ],
    "RS": [
        "H",
        "hB",
        "h"
    ],
    "RU": [
        "H"
    ],
    "RW": [
        "H",
        "h"
    ],
    "SA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SC": [
        "H",
        "h",
        "hB"
    ],
    "SD": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SE": [
        "H"
    ],
    "SG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SH": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SI": [
        "H",
        "hB"
    ],
    "SJ": [
        "H"
    ],
    "SK": [
        "H"
    ],
    "SL": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SM": [
        "H",
        "h",
        "hB"
    ],
    "SN": [
        "H",
        "h",
        "hB"
    ],
    "SO": [
        "h",
        "H"
    ],
    "SR": [
        "H",
        "hB"
    ],
    "SS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ST": [
        "H",
        "hB"
    ],
    "SV": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "SX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "TC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TD": [
        "h",
        "H",
        "hB"
    ],
    "TF": [
        "H",
        "h",
        "hB"
    ],
    "TG": [
        "H",
        "hB"
    ],
    "TH": [
        "H",
        "h"
    ],
    "TJ": [
        "H",
        "h"
    ],
    "TL": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "TM": [
        "H",
        "h"
    ],
    "TN": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "TO": [
        "h",
        "H"
    ],
    "TR": [
        "H",
        "hB"
    ],
    "TT": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TW": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "TZ": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UA": [
        "H",
        "hB",
        "h"
    ],
    "UG": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "US": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "UY": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "UZ": [
        "H",
        "hB",
        "h"
    ],
    "VA": [
        "H",
        "h",
        "hB"
    ],
    "VC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "VG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VN": [
        "H",
        "h"
    ],
    "VU": [
        "h",
        "H"
    ],
    "WF": [
        "H",
        "hB"
    ],
    "WS": [
        "h",
        "H"
    ],
    "XK": [
        "H",
        "hB",
        "h"
    ],
    "YE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "YT": [
        "H",
        "hB"
    ],
    "ZA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ZM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ZW": [
        "H",
        "h"
    ],
    "af-ZA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "ar-001": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ca-ES": [
        "H",
        "h",
        "hB"
    ],
    "en-001": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-HK": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-IL": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "en-MY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "es-BR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-ES": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-GQ": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "fr-CA": [
        "H",
        "h",
        "hB"
    ],
    "gl-ES": [
        "H",
        "h",
        "hB"
    ],
    "gu-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "hi-IN": [
        "hB",
        "h",
        "H"
    ],
    "it-CH": [
        "H",
        "h",
        "hB"
    ],
    "it-IT": [
        "H",
        "h",
        "hB"
    ],
    "kn-IN": [
        "hB",
        "h",
        "H"
    ],
    "ku-SY": [
        "H",
        "hB"
    ],
    "ml-IN": [
        "hB",
        "h",
        "H"
    ],
    "mr-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "pa-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "ta-IN": [
        "hB",
        "h",
        "hb",
        "H"
    ],
    "te-IN": [
        "hB",
        "h",
        "H"
    ],
    "zu-ZA": [
        "H",
        "hB",
        "hb",
        "h"
    ]
};
//#endregion
//#region packages/icu-messageformat-parser/date-time-pattern-generator.ts
/**
* Returns the best matching date time pattern if a date time skeleton
* pattern is provided with a locale. Follows the Unicode specification:
* https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
* @param skeleton date time skeleton pattern that possibly includes j, J or C
* @param locale
*/ function getBestPattern(skeleton, locale) {
    let skeletonCopy = "";
    for(let patternPos = 0; patternPos < skeleton.length; patternPos++){
        const patternChar = skeleton.charAt(patternPos);
        if (patternChar === "j") {
            let extraLength = 0;
            while(patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar){
                extraLength++;
                patternPos++;
            }
            let hourLen = 1 + (extraLength & 1);
            let dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
            let dayPeriodChar = "a";
            let hourChar = getDefaultHourSymbolFromLocale(locale);
            if (hourChar == "H" || hourChar == "k") dayPeriodLen = 0;
            while(dayPeriodLen-- > 0)skeletonCopy += dayPeriodChar;
            while(hourLen-- > 0)skeletonCopy = hourChar + skeletonCopy;
        } else if (patternChar === "J") skeletonCopy += "H";
        else skeletonCopy += patternChar;
    }
    return skeletonCopy;
}
/**
* Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
* of the given `locale` to the corresponding time pattern.
* @param locale
*/ function getDefaultHourSymbolFromLocale(locale) {
    let hourCycle = locale.hourCycle;
    if (hourCycle === void 0 && locale.hourCycles && locale.hourCycles.length) hourCycle = locale.hourCycles[0];
    if (hourCycle) switch(hourCycle){
        case "h24":
            return "k";
        case "h23":
            return "H";
        case "h12":
            return "h";
        case "h11":
            return "K";
        default:
            throw new Error("Invalid hourCycle");
    }
    const languageTag = locale.language;
    let regionTag;
    if (languageTag !== "root") regionTag = locale.maximize().region;
    return (timeData[regionTag || ""] || timeData[languageTag || ""] || timeData[`${languageTag}-001`] || timeData["001"])[0];
}
//#endregion
//#region packages/icu-messageformat-parser/parser.ts
const SPACE_SEPARATOR_START_REGEX = new RegExp(`^${SPACE_SEPARATOR_REGEX.source}*`);
const SPACE_SEPARATOR_END_REGEX = new RegExp(`${SPACE_SEPARATOR_REGEX.source}*$`);
function createLocation(start, end) {
    return {
        start,
        end
    };
}
const hasNativeFromEntries = !!Object.fromEntries;
const hasTrimStart = !!String.prototype.trimStart;
const hasTrimEnd = !!String.prototype.trimEnd;
const fromEntries = hasNativeFromEntries ? Object.fromEntries : function fromEntries(entries) {
    const obj = {};
    for (const [k, v] of entries)obj[k] = v;
    return obj;
};
const trimStart = hasTrimStart ? function trimStart(s) {
    return s.trimStart();
} : function trimStart(s) {
    return s.replace(SPACE_SEPARATOR_START_REGEX, "");
};
const trimEnd = hasTrimEnd ? function trimEnd(s) {
    return s.trimEnd();
} : function trimEnd(s) {
    return s.replace(SPACE_SEPARATOR_END_REGEX, "");
};
const IDENTIFIER_PREFIX_RE = /* @__PURE__ */ new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
function matchIdentifierAtIndex(s, index) {
    IDENTIFIER_PREFIX_RE.lastIndex = index;
    return IDENTIFIER_PREFIX_RE.exec(s)[1] ?? "";
}
var Parser = class {
    constructor(message, options = {}){
        this.message = message;
        this.position = {
            offset: 0,
            line: 1,
            column: 1
        };
        this.ignoreTag = !!options.ignoreTag;
        this.locale = options.locale;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    parse() {
        if (this.offset() !== 0) throw Error("parser can only be used once");
        return this.parseMessage(0, "", false);
    }
    parseMessage(nestingLevel, parentArgType, expectingCloseTag) {
        let elements = [];
        while(!this.isEOF()){
            const char = this.char();
            if (char === 123) {
                const result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) return result;
                elements.push(result.val);
            } else if (char === 125 && nestingLevel > 0) break;
            else if (char === 35 && (parentArgType === "plural" || parentArgType === "selectordinal")) {
                const position = this.clonePosition();
                this.bump();
                elements.push({
                    type: TYPE.pound,
                    location: createLocation(position, this.clonePosition())
                });
            } else if (char === 60 && !this.ignoreTag && this.peek() === 47) if (expectingCloseTag) break;
            else return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
            else if (char === 60 && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
                const result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) return result;
                elements.push(result.val);
            } else {
                const result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) return result;
                elements.push(result.val);
            }
        }
        return {
            val: elements,
            err: null
        };
    }
    /**
	* A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
	* [custom element name][] except that a dash is NOT always mandatory and uppercase letters
	* are accepted:
	*
	* ```
	* tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
	* tagName ::= [a-z] (PENChar)*
	* PENChar ::=
	*     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
	*     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
	*     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
	* ```
	*
	* [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
	* NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
	* since other tag-based engines like React allow it
	*/ parseTag(nestingLevel, parentArgType) {
        const startPosition = this.clonePosition();
        this.bump();
        const tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf("/>")) return {
            val: {
                type: TYPE.literal,
                value: `<${tagName}/>`,
                location: createLocation(startPosition, this.clonePosition())
            },
            err: null
        };
        else if (this.bumpIf(">")) {
            const childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) return childrenResult;
            const children = childrenResult.val;
            const endTagStartPosition = this.clonePosition();
            if (this.bumpIf("</")) {
                if (this.isEOF() || !_isAlpha(this.char())) return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                const closingTagNameStartPosition = this.clonePosition();
                if (tagName !== this.parseTagName()) return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                this.bumpSpace();
                if (!this.bumpIf(">")) return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                return {
                    val: {
                        type: TYPE.tag,
                        value: tagName,
                        children,
                        location: createLocation(startPosition, this.clonePosition())
                    },
                    err: null
                };
            } else return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
        } else return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
    }
    /**
	* This method assumes that the caller has peeked ahead for the first tag character.
	*/ parseTagName() {
        const startOffset = this.offset();
        this.bump();
        while(!this.isEOF() && _isPotentialElementNameChar(this.char()))this.bump();
        return this.message.slice(startOffset, this.offset());
    }
    parseLiteral(nestingLevel, parentArgType) {
        const start = this.clonePosition();
        let value = "";
        while(true){
            const parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            const parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            const parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        const location = createLocation(start, this.clonePosition());
        return {
            val: {
                type: TYPE.literal,
                value,
                location
            },
            err: null
        };
    }
    tryParseLeftAngleBracket() {
        if (!this.isEOF() && this.char() === 60 && (this.ignoreTag || !_isAlphaOrSlash(this.peek() || 0))) {
            this.bump();
            return "<";
        }
        return null;
    }
    /**
	* Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
	* a character that requires quoting (that is, "only where needed"), and works the same in
	* nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
	*/ tryParseQuote(parentArgType) {
        if (this.isEOF() || this.char() !== 39) return null;
        switch(this.peek()){
            case 39:
                this.bump();
                this.bump();
                return "'";
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35:
                if (parentArgType === "plural" || parentArgType === "selectordinal") break;
                return null;
            default:
                return null;
        }
        this.bump();
        const codePoints = [
            this.char()
        ];
        this.bump();
        while(!this.isEOF()){
            const ch = this.char();
            if (ch === 39) if (this.peek() === 39) {
                codePoints.push(39);
                this.bump();
            } else {
                this.bump();
                break;
            }
            else codePoints.push(ch);
            this.bump();
        }
        return String.fromCodePoint(...codePoints);
    }
    tryParseUnquoted(nestingLevel, parentArgType) {
        if (this.isEOF()) return null;
        const ch = this.char();
        if (ch === 60 || ch === 123 || ch === 35 && (parentArgType === "plural" || parentArgType === "selectordinal") || ch === 125 && nestingLevel > 0) return null;
        else {
            this.bump();
            return String.fromCodePoint(ch);
        }
    }
    parseArgument(nestingLevel, expectingCloseTag) {
        const openingBracePosition = this.clonePosition();
        this.bump();
        this.bumpSpace();
        if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        if (this.char() === 125) {
            this.bump();
            return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        let value = this.parseIdentifierIfPossible().value;
        if (!value) return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        this.bumpSpace();
        if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        switch(this.char()){
            case 125:
                this.bump();
                return {
                    val: {
                        type: TYPE.argument,
                        value,
                        location: createLocation(openingBracePosition, this.clonePosition())
                    },
                    err: null
                };
            case 44:
                this.bump();
                this.bumpSpace();
                if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
            default:
                return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
    }
    /**
	* Advance the parser until the end of the identifier, if it is currently on
	* an identifier character. Return an empty string otherwise.
	*/ parseIdentifierIfPossible() {
        const startingPosition = this.clonePosition();
        const startOffset = this.offset();
        const value = matchIdentifierAtIndex(this.message, startOffset);
        const endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        return {
            value,
            location: createLocation(startingPosition, this.clonePosition())
        };
    }
    parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition) {
        let typeStartPosition = this.clonePosition();
        let argType = this.parseIdentifierIfPossible().value;
        let typeEndPosition = this.clonePosition();
        switch(argType){
            case "":
                return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
            case "number":
            case "date":
            case "time":
                {
                    this.bumpSpace();
                    let styleAndLocation = null;
                    if (this.bumpIf(",")) {
                        this.bumpSpace();
                        const styleStartPosition = this.clonePosition();
                        const result = this.parseSimpleArgStyleIfPossible();
                        if (result.err) return result;
                        const style = trimEnd(result.val);
                        if (style.length === 0) return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                        styleAndLocation = {
                            style,
                            styleLocation: createLocation(styleStartPosition, this.clonePosition())
                        };
                    }
                    const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                    if (argCloseResult.err) return argCloseResult;
                    const location = createLocation(openingBracePosition, this.clonePosition());
                    if (styleAndLocation && styleAndLocation.style.startsWith("::")) {
                        let skeleton = trimStart(styleAndLocation.style.slice(2));
                        if (argType === "number") {
                            const result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                            if (result.err) return result;
                            return {
                                val: {
                                    type: TYPE.number,
                                    value,
                                    location,
                                    style: result.val
                                },
                                err: null
                            };
                        } else {
                            if (skeleton.length === 0) return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location);
                            let dateTimePattern = skeleton;
                            if (this.locale) dateTimePattern = getBestPattern(skeleton, this.locale);
                            const style = {
                                type: SKELETON_TYPE.dateTime,
                                pattern: dateTimePattern,
                                location: styleAndLocation.styleLocation,
                                parsedOptions: this.shouldParseSkeletons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDateTimeSkeleton"])(dateTimePattern) : {}
                            };
                            return {
                                val: {
                                    type: argType === "date" ? TYPE.date : TYPE.time,
                                    value,
                                    location,
                                    style
                                },
                                err: null
                            };
                        }
                    }
                    return {
                        val: {
                            type: argType === "number" ? TYPE.number : argType === "date" ? TYPE.date : TYPE.time,
                            value,
                            location,
                            style: styleAndLocation?.style ?? null
                        },
                        err: null
                    };
                }
            case "plural":
            case "selectordinal":
            case "select":
                {
                    const typeEndPosition = this.clonePosition();
                    this.bumpSpace();
                    if (!this.bumpIf(",")) return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition, {
                        ...typeEndPosition
                    }));
                    this.bumpSpace();
                    let identifierAndLocation = this.parseIdentifierIfPossible();
                    let pluralOffset = 0;
                    if (argType !== "select" && identifierAndLocation.value === "offset") {
                        if (!this.bumpIf(":")) return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                        this.bumpSpace();
                        const result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                        if (result.err) return result;
                        this.bumpSpace();
                        identifierAndLocation = this.parseIdentifierIfPossible();
                        pluralOffset = result.val;
                    }
                    const optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                    if (optionsResult.err) return optionsResult;
                    const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                    if (argCloseResult.err) return argCloseResult;
                    const location = createLocation(openingBracePosition, this.clonePosition());
                    if (argType === "select") return {
                        val: {
                            type: TYPE.select,
                            value,
                            options: fromEntries(optionsResult.val),
                            location
                        },
                        err: null
                    };
                    else return {
                        val: {
                            type: TYPE.plural,
                            value,
                            options: fromEntries(optionsResult.val),
                            offset: pluralOffset,
                            pluralType: argType === "plural" ? "cardinal" : "ordinal",
                            location
                        },
                        err: null
                    };
                }
            default:
                return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        }
    }
    tryParseArgumentClose(openingBracePosition) {
        if (this.isEOF() || this.char() !== 125) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        this.bump();
        return {
            val: true,
            err: null
        };
    }
    /**
	* See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
	*/ parseSimpleArgStyleIfPossible() {
        let nestedBraces = 0;
        const startPosition = this.clonePosition();
        while(!this.isEOF())switch(this.char()){
            case 39:
                {
                    this.bump();
                    let apostrophePosition = this.clonePosition();
                    if (!this.bumpUntil("'")) return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                    this.bump();
                    break;
                }
            case 123:
                nestedBraces += 1;
                this.bump();
                break;
            case 125:
                if (nestedBraces > 0) nestedBraces -= 1;
                else return {
                    val: this.message.slice(startPosition.offset, this.offset()),
                    err: null
                };
                break;
            default:
                this.bump();
                break;
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null
        };
    }
    parseNumberSkeletonFromString(skeleton, location) {
        let tokens = [];
        try {
            tokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNumberSkeletonFromString"])(skeleton);
        } catch  {
            return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: SKELETON_TYPE.number,
                tokens,
                location,
                parsedOptions: this.shouldParseSkeletons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$skeleton$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNumberSkeleton"])(tokens) : {}
            },
            err: null
        };
    }
    /**
	* @param nesting_level The current nesting level of messages.
	*     This can be positive when parsing message fragment in select or plural argument options.
	* @param parent_arg_type The parent argument's type.
	* @param parsed_first_identifier If provided, this is the first identifier-like selector of
	*     the argument. It is a by-product of a previous parsing attempt.
	* @param expecting_close_tag If true, this message is directly or indirectly nested inside
	*     between a pair of opening and closing tags. The nested message will not parse beyond
	*     the closing tag boundary.
	*/ tryParsePluralOrSelectOptions(nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        let hasOtherClause = false;
        const options = [];
        const parsedSelectors = /* @__PURE__ */ new Set();
        let { value: selector, location: selectorLocation } = parsedFirstIdentifier;
        while(true){
            if (selector.length === 0) {
                const startPosition = this.clonePosition();
                if (parentArgType !== "select" && this.bumpIf("=")) {
                    const result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) return result;
                    selectorLocation = createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                } else break;
            }
            if (parsedSelectors.has(selector)) return this.error(parentArgType === "select" ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            if (selector === "other") hasOtherClause = true;
            this.bumpSpace();
            const openingBracePosition = this.clonePosition();
            if (!this.bumpIf("{")) return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
            const fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) return fragmentResult;
            const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) return argCloseResult;
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: createLocation(openingBracePosition, this.clonePosition())
                }
            ]);
            parsedSelectors.add(selector);
            this.bumpSpace();
            ({ value: selector, location: selectorLocation } = this.parseIdentifierIfPossible());
        }
        if (options.length === 0) return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
        if (this.requiresOtherClause && !hasOtherClause) return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
        return {
            val: options,
            err: null
        };
    }
    tryParseDecimalInteger(expectNumberError, invalidNumberError) {
        let sign = 1;
        const startingPosition = this.clonePosition();
        if (this.bumpIf("+")) {} else if (this.bumpIf("-")) sign = -1;
        let hasDigits = false;
        let decimal = 0;
        while(!this.isEOF()){
            const ch = this.char();
            if (ch >= 48 && ch <= 57) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            } else break;
        }
        const location = createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) return this.error(expectNumberError, location);
        decimal *= sign;
        if (!Number.isSafeInteger(decimal)) return this.error(invalidNumberError, location);
        return {
            val: decimal,
            err: null
        };
    }
    offset() {
        return this.position.offset;
    }
    isEOF() {
        return this.offset() === this.message.length;
    }
    clonePosition() {
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
        };
    }
    /**
	* Return the code point at the current position of the parser.
	* Throws if the index is out of bound.
	*/ char() {
        const offset = this.position.offset;
        if (offset >= this.message.length) throw Error("out of bound");
        const code = this.message.codePointAt(offset);
        if (code === void 0) throw Error(`Offset ${offset} is at invalid UTF-16 code unit boundary`);
        return code;
    }
    error(kind, location) {
        return {
            val: null,
            err: {
                kind,
                message: this.message,
                location
            }
        };
    }
    /** Bump the parser to the next UTF-16 code unit. */ bump() {
        if (this.isEOF()) return;
        const code = this.char();
        if (code === 10) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        } else {
            this.position.column += 1;
            this.position.offset += code < 65536 ? 1 : 2;
        }
    }
    /**
	* If the substring starting at the current position of the parser has
	* the given prefix, then bump the parser to the character immediately
	* following the prefix and return true. Otherwise, don't bump the parser
	* and return false.
	*/ bumpIf(prefix) {
        if (this.message.startsWith(prefix, this.offset())) {
            for(let i = 0; i < prefix.length; i++)this.bump();
            return true;
        }
        return false;
    }
    /**
	* Bump the parser until the pattern character is found and return `true`.
	* Otherwise bump to the end of the file and return `false`.
	*/ bumpUntil(pattern) {
        const currentOffset = this.offset();
        const index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        } else {
            this.bumpTo(this.message.length);
            return false;
        }
    }
    /**
	* Bump the parser to the target offset.
	* If target offset is beyond the end of the input, bump the parser to the end of the input.
	*/ bumpTo(targetOffset) {
        if (this.offset() > targetOffset) throw Error(`targetOffset ${targetOffset} must be greater than or equal to the current offset ${this.offset()}`);
        targetOffset = Math.min(targetOffset, this.message.length);
        while(true){
            const offset = this.offset();
            if (offset === targetOffset) break;
            if (offset > targetOffset) throw Error(`targetOffset ${targetOffset} is at invalid UTF-16 code unit boundary`);
            this.bump();
            if (this.isEOF()) break;
        }
    }
    /** advance the parser through all whitespace to the next non-whitespace code unit. */ bumpSpace() {
        while(!this.isEOF() && _isWhiteSpace(this.char()))this.bump();
    }
    /**
	* Peek at the *next* Unicode codepoint in the input without advancing the parser.
	* If the input has been exhausted, then this returns null.
	*/ peek() {
        if (this.isEOF()) return null;
        const code = this.char();
        const offset = this.offset();
        return this.message.charCodeAt(offset + (code >= 65536 ? 2 : 1)) ?? null;
    }
};
/**
* This check if codepoint is alphabet (lower & uppercase)
* @param codepoint
* @returns
*/ function _isAlpha(codepoint) {
    return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
}
function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47;
}
/** See `parseTag` function docs. */ function _isPotentialElementNameChar(c) {
    return c === 45 || c === 46 || c >= 48 && c <= 57 || c === 95 || c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 183 || c >= 192 && c <= 214 || c >= 216 && c <= 246 || c >= 248 && c <= 893 || c >= 895 && c <= 8191 || c >= 8204 && c <= 8205 || c >= 8255 && c <= 8256 || c >= 8304 && c <= 8591 || c >= 11264 && c <= 12271 || c >= 12289 && c <= 55295 || c >= 63744 && c <= 64975 || c >= 65008 && c <= 65533 || c >= 65536 && c <= 983039;
}
/**
* Code point equivalent of regex `\p{White_Space}`.
* From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
*/ function _isWhiteSpace(c) {
    return c >= 9 && c <= 13 || c === 32 || c === 133 || c >= 8206 && c <= 8207 || c === 8232 || c === 8233;
}
//#endregion
//#region packages/icu-messageformat-parser/manipulator.ts
/**
* Collect all variables in an AST to Record<string, TYPE>
* @param ast AST to collect variables from
* @param vars Record of variable name to variable type
*/ function collectVariables(ast, vars = /* @__PURE__ */ new Map()) {
    ast.forEach((el)=>{
        if (isArgumentElement(el) || isDateElement(el) || isTimeElement(el) || isNumberElement(el)) if (vars.has(el.value)) {
            const existingType = vars.get(el.value);
            if (existingType !== el.type && existingType !== TYPE.plural && existingType !== TYPE.select) throw new Error(`Variable ${el.value} has conflicting types`);
        } else vars.set(el.value, el.type);
        if (isPluralElement(el) || isSelectElement(el)) {
            vars.set(el.value, el.type);
            Object.keys(el.options).forEach((k)=>{
                collectVariables(el.options[k].value, vars);
            });
        }
        if (isTagElement(el)) {
            vars.set(el.value, el.type);
            collectVariables(el.children, vars);
        }
    });
}
/**
* Check if 2 ASTs are structurally the same. This primarily means that
* they have the same variables with the same type
* @param a
* @param b
* @returns
*/ function isStructurallySame(a, b) {
    const aVars = /* @__PURE__ */ new Map();
    const bVars = /* @__PURE__ */ new Map();
    collectVariables(a, aVars);
    collectVariables(b, bVars);
    if (aVars.size !== bVars.size) return {
        success: false,
        error: /* @__PURE__ */ new Error(`Different number of variables: [${Array.from(aVars.keys()).join(", ")}] vs [${Array.from(bVars.keys()).join(", ")}]`)
    };
    return Array.from(aVars.entries()).reduce((result, [key, type])=>{
        if (!result.success) return result;
        const bType = bVars.get(key);
        if (bType == null) return {
            success: false,
            error: /* @__PURE__ */ new Error(`Missing variable ${key} in message`)
        };
        if (bType !== type) return {
            success: false,
            error: /* @__PURE__ */ new Error(`Variable ${key} has conflicting types: ${TYPE[type]} vs ${TYPE[bType]}`)
        };
        return result;
    }, {
        success: true
    });
}
//#endregion
//#region packages/icu-messageformat-parser/index.ts
function pruneLocation(els) {
    els.forEach((el)=>{
        delete el.location;
        if (isSelectElement(el) || isPluralElement(el)) for(const k in el.options){
            delete el.options[k].location;
            pruneLocation(el.options[k].value);
        }
        else if (isNumberElement(el) && isNumberSkeleton(el.style)) delete el.style.location;
        else if ((isDateElement(el) || isTimeElement(el)) && isDateTimeSkeleton(el.style)) delete el.style.location;
        else if (isTagElement(el)) pruneLocation(el.children);
    });
}
function parse(message, opts = {}) {
    opts = {
        shouldParseSkeletons: true,
        requiresOtherClause: true,
        ...opts
    };
    const result = new Parser(message, opts).parse();
    if (result.err) {
        const error = SyntaxError(ErrorKind[result.err.kind]);
        error.location = result.err.location;
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!opts?.captureLocation) pruneLocation(result.val);
    return result.val;
}
const _Parser = Parser;
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/intl-messageformat/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorCode",
    ()=>ErrorCode,
    "FormatError",
    ()=>FormatError,
    "IntlMessageFormat",
    ()=>IntlMessageFormat,
    "InvalidValueError",
    ()=>InvalidValueError,
    "InvalidValueTypeError",
    ()=>InvalidValueTypeError,
    "MissingValueError",
    ()=>MissingValueError,
    "PART_TYPE",
    ()=>PART_TYPE,
    "default",
    ()=>intl_messageformat_default,
    "formatToParts",
    ()=>formatToParts,
    "isFormatXMLElementFn",
    ()=>isFormatXMLElementFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@formatjs/fast-memoize/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@formatjs/icu-messageformat-parser/index.js [app-ssr] (ecmascript)");
;
;
//#region packages/intl-messageformat/error.ts
let ErrorCode = /* @__PURE__ */ function(ErrorCode) {
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
    return ErrorCode;
}({});
var FormatError = class extends Error {
    constructor(msg, code, originalMessage){
        super(msg);
        this.code = code;
        this.originalMessage = originalMessage;
    }
    toString() {
        return `[formatjs Error: ${this.code}] ${this.message}`;
    }
};
var InvalidValueError = class extends FormatError {
    constructor(variableId, value, options, originalMessage){
        super(`Invalid values for "${variableId}": "${value}". Options are "${Object.keys(options).join("\", \"")}"`, ErrorCode.INVALID_VALUE, originalMessage);
    }
};
var InvalidValueTypeError = class extends FormatError {
    constructor(value, type, originalMessage){
        super(`Value for "${value}" must be of type ${type}`, ErrorCode.INVALID_VALUE, originalMessage);
    }
};
var MissingValueError = class extends FormatError {
    constructor(variableId, originalMessage){
        super(`The intl string context variable "${variableId}" was not provided to the string "${originalMessage}"`, ErrorCode.MISSING_VALUE, originalMessage);
    }
};
//#endregion
//#region packages/intl-messageformat/formatters.ts
let PART_TYPE = /* @__PURE__ */ function(PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
    return PART_TYPE;
}({});
function mergeLiteral(parts) {
    if (parts.length < 2) return parts;
    return parts.reduce((all, part)=>{
        const lastPart = all[all.length - 1];
        if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) all.push(part);
        else lastPart.value += part.value;
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === "function";
}
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, originalMessage) {
    if (els.length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLiteralElement"])(els[0])) return [
        {
            type: PART_TYPE.literal,
            value: els[0].value
        }
    ];
    const result = [];
    for (const el of els){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLiteralElement"])(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPoundElement"])(el)) {
            if (typeof currentPluralValue === "number") result.push({
                type: PART_TYPE.literal,
                value: formatters.getNumberFormat(locales).format(currentPluralValue)
            });
            continue;
        }
        const { value: varName } = el;
        if (!(values && varName in values)) throw new MissingValueError(varName, originalMessage);
        let value = values[varName];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArgumentElement"])(el)) {
            if (!value || typeof value === "string" || typeof value === "number" || typeof value === "bigint") value = typeof value === "string" || typeof value === "number" || typeof value === "bigint" ? String(value) : "";
            result.push({
                type: typeof value === "string" ? PART_TYPE.literal : PART_TYPE.object,
                value
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateElement"])(el)) {
            const style = typeof el.style === "string" ? formats.date[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : void 0;
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTimeElement"])(el)) {
            const style = typeof el.style === "string" ? formats.time[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateTimeSkeleton"])(el.style) ? el.style.parsedOptions : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getDateTimeFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberElement"])(el)) {
            const style = typeof el.style === "string" ? formats.number[el.style] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumberSkeleton"])(el.style) ? el.style.parsedOptions : void 0;
            if (style && style.scale) {
                const scale = style.scale || 1;
                if (typeof value === "bigint") {
                    if (!Number.isInteger(scale)) throw new TypeError(`Cannot apply fractional scale ${scale} to bigint value. Scale must be an integer when formatting bigint.`);
                    value = value * BigInt(scale);
                } else value = value * scale;
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters.getNumberFormat(locales, style).format(value)
            });
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTagElement"])(el)) {
            const { children, value } = el;
            const formatFn = values[value];
            if (!isFormatXMLElementFn(formatFn)) throw new InvalidValueTypeError(value, "function", originalMessage);
            let chunks = formatFn(formatToParts(children, locales, formatters, formats, values, currentPluralValue).map((p)=>p.value));
            if (!Array.isArray(chunks)) chunks = [
                chunks
            ];
            result.push(...chunks.map((c)=>{
                return {
                    type: typeof c === "string" ? PART_TYPE.literal : PART_TYPE.object,
                    value: c
                };
            }));
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSelectElement"])(el)) {
            const key = value;
            const opt = (Object.prototype.hasOwnProperty.call(el.options, key) ? el.options[key] : void 0) || el.options.other;
            if (!opt) throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            result.push(...formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPluralElement"])(el)) {
            const exactKey = `=${value}`;
            let opt = Object.prototype.hasOwnProperty.call(el.options, exactKey) ? el.options[exactKey] : void 0;
            if (!opt) {
                if (!Intl.PluralRules) throw new FormatError(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ErrorCode.MISSING_INTL_API, originalMessage);
                const numericValue = typeof value === "bigint" ? Number(value) : value;
                const rule = formatters.getPluralRules(locales, {
                    type: el.pluralType
                }).select(numericValue - (el.offset || 0));
                opt = (Object.prototype.hasOwnProperty.call(el.options, rule) ? el.options[rule] : void 0) || el.options.other;
            }
            if (!opt) throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            const numericValue = typeof value === "bigint" ? Number(value) : value;
            result.push(...formatToParts(opt.value, locales, formatters, formats, values, numericValue - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}
//#endregion
//#region packages/intl-messageformat/core.ts
function mergeConfig(c1, c2) {
    if (!c2) return c1;
    return {
        ...c1,
        ...c2,
        ...Object.keys(c1).reduce((all, k)=>{
            all[k] = {
                ...c1[k],
                ...c2[k]
            };
            return all;
        }, {})
    };
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) return defaultConfig;
    return Object.keys(defaultConfig).reduce((all, k)=>{
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, {
        ...defaultConfig
    });
}
function createFastMemoizeCache(store) {
    return {
        create () {
            return {
                get (key) {
                    return store[key];
                },
                set (key, value) {
                    store[key] = value;
                }
            };
        }
    };
}
function createDefaultFormatters(cache = {
    number: {},
    dateTime: {},
    pluralRules: {}
}) {
    return {
        getNumberFormat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])((...args)=>new Intl.NumberFormat(...args), {
            cache: createFastMemoizeCache(cache.number),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        }),
        getDateTimeFormat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])((...args)=>new Intl.DateTimeFormat(...args), {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        }),
        getPluralRules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])((...args)=>new Intl.PluralRules(...args), {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$fast$2d$memoize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strategies"].variadic
        })
    };
}
var IntlMessageFormat = class IntlMessageFormat {
    constructor(message, locales = IntlMessageFormat.defaultLocale, overrideFormats, opts){
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {}
        };
        this.format = (values)=>{
            const parts = this.formatToParts(values);
            if (parts.length === 1) return parts[0].value;
            const result = parts.reduce((all, part)=>{
                if (!all.length || part.type !== PART_TYPE.literal || typeof all[all.length - 1] !== "string") all.push(part.value);
                else all[all.length - 1] += part.value;
                return all;
            }, []);
            if (result.length <= 1) return result[0] || "";
            return result;
        };
        this.formatToParts = (values)=>formatToParts(this.ast, this.locales, this.formatters, this.formats, values, void 0, this.message);
        this.resolvedOptions = ()=>({
                locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0]
            });
        this.getAst = ()=>this.ast;
        this.locales = locales;
        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
        if (typeof message === "string") {
            this.message = message;
            if (!IntlMessageFormat.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            const { ...parseOpts } = opts || {};
            this.ast = IntlMessageFormat.__parse(message, {
                ...parseOpts,
                locale: this.resolvedLocale
            });
        } else this.ast = message;
        if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
    }
    static{
        this.memoizedDefaultLocale = null;
    }
    static get defaultLocale() {
        if (!IntlMessageFormat.memoizedDefaultLocale) IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
        return IntlMessageFormat.memoizedDefaultLocale;
    }
    static{
        this.resolveLocale = (locales)=>{
            if (typeof Intl.Locale === "undefined") return;
            const supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
            if (supportedLocales.length > 0) return new Intl.Locale(supportedLocales[0]);
            return new Intl.Locale(typeof locales === "string" ? locales : locales[0]);
        };
    }
    static{
        this.__parse = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$formatjs$2f$icu$2d$messageformat$2d$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"];
    }
    static{
        this.formats = {
            number: {
                integer: {
                    maximumFractionDigits: 0
                },
                currency: {
                    style: "currency"
                },
                percent: {
                    style: "percent"
                }
            },
            date: {
                short: {
                    month: "numeric",
                    day: "numeric",
                    year: "2-digit"
                },
                medium: {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                },
                long: {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                },
                full: {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            },
            time: {
                short: {
                    hour: "numeric",
                    minute: "numeric"
                },
                medium: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                },
                long: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                },
                full: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                }
            }
        };
    }
};
//#endregion
//#region packages/intl-messageformat/index.ts
var intl_messageformat_default = IntlMessageFormat;
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next-intl/dist/esm/development/shared/NextIntlClientProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NextIntlClientProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
function NextIntlClientProvider({ locale, ...rest }) {
    if (!locale) {
        throw new Error("Couldn't infer the `locale` prop in `NextIntlClientProvider`, please provide it explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntlProvider"], {
        locale: locale,
        ...rest
    });
}
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormatter",
    ()=>useFormatter,
    "useTranslations",
    ()=>useTranslations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
;
/**
 * This is the main entry file when non-'react-server'
 * environments import from 'next-intl'.
 *
 * Maintainer notes:
 * - Make sure this mirrors the API from 'react-server'.
 * - Make sure everything exported from this module is
 *   supported in all Next.js versions that are supported.
 */ // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function callHook(name, hook) {
    return (...args)=>{
        try {
            return hook(...args);
        } catch  {
            throw new Error(`Failed to call \`${name}\` because the context from \`NextIntlClientProvider\` was not found.

This can happen because:
1) You intended to render this component as a Server Component, the render
   failed, and therefore React attempted to render the component on the client
   instead. If this is the case, check the console for server errors.
2) You intended to render this component on the client side, but no context was found.
   Learn more about this error here: https://next-intl.dev/docs/environments/server-client-components#missing-context`);
        }
    };
}
const useTranslations = callHook('useTranslations', __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"]);
const useFormatter = callHook('useFormatter', __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormatter"]);
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/trie/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trie",
    ()=>Trie
]);
// A [trie](https://en.wikipedia.org/wiki/Trie) data structure that holds
// object keys weakly, yet can also hold non-object keys, unlike the
// native `WeakMap`.
// If no makeData function is supplied, the looked-up data will be an empty,
// null-prototype Object.
const defaultMakeData = ()=>Object.create(null);
// Useful for processing arguments objects as well as arrays.
const { forEach, slice } = Array.prototype;
const { hasOwnProperty } = Object.prototype;
class Trie {
    constructor(weakness = true, makeData = defaultMakeData){
        this.weakness = weakness;
        this.makeData = makeData;
    }
    lookup() {
        return this.lookupArray(arguments);
    }
    lookupArray(array) {
        let node = this;
        forEach.call(array, (key)=>node = node.getChildTrie(key));
        return hasOwnProperty.call(node, "data") ? node.data : node.data = this.makeData(slice.call(array));
    }
    peek() {
        return this.peekArray(arguments);
    }
    peekArray(array) {
        let node = this;
        for(let i = 0, len = array.length; node && i < len; ++i){
            const map = node.mapFor(array[i], false);
            node = map && map.get(array[i]);
        }
        return node && node.data;
    }
    remove() {
        return this.removeArray(arguments);
    }
    removeArray(array) {
        let data;
        if (array.length) {
            const head = array[0];
            const map = this.mapFor(head, false);
            const child = map && map.get(head);
            if (child) {
                data = child.removeArray(slice.call(array, 1));
                if (!child.data && !child.weak && !(child.strong && child.strong.size)) {
                    map.delete(head);
                }
            }
        } else {
            data = this.data;
            delete this.data;
        }
        return data;
    }
    getChildTrie(key) {
        const map = this.mapFor(key, true);
        let child = map.get(key);
        if (!child) map.set(key, child = new Trie(this.weakness, this.makeData));
        return child;
    }
    mapFor(key, create) {
        return this.weakness && isObjRef(key) ? this.weak || (create ? this.weak = new WeakMap : void 0) : this.strong || (create ? this.strong = new Map : void 0);
    }
}
function isObjRef(value) {
    switch(typeof value){
        case "object":
            if (value === null) break;
        // Fall through to return true...
        case "function":
            return true;
    }
    return false;
}
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/caches/lib/strong.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StrongCache",
    ()=>StrongCache
]);
function defaultDispose() {}
class StrongCache {
    constructor(max = Infinity, dispose = defaultDispose){
        this.max = max;
        this.dispose = dispose;
        this.map = new Map();
        this.newest = null;
        this.oldest = null;
    }
    has(key) {
        return this.map.has(key);
    }
    get(key) {
        const node = this.getNode(key);
        return node && node.value;
    }
    get size() {
        return this.map.size;
    }
    getNode(key) {
        const node = this.map.get(key);
        if (node && node !== this.newest) {
            const { older, newer } = node;
            if (newer) {
                newer.older = older;
            }
            if (older) {
                older.newer = newer;
            }
            node.older = this.newest;
            node.older.newer = node;
            node.newer = null;
            this.newest = node;
            if (node === this.oldest) {
                this.oldest = newer;
            }
        }
        return node;
    }
    set(key, value) {
        let node = this.getNode(key);
        if (node) {
            return node.value = value;
        }
        node = {
            key,
            value,
            newer: null,
            older: this.newest
        };
        if (this.newest) {
            this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.map.set(key, node);
        return node.value;
    }
    clean() {
        while(this.oldest && this.map.size > this.max){
            this.delete(this.oldest.key);
        }
    }
    delete(key) {
        const node = this.map.get(key);
        if (node) {
            if (node === this.newest) {
                this.newest = node.older;
            }
            if (node === this.oldest) {
                this.oldest = node.newer;
            }
            if (node.newer) {
                node.newer.older = node.older;
            }
            if (node.older) {
                node.older.newer = node.newer;
            }
            this.map.delete(key);
            this.dispose(node.value, key);
            return true;
        }
        return false;
    }
}
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/caches/lib/weak.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeakCache",
    ()=>WeakCache
]);
function noop() {}
const defaultDispose = noop;
const _WeakRef = typeof WeakRef !== "undefined" ? WeakRef : function(value) {
    return {
        deref: ()=>value
    };
};
const _WeakMap = typeof WeakMap !== "undefined" ? WeakMap : Map;
const _FinalizationRegistry = typeof FinalizationRegistry !== "undefined" ? FinalizationRegistry : function() {
    return {
        register: noop,
        unregister: noop
    };
};
const finalizationBatchSize = 10024;
class WeakCache {
    constructor(max = Infinity, dispose = defaultDispose){
        this.max = max;
        this.dispose = dispose;
        this.map = new _WeakMap();
        this.newest = null;
        this.oldest = null;
        this.unfinalizedNodes = new Set();
        this.finalizationScheduled = false;
        this.size = 0;
        this.finalize = ()=>{
            const iterator = this.unfinalizedNodes.values();
            for(let i = 0; i < finalizationBatchSize; i++){
                const node = iterator.next().value;
                if (!node) break;
                this.unfinalizedNodes.delete(node);
                const key = node.key;
                delete node.key;
                node.keyRef = new _WeakRef(key);
                this.registry.register(key, node, node);
            }
            if (this.unfinalizedNodes.size > 0) {
                queueMicrotask(this.finalize);
            } else {
                this.finalizationScheduled = false;
            }
        };
        this.registry = new _FinalizationRegistry(this.deleteNode.bind(this));
    }
    has(key) {
        return this.map.has(key);
    }
    get(key) {
        const node = this.getNode(key);
        return node && node.value;
    }
    getNode(key) {
        const node = this.map.get(key);
        if (node && node !== this.newest) {
            const { older, newer } = node;
            if (newer) {
                newer.older = older;
            }
            if (older) {
                older.newer = newer;
            }
            node.older = this.newest;
            node.older.newer = node;
            node.newer = null;
            this.newest = node;
            if (node === this.oldest) {
                this.oldest = newer;
            }
        }
        return node;
    }
    set(key, value) {
        let node = this.getNode(key);
        if (node) {
            return node.value = value;
        }
        node = {
            key,
            value,
            newer: null,
            older: this.newest
        };
        if (this.newest) {
            this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.scheduleFinalization(node);
        this.map.set(key, node);
        this.size++;
        return node.value;
    }
    clean() {
        while(this.oldest && this.size > this.max){
            this.deleteNode(this.oldest);
        }
    }
    deleteNode(node) {
        if (node === this.newest) {
            this.newest = node.older;
        }
        if (node === this.oldest) {
            this.oldest = node.newer;
        }
        if (node.newer) {
            node.newer.older = node.older;
        }
        if (node.older) {
            node.older.newer = node.newer;
        }
        this.size--;
        const key = node.key || node.keyRef && node.keyRef.deref();
        this.dispose(node.value, key);
        if (!node.keyRef) {
            this.unfinalizedNodes.delete(node);
        } else {
            this.registry.unregister(node);
        }
        if (key) this.map.delete(key);
    }
    delete(key) {
        const node = this.map.get(key);
        if (node) {
            this.deleteNode(node);
            return true;
        }
        return false;
    }
    scheduleFinalization(node) {
        this.unfinalizedNodes.add(node);
        if (!this.finalizationScheduled) {
            this.finalizationScheduled = true;
            queueMicrotask(this.finalize);
        }
    }
}
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/equality/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "equal",
    ()=>equal
]);
const { toString, hasOwnProperty } = Object.prototype;
const fnToStr = Function.prototype.toString;
const previousComparisons = new Map();
function equal(a, b) {
    try {
        return check(a, b);
    } finally{
        previousComparisons.clear();
    }
}
const __TURBOPACK__default__export__ = equal;
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) {
        return true;
    }
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    const aTag = toString.call(a);
    const bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) {
        return false;
    }
    switch(aTag){
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length) return false;
        // Fall through to object case...
        case '[object Object]':
            {
                if (previouslyCompared(a, b)) return true;
                const aKeys = definedKeys(a);
                const bKeys = definedKeys(b);
                // If `a` and `b` have a different number of enumerable keys, they
                // must be different.
                const keyCount = aKeys.length;
                if (keyCount !== bKeys.length) return false;
                // Now make sure they have the same keys.
                for(let k = 0; k < keyCount; ++k){
                    if (!hasOwnProperty.call(b, aKeys[k])) {
                        return false;
                    }
                }
                // Finally, check deep equality of all child properties.
                for(let k = 0; k < keyCount; ++k){
                    const key = aKeys[k];
                    if (!check(a[key], b[key])) {
                        return false;
                    }
                }
                return true;
            }
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a) return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == `${b}`;
        case '[object Map]':
        case '[object Set]':
            {
                if (a.size !== b.size) return false;
                if (previouslyCompared(a, b)) return true;
                const aIterator = a.entries();
                const isMap = aTag === '[object Map]';
                while(true){
                    const info = aIterator.next();
                    if (info.done) break;
                    // If a instanceof Set, aValue === aKey.
                    const [aKey, aValue] = info.value;
                    // So this works the same way for both Set and Map.
                    if (!b.has(aKey)) {
                        return false;
                    }
                    // However, we care about deep equality of values only when dealing
                    // with Map structures.
                    if (isMap && !check(aValue, b.get(aKey))) {
                        return false;
                    }
                }
                return true;
            }
        case '[object Uint16Array]':
        case '[object Uint8Array]':
        case '[object Uint32Array]':
        case '[object Int32Array]':
        case '[object Int8Array]':
        case '[object Int16Array]':
        case '[object ArrayBuffer]':
            // DataView doesn't need these conversions, but the equality check is
            // otherwise the same.
            a = new Uint8Array(a);
            b = new Uint8Array(b);
        // Fall through...
        case '[object DataView]':
            {
                let len = a.byteLength;
                if (len === b.byteLength) {
                    while(len-- && a[len] === b[len]){
                    // Keep looping as long as the bytes are equal.
                    }
                }
                return len === -1;
            }
        case '[object AsyncFunction]':
        case '[object GeneratorFunction]':
        case '[object AsyncGeneratorFunction]':
        case '[object Function]':
            {
                const aCode = fnToStr.call(a);
                if (aCode !== fnToStr.call(b)) {
                    return false;
                }
                // We consider non-native functions equal if they have the same code
                // (native functions require === because their code is censored).
                // Note that this behavior is not entirely sound, since !== function
                // objects with the same code can behave differently depending on
                // their closure scope. However, any function can behave differently
                // depending on the values of its input arguments (including this)
                // and its calling context (including its closure scope), even
                // though the function object is === to itself; and it is entirely
                // possible for functions that are not === to behave exactly the
                // same under all conceivable circumstances. Because none of these
                // factors are statically decidable in JavaScript, JS function
                // equality is not well-defined. This ambiguity allows us to
                // consider the best possible heuristic among various imperfect
                // options, and equating non-native functions that have the same
                // code has enormous practical benefits, such as when comparing
                // functions that are repeatedly passed as fresh function
                // expressions within objects that are otherwise deeply equal. Since
                // any function created from the same syntactic expression (in the
                // same code location) will always stringify to the same code
                // according to fnToStr.call, we can reasonably expect these
                // repeatedly passed function expressions to have the same code, and
                // thus behave "the same" (with all the caveats mentioned above),
                // even though the runtime function objects are !== to one another.
                return !endsWith(aCode, nativeCodeSuffix);
            }
    }
    // Otherwise the values are not equal.
    return false;
}
function definedKeys(obj) {
    // Remember that the second argument to Array.prototype.filter will be
    // used as `this` within the callback function.
    return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
    return this[key] !== void 0;
}
const nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
    const fromIndex = full.length - suffix.length;
    return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    let bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b)) return true;
    } else {
        previousComparisons.set(a, bSet = new Set);
    }
    bSet.add(b);
    return false;
}
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/context/lib/slot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slot",
    ()=>Slot
]);
// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
let currentContext = null;
// This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.
const MISSING_VALUE = {};
let idCounter = 1;
// Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.
const makeSlotClass = ()=>class Slot {
        constructor(){
            // If you have a Slot object, you can find out its slot.id, but you cannot
            // guess the slot.id of a Slot you don't have access to, thanks to the
            // randomized suffix.
            this.id = [
                "slot",
                idCounter++,
                Date.now(),
                Math.random().toString(36).slice(2)
            ].join(":");
        }
        hasValue() {
            for(let context = currentContext; context; context = context.parent){
                // We use the Slot object iself as a key to its value, which means the
                // value cannot be obtained without a reference to the Slot object.
                if (this.id in context.slots) {
                    const value = context.slots[this.id];
                    if (value === MISSING_VALUE) break;
                    if (context !== currentContext) {
                        // Cache the value in currentContext.slots so the next lookup will
                        // be faster. This caching is safe because the tree of contexts and
                        // the values of the slots are logically immutable.
                        currentContext.slots[this.id] = value;
                    }
                    return true;
                }
            }
            if (currentContext) {
                // If a value was not found for this Slot, it's never going to be found
                // no matter how many times we look it up, so we might as well cache
                // the absence of the value, too.
                currentContext.slots[this.id] = MISSING_VALUE;
            }
            return false;
        }
        getValue() {
            if (this.hasValue()) {
                return currentContext.slots[this.id];
            }
        }
        withValue(value, callback, // Given the prevalence of arrow functions, specifying arguments is likely
        // to be much more common than specifying `this`, hence this ordering:
        args, thisArg) {
            const slots = {
                __proto__: null,
                [this.id]: value
            };
            const parent = currentContext;
            currentContext = {
                parent,
                slots
            };
            try {
                // Function.prototype.apply allows the arguments array argument to be
                // omitted or undefined, so args! is fine here.
                return callback.apply(thisArg, args);
            } finally{
                currentContext = parent;
            }
        }
        // Capture the current context and wrap a callback function so that it
        // reestablishes the captured context when called.
        static bind(callback) {
            const context = currentContext;
            return function() {
                const saved = currentContext;
                try {
                    currentContext = context;
                    return callback.apply(this, arguments);
                } finally{
                    currentContext = saved;
                }
            };
        }
        // Immediately run a callback function without any captured context.
        static noContext(callback, // Given the prevalence of arrow functions, specifying arguments is likely
        // to be much more common than specifying `this`, hence this ordering:
        args, thisArg) {
            if (currentContext) {
                const saved = currentContext;
                try {
                    currentContext = null;
                    // Function.prototype.apply allows the arguments array argument to be
                    // omitted or undefined, so args! is fine here.
                    return callback.apply(thisArg, args);
                } finally{
                    currentContext = saved;
                }
            } else {
                return callback.apply(thisArg, args);
            }
        }
    };
function maybe(fn) {
    try {
        return fn();
    } catch (ignored) {}
}
// We store a single global implementation of the Slot class as a permanent
// non-enumerable property of the globalThis object. This obfuscation does
// nothing to prevent access to the Slot class, but at least it ensures the
// implementation (i.e. currentContext) cannot be tampered with, and all copies
// of the @wry/context package (hopefully just one) will share the same Slot
// implementation. Since the first copy of the @wry/context package to be
// imported wins, this technique imposes a steep cost for any future breaking
// changes to the Slot class.
const globalKey = "@wry/context:Slot";
const host = // Prefer globalThis when available.
// https://github.com/benjamn/wryware/issues/347
maybe(()=>globalThis) || // Fall back to global, which works in Node.js and may be converted by some
// bundlers to the appropriate identifier (window, self, ...) depending on the
// bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
maybe(()=>/*TURBOPACK member replacement*/ __turbopack_context__.g) || // Otherwise, use a dummy host that's local to this module. We used to fall
// back to using the Array constructor as a namespace, but that was flagged in
// https://github.com/benjamn/wryware/issues/347, and can be avoided.
Object.create(null);
// Whichever globalHost we're using, make TypeScript happy about the additional
// globalKey property.
const globalHost = host;
const Slot = globalHost[globalKey] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[globalKey] || function(Slot) {
    try {
        Object.defineProperty(globalHost, globalKey, {
            value: Slot,
            enumerable: false,
            writable: false,
            // When it was possible for globalHost to be the Array constructor (a
            // legacy Slot dedup strategy), it was important for the property to be
            // configurable:true so it could be deleted. That does not seem to be as
            // important when globalHost is the global object, but I don't want to
            // cause similar problems again, and configurable:true seems safest.
            // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
            configurable: true
        });
    } finally{
        return Slot;
    }
}(makeSlotClass());
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/context/lib/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asyncFromGen",
    ()=>asyncFromGen,
    "bind",
    ()=>bind,
    "noContext",
    ()=>noContext,
    "setTimeout",
    ()=>setTimeoutWithContext,
    "wrapYieldingFiberMethods",
    ()=>wrapYieldingFiberMethods
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$wry$2f$context$2f$lib$2f$slot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/context/lib/slot.js [app-ssr] (ecmascript)");
;
;
const { bind, noContext } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$wry$2f$context$2f$lib$2f$slot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"];
;
function setTimeoutWithContext(callback, delay) {
    return setTimeout(bind(callback), delay);
}
function asyncFromGen(genFn) {
    return function() {
        const gen = genFn.apply(this, arguments);
        const boundNext = bind(gen.next);
        const boundThrow = bind(gen.throw);
        return new Promise((resolve, reject)=>{
            function invoke(method, argument) {
                try {
                    var result = method.call(gen, argument);
                } catch (error) {
                    return reject(error);
                }
                const next = result.done ? resolve : invokeNext;
                if (isPromiseLike(result.value)) {
                    result.value.then(next, result.done ? reject : invokeThrow);
                } else {
                    next(result.value);
                }
            }
            const invokeNext = (value)=>invoke(boundNext, value);
            const invokeThrow = (error)=>invoke(boundThrow, error);
            invokeNext();
        });
    };
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.
const wrappedFibers = [];
function wrapYieldingFiberMethods(Fiber) {
    // There can be only one implementation of Fiber per process, so this array
    // should never grow longer than one element.
    if (wrappedFibers.indexOf(Fiber) < 0) {
        const wrap = (obj, method)=>{
            const fn = obj[method];
            obj[method] = function() {
                return noContext(fn, arguments, this);
            };
        };
        // These methods can yield, according to
        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
        wrap(Fiber, "yield");
        wrap(Fiber.prototype, "run");
        wrap(Fiber.prototype, "throwInto");
        wrappedFibers.push(Fiber);
    }
    return Fiber;
}
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/context.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonReactive",
    ()=>nonReactive,
    "parentEntrySlot",
    ()=>parentEntrySlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$wry$2f$context$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/context/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$wry$2f$context$2f$lib$2f$slot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/context/lib/slot.js [app-ssr] (ecmascript)");
;
const parentEntrySlot = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$wry$2f$context$2f$lib$2f$slot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"]();
function nonReactive(fn) {
    return parentEntrySlot.withValue(void 0, fn);
}
;
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrayFromSet",
    ()=>arrayFromSet,
    "hasOwnProperty",
    ()=>hasOwnProperty,
    "maybeUnsubscribe",
    ()=>maybeUnsubscribe
]);
const { hasOwnProperty } = Object.prototype;
const arrayFromSet = Array.from || function(set) {
    const array = [];
    set.forEach((item)=>array.push(item));
    return array;
};
function maybeUnsubscribe(entryOrDep) {
    const { unsubscribe } = entryOrDep;
    if (typeof unsubscribe === "function") {
        entryOrDep.unsubscribe = void 0;
        unsubscribe();
    }
}
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/entry.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Entry",
    ()=>Entry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/helpers.js [app-ssr] (ecmascript)");
;
;
const emptySetPool = [];
const POOL_TARGET_SIZE = 100;
// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
    if (!condition) {
        throw new Error(optionalMessage || "assertion failure");
    }
}
function valueIs(a, b) {
    const len = a.length;
    return(// Unknown values are not equal to each other.
    len > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    len === b.length && // The underlying value or exception must be the same.
    a[len - 1] === b[len - 1]);
}
function valueGet(value) {
    switch(value.length){
        case 0:
            throw new Error("unknown value");
        case 1:
            return value[0];
        case 2:
            throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
class Entry {
    constructor(fn){
        this.fn = fn;
        this.parents = new Set();
        this.childValues = new Map();
        // When this Entry has children that are dirty, this property becomes
        // a Set containing other Entry objects, borrowed from emptySetPool.
        // When the set becomes empty, it gets recycled back to emptySetPool.
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry.count;
    }
    peek() {
        if (this.value.length === 1 && !mightBeDirty(this)) {
            rememberParent(this);
            return this.value[0];
        }
    }
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    recompute(args) {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
    }
    setDirty() {
        if (this.dirty) return;
        this.dirty = true;
        reportDirty(this);
        // We can go ahead and unsubscribe here, since any further dirty
        // notifications we receive will be redundant, and unsubscribing may
        // free up some resources, e.g. file watchers.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeUnsubscribe"])(this);
    }
    dispose() {
        this.setDirty();
        // Sever any dependency relationships with our own children, so those
        // children don't retain this parent Entry in their child.parents sets,
        // thereby preventing it from being fully garbage collected.
        forgetChildren(this);
        // Because this entry has been kicked out of the cache (in index.js),
        // we've lost the ability to find out if/when this entry becomes dirty,
        // whether that happens through a subscription, because of a direct call
        // to entry.setDirty(), or because one of its children becomes dirty.
        // Because of this loss of future information, we have to assume the
        // worst (that this entry might have become dirty very soon), so we must
        // immediately mark this entry's parents as dirty. Normally we could
        // just call entry.setDirty() rather than calling parent.setDirty() for
        // each parent, but that would leave this entry in parent.childValues
        // and parent.dirtyChildren, which would prevent the child from being
        // truly forgotten.
        eachParent(this, (parent, child)=>{
            parent.setDirty();
            forgetChild(parent, this);
        });
    }
    forget() {
        // The code that creates Entry objects in index.ts will replace this method
        // with one that actually removes the Entry from the cache, which will also
        // trigger the entry.dispose method.
        this.dispose();
    }
    dependOn(dep) {
        dep.add(this);
        if (!this.deps) {
            this.deps = emptySetPool.pop() || new Set();
        }
        this.deps.add(dep);
    }
    forgetDeps() {
        if (this.deps) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayFromSet"])(this.deps).forEach((dep)=>dep.delete(this));
            this.deps.clear();
            emptySetPool.push(this.deps);
            this.deps = null;
        }
    }
}
Entry.count = 0;
function rememberParent(child) {
    const parent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parentEntrySlot"].getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) {
            parent.childValues.set(child, []);
        }
        if (mightBeDirty(child)) {
            reportDirtyChild(parent, child);
        } else {
            reportCleanChild(parent, child);
        }
        return parent;
    }
}
function reallyRecompute(entry, args) {
    forgetChildren(entry);
    // Set entry as the parent entry while calling recomputeNewValue(entry).
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parentEntrySlot"].withValue(entry, recomputeNewValue, [
        entry,
        args
    ]);
    if (maybeSubscribe(entry, args)) {
        // If we successfully recomputed entry.value and did not fail to
        // (re)subscribe, then this Entry is no longer explicitly dirty.
        setClean(entry);
    }
    return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
    entry.recomputing = true;
    const { normalizeResult } = entry;
    let oldValueCopy;
    if (normalizeResult && entry.value.length === 1) {
        oldValueCopy = valueCopy(entry.value);
    }
    // Make entry.value an empty array, representing an unknown value.
    entry.value.length = 0;
    try {
        // If entry.fn succeeds, entry.value will become a normal Value.
        entry.value[0] = entry.fn.apply(null, args);
        // If we have a viable oldValueCopy to compare with the (successfully
        // recomputed) new entry.value, and they are not already === identical, give
        // normalizeResult a chance to pick/choose/reuse parts of oldValueCopy[0]
        // and/or entry.value[0] to determine the final cached entry.value.
        if (normalizeResult && oldValueCopy && !valueIs(oldValueCopy, entry.value)) {
            try {
                entry.value[0] = normalizeResult(entry.value[0], oldValueCopy[0]);
            } catch (_a) {
            // If normalizeResult throws, just use the newer value, rather than
            // saving the exception as entry.value[1].
            }
        }
    } catch (e) {
        // If entry.fn throws, entry.value will hold that exception.
        entry.value[1] = e;
    }
    // Either way, this line is always reached.
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) {
        // This Entry may still have dirty children, in which case we can't
        // let our parents know we're clean just yet.
        return;
    }
    reportClean(entry);
}
function reportDirty(child) {
    eachParent(child, reportDirtyChild);
}
function reportClean(child) {
    eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
    const parentCount = child.parents.size;
    if (parentCount) {
        const parents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayFromSet"])(child.parents);
        for(let i = 0; i < parentCount; ++i){
            callback(parents[i], child);
        }
    }
}
// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(parent, child) {
    // Must have called rememberParent(child) before calling
    // reportDirtyChild(parent, child).
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    const parentWasClean = !mightBeDirty(parent);
    if (!parent.dirtyChildren) {
        parent.dirtyChildren = emptySetPool.pop() || new Set;
    } else if (parent.dirtyChildren.has(child)) {
        // If we already know this child is dirty, then we must have already
        // informed our own parents that we are dirty, so we can terminate
        // the recursion early.
        return;
    }
    parent.dirtyChildren.add(child);
    // If parent was clean before, it just became (possibly) dirty (according to
    // mightBeDirty), since we just added child to parent.dirtyChildren.
    if (parentWasClean) {
        reportDirty(parent);
    }
}
// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(parent, child) {
    // Must have called rememberChild(child) before calling
    // reportCleanChild(parent, child).
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    const childValue = parent.childValues.get(child);
    if (childValue.length === 0) {
        parent.childValues.set(child, valueCopy(child.value));
    } else if (!valueIs(childValue, child.value)) {
        parent.setDirty();
    }
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) {
        return;
    }
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    const dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) {
                emptySetPool.push(dc);
            }
            parent.dirtyChildren = null;
        }
    }
}
// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(parent) {
    if (parent.childValues.size > 0) {
        parent.childValues.forEach((_value, child)=>{
            forgetChild(parent, child);
        });
    }
    // Remove this parent Entry from any sets to which it was added by the
    // addToSet method.
    parent.forgetDeps();
    // After we forget all our children, this.dirtyChildren must be empty
    // and therefore must have been reset to null.
    assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
    if (typeof entry.subscribe === "function") {
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeUnsubscribe"])(entry); // Prevent double subscriptions.
            entry.unsubscribe = entry.subscribe.apply(null, args);
        } catch (e) {
            // If this Entry has a subscribe function and it threw an exception
            // (or an unsubscribe function it previously returned now throws),
            // return false to indicate that we were not able to subscribe (or
            // unsubscribe), and this Entry should remain dirty.
            entry.setDirty();
            return false;
        }
    }
    // Returning true indicates either that there was no entry.subscribe
    // function or that it succeeded.
    return true;
}
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/dep.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dep",
    ()=>dep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/helpers.js [app-ssr] (ecmascript)");
;
;
const EntryMethods = {
    setDirty: true,
    dispose: true,
    forget: true
};
function dep(options) {
    const depsByKey = new Map();
    const subscribe = options && options.subscribe;
    function depend(key) {
        const parent = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parentEntrySlot"].getValue();
        if (parent) {
            let dep = depsByKey.get(key);
            if (!dep) {
                depsByKey.set(key, dep = new Set);
            }
            parent.dependOn(dep);
            if (typeof subscribe === "function") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeUnsubscribe"])(dep);
                dep.unsubscribe = subscribe(key);
            }
        }
    }
    depend.dirty = function dirty(key, entryMethodName) {
        const dep = depsByKey.get(key);
        if (dep) {
            const m = entryMethodName && __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwnProperty"].call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
            // We have to use arrayFromSet(dep).forEach instead of dep.forEach,
            // because modifying a Set while iterating over it can cause elements in
            // the Set to be removed from the Set before they've been iterated over.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayFromSet"])(dep).forEach((entry)=>entry[m]());
            depsByKey.delete(key);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeUnsubscribe"])(dep);
        }
    };
    return depend;
}
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultMakeCacheKey",
    ()=>defaultMakeCacheKey,
    "wrap",
    ()=>wrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/trie/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$strong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/caches/lib/strong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$entry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/entry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/context.js [app-ssr] (ecmascript) <locals>");
// A lighter-weight dependency, similar to OptimisticWrapperFunction, except
// with only one argument, no makeCacheKey, no wrapped function to recompute,
// and no result value. Useful for representing dependency leaves in the graph
// of computation. Subscriptions are supported.
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$dep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/optimism/lib/dep.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
// The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.
let defaultKeyTrie;
function defaultMakeCacheKey(...args) {
    const trie = defaultKeyTrie || (defaultKeyTrie = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trie"](typeof WeakMap === "function"));
    return trie.lookupArray(args);
}
;
;
const caches = new Set();
function wrap(originalFunction, { max = Math.pow(2, 16), keyArgs, makeCacheKey = defaultMakeCacheKey, normalizeResult, subscribe, cache: cacheOption = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$strong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StrongCache"] } = Object.create(null)) {
    const cache = typeof cacheOption === "function" ? new cacheOption(max, (entry)=>entry.dispose()) : cacheOption;
    const optimistic = function() {
        const key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
        if (key === void 0) {
            return originalFunction.apply(null, arguments);
        }
        let entry = cache.get(key);
        if (!entry) {
            cache.set(key, entry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$entry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Entry"](originalFunction));
            entry.normalizeResult = normalizeResult;
            entry.subscribe = subscribe;
            // Give the Entry the ability to trigger cache.delete(key), even though
            // the Entry itself does not know about key or cache.
            entry.forget = ()=>cache.delete(key);
        }
        const value = entry.recompute(Array.prototype.slice.call(arguments));
        // Move this entry to the front of the least-recently used queue,
        // since we just finished computing its value.
        cache.set(key, entry);
        caches.add(cache);
        // Clean up any excess entries in the cache, but only if there is no
        // active parent entry, meaning we're not in the middle of a larger
        // computation that might be flummoxed by the cleaning.
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$optimism$2f$lib$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parentEntrySlot"].hasValue()) {
            caches.forEach((cache)=>cache.clean());
            caches.clear();
        }
        return value;
    };
    Object.defineProperty(optimistic, "size", {
        get: ()=>cache.size,
        configurable: false,
        enumerable: false
    });
    Object.freeze(optimistic.options = {
        max,
        keyArgs,
        makeCacheKey,
        normalizeResult,
        subscribe,
        cache
    });
    function dirtyKey(key) {
        const entry = key && cache.get(key);
        if (entry) {
            entry.setDirty();
        }
    }
    optimistic.dirtyKey = dirtyKey;
    optimistic.dirty = function dirty() {
        dirtyKey(makeCacheKey.apply(null, arguments));
    };
    function peekKey(key) {
        const entry = key && cache.get(key);
        if (entry) {
            return entry.peek();
        }
    }
    optimistic.peekKey = peekKey;
    optimistic.peek = function peek() {
        return peekKey(makeCacheKey.apply(null, arguments));
    };
    function forgetKey(key) {
        return key ? cache.delete(key) : false;
    }
    optimistic.forgetKey = forgetKey;
    optimistic.forget = function forget() {
        return forgetKey(makeCacheKey.apply(null, arguments));
    };
    optimistic.makeCacheKey = makeCacheKey;
    optimistic.getKey = keyArgs ? function getKey() {
        return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
    } : makeCacheKey;
    return Object.freeze(optimistic);
}
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/graphql-tag/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "disableExperimentalFragmentVariables",
    ()=>disableExperimentalFragmentVariables,
    "disableFragmentWarnings",
    ()=>disableFragmentWarnings,
    "enableExperimentalFragmentVariables",
    ()=>enableExperimentalFragmentVariables,
    "gql",
    ()=>gql,
    "resetCaches",
    ()=>resetCaches
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2f$language$2f$parser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/graphql/language/parser.mjs [app-ssr] (ecmascript)");
;
;
var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, ' ').trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    var seenKeys = new Set();
    var definitions = [];
    ast.definitions.forEach(function(fragmentDefinition) {
        if (fragmentDefinition.kind === 'FragmentDefinition') {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) {
                    console.warn("Warning: fragment with name " + fragmentName + " already exists.\n" + "graphql-tag enforces all fragment names across your application to be unique; read more about\n" + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
                }
            } else if (!sourceKeySet) {
                fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
            }
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        } else {
            definitions.push(fragmentDefinition);
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, ast), {
        definitions: definitions
    });
}
function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function(node) {
        if (node.loc) delete node.loc;
        Object.keys(node).forEach(function(key) {
            var value = node[key];
            if (value && typeof value === 'object') {
                workSet.add(value);
            }
        });
    });
    var loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        var parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2f$language$2f$parser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(source, {
            experimentalFragmentVariables: experimentalFragmentVariables,
            allowLegacyFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== 'Document') {
            throw new Error('Not a valid GraphQL document.');
        }
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals) {
    var args = [];
    for(var _i = 1; _i < arguments.length; _i++){
        args[_i - 1] = arguments[_i];
    }
    if (typeof literals === 'string') {
        literals = [
            literals
        ];
    }
    var result = literals[0];
    args.forEach(function(arg, i) {
        if (arg && arg.kind === 'Document') {
            result += arg.loc.source.body;
        } else {
            result += arg;
        }
        result += literals[i + 1];
    });
    return parseDocument(result);
}
function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
    printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
}
var extras = {
    gql: gql,
    resetCaches: resetCaches,
    disableFragmentWarnings: disableFragmentWarnings,
    enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};
(function(gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
const __TURBOPACK__default__export__ = gql;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client-integration-nextjs/node_modules/@apollo/client-react-streaming/dist/stream-utils.ssr.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JSONDecodeStream",
    ()=>JSONDecodeStream,
    "JSONEncodeStream",
    ()=>JSONEncodeStream,
    "built_for_ssr",
    ()=>built_for_ssr,
    "createInjectionTransformStream",
    ()=>createInjectionTransformStream,
    "pipeReaderToResponse",
    ()=>pipeReaderToResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$server$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/compiled/react-dom/server.node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
// src/stream-utils/JSONTransformStreams.tsx
var JSONEncodeStream = class extends TransformStream {
    constructor(){
        super({
            transform (chunk, controller) {
                controller.enqueue(JSON.stringify(chunk));
            }
        });
    }
};
var JSONDecodeStream = class extends TransformStream {
    constructor(){
        super({
            transform (chunk, controller) {
                if (typeof chunk !== "string") {
                    chunk = new TextDecoder().decode(chunk);
                }
                controller.enqueue(JSON.parse(chunk));
            }
        });
    }
};
function createInjectionTransformStream() {
    let queuedInjections = [];
    async function renderInjectedHtml() {
        const injections = [
            ...queuedInjections
        ];
        queuedInjections = [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$server$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderToString"])(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, injections.map((callback, i)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                key: i
            }, callback()))));
    }
    let headInserted = false;
    let currentlyStreaming = false;
    let tailOfLastChunk = "";
    const textDecoder = new TextDecoder();
    const textEncoder = new TextEncoder();
    const HEAD_END = "</head>";
    const KEEP_BYTES = HEAD_END.length;
    const transformStream = new TransformStream({
        async transform (chunk, controller) {
            if (currentlyStreaming) {
                controller.enqueue(chunk);
                return;
            }
            if (!headInserted) {
                const content = tailOfLastChunk + textDecoder.decode(chunk, {
                    stream: true
                });
                const index = content.indexOf(HEAD_END);
                if (index !== -1) {
                    const insertedHeadContent = content.slice(0, index) + await renderInjectedHtml() + content.slice(index);
                    controller.enqueue(textEncoder.encode(insertedHeadContent));
                    currentlyStreaming = true;
                    setImmediate(()=>{
                        currentlyStreaming = false;
                    });
                    headInserted = true;
                } else {
                    tailOfLastChunk = content.slice(-KEEP_BYTES);
                    controller.enqueue(textEncoder.encode(content.slice(0, -KEEP_BYTES)));
                }
            } else {
                if (queuedInjections.length > 0) {
                    controller.enqueue(textEncoder.encode(await renderInjectedHtml()));
                }
                controller.enqueue(chunk);
                currentlyStreaming = true;
                setImmediate(()=>{
                    currentlyStreaming = false;
                });
            }
        },
        async flush (controller) {
            if (queuedInjections.length > 0) {
                controller.enqueue(textEncoder.encode(await renderInjectedHtml()));
            }
        }
    });
    return {
        transformStream,
        injectIntoStream: (callback)=>queuedInjections.push(callback)
    };
}
// src/stream-utils/pipeReaderToResponse.ts
async function pipeReaderToResponse(reader, res) {
    try {
        while(true){
            const { done, value } = await reader.read();
            if (done) {
                res.end();
                return;
            } else {
                res.write(value);
            }
        }
    } catch (e) {
        res.destroy(e);
    }
}
const built_for_ssr = true;
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client-integration-nextjs/node_modules/@apollo/client-react-streaming/dist/index.ssr.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloClient",
    ()=>ApolloClient,
    "DataTransportContext",
    ()=>DataTransportContext,
    "DebounceMultipartResponsesLink",
    ()=>AccumulateMultipartResponsesLink,
    "InMemoryCache",
    ()=>InMemoryCache,
    "ReadFromReadableStreamLink",
    ()=>ReadFromReadableStreamLink,
    "RemoveMultipartDirectivesLink",
    ()=>RemoveMultipartDirectivesLink,
    "SSRMultipartLink",
    ()=>SSRMultipartLink,
    "TeeToReadableStreamLink",
    ()=>TeeToReadableStreamLink,
    "WrapApolloProvider",
    ()=>WrapApolloProvider,
    "built_for_ssr",
    ()=>built_for_ssr,
    "createTransportedQueryPreloader",
    ()=>createTransportedQueryPreloader,
    "isTransportedQueryRef",
    ()=>isTransportedQueryRef,
    "readFromReadableStream",
    ()=>readFromReadableStream,
    "resetApolloSingletons",
    ()=>resetApolloSingletons,
    "reviveTransportedQueryRef",
    ()=>reviveTransportedQueryRef,
    "skipDataTransport",
    ()=>skipDataTransport,
    "teeToReadableStream",
    ()=>teeToReadableStream,
    "useWrapTransportedQueryRef",
    ()=>useWrapTransportedQueryRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/link/core/ApolloLink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/cache/inmemory/inMemoryCache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/rxjs/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/graphql-tag/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/core/ApolloClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/core/networkStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/utilities/graphql/print.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasDirectives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/utilities/internal/hasDirectives.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$removeDirectivesFromDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/utilities/internal/removeDirectivesFromDocument.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@wry/equality/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$internal$2f$cache$2f$QueryReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/react/internal/cache/QueryReference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/react/hooks/useApolloClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/react/context/ApolloProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/graphql/language/visitor.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2f$utilities$2f$stripIgnoredCharacters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/graphql/utilities/stripIgnoredCharacters.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$stream$2d$utils$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client-integration-nextjs/node_modules/@apollo/client-react-streaming/dist/stream-utils.ssr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
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
// src/AccumulateMultipartResponsesLink.ts
var AccumulateMultipartResponsesLink = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"] {
    maxDelay;
    constructor(config){
        super();
        this.maxDelay = config.cutoffDelay;
    }
    request(operation, forward) {
        if (!forward) {
            throw new Error("This is not a terminal link!");
        }
        const operationContainsMultipartDirectives = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasDirectives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasDirectives"])([
            "defer"
        ], operation.query);
        const upstream = forward(operation);
        if (!operationContainsMultipartDirectives) return upstream;
        const maxDelay = this.maxDelay;
        let accumulatedData, maxDelayTimeout;
        const incrementalHandler = operation.client["queryManager"].incrementalHandler;
        let incremental;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((subscriber)=>{
            const upstreamSubscription = upstream.subscribe({
                next: (result)=>{
                    if (incrementalHandler.isIncrementalResult(result)) {
                        incremental ||= incrementalHandler.startRequest({
                            query: operation.query
                        });
                        accumulatedData = incremental.handle(accumulatedData?.data, result);
                    } else {
                        accumulatedData = result;
                    }
                    if (!maxDelay) {
                        flushAccumulatedData();
                    } else if (!maxDelayTimeout) {
                        maxDelayTimeout = setTimeout(flushAccumulatedData, maxDelay);
                    }
                },
                error: (error)=>{
                    if (maxDelayTimeout) clearTimeout(maxDelayTimeout);
                    subscriber.error(error);
                },
                complete: ()=>{
                    if (maxDelayTimeout) {
                        clearTimeout(maxDelayTimeout);
                        flushAccumulatedData();
                    }
                    subscriber.complete();
                }
            });
            function flushAccumulatedData() {
                if (accumulatedData) {
                    subscriber.next(accumulatedData);
                }
                subscriber.complete();
                upstreamSubscription.unsubscribe();
            }
            return function cleanUp() {
                clearTimeout(maxDelayTimeout);
                upstreamSubscription.unsubscribe();
            };
        });
    }
};
function getDirectiveArgumentValue(directive, argument) {
    return directive.arguments?.find((arg)=>arg.name.value === argument)?.value;
}
var RemoveMultipartDirectivesLink = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"] {
    stripDirectives = [];
    constructor(config){
        super();
        if (config.stripDefer !== false) this.stripDirectives.push("defer");
    }
    request(operation, forward) {
        if (!forward) {
            throw new Error("This is not a terminal link!");
        }
        const { query } = operation;
        let modifiedQuery = query;
        modifiedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$removeDirectivesFromDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeDirectivesFromDocument"])(this.stripDirectives.map((directive)=>({
                test (node) {
                    let shouldStrip = node.kind === "Directive" && node.name.value === directive;
                    const label = getDirectiveArgumentValue(node, "label");
                    if (label?.kind === "StringValue" && label.value.startsWith("SsrDontStrip")) {
                        shouldStrip = false;
                    }
                    return shouldStrip;
                },
                remove: true
            })).concat({
            test (node) {
                if (node.kind !== "Directive") return false;
                const label = getDirectiveArgumentValue(node, "label");
                return label?.kind === "StringValue" && label.value.startsWith("SsrStrip");
            },
            remove: true
        }), modifiedQuery);
        if (modifiedQuery === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["of"])({});
        }
        operation.query = modifiedQuery;
        return forward(operation);
    }
};
var SSRMultipartLink = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"] {
    constructor(config = {}){
        const combined = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"].from([
            new RemoveMultipartDirectivesLink({
                stripDefer: config.stripDefer
            }),
            new AccumulateMultipartResponsesLink({
                cutoffDelay: config.cutoffDelay || 0
            })
        ]);
        super(combined.request);
    }
};
// src/bundleInfo.ts
var bundle = {
    pkg: "@apollo/client-react-streaming"
};
var sourceSymbol = Symbol.for("apollo.source_package");
// src/DataTransportAbstraction/WrappedInMemoryCache.tsx
var InMemoryCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InMemoryCache"] {
    /**
   * Information about the current package and it's export names, for use in error messages.
   *
   * @internal
   */ static info = bundle;
    [sourceSymbol];
    constructor(config){
        super(config);
        const info = this.constructor.info;
        this[sourceSymbol] = `${info.pkg}:InMemoryCache`;
    }
};
// src/DataTransportAbstraction/backpressuredCallback.ts
function createBackpressuredCallback() {
    const queue = [];
    let push = queue.push.bind(queue);
    return {
        push: (value)=>push(value),
        register: (callback)=>{
            if (callback) {
                push = callback;
                while(queue.length){
                    callback(queue.shift());
                }
            } else {
                push = queue.push.bind(queue);
            }
        }
    };
}
var DataTransportContext = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
var CLEAN = {};
function useTransportValue(value) {
    const dataTransport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DataTransportContext);
    if (!dataTransport) throw new Error("useTransportValue must be used within a streaming-specific ApolloProvider");
    const valueRef = dataTransport.useStaticValueRef(value);
    const whichResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(()=>()=>{}, ()=>0 /* client */ , ()=>valueRef.current === CLEAN ? 0 /* client */  : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(value, valueRef.current) ? 0 /* client */  : 1 /* server */ );
    if (whichResult === 0 /* client */ ) {
        valueRef.current = CLEAN;
    }
    return whichResult === 1 /* server */  ? valueRef.current : value;
}
var teeToReadableStreamKey = Symbol.for("apollo.tee.readableStreamController");
var readFromReadableStreamKey = Symbol.for("apollo.read.readableStream");
function teeToReadableStream(onLinkHit, context) {
    return Object.assign(context, {
        [teeToReadableStreamKey]: onLinkHit
    });
}
function readFromReadableStream(readableStream, context) {
    return Object.assign(context, {
        [readFromReadableStreamKey]: readableStream
    });
}
var TeeToReadableStreamLink = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"] {
    constructor(){
        super((operation, forward)=>{
            const context = operation.getContext();
            const onLinkHit = context[teeToReadableStreamKey];
            if (onLinkHit) {
                const controller = onLinkHit();
                const tryClose = ()=>{
                    try {
                        controller.close();
                    } catch  {}
                };
                return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
                    let subscribed = true;
                    forward(operation).subscribe({
                        next (result) {
                            controller.enqueue({
                                type: "next",
                                value: result
                            });
                            if (subscribed) {
                                observer.next(result);
                            }
                        },
                        error (error) {
                            controller.enqueue({
                                type: "error"
                            });
                            tryClose();
                            if (subscribed) {
                                observer.error(error);
                            }
                        },
                        complete () {
                            controller.enqueue({
                                type: "completed"
                            });
                            tryClose();
                            if (subscribed) {
                                observer.complete();
                            }
                        }
                    });
                    return ()=>{
                        subscribed = false;
                    };
                });
            }
            return forward(operation);
        });
    }
};
var ReadFromReadableStreamLink = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"] {
    constructor(){
        super((operation, forward)=>{
            const context = operation.getContext();
            const eventSteam = context[readFromReadableStreamKey];
            if (eventSteam) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
                    let aborted = false;
                    const reader = (()=>{
                        try {
                            return eventSteam.getReader();
                        } catch  {}
                    })();
                    if (!reader) {
                        const subscription = forward(operation).subscribe(observer);
                        return ()=>subscription.unsubscribe();
                    }
                    consume(reader).finally(()=>{
                        if (!observer.closed && true) {
                            observer.complete();
                        }
                    });
                    let onAbort = ()=>{
                        aborted = true;
                        reader.cancel();
                    };
                    return ()=>onAbort();
                    //TURBOPACK unreachable
                    ;
                    async function consume(reader2) {
                        let event = undefined;
                        while(!aborted && !event?.done){
                            event = await reader2.read();
                            if (aborted) break;
                            if (event.value) {
                                switch(event.value.type){
                                    case "next":
                                        observer.next(event.value.value);
                                        break;
                                    case "completed":
                                        observer.complete();
                                        break;
                                    case "error":
                                        {
                                            observer.error(new Error("Error from event stream. Redacted for security concerns."));
                                        }
                                        break;
                                }
                            }
                        }
                    }
                });
            }
            return forward(operation);
        });
    }
};
function serializeOptions(options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(typeof options.fetchPolicy !== "function", "`nextFetchPolicy` cannot be a function in server-client streaming");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(typeof options.skipPollAttempt !== "function", "`skipPollAttempt` cannot be used with server-client streaming");
    return {
        ...options,
        query: printMinified(options.query)
    };
}
function deserializeOptions(options) {
    return {
        ...options,
        // `gql` memoizes results, but based on the input string.
        // We parse-stringify-parse here to ensure that our minified query
        // has the best chance of being the referential same query as the one used in
        // client-side code.
        query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["print"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"])(options.query)))
    };
}
function printMinified(query) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2f$utilities$2f$stripIgnoredCharacters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripIgnoredCharacters"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["print"])(query));
}
function getInjectableEventStream() {
    let controller;
    const stream = new ReadableStream({
        start (c) {
            controller = c;
        }
    });
    return [
        controller,
        stream
    ];
}
function createTransportedQueryPreloader(client, { prepareForReuse = false, notTransportedOptionOverrides = {} } = {}) {
    return (...[query, options])=>{
        options = {
            ...options
        };
        delete options.returnPartialData;
        delete options.nextFetchPolicy;
        delete options.pollInterval;
        const [controller, stream] = getInjectableEventStream();
        const transportedQueryRef = createTransportedQueryRef(query, options, crypto.randomUUID(), stream);
        const watchQueryOptions = {
            query,
            ...options,
            notifyOnNetworkStatusChange: false,
            context: skipDataTransport(teeToReadableStream(()=>controller, {
                ...options?.context,
                // we want to do this even if the query is already running for another reason
                queryDeduplication: false
            })),
            ...notTransportedOptionOverrides
        };
        if (notTransportedOptionOverrides?.fetchPolicy === "no-cache") {
            watchQueryOptions.query = unmask(client.documentTransform.transformDocument(query));
        }
        if (watchQueryOptions.fetchPolicy !== "no-cache" && watchQueryOptions.fetchPolicy !== "network-only" && (!prepareForReuse || watchQueryOptions.fetchPolicy !== "cache-and-network")) {
            watchQueryOptions.fetchPolicy = "network-only";
        }
        if (prepareForReuse) {
            const internalQueryRef = getInternalQueryRef(client, {
                query,
                ...options
            }, watchQueryOptions);
            return Object.assign(transportedQueryRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$internal$2f$cache$2f$QueryReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapQueryRef"])(internalQueryRef));
        } else {
            const subscription = client.watchQuery(watchQueryOptions).subscribe({
                next () {
                    subscription.unsubscribe();
                }
            });
        }
        return transportedQueryRef;
    };
}
function createTransportedQueryRef(query, options, queryKey, stream) {
    return {
        $__apollo_queryRef: {
            options: sanitizeForTransport(serializeOptions({
                query,
                ...options
            })),
            queryKey,
            stream: stream.pipeThrough(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$stream$2d$utils$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONEncodeStream"]())
        }
    };
}
function reviveTransportedQueryRef(queryRef, client) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$internal$2f$cache$2f$QueryReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unwrapQueryRef"])(queryRef)) return;
    const { $__apollo_queryRef: { options, stream } } = queryRef;
    const hydratedOptions = deserializeOptions(options);
    const internalQueryRef = getInternalQueryRef(client, hydratedOptions, {
        ...hydratedOptions,
        fetchPolicy: "network-only",
        context: skipDataTransport(readFromReadableStream(stream.pipeThrough(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$stream$2d$utils$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JSONDecodeStream"]()), {
            ...hydratedOptions.context,
            queryDeduplication: true
        }))
    });
    Object.assign(queryRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$internal$2f$cache$2f$QueryReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapQueryRef"])(internalQueryRef));
}
function getInternalQueryRef(client, userOptions, initialFetchOptions) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(userOptions.nextFetchPolicy === initialFetchOptions.nextFetchPolicy, "Encountered an unexpected bug in @apollo/client-react-streaming. Please file an issue.");
    }
    const observable = client.watchQuery(userOptions);
    const optionsAfterCreation = {
        // context might still be `undefined`, so we need to make sure the property is at least present
        // `undefined` won't merge in as `applyOptions` uses `compact`, so we use an empty object instead
        context: {},
        ...observable.options
    };
    observable.applyOptions(initialFetchOptions);
    const internalQueryRef = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$internal$2f$cache$2f$QueryReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalQueryReference"](observable, {
        autoDisposeTimeoutMs: client.defaultOptions.react?.suspense?.autoDisposeTimeoutMs
    });
    observable.applyOptions({
        ...optionsAfterCreation,
        fetchPolicy: observable.options.fetchPolicy === initialFetchOptions.fetchPolicy ? // restore `userOptions.fetchPolicy` for future fetches
        optionsAfterCreation.fetchPolicy : // otherwise `fetchPolicy` was changed from `initialFetchOptions`, `nextFetchPolicy` has been applied and we're not going to touch it
        observable.options.fetchPolicy
    });
    return internalQueryRef;
}
function isTransportedQueryRef(queryRef) {
    return !!(queryRef && queryRef.$__apollo_queryRef);
}
function useWrapTransportedQueryRef(queryRef) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApolloClient"])();
    const isTransported = isTransportedQueryRef(queryRef);
    if (isTransported) {
        reviveTransportedQueryRef(queryRef, client);
    }
    const unwrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$internal$2f$cache$2f$QueryReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unwrapQueryRef"])(queryRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isTransported) {
            return unwrapped.softRetain();
        }
    }, [
        isTransported,
        unwrapped
    ]);
    return queryRef;
}
function sanitizeForTransport(value) {
    return JSON.parse(JSON.stringify(value));
}
function unmask(query) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(query, {
        FragmentSpread (node) {
            return {
                ...node,
                directives: (node.directives || []).concat({
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].DIRECTIVE,
                    name: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].NAME,
                        value: "unmask"
                    }
                })
            };
        }
    });
}
var hookWrappers = {
    useFragment (orig_useFragment) {
        return wrap(orig_useFragment, [
            "data",
            "complete",
            "missing",
            "dataState"
        ]);
    },
    useQuery (orig_useQuery) {
        return wrap((query, options)=>{
            const ret = orig_useQuery(query, typeof options === "symbol" ? options : {
                ...options,
                fetchPolicy: "cache-only"
            });
            return typeof options === "symbol" ? ret : // if we changed the options to `cache-only` from something else,
            options?.fetchPolicy !== "cache-only" && // the value is not in the cache,
            ret.dataState === "empty" && // and the query hasn't been skipped,
            ret.observable.options.fetchPolicy === "cache-only" ? // we override the loading state to `true`
            {
                ...ret,
                loading: true,
                networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].loading
            } : ret;
        }, [
            "data",
            "loading",
            "networkStatus",
            "dataState"
        ]);
    },
    useSuspenseQuery (orig_useSuspenseQuery) {
        return wrap(orig_useSuspenseQuery, [
            "data",
            "networkStatus",
            "dataState"
        ]);
    },
    useReadQuery (orig_useReadQuery) {
        return wrap((queryRef)=>{
            return orig_useReadQuery(useWrapTransportedQueryRef(queryRef));
        }, [
            "data",
            "networkStatus",
            "dataState"
        ]);
    },
    useQueryRefHandlers (orig_useQueryRefHandlers) {
        return wrap((queryRef)=>{
            return orig_useQueryRefHandlers(useWrapTransportedQueryRef(queryRef));
        }, []);
    },
    useSuspenseFragment (orig_useSuspenseFragment) {
        return wrap(orig_useSuspenseFragment, [
            "data"
        ]);
    }
};
function wrap(useFn, transportKeys) {
    return (...args)=>{
        const result = useFn(...args);
        if (transportKeys.length == 0) {
            return result;
        }
        const forTransport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            const transport = {};
            for (const key of transportKeys){
                transport[key] = result[key];
            }
            return transport;
        }, [
            result
        ]);
        const transported = useTransportValue(forTransport);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                ...result,
                ...transported
            }), [
            result,
            transported
        ]);
    };
}
// src/assertInstance.ts
function assertInstance(value, info, name) {
    if (value[sourceSymbol] !== `${info.pkg}:${name}`) {
        throw new Error(`When using \`${name}\` in streaming SSR, you must use the \`${name}\` export provided by \`"${info.pkg}"\`.`);
    }
}
// src/DataTransportAbstraction/WrappedApolloClient.tsx
function getQueryManager(client) {
    return client["queryManager"];
}
var wrappers = Symbol.for("apollo.hook.wrappers");
var ApolloClientBase = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloClient"] {
    /**
   * Information about the current package and it's export names, for use in error messages.
   *
   * @internal
   */ static info = bundle;
    [sourceSymbol];
    constructor(options){
        const warnings = [];
        if ("ssrMode" in options) {
            delete options.ssrMode;
            warnings.push("The `ssrMode` option is not supported in %s. Please remove it from your %s constructor options.");
        }
        if ("ssrForceFetchDelay" in options) {
            delete options.ssrForceFetchDelay;
            warnings.push("The `ssrForceFetchDelay` option is not supported in %s. Please remove it from your %s constructor options.");
        }
        super({
            devtools: {
                enabled: false,
                ...options.devtools
            },
            ...options
        });
        const info = this.constructor.info;
        this[sourceSymbol] = `${info.pkg}:ApolloClient`;
        for (const warning of warnings){
            console.warn(warning, info.pkg, "ApolloClient");
        }
        assertInstance(this.cache, info, "InMemoryCache");
        this.setLink(this.link);
    }
    setLink(newLink) {
        super.setLink.call(this, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"].from([
            new ReadFromReadableStreamLink(),
            new TeeToReadableStreamLink(),
            newLink
        ]));
    }
};
var ApolloClientClientBaseImpl = class extends ApolloClientBase {
    constructor(options){
        super(options);
        this.onQueryStarted = this.onQueryStarted.bind(this);
        getQueryManager(this)[wrappers] = hookWrappers;
    }
    simulatedStreamingQueries = /* @__PURE__ */ new Map();
    onQueryStarted({ options, id }) {
        const hydratedOptions = deserializeOptions(options);
        const [controller, stream] = getInjectableEventStream();
        const queryManager = getQueryManager(this);
        queryManager.fetchQuery({
            ...hydratedOptions,
            query: queryManager.transform(hydratedOptions.query),
            fetchPolicy: "network-only",
            context: skipDataTransport(readFromReadableStream(stream, {
                ...hydratedOptions.context,
                queryDeduplication: true
            }))
        });
        this.simulatedStreamingQueries.set(id, {
            controller,
            options: hydratedOptions
        });
    }
    onQueryProgress = (event)=>{
        const queryInfo = this.simulatedStreamingQueries.get(event.id);
        if (!queryInfo) return;
        const handler = getQueryManager(this).incrementalHandler;
        if (event.type === "error" || event.type === "next" && (handler.isIncrementalResult(event.value) ? handler.extractErrors(event.value) : event.value.errors)) {
            this.simulatedStreamingQueries.delete(event.id);
            {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].debug("Query failed upstream, will fail it during SSR and rerun it in the browser:", queryInfo.options);
                queryInfo.controller.error(new Error("Query failed upstream."));
            }
        } else if (event.type === "completed") {
            this.simulatedStreamingQueries.delete(event.id);
            queryInfo.controller.enqueue(event);
        } else if (event.type === "next") {
            queryInfo.controller.enqueue(event);
        }
    };
    /**
   * Can be called when the stream closed unexpectedly while there might still be unresolved
   * simulated server-side queries going on.
   * Those queries will be cancelled and then re-run in the browser.
   */ rerunSimulatedQueries = ()=>{
        for (const [id, queryInfo] of this.simulatedStreamingQueries){
            this.simulatedStreamingQueries.delete(id);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].debug("streaming connection closed before server query could be fully transported, rerunning:", queryInfo.options);
            this.rerunSimulatedQuery(queryInfo);
        }
    };
    rerunSimulatedQuery = (queryInfo)=>{
        const queryManager = getQueryManager(this);
        queryManager.fetchQuery({
            ...queryInfo.options,
            fetchPolicy: "no-cache",
            query: queryManager.transform(queryInfo.options.query),
            context: skipDataTransport(teeToReadableStream(()=>queryInfo.controller, {
                ...queryInfo.options.context,
                queryDeduplication: false
            }))
        });
    };
};
var skipDataTransportKey = Symbol.for("apollo.dataTransport.skip");
function skipDataTransport(context) {
    return Object.assign(context, {
        [skipDataTransportKey]: true
    });
}
var ApolloClientSSRImpl = class extends ApolloClientClientBaseImpl {
    watchQueryQueue = createBackpressuredCallback();
    pushEventStream(options) {
        const id = crypto.randomUUID();
        const [controller, eventStream] = getInjectableEventStream();
        const streamObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((subscriber)=>{
            function consume(event) {
                const value = event.value;
                if (value) {
                    subscriber.next({
                        ...value,
                        id
                    });
                }
                if (event.done) {
                    subscriber.complete();
                } else {
                    reader.read().then(consume);
                }
            }
            const reader = eventStream.getReader();
            reader.read().then(consume);
        });
        this.watchQueryQueue.push({
            event: {
                type: "started",
                options: serializeOptions(options),
                id
            },
            observable: streamObservable
        });
        return controller;
    }
    watchQuery(options) {
        if (!options.context?.[skipDataTransportKey]) {
            return super.watchQuery({
                ...options,
                context: teeToReadableStream(()=>this.pushEventStream(options), {
                    ...options?.context
                })
            });
        }
        return super.watchQuery(options);
    }
};
var ApolloClientImplementation = ApolloClientSSRImpl;
var ApolloClient = class extends ApolloClientImplementation {
};
// src/DataTransportAbstraction/symbols.ts
var ApolloClientSingleton = /* @__PURE__ */ Symbol.for("ApolloClientSingleton");
// src/DataTransportAbstraction/testHelpers.ts
function resetApolloSingletons() {
    delete window[ApolloClientSingleton];
}
function WrapApolloProvider(TransportProvider) {
    const WrappedApolloProvider3 = ({ makeClient, children, ...extraProps })=>{
        const clientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
        if (!clientRef.current) {
            {
                clientRef.current = makeClient();
            }
            assertInstance(clientRef.current, WrappedApolloProvider3.info, "ApolloClient");
        }
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloProvider"], {
            client: clientRef.current
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(TransportProvider, {
            onQueryEvent: (event)=>event.type === "started" ? clientRef.current.onQueryStarted(event) : clientRef.current.onQueryProgress(event),
            rerunSimulatedQueries: clientRef.current.rerunSimulatedQueries,
            registerDispatchRequestStarted: clientRef.current.watchQueryQueue?.register,
            ...extraProps
        }, children));
    };
    WrappedApolloProvider3.info = bundle;
    return WrappedApolloProvider3;
}
const built_for_ssr = true;
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client-integration-nextjs/node_modules/@apollo/client-react-streaming/dist/manual-transport.ssr.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildManualDataTransport",
    ()=>buildManualDataTransport,
    "built_for_ssr",
    ()=>built_for_ssr,
    "registerLateInitializingQueue",
    ()=>registerLateInitializingQueue,
    "resetManualSSRApolloSingletons",
    ()=>resetManualSSRApolloSingletons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client-integration-nextjs/node_modules/@apollo/client-react-streaming/dist/index.ssr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
;
;
;
// src/ManualDataTransport/ManualDataTransport.tsx
// src/ManualDataTransport/ApolloRehydrateSymbols.tsx
var ApolloSSRDataTransport = /* @__PURE__ */ Symbol.for("ApolloSSRDataTransport");
var ApolloHookRehydrationCache = /* @__PURE__ */ Symbol.for("apollo.hookRehydrationCache");
// src/ManualDataTransport/lateInitializingQueue.ts
function registerLateInitializingQueue(key, callback) {
    const previousData = window[key] || [];
    if (Array.isArray(previousData)) {
        window[key] = {
            push: (...data)=>{
                for (const value of data){
                    callback(value);
                }
            }
        };
        window[key].push(...previousData);
    }
}
// src/ManualDataTransport/htmlescape.ts
var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
};
var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function htmlEscapeJsonString(str) {
    return str.replace(ESCAPE_REGEX, (match)=>ESCAPE_LOOKUP[match]);
}
// src/ManualDataTransport/dataTransport.ts
function transportDataToJS(data, stringify2) {
    const key = Symbol.keyFor(ApolloSSRDataTransport);
    return `(window[Symbol.for("${key}")] ??= []).push(${htmlEscapeJsonString(stringify2(data))})`;
}
function buildApolloRehydrationContext({ insertHtml, stringify: stringify2, extraScriptProps }) {
    function ensureInserted() {
        if (!rehydrationContext.currentlyInjected) {
            rehydrationContext.currentlyInjected = true;
            insertHtml(()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(rehydrationContext.RehydrateOnClient, null));
        }
    }
    const rehydrationContext = {
        currentlyInjected: false,
        transportValueData: getTransportObject(ensureInserted),
        transportedValues: {},
        incomingEvents: getTransportArray(ensureInserted),
        RehydrateOnClient () {
            rehydrationContext.currentlyInjected = false;
            if (!Object.keys(rehydrationContext.transportValueData).length && !Object.keys(rehydrationContext.incomingEvents).length) return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].debug("transporting data", rehydrationContext.transportValueData);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].debug("transporting events", rehydrationContext.incomingEvents);
            const __html = transportDataToJS({
                rehydrate: Object.fromEntries(Object.entries(rehydrationContext.transportValueData).filter(([key, value])=>rehydrationContext.transportedValues[key] !== value)),
                events: rehydrationContext.incomingEvents
            }, stringify2);
            Object.assign(rehydrationContext.transportedValues, rehydrationContext.transportValueData);
            rehydrationContext.transportValueData = getTransportObject(ensureInserted);
            rehydrationContext.incomingEvents = getTransportArray(ensureInserted);
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("script", {
                ...extraScriptProps,
                dangerouslySetInnerHTML: {
                    __html
                }
            });
        }
    };
    return rehydrationContext;
}
function getTransportObject(ensureInserted) {
    return new Proxy({}, {
        set (...args) {
            ensureInserted();
            return Reflect.set(...args);
        }
    });
}
function getTransportArray(ensureInserted) {
    return new Proxy([], {
        get (...args) {
            if (args[1] === "push") {
                return (...values)=>{
                    ensureInserted();
                    return args[0].push(...values);
                };
            }
            return Reflect.get(...args);
        }
    });
}
// src/ManualDataTransport/serialization.ts
function stringify(value) {
    let undefinedPlaceholder = "$apollo.undefined$";
    const stringified = JSON.stringify(value);
    while(stringified.includes(JSON.stringify(undefinedPlaceholder))){
        undefinedPlaceholder = "$" + undefinedPlaceholder;
    }
    return JSON.stringify(value, (_, v)=>v === undefined ? undefinedPlaceholder : v).replaceAll(JSON.stringify(undefinedPlaceholder), "undefined");
}
// src/ManualDataTransport/ManualDataTransport.tsx
var buildManualDataTransportSSRImpl = ({ useInsertHtml, stringifyForStream = stringify, dangerous_disableHookValueTransportation: disableHookValueTransportation })=>function ManualDataTransportSSRImpl({ extraScriptProps, children, registerDispatchRequestStarted }) {
        const insertHtml = useInsertHtml();
        const rehydrationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
        if (!rehydrationContext.current) {
            rehydrationContext.current = buildApolloRehydrationContext({
                insertHtml,
                extraScriptProps,
                stringify: stringifyForStream
            });
        }
        registerDispatchRequestStarted(({ event, observable })=>{
            rehydrationContext.current.incomingEvents.push(event);
            observable.subscribe({
                next (event2) {
                    rehydrationContext.current.incomingEvents.push(event2);
                }
            });
        });
        const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                useStaticValueRef: function useStaticValueRef(value) {
                    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
                    if (!disableHookValueTransportation) {
                        rehydrationContext.current.transportValueData[id] = value;
                    }
                    return {
                        current: value
                    };
                }
            }), []);
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTransportContext"].Provider, {
            value: contextValue
        }, children);
    };
var buildManualDataTransport = buildManualDataTransportSSRImpl;
function resetManualSSRApolloSingletons() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetApolloSingletons"])();
    delete window[ApolloHookRehydrationCache];
    delete window[ApolloSSRDataTransport];
}
const built_for_ssr = true;
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client-integration-nextjs/dist/index.ssr.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloClient",
    ()=>ApolloClient,
    "ApolloNextAppProvider",
    ()=>ApolloNextAppProvider,
    "InMemoryCache",
    ()=>InMemoryCache,
    "built_for_ssr",
    ()=>built_for_ssr,
    "resetApolloClientSingletons",
    ()=>resetApolloClientSingletons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client-integration-nextjs/node_modules/@apollo/client-react-streaming/dist/index.ssr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$manual$2d$transport$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/@apollo/client-integration-nextjs/node_modules/@apollo/client-react-streaming/dist/manual-transport.ssr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
;
;
;
// src/index.shared.ts
// src/bundleInfo.ts
var bundle = {
    pkg: "@apollo/client-integration-nextjs",
    client: "ApolloClient",
    cache: "InMemoryCache"
};
var ApolloClient = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloClient"] {
    /**
   * Information about the current package and it's export names, for use in error messages.
   *
   * @internal
   */ static info = bundle;
};
var InMemoryCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InMemoryCache"] {
    /**
   * Information about the current package and it's export names, for use in error messages.
   *
   * @internal
   */ static info = bundle;
};
var ApolloNextAppProvider = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WrapApolloProvider"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$manual$2d$transport$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildManualDataTransport"])({
    useInsertHtml () {
        const insertHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServerInsertedHTMLContext"]);
        if (!insertHtml) {
            throw new Error('The SSR build of ApolloNextAppProvider cannot be used outside of the Next App Router!\nIf you encounter this in a test, make sure that your tests are using the browser build by adding the "browser" import condition to your test setup.');
        }
        return insertHtml;
    }
}));
ApolloNextAppProvider.info = bundle;
var resetApolloClientSingletons = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f40$apollo$2f$client$2d$integration$2d$nextjs$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$manual$2d$transport$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetManualSSRApolloSingletons"];
const built_for_ssr = true;
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-ssr] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/defaultAttributes.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LucideProvider",
    ()=>LucideProvider,
    "useLucideContext",
    ()=>useLucideContext
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use strict";
"use client";
;
const LucideContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
function LucideProvider({ children, size, color, strokeWidth, absoluteStrokeWidth, className }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            size,
            color,
            strokeWidth,
            absoluteStrokeWidth,
            className
        }), [
        size,
        color,
        strokeWidth,
        absoluteStrokeWidth,
        className
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(LucideContext.Provider, {
        value
    }, children);
}
const useLucideContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LucideContext);
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/Icon.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/defaultAttributes.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/context.mjs [app-ssr] (ecmascript)");
"use strict";
"use client";
;
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLucideContext"])() ?? {};
    const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size ?? contextSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].width,
        height: size ?? contextSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].height,
        stroke: color ?? contextColor,
        strokeWidth: calculatedStrokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", contextClass, className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/Icon.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript)");
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ShoppingCart
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }
    ],
    [
        "path",
        {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }
    ]
];
const ShoppingCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("shopping-cart", __iconNode);
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript) <export default as ShoppingCart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShoppingCart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript)");
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/user.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>User
]);
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
];
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("user", __iconNode);
;
}),
"[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/user.mjs [app-ssr] (ecmascript) <export default as User>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$erxes$2d$skills$2d$main$2d$2$2f$content$2d$plugin$2f$headless$2f$web$2f$output$2f$taij$2d$khurai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/erxes-skills-main-2/content-plugin/headless/web/output/taij-khurai/node_modules/lucide-react/dist/esm/icons/user.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=0s7q_0wx9wo3._.js.map