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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-99983b2d.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n// components/TextureMeshComponent.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TextureMesh = ()=>{\n    _s();\n    const mesh = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.C)((state)=>{\n        const { clock, mouse, gl, scene, camera } = state;\n        if (mesh.current) {\n            mesh.current.material.uniforms.u_mouse.value = [\n                mouse.x / 2 + 0.5,\n                mouse.y / 2 + 0.5\n            ];\n            mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();\n            let c = gl.domElement.getBoundingClientRect();\n            mesh.current.material.uniforms.u_resolution.value = [\n                c.width,\n                c.height\n            ];\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: mesh,\n        position: [\n            0,\n            0,\n            0\n        ],\n        scale: 1,\n        rotation: [\n            0,\n            0,\n            0\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"planeGeometry\", {\n                args: [\n                    1024,\n                    1024\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"shaderMaterial\", {\n                fragmentShader: \"\\n          #ifdef GL_ES\\n            precision mediump float;\\n          #endif\\n\\n          uniform vec2 u_resolution;\\n          uniform vec2 u_mouse;\\n          uniform vec4 u_colors[2];\\n          uniform float u_speed;\\n          uniform float u_time;\\n          uniform float u_scale; \\n          uniform float light;\\n          uniform float shadow;\\n          uniform float tint;\\n          uniform float coverage;\\n          uniform float alpha;\\n\\n          const float cloudalpha = 20.;\\n          const mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );\\n\\n          vec2 hash( vec2 p ) {\\n            p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\\n            return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);\\n          }\\n\\n          float noise( in vec2 p ) {\\n            const float K1 = 0.366025404; // (sqrt(3)-1)/2;\\n            const float K2 = 0.211324865; // (3-sqrt(3))/6;\\n            vec2 i = floor(p + (p.x + p.y) * K1);  \\n            vec2 a = p - i + (i.x + i.y) * K2;\\n            vec2 o = (a.x > a.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); //vec2 of = 0.5 + 0.5 * vec2(sign(a.x - a.y), sign(a.y - a.x));\\n            vec2 b = a - o + K2;\\n            vec2 c = a - 1.0 + 2.0 * K2;\\n            vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);\\n            vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));\\n            return dot(n, vec3(70.0)); \\n          }\\n\\n          float fbm(vec2 n) {\\n            float total = 0.0, amplitude = 0.1;\\n            for (int i = 0; i < 7; i++) {\\n              total += noise(n) * amplitude;\\n              n = m * n;\\n              amplitude *= 0.4;\\n            }\\n            return total;\\n          }\\n\\n          void main() {\\n            vec2 p = gl_FragCoord.xy / u_resolution.xy;\\n            vec2 uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);    \\n            float speed = u_speed * 0.1;\\n            float time = u_time * speed;\\n            float scale = (1. - u_scale);\\n            float q = fbm(uv * scale * 0.5);\\n\\n            float r = 0.0;\\n            uv *= scale;\\n            uv -= q - time;\\n            float weight = 0.8;\\n            for (int i = 0; i < 8; i++) {\\n              r += abs(weight * noise(uv));\\n              uv = m * uv + time;\\n              weight *= 0.7;\\n            }\\n\\n            float f = 0.0;\\n            uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);\\n            uv *= scale;\\n            uv -= q - time;\\n            weight = 0.7;\\n            for (int i = 0; i < 8; i++) {\\n              f += weight * noise(uv);\\n              uv = m * uv + time;\\n              weight *= 0.6;\\n            }\\n\\n            f *= r + f;\\n\\n            float c = 0.0;\\n            time = u_time * speed * 2.0;\\n            uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);\\n            uv *= scale * 2.0;\\n            uv -= q - time;\\n            weight = 0.4;\\n            for (int i = 0; i < 7; i++) {\\n              c += weight * noise(uv);\\n              uv = m * uv + time;\\n              weight *= 0.6;\\n            }\\n\\n            float c1 = 0.0;\\n            time = u_time * speed * 3.0;\\n            uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);\\n            uv *= scale * 3.0;\\n            uv -= q - time;\\n            weight = 0.4;\\n            for (int i = 0; i < 7; i++) {\\n              c1 += abs(weight * noise(uv));\\n              uv = m * uv + time;\\n              weight *= 0.6;\\n            }\\n\\n            c += c1;\\n\\n            vec4 skycolour = mix(u_colors[1], u_colors[0], p.y);\\n            vec4 cloudcolour = vec4(1.0, 1.0, 1.0, 1.0) * clamp(((1.0 - shadow) + light * c), 0.0, 1.0);\\n\\n            f = coverage + cloudalpha * alpha * f * r;\\n\\n            vec4 result = mix(skycolour, clamp(tint * skycolour + cloudcolour, 0.0, 1.0), clamp(f + c, 0.0, 1.0));\\n\\n            gl_FragColor = result;\\n          }\\n        \",\n                vertexShader: \"\\n          void main() {\\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\\n          }\\n        \",\n                uniforms: {\n                    u_speed: {\n                        value: 0.05\n                    },\n                    u_scale: {\n                        value: 0\n                    },\n                    u_colors: {\n                        value: [\n                            new three__WEBPACK_IMPORTED_MODULE_3__.Vector4(1, 1, 1, 0),\n                            new three__WEBPACK_IMPORTED_MODULE_3__.Vector4(0, 0, 0, 0)\n                        ]\n                    },\n                    light: {\n                        value: 0.151\n                    },\n                    shadow: {\n                        value: 0.5\n                    },\n                    tint: {\n                        value: 0.596\n                    },\n                    coverage: {\n                        value: 0.276\n                    },\n                    alpha: {\n                        value: 1\n                    },\n                    u_time: {\n                        value: 0\n                    },\n                    u_mouse: {\n                        value: [\n                            0,\n                            0\n                        ]\n                    },\n                    u_resolution: {\n                        value: [\n                            1024,\n                            1024\n                        ]\n                    }\n                },\n                wireframe: false,\n                wireframeLinewidth: 0,\n                dithering: false,\n                glslVersion: \"100\"\n            }, void 0, false, {\n                fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TextureMesh, \"aboyJ/StuJfvpd16sdbtizo3yWA=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.C\n    ];\n});\n_c = TextureMesh;\nconst TextureMeshComponent = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Canvas, {\n        gl: {\n            preserveDrawingBuffer: true,\n            premultipliedAlpha: false,\n            alpha: true,\n            antialias: f,\n            precision: \"highp\",\n            powerPreference: \"high-performance\"\n        },\n        resize: {\n            debounce: 0,\n            scroll: false,\n            offsetSize: true\n        },\n        dpr: 1,\n        camera: {\n            fov: 75,\n            near: 0.1,\n            far: 1000,\n            position: [\n                0,\n                0,\n                5\n            ]\n        },\n        style: {\n            height: \"100%\",\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextureMesh, {}, void 0, false, {\n            fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n            lineNumber: 192,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n        lineNumber: 169,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = TextureMeshComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextureMeshComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"TextureMesh\");\n$RefreshReg$(_c1, \"TextureMeshComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvVGV4dHVyZWRNZXNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEscUNBQXFDOzs7QUFFWTtBQUNLO0FBQ3ZCO0FBRS9CLE1BQU1LLGNBQWM7O0lBQ2xCLE1BQU1DLE9BQU9MLDZDQUFNQSxDQUFDO0lBRXBCRSxxREFBUUEsQ0FBQ0ksQ0FBQUE7UUFDUCxNQUFNLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxFQUFFLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLEdBQUdMO1FBQzVDLElBQUlELEtBQUtPLE9BQU8sRUFBRTtZQUNmUCxLQUFLTyxPQUFPLENBQVNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNDLEtBQUssR0FBRztnQkFBQ1IsTUFBTVMsQ0FBQyxHQUFHLElBQUk7Z0JBQUtULE1BQU1VLENBQUMsR0FBRyxJQUFJO2FBQUk7WUFDN0ZiLEtBQUtPLE9BQU8sQ0FBU0MsUUFBUSxDQUFDQyxRQUFRLENBQUNLLE1BQU0sQ0FBQ0gsS0FBSyxHQUFHVCxNQUFNYSxjQUFjO1lBQzNFLElBQUlDLElBQUlaLEdBQUdhLFVBQVUsQ0FBQ0MscUJBQXFCO1lBQzFDbEIsS0FBS08sT0FBTyxDQUFTQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ1UsWUFBWSxDQUFDUixLQUFLLEdBQUc7Z0JBQUNLLEVBQUVJLEtBQUs7Z0JBQUVKLEVBQUVLLE1BQU07YUFBQztRQUNsRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNyQjtRQUFLc0IsS0FBS3RCO1FBQU11QixVQUFVO1lBQUM7WUFBRztZQUFHO1NBQUU7UUFBRUMsT0FBTztRQUFHQyxVQUFVO1lBQUM7WUFBRztZQUFHO1NBQUU7OzBCQUNqRSw4REFBQ0M7Z0JBQWNDLE1BQU07b0JBQUM7b0JBQU07aUJBQUs7Ozs7OzswQkFDakMsOERBQUNDO2dCQUNDQyxnQkFBaUI7Z0JBbUhqQkMsY0FBZTtnQkFLZnJCLFVBQVU7b0JBQ1JzQixTQUFTO3dCQUFFcEIsT0FBTztvQkFBSztvQkFDdkJxQixTQUFTO3dCQUFFckIsT0FBTztvQkFBRTtvQkFDcEJzQixVQUFVO3dCQUFFdEIsT0FBTzs0QkFBQyxJQUFJYiwwQ0FBYSxDQUFDLEdBQUcsR0FBRyxHQUFHOzRCQUFJLElBQUlBLDBDQUFhLENBQUMsR0FBRyxHQUFHLEdBQUc7eUJBQUc7b0JBQUM7b0JBQ2xGcUMsT0FBTzt3QkFBRXhCLE9BQU87b0JBQU07b0JBQ3RCeUIsUUFBUTt3QkFBRXpCLE9BQU87b0JBQUk7b0JBQ3JCMEIsTUFBTTt3QkFBRTFCLE9BQU87b0JBQU07b0JBQ3JCMkIsVUFBVTt3QkFBRTNCLE9BQU87b0JBQU07b0JBQ3pCNEIsT0FBTzt3QkFBRTVCLE9BQU87b0JBQUU7b0JBQ2xCRyxRQUFRO3dCQUFFSCxPQUFPO29CQUFFO29CQUNuQkQsU0FBUzt3QkFBRUMsT0FBTzs0QkFBQzs0QkFBRzt5QkFBRTtvQkFBQztvQkFDekJRLGNBQWM7d0JBQUVSLE9BQU87NEJBQUM7NEJBQU07eUJBQUs7b0JBQUM7Z0JBQ3RDO2dCQUNBNkIsV0FBVztnQkFDWEMsb0JBQW9CO2dCQUNwQkMsV0FBVztnQkFFWEMsYUFBWTs7Ozs7Ozs7Ozs7O0FBSXBCO0dBOUpNNUM7O1FBR0pGLGlEQUFRQTs7O0tBSEpFO0FBZ0tOLE1BQU02Qyx1QkFBdUI7SUFDM0IscUJBQ0UsOERBQUNoRCxzREFBTUE7UUFDTFEsSUFBSTtZQUNGeUMsdUJBQXVCO1lBQ3ZCQyxvQkFBb0I7WUFDcEJQLE9BQU87WUFDUFEsV0FBV0M7WUFDWEMsV0FBVztZQUNYQyxpQkFBaUI7UUFDbkI7UUFDQUMsUUFBUTtZQUNOQyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsWUFBWTtRQUNkO1FBQ0FDLEtBQUs7UUFDTGpELFFBQVE7WUFDTmtELEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxLQUFLO1lBQ0xuQyxVQUFVO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7UUFDckI7UUFDQW9DLE9BQU87WUFBRXRDLFFBQVE7WUFBUUQsT0FBTztRQUFPO2tCQUV2Qyw0RUFBQ3JCOzs7Ozs7Ozs7O0FBR1A7TUE1Qk02QztBQThCTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvVGV4dHVyZWRNZXNoLnRzeD8xMDAyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvVGV4dHVyZU1lc2hDb21wb25lbnQuanNcblwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYW52YXMsIHVzZUZyYW1lIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuY29uc3QgVGV4dHVyZU1lc2ggPSAoKSA9PiB7XG4gIGNvbnN0IG1lc2ggPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRnJhbWUoc3RhdGUgPT4ge1xuICAgIGNvbnN0IHsgY2xvY2ssIG1vdXNlLCBnbCwgc2NlbmUsIGNhbWVyYSB9ID0gc3RhdGU7XG4gICAgaWYgKG1lc2guY3VycmVudCkge1xuICAgICAgKG1lc2guY3VycmVudCBhcyBhbnkpLm1hdGVyaWFsLnVuaWZvcm1zLnVfbW91c2UudmFsdWUgPSBbbW91c2UueCAvIDIgKyAwLjUsIG1vdXNlLnkgLyAyICsgMC41XTtcbiAgICAgIChtZXNoLmN1cnJlbnQgYXMgYW55KS5tYXRlcmlhbC51bmlmb3Jtcy51X3RpbWUudmFsdWUgPSBjbG9jay5nZXRFbGFwc2VkVGltZSgpO1xuICAgICAgbGV0IGMgPSBnbC5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgKG1lc2guY3VycmVudCBhcyBhbnkpLm1hdGVyaWFsLnVuaWZvcm1zLnVfcmVzb2x1dGlvbi52YWx1ZSA9IFtjLndpZHRoLCBjLmhlaWdodF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxtZXNoIHJlZj17bWVzaH0gcG9zaXRpb249e1swLCAwLCAwXX0gc2NhbGU9ezF9IHJvdGF0aW9uPXtbMCwgMCwgMF19PlxuICAgICAgPHBsYW5lR2VvbWV0cnkgYXJncz17WzEwMjQsIDEwMjRdfSAvPlxuICAgICAgPHNoYWRlck1hdGVyaWFsXG4gICAgICAgIGZyYWdtZW50U2hhZGVyPXtgXG4gICAgICAgICAgI2lmZGVmIEdMX0VTXG4gICAgICAgICAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbiAgICAgICAgICAjZW5kaWZcblxuICAgICAgICAgIHVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XG4gICAgICAgICAgdW5pZm9ybSB2ZWMyIHVfbW91c2U7XG4gICAgICAgICAgdW5pZm9ybSB2ZWM0IHVfY29sb3JzWzJdO1xuICAgICAgICAgIHVuaWZvcm0gZmxvYXQgdV9zcGVlZDtcbiAgICAgICAgICB1bmlmb3JtIGZsb2F0IHVfdGltZTtcbiAgICAgICAgICB1bmlmb3JtIGZsb2F0IHVfc2NhbGU7IFxuICAgICAgICAgIHVuaWZvcm0gZmxvYXQgbGlnaHQ7XG4gICAgICAgICAgdW5pZm9ybSBmbG9hdCBzaGFkb3c7XG4gICAgICAgICAgdW5pZm9ybSBmbG9hdCB0aW50O1xuICAgICAgICAgIHVuaWZvcm0gZmxvYXQgY292ZXJhZ2U7XG4gICAgICAgICAgdW5pZm9ybSBmbG9hdCBhbHBoYTtcblxuICAgICAgICAgIGNvbnN0IGZsb2F0IGNsb3VkYWxwaGEgPSAyMC47XG4gICAgICAgICAgY29uc3QgbWF0MiBtID0gbWF0MiggMS42LCAgMS4yLCAtMS4yLCAgMS42ICk7XG5cbiAgICAgICAgICB2ZWMyIGhhc2goIHZlYzIgcCApIHtcbiAgICAgICAgICAgIHAgPSB2ZWMyKGRvdChwLCB2ZWMyKDEyNy4xLCAzMTEuNykpLCBkb3QocCwgdmVjMigyNjkuNSwgMTgzLjMpKSk7XG4gICAgICAgICAgICByZXR1cm4gLTEuMCArIDIuMCAqIGZyYWN0KHNpbihwKSAqIDQzNzU4LjU0NTMxMjMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZsb2F0IG5vaXNlKCBpbiB2ZWMyIHAgKSB7XG4gICAgICAgICAgICBjb25zdCBmbG9hdCBLMSA9IDAuMzY2MDI1NDA0OyAvLyAoc3FydCgzKS0xKS8yO1xuICAgICAgICAgICAgY29uc3QgZmxvYXQgSzIgPSAwLjIxMTMyNDg2NTsgLy8gKDMtc3FydCgzKSkvNjtcbiAgICAgICAgICAgIHZlYzIgaSA9IGZsb29yKHAgKyAocC54ICsgcC55KSAqIEsxKTsgIFxuICAgICAgICAgICAgdmVjMiBhID0gcCAtIGkgKyAoaS54ICsgaS55KSAqIEsyO1xuICAgICAgICAgICAgdmVjMiBvID0gKGEueCA+IGEueSkgPyB2ZWMyKDEuMCwgMC4wKSA6IHZlYzIoMC4wLCAxLjApOyAvL3ZlYzIgb2YgPSAwLjUgKyAwLjUgKiB2ZWMyKHNpZ24oYS54IC0gYS55KSwgc2lnbihhLnkgLSBhLngpKTtcbiAgICAgICAgICAgIHZlYzIgYiA9IGEgLSBvICsgSzI7XG4gICAgICAgICAgICB2ZWMyIGMgPSBhIC0gMS4wICsgMi4wICogSzI7XG4gICAgICAgICAgICB2ZWMzIGggPSBtYXgoMC41IC0gdmVjMyhkb3QoYSwgYSksIGRvdChiLCBiKSwgZG90KGMsIGMpKSwgMC4wKTtcbiAgICAgICAgICAgIHZlYzMgbiA9IGggKiBoICogaCAqIGggKiB2ZWMzKGRvdChhLCBoYXNoKGkgKyAwLjApKSwgZG90KGIsIGhhc2goaSArIG8pKSwgZG90KGMsIGhhc2goaSArIDEuMCkpKTtcbiAgICAgICAgICAgIHJldHVybiBkb3QobiwgdmVjMyg3MC4wKSk7IFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZsb2F0IGZibSh2ZWMyIG4pIHtcbiAgICAgICAgICAgIGZsb2F0IHRvdGFsID0gMC4wLCBhbXBsaXR1ZGUgPSAwLjE7XG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgICB0b3RhbCArPSBub2lzZShuKSAqIGFtcGxpdHVkZTtcbiAgICAgICAgICAgICAgbiA9IG0gKiBuO1xuICAgICAgICAgICAgICBhbXBsaXR1ZGUgKj0gMC40O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICAgIHZlYzIgcCA9IGdsX0ZyYWdDb29yZC54eSAvIHVfcmVzb2x1dGlvbi54eTtcbiAgICAgICAgICAgIHZlYzIgdXYgPSBwICogdmVjMih1X3Jlc29sdXRpb24ueCAvIHVfcmVzb2x1dGlvbi55LCAxLjApOyAgICBcbiAgICAgICAgICAgIGZsb2F0IHNwZWVkID0gdV9zcGVlZCAqIDAuMTtcbiAgICAgICAgICAgIGZsb2F0IHRpbWUgPSB1X3RpbWUgKiBzcGVlZDtcbiAgICAgICAgICAgIGZsb2F0IHNjYWxlID0gKDEuIC0gdV9zY2FsZSk7XG4gICAgICAgICAgICBmbG9hdCBxID0gZmJtKHV2ICogc2NhbGUgKiAwLjUpO1xuXG4gICAgICAgICAgICBmbG9hdCByID0gMC4wO1xuICAgICAgICAgICAgdXYgKj0gc2NhbGU7XG4gICAgICAgICAgICB1diAtPSBxIC0gdGltZTtcbiAgICAgICAgICAgIGZsb2F0IHdlaWdodCA9IDAuODtcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgIHIgKz0gYWJzKHdlaWdodCAqIG5vaXNlKHV2KSk7XG4gICAgICAgICAgICAgIHV2ID0gbSAqIHV2ICsgdGltZTtcbiAgICAgICAgICAgICAgd2VpZ2h0ICo9IDAuNztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmxvYXQgZiA9IDAuMDtcbiAgICAgICAgICAgIHV2ID0gcCAqIHZlYzIodV9yZXNvbHV0aW9uLnggLyB1X3Jlc29sdXRpb24ueSwgMS4wKTtcbiAgICAgICAgICAgIHV2ICo9IHNjYWxlO1xuICAgICAgICAgICAgdXYgLT0gcSAtIHRpbWU7XG4gICAgICAgICAgICB3ZWlnaHQgPSAwLjc7XG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICBmICs9IHdlaWdodCAqIG5vaXNlKHV2KTtcbiAgICAgICAgICAgICAgdXYgPSBtICogdXYgKyB0aW1lO1xuICAgICAgICAgICAgICB3ZWlnaHQgKj0gMC42O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmICo9IHIgKyBmO1xuXG4gICAgICAgICAgICBmbG9hdCBjID0gMC4wO1xuICAgICAgICAgICAgdGltZSA9IHVfdGltZSAqIHNwZWVkICogMi4wO1xuICAgICAgICAgICAgdXYgPSBwICogdmVjMih1X3Jlc29sdXRpb24ueCAvIHVfcmVzb2x1dGlvbi55LCAxLjApO1xuICAgICAgICAgICAgdXYgKj0gc2NhbGUgKiAyLjA7XG4gICAgICAgICAgICB1diAtPSBxIC0gdGltZTtcbiAgICAgICAgICAgIHdlaWdodCA9IDAuNDtcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAgIGMgKz0gd2VpZ2h0ICogbm9pc2UodXYpO1xuICAgICAgICAgICAgICB1diA9IG0gKiB1diArIHRpbWU7XG4gICAgICAgICAgICAgIHdlaWdodCAqPSAwLjY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZsb2F0IGMxID0gMC4wO1xuICAgICAgICAgICAgdGltZSA9IHVfdGltZSAqIHNwZWVkICogMy4wO1xuICAgICAgICAgICAgdXYgPSBwICogdmVjMih1X3Jlc29sdXRpb24ueCAvIHVfcmVzb2x1dGlvbi55LCAxLjApO1xuICAgICAgICAgICAgdXYgKj0gc2NhbGUgKiAzLjA7XG4gICAgICAgICAgICB1diAtPSBxIC0gdGltZTtcbiAgICAgICAgICAgIHdlaWdodCA9IDAuNDtcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAgIGMxICs9IGFicyh3ZWlnaHQgKiBub2lzZSh1dikpO1xuICAgICAgICAgICAgICB1diA9IG0gKiB1diArIHRpbWU7XG4gICAgICAgICAgICAgIHdlaWdodCAqPSAwLjY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGMgKz0gYzE7XG5cbiAgICAgICAgICAgIHZlYzQgc2t5Y29sb3VyID0gbWl4KHVfY29sb3JzWzFdLCB1X2NvbG9yc1swXSwgcC55KTtcbiAgICAgICAgICAgIHZlYzQgY2xvdWRjb2xvdXIgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsIDEuMCkgKiBjbGFtcCgoKDEuMCAtIHNoYWRvdykgKyBsaWdodCAqIGMpLCAwLjAsIDEuMCk7XG5cbiAgICAgICAgICAgIGYgPSBjb3ZlcmFnZSArIGNsb3VkYWxwaGEgKiBhbHBoYSAqIGYgKiByO1xuXG4gICAgICAgICAgICB2ZWM0IHJlc3VsdCA9IG1peChza3ljb2xvdXIsIGNsYW1wKHRpbnQgKiBza3ljb2xvdXIgKyBjbG91ZGNvbG91ciwgMC4wLCAxLjApLCBjbGFtcChmICsgYywgMC4wLCAxLjApKTtcblxuICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgdmVydGV4U2hhZGVyPXtgXG4gICAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIHVuaWZvcm1zPXt7XG4gICAgICAgICAgdV9zcGVlZDogeyB2YWx1ZTogMC4wNSB9LFxuICAgICAgICAgIHVfc2NhbGU6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgICB1X2NvbG9yczogeyB2YWx1ZTogW25ldyBUSFJFRS5WZWN0b3I0KDEsIDEsIDEsIDApLCBuZXcgVEhSRUUuVmVjdG9yNCgwLCAwLCAwLCAwKV0gfSxcbiAgICAgICAgICBsaWdodDogeyB2YWx1ZTogMC4xNTEgfSxcbiAgICAgICAgICBzaGFkb3c6IHsgdmFsdWU6IDAuNSB9LFxuICAgICAgICAgIHRpbnQ6IHsgdmFsdWU6IDAuNTk2IH0sXG4gICAgICAgICAgY292ZXJhZ2U6IHsgdmFsdWU6IDAuMjc2IH0sXG4gICAgICAgICAgYWxwaGE6IHsgdmFsdWU6IDEgfSxcbiAgICAgICAgICB1X3RpbWU6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgICB1X21vdXNlOiB7IHZhbHVlOiBbMCwgMF0gfSxcbiAgICAgICAgICB1X3Jlc29sdXRpb246IHsgdmFsdWU6IFsxMDI0LCAxMDI0XSB9XG4gICAgICAgIH19XG4gICAgICAgIHdpcmVmcmFtZT17ZmFsc2V9XG4gICAgICAgIHdpcmVmcmFtZUxpbmV3aWR0aD17MH1cbiAgICAgICAgZGl0aGVyaW5nPXtmYWxzZX1cblxuICAgICAgICBnbHNsVmVyc2lvbj1cIjEwMFwiXG4gICAgICAvPlxuICAgIDwvbWVzaD5cbiAgKTtcbn07XG5cbmNvbnN0IFRleHR1cmVNZXNoQ29tcG9uZW50ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYW52YXNcbiAgICAgIGdsPXt7XG4gICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSxcbiAgICAgICAgYWxwaGE6IHRydWUsXG4gICAgICAgIGFudGlhbGlhczogZixcbiAgICAgICAgcHJlY2lzaW9uOiAnaGlnaHAnLFxuICAgICAgICBwb3dlclByZWZlcmVuY2U6ICdoaWdoLXBlcmZvcm1hbmNlJ1xuICAgICAgfX1cbiAgICAgIHJlc2l6ZT17e1xuICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgb2Zmc2V0U2l6ZTogdHJ1ZVxuICAgICAgfX1cbiAgICAgIGRwcj17MX1cbiAgICAgIGNhbWVyYT17e1xuICAgICAgICBmb3Y6IDc1LFxuICAgICAgICBuZWFyOiAwLjEsXG4gICAgICAgIGZhcjogMTAwMCxcbiAgICAgICAgcG9zaXRpb246IFswLCAwLCA1XVxuICAgICAgfX1cbiAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgPlxuICAgICAgPFRleHR1cmVNZXNoIC8+XG4gICAgPC9DYW52YXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0dXJlTWVzaENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIkNhbnZhcyIsInVzZUZyYW1lIiwiVEhSRUUiLCJUZXh0dXJlTWVzaCIsIm1lc2giLCJzdGF0ZSIsImNsb2NrIiwibW91c2UiLCJnbCIsInNjZW5lIiwiY2FtZXJhIiwiY3VycmVudCIsIm1hdGVyaWFsIiwidW5pZm9ybXMiLCJ1X21vdXNlIiwidmFsdWUiLCJ4IiwieSIsInVfdGltZSIsImdldEVsYXBzZWRUaW1lIiwiYyIsImRvbUVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1X3Jlc29sdXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsInBvc2l0aW9uIiwic2NhbGUiLCJyb3RhdGlvbiIsInBsYW5lR2VvbWV0cnkiLCJhcmdzIiwic2hhZGVyTWF0ZXJpYWwiLCJmcmFnbWVudFNoYWRlciIsInZlcnRleFNoYWRlciIsInVfc3BlZWQiLCJ1X3NjYWxlIiwidV9jb2xvcnMiLCJWZWN0b3I0IiwibGlnaHQiLCJzaGFkb3ciLCJ0aW50IiwiY292ZXJhZ2UiLCJhbHBoYSIsIndpcmVmcmFtZSIsIndpcmVmcmFtZUxpbmV3aWR0aCIsImRpdGhlcmluZyIsImdsc2xWZXJzaW9uIiwiVGV4dHVyZU1lc2hDb21wb25lbnQiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJwcmVtdWx0aXBsaWVkQWxwaGEiLCJhbnRpYWxpYXMiLCJmIiwicHJlY2lzaW9uIiwicG93ZXJQcmVmZXJlbmNlIiwicmVzaXplIiwiZGVib3VuY2UiLCJzY3JvbGwiLCJvZmZzZXRTaXplIiwiZHByIiwiZm92IiwibmVhciIsImZhciIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/TexturedMesh.tsx\n"));

/***/ })

});