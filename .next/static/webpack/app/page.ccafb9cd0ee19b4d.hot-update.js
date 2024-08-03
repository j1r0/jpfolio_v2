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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-99983b2d.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n// components/TextureMeshComponent.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TextureMesh = ()=>{\n    _s();\n    const mesh = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.C)((state)=>{\n        const { clock, mouse, gl, scene, camera } = state;\n        if (mesh.current) {\n            mesh.current.material.uniforms.u_mouse.value = [\n                mouse.x / 2 + 0.5,\n                mouse.y / 2 + 0.5\n            ];\n            mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();\n            let c = gl.domElement.getBoundingClientRect();\n            mesh.current.material.uniforms.u_resolution.value = [\n                c.width,\n                c.height\n            ];\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: mesh,\n        position: [\n            0,\n            0,\n            0\n        ],\n        scale: 1,\n        rotation: [\n            0,\n            0,\n            0\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"planeGeometry\", {\n                args: [\n                    1024,\n                    1024\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"shaderMaterial\", {\n                fragmentShader: \"\\n          #ifdef GL_ES\\n            precision mediump float;\\n          #endif\\n\\n          uniform vec2 u_resolution;\\n          uniform vec2 u_mouse;\\n          uniform vec4 u_colors[2];\\n          uniform float u_speed;\\n          uniform float u_time;\\n          uniform float u_scale; \\n          uniform float light;\\n          uniform float shadow;\\n          uniform float tint;\\n          uniform float coverage;\\n          uniform float alpha;\\n\\n          const float cloudalpha = 20.;\\n          const mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );\\n\\n          vec2 hash( vec2 p ) {\\n            p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\\n            return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);\\n          }\\n\\n          float noise( in vec2 p ) {\\n            const float K1 = 0.366025404; // (sqrt(3)-1)/2;\\n            const float K2 = 0.211324865; // (3-sqrt(3))/6;\\n            vec2 i = floor(p + (p.x + p.y) * K1);  \\n            vec2 a = p - i + (i.x + i.y) * K2;\\n            vec2 o = (a.x > a.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); //vec2 of = 0.5 + 0.5 * vec2(sign(a.x - a.y), sign(a.y - a.x));\\n            vec2 b = a - o + K2;\\n            vec2 c = a - 1.0 + 2.0 * K2;\\n            vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);\\n            vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));\\n            return dot(n, vec3(70.0)); \\n          }\\n\\n          float fbm(vec2 n) {\\n            float total = 0.0, amplitude = 0.1;\\n            for (int i = 0; i < 7; i++) {\\n              total += noise(n) * amplitude;\\n              n = m * n;\\n              amplitude *= 0.4;\\n            }\\n            return total;\\n          }\\n\\n          void main() {\\n            vec2 p = gl_FragCoord.xy / u_resolution.xy;\\n            vec2 uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);    \\n            float speed = u_speed * 0.1;\\n            float time = u_time * speed;\\n            float scale = (1. - u_scale);\\n            float q = fbm(uv * scale * 0.5);\\n\\n            float r = 0.0;\\n            uv *= scale;\\n            uv -= q - time;\\n            float weight = 0.8;\\n            for (int i = 0; i < 8; i++) {\\n              r += abs(weight * noise(uv));\\n              uv = m * uv + time;\\n              weight *= 0.7;\\n            }\\n\\n            float f = 0.0;\\n            uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);\\n            uv *= scale;\\n            uv -= q - time;\\n            weight = 0.7;\\n            for (int i = 0; i < 8; i++) {\\n              f += weight * noise(uv);\\n              uv = m * uv + time;\\n              weight *= 0.6;\\n            }\\n\\n            f *= r + f;\\n\\n            float c = 0.0;\\n            time = u_time * speed * 2.0;\\n            uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);\\n            uv *= scale * 2.0;\\n            uv -= q - time;\\n            weight = 0.4;\\n            for (int i = 0; i < 7; i++) {\\n              c += weight * noise(uv);\\n              uv = m * uv + time;\\n              weight *= 0.6;\\n            }\\n\\n            float c1 = 0.0;\\n            time = u_time * speed * 3.0;\\n            uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);\\n            uv *= scale * 3.0;\\n            uv -= q - time;\\n            weight = 0.4;\\n            for (int i = 0; i < 7; i++) {\\n              c1 += abs(weight * noise(uv));\\n              uv = m * uv + time;\\n              weight *= 0.6;\\n            }\\n\\n            c += c1;\\n\\n            vec4 skycolour = mix(u_colors[1], u_colors[0], p.y);\\n            vec4 cloudcolour = vec4(1.0, 1.0, 1.0, 1.0) * clamp(((1.0 - shadow) + light * c), 0.0, 1.0);\\n\\n            f = coverage + cloudalpha * alpha * f * r;\\n\\n            vec4 result = mix(skycolour, clamp(tint * skycolour + cloudcolour, 0.0, 1.0), clamp(f + c, 0.0, 1.0));\\n\\n            gl_FragColor = result;\\n          }\\n        \",\n                vertexShader: \"\\n          void main() {\\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\\n          }\\n        \",\n                uniforms: {\n                    u_speed: {\n                        value: 0.05\n                    },\n                    u_scale: {\n                        value: 0\n                    },\n                    u_colors: {\n                        value: [\n                            new three__WEBPACK_IMPORTED_MODULE_3__.Vector4(1, 1, 1, 0),\n                            new three__WEBPACK_IMPORTED_MODULE_3__.Vector4(0, 0, 0, 0)\n                        ]\n                    },\n                    light: {\n                        value: 0.151\n                    },\n                    shadow: {\n                        value: 0.5\n                    },\n                    tint: {\n                        value: 0.596\n                    },\n                    coverage: {\n                        value: 0.276\n                    },\n                    alpha: {\n                        value: 1\n                    },\n                    u_time: {\n                        value: 0\n                    },\n                    u_mouse: {\n                        value: [\n                            0,\n                            0\n                        ]\n                    },\n                    u_resolution: {\n                        value: [\n                            1024,\n                            1024\n                        ]\n                    }\n                },\n                wireframe: false,\n                wireframeLinewidth: 0,\n                dithering: false,\n                glslVersion: \"100\"\n            }, void 0, false, {\n                fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TextureMesh, \"aboyJ/StuJfvpd16sdbtizo3yWA=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.C\n    ];\n});\n_c = TextureMesh;\nconst TextureMeshComponent = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Canvas, {\n        gl: {\n            preserveDrawingBuffer: true,\n            premultipliedAlpha: false,\n            alpha: true,\n            antialias: true,\n            precision: \"highp\",\n            powerPreference: \"high-performance\"\n        },\n        resize: {\n            debounce: 0,\n            scroll: false,\n            offsetSize: true\n        },\n        dpr: 1,\n        camera: {\n            fov: 20,\n            near: 0.1,\n            far: 1000,\n            position: [\n                0,\n                0,\n                20\n            ]\n        },\n        style: {\n            height: \"100%\",\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextureMesh, {}, void 0, false, {\n            fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n            lineNumber: 192,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jpamplona/Coding Projects/jpfolio_v2/components/ui/TexturedMesh.tsx\",\n        lineNumber: 169,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = TextureMeshComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextureMeshComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"TextureMesh\");\n$RefreshReg$(_c1, \"TextureMeshComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvVGV4dHVyZWRNZXNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEscUNBQXFDOzs7QUFFWTtBQUNLO0FBQ3ZCO0FBRS9CLE1BQU1LLGNBQWM7O0lBQ2xCLE1BQU1DLE9BQU9MLDZDQUFNQSxDQUFDO0lBRXBCRSxxREFBUUEsQ0FBQ0ksQ0FBQUE7UUFDUCxNQUFNLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxFQUFFLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLEdBQUdMO1FBQzVDLElBQUlELEtBQUtPLE9BQU8sRUFBRTtZQUNmUCxLQUFLTyxPQUFPLENBQVNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNDLEtBQUssR0FBRztnQkFBQ1IsTUFBTVMsQ0FBQyxHQUFHLElBQUk7Z0JBQUtULE1BQU1VLENBQUMsR0FBRyxJQUFJO2FBQUk7WUFDN0ZiLEtBQUtPLE9BQU8sQ0FBU0MsUUFBUSxDQUFDQyxRQUFRLENBQUNLLE1BQU0sQ0FBQ0gsS0FBSyxHQUFHVCxNQUFNYSxjQUFjO1lBQzNFLElBQUlDLElBQUlaLEdBQUdhLFVBQVUsQ0FBQ0MscUJBQXFCO1lBQzFDbEIsS0FBS08sT0FBTyxDQUFTQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ1UsWUFBWSxDQUFDUixLQUFLLEdBQUc7Z0JBQUNLLEVBQUVJLEtBQUs7Z0JBQUVKLEVBQUVLLE1BQU07YUFBQztRQUNsRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNyQjtRQUFLc0IsS0FBS3RCO1FBQU11QixVQUFVO1lBQUM7WUFBRztZQUFHO1NBQUU7UUFBRUMsT0FBTztRQUFHQyxVQUFVO1lBQUM7WUFBRztZQUFHO1NBQUU7OzBCQUNqRSw4REFBQ0M7Z0JBQWNDLE1BQU07b0JBQUM7b0JBQU07aUJBQUs7Ozs7OzswQkFDakMsOERBQUNDO2dCQUNDQyxnQkFBaUI7Z0JBbUhqQkMsY0FBZTtnQkFLZnJCLFVBQVU7b0JBQ1JzQixTQUFTO3dCQUFFcEIsT0FBTztvQkFBSztvQkFDdkJxQixTQUFTO3dCQUFFckIsT0FBTztvQkFBRTtvQkFDcEJzQixVQUFVO3dCQUFFdEIsT0FBTzs0QkFBQyxJQUFJYiwwQ0FBYSxDQUFDLEdBQUcsR0FBRyxHQUFHOzRCQUFJLElBQUlBLDBDQUFhLENBQUMsR0FBRyxHQUFHLEdBQUc7eUJBQUc7b0JBQUM7b0JBQ2xGcUMsT0FBTzt3QkFBRXhCLE9BQU87b0JBQU07b0JBQ3RCeUIsUUFBUTt3QkFBRXpCLE9BQU87b0JBQUk7b0JBQ3JCMEIsTUFBTTt3QkFBRTFCLE9BQU87b0JBQU07b0JBQ3JCMkIsVUFBVTt3QkFBRTNCLE9BQU87b0JBQU07b0JBQ3pCNEIsT0FBTzt3QkFBRTVCLE9BQU87b0JBQUU7b0JBQ2xCRyxRQUFRO3dCQUFFSCxPQUFPO29CQUFFO29CQUNuQkQsU0FBUzt3QkFBRUMsT0FBTzs0QkFBQzs0QkFBRzt5QkFBRTtvQkFBQztvQkFDekJRLGNBQWM7d0JBQUVSLE9BQU87NEJBQUM7NEJBQU07eUJBQUs7b0JBQUM7Z0JBQ3RDO2dCQUNBNkIsV0FBVztnQkFDWEMsb0JBQW9CO2dCQUNwQkMsV0FBVztnQkFFWEMsYUFBWTs7Ozs7Ozs7Ozs7O0FBSXBCO0dBOUpNNUM7O1FBR0pGLGlEQUFRQTs7O0tBSEpFO0FBZ0tOLE1BQU02Qyx1QkFBdUI7SUFDM0IscUJBQ0UsOERBQUNoRCxzREFBTUE7UUFDTFEsSUFBSTtZQUNGeUMsdUJBQXVCO1lBQ3ZCQyxvQkFBb0I7WUFDcEJQLE9BQU87WUFDUFEsV0FBVztZQUNYQyxXQUFXO1lBQ1hDLGlCQUFpQjtRQUNuQjtRQUNBQyxRQUFRO1lBQ05DLFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxZQUFZO1FBQ2Q7UUFDQUMsS0FBSztRQUNMaEQsUUFBUTtZQUNOaUQsS0FBSztZQUNMQyxNQUFNO1lBQ05DLEtBQUs7WUFDTGxDLFVBQVU7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBRztRQUN0QjtRQUNBbUMsT0FBTztZQUFFckMsUUFBUTtZQUFRRCxPQUFPO1FBQU87a0JBRXZDLDRFQUFDckI7Ozs7Ozs7Ozs7QUFHUDtNQTVCTTZDO0FBOEJOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9UZXh0dXJlZE1lc2gudHN4PzEwMDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9UZXh0dXJlTWVzaENvbXBvbmVudC5qc1xuXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5jb25zdCBUZXh0dXJlTWVzaCA9ICgpID0+IHtcbiAgY29uc3QgbWVzaCA9IHVzZVJlZihudWxsKTtcblxuICB1c2VGcmFtZShzdGF0ZSA9PiB7XG4gICAgY29uc3QgeyBjbG9jaywgbW91c2UsIGdsLCBzY2VuZSwgY2FtZXJhIH0gPSBzdGF0ZTtcbiAgICBpZiAobWVzaC5jdXJyZW50KSB7XG4gICAgICAobWVzaC5jdXJyZW50IGFzIGFueSkubWF0ZXJpYWwudW5pZm9ybXMudV9tb3VzZS52YWx1ZSA9IFttb3VzZS54IC8gMiArIDAuNSwgbW91c2UueSAvIDIgKyAwLjVdO1xuICAgICAgKG1lc2guY3VycmVudCBhcyBhbnkpLm1hdGVyaWFsLnVuaWZvcm1zLnVfdGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCk7XG4gICAgICBsZXQgYyA9IGdsLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAobWVzaC5jdXJyZW50IGFzIGFueSkubWF0ZXJpYWwudW5pZm9ybXMudV9yZXNvbHV0aW9uLnZhbHVlID0gW2Mud2lkdGgsIGMuaGVpZ2h0XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1lc2ggcmVmPXttZXNofSBwb3NpdGlvbj17WzAsIDAsIDBdfSBzY2FsZT17MX0gcm90YXRpb249e1swLCAwLCAwXX0+XG4gICAgICA8cGxhbmVHZW9tZXRyeSBhcmdzPXtbMTAyNCwgMTAyNF19IC8+XG4gICAgICA8c2hhZGVyTWF0ZXJpYWxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI9e2BcbiAgICAgICAgICAjaWZkZWYgR0xfRVNcbiAgICAgICAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuICAgICAgICAgICNlbmRpZlxuXG4gICAgICAgICAgdW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcbiAgICAgICAgICB1bmlmb3JtIHZlYzIgdV9tb3VzZTtcbiAgICAgICAgICB1bmlmb3JtIHZlYzQgdV9jb2xvcnNbMl07XG4gICAgICAgICAgdW5pZm9ybSBmbG9hdCB1X3NwZWVkO1xuICAgICAgICAgIHVuaWZvcm0gZmxvYXQgdV90aW1lO1xuICAgICAgICAgIHVuaWZvcm0gZmxvYXQgdV9zY2FsZTsgXG4gICAgICAgICAgdW5pZm9ybSBmbG9hdCBsaWdodDtcbiAgICAgICAgICB1bmlmb3JtIGZsb2F0IHNoYWRvdztcbiAgICAgICAgICB1bmlmb3JtIGZsb2F0IHRpbnQ7XG4gICAgICAgICAgdW5pZm9ybSBmbG9hdCBjb3ZlcmFnZTtcbiAgICAgICAgICB1bmlmb3JtIGZsb2F0IGFscGhhO1xuXG4gICAgICAgICAgY29uc3QgZmxvYXQgY2xvdWRhbHBoYSA9IDIwLjtcbiAgICAgICAgICBjb25zdCBtYXQyIG0gPSBtYXQyKCAxLjYsICAxLjIsIC0xLjIsICAxLjYgKTtcblxuICAgICAgICAgIHZlYzIgaGFzaCggdmVjMiBwICkge1xuICAgICAgICAgICAgcCA9IHZlYzIoZG90KHAsIHZlYzIoMTI3LjEsIDMxMS43KSksIGRvdChwLCB2ZWMyKDI2OS41LCAxODMuMykpKTtcbiAgICAgICAgICAgIHJldHVybiAtMS4wICsgMi4wICogZnJhY3Qoc2luKHApICogNDM3NTguNTQ1MzEyMyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmxvYXQgbm9pc2UoIGluIHZlYzIgcCApIHtcbiAgICAgICAgICAgIGNvbnN0IGZsb2F0IEsxID0gMC4zNjYwMjU0MDQ7IC8vIChzcXJ0KDMpLTEpLzI7XG4gICAgICAgICAgICBjb25zdCBmbG9hdCBLMiA9IDAuMjExMzI0ODY1OyAvLyAoMy1zcXJ0KDMpKS82O1xuICAgICAgICAgICAgdmVjMiBpID0gZmxvb3IocCArIChwLnggKyBwLnkpICogSzEpOyAgXG4gICAgICAgICAgICB2ZWMyIGEgPSBwIC0gaSArIChpLnggKyBpLnkpICogSzI7XG4gICAgICAgICAgICB2ZWMyIG8gPSAoYS54ID4gYS55KSA/IHZlYzIoMS4wLCAwLjApIDogdmVjMigwLjAsIDEuMCk7IC8vdmVjMiBvZiA9IDAuNSArIDAuNSAqIHZlYzIoc2lnbihhLnggLSBhLnkpLCBzaWduKGEueSAtIGEueCkpO1xuICAgICAgICAgICAgdmVjMiBiID0gYSAtIG8gKyBLMjtcbiAgICAgICAgICAgIHZlYzIgYyA9IGEgLSAxLjAgKyAyLjAgKiBLMjtcbiAgICAgICAgICAgIHZlYzMgaCA9IG1heCgwLjUgLSB2ZWMzKGRvdChhLCBhKSwgZG90KGIsIGIpLCBkb3QoYywgYykpLCAwLjApO1xuICAgICAgICAgICAgdmVjMyBuID0gaCAqIGggKiBoICogaCAqIHZlYzMoZG90KGEsIGhhc2goaSArIDAuMCkpLCBkb3QoYiwgaGFzaChpICsgbykpLCBkb3QoYywgaGFzaChpICsgMS4wKSkpO1xuICAgICAgICAgICAgcmV0dXJuIGRvdChuLCB2ZWMzKDcwLjApKTsgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmxvYXQgZmJtKHZlYzIgbikge1xuICAgICAgICAgICAgZmxvYXQgdG90YWwgPSAwLjAsIGFtcGxpdHVkZSA9IDAuMTtcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAgIHRvdGFsICs9IG5vaXNlKG4pICogYW1wbGl0dWRlO1xuICAgICAgICAgICAgICBuID0gbSAqIG47XG4gICAgICAgICAgICAgIGFtcGxpdHVkZSAqPSAwLjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgdmVjMiBwID0gZ2xfRnJhZ0Nvb3JkLnh5IC8gdV9yZXNvbHV0aW9uLnh5O1xuICAgICAgICAgICAgdmVjMiB1diA9IHAgKiB2ZWMyKHVfcmVzb2x1dGlvbi54IC8gdV9yZXNvbHV0aW9uLnksIDEuMCk7ICAgIFxuICAgICAgICAgICAgZmxvYXQgc3BlZWQgPSB1X3NwZWVkICogMC4xO1xuICAgICAgICAgICAgZmxvYXQgdGltZSA9IHVfdGltZSAqIHNwZWVkO1xuICAgICAgICAgICAgZmxvYXQgc2NhbGUgPSAoMS4gLSB1X3NjYWxlKTtcbiAgICAgICAgICAgIGZsb2F0IHEgPSBmYm0odXYgKiBzY2FsZSAqIDAuNSk7XG5cbiAgICAgICAgICAgIGZsb2F0IHIgPSAwLjA7XG4gICAgICAgICAgICB1diAqPSBzY2FsZTtcbiAgICAgICAgICAgIHV2IC09IHEgLSB0aW1lO1xuICAgICAgICAgICAgZmxvYXQgd2VpZ2h0ID0gMC44O1xuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgciArPSBhYnMod2VpZ2h0ICogbm9pc2UodXYpKTtcbiAgICAgICAgICAgICAgdXYgPSBtICogdXYgKyB0aW1lO1xuICAgICAgICAgICAgICB3ZWlnaHQgKj0gMC43O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmbG9hdCBmID0gMC4wO1xuICAgICAgICAgICAgdXYgPSBwICogdmVjMih1X3Jlc29sdXRpb24ueCAvIHVfcmVzb2x1dGlvbi55LCAxLjApO1xuICAgICAgICAgICAgdXYgKj0gc2NhbGU7XG4gICAgICAgICAgICB1diAtPSBxIC0gdGltZTtcbiAgICAgICAgICAgIHdlaWdodCA9IDAuNztcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgIGYgKz0gd2VpZ2h0ICogbm9pc2UodXYpO1xuICAgICAgICAgICAgICB1diA9IG0gKiB1diArIHRpbWU7XG4gICAgICAgICAgICAgIHdlaWdodCAqPSAwLjY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGYgKj0gciArIGY7XG5cbiAgICAgICAgICAgIGZsb2F0IGMgPSAwLjA7XG4gICAgICAgICAgICB0aW1lID0gdV90aW1lICogc3BlZWQgKiAyLjA7XG4gICAgICAgICAgICB1diA9IHAgKiB2ZWMyKHVfcmVzb2x1dGlvbi54IC8gdV9yZXNvbHV0aW9uLnksIDEuMCk7XG4gICAgICAgICAgICB1diAqPSBzY2FsZSAqIDIuMDtcbiAgICAgICAgICAgIHV2IC09IHEgLSB0aW1lO1xuICAgICAgICAgICAgd2VpZ2h0ID0gMC40O1xuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgICAgYyArPSB3ZWlnaHQgKiBub2lzZSh1dik7XG4gICAgICAgICAgICAgIHV2ID0gbSAqIHV2ICsgdGltZTtcbiAgICAgICAgICAgICAgd2VpZ2h0ICo9IDAuNjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmxvYXQgYzEgPSAwLjA7XG4gICAgICAgICAgICB0aW1lID0gdV90aW1lICogc3BlZWQgKiAzLjA7XG4gICAgICAgICAgICB1diA9IHAgKiB2ZWMyKHVfcmVzb2x1dGlvbi54IC8gdV9yZXNvbHV0aW9uLnksIDEuMCk7XG4gICAgICAgICAgICB1diAqPSBzY2FsZSAqIDMuMDtcbiAgICAgICAgICAgIHV2IC09IHEgLSB0aW1lO1xuICAgICAgICAgICAgd2VpZ2h0ID0gMC40O1xuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgICAgYzEgKz0gYWJzKHdlaWdodCAqIG5vaXNlKHV2KSk7XG4gICAgICAgICAgICAgIHV2ID0gbSAqIHV2ICsgdGltZTtcbiAgICAgICAgICAgICAgd2VpZ2h0ICo9IDAuNjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYyArPSBjMTtcblxuICAgICAgICAgICAgdmVjNCBza3ljb2xvdXIgPSBtaXgodV9jb2xvcnNbMV0sIHVfY29sb3JzWzBdLCBwLnkpO1xuICAgICAgICAgICAgdmVjNCBjbG91ZGNvbG91ciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgMS4wKSAqIGNsYW1wKCgoMS4wIC0gc2hhZG93KSArIGxpZ2h0ICogYyksIDAuMCwgMS4wKTtcblxuICAgICAgICAgICAgZiA9IGNvdmVyYWdlICsgY2xvdWRhbHBoYSAqIGFscGhhICogZiAqIHI7XG5cbiAgICAgICAgICAgIHZlYzQgcmVzdWx0ID0gbWl4KHNreWNvbG91ciwgY2xhbXAodGludCAqIHNreWNvbG91ciArIGNsb3VkY29sb3VyLCAwLjAsIDEuMCksIGNsYW1wKGYgKyBjLCAwLjAsIDEuMCkpO1xuXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSByZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICB2ZXJ0ZXhTaGFkZXI9e2BcbiAgICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgdW5pZm9ybXM9e3tcbiAgICAgICAgICB1X3NwZWVkOiB7IHZhbHVlOiAwLjA1IH0sXG4gICAgICAgICAgdV9zY2FsZTogeyB2YWx1ZTogMCB9LFxuICAgICAgICAgIHVfY29sb3JzOiB7IHZhbHVlOiBbbmV3IFRIUkVFLlZlY3RvcjQoMSwgMSwgMSwgMCksIG5ldyBUSFJFRS5WZWN0b3I0KDAsIDAsIDAsIDApXSB9LFxuICAgICAgICAgIGxpZ2h0OiB7IHZhbHVlOiAwLjE1MSB9LFxuICAgICAgICAgIHNoYWRvdzogeyB2YWx1ZTogMC41IH0sXG4gICAgICAgICAgdGludDogeyB2YWx1ZTogMC41OTYgfSxcbiAgICAgICAgICBjb3ZlcmFnZTogeyB2YWx1ZTogMC4yNzYgfSxcbiAgICAgICAgICBhbHBoYTogeyB2YWx1ZTogMSB9LFxuICAgICAgICAgIHVfdGltZTogeyB2YWx1ZTogMCB9LFxuICAgICAgICAgIHVfbW91c2U6IHsgdmFsdWU6IFswLCAwXSB9LFxuICAgICAgICAgIHVfcmVzb2x1dGlvbjogeyB2YWx1ZTogWzEwMjQsIDEwMjRdIH1cbiAgICAgICAgfX1cbiAgICAgICAgd2lyZWZyYW1lPXtmYWxzZX1cbiAgICAgICAgd2lyZWZyYW1lTGluZXdpZHRoPXswfVxuICAgICAgICBkaXRoZXJpbmc9e2ZhbHNlfVxuXG4gICAgICAgIGdsc2xWZXJzaW9uPVwiMTAwXCJcbiAgICAgIC8+XG4gICAgPC9tZXNoPlxuICApO1xufTtcblxuY29uc3QgVGV4dHVyZU1lc2hDb21wb25lbnQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENhbnZhc1xuICAgICAgZ2w9e3tcbiAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlLFxuICAgICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICBwcmVjaXNpb246ICdoaWdocCcsXG4gICAgICAgIHBvd2VyUHJlZmVyZW5jZTogJ2hpZ2gtcGVyZm9ybWFuY2UnXG4gICAgICB9fVxuICAgICAgcmVzaXplPXt7XG4gICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgICBvZmZzZXRTaXplOiB0cnVlXG4gICAgICB9fVxuICAgICAgZHByPXsxfVxuICAgICAgY2FtZXJhPXt7XG4gICAgICAgIGZvdjogMjAsXG4gICAgICAgIG5lYXI6IDAuMSxcbiAgICAgICAgZmFyOiAxMDAwLFxuICAgICAgICBwb3NpdGlvbjogWzAsIDAsIDIwXVxuICAgICAgfX1cbiAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgPlxuICAgICAgPFRleHR1cmVNZXNoIC8+XG4gICAgPC9DYW52YXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0dXJlTWVzaENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIkNhbnZhcyIsInVzZUZyYW1lIiwiVEhSRUUiLCJUZXh0dXJlTWVzaCIsIm1lc2giLCJzdGF0ZSIsImNsb2NrIiwibW91c2UiLCJnbCIsInNjZW5lIiwiY2FtZXJhIiwiY3VycmVudCIsIm1hdGVyaWFsIiwidW5pZm9ybXMiLCJ1X21vdXNlIiwidmFsdWUiLCJ4IiwieSIsInVfdGltZSIsImdldEVsYXBzZWRUaW1lIiwiYyIsImRvbUVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1X3Jlc29sdXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsInBvc2l0aW9uIiwic2NhbGUiLCJyb3RhdGlvbiIsInBsYW5lR2VvbWV0cnkiLCJhcmdzIiwic2hhZGVyTWF0ZXJpYWwiLCJmcmFnbWVudFNoYWRlciIsInZlcnRleFNoYWRlciIsInVfc3BlZWQiLCJ1X3NjYWxlIiwidV9jb2xvcnMiLCJWZWN0b3I0IiwibGlnaHQiLCJzaGFkb3ciLCJ0aW50IiwiY292ZXJhZ2UiLCJhbHBoYSIsIndpcmVmcmFtZSIsIndpcmVmcmFtZUxpbmV3aWR0aCIsImRpdGhlcmluZyIsImdsc2xWZXJzaW9uIiwiVGV4dHVyZU1lc2hDb21wb25lbnQiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJwcmVtdWx0aXBsaWVkQWxwaGEiLCJhbnRpYWxpYXMiLCJwcmVjaXNpb24iLCJwb3dlclByZWZlcmVuY2UiLCJyZXNpemUiLCJkZWJvdW5jZSIsInNjcm9sbCIsIm9mZnNldFNpemUiLCJkcHIiLCJmb3YiLCJuZWFyIiwiZmFyIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/TexturedMesh.tsx\n"));

/***/ })

});