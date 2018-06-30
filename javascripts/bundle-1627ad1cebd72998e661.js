webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(73),
    isObjectLike = __webpack_require__(59);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(100);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _captialize = __webpack_require__(696);

Object.defineProperty(exports, 'captialize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_captialize).default;
  }
});

var _clamp = __webpack_require__(697);

Object.defineProperty(exports, 'clamp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_clamp).default;
  }
});

var _distanceTo = __webpack_require__(698);

Object.defineProperty(exports, 'distanceTo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_distanceTo).default;
  }
});

var _isDefined = __webpack_require__(699);

Object.defineProperty(exports, 'isDefined', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isDefined).default;
  }
});

var _isNumber = __webpack_require__(700);

Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNumber).default;
  }
});

var _isObject = __webpack_require__(701);

Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isObject).default;
  }
});

var _length = __webpack_require__(702);

Object.defineProperty(exports, 'length', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_length).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports['default'] = proxyReactComponents;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactProxy = __webpack_require__(548);

var _globalWindow = __webpack_require__(652);

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var componentProxies = undefined;
if (_globalWindow2['default'].__reactComponentProxies) {
  componentProxies = _globalWindow2['default'].__reactComponentProxies;
} else {
  componentProxies = {};
  Object.defineProperty(_globalWindow2['default'], '__reactComponentProxies', {
    configurable: true,
    enumerable: false,
    writable: false,
    value: componentProxies
  });
}

function proxyReactComponents(_ref) {
  var filename = _ref.filename;
  var components = _ref.components;
  var imports = _ref.imports;
  var locals = _ref.locals;

  var _imports = _slicedToArray(imports, 1);

  var React = _imports[0];

  var _locals = _slicedToArray(locals, 1);

  var hot = _locals[0].hot;

  if (!React.Component) {
    throw new Error('imports[0] for react-transform-hmr does not look like React.');
  }

  if (!hot || typeof hot.accept !== 'function') {
    throw new Error('locals[0] does not appear to be a `module` object with Hot Module ' + 'replacement API enabled. You should disable react-transform-hmr in ' + 'production by using `env` section in Babel configuration. See the ' + 'example in README: https://github.com/gaearon/react-transform-hmr');
  }

  if (Object.keys(components).some(function (key) {
    return !components[key].isInFunction;
  })) {
    hot.accept(function (err) {
      if (err) {
        console.warn('[React Transform HMR] There was an error updating ' + filename + ':');
        console.error(err);
      }
    });
  }

  var forceUpdate = (0, _reactProxy.getForceUpdate)(React);

  return function wrapWithProxy(ReactClass, uniqueId) {
    var _components$uniqueId = components[uniqueId];
    var _components$uniqueId$isInFunction = _components$uniqueId.isInFunction;
    var isInFunction = _components$uniqueId$isInFunction === undefined ? false : _components$uniqueId$isInFunction;
    var _components$uniqueId$displayName = _components$uniqueId.displayName;
    var displayName = _components$uniqueId$displayName === undefined ? uniqueId : _components$uniqueId$displayName;

    if (isInFunction) {
      return ReactClass;
    }

    var globalUniqueId = filename + '$' + uniqueId;
    if (componentProxies[globalUniqueId]) {
      (function () {
        console.info('[React Transform HMR] Patching ' + displayName);
        var instances = componentProxies[globalUniqueId].update(ReactClass);
        setTimeout(function () {
          return instances.forEach(forceUpdate);
        });
      })();
    } else {
      componentProxies[globalUniqueId] = (0, _reactProxy.createProxy)(ReactClass);
    }

    return componentProxies[globalUniqueId].get();
  };
}

module.exports = exports['default'];

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(37),
    isSymbol = __webpack_require__(100);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 137:
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webname = exports.Height = exports.Width = exports.Color = exports.languages = exports.userLang = exports.axios = undefined;
exports.get_params_map = get_params_map;
exports.get_params = get_params;
exports.formatedCurrentTime = formatedCurrentTime;

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(359);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//---网络库---
var HttpTimeout = 10000; //毫秒

var headers = {
  Cookie: "access_token=9QrDryFlZhP9cNN5MnPUUMcwy%2F3QF549FtVYXCM5eqY%3D;"
};

var instance = _axios2.default.create({ timeout: HttpTimeout });
//instance.defaults.withCredentials = true
var axios = exports.axios = instance;
//---网络库end---

var userLang = exports.userLang = navigator.language || navigator.userLanguage;

var languages = exports.languages = [{
  "-id": "0",
  "-lang_code": "ar",
  "-lang_original": "العربية",
  "-lang_translated": "阿拉伯语",
  "-cantran": "true",
  "-vss_id": ".ar"
}, {
  "-id": "2",
  "-lang_code": "az",
  "-lang_original": "Azərbaycan",
  "-lang_translated": "阿塞拜疆语",
  "-cantran": "true",
  "-vss_id": ".az"
}, {
  "-id": "3",
  "-lang_code": "bg",
  "-lang_original": "Български",
  "-lang_translated": "保加利亚语",
  "-cantran": "true",
  "-vss_id": ".bg"
}, {
  "-id": "16",
  "-lang_code": "is",
  "-lang_original": "Íslenska",
  "-lang_translated": "冰岛语",
  "-cantran": "true",
  "-vss_id": ".is"
}, {
  "-id": "22",
  "-lang_code": "pl",
  "-lang_original": "Polski",
  "-lang_translated": "波兰语",
  "-cantran": "true",
  "-vss_id": ".pl"
}, {
  "-id": "12",
  "-lang_code": "fa",
  "-lang_original": "فارسی",
  "-lang_translated": "波斯语",
  "-cantran": "true",
  "-vss_id": ".fa"
}, {
  "-id": "7",
  "-lang_code": "da",
  "-lang_original": "Dansk",
  "-lang_translated": "丹麦语",
  "-cantran": "true",
  "-vss_id": ".da"
}, {
  "-id": "8",
  "-lang_code": "de",
  "-lang_original": "Deutsch",
  "-lang_translated": "德语",
  "-cantran": "true",
  "-vss_id": ".de"
}, {
  "-id": "26",
  "-lang_code": "ru",
  "-lang_original": "Русский",
  "-lang_translated": "俄语",
  "-cantran": "true",
  "-vss_id": ".ru"
}, {
  "-id": "13",
  "-lang_code": "fr",
  "-lang_original": "Français",
  "-lang_translated": "法语",
  "-cantran": "true",
  "-vss_id": ".fr"
}, {
  "-id": "19",
  "-lang_code": "ko",
  "-lang_original": "한국어",
  "-lang_translated": "韩语",
  "-cantran": "true",
  "-vss_id": ".ko"
}, {
  "-id": "20",
  "-lang_code": "nl",
  "-lang_original": "Nederlands",
  "-lang_translated": "荷兰语",
  "-cantran": "true",
  "-vss_id": ".nl"
}, {
  "-id": "5",
  "-lang_code": "ca",
  "-lang_original": "Català",
  "-lang_translated": "加泰罗尼亚语",
  "-cantran": "true",
  "-vss_id": ".ca"
}, {
  "-id": "6",
  "-lang_code": "cs",
  "-lang_original": "Čeština",
  "-lang_translated": "捷克语",
  "-cantran": "true",
  "-vss_id": ".cs"
}, {
  "-id": "25",
  "-lang_code": "ro",
  "-lang_original": "Română",
  "-lang_translated": "罗马尼亚语",
  "-cantran": "true",
  "-vss_id": ".ro"
}, {
  "-id": "4",
  "-lang_code": "bn",
  "-lang_original": "বাংলা",
  "-lang_translated": "孟加拉语",
  "-cantran": "true",
  "-vss_id": ".bn"
}, {
  "-id": "21",
  "-lang_code": "no",
  "-lang_original": "Norsk",
  "-lang_translated": "挪威语",
  "-cantran": "true",
  "-vss_id": ".no"
}, {
  "-id": "24",
  "-lang_code": "pt",
  "-lang_original": "Português",
  "-lang_translated": "葡萄牙语",
  "-cantran": "true",
  "-vss_id": ".pt"
}, {
  "-id": "23",
  "-lang_code": "pt-BR",
  "-lang_original": "Português (Brasil)",
  "-lang_translated": "葡萄牙语（巴西）",
  "-cantran": "true",
  "-vss_id": ".pt-BR"
}, {
  "-id": "18",
  "-lang_code": "ja",
  "-lang_original": "日本語",
  "-lang_translated": "日语",
  "-cantran": "true",
  "-vss_id": ".ja"
}, {
  "-id": "29",
  "-lang_code": "sv",
  "-lang_original": "Svenska",
  "-lang_translated": "瑞典语",
  "-cantran": "true",
  "-vss_id": ".sv"
}, {
  "-id": "28",
  "-lang_code": "sr",
  "-lang_original": "Српски",
  "-lang_translated": "塞尔维亚语",
  "-cantran": "true",
  "-vss_id": ".sr"
}, {
  "-id": "27",
  "-lang_code": "sl",
  "-lang_original": "Slovenščina",
  "-lang_translated": "斯洛文尼亚语",
  "-cantran": "true",
  "-vss_id": ".sl"
}, {
  "-id": "30",
  "-lang_code": "tr",
  "-lang_original": "Türkçe",
  "-lang_translated": "土耳其语",
  "-cantran": "true",
  "-vss_id": ".tr"
}, {
  "-id": "31",
  "-lang_code": "uk",
  "-lang_original": "Українська",
  "-lang_translated": "乌克兰语",
  "-cantran": "true",
  "-vss_id": ".uk"
}, {
  "-id": "11",
  "-lang_code": "es",
  "-lang_original": "Español",
  "-lang_translated": "西班牙语",
  "-cantran": "true",
  "-vss_id": ".es"
}, {
  "-id": "9",
  "-lang_code": "el",
  "-lang_original": "Ελληνικά",
  "-lang_translated": "希腊语",
  "-cantran": "true",
  "-vss_id": ".el"
}, {
  "-id": "14",
  "-lang_code": "hy",
  "-lang_original": "Հայերեն",
  "-lang_translated": "亚美尼亚语",
  "-cantran": "true",
  "-vss_id": ".hy"
}, {
  "-id": "17",
  "-lang_code": "it",
  "-lang_original": "Italiano",
  "-lang_translated": "意大利语",
  "-cantran": "true",
  "-vss_id": ".it"
}, {
  "-id": "15",
  "-lang_code": "id",
  "-lang_original": "Indonesia",
  "-lang_translated": "印度尼西亚语",
  "-cantran": "true",
  "-vss_id": ".id"
}, {
  "-id": "1",
  "-kind": "asr",
  "-lang_code": "en",
  "-lang_original": "English",
  "-lang_translated": "英语",
  "-cantran": "true",
  "-vss_id": "a.en"
}, {
  "-id": "32",
  "-lang_code": "vi",
  "-lang_original": "Tiếng Việt",
  "-lang_translated": "越南语",
  "-cantran": "true",
  "-vss_id": ".vi"
}, {
  "-id": "34",
  "-lang_code": "zh-Hant",
  "-lang_original": "中文（繁體）",
  "-lang_translated": "中文（繁体）",
  "-lang_default": "true",
  "-cantran": "true",
  "-vss_id": ".zh-Hant"
}, {
  "-id": "33",
  "-lang_code": "zh-CN",
  "-lang_original": "中文（简体）",
  "-lang_translated": "中文（简体）",
  "-cantran": "true",
  "-vss_id": ".zh-CN"
}];

function get_params_map() {
  var ret = {};
  var params_str = window.location.search.substring(1);
  if (params_str) {
    var param_strs = params_str.split("&");
    for (var i = 0; i < param_strs.length; i++) {
      var param_ = param_strs[i];
      var pair = param_.split("=");
      if (pair && pair.length == 2) {
        ret[pair[0]] = pair[1];
      }
    }
  }
  return ret;
}

function get_params(name) {
  var ret = get_params_map();
  return ret[name];
}

var Color = exports.Color = {
  green: "5eca59",
  white1: "e5e5e5",
  black: "black"
};

var Width = exports.Width = window.innerWidth;
var Height = exports.Height = window.innerHeight;

var webname = exports.webname = "";
function formatedCurrentTime(seconds) {
  var miniseconds = seconds * 1000;
  var str = (0, _moment2.default)(miniseconds).format("mm:ss");
  return str;
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * The decorator may be used on classes or methods
 * ```
 * @autobind
 * class FullBound {}
 *
 * class PartBound {
 *   @autobind
 *   method () {}
 * }
 * ```
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = autobind;

function autobind() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    return boundClass.apply(undefined, args);
  } else {
    return boundMethod.apply(undefined, args);
  }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = undefined;
  // Use Reflect if exists
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  var definingProperty = false;

  return {
    configurable: true,
    get: function get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      definingProperty = false;
      return boundFn;
    }
  };
}
module.exports = exports['default'];


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = supportsProtoAssignment;
var x = {};
var y = { supports: true };
try {
  x.__proto__ = y;
} catch (err) {}

function supportsProtoAssignment() {
  return x.supports || false;
};

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(552),
    baseMatchesProperty = __webpack_require__(611),
    identity = __webpack_require__(137),
    isArray = __webpack_require__(37),
    property = __webpack_require__(621);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(75);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 226:
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(228),
    toKey = __webpack_require__(101);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(37),
    isKey = __webpack_require__(136),
    stringToPath = __webpack_require__(613),
    toString = __webpack_require__(616);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 229:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 230:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(232),
    eq = __webpack_require__(96);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(233);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(48);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(137),
    overRest = __webpack_require__(632),
    setToString = __webpack_require__(634);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Label;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @param {Object} props
 * @param {InputRangeClassNames} props.classNames
 * @param {Function} props.formatLabel
 * @param {string} props.type
 */
function Label(props) {
  var labelValue = props.formatLabel ? props.formatLabel(props.children, props.type) : props.children;

  return _react2.default.createElement(
    'span',
    { className: props.classNames[props.type + 'Label'] },
    _react2.default.createElement(
      'span',
      { className: props.classNames.labelContainer },
      labelValue
    )
  );
}

/**
 * @type {Object}
 * @property {Function} children
 * @property {Function} classNames
 * @property {Function} formatLabel
 * @property {Function} type
 */
Label.propTypes = {
  children: _propTypes2.default.node.isRequired,
  classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
  formatLabel: _propTypes2.default.func,
  type: _propTypes2.default.string.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=label.js.map

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactRedux = __webpack_require__(204);

var _redux = __webpack_require__(128);

var _reducer = __webpack_require__(545);

var _reducer2 = _interopRequireDefault(_reducer);

var _App = __webpack_require__(547);

var _App2 = _interopRequireDefault(_App);

var _reduxLogger = __webpack_require__(712);

var _reduxThunk = __webpack_require__(713);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger.createLogger)();

var store = (0, _redux.createStore)(_reducer2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware));

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconBase = function IconBase(_ref, _ref2) {
  var children = _ref.children;
  var color = _ref.color;
  var size = _ref.size;
  var style = _ref.style;
  var width = _ref.width;
  var height = _ref.height;

  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var _ref2$reactIconBase = _ref2.reactIconBase;
  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;

  var computedSize = size || reactIconBase.size || '1em';
  return _react2.default.createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};

IconBase.contextTypes = {
  reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
};

exports.default = IconBase;
module.exports = exports['default'];

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(546);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
                                                                                                                                                                                                     * (previousState, action) => newState
                                                                                                                                                                                                     */

var initialState = {
    visibilityFilter: _actions.VisibilityFilters.SHOW_ALL,
    todos: []
};

function todos_() {
    var todos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _actions.ADD_TODO:
            return [].concat(_toConsumableArray(todos), [{ text: action.text, completed: false }]);

        case _actions.TOGGLE_TODO:
            return todos.map(function (todo, index) {
                if (index === action.index) {
                    return Object.assign({}, todo, { completed: !todo.completed });
                }

                return todo;
            });

        default:
            return todos;

    }
}

function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _actions.VisibilityFilters.SHOW_ALL;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _actions.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;

    }
}
function posts(state) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        //case INCREMENT_COUNTER:
        //    console.log(INCREMENT_COUNTER,"111111")
        //    return action.posts
        case _actions.RECEIVE_POSTS:
            console.log(_actions.RECEIVE_POSTS, "111111");
            return action.posts;
        default:
            return state;

    }
}

/**
 * 合成一个reducer
 */

function todoApp() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos_(state.todos, action),
        ppp: posts(state.posts, action)
    };
}

exports.default = todoApp;

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addTodo = addTodo;
exports.toggleTodo = toggleTodo;
exports.setVisibilityFilter = setVisibilityFilter;
exports.incrementAsync = incrementAsync;
exports.selectSubreddit = selectSubreddit;
exports.invalidateSubreddit = invalidateSubreddit;
exports.fetchPostsIfNeeded = fetchPostsIfNeeded;
/*
 * action类型
 */

var ADD_TODO = exports.ADD_TODO = "ADD_TODO";
var TOGGLE_TODO = exports.TOGGLE_TODO = "TOGGLE_TODO";
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/**
 * 其他常量
 */

var VisibilityFilters = exports.VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'

    /**
     * Action 函数
     */

};function addTodo(text) {
    return { type: ADD_TODO, text: text };
}
function toggleTodo(index) {
    return { type: TOGGLE_TODO, index: index };
}
function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter: filter };
}

//async
var INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
    return {
        type: INCREMENT_COUNTER
    };
}

function incrementAsync() {
    return function (dispatch) {
        setTimeout(function () {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(increment());
        }, 1000);
    };
}

var REQUEST_POSTS = exports.REQUEST_POSTS = 'REQUEST_POSTS';
var RECEIVE_POSTS = exports.RECEIVE_POSTS = 'RECEIVE_POSTS';
var SELECT_SUBREDDIT = exports.SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
var INVALIDATE_SUBREDDIT = exports.INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit: subreddit
    };
}

function invalidateSubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit: subreddit
    };
}

function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit: subreddit
    };
}

function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit: subreddit,
        posts: json.data.children.map(function (child) {
            return child.data;
        }),
        receivedAt: Date.now()
    };
}

function fetchPosts(subreddit) {
    return function (dispatch) {
        dispatch(requestPosts(subreddit));
        return fetch("https://www.reddit.com/r/" + subreddit + ".json").then(function (response) {
            return response.json();
        }).then(function (json) {
            return dispatch(receivePosts(subreddit, json));
        });
    };
}

function fetchPostsIfNeeded(subreddit) {
    return function (dispatch) {
        if (true) {
            return dispatch(fetchPosts(subreddit));
        }
    };
}

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(129);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactYoutube = __webpack_require__(235);

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _base = __webpack_require__(138);

var base = _interopRequireWildcard(_base);

var _parser = __webpack_require__(686);

var _parser2 = _interopRequireDefault(_parser);

var _ReadMode = __webpack_require__(687);

var _ReadMode2 = _interopRequireDefault(_ReadMode);

var _ConrolBar = __webpack_require__(688);

var _ConrolBar2 = _interopRequireDefault(_ConrolBar);

var _youtubePlay = __webpack_require__(709);

var _youtubePlay2 = _interopRequireDefault(_youtubePlay);

var _book = __webpack_require__(710);

var _book2 = _interopRequireDefault(_book);

var _twitter = __webpack_require__(711);

var _twitter2 = _interopRequireDefault(_twitter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  App: {
    displayName: "App"
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: "/Users/junjun/Documents/\u9879\u76EE/js/front-end/youtube4learner/app/components/App.js",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

var srt_url = function srt_url(vid) {
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";

  return "https://video.google.com/timedtext?hl=" + lang + "&lang=" + lang + "&v=" + vid + "&fmt=vtt";
};
var default_lang = "en";

var MODE_VIDEO = "MODE_VIDEO";
var MODE_READ = "MODE_READ";

var App = _wrapComponent("App")(function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    var vid = base.get_params("vid");
    var m = base.get_params("m");
    var mode = m == "r" ? MODE_READ : MODE_VIDEO;

    _this.state = {
      vid: vid, //"QzPbY9ufnQY",//"gkjW9PZBRfk"
      selected_language: [],
      width: window.innerWidth,
      mode: mode,
      playing: false
    };

    _this.call_back = _this.call_back.bind(_this);
    _this._onReady = _this._onReady.bind(_this);
    _this.load_vtts = _this.load_vtts.bind(_this);
    _this.chooseLang = _this.chooseLang.bind(_this);
    _this.getCurrentText = _this.getCurrentText.bind(_this);
    _this.seekTo = _this.seekTo.bind(_this);
    _this.go_by_span = _this.go_by_span.bind(_this);

    _this.interval = null;

    _this.lang_map = {};
    for (var i = 0; i < base.languages.length; i++) {
      var l = base.languages[i];
      _this.lang_map[l["-lang_code"]] = l;
    }

    console.log("screen.availWidth", screen.availWidth);
    console.log("userLang", base.userLang);

    _this.userLang = base.userLang;

    _this.play = _this.play.bind(_this);
    _this.pause = _this.pause.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "play",
    value: function play() {
      var player = this.state.player;
      if (player) {
        player.playVideo();
        this.setState({ playing: true });
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      var player = this.state.player;
      if (player) {
        player.pauseVideo();
        this.setState({ playing: false });
      }
    }
  }, {
    key: "seekTo",
    value: function seekTo(time) {
      var player = this.state.player;
      if (player) {
        if (time > 0 && this.state.duration && time < this.state.duration) {
          player.seekTo(time);
        }
      }
    }
  }, {
    key: "go_by_span",
    value: function go_by_span(span) {
      var player = this.state.player;
      if (player) {
        var cur = player.getCurrentTime();
        var seekTo = cur + span;
        console.log("getCurrentTime", cur);
        seekTo = seekTo < 0 ? 0 : seekTo;
        player.seekTo(seekTo);
      }
    }
  }, {
    key: "load_captions",
    value: async function load_captions() {
      var _this2 = this;

      try {
        var url = "https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=" + this.state.vid + "&key=AIzaSyB3pm5TarrQpjpscUdvCkp2twCwk9cSRSc";
        var res3 = await base.axios({ method: "get", url: url, data: null });
        console.log(res3.data);
        if (res3.data && res3.data.items) ;
        {
          var selected_language = [];
          if (res3.data.items.filter(function (item) {
            return item.snippet.language == default_lang;
          }).length > 0) {
            selected_language.push(default_lang);
            this.load_subtitle(this.state.vid, default_lang);
          }

          if (res3.data.items.filter(function (item) {
            return item.snippet.language == _this2.userLang;
          }).length > 0) {
            selected_language.push(this.userLang);
            this.load_subtitle(this.state.vid, this.userLang);
          }

          this.setState({ captions: res3.data.items, selected_language: selected_language });
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "load_vtts",
    value: function load_vtts(langs) {
      if (langs) {
        for (var i = 0; i < langs.length; i++) {
          var l = langs[i];
          if (this.state.vtts[l]) continue;
          this.load_subtitle(this.state.vid, l);
        }
      }
    }
  }, {
    key: "chooseLang",
    value: function chooseLang(lang) {
      if (!lang) return;

      var langs = this.state.selected_language;

      var i = langs.indexOf(lang);
      if (i >= 0) {
        langs.splice(i, 1);
      } else {
        if (langs.length >= 2) return;

        if (langs.indexOf(lang) < 0) {
          langs.push(lang);
        }
      }

      this.setState({ selected_language: langs });
      this.load_vtts(langs);
    }
  }, {
    key: "load_subtitle",
    value: async function load_subtitle(vid, lang) {
      if (!lang || !vid) {
        console.log("vid或者lang为空");
        return;
      }

      try {

        var purl = srt_url(vid, lang);
        var res3 = await base.axios({ method: "get", url: purl, data: null });
        //console.log(res3.data);

        var parser = new _parser2.default();
        var vtt = parser.parse(res3.data);
        console.log("vtt " + lang, vtt);
        var vtts = this.state.vtts || {};
        vtts[lang] = vtt;
        this.setState({ vtts: vtts });
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "getCurrentText",
    value: function getCurrentText() {

      if (this.state.player) {
        var player = this.state.player;
        var currentTime = player.getCurrentTime();
        var duration = player.getDuration();

        var cur_texts = [];
        var cur_index = [];
        var selected_language = this.state.selected_language;
        for (var i = 0; i < selected_language.length; i++) {
          var vtt = this.state.vtts[selected_language[i]];
          if (vtt && vtt.cues) {
            for (var j = 0; j < vtt.cues.length; j++) {
              var cue = vtt.cues[j];
              if (currentTime < cue.endTime) {

                cur_texts.push(cue.text);
                cur_index.push(j);
                break;
              }
            } //for(let j = 0;
          }
        } // for(let i = 0;

        var pre_index = this.state.cur_index || [];
        if (cur_index.join("") != pre_index.join("")) {
          this.setState({ cur_index: cur_index, cur_texts: cur_texts, currentTime: currentTime, duration: duration });
        }
      }
    }
  }, {
    key: "call_back",
    value: function call_back(name) {
      return function (event) {
        console.log(name);
        this._onReady(event);
      }.bind(this);
    }
  }, {
    key: "_onReady",
    value: function _onReady(event) {
      console.log("player event", event);
      console.log(event.target.getVideoData());
      if (event && event.target) {
        this.setState({ player: event.target });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.load_captions();
      this.load_subtitle(this.state.vid, "en");
    }
  }, {
    key: "generate_text",
    value: function generate_text(vtt) {
      var text = [];
      if (vtt && vtt.cues) {
        for (var i = 0; i < vtt.cues.length; i++) {
          var node = _react3.default.createElement(
            "p",
            { style: { fontSize: 13, minHeight: "1em", padding: 0, margin: 0 } },
            vtt.cues[i].text
          );
          text.push(node);
        }
      }

      return text;
    }
  }, {
    key: "showVtt",
    value: function showVtt() {
      var _this3 = this;

      if (!this.interval) {
        this.interval = setInterval(function () {
          _this3.getCurrentText();
        }, 500);
      }
    }
  }, {
    key: "hideVtt",
    value: function hideVtt() {
      if (!this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var videoWidth = this.state.width * 0.8 - 20;
      var videoHeight = videoWidth * 0.7 * 3 / 4 + 2;

      this.opts = {
        width: videoWidth,
        height: videoHeight,
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

      var texts = [];
      var show_vtt = null;
      if (this.state.selected_language) {
        console.log("this.state.selected_language", this.state.selected_language);
        console.log("vtts", this.state.vtts);

        var length = this.state.selected_language.length;
        var width = length < 2 ? "98%" : "48%";

        if (this.state.vtts) {
          for (var _i = 0; _i < this.state.selected_language.length; _i++) {
            var lang = this.state.selected_language[_i];
            var vtt = this.state.vtts[lang];
            show_vtt = vtt;
            var text = this.generate_text(vtt);
            texts.push(_react3.default.createElement(
              "div",
              { style: {
                  width: width,
                  borderRight: length > 1 && _i == 0 ? "1px solid rgba(0,0,0,0.2)" : "",
                  textAlign: "left",
                  marginLeft: _i == 1 ? 4 : 0,
                  display: "inline-block",
                  verticalAlign: "top"
                } },
              text
            ));
          }
        }
        console.log("texts", texts);
      }

      var videoTexts = _react3.default.createElement(
        "div",
        { style: { backgroundColor: base.Color.white1, marginTop: 10 } },
        texts
      );

      /**
       *  {
      "kind": "youtube#caption",
      "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/1dOgzEmnOS5DTN6PurxdAGWJCKI\"",
      "id": "VcRzJnY_nqvghO_sJ3mt4gZz3jHPCgQp",
      "snippet": {
      "videoId": "QzPbY9ufnQY",
      "lastUpdated": "2017-10-26T22:54:12.408Z",
      "trackKind": "standard",
      "language": "en",
      "name": "",
      "audioTrackType": "unknown",
      "isCC": false,
      "isLarge": false,
      "isEasyReader": false,
      "isDraft": false,
      "isAutoSynced": false,
      "status": "serving"
      }
       */
      var captions = [];
      if (this.state.captions) {
        console.log("this.state.captions", this.state.captions);

        var _loop = function _loop() {
          var cap = _this4.state.captions[i];

          //console.log("cap",cap);
          if (cap.snippet.status != "serving") {
            return "continue";
          }

          var lang_code = cap.snippet.language;

          var lang_org = _this4.lang_map[lang_code];

          if (!lang_org) {
            return "continue";
          }

          var lang_text = lang_org["-lang_original"];

          shoudHilight = _this4.state.selected_language.indexOf(lang_code) >= 0;


          var node = _react3.default.createElement(
            "div",
            { style: { display: "inline-block", minWidth: 40, color: shoudHilight ? base.Color.green : "black", margin: 3, fontSize: 14, padding: 2, border: "1px solid", borderColor: shoudHilight ? base.Color.green : "black" }, onClick: function onClick() {
                _this4.chooseLang(lang_code);
              } },
            lang_text,
            " "
          );
          captions.push(node);
        };

        for (var i = 0; i < this.state.captions.length; i++) {
          var shoudHilight;

          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      }

      var cur_texts = this.state.cur_texts;
      if (cur_texts) {
        var cur_text_divs = cur_texts.map(function (item) {
          return _react3.default.createElement(
            "p",
            { style: { padding: 0, color: "white", fontSize: 15, textAlign: "center" } },
            item
          );
        });

        var cur_texts_float = _react3.default.createElement(
          "div",
          { id: "float_text",
            style: { width: videoWidth, position: "absolute", zIndex: 2000, textAlign: "center", bottom: 60, backgroundColor: "rgba(0,0,0,0.7)" } },
          cur_text_divs
        );
      }

      var readPart = _react3.default.createElement(
        "div",
        null,
        _react3.default.createElement(_ReadMode2.default, {
          seekTo: this.seekTo,
          vtt: show_vtt,
          cur_index: this.state.cur_index ? this.state.cur_index[0] : 0,
          style: { position: "absolute", zIndex: 100, top: 66, width: videoWidth, backgroundColor: base.Color.white1 }
        }),
        _react3.default.createElement(_ConrolBar2.default, { seekTo: this.seekTo, go_by_span: this.go_by_span, total: this.state.duration || 100, current: this.state.currentTime || 0,
          playing: this.state.playing, play: this.play, pause: this.pause,
          style: { position: "fixed", bottom: 0, zIndex: 201, width: videoWidth } })
      );

      var mode = _react3.default.createElement(
        "div",
        { style: { borderBottom: "1px solid rgba(0,0,0,0.1)", marginBottom: 10 } },
        _react3.default.createElement(
          "div",
          { onClick: function onClick() {
              window.scrollTo(0, 0);_this4.setState({ mode: MODE_VIDEO });
            }, style: { margin: 6, padding: "2px 10px 2px 10px", border: "1px solid", borderColor: this.state.mode == MODE_VIDEO ? base.Color.green : base.Color.white1 } },
          _react3.default.createElement(_youtubePlay2.default, { size: 40,
            style: { color: this.state.mode == MODE_VIDEO ? base.Color.green : base.Color.white1 }
          })
        ),
        _react3.default.createElement(
          "div",
          { onClick: function onClick() {
              _this4.setState({ mode: MODE_READ });
            }, style: { margin: 6, padding: "2px 10px 2px 10px", border: "1px solid", borderColor: this.state.mode == MODE_READ ? base.Color.green : base.Color.white1 } },
          _react3.default.createElement(_book2.default, { size: 40,
            style: { color: this.state.mode == MODE_READ ? base.Color.green : base.Color.white1 } })
        )
      );

      console.log("show_vtt", show_vtt);

      return _react3.default.createElement(
        "div",
        { style: { margin: "auto", paddingBottom: 10 } },
        _react3.default.createElement(
          "div",
          { style: { backgroundColor: "white", height: 46, borderBottom: "1px solid rgba(0,0,0,0.2)", marginBottom: "8px" } },
          _react3.default.createElement(
            "span",
            { style: { fontSize: "30px", paddingTop: 10, color: base.Color.green, fontWeight: "bold" } },
            "Youtube++",
            " "
          ),
          _react3.default.createElement(
            "span",
            { style: { color: base.Color.green, fontWeight: "bold", fontSize: 16 } },
            " for language learners"
          ),
          _react3.default.createElement(
            "a",
            { target: "_blank", style: { backgroundColor: "#1DA1F2", marginLeft: 100, color: "white", padding: 2, borderRadius: 4, textDecoration: "none", fontSize: 14 }, href: "https://twitter.com/AndyYan26821377" },
            "  follow ",
            _react3.default.createElement(_twitter2.default, { style: { color: "white" }, size: 18 })
          )
        ),
        _react3.default.createElement(
          "div",
          { style: { margin: "auto" } },
          _react3.default.createElement(
            "div",
            { style: { width: videoWidth, borderRight: "1px solid rgba(0,0,0,0.2)", marginTop: 4, display: "inline-block", verticalAlign: "top", textAlign: "center" } },
            _react3.default.createElement(
              "div",
              { style: { position: "relative" } },
              _react3.default.createElement(_reactYoutube2.default, { key: this.state.vid,
                ref: "player",
                videoId: this.state.vid,
                opts: this.opts,
                onReady: this.call_back("onReady"),
                onPlay: function onPlay() {
                  _this4.showVtt();
                } // defaults -> noop
                , onPause: function onPause() {
                  _this4.hideVtt();
                } // defaults -> noop
                , onEnd: function onEnd() {
                  _this4.hideVtt();
                } // defaults -> noop
                , onError: this.call_back("onError") // defaults -> noop
                , onStateChange: this.call_back("onStateChange") // defaults -> noop
              }),
              this.state.mode == MODE_VIDEO ? cur_texts_float : null
            ),
            _react3.default.createElement(
              "div",
              { style: { textAlign: "center", paddingTop: 20, backgroundColor: base.Color.white1 } },
              this.state.mode == MODE_VIDEO ? videoTexts : readPart
            )
          ),
          _react3.default.createElement(
            "div",
            { style: { position: "fixed", width: 0.8 * (base.Width - videoWidth), top: 60, marginLeft: 10, textAlign: "center", display: "inline-block", overflowY: "scroll" } },
            mode,
            captions
          )
        )
      );
    }
  }]);

  return App;
}(_react2.Component));

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)(module)))

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getForceUpdate = exports.createProxy = undefined;

var _supportsProtoAssignment = __webpack_require__(211);

var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

var _createClassProxy = __webpack_require__(549);

var _createClassProxy2 = _interopRequireDefault(_createClassProxy);

var _reactDeepForceUpdate = __webpack_require__(651);

var _reactDeepForceUpdate2 = _interopRequireDefault(_reactDeepForceUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!(0, _supportsProtoAssignment2.default)()) {
  console.warn('This JavaScript environment does not support __proto__. ' + 'This means that react-proxy is unable to proxy React components. ' + 'Features that rely on react-proxy, such as react-transform-hmr, ' + 'will not function as expected.');
}

exports.createProxy = _createClassProxy2.default;
exports.getForceUpdate = _reactDeepForceUpdate2.default;

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = proxyClass;
exports.default = createClassProxy;

var _find = __webpack_require__(550);

var _find2 = _interopRequireDefault(_find);

var _createPrototypeProxy = __webpack_require__(628);

var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);

var _bindAutoBindMethods = __webpack_require__(649);

var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);

var _deleteUnknownAutoBindMethods = __webpack_require__(650);

var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);

var _supportsProtoAssignment = __webpack_require__(211);

var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var RESERVED_STATICS = ['length', 'name', 'arguments', 'caller', 'prototype', 'toString'];

function isEqualDescriptor(a, b) {
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

// This was originally a WeakMap but we had issues with React Native:
// https://github.com/gaearon/react-proxy/issues/50#issuecomment-192928066
var allProxies = [];
function findProxy(Component) {
  var pair = (0, _find2.default)(allProxies, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var key = _ref2[0];
    return key === Component;
  });
  return pair ? pair[1] : null;
}
function addProxy(Component, proxy) {
  allProxies.push([Component, proxy]);
}

function proxyClass(InitialComponent) {
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = findProxy(InitialComponent);
  if (existingProxy) {
    return existingProxy;
  }

  var prototypeProxy = (0, _createPrototypeProxy2.default)();
  var CurrentComponent = undefined;
  var ProxyComponent = undefined;

  var staticDescriptors = {};
  function wasStaticModifiedByUser(key) {
    // Compare the descriptor with the one we previously set ourselves.
    var currentDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    return !isEqualDescriptor(staticDescriptors[key], currentDescriptor);
  }

  function instantiate(factory, context, params) {
    var component = factory();

    try {
      return component.apply(context, params);
    } catch (err) {
      (function () {
        // Native ES6 class instantiation
        var instance = new (Function.prototype.bind.apply(component, [null].concat(_toConsumableArray(params))))();

        Object.keys(instance).forEach(function (key) {
          if (RESERVED_STATICS.indexOf(key) > -1) {
            return;
          }
          context[key] = instance[key];
        });
      })();
    }
  }

  try {
    // Create a proxy constructor with matching name
    ProxyComponent = new Function('factory', 'instantiate', 'return function ' + (InitialComponent.name || 'ProxyComponent') + '() {\n         return instantiate(factory, this, arguments);\n      }')(function () {
      return CurrentComponent;
    }, instantiate);
  } catch (err) {
    // Some environments may forbid dynamic evaluation
    ProxyComponent = function ProxyComponent() {
      return instantiate(function () {
        return CurrentComponent;
      }, this, arguments);
    };
  }

  // Point proxy constructor to the proxy prototype
  ProxyComponent.prototype = prototypeProxy.get();

  // Proxy toString() to the current constructor
  ProxyComponent.toString = function toString() {
    return CurrentComponent.toString();
  };

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    // Prevent proxy cycles
    var existingProxy = findProxy(NextComponent);
    if (existingProxy) {
      return update(existingProxy.__getCurrent());
    }

    // Save the next constructor so we call it
    CurrentComponent = NextComponent;

    // Update the prototype proxy with new methods
    var mountedInstances = prototypeProxy.update(NextComponent.prototype);

    // Set up the constructor property so accessing the statics work
    ProxyComponent.prototype.constructor = ProxyComponent;

    // Set up the same prototype for inherited statics
    ProxyComponent.__proto__ = NextComponent.__proto__;

    // Copy static methods and properties
    Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
      if (RESERVED_STATICS.indexOf(key) > -1) {
        return;
      }

      var staticDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
        configurable: true
      });

      // Copy static unless user has redefined it at runtime
      if (!wasStaticModifiedByUser(key)) {
        Object.defineProperty(ProxyComponent, key, staticDescriptor);
        staticDescriptors[key] = staticDescriptor;
      }
    });

    // Remove old static methods and properties
    Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
      if (RESERVED_STATICS.indexOf(key) > -1) {
        return;
      }

      // Skip statics that exist on the next class
      if (NextComponent.hasOwnProperty(key)) {
        return;
      }

      // Skip non-configurable statics
      var descriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
      if (descriptor && !descriptor.configurable) {
        return;
      }

      // Delete static unless user has redefined it at runtime
      if (!wasStaticModifiedByUser(key)) {
        delete ProxyComponent[key];
        delete staticDescriptors[key];
      }
    });

    // Try to infer displayName
    ProxyComponent.displayName = NextComponent.displayName || NextComponent.name;

    // We might have added new methods that need to be auto-bound
    mountedInstances.forEach(_bindAutoBindMethods2.default);
    mountedInstances.forEach(_deleteUnknownAutoBindMethods2.default);

    // Let the user take care of redrawing
    return mountedInstances;
  };

  function get() {
    return ProxyComponent;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  update(InitialComponent);

  var proxy = { get: get, update: update };
  addProxy(ProxyComponent, proxy);

  Object.defineProperty(proxy, '__getCurrent', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

function createFallback(Component) {
  var CurrentComponent = Component;

  return {
    get: function get() {
      return CurrentComponent;
    },
    update: function update(NextComponent) {
      CurrentComponent = NextComponent;
    }
  };
}

function createClassProxy(Component) {
  return Component.__proto__ && (0, _supportsProtoAssignment2.default)() ? proxyClass(Component) : createFallback(Component);
}

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(551),
    findIndex = __webpack_require__(624);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(212),
    isArrayLike = __webpack_require__(76),
    keys = __webpack_require__(99);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(553),
    getMatchData = __webpack_require__(610),
    matchesStrictComparable = __webpack_require__(226);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(213),
    baseIsEqual = __webpack_require__(132);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(225),
    keys = __webpack_require__(99);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(132),
    get = __webpack_require__(612),
    hasIn = __webpack_require__(618),
    isKey = __webpack_require__(136),
    isStrictComparable = __webpack_require__(225),
    matchesStrictComparable = __webpack_require__(226),
    toKey = __webpack_require__(101);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(227);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(614);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(615);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(131);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(617);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(74),
    arrayMap = __webpack_require__(229),
    isArray = __webpack_require__(37),
    isSymbol = __webpack_require__(100);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(619),
    hasPath = __webpack_require__(620);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 619:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(228),
    isArguments = __webpack_require__(133),
    isArray = __webpack_require__(37),
    isIndex = __webpack_require__(134),
    isLength = __webpack_require__(135),
    toKey = __webpack_require__(101);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(622),
    basePropertyDeep = __webpack_require__(623),
    isKey = __webpack_require__(136),
    toKey = __webpack_require__(101);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 622:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(227);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(230),
    baseIteratee = __webpack_require__(212),
    toInteger = __webpack_require__(625);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(626);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(627);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(75),
    isSymbol = __webpack_require__(100);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrototypeProxy;

var _assign = __webpack_require__(629);

var _assign2 = _interopRequireDefault(_assign);

var _difference = __webpack_require__(639);

var _difference2 = _interopRequireDefault(_difference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrototypeProxy() {
  var proxy = {};
  var current = null;
  var mountedInstances = [];

  /**
   * Creates a proxied toString() method pointing to the current version's toString().
   */
  function proxyToString(name) {
    // Wrap to always call the current version
    return function toString() {
      if (typeof current[name] === 'function') {
        return current[name].toString();
      } else {
        return '<method was deleted>';
      }
    };
  }

  /**
   * Creates a proxied method that calls the current version, whenever available.
   */
  function proxyMethod(name) {
    // Wrap to always call the current version
    var proxiedMethod = function proxiedMethod() {
      if (typeof current[name] === 'function') {
        return current[name].apply(this, arguments);
      }
    };

    // Copy properties of the original function, if any
    (0, _assign2.default)(proxiedMethod, current[name]);
    proxiedMethod.toString = proxyToString(name);

    return proxiedMethod;
  }

  /**
   * Augments the original componentDidMount with instance tracking.
   */
  function proxiedComponentDidMount() {
    mountedInstances.push(this);
    if (typeof current.componentDidMount === 'function') {
      return current.componentDidMount.apply(this, arguments);
    }
  }
  proxiedComponentDidMount.toString = proxyToString('componentDidMount');

  /**
   * Augments the original componentWillUnmount with instance tracking.
   */
  function proxiedComponentWillUnmount() {
    var index = mountedInstances.indexOf(this);
    // Unless we're in a weird environment without componentDidMount
    if (index !== -1) {
      mountedInstances.splice(index, 1);
    }
    if (typeof current.componentWillUnmount === 'function') {
      return current.componentWillUnmount.apply(this, arguments);
    }
  }
  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');

  /**
   * Defines a property on the proxy.
   */
  function defineProxyProperty(name, descriptor) {
    Object.defineProperty(proxy, name, descriptor);
  }

  /**
   * Defines a property, attempting to keep the original descriptor configuration.
   */
  function defineProxyPropertyWithValue(name, value) {
    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};

    var _ref$enumerable = _ref.enumerable;
    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
    var _ref$writable = _ref.writable;
    var writable = _ref$writable === undefined ? true : _ref$writable;


    defineProxyProperty(name, {
      configurable: true,
      enumerable: enumerable,
      writable: writable,
      value: value
    });
  }

  /**
   * Creates an auto-bind map mimicking the original map, but directed at proxy.
   */
  function createAutoBindMap() {
    if (!current.__reactAutoBindMap) {
      return;
    }

    var __reactAutoBindMap = {};
    for (var name in current.__reactAutoBindMap) {
      if (typeof proxy[name] === 'function' && current.__reactAutoBindMap.hasOwnProperty(name)) {
        __reactAutoBindMap[name] = proxy[name];
      }
    }

    return __reactAutoBindMap;
  }

  /**
   * Creates an auto-bind map mimicking the original map, but directed at proxy.
   */
  function createAutoBindPairs() {
    var __reactAutoBindPairs = [];

    for (var i = 0; i < current.__reactAutoBindPairs.length; i += 2) {
      var name = current.__reactAutoBindPairs[i];
      var method = proxy[name];

      if (typeof method === 'function') {
        __reactAutoBindPairs.push(name, method);
      }
    }

    return __reactAutoBindPairs;
  }

  /**
   * Applies the updated prototype.
   */
  function update(next) {
    // Save current source of truth
    current = next;

    // Find changed property names
    var currentNames = Object.getOwnPropertyNames(current);
    var previousName = Object.getOwnPropertyNames(proxy);
    var removedNames = (0, _difference2.default)(previousName, currentNames);

    // Remove properties and methods that are no longer there
    removedNames.forEach(function (name) {
      delete proxy[name];
    });

    // Copy every descriptor
    currentNames.forEach(function (name) {
      var descriptor = Object.getOwnPropertyDescriptor(current, name);
      if (typeof descriptor.value === 'function') {
        // Functions require additional wrapping so they can be bound later
        defineProxyPropertyWithValue(name, proxyMethod(name));
      } else {
        // Other values can be copied directly
        defineProxyProperty(name, descriptor);
      }
    });

    // Track mounting and unmounting
    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);

    if (current.hasOwnProperty('__reactAutoBindMap')) {
      defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());
    }

    if (current.hasOwnProperty('__reactAutoBindPairs')) {
      defineProxyPropertyWithValue('__reactAutoBindPairs', createAutoBindPairs());
    }

    // Set up the prototype chain
    proxy.__proto__ = next;

    return mountedInstances;
  }

  /**
   * Returns the up-to-date proxy prototype.
   */
  function get() {
    return proxy;
  }

  return {
    update: update,
    get: get
  };
};

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(231),
    copyObject = __webpack_require__(630),
    createAssigner = __webpack_require__(631),
    isArrayLike = __webpack_require__(76),
    isPrototype = __webpack_require__(224),
    keys = __webpack_require__(99);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(231),
    baseAssignValue = __webpack_require__(232);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(234),
    isIterateeCall = __webpack_require__(638);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(633);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 633:
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(635),
    shortOut = __webpack_require__(637);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(636),
    defineProperty = __webpack_require__(233),
    identity = __webpack_require__(137);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 636:
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 637:
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(96),
    isArrayLike = __webpack_require__(76),
    isIndex = __webpack_require__(134),
    isObject = __webpack_require__(75);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(640),
    baseFlatten = __webpack_require__(646),
    baseRest = __webpack_require__(234),
    isArrayLikeObject = __webpack_require__(648);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(218),
    arrayIncludes = __webpack_require__(641),
    arrayIncludesWith = __webpack_require__(645),
    arrayMap = __webpack_require__(229),
    baseUnary = __webpack_require__(223),
    cacheHas = __webpack_require__(219);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(642);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(230),
    baseIsNaN = __webpack_require__(643),
    strictIndexOf = __webpack_require__(644);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 643:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 644:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 645:
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(220),
    isFlattenable = __webpack_require__(647);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(74),
    isArguments = __webpack_require__(133),
    isArray = __webpack_require__(37);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(76),
    isObjectLike = __webpack_require__(59);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindAutoBindMethods;
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of React source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Original:
 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
 */

function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);

  boundMethod.__reactBoundContext = component;
  boundMethod.__reactBoundMethod = method;
  boundMethod.__reactBoundArguments = null;

  var componentName = component.constructor.displayName,
      _bind = boundMethod.bind;

  boundMethod.bind = function (newThis) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (newThis !== component && newThis !== null) {
      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
    } else if (!args.length) {
      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
      return boundMethod;
    }

    var reboundMethod = _bind.apply(boundMethod, arguments);
    reboundMethod.__reactBoundContext = component;
    reboundMethod.__reactBoundMethod = method;
    reboundMethod.__reactBoundArguments = args;

    return reboundMethod;
  };

  return boundMethod;
}

function bindAutoBindMethodsFromMap(component) {
  for (var autoBindKey in component.__reactAutoBindMap) {
    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
      return;
    }

    // Tweak: skip methods that are already bound.
    // This is to preserve method reference in case it is used
    // as a subscription handler that needs to be detached later.
    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
      continue;
    }

    var method = component.__reactAutoBindMap[autoBindKey];
    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

function bindAutoBindMethods(component) {
  if (component.__reactAutoBindPairs) {
    bindAutoBindMethodsFromArray(component);
  } else if (component.__reactAutoBindMap) {
    bindAutoBindMethodsFromMap(component);
  }
}

function bindAutoBindMethodsFromArray(component) {
  var pairs = component.__reactAutoBindPairs;

  if (!pairs) {
    return;
  }

  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];

    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
      continue;
    }

    var method = pairs[i + 1];

    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteUnknownAutoBindMethods;
function shouldDeleteClassicInstanceMethod(component, name) {
  if (component.__reactAutoBindMap && component.__reactAutoBindMap.hasOwnProperty(name)) {
    // It's a known autobound function, keep it
    return false;
  }

  if (component.__reactAutoBindPairs && component.__reactAutoBindPairs.indexOf(name) >= 0) {
    // It's a known autobound function, keep it
    return false;
  }

  if (component[name].__reactBoundArguments !== null) {
    // It's a function bound to specific args, keep it
    return false;
  }

  // It's a cached bound method for a function
  // that was deleted by user, so we delete it from component.
  return true;
}

function shouldDeleteModernInstanceMethod(component, name) {
  var prototype = component.constructor.prototype;

  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);

  if (!prototypeDescriptor || !prototypeDescriptor.get) {
    // This is definitely not an autobinding getter
    return false;
  }

  if (prototypeDescriptor.get().length !== component[name].length) {
    // The length doesn't match, bail out
    return false;
  }

  // This seems like a method bound using an autobinding getter on the prototype
  // Hopefully we won't run into too many false positives.
  return true;
}

function shouldDeleteInstanceMethod(component, name) {
  var descriptor = Object.getOwnPropertyDescriptor(component, name);
  if (typeof descriptor.value !== 'function') {
    // Not a function, or something fancy: bail out
    return;
  }

  if (component.__reactAutoBindMap || component.__reactAutoBindPairs) {
    // Classic
    return shouldDeleteClassicInstanceMethod(component, name);
  } else {
    // Modern
    return shouldDeleteModernInstanceMethod(component, name);
  }
}

/**
 * Deletes autobound methods from the instance.
 *
 * For classic React classes, we only delete the methods that no longer exist in map.
 * This means the user actually deleted them in code.
 *
 * For modern classes, we delete methods that exist on prototype with the same length,
 * and which have getters on prototype, but are normal values on the instance.
 * This is usually an indication that an autobinding decorator is being used,
 * and the getter will re-generate the memoized handler on next access.
 */
function deleteUnknownAutoBindMethods(component) {
  var names = Object.getOwnPropertyNames(component);

  names.forEach(function (name) {
    if (shouldDeleteInstanceMethod(component, name)) {
      delete component[name];
    }
  });
}

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Constant to identify a React Component. It's been extracted from ReactTypeOfWork
// (https://github.com/facebook/react/blob/master/src/shared/ReactTypeOfWork.js#L20)


exports.__esModule = true;
exports['default'] = getForceUpdate;
var ReactClassComponent = 2;

function traverseRenderedChildren(internalInstance, callback, argument) {
  callback(internalInstance, argument);

  if (internalInstance._renderedComponent) {
    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
  } else {
    for (var key in internalInstance._renderedChildren) {
      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
      }
    }
  }
}

function setPendingForceUpdate(internalInstance) {
  if (internalInstance._pendingForceUpdate === false) {
    internalInstance._pendingForceUpdate = true;
  }
}

function forceUpdateIfPending(internalInstance, React) {
  if (internalInstance._pendingForceUpdate === true) {
    var publicInstance = internalInstance._instance;
    React.Component.prototype.forceUpdate.call(publicInstance);
  }
}

function deepForceUpdateStack(instance, React) {
  var internalInstance = instance._reactInternalInstance;
  traverseRenderedChildren(internalInstance, setPendingForceUpdate);
  traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
}

function deepForceUpdate(instance, React) {
  var root = instance._reactInternalFiber || instance._reactInternalInstance;
  if (typeof root.tag !== 'number') {
    // Traverse stack-based React tree.
    return deepForceUpdateStack(instance, React);
  }

  var node = root;
  while (true) {
    if (node.tag === ReactClassComponent) {
      var publicInstance = node.stateNode;
      var updater = publicInstance.updater;

      if (typeof publicInstance.forceUpdate === 'function') {
        publicInstance.forceUpdate();
      } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
        updater.enqueueForceUpdate(publicInstance);
      }
    }
    if (node.child) {
      node.child['return'] = node;
      node = node.child;
      continue;
    }
    if (node === root) {
      return undefined;
    }
    while (!node.sibling) {
      if (!node['return'] || node['return'] === root) {
        return undefined;
      }
      node = node['return'];
    }
    node.sibling['return'] = node['return'];
    node = node.sibling;
  }
}

function getForceUpdate(React) {
  return function (instance) {
    deepForceUpdate(instance, React);
  };
}

module.exports = exports['default'];

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40)))

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

// Not intended to be fast, but if you can make it faster, please help out!

var WebVTTParser = function WebVTTParser() {
  this.parse = function (input, mode) {
    //XXX need global search and replace for \0
    //XXX skyp byte order mark
    var NEWLINE = /\r\n|\r|\n/,
        startTime = Date.now(),
        linePos = 0,
        lines = input.split(NEWLINE),
        alreadyCollected = false,
        cues = [],
        errors = [];
    function err(message, col) {
      errors.push({ message: message, line: linePos + 1, col: col });
    }

    /* SIGNATURE */
    if (lines[linePos].length < 6 || lines[linePos].indexOf("WEBVTT") != 0 || lines[linePos].length > 6 && lines[linePos][6] != " " && lines[linePos][6] != "\t") {
      err("No valid signature. (File needs to start with \"WEBVTT\".)");
    }

    linePos++;

    /* HEADER */
    while (lines[linePos] != "" && lines[linePos] != undefined) {
      err("No blank line after the signature.");
      if (lines[linePos].indexOf("-->") != -1) {
        alreadyCollected = true;
        break;
      }
      linePos++;
    }

    /* CUE LOOP */
    while (lines[linePos] != undefined) {
      var cue;
      while (!alreadyCollected && lines[linePos] == "") {
        linePos++;
      }
      if (!alreadyCollected && lines[linePos] == undefined) break;

      /* CUE CREATION */
      cue = {
        id: "",
        startTime: 0,
        endTime: 0,
        pauseOnExit: false,
        direction: "horizontal",
        snapToLines: true,
        linePosition: "auto",
        textPosition: 50,
        size: 100,
        alignment: "middle",
        text: "",
        tree: null
      };

      var parseTimings = true;

      if (lines[linePos].indexOf("-->") == -1) {
        cue.id = lines[linePos];

        /* COMMENTS
           Not part of the specification's parser as these would just be ignored. However,
           we want them to be conforming and not get "Cue identifier cannot be standalone".
         */
        if (/^NOTE($|[ \t])/.test(cue.id)) {
          // .startsWith fails in Chrome
          linePos++;
          while (lines[linePos] != "" && lines[linePos] != undefined) {
            if (lines[linePos].indexOf("-->") != -1) err("Cannot have timestamp in a comment.");
            linePos++;
          }
          continue;
        }

        linePos++;

        if (lines[linePos] == "" || lines[linePos] == undefined) {
          err("Cue identifier cannot be standalone.");
          continue;
        }

        if (lines[linePos].indexOf("-->") == -1) {
          parseTimings = false;
          err("Cue identifier needs to be followed by timestamp.");
        }
      }

      /* TIMINGS */
      alreadyCollected = false;
      var timings = new WebVTTCueTimingsAndSettingsParser(lines[linePos], err);
      var previousCueStart = 0;
      if (cues.length > 0) {
        previousCueStart = cues[cues.length - 1].startTime;
      }
      if (parseTimings && !timings.parse(cue, previousCueStart)) {
        /* BAD CUE */

        cue = null;
        linePos++;

        /* BAD CUE LOOP */
        while (lines[linePos] != "" && lines[linePos] != undefined) {
          if (lines[linePos].indexOf("-->") != -1) {
            alreadyCollected = true;
            break;
          }
          linePos++;
        }
        continue;
      }
      linePos++;

      /* CUE TEXT LOOP */
      while (lines[linePos] != "" && lines[linePos] != undefined) {
        if (lines[linePos].indexOf("-->") != -1) {
          err("Blank line missing before cue.");
          alreadyCollected = true;
          break;
        }
        if (cue.text != "") cue.text += "\n";
        cue.text += lines[linePos];
        linePos++;
      }

      /* CUE TEXT PROCESSING */
      var cuetextparser = new WebVTTCueTextParser(cue.text, err, mode);
      cue.tree = cuetextparser.parse(cue.startTime, cue.endTime);
      cues.push(cue);
    }
    cues.sort(function (a, b) {
      if (a.startTime < b.startTime) return -1;
      if (a.startTime > b.startTime) return 1;
      if (a.endTime > b.endTime) return -1;
      if (a.endTime < b.endTime) return 1;
      return 0;
    });
    /* END */
    return { cues: cues, errors: errors, time: Date.now() - startTime };
  };
};

var WebVTTCueTimingsAndSettingsParser = function WebVTTCueTimingsAndSettingsParser(line, errorHandler) {
  var SPACE = /[\u0020\t\f]/,
      NOSPACE = /[^\u0020\t\f]/,
      line = line,
      pos = 0,
      err = function err(message) {
    errorHandler(message, pos + 1);
  },
      spaceBeforeSetting = true;
  function skip(pattern) {
    while (line[pos] != undefined && pattern.test(line[pos])) {
      pos++;
    }
  }
  function collect(pattern) {
    var str = "";
    while (line[pos] != undefined && pattern.test(line[pos])) {
      str += line[pos];
      pos++;
    }
    return str;
  }
  /* http://dev.w3.org/html5/webvtt/#collect-a-webvtt-timestamp */
  function timestamp() {
    var units = "minutes",
        val1,
        val2,
        val3,
        val4;
    // 3
    if (line[pos] == undefined) {
      err("No timestamp found.");
      return;
    }
    // 4
    if (!/\d/.test(line[pos])) {
      err("Timestamp must start with a character in the range 0-9.");
      return;
    }
    // 5-7
    val1 = collect(/\d/);
    if (val1.length > 2 || parseInt(val1, 10) > 59) {
      units = "hours";
    }
    // 8
    if (line[pos] != ":") {
      err("No time unit separator found.");
      return;
    }
    pos++;
    // 9-11
    val2 = collect(/\d/);
    if (val2.length != 2) {
      err("Must be exactly two digits.");
      return;
    }
    // 12
    if (units == "hours" || line[pos] == ":") {
      if (line[pos] != ":") {
        err("No seconds found or minutes is greater than 59.");
        return;
      }
      pos++;
      val3 = collect(/\d/);
      if (val3.length != 2) {
        err("Must be exactly two digits.");
        return;
      }
    } else {
      val3 = val2;
      val2 = val1;
      val1 = "0";
    }
    // 13
    if (line[pos] != ".") {
      err("No decimal separator (\".\") found.");
      return;
    }
    pos++;
    // 14-16
    val4 = collect(/\d/);
    if (val4.length != 3) {
      err("Milliseconds must be given in three digits.");
      return;
    }
    // 17
    if (parseInt(val2, 10) > 59) {
      err("You cannot have more than 59 minutes.");
      return;
    }
    if (parseInt(val3, 10) > 59) {
      err("You cannot have more than 59 seconds.");
      return;
    }
    return parseInt(val1, 10) * 60 * 60 + parseInt(val2, 10) * 60 + parseInt(val3, 10) + parseInt(val4, 10) / 1000;
  }

  /* http://dev.w3.org/html5/webvtt/#parse-the-webvtt-settings */
  function parseSettings(input, cue) {
    var settings = input.split(SPACE),
        seen = [];
    for (var i = 0; i < settings.length; i++) {
      if (settings[i] == "") continue;

      var index = settings[i].indexOf(':'),
          setting = settings[i].slice(0, index);
      value = settings[i].slice(index + 1);

      if (seen.indexOf(setting) != -1) {
        err("Duplicate setting.");
      }
      seen.push(setting);

      if (value == "") {
        err("No value for setting defined.");
        return;
      }

      if (setting == "vertical") {
        // writing direction
        if (value != "rl" && value != "lr") {
          err("Writing direction can only be set to 'rl' or 'rl'.");
          continue;
        }
        cue.direction = value;
      } else if (setting == "line") {
        // line position
        if (!/\d/.test(value)) {
          err("Line position takes a number or percentage.");
          continue;
        }
        if (value.indexOf("-", 1) != -1) {
          err("Line position can only have '-' at the start.");
          continue;
        }
        if (value.indexOf("%") != -1 && value.indexOf("%") != value.length - 1) {
          err("Line position can only have '%' at the end.");
          continue;
        }
        if (value[0] == "-" && value[value.length - 1] == "%") {
          err("Line position cannot be a negative percentage.");
          continue;
        }
        if (value[value.length - 1] == "%") {
          if (parseInt(value, 10) > 100) {
            err("Line position cannot be >100%.");
            continue;
          }
          cue.snapToLines = false;
        }
        cue.linePosition = parseInt(value, 10);
      } else if (setting == "position") {
        // text position
        if (value[value.length - 1] != "%") {
          err("Text position must be a percentage.");
          continue;
        }
        if (parseInt(value, 10) > 100) {
          err("Size cannot be >100%.");
          continue;
        }
        cue.textPosition = parseInt(value, 10);
      } else if (setting == "size") {
        // size
        if (value[value.length - 1] != "%") {
          err("Size must be a percentage.");
          continue;
        }
        if (parseInt(value, 10) > 100) {
          err("Size cannot be >100%.");
          continue;
        }
        cue.size = parseInt(value, 10);
      } else if (setting == "align") {
        // alignment
        var alignValues = ["start", "middle", "end", "left", "right"];
        if (alignValues.indexOf(value) == -1) {
          err("Alignment can only be set to one of " + alignValues.join(", ") + ".");
          continue;
        }
        cue.alignment = value;
      } else {
        err("Invalid setting.");
      }
    }
  }

  this.parse = function (cue, previousCueStart) {
    skip(SPACE);
    cue.startTime = timestamp();
    if (cue.startTime == undefined) {
      return;
    }
    if (cue.startTime < previousCueStart) {
      err("Start timestamp is not greater than or equal to start timestamp of previous cue.");
    }
    if (NOSPACE.test(line[pos])) {
      err("Timestamp not separated from '-->' by whitespace.");
    }
    skip(SPACE);
    // 6-8
    if (line[pos] != "-") {
      err("No valid timestamp separator found.");
      return;
    }
    pos++;
    if (line[pos] != "-") {
      err("No valid timestamp separator found.");
      return;
    }
    pos++;
    if (line[pos] != ">") {
      err("No valid timestamp separator found.");
      return;
    }
    pos++;
    if (NOSPACE.test(line[pos])) {
      err("'-->' not separated from timestamp by whitespace.");
    }
    skip(SPACE);
    cue.endTime = timestamp();
    if (cue.endTime == undefined) {
      return;
    }
    if (cue.endTime <= cue.startTime) {
      err("End timestamp is not greater than start timestamp.");
    }

    if (NOSPACE.test(line[pos])) {
      spaceBeforeSetting = false;
    }
    skip(SPACE);
    parseSettings(line.substring(pos), cue);
    return true;
  };
  this.parseTimestamp = function () {
    var ts = timestamp();
    if (line[pos] != undefined) {
      err("Timestamp must not have trailing characters.");
      return;
    }
    return ts;
  };
};

var WebVTTCueTextParser = function WebVTTCueTextParser(line, errorHandler, mode) {
  var line = line,
      pos = 0,
      err = function err(message) {
    if (mode == "metadata") return;
    errorHandler(message, pos + 1);
  };

  this.parse = function (cueStart, cueEnd) {
    var result = { children: [] },
        current = result,
        timestamps = [];

    function attach(token) {
      current.children.push({ type: "object", name: token[1], classes: token[2], children: [], parent: current });
      current = current.children[current.children.length - 1];
    }
    function inScope(name) {
      var node = current;
      while (node) {
        if (node.name == name) return true;
        node = node.parent;
      }
      return;
    }

    while (line[pos] != undefined) {
      var token = nextToken();
      if (token[0] == "text") {
        current.children.push({ type: "text", value: token[1], parent: current });
      } else if (token[0] == "start tag") {
        if (mode == "chapters") err("Start tags not allowed in chapter title text.");
        var name = token[1];
        if (name != "v" && name != "lang" && token[3] != "") {
          err("Only <v> and <lang> can have an annotation.");
        }
        if (name == "c" || name == "i" || name == "b" || name == "u" || name == "ruby") {
          attach(token);
        } else if (name == "rt" && current.name == "ruby") {
          attach(token);
        } else if (name == "v") {
          if (inScope("v")) {
            err("<v> cannot be nested inside itself.");
          }
          attach(token);
          current.value = token[3]; // annotation
          if (!token[3]) {
            err("<v> requires an annotation.");
          }
        } else if (name == "lang") {
          attach(token);
          current.value = token[3]; // language
        } else {
          err("Incorrect start tag.");
        }
      } else if (token[0] == "end tag") {
        if (mode == "chapters") err("End tags not allowed in chapter title text.");
        // XXX check <ruby> content
        if (token[1] == current.name) {
          current = current.parent;
        } else if (token[1] == "ruby" && current.name == "rt") {
          current = current.parent.parent;
        } else {
          err("Incorrect end tag.");
        }
      } else if (token[0] == "timestamp") {
        if (mode == "chapters") err("Timestamp not allowed in chapter title text.");
        var timings = new WebVTTCueTimingsAndSettingsParser(token[1], err),
            timestamp = timings.parseTimestamp();
        if (timestamp != undefined) {
          if (timestamp <= cueStart || timestamp >= cueEnd) {
            err("Timestamp must be between start timestamp and end timestamp.");
          }
          if (timestamps.length > 0 && timestamps[timestamps.length - 1] >= timestamp) {
            err("Timestamp must be greater than any previous timestamp.");
          }
          current.children.push({ type: "timestamp", value: timestamp, parent: current });
          timestamps.push(timestamp);
        }
      }
    }
    while (current.parent) {
      if (current.name != "v") {
        err("Required end tag missing.");
      }
      current = current.parent;
    }
    return result;
  };

  function nextToken() {
    var state = "data",
        result = "",
        buffer = "",
        classes = [];
    while (line[pos - 1] != undefined || pos == 0) {
      var c = line[pos];
      if (state == "data") {
        if (c == "&") {
          buffer = c;
          state = "escape";
        } else if (c == "<" && result == "") {
          state = "tag";
        } else if (c == "<" || c == undefined) {
          return ["text", result];
        } else {
          result += c;
        }
      } else if (state == "escape") {
        if (c == "&") {
          err("Incorrect escape.");
          result += buffer;
          buffer = c;
        } else if (/[abglmnsprt]/.test(c)) {
          buffer += c;
        } else if (c == ";") {
          if (buffer == "&amp") {
            result += "&";
          } else if (buffer == "&lt") {
            result += "<";
          } else if (buffer == "&gt") {
            result += ">";
          } else if (buffer == "&lrm") {
            result += "\u200E";
          } else if (buffer == "&rlm") {
            result += "\u200F";
          } else if (buffer == "&nbsp") {
            result += "\xA0";
          } else {
            err("Incorrect escape.");
            result += buffer + ";";
          }
          state = "data";
        } else if (c == "<" || c == undefined) {
          err("Incorrect escape.");
          result += buffer;
          return ["text", result];
        } else {
          err("Incorrect escape.");
          result += buffer + c;
          state = "data";
        }
      } else if (state == "tag") {
        if (c == "\t" || c == "\n" || c == "\f" || c == " ") {
          state = "start tag annotation";
        } else if (c == ".") {
          state = "start tag class";
        } else if (c == "/") {
          state = "end tag";
        } else if (/\d/.test(c)) {
          result = c;
          state = "timestamp tag";
        } else if (c == ">" || c == undefined) {
          if (c == ">") {
            pos++;
          }
          return ["start tag", "", [], ""];
        } else {
          result = c;
          state = "start tag";
        }
      } else if (state == "start tag") {
        if (c == "\t" || c == "\f" || c == " ") {
          state = "start tag annotation";
        } else if (c == "\n") {
          buffer = c;
          state = "start tag annotation";
        } else if (c == ".") {
          state = "start tag class";
        } else if (c == ">" || c == undefined) {
          if (c == ">") {
            pos++;
          }
          return ["start tag", result, [], ""];
        } else {
          result += c;
        }
      } else if (state == "start tag class") {
        if (c == "\t" || c == "\f" || c == " ") {
          classes.push(buffer);
          buffer = "";
          state = "start tag annotation";
        } else if (c == "\n") {
          classes.push(buffer);
          buffer = c;
          state = "start tag annotation";
        } else if (c == ".") {
          classes.push(buffer);
          buffer = "";
        } else if (c == ">" || c == undefined) {
          if (c == ">") {
            pos++;
          }
          classes.push(buffer);
          return ["start tag", result, classes, ""];
        } else {
          buffer += c;
        }
      } else if (state == "start tag annotation") {
        if (c == ">" || c == undefined) {
          if (c == ">") {
            pos++;
          }
          buffer = buffer.split(/[\u0020\t\f\r\n]+/).filter(function (item) {
            if (item) return true;
          }).join(" ");
          return ["start tag", result, classes, buffer];
        } else {
          buffer += c;
        }
      } else if (state == "end tag") {
        if (c == ">" || c == undefined) {
          if (c == ">") {
            pos++;
          }
          return ["end tag", result];
        } else {
          result += c;
        }
      } else if (state == "timestamp tag") {
        if (c == ">" || c == undefined) {
          if (c == ">") {
            pos++;
          }
          return ["timestamp", result];
        } else {
          result += c;
        }
      } else {
        err("Never happens."); // The joke is it might.
      }
      // 8
      pos++;
    }
  }
};

var WebVTTSerializer = function WebVTTSerializer() {
  function serializeTree(tree) {
    var result = "";
    for (var i = 0; i < tree.length; i++) {
      var node = tree[i];
      if (node.type == "text") {
        result += node.value;
      } else if (node.type == "object") {
        result += "<" + node.name;
        if (node.classes) {
          for (var y = 0; y < node.classes.length; y++) {
            result += "." + node.classes[y];
          }
        }
        if (node.value) {
          result += " " + node.value;
        }
        result += ">";
        if (node.children) result += serializeTree(node.children);
        result += "</" + node.name + ">";
      } else {
        result += "<" + node.value + ">";
      }
    }
    return result;
  }
  function serializeCue(cue) {
    return cue.startTime + " " + cue.endTime + "\n" + serializeTree(cue.tree.children) + "\n\n";
  }
  this.serialize = function (cues) {
    var result = "";
    for (var i = 0; i < cues.length; i++) {
      result += serializeCue(cues[i]);
    }
    return result;
  };
};

exports.default = WebVTTParser;

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(129);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(138);

var base = _interopRequireWildcard(_base);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ReadMode: {
    displayName: "ReadMode"
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: "/Users/junjun/Documents/\u9879\u76EE/js/front-end/youtube4learner/app/components/ReadMode.js",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

var srt_url = function srt_url(vid) {
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";

  return "https://video.google.com/timedtext?hl=" + lang + "&lang=" + lang + "&v=" + vid + "&fmt=vtt";
};
var default_lang = "en";

var ReadMode = _wrapComponent("ReadMode")(function (_Component) {
  _inherits(ReadMode, _Component);

  function ReadMode(props) {
    _classCallCheck(this, ReadMode);

    var _this = _possibleConstructorReturn(this, (ReadMode.__proto__ || Object.getPrototypeOf(ReadMode)).call(this, props));

    console.log("ReadMode props", props);
    _this.state = { currentTime: 0.0 };
    _this.scrollCountDown = 3;
    return _this;
  }

  _createClass(ReadMode, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props && props.cur_index) {
        var index = props.cur_index;
        var key = "node_" + index;
        console.log("index = " + index);
        var margin = this.refs[key] ? this.refs[key].offsetTop : -1;

        console.log("height = " + base.Height + " this.refs[key] = " + margin);

        if (margin > 0 && index > 4) {
          window.scrollTo(0, margin - 140);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var vtt = this.props.vtt;
      console.log("vtt", vtt);
      console.log("cur_index", this.props.cur_index);

      var total = 1;
      if (vtt && vtt.cues) {

        var contents = vtt.cues.map(function (cue, index) {
          var hilight = index == _this2.props.cur_index;
          return _react3.default.createElement(
            "div",
            { onFocus: function onFocus() {
                console.log("focus", cue);
              },
              onClick: function onClick() {
                _this2.props.seekTo(cue.startTime);
              },
              ref: "node_" + index, style: { padding: 4, textAlign: "left", backgroundColor: hilight ? base.Color.green : base.Color.white1, color: hilight ? "white" : "black", fontWeight: hilight ? "bold" : "" } },
            cue.text
          );
        });

        total = vtt.cues.length;
      }

      return _react3.default.createElement(
        "div",
        { style: Object.assign({ minHeight: base.Height }, this.props.style) },
        contents,
        _react3.default.createElement("div", { style: { height: 120 } })
      );
    }
  }]);

  return ReadMode;
}(_react2.Component));

exports.default = ReadMode;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)(module)))

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(129);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pauseCircle = __webpack_require__(689);

var _pauseCircle2 = _interopRequireDefault(_pauseCircle);

var _playCircle = __webpack_require__(690);

var _playCircle2 = _interopRequireDefault(_playCircle);

var _angleDoubleLeft = __webpack_require__(691);

var _angleDoubleLeft2 = _interopRequireDefault(_angleDoubleLeft);

var _angleDoubleRight = __webpack_require__(692);

var _angleDoubleRight2 = _interopRequireDefault(_angleDoubleRight);

var _reactInputRange = __webpack_require__(693);

var _reactInputRange2 = _interopRequireDefault(_reactInputRange);

var _base = __webpack_require__(138);

var base = _interopRequireWildcard(_base);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ControlBar: {
    displayName: "ControlBar"
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: "/Users/junjun/Documents/\u9879\u76EE/js/front-end/youtube4learner/app/components/ConrolBar.js",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

var ControlBar = _wrapComponent("ControlBar")(function (_Component) {
  _inherits(ControlBar, _Component);

  function ControlBar(props) {
    _classCallCheck(this, ControlBar);

    var _this = _possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).call(this, props));

    console.log("ReadMode props", props);
    _this.state = { currentTime: 0.0 };
    return _this;
  }

  _createClass(ControlBar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var total = this.props.total;
      var current = this.props.current;
      var percent = current * 100 / total + "%";

      var progress_bar = _react3.default.createElement(
        "div",
        { style: { height: 10, backgroundColor: "rgba(0,0,0,0.1)", width: "100%", textAlign: "left" } },
        _react3.default.createElement("div", { style: { height: 8, backgroundColor: base.Color.green, width: percent, display: "inline-block" } })
      );

      var btn = null;
      if (this.props.playing == true) {
        btn = _react3.default.createElement(
          "div",
          { style: { display: "inline-block" }, onClick: function onClick() {
              if (_this2.props.pause) _this2.props.pause();
            } },
          " ",
          _react3.default.createElement(_pauseCircle2.default, { style: styles.controlBtn, size: 30, color: true })
        );
      } else {
        btn = _react3.default.createElement(
          "div",
          { style: { display: "inline-block" }, onClick: function onClick() {
              if (_this2.props.play) _this2.props.play();
            } },
          _react3.default.createElement(_playCircle2.default, { size: 30, style: styles.controlBtn
          }),
          " "
        );
      }

      return _react3.default.createElement(
        "div",
        { style: Object.assign({ backgroundColor: base.Color.white1 }, this.props.style) },
        progress_bar,
        _react3.default.createElement(
          "div",
          { style: { width: "100%", color: base.Color.green, padding: 10, margin: 5 } },
          _react3.default.createElement(
            "div",
            { onClick: function onClick() {
                if (_this2.props.go_by_span) _this2.props.go_by_span(-5);
              },
              style: { display: "inline", marginLeft: 40, marginRight: 30, textAlign: "left", padding: 4 } },
            _react3.default.createElement(_angleDoubleLeft2.default, { style: styles.controlShift, size: 30 }),
            _react3.default.createElement(
              "span",
              { style: { verticalAlign: "middle" } },
              "5s"
            )
          ),
          btn,
          _react3.default.createElement(
            "div",
            { onClick: function onClick() {
                if (_this2.props.go_by_span) _this2.props.go_by_span(5);
              },
              style: { display: "inline", marginLeft: 30, marginRight: 40, textAlign: "left", padding: 4 } },
            _react3.default.createElement(
              "span",
              { style: { verticalAlign: "middle" } },
              "5s"
            ),
            _react3.default.createElement(_angleDoubleRight2.default, { style: styles.controlShift, size: 30 })
          )
        )
      );
    }
  }]);

  return ControlBar;
}(_react2.Component));

var styles = {
  controlBtn: { color: base.Color.green },
  controlShift: { color: base.Color.green },
  range: {
    webkitAppearance: "none",
    height: 2,
    width: "100%"
  }
};

exports.default = ControlBar;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)(module)))

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(49);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaPauseCircle = function FaPauseCircle(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm18.7 26.4v-12.8q0-0.3-0.2-0.5t-0.5-0.2h-5.7q-0.3 0-0.5 0.2t-0.2 0.5v12.8q0 0.3 0.2 0.5t0.5 0.2h5.7q0.3 0 0.5-0.2t0.2-0.5z m10 0v-12.8q0-0.3-0.2-0.5t-0.5-0.2h-5.7q-0.3 0-0.5 0.2t-0.2 0.5v12.8q0 0.3 0.2 0.5t0.5 0.2h5.7q0.3 0 0.5-0.2t0.2-0.5z m8.6-6.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
        )
    );
};

exports.default = FaPauseCircle;
module.exports = exports['default'];

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(49);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaPlayCircle = function FaPlayCircle(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6-2.3 8.6-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3z m8.6 18.3q0.7-0.4 0.7-1.2t-0.7-1.2l-12.1-7.2q-0.7-0.4-1.5 0-0.7 0.4-0.7 1.3v14.2q0 0.9 0.7 1.3 0.4 0.2 0.8 0.2 0.3 0 0.7-0.2z' })
        )
    );
};

exports.default = FaPlayCircle;
module.exports = exports['default'];

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(49);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaAngleDoubleLeft = function FaAngleDoubleLeft(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm22 30.7q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.3 0.2 0.5t-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-1.1 1.1q-0.2 0.3-0.5 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1.1q0.3 0.3 0.3 0.5t-0.3 0.6l-8.7 8.7 8.7 8.8q0.3 0.2 0.3 0.5z' })
        )
    );
};

exports.default = FaAngleDoubleLeft;
module.exports = exports['default'];

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(49);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaAngleDoubleRight = function FaAngleDoubleRight(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm22.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-10.4 10.4q-0.2 0.3-0.5 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.2-0.2 0.5-0.2t0.5 0.2l10.4 10.4q0.3 0.2 0.3 0.5z' })
        )
    );
};

exports.default = FaAngleDoubleRight;
module.exports = exports['default'];

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputRange = __webpack_require__(694);

var _inputRange2 = _interopRequireDefault(_inputRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @typedef {Object} ClientRect
 * @property {number} height
 * @property {number} left
 * @property {number} top
 * @property {number} width
 */

/**
 * @typedef {Object} InputRangeClassNames
 * @property {string} activeTrack
 * @property {string} disabledInputRange
 * @property {string} inputRange
 * @property {string} labelContainer
 * @property {string} maxLabel
 * @property {string} minLabel
 * @property {string} slider
 * @property {string} sliderContainer
 * @property {string} track
 * @property {string} valueLabel
 */

/**
 * @typedef {Function} LabelFormatter
 * @param {number} value
 * @param {string} type
 * @return {string}
 */

/**
 * @ignore
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {Object} Range
 * @property {number} min - Min value
 * @property {number} max - Max value
 */

exports.default = _inputRange2.default;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(140);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _valueTransformer = __webpack_require__(695);

var valueTransformer = _interopRequireWildcard(_valueTransformer);

var _defaultClassNames = __webpack_require__(703);

var _defaultClassNames2 = _interopRequireDefault(_defaultClassNames);

var _label = __webpack_require__(365);

var _label2 = _interopRequireDefault(_label);

var _rangePropType = __webpack_require__(704);

var _rangePropType2 = _interopRequireDefault(_rangePropType);

var _valuePropType = __webpack_require__(705);

var _valuePropType2 = _interopRequireDefault(_valuePropType);

var _slider = __webpack_require__(706);

var _slider2 = _interopRequireDefault(_slider);

var _track = __webpack_require__(707);

var _track2 = _interopRequireDefault(_track);

var _utils = __webpack_require__(102);

var _keyCodes = __webpack_require__(708);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * A React component that allows users to input numeric values within a range
 * by dragging its sliders.
 */
var InputRange = (_class = function (_React$Component) {
  _inherits(InputRange, _React$Component);

  _createClass(InputRange, null, [{
    key: 'propTypes',

    /**
     * @ignore
     * @override
     * @return {Object}
     */
    get: function get() {
      return {
        allowSameValues: _propTypes2.default.bool,
        ariaLabelledby: _propTypes2.default.string,
        ariaControls: _propTypes2.default.string,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string),
        disabled: _propTypes2.default.bool,
        draggableTrack: _propTypes2.default.bool,
        formatLabel: _propTypes2.default.func,
        maxValue: _rangePropType2.default,
        minValue: _rangePropType2.default,
        name: _propTypes2.default.string,
        onChangeStart: _propTypes2.default.func,
        onChange: _propTypes2.default.func.isRequired,
        onChangeComplete: _propTypes2.default.func,
        step: _propTypes2.default.number,
        value: _valuePropType2.default
      };
    }

    /**
     * @ignore
     * @override
     * @return {Object}
     */

  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        allowSameValues: false,
        classNames: _defaultClassNames2.default,
        disabled: false,
        maxValue: 10,
        minValue: 0,
        step: 1
      };
    }

    /**
     * @param {Object} props
     * @param {boolean} [props.allowSameValues]
     * @param {string} [props.ariaLabelledby]
     * @param {string} [props.ariaControls]
     * @param {InputRangeClassNames} [props.classNames]
     * @param {boolean} [props.disabled = false]
     * @param {Function} [props.formatLabel]
     * @param {number|Range} [props.maxValue = 10]
     * @param {number|Range} [props.minValue = 0]
     * @param {string} [props.name]
     * @param {string} props.onChange
     * @param {Function} [props.onChangeComplete]
     * @param {Function} [props.onChangeStart]
     * @param {number} [props.step = 1]
     * @param {number|Range} props.value
     */

  }]);

  function InputRange(props) {
    _classCallCheck(this, InputRange);

    /**
     * @private
     * @type {?number}
     */
    var _this = _possibleConstructorReturn(this, (InputRange.__proto__ || Object.getPrototypeOf(InputRange)).call(this, props));

    _this.startValue = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.node = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.trackNode = null;

    /**
     * @private
     * @type {bool}
     */
    _this.isSliderDragging = false;

    /**
     * @private
     * @type {?string}
     */
    _this.lastKeyMoved = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */


  _createClass(InputRange, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * Return the CSS class name of the component
     * @private
     * @return {string}
     */

  }, {
    key: 'getComponentClassName',
    value: function getComponentClassName() {
      if (!this.props.disabled) {
        return this.props.classNames.inputRange;
      }

      return this.props.classNames.disabledInputRange;
    }

    /**
     * Return the bounding rect of the track
     * @private
     * @return {ClientRect}
     */

  }, {
    key: 'getTrackClientRect',
    value: function getTrackClientRect() {
      return this.trackNode.getClientRect();
    }

    /**
     * Return the slider key closest to a point
     * @private
     * @param {Point} position
     * @return {string}
     */

  }, {
    key: 'getKeyByPosition',
    value: function getKeyByPosition(position) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());

      if (this.isMultiValue()) {
        var distanceToMin = (0, _utils.distanceTo)(position, positions.min);
        var distanceToMax = (0, _utils.distanceTo)(position, positions.max);

        if (distanceToMin < distanceToMax) {
          return 'min';
        }
      }

      return 'max';
    }

    /**
     * Return all the slider keys
     * @private
     * @return {string[]}
     */

  }, {
    key: 'getKeys',
    value: function getKeys() {
      if (this.isMultiValue()) {
        return ['min', 'max'];
      }

      return ['max'];
    }

    /**
     * Return true if the difference between the new and the current value is
     * greater or equal to the step amount of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'hasStepDifference',
    value: function hasStepDifference(values) {
      var currentValues = valueTransformer.getValueFromProps(this.props, this.isMultiValue());

      return (0, _utils.length)(values.min, currentValues.min) >= this.props.step || (0, _utils.length)(values.max, currentValues.max) >= this.props.step;
    }

    /**
     * Return true if the component accepts a min and max value
     * @private
     * @return {boolean}
     */

  }, {
    key: 'isMultiValue',
    value: function isMultiValue() {
      return (0, _utils.isObject)(this.props.value);
    }

    /**
     * Return true if the range is within the max and min value of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'isWithinRange',
    value: function isWithinRange(values) {
      if (this.isMultiValue()) {
        return values.min >= this.props.minValue && values.max <= this.props.maxValue && this.props.allowSameValues ? values.min <= values.max : values.min < values.max;
      }

      return values.max >= this.props.minValue && values.max <= this.props.maxValue;
    }

    /**
     * Return true if the new value should trigger a render
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'shouldUpdate',
    value: function shouldUpdate(values) {
      return this.isWithinRange(values) && this.hasStepDifference(values);
    }

    /**
     * Update the position of a slider
     * @private
     * @param {string} key
     * @param {Point} position
     * @return {void}
     */

  }, {
    key: 'updatePosition',
    value: function updatePosition(key, position) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());

      positions[key] = position;
      this.lastKeyMoved = key;

      this.updatePositions(positions);
    }

    /**
     * Update the positions of multiple sliders
     * @private
     * @param {Object} positions
     * @param {Point} positions.min
     * @param {Point} positions.max
     * @return {void}
     */

  }, {
    key: 'updatePositions',
    value: function updatePositions(positions) {
      var values = {
        min: valueTransformer.getValueFromPosition(positions.min, this.props.minValue, this.props.maxValue, this.getTrackClientRect()),
        max: valueTransformer.getValueFromPosition(positions.max, this.props.minValue, this.props.maxValue, this.getTrackClientRect())
      };

      var transformedValues = {
        min: valueTransformer.getStepValueFromValue(values.min, this.props.step),
        max: valueTransformer.getStepValueFromValue(values.max, this.props.step)
      };

      this.updateValues(transformedValues);
    }

    /**
     * Update the value of a slider
     * @private
     * @param {string} key
     * @param {number} value
     * @return {void}
     */

  }, {
    key: 'updateValue',
    value: function updateValue(key, value) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());

      values[key] = value;

      this.updateValues(values);
    }

    /**
     * Update the values of multiple sliders
     * @private
     * @param {Range|number} values
     * @return {void}
     */

  }, {
    key: 'updateValues',
    value: function updateValues(values) {
      if (!this.shouldUpdate(values)) {
        return;
      }

      this.props.onChange(this.isMultiValue() ? values : values.max);
    }

    /**
     * Increment the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'incrementValue',
    value: function incrementValue(key) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] + this.props.step;

      this.updateValue(key, value);
    }

    /**
     * Decrement the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'decrementValue',
    value: function decrementValue(key) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] - this.props.step;

      this.updateValue(key, value);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Listen to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchEndListener',
    value: function addDocumentTouchEndListener() {
      this.removeDocumentTouchEndListener();
      this.node.ownerDocument.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Stop listening to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Stop listening to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchEndListener',
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Handle any "mousemove" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'handleSliderDrag',
    value: function handleSliderDrag(event, key) {
      var _this2 = this;

      if (this.props.disabled) {
        return;
      }

      var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
      this.isSliderDragging = true;
      requestAnimationFrame(function () {
        return _this2.updatePosition(key, position);
      });
    }

    /**
     * Handle any "mousemove" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTrackDrag',
    value: function handleTrackDrag(event, prevEvent) {
      if (this.props.disabled || !this.props.draggableTrack || this.isSliderDragging) {
        return;
      }

      var _props = this.props,
          maxValue = _props.maxValue,
          minValue = _props.minValue,
          _props$value = _props.value,
          max = _props$value.max,
          min = _props$value.min;


      var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
      var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);

      var prevPosition = valueTransformer.getPositionFromEvent(prevEvent, this.getTrackClientRect());
      var prevValue = valueTransformer.getValueFromPosition(prevPosition, minValue, maxValue, this.getTrackClientRect());
      var prevStepValue = valueTransformer.getStepValueFromValue(prevValue, this.props.step);

      var offset = prevStepValue - stepValue;

      var transformedValues = {
        min: min - offset,
        max: max - offset
      };

      this.updateValues(transformedValues);
    }

    /**
     * Handle any "keydown" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'handleSliderKeyDown',
    value: function handleSliderKeyDown(event, key) {
      if (this.props.disabled) {
        return;
      }

      switch (event.keyCode) {
        case _keyCodes.LEFT_ARROW:
        case _keyCodes.DOWN_ARROW:
          event.preventDefault();
          this.decrementValue(key);
          break;

        case _keyCodes.RIGHT_ARROW:
        case _keyCodes.UP_ARROW:
          event.preventDefault();
          this.incrementValue(key);
          break;

        default:
          break;
      }
    }

    /**
     * Handle any "mousedown" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @param {Point} position
     * @return {void}
     */

  }, {
    key: 'handleTrackMouseDown',
    value: function handleTrackMouseDown(event, position) {
      if (this.props.disabled) {
        return;
      }

      var _props2 = this.props,
          maxValue = _props2.maxValue,
          minValue = _props2.minValue,
          _props2$value = _props2.value,
          max = _props2$value.max,
          min = _props2$value.min;


      event.preventDefault();

      var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);

      if (!this.props.draggableTrack || stepValue > max || stepValue < min) {
        this.updatePosition(this.getKeyByPosition(position), position);
      }
    }

    /**
     * Handle the start of any mouse/touch event
     * @private
     * @return {void}
     */

  }, {
    key: 'handleInteractionStart',
    value: function handleInteractionStart() {
      if (this.props.onChangeStart) {
        this.props.onChangeStart(this.props.value);
      }

      if (this.props.onChangeComplete && !(0, _utils.isDefined)(this.startValue)) {
        this.startValue = this.props.value;
      }
    }

    /**
     * Handle the end of any mouse/touch event
     * @private
     * @return {void}
     */

  }, {
    key: 'handleInteractionEnd',
    value: function handleInteractionEnd() {
      if (this.isSliderDragging) {
        this.isSliderDragging = false;
      }

      if (!this.props.onChangeComplete || !(0, _utils.isDefined)(this.startValue)) {
        return;
      }

      if (this.startValue !== this.props.value) {
        this.props.onChangeComplete(this.props.value);
      }

      this.startValue = null;
    }

    /**
     * Handle any "keydown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      this.handleInteractionStart(event);
    }

    /**
     * Handle any "keyup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      this.handleInteractionEnd(event);
    }

    /**
     * Handle any "mousedown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      this.handleInteractionStart(event);
      this.addDocumentMouseUpListener();
    }

    /**
     * Handle any "mouseup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentMouseUpListener();
    }

    /**
     * Handle any "touchstart" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      this.handleInteractionStart(event);
      this.addDocumentTouchEndListener();
    }

    /**
     * Handle any "touchend" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */

  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentTouchEndListener();
    }

    /**
     * Return JSX of sliders
     * @private
     * @return {JSX.Element}
     */

  }, {
    key: 'renderSliders',
    value: function renderSliders() {
      var _this3 = this;

      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);
      var keys = this.props.allowSameValues && this.lastKeyMoved === 'min' ? this.getKeys().reverse() : this.getKeys();

      return keys.map(function (key) {
        var value = values[key];
        var percentage = percentages[key];

        var _props3 = _this3.props,
            maxValue = _props3.maxValue,
            minValue = _props3.minValue;


        if (key === 'min') {
          maxValue = values.max;
        } else {
          minValue = values.min;
        }

        var slider = _react2.default.createElement(_slider2.default, {
          ariaLabelledby: _this3.props.ariaLabelledby,
          ariaControls: _this3.props.ariaControls,
          classNames: _this3.props.classNames,
          formatLabel: _this3.props.formatLabel,
          key: key,
          maxValue: maxValue,
          minValue: minValue,
          onSliderDrag: _this3.handleSliderDrag,
          onSliderKeyDown: _this3.handleSliderKeyDown,
          percentage: percentage,
          type: key,
          value: value });

        return slider;
      });
    }

    /**
     * Return JSX of hidden inputs
     * @private
     * @return {JSX.Element}
     */

  }, {
    key: 'renderHiddenInputs',
    value: function renderHiddenInputs() {
      var _this4 = this;

      if (!this.props.name) {
        return [];
      }

      var isMultiValue = this.isMultiValue();
      var values = valueTransformer.getValueFromProps(this.props, isMultiValue);

      return this.getKeys().map(function (key) {
        var value = values[key];
        var name = isMultiValue ? '' + _this4.props.name + (0, _utils.captialize)(key) : _this4.props.name;

        return _react2.default.createElement('input', { key: key, type: 'hidden', name: name, value: value });
      });
    }

    /**
     * @ignore
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var componentClassName = this.getComponentClassName();
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);

      return _react2.default.createElement(
        'div',
        {
          'aria-disabled': this.props.disabled,
          ref: function ref(node) {
            _this5.node = node;
          },
          className: componentClassName,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart },
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'min' },
          this.props.minValue
        ),
        _react2.default.createElement(
          _track2.default,
          {
            classNames: this.props.classNames,
            draggableTrack: this.props.draggableTrack,
            ref: function ref(trackNode) {
              _this5.trackNode = trackNode;
            },
            percentages: percentages,
            onTrackDrag: this.handleTrackDrag,
            onTrackMouseDown: this.handleTrackMouseDown },
          this.renderSliders()
        ),
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'max' },
          this.props.maxValue
        ),
        this.renderHiddenInputs()
      );
    }
  }]);

  return InputRange;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleSliderDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSliderDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTrackDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTrackDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleSliderKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSliderKeyDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTrackMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTrackMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleInteractionStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleInteractionStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleInteractionEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleInteractionEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchEnd'), _class.prototype)), _class);
exports.default = InputRange;
module.exports = exports['default'];
//# sourceMappingURL=input-range.js.map

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getPercentageFromPosition = getPercentageFromPosition;
exports.getValueFromPosition = getValueFromPosition;
exports.getValueFromProps = getValueFromProps;
exports.getPercentageFromValue = getPercentageFromValue;
exports.getPercentagesFromValues = getPercentagesFromValues;
exports.getPositionFromValue = getPositionFromValue;
exports.getPositionsFromValues = getPositionsFromValues;
exports.getPositionFromEvent = getPositionFromEvent;
exports.getStepValueFromValue = getStepValueFromValue;

var _utils = __webpack_require__(102);

/**
 * Convert a point into a percentage value
 * @ignore
 * @param {Point} position
 * @param {ClientRect} clientRect
 * @return {number} Percentage value
 */
function getPercentageFromPosition(position, clientRect) {
  var length = clientRect.width;
  var sizePerc = position.x / length;

  return sizePerc || 0;
}

/**
 * Convert a point into a model value
 * @ignore
 * @param {Point} position
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {number}
 */
function getValueFromPosition(position, minValue, maxValue, clientRect) {
  var sizePerc = getPercentageFromPosition(position, clientRect);
  var valueDiff = maxValue - minValue;

  return minValue + valueDiff * sizePerc;
}

/**
 * Convert props into a range value
 * @ignore
 * @param {Object} props
 * @param {boolean} isMultiValue
 * @return {Range}
 */
function getValueFromProps(props, isMultiValue) {
  if (isMultiValue) {
    return _extends({}, props.value);
  }

  return {
    min: props.minValue,
    max: props.value
  };
}

/**
 * Convert a model value into a percentage value
 * @ignore
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @return {number}
 */
function getPercentageFromValue(value, minValue, maxValue) {
  var validValue = (0, _utils.clamp)(value, minValue, maxValue);
  var valueDiff = maxValue - minValue;
  var valuePerc = (validValue - minValue) / valueDiff;

  return valuePerc || 0;
}

/**
 * Convert model values into percentage values
 * @ignore
 * @param {Range} values
 * @param {number} minValue
 * @param {number} maxValue
 * @return {Range}
 */
function getPercentagesFromValues(values, minValue, maxValue) {
  return {
    min: getPercentageFromValue(values.min, minValue, maxValue),
    max: getPercentageFromValue(values.max, minValue, maxValue)
  };
}

/**
 * Convert a value into a point
 * @ignore
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {Point} Position
 */
function getPositionFromValue(value, minValue, maxValue, clientRect) {
  var length = clientRect.width;
  var valuePerc = getPercentageFromValue(value, minValue, maxValue);
  var positionValue = valuePerc * length;

  return {
    x: positionValue,
    y: 0
  };
}

/**
 * Convert a range of values into points
 * @ignore
 * @param {Range} values
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {Range}
 */
function getPositionsFromValues(values, minValue, maxValue, clientRect) {
  return {
    min: getPositionFromValue(values.min, minValue, maxValue, clientRect),
    max: getPositionFromValue(values.max, minValue, maxValue, clientRect)
  };
}

/**
 * Convert an event into a point
 * @ignore
 * @param {Event} event
 * @param {ClientRect} clientRect
 * @return {Point}
 */
function getPositionFromEvent(event, clientRect) {
  var length = clientRect.width;

  var _ref = event.touches ? event.touches[0] : event,
      clientX = _ref.clientX;

  return {
    x: (0, _utils.clamp)(clientX - clientRect.left, 0, length),
    y: 0
  };
}

/**
 * Convert a value into a step value
 * @ignore
 * @param {number} value
 * @param {number} valuePerStep
 * @return {number}
 */
function getStepValueFromValue(value, valuePerStep) {
  return Math.round(value / valuePerStep) * valuePerStep;
}
//# sourceMappingURL=value-transformer.js.map

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = captialize;
/**
 * Captialize a string
 * @ignore
 * @param {string} string
 * @return {string}
 */
function captialize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = exports["default"];
//# sourceMappingURL=captialize.js.map

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clamp;
/**
 * Clamp a value between a min and max value
 * @ignore
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
module.exports = exports["default"];
//# sourceMappingURL=clamp.js.map

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = distanceTo;
/**
 * Calculate the distance between pointA and pointB
 * @ignore
 * @param {Point} pointA
 * @param {Point} pointB
 * @return {number} Distance
 */
function distanceTo(pointA, pointB) {
  var xDiff = Math.pow(pointB.x - pointA.x, 2);
  var yDiff = Math.pow(pointB.y - pointA.y, 2);

  return Math.sqrt(xDiff + yDiff);
}
module.exports = exports["default"];
//# sourceMappingURL=distance-to.js.map

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDefined;
/**
 * Check if a value is defined
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isDefined(value) {
  return value !== undefined && value !== null;
}
module.exports = exports["default"];
//# sourceMappingURL=is-defined.js.map

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumber;
/**
 * Check if a value is a number
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}
module.exports = exports['default'];
//# sourceMappingURL=is-number.js.map

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isObject;
/**
 * Check if a value is an object
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isObject(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}
module.exports = exports['default'];
//# sourceMappingURL=is-object.js.map

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = length;
/**
 * Calculate the absolute difference between two numbers
 * @ignore
 * @param {number} numA
 * @param {number} numB
 * @return {number}
 */
function length(numA, numB) {
  return Math.abs(numA - numB);
}
module.exports = exports["default"];
//# sourceMappingURL=length.js.map

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default CSS class names
 * @ignore
 * @type {InputRangeClassNames}
 */
var DEFAULT_CLASS_NAMES = {
  activeTrack: 'input-range__track input-range__track--active',
  disabledInputRange: 'input-range input-range--disabled',
  inputRange: 'input-range',
  labelContainer: 'input-range__label-container',
  maxLabel: 'input-range__label input-range__label--max',
  minLabel: 'input-range__label input-range__label--min',
  slider: 'input-range__slider',
  sliderContainer: 'input-range__slider-container',
  track: 'input-range__track input-range__track--background',
  valueLabel: 'input-range__label input-range__label--value'
};

exports.default = DEFAULT_CLASS_NAMES;
module.exports = exports['default'];
//# sourceMappingURL=default-class-names.js.map

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rangePropType;

var _utils = __webpack_require__(102);

/**
 * @ignore
 * @param {Object} props - React component props
 * @return {?Error} Return Error if validation fails
 */
function rangePropType(props) {
  var maxValue = props.maxValue,
      minValue = props.minValue;


  if (!(0, _utils.isNumber)(minValue) || !(0, _utils.isNumber)(maxValue)) {
    return new Error('"minValue" and "maxValue" must be a number');
  }

  if (minValue >= maxValue) {
    return new Error('"minValue" must be smaller than "maxValue"');
  }
}
module.exports = exports['default'];
//# sourceMappingURL=range-prop-type.js.map

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = valuePropType;

var _utils = __webpack_require__(102);

/**
 * @ignore
 * @param {Object} props
 * @return {?Error} Return Error if validation fails
 */
function valuePropType(props, propName) {
  var maxValue = props.maxValue,
      minValue = props.minValue;

  var value = props[propName];

  if (!(0, _utils.isNumber)(value) && (!(0, _utils.isObject)(value) || !(0, _utils.isNumber)(value.min) || !(0, _utils.isNumber)(value.max))) {
    return new Error('"' + propName + '" must be a number or a range object');
  }

  if ((0, _utils.isNumber)(value) && (value < minValue || value > maxValue)) {
    return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
  }

  if ((0, _utils.isObject)(value) && (value.min < minValue || value.min > maxValue || value.max < minValue || value.max > maxValue)) {
    return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
  }
}
module.exports = exports['default'];
//# sourceMappingURL=value-prop-type.js.map

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(140);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _label = __webpack_require__(365);

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * @ignore
 */
var Slider = (_class = function (_React$Component) {
  _inherits(Slider, _React$Component);

  _createClass(Slider, null, [{
    key: 'propTypes',

    /**
     * Accepted propTypes of Slider
     * @override
     * @return {Object}
     * @property {Function} ariaLabelledby
     * @property {Function} ariaControls
     * @property {Function} className
     * @property {Function} formatLabel
     * @property {Function} maxValue
     * @property {Function} minValue
     * @property {Function} onSliderDrag
     * @property {Function} onSliderKeyDown
     * @property {Function} percentage
     * @property {Function} type
     * @property {Function} value
     */
    get: function get() {
      return {
        ariaLabelledby: _propTypes2.default.string,
        ariaControls: _propTypes2.default.string,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
        formatLabel: _propTypes2.default.func,
        maxValue: _propTypes2.default.number,
        minValue: _propTypes2.default.number,
        onSliderDrag: _propTypes2.default.func.isRequired,
        onSliderKeyDown: _propTypes2.default.func.isRequired,
        percentage: _propTypes2.default.number.isRequired,
        type: _propTypes2.default.string.isRequired,
        value: _propTypes2.default.number.isRequired
      };
    }

    /**
     * @param {Object} props
     * @param {string} [props.ariaLabelledby]
     * @param {string} [props.ariaControls]
     * @param {InputRangeClassNames} props.classNames
     * @param {Function} [props.formatLabel]
     * @param {number} [props.maxValue]
     * @param {number} [props.minValue]
     * @param {Function} props.onSliderKeyDown
     * @param {Function} props.onSliderDrag
     * @param {number} props.percentage
     * @param {number} props.type
     * @param {number} props.value
     */

  }]);

  function Slider(props) {
    _classCallCheck(this, Slider);

    /**
     * @private
     * @type {?Component}
     */
    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.node = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */


  _createClass(Slider, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
      this.removeDocumentTouchMoveListener();
    }

    /**
     * @private
     * @return {Object}
     */

  }, {
    key: 'getStyle',
    value: function getStyle() {
      var perc = (this.props.percentage || 0) * 100;
      var style = {
        position: 'absolute',
        left: perc + '%'
      };

      return style;
    }

    /**
     * Listen to mousemove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseMoveListener',
    value: function addDocumentMouseMoveListener() {
      this.removeDocumentMouseMoveListener();
      this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Listen to touchmove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchMoveListener',
    value: function addDocumentTouchMoveListener() {
      this.removeDocumentTouchMoveListener();
      this.node.ownerDocument.addEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * Listen to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchEndListener',
    value: function addDocumentTouchEndListener() {
      this.removeDocumentTouchEndListener();
      this.node.ownerDocument.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseMoveListener',
    value: function removeDocumentMouseMoveListener() {
      this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchMoveListener',
    value: function removeDocumentTouchMoveListener() {
      this.node.ownerDocument.removeEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchEndListener',
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() {
      this.addDocumentMouseMoveListener();
      this.addDocumentMouseUpListener();
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart() {
      this.addDocumentTouchEndListener();
      this.addDocumentTouchMoveListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd() {
      this.removeDocumentTouchMoveListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      this.props.onSliderKeyDown(event, this.props.type);
    }

    /**
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.getStyle();

      return _react2.default.createElement(
        'span',
        {
          className: this.props.classNames.sliderContainer,
          ref: function ref(node) {
            _this2.node = node;
          },
          style: style },
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'value' },
          this.props.value
        ),
        _react2.default.createElement('div', {
          'aria-labelledby': this.props.ariaLabelledby,
          'aria-controls': this.props.ariaControls,
          'aria-valuemax': this.props.maxValue,
          'aria-valuemin': this.props.minValue,
          'aria-valuenow': this.props.value,
          className: this.props.classNames.slider,
          draggable: 'false',
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          role: 'slider',
          tabIndex: '0' })
      );
    }
  }]);

  return Slider;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyDown'), _class.prototype)), _class);
exports.default = Slider;
module.exports = exports['default'];
//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(140);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * @ignore
 */
var Track = (_class = function (_React$Component) {
  _inherits(Track, _React$Component);

  _createClass(Track, null, [{
    key: 'propTypes',

    /**
     * @override
     * @return {Object}
     * @property {Function} children
     * @property {Function} classNames
     * @property {Boolean} draggableTrack
     * @property {Function} onTrackDrag
     * @property {Function} onTrackMouseDown
     * @property {Function} percentages
     */
    get: function get() {
      return {
        children: _propTypes2.default.node.isRequired,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
        draggableTrack: _propTypes2.default.bool,
        onTrackDrag: _propTypes2.default.func,
        onTrackMouseDown: _propTypes2.default.func.isRequired,
        percentages: _propTypes2.default.objectOf(_propTypes2.default.number).isRequired
      };
    }

    /**
     * @param {Object} props
     * @param {InputRangeClassNames} props.classNames
     * @param {Boolean} props.draggableTrack
     * @param {Function} props.onTrackDrag
     * @param {Function} props.onTrackMouseDown
     * @param {number} props.percentages
     */

  }]);

  function Track(props) {
    _classCallCheck(this, Track);

    /**
     * @private
     * @type {?Component}
     */
    var _this = _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).call(this, props));

    _this.node = null;
    _this.trackDragEvent = null;
    return _this;
  }

  /**
   * @private
   * @return {ClientRect}
   */


  _createClass(Track, [{
    key: 'getClientRect',
    value: function getClientRect() {
      return this.node.getBoundingClientRect();
    }

    /**
     * @private
     * @return {Object} CSS styles
     */

  }, {
    key: 'getActiveTrackStyle',
    value: function getActiveTrackStyle() {
      var width = (this.props.percentages.max - this.props.percentages.min) * 100 + '%';
      var left = this.props.percentages.min * 100 + '%';

      return { left: left, width: width };
    }

    /**
     * Listen to mousemove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseMoveListener',
    value: function addDocumentMouseMoveListener() {
      this.removeDocumentMouseMoveListener();
      this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseMoveListener',
    value: function removeDocumentMouseMoveListener() {
      this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      if (!this.props.draggableTrack) {
        return;
      }

      if (this.trackDragEvent !== null) {
        this.props.onTrackDrag(event, this.trackDragEvent);
      }

      this.trackDragEvent = event;
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      if (!this.props.draggableTrack) {
        return;
      }

      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.trackDragEvent = null;
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var clientX = event.touches ? event.touches[0].clientX : event.clientX;
      var trackClientRect = this.getClientRect();
      var position = {
        x: clientX - trackClientRect.left,
        y: 0
      };

      this.props.onTrackMouseDown(event, position);

      if (this.props.draggableTrack) {
        this.addDocumentMouseMoveListener();
        this.addDocumentMouseUpListener();
      }
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      event.preventDefault();

      this.handleMouseDown(event);
    }

    /**
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activeTrackStyle = this.getActiveTrackStyle();

      return _react2.default.createElement(
        'div',
        {
          className: this.props.classNames.track,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          ref: function ref(node) {
            _this2.node = node;
          } },
        _react2.default.createElement('div', {
          style: activeTrackStyle,
          className: this.props.classNames.activeTrack }),
        this.props.children
      );
    }
  }]);

  return Track;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype)), _class);
exports.default = Track;
module.exports = exports['default'];
//# sourceMappingURL=track.js.map

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @ignore */
var DOWN_ARROW = exports.DOWN_ARROW = 40;

/** @ignore */
var LEFT_ARROW = exports.LEFT_ARROW = 37;

/** @ignore */
var RIGHT_ARROW = exports.RIGHT_ARROW = 39;

/** @ignore */
var UP_ARROW = exports.UP_ARROW = 38;
//# sourceMappingURL=key-codes.js.map

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(49);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaYoutubePlay = function FaYoutubePlay(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm28.6 20q0-0.8-0.7-1.2l-11.4-7.1q-0.7-0.5-1.5-0.1-0.7 0.4-0.7 1.3v14.2q0 0.9 0.7 1.3 0.4 0.2 0.7 0.2 0.5 0 0.8-0.3l11.4-7.1q0.7-0.4 0.7-1.2z m11.4 0q0 2.1 0 3.3t-0.2 3.1-0.5 3.3q-0.4 1.6-1.6 2.7t-2.7 1.3q-5 0.6-15 0.6t-15-0.6q-1.6-0.2-2.8-1.3t-1.5-2.7q-0.3-1.5-0.5-3.3t-0.2-3.1 0-3.3 0-3.3 0.2-3.1 0.5-3.3q0.4-1.6 1.6-2.7t2.7-1.3q5-0.6 15-0.6t15 0.6q1.6 0.2 2.8 1.3t1.5 2.7q0.3 1.5 0.5 3.3t0.2 3.1 0 3.3z' })
        )
    );
};

exports.default = FaYoutubePlay;
module.exports = exports['default'];

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(49);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoBook = function GoBook(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 22.5h-5c-1.3 0-2.5 1.3-2.5 2.5h10c0-1.3-1.2-2.5-2.5-2.5z m-2.1-16.2c-6.6 0-8.2 1.2-9.1 2.1-1-0.9-2.6-2.1-9.2-2.1s-9.6 1.7-9.6 3v22.9c1.1-0.6 4.6-1.9 8.4-2.2 4.4-0.4 9.1 0.4 9.1 1.2 0 0.7 0.3 1.3 1.2 1.3h0.1c0.9 0 1.2-0.6 1.2-1.2 0-0.9 4.6-1.7 9.1-1.3 3.7 0.3 7.3 1.6 8.4 2.2v-22.9c0-1.3-3.1-3-9.6-3z m-10.4 22.3c-1.2-0.6-4-1.1-7.5-1.1s-6.6 0.5-7.5 1.1v-17.3s2.5-2.4 7.5-2.4 7.5 1.1 7.5 2.4v17.3z m17.5 0c-0.9-0.6-4-1.1-7.5-1.1s-6.3 0.5-7.5 1.1v-17.3s2.5-2.4 7.5-2.4 7.5 1.1 7.5 2.4v17.3z m-5-11.1h-5c-1.3 0-2.5 1.3-2.5 2.5h10c0-1.3-1.2-2.5-2.5-2.5z m0-5h-5c-1.3 0-2.5 1.3-2.5 2.5h10c0-1.3-1.2-2.5-2.5-2.5z m-17.5 5h-5c-1.2 0-2.5 1.2-2.5 2.5h10c0-1.2-1.2-2.5-2.5-2.5z m0 5h-5c-1.2 0-2.5 1.2-2.5 2.5h10c0-1.2-1.2-2.5-2.5-2.5z m0-10h-5c-1.2 0-2.5 1.2-2.5 2.5h10c0-1.2-1.2-2.5-2.5-2.5z' })
        )
    );
};

exports.default = GoBook;
module.exports = exports['default'];

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(49);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaTwitter = function FaTwitter(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.7 9.1q-1.5 2.2-3.7 3.7 0.1 0.3 0.1 1 0 2.9-0.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3 0.8 0.1 1.7 0.1 5 0 9-3-2.4-0.1-4.2-1.5t-2.6-3.5q0.8 0.1 1.4 0.1 1 0 1.9-0.3-2.5-0.5-4.1-2.5t-1.7-4.6v0q1.5 0.8 3.3 0.9-1.5-1-2.4-2.6t-0.8-3.4q0-2 0.9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-0.2-0.9-0.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-0.5 4.6-1.7-0.8 2.5-3.2 3.9 2.1-0.2 4.2-1.1z' })
        )
    );
};

exports.default = FaTwitter;
module.exports = exports['default'];

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40)))

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ })

},[424]);