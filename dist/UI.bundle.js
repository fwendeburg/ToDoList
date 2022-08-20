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

    static editProject(projid, newProjectName) {
        this.#todo.editProject(projid, newProjectName);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static deleteProject(projId) {
        this.#todo.deleteProject(projId);

        this.#storage.saveData(this.#todo.toJSONObject());
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

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    setName(newName) {
        this.name = newName;
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");


class Task {
    static #nextId = 0;

    constructor(name, description, duedate, priority, project) {
        this.name = name;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.id = Task.#nextId++;
        this.isCompleted = false;

        if (project === undefined) {
            this.project = null;
        }
        else {
            this.project = project;
        }
    }

    setProperties(name, description, dueDate, priority, project) {
        this.name = name;
        this.description = description;
        this.duedate = dueDate;
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
        return this.duedate;
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

    isDuedateToday() {
        if (this.duedate === '') {
            return false;
        }

        return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(this.duedate));
    }

    isDuedateThisWeek() {
        if (this.duedate === '') {
            return false;
        }

        let nextWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(), 7);

        return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(this.duedate), nextWeek) != 1
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
            this.#tasks.splice(taskIndex, 1);
        }
    }

    deleteProject(projId) {
        const projectIndex = this.#getProjectIndex(projId)
        const project = this.getProjectById(projId);

        if (projectIndex != -1) {
            this.#projects.splice(projectIndex, 1);
        }

        let projectTasks = this.#tasks.filter(task => task.getProject() === project.getId());
        projectTasks.map(task => task.getId());
        
        projectTasks.forEach(taskId => this.deleteTask(taskId));
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
            if (this.#tasks[i].isDuedateToday()) {
                tasks.push(this.#tasks[i]);
            }
        }

        return tasks;
    }

    getDueThisWeekTasks = () => {
        let tasks = [];

        for (let i = 0; i < this.#tasks.length; i++) {
            if (this.#tasks[i].isDuedateThisWeek()) {
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

    editProject(projid, newProjectName) {
        this.getProjectById(projid).setName(newProjectName);
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
            <div class="add-task-modal" role="dialog" aria-modal="true">
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

    static #showEditProjectModal() {
        const body = document.querySelector('body');
        const projectName = document.querySelector('#filter-name').innerText;
        const project = _App__WEBPACK_IMPORTED_MODULE_2__.default.getProjectByName(projectName);

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="add-project-modal">
                <div class="modal-header">
                    <h4>Edit project</h4>
                </div>

                <div class="inputs">
                    <div class="form-input all-sides-20px-margin">
                        <label for="proj-name-input">Title</label>
                        <br>
                        <input required type="text" id="proj-name-input" value="${project.getName()}">
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Save</button>
                </div>
            </div>
        </div>`
        );

        this.#addModalEventListeners('editProject');
    }

    static #showDeleteProjectModal() {
        const body = document.querySelector('body');
        const projName = document.querySelector('#filter-name').innerText;

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="delete-data-modal">
                <div class="modal-header">
                    <h4>Delete project "${projName}"?</h4>
                </div>

                <p class="modal-text">
                    Are you sure you want to delete this project?
                    <br>
                    This will also delete all tasks assigned to the project.
                </p>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="red-btn bottom-modal-btn">Delete project</button>
                </div>
            </div>
        </div>
        `);

        this.#addModalEventListeners('deleteProject');
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

    static #displayNewTask(name, dueDate, priority, id, taskStatus) {
        const content = document.querySelector('.content');

        content.insertAdjacentHTML('beforeend', `
        <div class="task-entry" data-taskid ="${id}">
                <div class="left-side">
                    <input type="checkbox" class="task-finished" data-taskid="${id}">
                    <label tabindex="0">${name} - ${dueDate}</label>
                </div>

                <div class="right-side">
                    <span class="material-icons-outlined edit-task-btn" data-taskid ="${id}" tabindex="0">edit</span>
                    <span class="material-icons delete-task-btn" data-taskid ="${id}" tabindex="0">delete_outline</span>
                    <span class="task-priority material-icons task-${priority.toLowerCase()}-priority">circle</span>
                </div>
            </div>
        </div>`
        );

        const completedTaskInputs = document.querySelectorAll('.task-finished');
        const taskCompletedCheckbox = this.#getHTMLElementByTaskId(id, completedTaskInputs)

        taskCompletedCheckbox.addEventListener('click', (e) => {
            this.#changeTaskStatus(id, e.target.parentNode.parentNode);
        });

        taskCompletedCheckbox.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);

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

        const body = document.querySelector('body');

        label.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            this.#showTaskInfoModal(taskId);
        });

        label.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
    }

    static #addDeleteTaskBtnEventListener(id) {
        const deleteTaskBtns = document.querySelectorAll('.delete-task-btn');
        let deleteTaskBtn = this.#getHTMLElementByTaskId(id, deleteTaskBtns);

        deleteTaskBtn.addEventListener('click', (e) => {
            this.#removeTaskEntry(e.target.dataset.taskid);

            _App__WEBPACK_IMPORTED_MODULE_2__.default.deleteTask(e.target.dataset.taskid);
        });

        deleteTaskBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
    }

    static #addEditTaskBtnEventListener(id) {
        const editTaskBtns = document.querySelectorAll('.edit-task-btn');
        const body = document.querySelector('body');

        let editTaskBtn = this.#getHTMLElementByTaskId(id, editTaskBtns);

        editTaskBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            this.#showEditTaskModal(e.target.dataset.taskid);
        });

        editTaskBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
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

    static #removeTaskFiltersEventListeners() {
        const taskFilters = document.querySelectorAll('.task-filter');

        taskFilters.forEach(filter => filter.removeEventListener('click', this.#handleFilterSelection));
    }

    static #addNewProjectNameToSidebar(name, id) {
        const projectList = document.querySelector('#projects-section');

        projectList.insertAdjacentHTML('beforeend', `
        <div class="task-filter project" data-projid="${id}" tabindex="0">
            <span class="material-icons-outlined">description</span>
            <p>${name}</p>
        </div>
        `);

        const projectEntry = projectList.querySelector(`[data-projid='${id}']`);
        projectEntry.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);

        UI.#removeTaskFiltersEventListeners();
        UI.#setTaskFiltersEventListeners();
    }

    static #removeModal() {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal-wrapper');

        body.style = "";

        document.removeEventListener('keydown', UI.#handleTabKeyPressOnFocusTrappedHTMLElement);

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

    static #removeProjectNameFromSidebar(id) {
        const project = document.querySelector(`[data-projid='${id}']`);
        const projectList = document.querySelector('#projects-section');

        projectList.removeChild(project);
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
            
            const taskProject = _App__WEBPACK_IMPORTED_MODULE_2__.default.getProjectByName(taskProjectName);

            const taskProjectId = (taskProjectName === 'No project'? null : 
            taskProject.getId());
            
            const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_0__.default(newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority, taskProjectId);

            _App__WEBPACK_IMPORTED_MODULE_2__.default.addNewTask(newTask);

            const currentFilter = document.querySelector('#filter-name').innerText;

            if ((taskProjectName === 'No project' && currentFilter === 'All tasks') ||
                (taskProjectName === currentFilter) || 
                newTask.isDuedateToday() && currentFilter === 'Today' ||
                newTask.isDuedateThisWeek() && currentFilter === 'This week') {
                UI.#displayNewTask(newTask.getName(), newTask.getDueDate(), newTask.getPriority(),
                newTask.getId(), newTask.getStatus());
            }
    
            UI.#removeModal();
        }
    }

    static #handleTabKeyPressOnFocusTrappedHTMLElement(firstFocusableElement, lastFocusableElement, e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
          return;
        }
      
        if (e.shiftKey) { // shift + tab
            if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }

    static #trapFocusOnHTMLElement(element) {
        const  focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = element.querySelectorAll(focusableElements);

        document.addEventListener('keydown', UI.#handleTabKeyPressOnFocusTrappedHTMLElement.bind(null, focusableContent[0], focusableContent[focusableContent.length - 1]));
    
        focusableContent[0].focus();
    }

    static #addModalEventListeners(modalType, taskId = -1) {
        const body = document.querySelector('body');
        const modalWrapper = document.querySelector('.modal-wrapper');
        const modal = modalWrapper.firstElementChild;
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
        else if (modalType === 'editProject') {
            continueBtn.addEventListener('click', () => {
                this.#handleEditProject();
                this.#removeModal();
            });
        }
        else if (modalType === 'deleteProject') {
            continueBtn.addEventListener('click', (e) => {
                this.#handleDeleteProject();
                this.#removeModal();
            });
        }

        modalWrapper.addEventListener('click', (e) => {
            if(e.target.classList.contains('modal-wrapper')) {
                UI.#removeModal();
            }
        })

        body.addEventListener('keydown', UI.#handleEscapeKeyPress);

        cancelBtn.addEventListener('click', UI.#removeModal);
    
        this.#trapFocusOnHTMLElement(modal);
    }

    static #updateProjectNameOnUI(projectId, newProjectName) {
        document.querySelector('#filter-name').innerText = newProjectName;

        const sidebarProjectList = document.querySelector('#projects-section');
        const projectElement = sidebarProjectList.querySelector(`[data-projid="${projectId}"]`);
        
        projectElement.children[1].innerText = newProjectName;
    }

    static #handleEditProject() {
        if (UI.#areProjectFieldsValid()) {
            const newProjectName = document.querySelector('#proj-name-input').value;
            const currentProjectName = document.querySelector('#filter-name').innerText;
            const project = _App__WEBPACK_IMPORTED_MODULE_2__.default.getProjectByName(currentProjectName);

            this.#updateProjectNameOnUI(project.getId(), newProjectName);

            _App__WEBPACK_IMPORTED_MODULE_2__.default.editProject(project.getId(), newProjectName);

            UI.#removeModal();
        }
    }

    static #handleDeleteProject() {
        const projectName = document.querySelector('#filter-name').innerText;
        const project = _App__WEBPACK_IMPORTED_MODULE_2__.default.getProjectByName(projectName);
        const projectTasks = _App__WEBPACK_IMPORTED_MODULE_2__.default.getTasksByProject(projectName);
        
        this.#removeProjectNameFromSidebar(project.getId());

        projectTasks.forEach(task => {
            this.#removeTaskEntry(task.getId());
        });        

        _App__WEBPACK_IMPORTED_MODULE_2__.default.deleteProject(project.getId());

        document.querySelector('#all-tasks').click();
    }

    static #addProjectActionButtons(filter) {
        const filterWithoutActions = ['All tasks', 'Today', 'This week'];

        if (!filterWithoutActions.includes(filter)) {
            const contentSectionHeader = document.querySelector('#content-section-header');
            const leftSide = contentSectionHeader.querySelector('.left-side');

            leftSide.insertAdjacentHTML('beforeend',`
                <div class="content-section-header-btn" id="edit-project-btn" tabindex="0">
                    <span class="material-icons-outlined">edit</span>
                </div>
                <div class="content-section-header-btn" id="delete-project-btn" tabindex="0">
                    <span class="material-icons-outlined">delete_outline</span>
                </div>
            `);

            const deleteProjectBtn = contentSectionHeader.querySelector('#delete-project-btn');
            const editProjectBtn = contentSectionHeader.querySelector('#edit-project-btn');
            
            deleteProjectBtn.addEventListener('click', (e) => {
                this.#showDeleteProjectModal();
            });

            editProjectBtn.addEventListener('click', (e) => {
                this.#showEditProjectModal();
            }); 

            deleteProjectBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
            editProjectBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
        }
    }

    static #removeProjectActionButtons(filter) {
        const contentSectionHeader = document.querySelector('#content-section-header');
        
        const filterWithoutActions = ['All tasks', 'Today', 'This week'];

        if (!filterWithoutActions.includes(filter)) {
            const editProjBtn = contentSectionHeader.querySelector('#edit-project-btn');
            const deleteProjBtn = contentSectionHeader.querySelector('#delete-project-btn');

            editProjBtn.remove();
            deleteProjBtn.remove();
        }
    }

    static #handleFilterSelection(e) {
        const btnNodeList = document.querySelectorAll('.task-filter');
        const selectedBtn = e.currentTarget;
        const filterNameDisplay = document.querySelector('#filter-name');
        const currentFilterName = filterNameDisplay.innerText;

        // The paragraph element is the 3rd children of the btn pressed.
        const newFilter = selectedBtn.childNodes[3].innerText;

        for (let i = 0; i < btnNodeList.length; i++) {
            if (btnNodeList[i].classList.contains('selected') && btnNodeList[i] != selectedBtn) {
                btnNodeList[i].classList.remove('selected');
            }
        }

        UI.#removeProjectActionButtons(currentFilterName);

        if (!selectedBtn.classList.contains('selected')) {
            UI.#addProjectActionButtons(newFilter);

            selectedBtn.classList.add('selected');

            filterNameDisplay.innerText = newFilter;

            // sort arg missing
            UI.#displayTasks(UI.#getTasksForFilter(newFilter));
        }
    }   

    static #displayTasks(tasks, sort) {
        if (sort === 'alphabeticallyasc') {
            UI.#sortTasksAlphabeticallyAsc(tasks);
        }
        else if (sort === 'prioritydesc') {
            UI.#sortTasksByPriorityDesc(tasks);
        }
        else {
            UI.#sortTasksByDueDateAsc(tasks);
        }

        this.#clearTaskEntries();

        tasks.forEach(task => {
            this.#displayNewTask(task.getName(), task.getDueDate(), task.getPriority(),
            task.getId(), task.getStatus());
        });
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

        return tasks;
    }

    static #setTaskFiltersEventListeners() {
        const taskFilters = document.querySelectorAll('.task-filter');

        taskFilters.forEach(filter => filter.addEventListener('click', UI.#handleFilterSelection));
    }

    static #showSortTasksDropdownMenu() {
        const sortingOptions = document.querySelector('#sort-tasks-options');
        const sortTasksBtn = document.querySelector('#sort-tasks-btn')

        if (!sortingOptions.classList.contains('dropdown-content-visible')) {
            sortingOptions.classList.add('dropdown-content-visible');
            sortTasksBtn.classList.add('content-section-header-btn-hovered');

            window.addEventListener('click', UI.#removeTaskSortDropdownOnOusideClick);
            this.#trapFocusOnHTMLElement(document.querySelector('#sort-tasks-dropdown-menu'));
        }
        else {
            sortingOptions.classList.remove('dropdown-content-visible');
            sortTasksBtn.classList.remove('content-section-header-btn-hovered');

            window.removeEventListener('click', UI.#removeTaskSortDropdownOnOusideClick);
            document.removeEventListener('keydown', UI.#handleTabKeyPressOnFocusTrappedHTMLElement);
        }
    }

    static #removeTaskSortDropdownOnOusideClick(e) {
        const sortTasksBtn = document.querySelector('#sort-tasks-btn');

        // Check if the target is the button that opens the dropdown menu.
        const isTargetSortTasksBtn = e.target.matches('#sort-tasks-btn');
        
        // Check if the target is either the text or the icon of the button.
        const isTargetSortTasksBtnIcon = e.target === sortTasksBtn.children[0];
        const isTargetSortTasksBtnText = e.target === sortTasksBtn.children[1];

        // Check if the target is an option of the menu.
        const isTargetDropdownContent = e.target.matches('#sort-tasks-options') || 
                                        e.target.parentNode.matches('#sort-tasks-options');


        if (!isTargetSortTasksBtn && !isTargetSortTasksBtnIcon && 
            !isTargetSortTasksBtnText && !isTargetDropdownContent) {
            const sortingOptions = document.querySelector('#sort-tasks-options');

            if (sortingOptions.classList.contains('dropdown-content-visible') &&
                sortTasksBtn.classList.contains('content-section-header-btn-hovered')
            ) {
                sortingOptions.classList.remove('dropdown-content-visible');
                sortTasksBtn.classList.remove('content-section-header-btn-hovered');

                window.removeEventListener('click', UI.#removeTaskSortDropdownOnOusideClick);
                document.removeEventListener('keydown', UI.#handleTabKeyPressOnFocusTrappedHTMLElement);
            }
        }
    }

    static #sortTasksByDueDateAsc(tasks) {
        tasks.sort((a, b) => {
            let duedateA = a.getDueDate();
            let duedateB = b.getDueDate();

            if (duedateA === duedateB) {
                return 0;
            }
            else if (duedateA === '') {
                return 1;
            }
            else if (duedateB === '') {
                return -1;
            }
            else {
                return new Date(duedateA) - new Date(duedateB);
            }
        });
    }

    static #sortTasksAlphabeticallyAsc(tasks) {
        tasks.sort((a, b) => {
            let nameA = a.getName().toLowerCase();
            let nameB = b.getName().toLowerCase();
            
            if (nameA === nameB) {
                return 0;
            }
            else if (nameA < nameB) {
                return -1;
            }
            else {
                return 1;
            }
        });
    }

    static #sortTasksByPriorityDesc(tasks) {
        tasks.sort((a, b) => {
            let pA = a.getPriority().toLowerCase();
            let pB = b.getPriority().toLowerCase();
            
            if (pA === pB) {
                return 0;
            }
            else if (pA === 'low' && (pB === 'medium' || pB === 'high')) {
                return 1;
            }
            else if (pA === 'medium' && pB === 'high') {
                return 1;
            }
            else {
                return -1;
            }
        });
    }

    static #handleTaskSortOptionSelection(e) {
        const filter = document.querySelector('#filter-name').innerText;
        const sortingOptions = document.querySelectorAll('.task-sort-option');

        for (let i = 0; i < sortingOptions.length; i++) {
            if (sortingOptions[i].classList.contains('selected') && sortingOptions[i] != e.currentTarget) {
                sortingOptions[i].classList.remove('selected');
            }
        }

        if (!e.currentTarget.classList.contains('selected')) {
            e.currentTarget.classList.add('selected');

            UI.#displayTasks(UI.#getTasksForFilter(filter), e.currentTarget.dataset.value);
        }
    }

    static #setTaskSortingOptionsEventListeners() {
        const sortingOptions = document.querySelectorAll('.task-sort-option');

        sortingOptions.forEach(option => {
            option.addEventListener('click', UI.#handleTaskSortOptionSelection);
            option.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
        });
    }

    static #addUIEventListeners() {
        const addTaskBtn = document.querySelector('#add-task-btn');
        const addTaskBtnAlt = document.querySelector('#add-task-btn-alt');
        const addProjectBtn = document.querySelector('#add-project-btn');
        const deleteDataBtn = document.querySelector('#delete-data-btn');
        const deleteDataBtnAlt = document.querySelector('#delete-data-btn-alt');
        const sortTasksBtn = document.querySelector('#sort-tasks-btn');

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

        sortTasksBtn.addEventListener('click', (e) => {
            UI.#showSortTasksDropdownMenu();
        });

        addProjectBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
        addTaskBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
        deleteDataBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
        sortTasksBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);

        UI.#setTaskSortingOptionsEventListeners();

        UI.#activateBurgerMenu();
    }

    static #addOptionsToProjectSelector() {
        const taskProjectInput = document.querySelector('#task-project-input');
        const projectNames = _App__WEBPACK_IMPORTED_MODULE_2__.default.getProjectNames();
        const currentFilter = document.querySelector('#filter-name').innerText;

        for (let i = 0; i < projectNames.length; i++) {
            taskProjectInput.insertAdjacentHTML('beforeend', `
            <option ${projectNames[i] === currentFilter? 'selected' : ''}>${projectNames[i]}</option>
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

    static #handleEnterOnFocusedHTMLElement(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.target.click();
        }
    }

    static initUI() {
        UI.#addUIEventListeners();

        let projects = _App__WEBPACK_IMPORTED_MODULE_2__.default.getProjects();

        projects.forEach(project => {
            this.#addNewProjectNameToSidebar(project.getName(), project.getId());
        });

        const showAllTasks = document.querySelector('#all-tasks');
        showAllTasks.classList.add('selected');

        // sort by duedate
        this.#displayTasks(this.#getTasksForFilter('All tasks'), 'duedateasc');
        
        const duedateascSortOption = document.querySelector('[data-value="duedateasc"]');
        duedateascSortOption.classList.add('selected');
    }
}
})();

/******/ })()
;