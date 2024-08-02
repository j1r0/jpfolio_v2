"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/suspend-react";
exports.ids = ["vendor-chunks/suspend-react"];
exports.modules = {

/***/ "(ssr)/./node_modules/suspend-react/index.js":
/*!*********************************************!*\
  !*** ./node_modules/suspend-react/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clear: () => (/* binding */ clear),\n/* harmony export */   peek: () => (/* binding */ peek),\n/* harmony export */   preload: () => (/* binding */ preload),\n/* harmony export */   suspend: () => (/* binding */ suspend)\n/* harmony export */ });\nconst isPromise = promise => typeof promise === 'object' && typeof promise.then === 'function';\n\nconst globalCache = [];\n\nfunction shallowEqualArrays(arrA, arrB, equal = (a, b) => a === b) {\n  if (arrA === arrB) return true;\n  if (!arrA || !arrB) return false;\n  const len = arrA.length;\n  if (arrB.length !== len) return false;\n\n  for (let i = 0; i < len; i++) if (!equal(arrA[i], arrB[i])) return false;\n\n  return true;\n}\n\nfunction query(fn, keys = null, preload = false, config = {}) {\n  // If no keys were given, the function is the key\n  if (keys === null) keys = [fn];\n\n  for (const entry of globalCache) {\n    // Find a match\n    if (shallowEqualArrays(keys, entry.keys, entry.equal)) {\n      // If we're pre-loading and the element is present, just return\n      if (preload) return undefined; // If an error occurred, throw\n\n      if (Object.prototype.hasOwnProperty.call(entry, 'error')) throw entry.error; // If a response was successful, return\n\n      if (Object.prototype.hasOwnProperty.call(entry, 'response')) {\n        if (config.lifespan && config.lifespan > 0) {\n          if (entry.timeout) clearTimeout(entry.timeout);\n          entry.timeout = setTimeout(entry.remove, config.lifespan);\n        }\n\n        return entry.response;\n      } // If the promise is still unresolved, throw\n\n\n      if (!preload) throw entry.promise;\n    }\n  } // The request is new or has changed.\n\n\n  const entry = {\n    keys,\n    equal: config.equal,\n    remove: () => {\n      const index = globalCache.indexOf(entry);\n      if (index !== -1) globalCache.splice(index, 1);\n    },\n    promise: // Execute the promise\n    (isPromise(fn) ? fn : fn(...keys) // When it resolves, store its value\n    ).then(response => {\n      entry.response = response; // Remove the entry in time if a lifespan was given\n\n      if (config.lifespan && config.lifespan > 0) {\n        entry.timeout = setTimeout(entry.remove, config.lifespan);\n      }\n    }) // Store caught errors, they will be thrown in the render-phase to bubble into an error-bound\n    .catch(error => entry.error = error)\n  }; // Register the entry\n\n  globalCache.push(entry); // And throw the promise, this yields control back to React\n\n  if (!preload) throw entry.promise;\n  return undefined;\n}\n\nconst suspend = (fn, keys, config) => query(fn, keys, false, config);\n\nconst preload = (fn, keys, config) => void query(fn, keys, true, config);\n\nconst peek = keys => {\n  var _globalCache$find;\n\n  return (_globalCache$find = globalCache.find(entry => shallowEqualArrays(keys, entry.keys, entry.equal))) == null ? void 0 : _globalCache$find.response;\n};\n\nconst clear = keys => {\n  if (keys === undefined || keys.length === 0) globalCache.splice(0, globalCache.length);else {\n    const entry = globalCache.find(entry => shallowEqualArrays(keys, entry.keys, entry.equal));\n    if (entry) entry.remove();\n  }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3VzcGVuZC1yZWFjdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUzs7QUFFM0I7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckMsbUZBQW1GOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7O0FBRUwsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUZBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBOztBQUV5QyIsInNvdXJjZXMiOlsid2VicGFjazovL2ppcm9mb2xpby8uL25vZGVfbW9kdWxlcy9zdXNwZW5kLXJlYWN0L2luZGV4LmpzP2JlZWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXNQcm9taXNlID0gcHJvbWlzZSA9PiB0eXBlb2YgcHJvbWlzZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJztcblxuY29uc3QgZ2xvYmFsQ2FjaGUgPSBbXTtcblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsQXJyYXlzKGFyckEsIGFyckIsIGVxdWFsID0gKGEsIGIpID0+IGEgPT09IGIpIHtcbiAgaWYgKGFyckEgPT09IGFyckIpIHJldHVybiB0cnVlO1xuICBpZiAoIWFyckEgfHwgIWFyckIpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgbGVuID0gYXJyQS5sZW5ndGg7XG4gIGlmIChhcnJCLmxlbmd0aCAhPT0gbGVuKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykgaWYgKCFlcXVhbChhcnJBW2ldLCBhcnJCW2ldKSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBxdWVyeShmbiwga2V5cyA9IG51bGwsIHByZWxvYWQgPSBmYWxzZSwgY29uZmlnID0ge30pIHtcbiAgLy8gSWYgbm8ga2V5cyB3ZXJlIGdpdmVuLCB0aGUgZnVuY3Rpb24gaXMgdGhlIGtleVxuICBpZiAoa2V5cyA9PT0gbnVsbCkga2V5cyA9IFtmbl07XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBnbG9iYWxDYWNoZSkge1xuICAgIC8vIEZpbmQgYSBtYXRjaFxuICAgIGlmIChzaGFsbG93RXF1YWxBcnJheXMoa2V5cywgZW50cnkua2V5cywgZW50cnkuZXF1YWwpKSB7XG4gICAgICAvLyBJZiB3ZSdyZSBwcmUtbG9hZGluZyBhbmQgdGhlIGVsZW1lbnQgaXMgcHJlc2VudCwganVzdCByZXR1cm5cbiAgICAgIGlmIChwcmVsb2FkKSByZXR1cm4gdW5kZWZpbmVkOyAvLyBJZiBhbiBlcnJvciBvY2N1cnJlZCwgdGhyb3dcblxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlbnRyeSwgJ2Vycm9yJykpIHRocm93IGVudHJ5LmVycm9yOyAvLyBJZiBhIHJlc3BvbnNlIHdhcyBzdWNjZXNzZnVsLCByZXR1cm5cblxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlbnRyeSwgJ3Jlc3BvbnNlJykpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5saWZlc3BhbiAmJiBjb25maWcubGlmZXNwYW4gPiAwKSB7XG4gICAgICAgICAgaWYgKGVudHJ5LnRpbWVvdXQpIGNsZWFyVGltZW91dChlbnRyeS50aW1lb3V0KTtcbiAgICAgICAgICBlbnRyeS50aW1lb3V0ID0gc2V0VGltZW91dChlbnRyeS5yZW1vdmUsIGNvbmZpZy5saWZlc3Bhbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZW50cnkucmVzcG9uc2U7XG4gICAgICB9IC8vIElmIHRoZSBwcm9taXNlIGlzIHN0aWxsIHVucmVzb2x2ZWQsIHRocm93XG5cblxuICAgICAgaWYgKCFwcmVsb2FkKSB0aHJvdyBlbnRyeS5wcm9taXNlO1xuICAgIH1cbiAgfSAvLyBUaGUgcmVxdWVzdCBpcyBuZXcgb3IgaGFzIGNoYW5nZWQuXG5cblxuICBjb25zdCBlbnRyeSA9IHtcbiAgICBrZXlzLFxuICAgIGVxdWFsOiBjb25maWcuZXF1YWwsXG4gICAgcmVtb3ZlOiAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGdsb2JhbENhY2hlLmluZGV4T2YoZW50cnkpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkgZ2xvYmFsQ2FjaGUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9LFxuICAgIHByb21pc2U6IC8vIEV4ZWN1dGUgdGhlIHByb21pc2VcbiAgICAoaXNQcm9taXNlKGZuKSA/IGZuIDogZm4oLi4ua2V5cykgLy8gV2hlbiBpdCByZXNvbHZlcywgc3RvcmUgaXRzIHZhbHVlXG4gICAgKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGVudHJ5LnJlc3BvbnNlID0gcmVzcG9uc2U7IC8vIFJlbW92ZSB0aGUgZW50cnkgaW4gdGltZSBpZiBhIGxpZmVzcGFuIHdhcyBnaXZlblxuXG4gICAgICBpZiAoY29uZmlnLmxpZmVzcGFuICYmIGNvbmZpZy5saWZlc3BhbiA+IDApIHtcbiAgICAgICAgZW50cnkudGltZW91dCA9IHNldFRpbWVvdXQoZW50cnkucmVtb3ZlLCBjb25maWcubGlmZXNwYW4pO1xuICAgICAgfVxuICAgIH0pIC8vIFN0b3JlIGNhdWdodCBlcnJvcnMsIHRoZXkgd2lsbCBiZSB0aHJvd24gaW4gdGhlIHJlbmRlci1waGFzZSB0byBidWJibGUgaW50byBhbiBlcnJvci1ib3VuZFxuICAgIC5jYXRjaChlcnJvciA9PiBlbnRyeS5lcnJvciA9IGVycm9yKVxuICB9OyAvLyBSZWdpc3RlciB0aGUgZW50cnlcblxuICBnbG9iYWxDYWNoZS5wdXNoKGVudHJ5KTsgLy8gQW5kIHRocm93IHRoZSBwcm9taXNlLCB0aGlzIHlpZWxkcyBjb250cm9sIGJhY2sgdG8gUmVhY3RcblxuICBpZiAoIXByZWxvYWQpIHRocm93IGVudHJ5LnByb21pc2U7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IHN1c3BlbmQgPSAoZm4sIGtleXMsIGNvbmZpZykgPT4gcXVlcnkoZm4sIGtleXMsIGZhbHNlLCBjb25maWcpO1xuXG5jb25zdCBwcmVsb2FkID0gKGZuLCBrZXlzLCBjb25maWcpID0+IHZvaWQgcXVlcnkoZm4sIGtleXMsIHRydWUsIGNvbmZpZyk7XG5cbmNvbnN0IHBlZWsgPSBrZXlzID0+IHtcbiAgdmFyIF9nbG9iYWxDYWNoZSRmaW5kO1xuXG4gIHJldHVybiAoX2dsb2JhbENhY2hlJGZpbmQgPSBnbG9iYWxDYWNoZS5maW5kKGVudHJ5ID0+IHNoYWxsb3dFcXVhbEFycmF5cyhrZXlzLCBlbnRyeS5rZXlzLCBlbnRyeS5lcXVhbCkpKSA9PSBudWxsID8gdm9pZCAwIDogX2dsb2JhbENhY2hlJGZpbmQucmVzcG9uc2U7XG59O1xuXG5jb25zdCBjbGVhciA9IGtleXMgPT4ge1xuICBpZiAoa2V5cyA9PT0gdW5kZWZpbmVkIHx8IGtleXMubGVuZ3RoID09PSAwKSBnbG9iYWxDYWNoZS5zcGxpY2UoMCwgZ2xvYmFsQ2FjaGUubGVuZ3RoKTtlbHNlIHtcbiAgICBjb25zdCBlbnRyeSA9IGdsb2JhbENhY2hlLmZpbmQoZW50cnkgPT4gc2hhbGxvd0VxdWFsQXJyYXlzKGtleXMsIGVudHJ5LmtleXMsIGVudHJ5LmVxdWFsKSk7XG4gICAgaWYgKGVudHJ5KSBlbnRyeS5yZW1vdmUoKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgY2xlYXIsIHBlZWssIHByZWxvYWQsIHN1c3BlbmQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/suspend-react/index.js\n");

/***/ })

};
;