"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ui/TexturedMesh.tsx":
/*!****************************************!*\
  !*** ./components/ui/TexturedMesh.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-99983b2d.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Create a div to embed the canvas\nconst embedRoot = document.createElement(\"div\");\nembedRoot.className = \"nt-embed\";\ndocument.body.appendChild(embedRoot);\n// TextureMesh component\nconst TextureMesh = ()=>{\n    _s();\n    const mesh = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.C)((state)=>{\n        const { clock, mouse, gl } = state;\n        if (mesh.current) {\n            const material = mesh.current.material;\n            if (material) {\n                material.uniforms.u_mouse.value = [\n                    mouse.x / 2 + 0.5,\n                    mouse.y / 2 + 0.5\n                ];\n                material.uniforms.u_time.value = clock.getElapsedTime();\n                const rect = gl.domElement.getBoundingClientRect();\n                material.uniforms.u_resolution.value = [\n                    rect.width,\n                    rect.height\n                ];\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: mesh,\n        position: [\n            0,\n            0,\n            0\n        ],\n        scale: 1,\n        rotation: [\n            0,\n            0,\n            0\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"planeGeometry\", {\n                args: [\n                    1024,\n                    1024\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"shaderMaterial\", {\n                fragmentShader: \"\\n#ifdef GL_ES\\nprecision mediump float;\\n#endif\\n\\nuniform vec2 u_resolution;\\nuniform vec2 u_mouse;\\nuniform vec4 u_colors[2];\\nuniform float u_speed;\\nuniform float u_time;\\nuniform float u_scale; \\nuniform float light;\\nuniform float shadow;\\nuniform float tint;\\nuniform float coverage;\\nuniform float alpha;\\n\\nconst float cloudalpha = 20.;\\nconst mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );\\n\\nvec2 hash( vec2 p ) {\\n    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\\n    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);\\n}\\n\\nfloat noise(in vec2 p) {\\n    const float K1 = 0.366025404; // (sqrt(3)-1)/2;\\n    const float K2 = 0.211324865; // (3-sqrt(3))/6;\\n    vec2 i = floor(p + (p.x + p.y) * K1);    \\n    vec2 a = p - i + (i.x + i.y) * K2;\\n    vec2 o = (a.x > a.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\\n    vec2 b = a - o + K2;\\n    vec2 c = a - 1.0 + 2.0 * K2;\\n    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);\\n    vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));\\n    return dot(n, vec3(70.0));    \\n}\\n\\nfloat fbm(vec2 n) {\\n    float total = 0.0, amplitude = 0.1;\\n    for (int i = 0; i < 7; i++) {\\n        total += noise(n) * amplitude;\\n        n = m * n;\\n        amplitude *= 0.4;\\n    }\\n    return total;\\n}\\n\\nvoid main() {\\n    vec2 p = gl_FragCoord.xy / u_resolution.xy;\\n    vec2 uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);    \\n    float speed = u_speed * 0.1;\\n    float time = u_time * speed;\\n    float scale = (1.0 - u_scale);\\n    float q = fbm(uv * scale * 0.5);\\n    \\n    float r = 0.0;\\n    uv *= scale;\\n    uv -= q - time;\\n    float weight = 0.8;\\n    for (int i = 0; i < 8; i++) {\\n        r += abs(weight * noise(uv));\\n        uv = m * uv + time;\\n        weight *= 0.7;\\n    }\\n\\n    float f = 0.0;\\n    uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);\\n    uv *= scale;\\n    uv -= q - time;\\n    weight = 0.7;\\n    for (int i = 0; i < 8; i++) {\\n        f += weight * noise(uv);\\n        uv = m * uv + time;\\n        weight *= 0.6;\\n    }\\n\\n    f *= r + f;\\n\\n    float c = 0.0;\\n    time = u_time * speed * 2.0;\\n    uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);\\n    uv *= scale * 2.0;\\n    uv -= q - time;\\n    weight = 0.4;\\n    for (int i = 0; i < 7; i++) {\\n        c += weight * noise(uv);\\n        uv = m * uv + time;\\n        weight *= 0.6;\\n    }\\n\\n    float c1 = 0.0;\\n    time = u_time * speed * 3.0;\\n    uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);\\n    uv *= scale * 3.0;\\n    uv -= q - time;\\n    weight = 0.4;\\n    for (int i = 0; i < 7; i++) {\\n        c1 += abs(weight * noise(uv));\\n        uv = m * uv + time;\\n        weight *= 0.6;\\n    }\\n\\n    c += c1;\\n\\n    vec4 skycolor = mix(u_colors[1], u_colors[0], p.y);\\n    vec4 cloudcolor = vec4(1.0, 1.0, 1.0, 1.0) * clamp(((1.0 - shadow) + light * c), 0.0, 1.0);\\n    f = coverage + cloudalpha * alpha * f * r;\\n    vec4 result = mix(skycolor, clamp(tint * skycolor + cloudcolor, 0.0, 1.0), clamp(f + c, 0.0, 1.0));\\n\\n    gl_FragColor = result;\\n\",\n                vertexShader: \"\\nvoid main() {\\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\\n}\\n\",\n                uniforms: {\n                    u_speed: {\n                        value: 0.052\n                    },\n                    u_scale: {\n                        value: 0\n                    },\n                    u_colors: {\n                        value: [\n                            new three__WEBPACK_IMPORTED_MODULE_4__.Vector4(0.949, 0.914, 0.878, 1),\n                            new three__WEBPACK_IMPORTED_MODULE_4__.Vector4(0, 0, 0, 0)\n                        ]\n                    },\n                    light: {\n                        value: 0\n                    },\n                    shadow: {\n                        value: 0.458\n                    },\n                    tint: {\n                        value: 0\n                    },\n                    coverage: {\n                        value: 0.39\n                    },\n                    alpha: {\n                        value: 1\n                    },\n                    u_time: {\n                        value: 0\n                    },\n                    u_mouse: {\n                        value: [\n                            0,\n                            0\n                        ]\n                    },\n                    u_resolution: {\n                        value: [\n                            1024,\n                            1024\n                        ]\n                    }\n                },\n                wireframe: false,\n                wireframeLinewidth: 0,\n                dithering: false,\n                glslVersion: \"100\"\n            }, void 0, false, {\n                fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n        lineNumber: 30,\n        columnNumber: 13\n    }, undefined);\n};\n_s(TextureMesh, \"aboyJ/StuJfvpd16sdbtizo3yWA=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.C\n    ];\n});\n_c = TextureMesh;\n// Render the Canvas with TextureMesh\nreact_dom__WEBPACK_IMPORTED_MODULE_2__.render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.Canvas, {\n    gl: {\n        preserveDrawingBuffer: true,\n        premultipliedAlpha: false,\n        alpha: true,\n        antialias: true,\n        precision: \"highp\",\n        powerPreference: \"high-performance\"\n    },\n    resize: {\n        debounce: 0,\n        scroll: false,\n        offsetSize: true\n    },\n    dpr: 1,\n    camera: {\n        fov: 75,\n        near: 0.1,\n        far: 1000,\n        position: [\n            0,\n            0,\n            5\n        ]\n    },\n    style: {\n        height: \"100%\",\n        width: \"100%\"\n    },\n    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextureMesh, {}, void 0, false, {\n        fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n        lineNumber: 197,\n        columnNumber: 13\n    }, undefined)\n}, void 0, false, {\n    fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n    lineNumber: 174,\n    columnNumber: 9\n}, undefined), embedRoot);\nvar _c;\n$RefreshReg$(_c, \"TextureMesh\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvVGV4dHVyZWRNZXNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBDO0FBQ0w7QUFDRjtBQUN1QjtBQUV0RCxtQ0FBbUM7QUFDbkMsTUFBTU0sWUFBWUMsU0FBU0MsYUFBYSxDQUFDO0FBQ3pDRixVQUFVRyxTQUFTLEdBQUc7QUFDdEJGLFNBQVNHLElBQUksQ0FBQ0MsV0FBVyxDQUFDTDtBQUUxQix3QkFBd0I7QUFDeEIsTUFBTU0sY0FBYzs7SUFDaEIsTUFBTUMsT0FBT1osNkNBQU1BLENBQWE7SUFFaENJLHFEQUFRQSxDQUFDLENBQUNTO1FBQ04sTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsRUFBRSxFQUFFLEdBQUdIO1FBQzdCLElBQUlELEtBQUtLLE9BQU8sRUFBRTtZQUNkLE1BQU1DLFdBQVdOLEtBQUtLLE9BQU8sQ0FBRUMsUUFBUTtZQUN2QyxJQUFJQSxVQUFVO2dCQUNWQSxTQUFTQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHO29CQUFDTixNQUFNTyxDQUFDLEdBQUcsSUFBSTtvQkFBS1AsTUFBTVEsQ0FBQyxHQUFHLElBQUk7aUJBQUk7Z0JBQ3hFTCxTQUFTQyxRQUFRLENBQUNLLE1BQU0sQ0FBQ0gsS0FBSyxHQUFHUCxNQUFNVyxjQUFjO2dCQUNyRCxNQUFNQyxPQUFPVixHQUFHVyxVQUFVLENBQUNDLHFCQUFxQjtnQkFDaERWLFNBQVNDLFFBQVEsQ0FBQ1UsWUFBWSxDQUFDUixLQUFLLEdBQUc7b0JBQUNLLEtBQUtJLEtBQUs7b0JBQUVKLEtBQUtLLE1BQU07aUJBQUM7WUFDcEU7UUFDSjtJQUNKO0lBRUEscUJBQ0ksOERBQUNuQjtRQUFLb0IsS0FBS3BCO1FBQU1xQixVQUFVO1lBQUM7WUFBRztZQUFHO1NBQUU7UUFBRUMsT0FBTztRQUFHQyxVQUFVO1lBQUM7WUFBRztZQUFHO1NBQUU7OzBCQUMvRCw4REFBQ0M7Z0JBQWNDLE1BQU07b0JBQUM7b0JBQU07aUJBQUs7Ozs7OzswQkFDakMsOERBQUNDO2dCQUNHQyxnQkFBaUI7Z0JBZ0hqQkMsY0FBZTtnQkFLZnJCLFVBQVU7b0JBQ05zQixTQUFTO3dCQUFFcEIsT0FBTztvQkFBTTtvQkFDeEJxQixTQUFTO3dCQUFFckIsT0FBTztvQkFBRTtvQkFDcEJzQixVQUFVO3dCQUFFdEIsT0FBTzs0QkFBQyxJQUFJbkIsMENBQWEsQ0FBQyxPQUFPLE9BQU8sT0FBTzs0QkFBSSxJQUFJQSwwQ0FBYSxDQUFDLEdBQUcsR0FBRyxHQUFHO3lCQUFHO29CQUFDO29CQUM5RjJDLE9BQU87d0JBQUV4QixPQUFPO29CQUFFO29CQUNsQnlCLFFBQVE7d0JBQUV6QixPQUFPO29CQUFNO29CQUN2QjBCLE1BQU07d0JBQUUxQixPQUFPO29CQUFFO29CQUNqQjJCLFVBQVU7d0JBQUUzQixPQUFPO29CQUFLO29CQUN4QjRCLE9BQU87d0JBQUU1QixPQUFPO29CQUFFO29CQUNsQkcsUUFBUTt3QkFBRUgsT0FBTztvQkFBRTtvQkFDbkJELFNBQVM7d0JBQUVDLE9BQU87NEJBQUM7NEJBQUc7eUJBQUU7b0JBQUM7b0JBQ3pCUSxjQUFjO3dCQUFFUixPQUFPOzRCQUFDOzRCQUFNO3lCQUFLO29CQUFDO2dCQUN4QztnQkFDQTZCLFdBQVc7Z0JBQ1hDLG9CQUFvQjtnQkFDcEJDLFdBQVc7Z0JBQ1hDLGFBQVk7Ozs7Ozs7Ozs7OztBQUk1QjtHQTdKTTFDOztRQUdGUCxpREFBUUE7OztLQUhOTztBQStKTixxQ0FBcUM7QUFDckNWLDZDQUFlLGVBQ1gsOERBQUNFLHNEQUFNQTtJQUNIYSxJQUFJO1FBQ0F1Qyx1QkFBdUI7UUFDdkJDLG9CQUFvQjtRQUNwQlAsT0FBTztRQUNQUSxXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsaUJBQWlCO0lBQ3JCO0lBQ0FDLFFBQVE7UUFDSkMsVUFBVTtRQUNWQyxRQUFRO1FBQ1JDLFlBQVk7SUFDaEI7SUFDQUMsS0FBSztJQUNMQyxRQUFRO1FBQ0pDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xuQyxVQUFVO1lBQUM7WUFBRztZQUFHO1NBQUU7SUFDdkI7SUFDQW9DLE9BQU87UUFBRXRDLFFBQVE7UUFBUUQsT0FBTztJQUFPO2NBRXZDLDRFQUFDbkI7Ozs7Ozs7OztlQUVMTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL1RleHR1cmVkTWVzaC50c3g/MTAwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuICAgIGltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4gICAgaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4gICAgaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuICAgIGltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInO1xuXG4gICAgLy8gQ3JlYXRlIGEgZGl2IHRvIGVtYmVkIHRoZSBjYW52YXNcbiAgICBjb25zdCBlbWJlZFJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbWJlZFJvb3QuY2xhc3NOYW1lID0gJ250LWVtYmVkJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVtYmVkUm9vdCk7XG5cbiAgICAvLyBUZXh0dXJlTWVzaCBjb21wb25lbnRcbiAgICBjb25zdCBUZXh0dXJlTWVzaCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVzaCA9IHVzZVJlZjxUSFJFRS5NZXNoPihudWxsKTtcblxuICAgICAgICB1c2VGcmFtZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2xvY2ssIG1vdXNlLCBnbCB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAobWVzaC5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLmN1cnJlbnQhLm1hdGVyaWFsISBhcyBUSFJFRS5TaGFkZXJNYXRlcmlhbDtcbiAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwudW5pZm9ybXMudV9tb3VzZS52YWx1ZSA9IFttb3VzZS54IC8gMiArIDAuNSwgbW91c2UueSAvIDIgKyAwLjVdO1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC51bmlmb3Jtcy51X3RpbWUudmFsdWUgPSBjbG9jay5nZXRFbGFwc2VkVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZ2wuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwudW5pZm9ybXMudV9yZXNvbHV0aW9uLnZhbHVlID0gW3JlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bWVzaCByZWY9e21lc2h9IHBvc2l0aW9uPXtbMCwgMCwgMF19IHNjYWxlPXsxfSByb3RhdGlvbj17WzAsIDAsIDBdfT5cbiAgICAgICAgICAgICAgICA8cGxhbmVHZW9tZXRyeSBhcmdzPXtbMTAyNCwgMTAyNF19IC8+XG4gICAgICAgICAgICAgICAgPHNoYWRlck1hdGVyaWFsXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyPXtgXG4jaWZkZWYgR0xfRVNcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuI2VuZGlmXG5cbnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XG51bmlmb3JtIHZlYzIgdV9tb3VzZTtcbnVuaWZvcm0gdmVjNCB1X2NvbG9yc1syXTtcbnVuaWZvcm0gZmxvYXQgdV9zcGVlZDtcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xudW5pZm9ybSBmbG9hdCB1X3NjYWxlOyBcbnVuaWZvcm0gZmxvYXQgbGlnaHQ7XG51bmlmb3JtIGZsb2F0IHNoYWRvdztcbnVuaWZvcm0gZmxvYXQgdGludDtcbnVuaWZvcm0gZmxvYXQgY292ZXJhZ2U7XG51bmlmb3JtIGZsb2F0IGFscGhhO1xuXG5jb25zdCBmbG9hdCBjbG91ZGFscGhhID0gMjAuO1xuY29uc3QgbWF0MiBtID0gbWF0MiggMS42LCAgMS4yLCAtMS4yLCAgMS42ICk7XG5cbnZlYzIgaGFzaCggdmVjMiBwICkge1xuICAgIHAgPSB2ZWMyKGRvdChwLCB2ZWMyKDEyNy4xLCAzMTEuNykpLCBkb3QocCwgdmVjMigyNjkuNSwgMTgzLjMpKSk7XG4gICAgcmV0dXJuIC0xLjAgKyAyLjAgKiBmcmFjdChzaW4ocCkgKiA0Mzc1OC41NDUzMTIzKTtcbn1cblxuZmxvYXQgbm9pc2UoaW4gdmVjMiBwKSB7XG4gICAgY29uc3QgZmxvYXQgSzEgPSAwLjM2NjAyNTQwNDsgLy8gKHNxcnQoMyktMSkvMjtcbiAgICBjb25zdCBmbG9hdCBLMiA9IDAuMjExMzI0ODY1OyAvLyAoMy1zcXJ0KDMpKS82O1xuICAgIHZlYzIgaSA9IGZsb29yKHAgKyAocC54ICsgcC55KSAqIEsxKTsgICAgXG4gICAgdmVjMiBhID0gcCAtIGkgKyAoaS54ICsgaS55KSAqIEsyO1xuICAgIHZlYzIgbyA9IChhLnggPiBhLnkpID8gdmVjMigxLjAsIDAuMCkgOiB2ZWMyKDAuMCwgMS4wKTtcbiAgICB2ZWMyIGIgPSBhIC0gbyArIEsyO1xuICAgIHZlYzIgYyA9IGEgLSAxLjAgKyAyLjAgKiBLMjtcbiAgICB2ZWMzIGggPSBtYXgoMC41IC0gdmVjMyhkb3QoYSwgYSksIGRvdChiLCBiKSwgZG90KGMsIGMpKSwgMC4wKTtcbiAgICB2ZWMzIG4gPSBoICogaCAqIGggKiBoICogdmVjMyhkb3QoYSwgaGFzaChpICsgMC4wKSksIGRvdChiLCBoYXNoKGkgKyBvKSksIGRvdChjLCBoYXNoKGkgKyAxLjApKSk7XG4gICAgcmV0dXJuIGRvdChuLCB2ZWMzKDcwLjApKTsgICAgXG59XG5cbmZsb2F0IGZibSh2ZWMyIG4pIHtcbiAgICBmbG9hdCB0b3RhbCA9IDAuMCwgYW1wbGl0dWRlID0gMC4xO1xuICAgIGZvciAoaW50IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIHRvdGFsICs9IG5vaXNlKG4pICogYW1wbGl0dWRlO1xuICAgICAgICBuID0gbSAqIG47XG4gICAgICAgIGFtcGxpdHVkZSAqPSAwLjQ7XG4gICAgfVxuICAgIHJldHVybiB0b3RhbDtcbn1cblxudm9pZCBtYWluKCkge1xuICAgIHZlYzIgcCA9IGdsX0ZyYWdDb29yZC54eSAvIHVfcmVzb2x1dGlvbi54eTtcbiAgICB2ZWMyIHV2ID0gcCAqIHZlYzIodV9yZXNvbHV0aW9uLnggLyB1X3Jlc29sdXRpb24ueSwgMS4wKTsgICAgXG4gICAgZmxvYXQgc3BlZWQgPSB1X3NwZWVkICogMC4xO1xuICAgIGZsb2F0IHRpbWUgPSB1X3RpbWUgKiBzcGVlZDtcbiAgICBmbG9hdCBzY2FsZSA9ICgxLjAgLSB1X3NjYWxlKTtcbiAgICBmbG9hdCBxID0gZmJtKHV2ICogc2NhbGUgKiAwLjUpO1xuICAgIFxuICAgIGZsb2F0IHIgPSAwLjA7XG4gICAgdXYgKj0gc2NhbGU7XG4gICAgdXYgLT0gcSAtIHRpbWU7XG4gICAgZmxvYXQgd2VpZ2h0ID0gMC44O1xuICAgIGZvciAoaW50IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIHIgKz0gYWJzKHdlaWdodCAqIG5vaXNlKHV2KSk7XG4gICAgICAgIHV2ID0gbSAqIHV2ICsgdGltZTtcbiAgICAgICAgd2VpZ2h0ICo9IDAuNztcbiAgICB9XG5cbiAgICBmbG9hdCBmID0gMC4wO1xuICAgIHV2ID0gcCAqIHZlYzIodV9yZXNvbHV0aW9uLnggLyB1X3Jlc29sdXRpb24ueSwgMS4wKTtcbiAgICB1diAqPSBzY2FsZTtcbiAgICB1diAtPSBxIC0gdGltZTtcbiAgICB3ZWlnaHQgPSAwLjc7XG4gICAgZm9yIChpbnQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgZiArPSB3ZWlnaHQgKiBub2lzZSh1dik7XG4gICAgICAgIHV2ID0gbSAqIHV2ICsgdGltZTtcbiAgICAgICAgd2VpZ2h0ICo9IDAuNjtcbiAgICB9XG5cbiAgICBmICo9IHIgKyBmO1xuXG4gICAgZmxvYXQgYyA9IDAuMDtcbiAgICB0aW1lID0gdV90aW1lICogc3BlZWQgKiAyLjA7XG4gICAgdXYgPSBwICogdmVjMih1X3Jlc29sdXRpb24ueCAvIHVfcmVzb2x1dGlvbi55LCAxLjApO1xuICAgIHV2ICo9IHNjYWxlICogMi4wO1xuICAgIHV2IC09IHEgLSB0aW1lO1xuICAgIHdlaWdodCA9IDAuNDtcbiAgICBmb3IgKGludCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBjICs9IHdlaWdodCAqIG5vaXNlKHV2KTtcbiAgICAgICAgdXYgPSBtICogdXYgKyB0aW1lO1xuICAgICAgICB3ZWlnaHQgKj0gMC42O1xuICAgIH1cblxuICAgIGZsb2F0IGMxID0gMC4wO1xuICAgIHRpbWUgPSB1X3RpbWUgKiBzcGVlZCAqIDMuMDtcbiAgICB1diA9IHAgKiB2ZWMyKHVfcmVzb2x1dGlvbi54IC8gdV9yZXNvbHV0aW9uLnksIDEuMCk7XG4gICAgdXYgKj0gc2NhbGUgKiAzLjA7XG4gICAgdXYgLT0gcSAtIHRpbWU7XG4gICAgd2VpZ2h0ID0gMC40O1xuICAgIGZvciAoaW50IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGMxICs9IGFicyh3ZWlnaHQgKiBub2lzZSh1dikpO1xuICAgICAgICB1diA9IG0gKiB1diArIHRpbWU7XG4gICAgICAgIHdlaWdodCAqPSAwLjY7XG4gICAgfVxuXG4gICAgYyArPSBjMTtcblxuICAgIHZlYzQgc2t5Y29sb3IgPSBtaXgodV9jb2xvcnNbMV0sIHVfY29sb3JzWzBdLCBwLnkpO1xuICAgIHZlYzQgY2xvdWRjb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgMS4wKSAqIGNsYW1wKCgoMS4wIC0gc2hhZG93KSArIGxpZ2h0ICogYyksIDAuMCwgMS4wKTtcbiAgICBmID0gY292ZXJhZ2UgKyBjbG91ZGFscGhhICogYWxwaGEgKiBmICogcjtcbiAgICB2ZWM0IHJlc3VsdCA9IG1peChza3ljb2xvciwgY2xhbXAodGludCAqIHNreWNvbG9yICsgY2xvdWRjb2xvciwgMC4wLCAxLjApLCBjbGFtcChmICsgYywgMC4wLCAxLjApKTtcblxuICAgIGdsX0ZyYWdDb2xvciA9IHJlc3VsdDtcbmB9XG4gICAgICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcj17YFxudm9pZCBtYWluKCkge1xuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XG59XG5gfVxuICAgICAgICAgICAgICAgICAgICB1bmlmb3Jtcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdV9zcGVlZDogeyB2YWx1ZTogMC4wNTIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVfc2NhbGU6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVfY29sb3JzOiB7IHZhbHVlOiBbbmV3IFRIUkVFLlZlY3RvcjQoMC45NDksIDAuOTE0LCAwLjg3OCwgMSksIG5ldyBUSFJFRS5WZWN0b3I0KDAsIDAsIDAsIDApXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvdzogeyB2YWx1ZTogMC40NTggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbnQ6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyYWdlOiB7IHZhbHVlOiAwLjM5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyB2YWx1ZTogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdV90aW1lOiB7IHZhbHVlOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1X21vdXNlOiB7IHZhbHVlOiBbMCwgMF0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVfcmVzb2x1dGlvbjogeyB2YWx1ZTogWzEwMjQsIDEwMjRdIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgd2lyZWZyYW1lPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgd2lyZWZyYW1lTGluZXdpZHRoPXswfVxuICAgICAgICAgICAgICAgICAgICBkaXRoZXJpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBnbHNsVmVyc2lvbj1cIjEwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbWVzaD5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gUmVuZGVyIHRoZSBDYW52YXMgd2l0aCBUZXh0dXJlTWVzaFxuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgPENhbnZhc1xuICAgICAgICAgICAgZ2w9e3tcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBcImhpZ2hwXCIsXG4gICAgICAgICAgICAgICAgcG93ZXJQcmVmZXJlbmNlOiBcImhpZ2gtcGVyZm9ybWFuY2VcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHJlc2l6ZT17e1xuICAgICAgICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgICAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb2Zmc2V0U2l6ZTogdHJ1ZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRwcj17MX1cbiAgICAgICAgICAgIGNhbWVyYT17e1xuICAgICAgICAgICAgICAgIGZvdjogNzUsXG4gICAgICAgICAgICAgICAgbmVhcjogMC4xLFxuICAgICAgICAgICAgICAgIGZhcjogMTAwMCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzAsIDAsIDVdXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0dXJlTWVzaCAvPlxuICAgICAgICA8L0NhbnZhcz4sXG4gICAgICAgIGVtYmVkUm9vdFxuICAgICk7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIlJlYWN0RE9NIiwiVEhSRUUiLCJDYW52YXMiLCJ1c2VGcmFtZSIsImVtYmVkUm9vdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIlRleHR1cmVNZXNoIiwibWVzaCIsInN0YXRlIiwiY2xvY2siLCJtb3VzZSIsImdsIiwiY3VycmVudCIsIm1hdGVyaWFsIiwidW5pZm9ybXMiLCJ1X21vdXNlIiwidmFsdWUiLCJ4IiwieSIsInVfdGltZSIsImdldEVsYXBzZWRUaW1lIiwicmVjdCIsImRvbUVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1X3Jlc29sdXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsInBvc2l0aW9uIiwic2NhbGUiLCJyb3RhdGlvbiIsInBsYW5lR2VvbWV0cnkiLCJhcmdzIiwic2hhZGVyTWF0ZXJpYWwiLCJmcmFnbWVudFNoYWRlciIsInZlcnRleFNoYWRlciIsInVfc3BlZWQiLCJ1X3NjYWxlIiwidV9jb2xvcnMiLCJWZWN0b3I0IiwibGlnaHQiLCJzaGFkb3ciLCJ0aW50IiwiY292ZXJhZ2UiLCJhbHBoYSIsIndpcmVmcmFtZSIsIndpcmVmcmFtZUxpbmV3aWR0aCIsImRpdGhlcmluZyIsImdsc2xWZXJzaW9uIiwicmVuZGVyIiwicHJlc2VydmVEcmF3aW5nQnVmZmVyIiwicHJlbXVsdGlwbGllZEFscGhhIiwiYW50aWFsaWFzIiwicHJlY2lzaW9uIiwicG93ZXJQcmVmZXJlbmNlIiwicmVzaXplIiwiZGVib3VuY2UiLCJzY3JvbGwiLCJvZmZzZXRTaXplIiwiZHByIiwiY2FtZXJhIiwiZm92IiwibmVhciIsImZhciIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/TexturedMesh.tsx\n"));

/***/ })

});