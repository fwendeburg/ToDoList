/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfToday/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfToday/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfToday)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */

function startOfToday() {
  return (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ "./src/ToDo.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");



class App {
    static #storage;
    static #todo;

    static initApp() {
        this.#storage = new _Storage__WEBPACK_IMPORTED_MODULE_1__.default('Local-ToDoList');
        this.#todo = _ToDo__WEBPACK_IMPORTED_MODULE_0__.default.withJSONData(this.#storage.getSavedData());
    }

    static updateTaskInfo(taskId, name, desc, dueDate, priority, project) {
        this.#todo.updateTaskInfo(taskId, name, desc, dueDate, priority, project);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static getTask(taskId) {
        return this.#todo.getTask(taskId);
    }

    static changeTaskStatus(taskId) {
        this.#todo.changeTaskStatus(taskId);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static deleteTask(taskId) {
        this.#todo.deleteTask(taskId);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static getProjectByName(projectName) {
        return this.#todo.getProjectByName(projectName);
    }

    static addNewProject(newProject) {
        this.#todo.addNewProject(newProject);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static addNewTask(newTask) {
        this.#todo.addNewTask(newTask);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static getTasks() {
        return this.#todo.getTasks();
    }

    static getDueTodayTasks() {
        return this.#todo.getDueTodayTasks();
    }

    static getDueThisWeekTasks() {
        return this.#todo.getDueThisWeekTasks();
    }

    static getTasksByProject(projectName) {
        return this.#todo.getTasksByProject(projectName);
    }

    static getProjects() {
        return this.#todo.getProjects();
    }

    static getProjectNames() {
        return this.#todo.getProjectNames();
    }

    static removeData() {
        this.#storage.removeData();
    }

    static getProjectById(projId) {
        return this.#todo.getProjectById(projId);
    }
}



/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    static #nextId = 0;

    constructor(name) {
        this.name = name;
        this.id = Project.#nextId++;
    }

    deleteTask(taskPos) {
        this.tasks.splice(taskPos, 1);
    }

    updateTaskInfo(taskPos, name, desc, dueDate, priority) {
        this.tasks[taskPos].setAttributes(name, desc, dueDate, priority);
    }

    toggleTaskStatus(taskId) {
        this.tasks[this.getTaskIndex(taskId)].toggleTaskStatus();
    }

    getTask(taskId) {
        let task = null;

        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() == taskId) {
                task = this.tasks[i];
            }
        }

        return task;
    }

    getTasks() {
        return this.tasks
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
class Storage {
    #saveName;

    constructor(saveName) {
        this.#saveName = saveName; 
    }

    saveData(data) {
        localStorage.setItem(this.#saveName, JSON.stringify(data));
    }

    getSavedData() {
        let loadedData = JSON.parse(localStorage.getItem(this.#saveName));

        if (loadedData === null) {
            loadedData = {
                projects: [],
                tasks: []
            }
        }

        return loadedData;
    }

    removeData() {
        localStorage.removeItem(this.#saveName);
    }
}

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    static #nextId = 0;

    constructor(name, description, dueDate, priority, project) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = Task.#nextId++;
        this.isCompleted = false;
        this.project = null;
    }

    setProperties(name, description, dueDate, priority, project) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    toggleTaskStatus() {
        this.isCompleted = !this.isCompleted;
    }

    getStatus() {
        return this.isCompleted;
    }

    getName() {
        return this.name;
    }

    getDescription = () => {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    getId() {
        return this.id;
    }

    getProject() {
        return this.project;
    }
}

/***/ }),

/***/ "./src/ToDo.js":
/*!*********************!*\
  !*** ./src/ToDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");





class ToDo {
    #projects;
    #tasks;

    constructor() {
        this.#projects = [];
        this.#tasks = [];
    }

    static withJSONData(jsonData) {
        let todo = new ToDo();

        todo.#setProjects(jsonData.projects.map(project => Object.assign(new _Project_js__WEBPACK_IMPORTED_MODULE_0__.default(), project)));
        todo.#setTasks(jsonData.tasks.map(task => Object.assign(new _Task_js__WEBPACK_IMPORTED_MODULE_1__.default(), task)));

        return todo;
    }

    #setProjects(projects) {
        this.#projects = projects;
    }

    #setTasks(tasks) {
        this.#tasks = tasks;
    }

    addNewProject(project) {
        this.#projects.push(project);
    }

    addNewTask(task) {
        this.#tasks.push(task);
    }

    #getTaskIndex(taskId) {
        let index = -1;

        for (let i = 0; i < this.#tasks.length; i++) {
            if (taskId == this.#tasks[i].getId()) {
                index = i;
            }
        }
        
        return index;
    }

    changeTaskStatus(taskId) {
        let index = this.#getTaskIndex(taskId);

        if (index != -1) {
            this.#tasks[index].toggleTaskStatus(taskId);
        }
    }

    deleteTask(taskId) {
        let taskIndex = this.#getTaskIndex(taskId)
        
        if (taskIndex != -1) {
            this.#tasks.splice(this.#getTaskIndex(taskId), 1);
        }
    }

    updateTaskInfo(taskId, name, desc, dueDate, priority, project) {
        let taskIndex = this.#getTaskIndex(taskId)
        
        if (taskIndex != -1) {
            this.#tasks[taskIndex].setProperties(name, desc, dueDate, priority, project);
        }
    }

    getTasks() {
        return this.#tasks;
    }

    getProjects() {
        return this.#projects;
    }

    #getProjectIndex(projectId) {
        let index = -1;

        for (let i = 0; i < this.#projects.length; i++) {
            if (this.#projects[i].getId() === projectId) {
                index = i;
                break;
            }
        }

        return index;
    }

    getProjectNames() {
        return this.#projects.map(project => project.getName());
    }

    getProjectByName(projName) {
        for (let i = 0; i < this.#projects.length; i++) {
            if (this.#projects[i].getName() === projName) {
                return this.#projects[i];
            }
        }

        return null;
    }

    getProjectById(projId) {
        for (let i = 0; i < this.#projects.length; i++) {
            if (this.#projects[i].getId() === projId) {
                return this.#projects[i];
            }
        }

        return null;
    }

    getTasksByProject(projectName) {
        let projectId = this.getProjectByName(projectName).getId();

        let tasks = [];

        for (let i = 0; i < this.#tasks.length; i++) {
            if (this.#tasks[i].getProject() == projectId) {
                tasks.push(this.#tasks[i]);
            }
        }

        return tasks;
    }

    getDueTodayTasks() {
        let tasks = [];

        for (let i = 0; i < this.#tasks.length; i++) {
            if (this.#tasks[i].getDueDate() === '') {
                continue;
            }

            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(this.#tasks[i].getDueDate()))) {
                tasks.push(this.#tasks[i]);
            }
        }

        return tasks;
    }

    getDueThisWeekTasks = () => {
        let tasks = [];
        let nextWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(), 7);

        for (let i = 0; i < this.#tasks.length; i++) {
            if (this.#tasks[i].getDueDate() === '') {
                continue;
            }

            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(this.#tasks[i].getDueDate()), nextWeek) != 1) {
                tasks.push(this.#tasks[i]);
            }
        }

        return tasks;
    }

    getTask(taskId) {
        return this.#tasks[this.#getTaskIndex(taskId)];
    }

    toJSONObject() {
        return {
            projects: this.#projects,
            tasks: this.#tasks
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");




const kNOEMPTYFIELD = 'This field can\'t be empty';
const kNOTWHITESPACEALONE = 'Whitespaces alone are not valid';
const kDATEINVALID = 'The due date can\'t be before today';

class UI {

    
    /*
    **  Responsiveness related methods
    */

    static #activateBurgerMenu = () => {
        const body = document.querySelector('body');
        const burgerMenuBtn = document.querySelector('.burger-menu');
        const sidebar = document.querySelector('#sidebar');

        let burgerMenuOpen = false;

        burgerMenuBtn.addEventListener('click', () => {
            if (!burgerMenuOpen) {
                burgerMenuOpen = true;
            }
            else {
                burgerMenuOpen = false;
            }
        
            sidebar.classList.toggle('visible-mobile-nav');
            burgerMenuBtn.classList.toggle('open');
        });
    }

    /*
    **  Modals
    */

    static #showDeleteDataModal() {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="delete-data-modal">
                <div class="modal-header">
                    <h4>Delete stored data?</h4>
                </div>

                <p class="modal-text">
                    You are about to delete all stored project and task data.
                    <br>
                    Are you sure you want to do this?
                </p>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="red-btn bottom-modal-btn">Delete data</button>
                </div>
            </div>
        </div>
        `);

        this.#addModalEventListeners('deleteStoredData');
    }

    static #showNewTaskModal = () => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="add-task-modal">
                <div class="modal-header">
                    <h4>New task</h4>
                </div>

                <div class="inputs">
                    <div class="modal-left-panel">
                        <div class="form-input">
                            <label for="task-name-input">Title</label>
                            <br>
                            <input required type="text" id="task-name-input">
                        </div>
                        <div class="form-input">
                            <label for="task-description-input" >Description</label>
                            <br>
                            <textarea id="task-description-input"></textarea>
                        </div>
                    </div>
                    <div class="modal-right-panel">
                        <div class="form-input">
                            <label for="task-duedate-input">Due date</label>
                            <br>
                            <input type="date" id="task-duedate-input">
                        </div>
                        <div class="form-input">
                            <label for="task-priority-input">Priority</label>
                            <br>
                            <select required id="task-priority-input">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <div class="form-input">
                            <label for="task-project-input">Project</label>
                            <br>
                            <select required id="task-project-input">
                                <option>No project</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Add task</button>
                </div>
            </div>
        </div>`
        );

        this.#addOptionsToProjectSelector();

        this.#addModalEventListeners('newTask');
    }

    static #showNewProjectModal = () => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="add-project-modal">
                <div class="modal-header">
                    <h4>New project</h4>
                </div>

                <div class="inputs">
                    <div class="form-input all-sides-20px-margin">
                        <label for="proj-name-input">Title</label>
                        <br>
                        <input required type="text" id="proj-name-input">
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Add project</button>
                </div>
            </div>
        </div>`
        );

        UI.#addModalEventListeners('newProject');
    }

    static #showEditTaskModal = (taskId) => {
        const body = document.querySelector('body');
        const task = _App__WEBPACK_IMPORTED_MODULE_2__.default.getTask(taskId);

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="edit-task-modal">
                <div class="modal-header">
                    <h4>Edit Task</h4>
                </div>

                <div class="inputs">
                    <div class="modal-left-panel">
                        <div class="form-input">
                            <label for="task-name-input">Title</label>
                            <br>
                            <input required type="text" id="task-name-input" value="${task.getName()}">
                        </div>
                        <div class="form-input">
                            <label for="task-descritpion-input">Description</label>
                            <br>
                            <textarea id="task-description-input">${task.getDescription()}</textarea>
                        </div>
                    </div>
                    <div class="modal-right-panel">
                        <div class="form-input">
                            <label for="task-duedate-input">Due date</label>
                            <br>
                            <input type="date" id="task-duedate-input" value="${task.getDueDate()}">
                        </div>
                        <div class="form-input">
                            <label for="task-priority-input">Priority</label>
                            <br>
                            <select required id="task-priority-input">
                                <option ${(task.getPriority() === 'Low')? 'selected="selected"' : ''}>Low</option>
                                <option ${(task.getPriority() === 'Medium')? 'selected="selected"' : ''}>Medium</option>
                                <option ${(task.getPriority() === 'High')? 'selected="selected"' : ''}>High</option>
                            </select>
                        </div>
                        <div class="form-input">
                            <label for="task-project-input">Project</label>
                            <br>
                            <select required id="task-project-input">
                                <option>No project</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Save</button>
                </div>
            </div>
        </div>`
        );

        this.#addOptionsToProjectSelector();

        UI.#addModalEventListeners('editTask', taskId);
    }

    static #showTaskInfoModal = (taskId) => {
        const body = document.querySelector('body');
        const task = _App__WEBPACK_IMPORTED_MODULE_2__.default.getTask(taskId);

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="show-task-modal">
                <div class="modal-header">
                    <h4>${task.getName()}</h4>
                </div>

                <div class="properties">
                    <div class="show-task-modal-left-panel">
                        <div>
                            <p class="property-name">Title:</p>
                            <p>${task.getName()}</p>
                        </div>
                        <div>
                            <p class="property-name">Description:</p>
                            <p>${task.getDescription() === ''? 'No description set' : task.getDescription()}</p>
                        </div>
                    </div>
                    <div class="show-task-modal-right-panel">
                        <div>
                            <p class="property-name">Due date:</p>
                            <p>${task.getDueDate() === ''? 'No due date set' : task.getDueDate()}</p>
                        </div>
                        <div>
                            <p class="property-name">Priority:</p>
                            <p>${task.getPriority()}</p>
                        </div>
                        <div>
                            <p class="property-name">Project:</p>
                        <p>${task.getProject() === null? 'Task not assigned to a project' : _App__WEBPACK_IMPORTED_MODULE_2__.default.getProjectById(task.getProject()).getName()}</p>
                    </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Edit task</button>
                </div>
            </div>
        </div>`
        );

        UI.#addModalEventListeners('taskInfo', taskId);
    }

    /*
    **  Update task/project display
    */

    static #getHTMLElementByTaskId(id, elements) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].dataset.taskid == id) {
                return elements[i];
            };
        }

        return null;
    }

    static #displayNewTask = (name, dueDate, priority, id, taskStatus) => {
        const content = document.querySelector('.content');

        content.insertAdjacentHTML('beforeend', `
        <div class="task-entry" data-taskid ="${id}">
                <div class="left-side">
                    <input type="checkbox" class="task-finished" data-taskid="${id}">
                    <label>${name} - ${dueDate}</label>
                </div>

                <div class="right-side">
                    <span class="material-icons-outlined edit-task-btn" data-taskid ="${id}">edit</span>
                    <span class="material-icons delete-task-btn" data-taskid ="${id}">delete_outline</span>
                    <span class="task-priority material-icons task-${priority.toLowerCase()}-priority">circle</span>
                </div>
            </div>
        </div>`
        );

        const completedTaskInputs = document.querySelectorAll('.task-finished');

        this.#getHTMLElementByTaskId(id, completedTaskInputs).addEventListener('click', (e) => {
            this.#changeTaskStatus(id, e.target.parentNode.parentNode);
        })

        if (taskStatus) {
            const task = this.#getHTMLElementByTaskId(id, document.querySelectorAll('.task-entry'));
    
            task.childNodes[1].classList.toggle('completedl');
            task.childNodes[1].childNodes[1].checked = true;
            task.childNodes[3].classList.toggle('completedr');
        };

        this.#addTaskInfoBtnEventListener(id);
        this.#addEditTaskBtnEventListener(id);
        this.#addDeleteTaskBtnEventListener(id);
    }

    static #changeTaskStatus(id, taskEntry) {
        _App__WEBPACK_IMPORTED_MODULE_2__.default.changeTaskStatus(id);

        taskEntry.childNodes[1].classList.toggle('completedl');
        taskEntry.childNodes[3].classList.toggle('completedr');
    }

    static #addTaskInfoBtnEventListener(taskId) {
        const taskInfo = document.querySelector(`[data-taskid='${taskId}']`);
        const label = taskInfo.querySelector('label');

        label.addEventListener('click', (e) => {
            this.#showTaskInfoModal(taskId);
        })
    }

    static #addDeleteTaskBtnEventListener(id) {
        const deleteTaskBtns = document.querySelectorAll('.delete-task-btn');
        let deleteTaskBtn = this.#getHTMLElementByTaskId(id, deleteTaskBtns);

        deleteTaskBtn.addEventListener('click', (e) => {
            this.#removeTaskEntry(e.target.dataset.taskid);

            _App__WEBPACK_IMPORTED_MODULE_2__.default.deleteTask(e.target.dataset.taskid);
        })
    }

    static #addEditTaskBtnEventListener(id) {
        const editTaskBtns = document.querySelectorAll('.edit-task-btn');
        let editTaskBtn = this.#getHTMLElementByTaskId(id, editTaskBtns);

        editTaskBtn.addEventListener('click', (e) => {
            this.#showEditTaskModal(e.target.dataset.taskid);
        });
    }

    static #handleTaskEdit(id) {
        const newTaskName = document.querySelector('#task-name-input').value;
        const newTaskDesc = document.querySelector('#task-description-input').value;
        const newTaskDueDate = document.querySelector('#task-duedate-input').value;
        const taskPriorityInput = document.querySelector('#task-priority-input');
        const newTaskPriority = taskPriorityInput.options[taskPriorityInput.selectedIndex].value;
        const taskProjectName = document.querySelector('#task-project-input').value;

        const taskProject = (taskProjectName === 'No project'? null : 
        _App__WEBPACK_IMPORTED_MODULE_2__.default.getProjectByName(taskProjectName).getId());

        _App__WEBPACK_IMPORTED_MODULE_2__.default.updateTaskInfo(id, newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority, taskProject);

        this.#updateTaskEntry(id, newTaskName, newTaskDueDate, newTaskPriority);

        this.#removeModal();
    }

    static #updateTaskEntry(taskId, name, dueDate, priority) {
        const task = document.querySelector(`[data-taskid='${taskId}']`);
        const taskPriority = task.querySelector('.task-priority');
        const taskName = task.querySelector('label');

        taskName.innerText = `${name} - ${dueDate}`;

        // Remove current priority.
        taskPriority.classList.remove('task-low-priority');
        taskPriority.classList.remove('task-medium-priority');
        taskPriority.classList.remove('task-high-priority');

        taskPriority.classList.add(`task-${priority.toLowerCase()}-priority`);
    }

    static #addNewProjectNameToSidebar(name, id) {
        const projects = document.getElementsByClassName('project');

        if (projects.length == 0) {
            const projectContainer = document.querySelector('.projects');
            const containerHeader = projectContainer.childNodes[1];

            containerHeader.insertAdjacentHTML('afterend', `
            <div class="task-filter project" data-projid="${id}">
                <span class="material-icons-outlined">description</span>
                <p>${name}</p>
            </div>
            `);
        }
        else {
            projects[projects.length - 1].insertAdjacentHTML('afterend', `
            <div class="task-filter project" data-projid="${id}">
                <span class="material-icons-outlined">description</span>
                <p>${name}</p>
            </div>
            `);
        }

        UI.#setTaskFiltersEventListeners();
    }

    static #removeModal() {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal-wrapper');

        body.style = "";

        if (modal) {
            body.removeChild(modal);

            body.removeEventListener('keydown', UI.#handleEscapeKeyPress);
        }
    }

    static #removeTaskEntry(id) {
        const task = document.querySelector(`[data-taskid='${id}']`);
        const content = document.querySelector('.content');

        content.removeChild(task);
    }

    static #clearTaskEntries() {
        const content = document.querySelector('.content');
        const tasks = document.querySelectorAll('.task-entry');

        tasks.forEach(task => {
            content.removeChild(task);
        });
    }

    static #removeProjectNameFromSidebar = (id) => {
        const project = document.querySelector(`[data-projid='${id}']`);
        const projects = document.querySelector('.projects');

        projects.removeChild(project);
    }

    static #clearProjectNamesFromSidebar() {
        const projectContainer = document.querySelector('.projects');
        const projects = document.querySelectorAll('.project');

        projects.forEach(proj => {
            projectContainer.removeChild(proj);
        })
    }

    static #handleEscapeKeyPress(e) {
        if (e.key === 'Escape') {
            UI.#removeModal();
        }
    }

    static #handleNewProject() {
        const newProjectName = document.querySelector('#proj-name-input');

        if (UI.#areProjectFieldsValid()) {
            const newProject = new _Project_js__WEBPACK_IMPORTED_MODULE_1__.default(newProjectName.value);

            _App__WEBPACK_IMPORTED_MODULE_2__.default.addNewProject(newProject);
    
            UI.#addNewProjectNameToSidebar(newProject.getName(), newProject.getId());
    
            UI.#removeModal();
        }
    }

    static #handleNewTask() {
        if (UI.#areTaskFieldsValid()) {
            const newTaskName = document.querySelector('#task-name-input').value;
            const newTaskDesc = document.querySelector('#task-description-input').value;
            const newTaskDueDate = document.querySelector('#task-duedate-input').value;
            const taskPriorityInput = document.querySelector('#task-priority-input');
            const newTaskPriority = taskPriorityInput.options[taskPriorityInput.selectedIndex].value;
            const taskProjectInput = document.querySelector('#task-project-input');
            const taskProjectName = taskProjectInput.options[taskProjectInput.selectedIndex].value;
            
            const taskProject = (taskProjectName === 'No project'? null : 
            _App__WEBPACK_IMPORTED_MODULE_2__.default.getProjectByName(taskProjectName).getId());

            const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_0__.default(newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority, taskProject);
    
            _App__WEBPACK_IMPORTED_MODULE_2__.default.addNewTask(newTask);
    
            UI.#displayNewTask(newTask.getName(), newTask.getDueDate(), newTask.getPriority(),
            newTask.getId(), newTask.getStatus());
    
            UI.#removeModal();
        }
    }

    static #addModalEventListeners(modalType, taskId = -1) {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal-wrapper');
        const cancelBtn = modal.querySelector('.grey-btn');
        const continueBtn = modal.querySelector('.blue-btn') || modal.querySelector('.red-btn');

        if (modalType === 'newTask') {
            continueBtn.addEventListener('click', this.#handleNewTask);
        }
        else if (modalType === 'newProject') {
            continueBtn.addEventListener('click', this.#handleNewProject);
        }
        else if (modalType === 'editTask') {
            continueBtn.addEventListener('click', () => {
                this.#handleTaskEdit(taskId);
            });
        }
        else if (modalType === 'taskInfo') {
            continueBtn.addEventListener('click', () => {
                this.#removeModal();
                body.style = "overflow-y: hidden;";
                this.#showEditTaskModal(taskId);
            });
        }
        else if (modalType === 'deleteStoredData') {
            continueBtn.addEventListener('click', () => {
                this.#handleDataDeletion();
                this.#removeModal();
            });
        }

        modal.addEventListener('click', (e) => {
            if(e.target.classList.contains('modal-wrapper')) {
                UI.#removeModal();
            }
        })

        body.addEventListener('keydown', UI.#handleEscapeKeyPress);

        cancelBtn.addEventListener('click', UI.#removeModal);
    }

    static #handleFilterSelection(selectedBtn, btnNodeList) {
        const projectNameDisplay = document.querySelector('#project-name');

        // The paragraph element is the 3rd children of the btn pressed.
        const projectName = selectedBtn.childNodes[3].innerText;

        for (let i = 0; i < btnNodeList.length; i++) {
            if (btnNodeList[i].classList.contains('selected')) {
                btnNodeList[i].classList.remove('selected');
            }
        }

        selectedBtn.classList.add('selected');

        projectNameDisplay.innerText = projectName;

        this.#getTasksForFilter(projectName);
    }

    static #getTasksForFilter(filter) {
        let tasks;

        if (filter === 'All tasks') {
            tasks = _App__WEBPACK_IMPORTED_MODULE_2__.default.getTasks();
        }
        else if (filter === 'Today') {
            tasks = _App__WEBPACK_IMPORTED_MODULE_2__.default.getDueTodayTasks();
        }
        else if (filter === 'This week') {
            tasks = _App__WEBPACK_IMPORTED_MODULE_2__.default.getDueThisWeekTasks();
        }
        else {
            tasks = _App__WEBPACK_IMPORTED_MODULE_2__.default.getTasksByProject(filter);
        }

        this.#clearTaskEntries();        

        if (tasks) {
            tasks.forEach(task => {
                this.#displayNewTask(task.getName(), task.getDueDate(), task.getPriority(),
                task.getId(), task.getStatus());
            });
        }
    }

    static #setTaskFiltersEventListeners() {
        const taskFilters = document.querySelectorAll('.task-filter');

        taskFilters.forEach(filter => filter.addEventListener('click', (e) => {
            UI.#handleFilterSelection(e.currentTarget, taskFilters);
        }));
    }

    static #addUIEventListeners() {
        const addTaskBtn = document.querySelector('#add-task-btn');
        const addTaskBtnAlt = document.querySelector('#add-task-btn-alt');
        const addProjectBtn = document.querySelector('#add-project-btn');
        const deleteDataBtn = document.querySelector('#delete-data-btn');
        const deleteDataBtnAlt = document.querySelector('#delete-data-btn-alt');

        const body = document.querySelector('body');

        UI.#setTaskFiltersEventListeners();

        addProjectBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.#showNewProjectModal();
        });

        addTaskBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.#showNewTaskModal();
        });

        addTaskBtnAlt.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.#showNewTaskModal();
        });

        deleteDataBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.#showDeleteDataModal();
        });

        deleteDataBtnAlt.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.#showDeleteDataModal();
        });

        UI.#activateBurgerMenu();
    }

    static #addOptionsToProjectSelector() {
        const taskProjectInput = document.querySelector('#task-project-input');
        let projectNames = _App__WEBPACK_IMPORTED_MODULE_2__.default.getProjectNames();

        for (let i = 0; i < projectNames.length; i++) {
            taskProjectInput.insertAdjacentHTML('beforeend', `
            <option>${projectNames[i]}</option>
            `);
        }
    }

    static #setInputAsInvalid(input, message) {
        const inputLabel = document.querySelector(`label[for=${input.id}]`);

        input.classList.add('invalid-input');
        inputLabel.classList.add('red-text');

        if (input.nextElementSibling === null) {
            input.insertAdjacentHTML('afterend', `<span class="invalid-input-message">${message}</span>`);
        }
    }

    static #setInputAsValid(input) {
        const inputLabel = document.querySelector(`label[for=${input.id}]`);

        input.classList.remove('invalid-input');
        inputLabel.classList.remove('red-text');

        input.nextElementSibling.remove();
    }

    static #isTextInputValid(input) {
        if (input.value === '') {
            this.#setInputAsInvalid(input, kNOEMPTYFIELD);
            return false;
        }
        else if (input.value.trim() === '') {
            this.#setInputAsInvalid(input, kNOTWHITESPACEALONE);
            return false;
        }
        else if (input.classList.contains('invalid-input')) {
            this.#setInputAsValid(input);
        }

        return true;
    }

    static #isOptionsInputValid(input) {
        if (input.value === '') {
            this.#setInputAsInvalid(input, kNOEMPTYFIELD);
            return false;
        }
        else if (input.classList.contains('invalid-input')) {
            this.#setInputAsValid(input);
        }

        return true;
    }

    static #isDateValid(input) {
        const d = new Date();
        const currentDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        const inputDate = new Date(input.value);
        
        if (inputDate < currentDate) {
            this.#setInputAsInvalid(input, kDATEINVALID);
            return false;
        }
        else if (input.classList.contains('invalid-input')) {
            this.#setInputAsValid(input);
        }

        return true;
    }

    static #areTaskFieldsValid() {
        const taskName = document.querySelector('#task-name-input');
        const taskDueDate = document.querySelector('#task-duedate-input');
        const taskPriority = document.querySelector('#task-priority-input');
        const taskProject = document.querySelector('#task-project-input');

        const validName = this.#isTextInputValid(taskName);
        const validDueDate = (taskDueDate.value === '' | this.#isDateValid(taskDueDate));
        const validPriority = this.#isOptionsInputValid(taskPriority);
        const validProject = this.#isOptionsInputValid(taskProject);

        return (validName && validDueDate && validPriority && validProject);
    }

    static #areProjectFieldsValid() {
        const projName = document.querySelector('#proj-name-input');

        return this.#isTextInputValid(projName);
    }

    static #handleDataDeletion() {
        _App__WEBPACK_IMPORTED_MODULE_2__.default.removeData();
        window.location.reload();
    }

    static initUI() {
        UI.#addUIEventListeners();

        let projects = _App__WEBPACK_IMPORTED_MODULE_2__.default.getProjects();

        projects.forEach(project => {
            this.#addNewProjectNameToSidebar(project.getName(), project.getId());
        });

        const showAllTasks = document.querySelector('#all-tasks');
        showAllTasks.click();
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC8uL3NyYy9TdG9yYWdlLmpzIiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3QvLi9zcmMvVG9Eby5qcyIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG9Eb0xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub0RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvRG9MaXN0Ly4vc3JjL1VJLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm1EO0FBQ1g7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsbUVBQVk7QUFDZCxhQUFhLHlEQUFNO0FBQ25CLGVBQWUsZ0VBQVM7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDd0M7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsT0FBTztBQUNwQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLG1FQUFZO0FBQ2QsaUJBQWlCLHlEQUFNO0FBQ3ZCLGtCQUFrQix5REFBTTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEsMEJBQTBCO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEZ0Q7QUFDUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxtRUFBWTtBQUNkLDJCQUEyQiw2REFBVTtBQUNyQyw0QkFBNEIsNkRBQVU7QUFDdEM7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUI4QztBQUNXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxtRUFBWTtBQUNkLFNBQVMsNERBQVM7QUFDbEIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CbUQ7QUFDTTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQ3hFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHdCQUF3QixFQUFFO0FBQzFFLGdDQUFnQyxFQUFFLFVBQVUsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsTUFBTTtBQUNqQixhQUFhLEtBQUs7QUFDbEIsWUFBWSxVQUFVO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7O0FBRWU7QUFDZixFQUFFLG1FQUFZO0FBQ2Q7QUFDQSx3RkFBd0YsZ0VBQVM7O0FBRWpHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsRUFBRSxTQUFTLCtCQUErQixPQUFPLEVBQUUsU0FBUywrQkFBK0I7QUFDOUgseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsU3dDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsS0FBSztBQUNsQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxtRUFBWTtBQUNkLGFBQWEseURBQU07QUFDbkI7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQzlCZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsU0FBUyw2REFBVTtBQUNuQixDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQnlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsS0FBSztBQUNsQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsbUVBQVk7QUFDZCx3REFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUtBQXVLOztBQUV2SztBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkQwQjtBQUNNOztBQUVqQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsNkNBQU87QUFDbkMscUJBQXFCLHVEQUFpQjtBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakZlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDbkRlO0FBQ2Y7O0FBRUE7QUFDQSxrQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDM0JlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERtQztBQUNOO0FBQ0w7QUFDdUQ7O0FBRWhFO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZFQUE2RSxnREFBTztBQUNwRixvRUFBb0UsNkNBQUk7O0FBRXhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaURBQU8sQ0FBQyxpREFBUTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFPLENBQUMsaURBQVk7O0FBRTNDLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpREFBVSxDQUFDLGlEQUFRO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7VUNqTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNNO0FBQ1g7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFZTs7O0FBR2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixpREFBVzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsZUFBZTtBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxzQkFBc0I7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLGtCQUFrQjtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDJEQUEyRDtBQUNyRywwQ0FBMEMsOERBQThEO0FBQ3hHLDBDQUEwQyw0REFBNEQ7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVc7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGVBQWU7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkVBQTJFO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0VBQWdFO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLCtEQUErRCx3REFBa0IsOEJBQThCO0FBQzVJO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELEdBQUc7QUFDbkQ7QUFDQSxnRkFBZ0YsR0FBRztBQUNuRiw2QkFBNkIsS0FBSyxLQUFLLFFBQVE7QUFDL0M7O0FBRUE7QUFDQSx3RkFBd0YsR0FBRztBQUMzRixpRkFBaUYsR0FBRztBQUNwRixxRUFBcUUsdUJBQXVCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDBEQUFvQjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFLE9BQU87QUFDeEU7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZLG9EQUFjO0FBQzFCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsMERBQW9COztBQUU1QixRQUFRLHdEQUFrQjs7QUFFMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RCxPQUFPO0FBQ3BFO0FBQ0E7O0FBRUEsZ0NBQWdDLEtBQUssS0FBSyxRQUFROztBQUVsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsdUJBQXVCO0FBQ2xFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNERBQTRELEdBQUc7QUFDL0Q7QUFDQSxxQkFBcUIsS0FBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELEdBQUc7QUFDL0Q7QUFDQSxxQkFBcUIsS0FBSztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQsR0FBRztBQUNoRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsZ0VBQWdFLEdBQUc7QUFDbkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsZ0RBQU87O0FBRTFDLFlBQVksdURBQWlCOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwwREFBb0I7O0FBRWhDLGdDQUFnQyw2Q0FBSTs7QUFFcEMsWUFBWSxvREFBYzs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isa0RBQVk7QUFDaEM7QUFDQTtBQUNBLG9CQUFvQiwwREFBb0I7QUFDeEM7QUFDQTtBQUNBLG9CQUFvQiw2REFBdUI7QUFDM0M7QUFDQTtBQUNBLG9CQUFvQiwyREFBcUI7QUFDekM7O0FBRUEsaUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLDZDQUE2QztBQUM3QztBQUNBLFNBQVM7O0FBRVQ7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSxTQUFTOztBQUVUO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLDZDQUE2QztBQUM3QztBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHlEQUFtQjs7QUFFOUMsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStELFNBQVM7O0FBRXhFO0FBQ0E7O0FBRUE7QUFDQSx3RkFBd0YsUUFBUTtBQUNoRztBQUNBOztBQUVBO0FBQ0EsK0RBQStELFNBQVM7O0FBRXhFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxvREFBYztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLHFEQUFlOztBQUV0QztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IlVJLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5P1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fSE9VUiA9IDM2MDAwMDA7XG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDYwMDAwO1xudmFyIERFRkFVTFRfQURESVRJT05BTF9ESUdJVFMgPSAyO1xudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBwcmV2aW91cyBgcGFyc2VgIGltcGxlbWVudGF0aW9uIHdhcyByZW5hbWVkIHRvIGBwYXJzZUlTT2AuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgcGFyc2UoJzIwMTYtMDEtMDEnKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBwYXJzZUlTTygnMjAxNi0wMS0wMScpXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgdmFsaWRhdGVzIHNlcGFyYXRlIGRhdGUgYW5kIHRpbWUgdmFsdWVzIGluIElTTy04NjAxIHN0cmluZ3NcbiAqICAgYW5kIHJldHVybnMgYEludmFsaWQgRGF0ZWAgaWYgdGhlIGRhdGUgaXMgaW52YWxpZC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgcGFyc2VJU08oJzIwMTgtMTMtMzInKVxuICogICAvLz0+IEludmFsaWQgRGF0ZVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IGRvZXNuJ3QgZmFsbCBiYWNrIHRvIGBuZXcgRGF0ZWAgY29uc3RydWN0b3JcbiAqICAgaWYgaXQgZmFpbHMgdG8gcGFyc2UgYSBzdHJpbmcgYXJndW1lbnQuIEluc3RlYWQsIGl0IHJldHVybnMgYEludmFsaWQgRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiB2YXIgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMgPT0gbnVsbCA/IERFRkFVTFRfQURESVRJT05BTF9ESUdJVFMgOiB0b0ludGVnZXIob3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKGlzTmFOKGRhdGUpIHx8ICFkYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkgfHwgdGltZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IG51bGw7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IG51bGxcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSAmJiBwYXJzZUludChjYXB0dXJlc1sxXSk7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gJiYgcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBudWxsO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbnVsbDsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogTUlMTElTRUNPTkRTX0lOX0hPVVIgKyBtaW51dGVzICogTUlMTElTRUNPTkRTX0lOX01JTlVURSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogTUlMTElTRUNPTkRTX0lOX0hPVVIgKyBtaW51dGVzICogTUlMTElTRUNPTkRTX0lOX01JTlVURSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiB0b2RheS5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIHRvZGF5LlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZlRvZGF5KClcbiAqIC8vPT4gTW9uIE9jdCA2IDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVG9kYXkoKSB7XG4gIHJldHVybiBzdGFydE9mRGF5KERhdGUubm93KCkpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCBUb0RvIGZyb20gXCIuL1RvRG9cIjtcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcbiAgICBzdGF0aWMgI3N0b3JhZ2U7XHJcbiAgICBzdGF0aWMgI3RvZG87XHJcblxyXG4gICAgc3RhdGljIGluaXRBcHAoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCdMb2NhbC1Ub0RvTGlzdCcpO1xyXG4gICAgICAgIHRoaXMuI3RvZG8gPSBUb0RvLndpdGhKU09ORGF0YSh0aGlzLiNzdG9yYWdlLmdldFNhdmVkRGF0YSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXBkYXRlVGFza0luZm8odGFza0lkLCBuYW1lLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuI3RvZG8udXBkYXRlVGFza0luZm8odGFza0lkLCBuYW1lLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XHJcblxyXG4gICAgICAgIHRoaXMuI3N0b3JhZ2Uuc2F2ZURhdGEodGhpcy4jdG9kby50b0pTT05PYmplY3QoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFRhc2sodGFza0lkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvZG8uZ2V0VGFzayh0YXNrSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGFuZ2VUYXNrU3RhdHVzKHRhc2tJZCkge1xyXG4gICAgICAgIHRoaXMuI3RvZG8uY2hhbmdlVGFza1N0YXR1cyh0YXNrSWQpO1xyXG5cclxuICAgICAgICB0aGlzLiNzdG9yYWdlLnNhdmVEYXRhKHRoaXMuI3RvZG8udG9KU09OT2JqZWN0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHRhc2tJZCkge1xyXG4gICAgICAgIHRoaXMuI3RvZG8uZGVsZXRlVGFzayh0YXNrSWQpO1xyXG5cclxuICAgICAgICB0aGlzLiNzdG9yYWdlLnNhdmVEYXRhKHRoaXMuI3RvZG8udG9KU09OT2JqZWN0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvZG8uZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZE5ld1Byb2plY3QobmV3UHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuI3RvZG8uYWRkTmV3UHJvamVjdChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAgICAgdGhpcy4jc3RvcmFnZS5zYXZlRGF0YSh0aGlzLiN0b2RvLnRvSlNPTk9iamVjdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkTmV3VGFzayhuZXdUYXNrKSB7XHJcbiAgICAgICAgdGhpcy4jdG9kby5hZGROZXdUYXNrKG5ld1Rhc2spO1xyXG5cclxuICAgICAgICB0aGlzLiNzdG9yYWdlLnNhdmVEYXRhKHRoaXMuI3RvZG8udG9KU09OT2JqZWN0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jdG9kby5nZXRUYXNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXREdWVUb2RheVRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiN0b2RvLmdldER1ZVRvZGF5VGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RHVlVGhpc1dlZWtUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jdG9kby5nZXREdWVUaGlzV2Vla1Rhc2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFRhc2tzQnlQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvZG8uZ2V0VGFza3NCeVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQcm9qZWN0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jdG9kby5nZXRQcm9qZWN0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQcm9qZWN0TmFtZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvZG8uZ2V0UHJvamVjdE5hbWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbW92ZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RvcmFnZS5yZW1vdmVEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFByb2plY3RCeUlkKHByb2pJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiN0b2RvLmdldFByb2plY3RCeUlkKHByb2pJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgc3RhdGljICNuZXh0SWQgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuaWQgPSBQcm9qZWN0LiNuZXh0SWQrKztcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrKHRhc2tQb3MpIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrUG9zLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYXNrSW5mbyh0YXNrUG9zLCBuYW1lLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMudGFza3NbdGFza1Bvc10uc2V0QXR0cmlidXRlcyhuYW1lLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGFza1N0YXR1cyh0YXNrSWQpIHtcclxuICAgICAgICB0aGlzLnRhc2tzW3RoaXMuZ2V0VGFza0luZGV4KHRhc2tJZCldLnRvZ2dsZVRhc2tTdGF0dXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrKHRhc2tJZCkge1xyXG4gICAgICAgIGxldCB0YXNrID0gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmdldElkKCkgPT0gdGFza0lkKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrID0gdGhpcy50YXNrc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3NcclxuICAgIH1cclxuXHJcbiAgICBzZXRUYXNrcyh0YXNrcykge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgICAjc2F2ZU5hbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2F2ZU5hbWUpIHtcclxuICAgICAgICB0aGlzLiNzYXZlTmFtZSA9IHNhdmVOYW1lOyBcclxuICAgIH1cclxuXHJcbiAgICBzYXZlRGF0YShkYXRhKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jc2F2ZU5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTYXZlZERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGxvYWRlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuI3NhdmVOYW1lKSk7XHJcblxyXG4gICAgICAgIGlmIChsb2FkZWREYXRhID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxvYWRlZERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0czogW10sXHJcbiAgICAgICAgICAgICAgICB0YXNrczogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxvYWRlZERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRGF0YSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLiNzYXZlTmFtZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICAgIHN0YXRpYyAjbmV4dElkID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmlkID0gVGFzay4jbmV4dElkKys7XHJcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcGVydGllcyhuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRhc2tTdGF0dXMoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9ICF0aGlzLmlzQ29tcGxldGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdDtcclxuICAgIH1cclxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdC5qcyc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzay5qcyc7XHJcbmltcG9ydCBhcHAgZnJvbSAnLi9BcHAnO1xyXG5pbXBvcnQgeyBpc1RvZGF5LCBzdGFydE9mVG9kYXksIGNvbXBhcmVBc2MsIGFkZERheXMsIHBhcnNlSVNPfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcclxuICAgICNwcm9qZWN0cztcclxuICAgICN0YXNrcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNwcm9qZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuI3Rhc2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHdpdGhKU09ORGF0YShqc29uRGF0YSkge1xyXG4gICAgICAgIGxldCB0b2RvID0gbmV3IFRvRG8oKTtcclxuXHJcbiAgICAgICAgdG9kby4jc2V0UHJvamVjdHMoanNvbkRhdGEucHJvamVjdHMubWFwKHByb2plY3QgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSkpO1xyXG4gICAgICAgIHRvZG8uI3NldFRhc2tzKGpzb25EYXRhLnRhc2tzLm1hcCh0YXNrID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvZG87XHJcbiAgICB9XHJcblxyXG4gICAgI3NldFByb2plY3RzKHByb2plY3RzKSB7XHJcbiAgICAgICAgdGhpcy4jcHJvamVjdHMgPSBwcm9qZWN0cztcclxuICAgIH1cclxuXHJcbiAgICAjc2V0VGFza3ModGFza3MpIHtcclxuICAgICAgICB0aGlzLiN0YXNrcyA9IHRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ld1Byb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuI3Byb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTmV3VGFzayh0YXNrKSB7XHJcbiAgICAgICAgdGhpcy4jdGFza3MucHVzaCh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICAjZ2V0VGFza0luZGV4KHRhc2tJZCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3Rhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrSWQgPT0gdGhpcy4jdGFza3NbaV0uZ2V0SWQoKSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYXNrU3RhdHVzKHRhc2tJZCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuI2dldFRhc2tJbmRleCh0YXNrSWQpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy4jdGFza3NbaW5kZXhdLnRvZ2dsZVRhc2tTdGF0dXModGFza0lkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzayh0YXNrSWQpIHtcclxuICAgICAgICBsZXQgdGFza0luZGV4ID0gdGhpcy4jZ2V0VGFza0luZGV4KHRhc2tJZClcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGFza0luZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI3Rhc2tzLnNwbGljZSh0aGlzLiNnZXRUYXNrSW5kZXgodGFza0lkKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhc2tJbmZvKHRhc2tJZCwgbmFtZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgICAgICBsZXQgdGFza0luZGV4ID0gdGhpcy4jZ2V0VGFza0luZGV4KHRhc2tJZClcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGFza0luZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI3Rhc2tzW3Rhc2tJbmRleF0uc2V0UHJvcGVydGllcyhuYW1lLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiN0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgI2dldFByb2plY3RJbmRleChwcm9qZWN0SWQpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4jcHJvamVjdHNbaV0uZ2V0SWQoKSA9PT0gcHJvamVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3ROYW1lcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdHMubWFwKHByb2plY3QgPT4gcHJvamVjdC5nZXROYW1lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3RCeU5hbWUocHJvak5hbWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3Byb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiNwcm9qZWN0c1tpXS5nZXROYW1lKCkgPT09IHByb2pOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3RCeUlkKHByb2pJZCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuI3Byb2plY3RzW2ldLmdldElkKCkgPT09IHByb2pJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3RzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrc0J5UHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSB0aGlzLmdldFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpLmdldElkKCk7XHJcblxyXG4gICAgICAgIGxldCB0YXNrcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3Rhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiN0YXNrc1tpXS5nZXRQcm9qZWN0KCkgPT0gcHJvamVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHRoaXMuI3Rhc2tzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldER1ZVRvZGF5VGFza3MoKSB7XHJcbiAgICAgICAgbGV0IHRhc2tzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuI3Rhc2tzW2ldLmdldER1ZURhdGUoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNUb2RheShwYXJzZUlTTyh0aGlzLiN0YXNrc1tpXS5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaCh0aGlzLiN0YXNrc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBnZXREdWVUaGlzV2Vla1Rhc2tzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrcyA9IFtdO1xyXG4gICAgICAgIGxldCBuZXh0V2VlayA9IGFkZERheXMoc3RhcnRPZlRvZGF5KCksIDcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3Rhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiN0YXNrc1tpXS5nZXREdWVEYXRlKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbXBhcmVBc2MocGFyc2VJU08odGhpcy4jdGFza3NbaV0uZ2V0RHVlRGF0ZSgpKSwgbmV4dFdlZWspICE9IDEpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2godGhpcy4jdGFza3NbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFzayh0YXNrSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jdGFza3NbdGhpcy4jZ2V0VGFza0luZGV4KHRhc2tJZCldO1xyXG4gICAgfVxyXG5cclxuICAgIHRvSlNPTk9iamVjdCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0czogdGhpcy4jcHJvamVjdHMsXHJcbiAgICAgICAgICAgIHRhc2tzOiB0aGlzLiN0YXNrc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrLmpzJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0LmpzJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcblxyXG5jb25zdCBrTk9FTVBUWUZJRUxEID0gJ1RoaXMgZmllbGQgY2FuXFwndCBiZSBlbXB0eSc7XHJcbmNvbnN0IGtOT1RXSElURVNQQUNFQUxPTkUgPSAnV2hpdGVzcGFjZXMgYWxvbmUgYXJlIG5vdCB2YWxpZCc7XHJcbmNvbnN0IGtEQVRFSU5WQUxJRCA9ICdUaGUgZHVlIGRhdGUgY2FuXFwndCBiZSBiZWZvcmUgdG9kYXknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG5cclxuICAgIFxyXG4gICAgLypcclxuICAgICoqICBSZXNwb25zaXZlbmVzcyByZWxhdGVkIG1ldGhvZHNcclxuICAgICovXHJcblxyXG4gICAgc3RhdGljICNhY3RpdmF0ZUJ1cmdlck1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBjb25zdCBidXJnZXJNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51Jyk7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XHJcblxyXG4gICAgICAgIGxldCBidXJnZXJNZW51T3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBidXJnZXJNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWJ1cmdlck1lbnVPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICBidXJnZXJNZW51T3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXJnZXJNZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZS1tb2JpbGUtbmF2Jyk7XHJcbiAgICAgICAgICAgIGJ1cmdlck1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqKiAgTW9kYWxzXHJcbiAgICAqL1xyXG5cclxuICAgIHN0YXRpYyAjc2hvd0RlbGV0ZURhdGFNb2RhbCgpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuICAgICAgICBib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGUtZGF0YS1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5EZWxldGUgc3RvcmVkIGRhdGE/PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibW9kYWwtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFlvdSBhcmUgYWJvdXQgdG8gZGVsZXRlIGFsbCBzdG9yZWQgcHJvamVjdCBhbmQgdGFzayBkYXRhLlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZG8gdGhpcz9cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImdyZXktYnRuIGJvdHRvbS1tb2RhbC1idG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWQtYnRuIGJvdHRvbS1tb2RhbC1idG5cIj5EZWxldGUgZGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGApO1xyXG5cclxuICAgICAgICB0aGlzLiNhZGRNb2RhbEV2ZW50TGlzdGVuZXJzKCdkZWxldGVTdG9yZWREYXRhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNzaG93TmV3VGFza01vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIGJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pk5ldyB0YXNrPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbGVmdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stbmFtZS1pbnB1dFwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwidGFzay1uYW1lLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZGVzY3JpcHRpb24taW5wdXRcIiA+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yaWdodC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZHVlZGF0ZS1pbnB1dFwiPkR1ZSBkYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidGFzay1kdWVkYXRlLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stcHJpb3JpdHktaW5wdXRcIj5Qcmlvcml0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHJlcXVpcmVkIGlkPVwidGFzay1wcmlvcml0eS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByb2plY3QtaW5wdXRcIj5Qcm9qZWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgcmVxdWlyZWQgaWQ9XCJ0YXNrLXByb2plY3QtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk5vIHByb2plY3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZ3JleS1idG4gYm90dG9tLW1vZGFsLWJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJsdWUtYnRuIGJvdHRvbS1tb2RhbC1idG5cIj5BZGQgdGFzazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLiNhZGRPcHRpb25zVG9Qcm9qZWN0U2VsZWN0b3IoKTtcclxuXHJcbiAgICAgICAgdGhpcy4jYWRkTW9kYWxFdmVudExpc3RlbmVycygnbmV3VGFzaycpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjc2hvd05ld1Byb2plY3RNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuICAgICAgICBib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtcHJvamVjdC1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5OZXcgcHJvamVjdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXQgYWxsLXNpZGVzLTIwcHgtbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qLW5hbWUtaW5wdXRcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qLW5hbWUtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImdyZXktYnRuIGJvdHRvbS1tb2RhbC1idG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJibHVlLWJ0biBib3R0b20tbW9kYWwtYnRuXCI+QWRkIHByb2plY3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgVUkuI2FkZE1vZGFsRXZlbnRMaXN0ZW5lcnMoJ25ld1Byb2plY3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI3Nob3dFZGl0VGFza01vZGFsID0gKHRhc2tJZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IEFwcC5nZXRUYXNrKHRhc2tJZCk7XHJcblxyXG4gICAgICAgIGJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFzay1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5FZGl0IFRhc2s8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1sZWZ0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lLWlucHV0XCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrLW5hbWUtaW5wdXRcIiB2YWx1ZT1cIiR7dGFzay5nZXROYW1lKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZGVzY3JpdHBpb24taW5wdXRcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0YXNrLWRlc2NyaXB0aW9uLWlucHV0XCI+JHt0YXNrLmdldERlc2NyaXB0aW9uKCl9PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1kdWVkYXRlLWlucHV0XCI+RHVlIGRhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrLWR1ZWRhdGUtaW5wdXRcIiB2YWx1ZT1cIiR7dGFzay5nZXREdWVEYXRlKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stcHJpb3JpdHktaW5wdXRcIj5Qcmlvcml0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHJlcXVpcmVkIGlkPVwidGFzay1wcmlvcml0eS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gJHsodGFzay5nZXRQcmlvcml0eSgpID09PSAnTG93Jyk/ICdzZWxlY3RlZD1cInNlbGVjdGVkXCInIDogJyd9Pkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gJHsodGFzay5nZXRQcmlvcml0eSgpID09PSAnTWVkaXVtJyk/ICdzZWxlY3RlZD1cInNlbGVjdGVkXCInIDogJyd9Pk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gJHsodGFzay5nZXRQcmlvcml0eSgpID09PSAnSGlnaCcpPyAnc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiJyA6ICcnfT5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1wcm9qZWN0LWlucHV0XCI+UHJvamVjdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHJlcXVpcmVkIGlkPVwidGFzay1wcm9qZWN0LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5ObyBwcm9qZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImdyZXktYnRuIGJvdHRvbS1tb2RhbC1idG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJibHVlLWJ0biBib3R0b20tbW9kYWwtYnRuXCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLiNhZGRPcHRpb25zVG9Qcm9qZWN0U2VsZWN0b3IoKTtcclxuXHJcbiAgICAgICAgVUkuI2FkZE1vZGFsRXZlbnRMaXN0ZW5lcnMoJ2VkaXRUYXNrJywgdGFza0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI3Nob3dUYXNrSW5mb01vZGFsID0gKHRhc2tJZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IEFwcC5nZXRUYXNrKHRhc2tJZCk7XHJcblxyXG4gICAgICAgIGJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3ctdGFzay1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND4ke3Rhc2suZ2V0TmFtZSgpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydGllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG93LXRhc2stbW9kYWwtbGVmdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9wZXJ0eS1uYW1lXCI+VGl0bGU6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHt0YXNrLmdldE5hbWUoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9wZXJ0eS1uYW1lXCI+RGVzY3JpcHRpb246PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHt0YXNrLmdldERlc2NyaXB0aW9uKCkgPT09ICcnPyAnTm8gZGVzY3JpcHRpb24gc2V0JyA6IHRhc2suZ2V0RGVzY3JpcHRpb24oKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG93LXRhc2stbW9kYWwtcmlnaHQtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvcGVydHktbmFtZVwiPkR1ZSBkYXRlOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7dGFzay5nZXREdWVEYXRlKCkgPT09ICcnPyAnTm8gZHVlIGRhdGUgc2V0JyA6IHRhc2suZ2V0RHVlRGF0ZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb3BlcnR5LW5hbWVcIj5Qcmlvcml0eTo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Rhc2suZ2V0UHJpb3JpdHkoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9wZXJ0eS1uYW1lXCI+UHJvamVjdDo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7dGFzay5nZXRQcm9qZWN0KCkgPT09IG51bGw/ICdUYXNrIG5vdCBhc3NpZ25lZCB0byBhIHByb2plY3QnIDogQXBwLmdldFByb2plY3RCeUlkKHRhc2suZ2V0UHJvamVjdCgpKS5nZXROYW1lKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJncmV5LWJ0biBib3R0b20tbW9kYWwtYnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmx1ZS1idG4gYm90dG9tLW1vZGFsLWJ0blwiPkVkaXQgdGFzazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBVSS4jYWRkTW9kYWxFdmVudExpc3RlbmVycygndGFza0luZm8nLCB0YXNrSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqKiAgVXBkYXRlIHRhc2svcHJvamVjdCBkaXNwbGF5XHJcbiAgICAqL1xyXG5cclxuICAgIHN0YXRpYyAjZ2V0SFRNTEVsZW1lbnRCeVRhc2tJZChpZCwgZWxlbWVudHMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXS5kYXRhc2V0LnRhc2tpZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNkaXNwbGF5TmV3VGFzayA9IChuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQsIHRhc2tTdGF0dXMpID0+IHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1lbnRyeVwiIGRhdGEtdGFza2lkID1cIiR7aWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1zaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGFzay1maW5pc2hlZFwiIGRhdGEtdGFza2lkPVwiJHtpZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+JHtuYW1lfSAtICR7ZHVlRGF0ZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LXNpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIGVkaXQtdGFzay1idG5cIiBkYXRhLXRhc2tpZCA9XCIke2lkfVwiPmVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkZWxldGUtdGFzay1idG5cIiBkYXRhLXRhc2tpZCA9XCIke2lkfVwiPmRlbGV0ZV9vdXRsaW5lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay1wcmlvcml0eSBtYXRlcmlhbC1pY29ucyB0YXNrLSR7cHJpb3JpdHkudG9Mb3dlckNhc2UoKX0tcHJpb3JpdHlcIj5jaXJjbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1maW5pc2hlZCcpO1xyXG5cclxuICAgICAgICB0aGlzLiNnZXRIVE1MRWxlbWVudEJ5VGFza0lkKGlkLCBjb21wbGV0ZWRUYXNrSW5wdXRzKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuI2NoYW5nZVRhc2tTdGF0dXMoaWQsIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRhc2tTdGF0dXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFzayA9IHRoaXMuI2dldEhUTUxFbGVtZW50QnlUYXNrSWQoaWQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWVudHJ5JykpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRhc2suY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWRsJyk7XHJcbiAgICAgICAgICAgIHRhc2suY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0YXNrLmNoaWxkTm9kZXNbM10uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkcicpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuI2FkZFRhc2tJbmZvQnRuRXZlbnRMaXN0ZW5lcihpZCk7XHJcbiAgICAgICAgdGhpcy4jYWRkRWRpdFRhc2tCdG5FdmVudExpc3RlbmVyKGlkKTtcclxuICAgICAgICB0aGlzLiNhZGREZWxldGVUYXNrQnRuRXZlbnRMaXN0ZW5lcihpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNjaGFuZ2VUYXNrU3RhdHVzKGlkLCB0YXNrRW50cnkpIHtcclxuICAgICAgICBBcHAuY2hhbmdlVGFza1N0YXR1cyhpZCk7XHJcblxyXG4gICAgICAgIHRhc2tFbnRyeS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZGwnKTtcclxuICAgICAgICB0YXNrRW50cnkuY2hpbGROb2Rlc1szXS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWRyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNhZGRUYXNrSW5mb0J0bkV2ZW50TGlzdGVuZXIodGFza0lkKSB7XHJcbiAgICAgICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNraWQ9JyR7dGFza0lkfSddYCk7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0YXNrSW5mby5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xyXG5cclxuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuI3Nob3dUYXNrSW5mb01vZGFsKHRhc2tJZCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI2FkZERlbGV0ZVRhc2tCdG5FdmVudExpc3RlbmVyKGlkKSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlVGFza0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXRhc2stYnRuJyk7XHJcbiAgICAgICAgbGV0IGRlbGV0ZVRhc2tCdG4gPSB0aGlzLiNnZXRIVE1MRWxlbWVudEJ5VGFza0lkKGlkLCBkZWxldGVUYXNrQnRucyk7XHJcblxyXG4gICAgICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiNyZW1vdmVUYXNrRW50cnkoZS50YXJnZXQuZGF0YXNldC50YXNraWQpO1xyXG5cclxuICAgICAgICAgICAgQXBwLmRlbGV0ZVRhc2soZS50YXJnZXQuZGF0YXNldC50YXNraWQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNhZGRFZGl0VGFza0J0bkV2ZW50TGlzdGVuZXIoaWQpIHtcclxuICAgICAgICBjb25zdCBlZGl0VGFza0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10YXNrLWJ0bicpO1xyXG4gICAgICAgIGxldCBlZGl0VGFza0J0biA9IHRoaXMuI2dldEhUTUxFbGVtZW50QnlUYXNrSWQoaWQsIGVkaXRUYXNrQnRucyk7XHJcblxyXG4gICAgICAgIGVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4jc2hvd0VkaXRUYXNrTW9kYWwoZS50YXJnZXQuZGF0YXNldC50YXNraWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjaGFuZGxlVGFza0VkaXQoaWQpIHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUtaW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdUYXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kdWVkYXRlLWlucHV0JykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eS1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IHRhc2tQcmlvcml0eUlucHV0Lm9wdGlvbnNbdGFza1ByaW9yaXR5SW5wdXQuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdC1pbnB1dCcpLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9ICh0YXNrUHJvamVjdE5hbWUgPT09ICdObyBwcm9qZWN0Jz8gbnVsbCA6IFxyXG4gICAgICAgIEFwcC5nZXRQcm9qZWN0QnlOYW1lKHRhc2tQcm9qZWN0TmFtZSkuZ2V0SWQoKSk7XHJcblxyXG4gICAgICAgIEFwcC51cGRhdGVUYXNrSW5mbyhpZCwgbmV3VGFza05hbWUsIG5ld1Rhc2tEZXNjLCBuZXdUYXNrRHVlRGF0ZSwgbmV3VGFza1ByaW9yaXR5LCB0YXNrUHJvamVjdCk7XHJcblxyXG4gICAgICAgIHRoaXMuI3VwZGF0ZVRhc2tFbnRyeShpZCwgbmV3VGFza05hbWUsIG5ld1Rhc2tEdWVEYXRlLCBuZXdUYXNrUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICB0aGlzLiNyZW1vdmVNb2RhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjdXBkYXRlVGFza0VudHJ5KHRhc2tJZCwgbmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFza2lkPScke3Rhc2tJZH0nXWApO1xyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stcHJpb3JpdHknKTtcclxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2sucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcclxuXHJcbiAgICAgICAgdGFza05hbWUuaW5uZXJUZXh0ID0gYCR7bmFtZX0gLSAke2R1ZURhdGV9YDtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgcHJpb3JpdHkuXHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stbG93LXByaW9yaXR5Jyk7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stbWVkaXVtLXByaW9yaXR5Jyk7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2staGlnaC1wcmlvcml0eScpO1xyXG5cclxuICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChgdGFzay0ke3ByaW9yaXR5LnRvTG93ZXJDYXNlKCl9LXByaW9yaXR5YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNhZGROZXdQcm9qZWN0TmFtZVRvU2lkZWJhcihuYW1lLCBpZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdCcpO1xyXG5cclxuICAgICAgICBpZiAocHJvamVjdHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJIZWFkZXIgPSBwcm9qZWN0Q29udGFpbmVyLmNoaWxkTm9kZXNbMV07XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXJIZWFkZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZmlsdGVyIHByb2plY3RcIiBkYXRhLXByb2ppZD1cIiR7aWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+ZGVzY3JpcHRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8cD4ke25hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1maWx0ZXIgcHJvamVjdFwiIGRhdGEtcHJvamlkPVwiJHtpZH1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5kZXNjcmlwdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwPiR7bmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFVJLiNzZXRUYXNrRmlsdGVyc0V2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNyZW1vdmVNb2RhbCgpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICAgYm9keS5zdHlsZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChtb2RhbCkge1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuXHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFVJLiNoYW5kbGVFc2NhcGVLZXlQcmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjcmVtb3ZlVGFza0VudHJ5KGlkKSB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2tpZD0nJHtpZH0nXWApO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjY2xlYXJUYXNrRW50cmllcygpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWVudHJ5Jyk7XHJcblxyXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQodGFzayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNyZW1vdmVQcm9qZWN0TmFtZUZyb21TaWRlYmFyID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2ppZD0nJHtpZH0nXWApO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblxyXG4gICAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjY2xlYXJQcm9qZWN0TmFtZXNGcm9tU2lkZWJhcigpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xyXG5cclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2ogPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2opO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNoYW5kbGVFc2NhcGVLZXlQcmVzcyhlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICBVSS4jcmVtb3ZlTW9kYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNoYW5kbGVOZXdQcm9qZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otbmFtZS1pbnB1dCcpO1xyXG5cclxuICAgICAgICBpZiAoVUkuI2FyZVByb2plY3RGaWVsZHNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZS52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBBcHAuYWRkTmV3UHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgIFxyXG4gICAgICAgICAgICBVSS4jYWRkTmV3UHJvamVjdE5hbWVUb1NpZGViYXIobmV3UHJvamVjdC5nZXROYW1lKCksIG5ld1Byb2plY3QuZ2V0SWQoKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgVUkuI3JlbW92ZU1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjaGFuZGxlTmV3VGFzaygpIHtcclxuICAgICAgICBpZiAoVUkuI2FyZVRhc2tGaWVsZHNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZS1pbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZHVlZGF0ZS1pbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IHRhc2tQcmlvcml0eUlucHV0Lm9wdGlvbnNbdGFza1ByaW9yaXR5SW5wdXQuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcm9qZWN0LWlucHV0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0TmFtZSA9IHRhc2tQcm9qZWN0SW5wdXQub3B0aW9uc1t0YXNrUHJvamVjdElucHV0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSAodGFza1Byb2plY3ROYW1lID09PSAnTm8gcHJvamVjdCc/IG51bGwgOiBcclxuICAgICAgICAgICAgQXBwLmdldFByb2plY3RCeU5hbWUodGFza1Byb2plY3ROYW1lKS5nZXRJZCgpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuZXdUYXNrTmFtZSwgbmV3VGFza0Rlc2MsIG5ld1Rhc2tEdWVEYXRlLCBuZXdUYXNrUHJpb3JpdHksIHRhc2tQcm9qZWN0KTtcclxuICAgIFxyXG4gICAgICAgICAgICBBcHAuYWRkTmV3VGFzayhuZXdUYXNrKTtcclxuICAgIFxyXG4gICAgICAgICAgICBVSS4jZGlzcGxheU5ld1Rhc2sobmV3VGFzay5nZXROYW1lKCksIG5ld1Rhc2suZ2V0RHVlRGF0ZSgpLCBuZXdUYXNrLmdldFByaW9yaXR5KCksXHJcbiAgICAgICAgICAgIG5ld1Rhc2suZ2V0SWQoKSwgbmV3VGFzay5nZXRTdGF0dXMoKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgVUkuI3JlbW92ZU1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjYWRkTW9kYWxFdmVudExpc3RlbmVycyhtb2RhbFR5cGUsIHRhc2tJZCA9IC0xKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJyk7XHJcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmdyZXktYnRuJyk7XHJcbiAgICAgICAgY29uc3QgY29udGludWVCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuYmx1ZS1idG4nKSB8fCBtb2RhbC5xdWVyeVNlbGVjdG9yKCcucmVkLWJ0bicpO1xyXG5cclxuICAgICAgICBpZiAobW9kYWxUeXBlID09PSAnbmV3VGFzaycpIHtcclxuICAgICAgICAgICAgY29udGludWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNoYW5kbGVOZXdUYXNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobW9kYWxUeXBlID09PSAnbmV3UHJvamVjdCcpIHtcclxuICAgICAgICAgICAgY29udGludWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNoYW5kbGVOZXdQcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobW9kYWxUeXBlID09PSAnZWRpdFRhc2snKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4jaGFuZGxlVGFza0VkaXQodGFza0lkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1vZGFsVHlwZSA9PT0gJ3Rhc2tJbmZvJykge1xyXG4gICAgICAgICAgICBjb250aW51ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuI3JlbW92ZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlID0gXCJvdmVyZmxvdy15OiBoaWRkZW47XCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNzaG93RWRpdFRhc2tNb2RhbCh0YXNrSWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobW9kYWxUeXBlID09PSAnZGVsZXRlU3RvcmVkRGF0YScpIHtcclxuICAgICAgICAgICAgY29udGludWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNoYW5kbGVEYXRhRGVsZXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuI3JlbW92ZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLXdyYXBwZXInKSkge1xyXG4gICAgICAgICAgICAgICAgVUkuI3JlbW92ZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBVSS4jaGFuZGxlRXNjYXBlS2V5UHJlc3MpO1xyXG5cclxuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS4jcmVtb3ZlTW9kYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjaGFuZGxlRmlsdGVyU2VsZWN0aW9uKHNlbGVjdGVkQnRuLCBidG5Ob2RlTGlzdCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcclxuXHJcbiAgICAgICAgLy8gVGhlIHBhcmFncmFwaCBlbGVtZW50IGlzIHRoZSAzcmQgY2hpbGRyZW4gb2YgdGhlIGJ0biBwcmVzc2VkLlxyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gc2VsZWN0ZWRCdG4uY2hpbGROb2Rlc1szXS5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnRuTm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGJ0bk5vZGVMaXN0W2ldLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgYnRuTm9kZUxpc3RbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0ZWRCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgcHJvamVjdE5hbWVEaXNwbGF5LmlubmVyVGV4dCA9IHByb2plY3ROYW1lO1xyXG5cclxuICAgICAgICB0aGlzLiNnZXRUYXNrc0ZvckZpbHRlcihwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNnZXRUYXNrc0ZvckZpbHRlcihmaWx0ZXIpIHtcclxuICAgICAgICBsZXQgdGFza3M7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXIgPT09ICdBbGwgdGFza3MnKSB7XHJcbiAgICAgICAgICAgIHRhc2tzID0gQXBwLmdldFRhc2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZpbHRlciA9PT0gJ1RvZGF5Jykge1xyXG4gICAgICAgICAgICB0YXNrcyA9IEFwcC5nZXREdWVUb2RheVRhc2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZpbHRlciA9PT0gJ1RoaXMgd2VlaycpIHtcclxuICAgICAgICAgICAgdGFza3MgPSBBcHAuZ2V0RHVlVGhpc1dlZWtUYXNrcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGFza3MgPSBBcHAuZ2V0VGFza3NCeVByb2plY3QoZmlsdGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI2NsZWFyVGFza0VudHJpZXMoKTsgICAgICAgIFxyXG5cclxuICAgICAgICBpZiAodGFza3MpIHtcclxuICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuI2Rpc3BsYXlOZXdUYXNrKHRhc2suZ2V0TmFtZSgpLCB0YXNrLmdldER1ZURhdGUoKSwgdGFzay5nZXRQcmlvcml0eSgpLFxyXG4gICAgICAgICAgICAgICAgdGFzay5nZXRJZCgpLCB0YXNrLmdldFN0YXR1cygpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjc2V0VGFza0ZpbHRlcnNFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICBjb25zdCB0YXNrRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWZpbHRlcicpO1xyXG5cclxuICAgICAgICB0YXNrRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiBmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBVSS4jaGFuZGxlRmlsdGVyU2VsZWN0aW9uKGUuY3VycmVudFRhcmdldCwgdGFza0ZpbHRlcnMpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI2FkZFVJRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKTtcclxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuQWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWJ0bi1hbHQnKTtcclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ0bicpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZURhdGFCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLWRhdGEtYnRuJyk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlRGF0YUJ0bkFsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtZGF0YS1idG4tYWx0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIFVJLiNzZXRUYXNrRmlsdGVyc0V2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlID0gXCJvdmVyZmxvdy15OiBoaWRkZW47XCI7XHJcbiAgICAgICAgICAgIFVJLiNzaG93TmV3UHJvamVjdE1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlID0gXCJvdmVyZmxvdy15OiBoaWRkZW47XCI7XHJcbiAgICAgICAgICAgIFVJLiNzaG93TmV3VGFza01vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFkZFRhc2tCdG5BbHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlID0gXCJvdmVyZmxvdy15OiBoaWRkZW47XCI7XHJcbiAgICAgICAgICAgIFVJLiNzaG93TmV3VGFza01vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRlbGV0ZURhdGFCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlID0gXCJvdmVyZmxvdy15OiBoaWRkZW47XCI7XHJcbiAgICAgICAgICAgIFVJLiNzaG93RGVsZXRlRGF0YU1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRlbGV0ZURhdGFCdG5BbHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlID0gXCJvdmVyZmxvdy15OiBoaWRkZW47XCI7XHJcbiAgICAgICAgICAgIFVJLiNzaG93RGVsZXRlRGF0YU1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFVJLiNhY3RpdmF0ZUJ1cmdlck1lbnUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI2FkZE9wdGlvbnNUb1Byb2plY3RTZWxlY3RvcigpIHtcclxuICAgICAgICBjb25zdCB0YXNrUHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdC1pbnB1dCcpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZXMgPSBBcHAuZ2V0UHJvamVjdE5hbWVzKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdE5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRhc2tQcm9qZWN0SW5wdXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICAgIDxvcHRpb24+JHtwcm9qZWN0TmFtZXNbaV19PC9vcHRpb24+XHJcbiAgICAgICAgICAgIGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI3NldElucHV0QXNJbnZhbGlkKGlucHV0LCBtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj0ke2lucHV0LmlkfV1gKTtcclxuXHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1pbnB1dCcpO1xyXG4gICAgICAgIGlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZCgncmVkLXRleHQnKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0Lm5leHRFbGVtZW50U2libGluZyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbnB1dC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgYDxzcGFuIGNsYXNzPVwiaW52YWxpZC1pbnB1dC1tZXNzYWdlXCI+JHttZXNzYWdlfTwvc3Bhbj5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNzZXRJbnB1dEFzVmFsaWQoaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPSR7aW5wdXQuaWR9XWApO1xyXG5cclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLWlucHV0Jyk7XHJcbiAgICAgICAgaW5wdXRMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtdGV4dCcpO1xyXG5cclxuICAgICAgICBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNpc1RleHRJbnB1dFZhbGlkKGlucHV0KSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLiNzZXRJbnB1dEFzSW52YWxpZChpbnB1dCwga05PRU1QVFlGSUVMRCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLiNzZXRJbnB1dEFzSW52YWxpZChpbnB1dCwga05PVFdISVRFU1BBQ0VBTE9ORSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZhbGlkLWlucHV0JykpIHtcclxuICAgICAgICAgICAgdGhpcy4jc2V0SW5wdXRBc1ZhbGlkKGlucHV0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjaXNPcHRpb25zSW5wdXRWYWxpZChpbnB1dCkge1xyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy4jc2V0SW5wdXRBc0ludmFsaWQoaW5wdXQsIGtOT0VNUFRZRklFTEQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlucHV0LmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZC1pbnB1dCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI3NldElucHV0QXNWYWxpZChpbnB1dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI2lzRGF0ZVZhbGlkKGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCkpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IG5ldyBEYXRlKGlucHV0LnZhbHVlKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaW5wdXREYXRlIDwgY3VycmVudERhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy4jc2V0SW5wdXRBc0ludmFsaWQoaW5wdXQsIGtEQVRFSU5WQUxJRCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZhbGlkLWlucHV0JykpIHtcclxuICAgICAgICAgICAgdGhpcy4jc2V0SW5wdXRBc1ZhbGlkKGlucHV0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjYXJlVGFza0ZpZWxkc1ZhbGlkKCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZS1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZHVlZGF0ZS1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcm9qZWN0LWlucHV0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkTmFtZSA9IHRoaXMuI2lzVGV4dElucHV0VmFsaWQodGFza05hbWUpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkRHVlRGF0ZSA9ICh0YXNrRHVlRGF0ZS52YWx1ZSA9PT0gJycgfCB0aGlzLiNpc0RhdGVWYWxpZCh0YXNrRHVlRGF0ZSkpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkUHJpb3JpdHkgPSB0aGlzLiNpc09wdGlvbnNJbnB1dFZhbGlkKHRhc2tQcmlvcml0eSk7XHJcbiAgICAgICAgY29uc3QgdmFsaWRQcm9qZWN0ID0gdGhpcy4jaXNPcHRpb25zSW5wdXRWYWxpZCh0YXNrUHJvamVjdCk7XHJcblxyXG4gICAgICAgIHJldHVybiAodmFsaWROYW1lICYmIHZhbGlkRHVlRGF0ZSAmJiB2YWxpZFByaW9yaXR5ICYmIHZhbGlkUHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNhcmVQcm9qZWN0RmllbGRzVmFsaWQoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1uYW1lLWlucHV0Jyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiNpc1RleHRJbnB1dFZhbGlkKHByb2pOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI2hhbmRsZURhdGFEZWxldGlvbigpIHtcclxuICAgICAgICBBcHAucmVtb3ZlRGF0YSgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5pdFVJKCkge1xyXG4gICAgICAgIFVJLiNhZGRVSUV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0cyA9IEFwcC5nZXRQcm9qZWN0cygpO1xyXG5cclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiNhZGROZXdQcm9qZWN0TmFtZVRvU2lkZWJhcihwcm9qZWN0LmdldE5hbWUoKSwgcHJvamVjdC5nZXRJZCgpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd0FsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC10YXNrcycpO1xyXG4gICAgICAgIHNob3dBbGxUYXNrcy5jbGljaygpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==