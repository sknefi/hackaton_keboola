/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/generate/route";
exports.ids = ["app/api/generate/route"];
exports.modules = {

/***/ "(rsc)/./app/api/generate/route.ts":
/*!***********************************!*\
  !*** ./app/api/generate/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _ai_sdk_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ai-sdk/openai */ \"(rsc)/./node_modules/@ai-sdk/openai/dist/index.mjs\");\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ai */ \"(rsc)/./node_modules/ai/dist/index.mjs\");\n\n\n\n// The admin-defined template that's included in every prompt\nconst INTER_FILE = \"You are an expert newsletter writer. Compose a well-structured newsletter on the given topic. The newsletter should be in HTML format with inline CSS styling for email compatibility. Include sections with headings, paragraphs, and possibly lists. Make the content engaging and informative.\";\n// Create the Perplexity client\nconst perplexity = (0,_ai_sdk_openai__WEBPACK_IMPORTED_MODULE_1__.createOpenAI)({\n    name: \"perplexity\",\n    apiKey: process.env.PERPLEXITY_API_KEY || \"\",\n    baseURL: \"https://api.perplexity.ai/\"\n});\nasync function POST(request) {\n    try {\n        const { topic, keywords, additionalText } = await request.json();\n        // Validate input\n        if (!topic) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Topic is required\"\n            }, {\n                status: 400\n            });\n        }\n        // Assemble the full prompt\n        let fullPrompt = topic;\n        // Add the admin template\n        fullPrompt += \" \" + INTER_FILE;\n        // Add keywords if provided\n        if (keywords && keywords.trim()) {\n            fullPrompt += \" Keywords to include: \" + keywords.trim();\n        }\n        // Add additional text if provided\n        if (additionalText && additionalText.trim()) {\n            fullPrompt += \" Additional instructions: \" + additionalText.trim();\n        }\n        // Call the Perplexity API\n        const { text } = await (0,ai__WEBPACK_IMPORTED_MODULE_2__.generateText)({\n            model: perplexity(\"llama-3.1-sonar-large-32k-online\"),\n            prompt: fullPrompt\n        });\n        // Create a response object\n        const responseObj = {\n            id: String(Date.now()),\n            prompt: fullPrompt,\n            response: text,\n            createdAt: new Date().toISOString()\n        };\n        // In a real app, you would save this to the database here\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: responseObj\n        });\n    } catch (error) {\n        console.error(\"Error generating newsletter:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to generate newsletter\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEM7QUFDRztBQUNaO0FBRWpDLDZEQUE2RDtBQUM3RCxNQUFNRyxhQUNKO0FBRUYsK0JBQStCO0FBQy9CLE1BQU1DLGFBQWFILDREQUFZQSxDQUFDO0lBQzlCSSxNQUFNO0lBQ05DLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0Msa0JBQWtCLElBQUk7SUFDMUNDLFNBQVM7QUFDWDtBQUVPLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxjQUFjLEVBQUUsR0FBRyxNQUFNSCxRQUFRSSxJQUFJO1FBRTlELGlCQUFpQjtRQUNqQixJQUFJLENBQUNILE9BQU87WUFDVixPQUFPYixxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFvQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDekU7UUFFQSwyQkFBMkI7UUFDM0IsSUFBSUMsYUFBYU47UUFFakIseUJBQXlCO1FBQ3pCTSxjQUFjLE1BQU1oQjtRQUVwQiwyQkFBMkI7UUFDM0IsSUFBSVcsWUFBWUEsU0FBU00sSUFBSSxJQUFJO1lBQy9CRCxjQUFjLDJCQUEyQkwsU0FBU00sSUFBSTtRQUN4RDtRQUVBLGtDQUFrQztRQUNsQyxJQUFJTCxrQkFBa0JBLGVBQWVLLElBQUksSUFBSTtZQUMzQ0QsY0FBYywrQkFBK0JKLGVBQWVLLElBQUk7UUFDbEU7UUFFQSwwQkFBMEI7UUFDMUIsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNbkIsZ0RBQVlBLENBQUM7WUFDbENvQixPQUFPbEIsV0FBVztZQUNsQm1CLFFBQVFKO1FBQ1Y7UUFFQSwyQkFBMkI7UUFDM0IsTUFBTUssY0FBYztZQUNsQkMsSUFBSUMsT0FBT0MsS0FBS0MsR0FBRztZQUNuQkwsUUFBUUo7WUFDUlUsVUFBVVI7WUFDVlMsV0FBVyxJQUFJSCxPQUFPSSxXQUFXO1FBQ25DO1FBRUEsMERBQTBEO1FBRTFELE9BQU8vQixxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQztZQUN2QmdCLFNBQVM7WUFDVEMsTUFBTVQ7UUFDUjtJQUNGLEVBQUUsT0FBT1AsT0FBTztRQUNkaUIsUUFBUWpCLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDLE9BQU9qQixxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWdDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3JGO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxpcC9EZXNrdG9wL3RvcGljX3RpZGUvYXBwL2FwaS9nZW5lcmF0ZS9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuaW1wb3J0IHsgY3JlYXRlT3BlbkFJIH0gZnJvbSBcIkBhaS1zZGsvb3BlbmFpXCJcbmltcG9ydCB7IGdlbmVyYXRlVGV4dCB9IGZyb20gXCJhaVwiXG5cbi8vIFRoZSBhZG1pbi1kZWZpbmVkIHRlbXBsYXRlIHRoYXQncyBpbmNsdWRlZCBpbiBldmVyeSBwcm9tcHRcbmNvbnN0IElOVEVSX0ZJTEUgPVxuICBcIllvdSBhcmUgYW4gZXhwZXJ0IG5ld3NsZXR0ZXIgd3JpdGVyLiBDb21wb3NlIGEgd2VsbC1zdHJ1Y3R1cmVkIG5ld3NsZXR0ZXIgb24gdGhlIGdpdmVuIHRvcGljLiBUaGUgbmV3c2xldHRlciBzaG91bGQgYmUgaW4gSFRNTCBmb3JtYXQgd2l0aCBpbmxpbmUgQ1NTIHN0eWxpbmcgZm9yIGVtYWlsIGNvbXBhdGliaWxpdHkuIEluY2x1ZGUgc2VjdGlvbnMgd2l0aCBoZWFkaW5ncywgcGFyYWdyYXBocywgYW5kIHBvc3NpYmx5IGxpc3RzLiBNYWtlIHRoZSBjb250ZW50IGVuZ2FnaW5nIGFuZCBpbmZvcm1hdGl2ZS5cIlxuXG4vLyBDcmVhdGUgdGhlIFBlcnBsZXhpdHkgY2xpZW50XG5jb25zdCBwZXJwbGV4aXR5ID0gY3JlYXRlT3BlbkFJKHtcbiAgbmFtZTogXCJwZXJwbGV4aXR5XCIsXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuUEVSUExFWElUWV9BUElfS0VZIHx8IFwiXCIsXG4gIGJhc2VVUkw6IFwiaHR0cHM6Ly9hcGkucGVycGxleGl0eS5haS9cIixcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHRvcGljLCBrZXl3b3JkcywgYWRkaXRpb25hbFRleHQgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG5cbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxuICAgIGlmICghdG9waWMpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlRvcGljIGlzIHJlcXVpcmVkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgIH1cblxuICAgIC8vIEFzc2VtYmxlIHRoZSBmdWxsIHByb21wdFxuICAgIGxldCBmdWxsUHJvbXB0ID0gdG9waWNcblxuICAgIC8vIEFkZCB0aGUgYWRtaW4gdGVtcGxhdGVcbiAgICBmdWxsUHJvbXB0ICs9IFwiIFwiICsgSU5URVJfRklMRVxuXG4gICAgLy8gQWRkIGtleXdvcmRzIGlmIHByb3ZpZGVkXG4gICAgaWYgKGtleXdvcmRzICYmIGtleXdvcmRzLnRyaW0oKSkge1xuICAgICAgZnVsbFByb21wdCArPSBcIiBLZXl3b3JkcyB0byBpbmNsdWRlOiBcIiArIGtleXdvcmRzLnRyaW0oKVxuICAgIH1cblxuICAgIC8vIEFkZCBhZGRpdGlvbmFsIHRleHQgaWYgcHJvdmlkZWRcbiAgICBpZiAoYWRkaXRpb25hbFRleHQgJiYgYWRkaXRpb25hbFRleHQudHJpbSgpKSB7XG4gICAgICBmdWxsUHJvbXB0ICs9IFwiIEFkZGl0aW9uYWwgaW5zdHJ1Y3Rpb25zOiBcIiArIGFkZGl0aW9uYWxUZXh0LnRyaW0oKVxuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIFBlcnBsZXhpdHkgQVBJXG4gICAgY29uc3QgeyB0ZXh0IH0gPSBhd2FpdCBnZW5lcmF0ZVRleHQoe1xuICAgICAgbW9kZWw6IHBlcnBsZXhpdHkoXCJsbGFtYS0zLjEtc29uYXItbGFyZ2UtMzJrLW9ubGluZVwiKSxcbiAgICAgIHByb21wdDogZnVsbFByb21wdCxcbiAgICB9KVxuXG4gICAgLy8gQ3JlYXRlIGEgcmVzcG9uc2Ugb2JqZWN0XG4gICAgY29uc3QgcmVzcG9uc2VPYmogPSB7XG4gICAgICBpZDogU3RyaW5nKERhdGUubm93KCkpLFxuICAgICAgcHJvbXB0OiBmdWxsUHJvbXB0LFxuICAgICAgcmVzcG9uc2U6IHRleHQsXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICB9XG5cbiAgICAvLyBJbiBhIHJlYWwgYXBwLCB5b3Ugd291bGQgc2F2ZSB0aGlzIHRvIHRoZSBkYXRhYmFzZSBoZXJlXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IHJlc3BvbnNlT2JqLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdlbmVyYXRpbmcgbmV3c2xldHRlcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGdlbmVyYXRlIG5ld3NsZXR0ZXJcIiB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNyZWF0ZU9wZW5BSSIsImdlbmVyYXRlVGV4dCIsIklOVEVSX0ZJTEUiLCJwZXJwbGV4aXR5IiwibmFtZSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJQRVJQTEVYSVRZX0FQSV9LRVkiLCJiYXNlVVJMIiwiUE9TVCIsInJlcXVlc3QiLCJ0b3BpYyIsImtleXdvcmRzIiwiYWRkaXRpb25hbFRleHQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJmdWxsUHJvbXB0IiwidHJpbSIsInRleHQiLCJtb2RlbCIsInByb21wdCIsInJlc3BvbnNlT2JqIiwiaWQiLCJTdHJpbmciLCJEYXRlIiwibm93IiwicmVzcG9uc2UiLCJjcmVhdGVkQXQiLCJ0b0lTT1N0cmluZyIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Ffilip%2FDesktop%2Ftopic_tide%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffilip%2FDesktop%2Ftopic_tide&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Ffilip%2FDesktop%2Ftopic_tide%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffilip%2FDesktop%2Ftopic_tide&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_filip_Desktop_topic_tide_app_api_generate_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/generate/route.ts */ \"(rsc)/./app/api/generate/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/generate/route\",\n        pathname: \"/api/generate\",\n        filename: \"route\",\n        bundlePath: \"app/api/generate/route\"\n    },\n    resolvedPagePath: \"/Users/filip/Desktop/topic_tide/app/api/generate/route.ts\",\n    nextConfigOutput,\n    userland: _Users_filip_Desktop_topic_tide_app_api_generate_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2VuZXJhdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZW5lcmF0ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmZpbGlwJTJGRGVza3RvcCUyRnRvcGljX3RpZGUlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZmlsaXAlMkZEZXNrdG9wJTJGdG9waWNfdGlkZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDUztBQUN0RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2ZpbGlwL0Rlc2t0b3AvdG9waWNfdGlkZS9hcHAvYXBpL2dlbmVyYXRlL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZW5lcmF0ZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dlbmVyYXRlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nZW5lcmF0ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9maWxpcC9EZXNrdG9wL3RvcGljX3RpZGUvYXBwL2FwaS9nZW5lcmF0ZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Ffilip%2FDesktop%2Ftopic_tide%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffilip%2FDesktop%2Ftopic_tide&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/zod-to-json-schema","vendor-chunks/@ai-sdk","vendor-chunks/zod","vendor-chunks/nanoid","vendor-chunks/ai","vendor-chunks/secure-json-parse"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate%2Froute&page=%2Fapi%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Ffilip%2FDesktop%2Ftopic_tide%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffilip%2FDesktop%2Ftopic_tide&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();