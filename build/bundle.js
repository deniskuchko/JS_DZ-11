/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! exports provided: showTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTime", function() { return showTime; });
Date.prototype.format = function (format = 'yyyy-mm-dd') {
  const replaces = {
    yyyy: this.getFullYear(),
    mm: ('0' + (this.getMonth() + 1)).slice(-2),
    dd: ('0' + this.getDate()).slice(-2),
    hh: ('0' + this.getHours()).slice(-2),
    MM: ('0' + this.getMinutes()).slice(-2),
    ss: ('0' + this.getSeconds()).slice(-2)
  };
  let result = format;

  for (const replace in replaces) {
    result = result.replace(replace, replaces[replace]);
  }

  return result;
};

var date = new Date();
var options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
dataCreateNewRu = new Date().format('yyyy/mm/dd hh:MM:ss');
dataCreateNewEn = date.toLocaleString("en-US", options);
let button = document.createElement('button');
button.className = 'time_ru';
button.innerHTML = dataCreateNewRu + '    1';

function showTime(el) {
  console.log(el.options[el.selectedIndex].value);
  button.remove();

  if (el.options[el.selectedIndex].value === 'ru_time') {
    button.className = 'time_ru';
    button.innerHTML = dataCreateNewRu;
  }

  if (el.options[el.selectedIndex].value === 'en_time') {
    button.className = 'time_en';
    button.innerHTML = dataCreateNewEn;
  }

  document.getElementById('vivod_time').prepend(button);
}

;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _speech_speech__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speech/speech */ "./src/speech/speech.js");
/* harmony import */ var _zapros_zapros__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zapros/zapros */ "./src/zapros/zapros.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/data */ "./src/data/data.js");
/* harmony import */ var _translate_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translate/translate */ "./src/translate/translate.js");

/* Speech API */

Object(_speech_speech__WEBPACK_IMPORTED_MODULE_0__["speechButtonHandler"])();
Object(_speech_speech__WEBPACK_IMPORTED_MODULE_0__["yesNoButtonHandler"])();
Object(_speech_speech__WEBPACK_IMPORTED_MODULE_0__["cardFactory"])();
Object(_speech_speech__WEBPACK_IMPORTED_MODULE_0__["renderResult"])();
Object(_speech_speech__WEBPACK_IMPORTED_MODULE_0__["updateCard"])();
Object(_speech_speech__WEBPACK_IMPORTED_MODULE_0__["updateCard"])(-1);
/* zapros Golosom */


Object(_zapros_zapros__WEBPACK_IMPORTED_MODULE_1__["zaprosGolosom"])();
/* Time */


Object(_data_data__WEBPACK_IMPORTED_MODULE_2__["showTime"])();
/* Language */


Object(_translate_translate__WEBPACK_IMPORTED_MODULE_3__["showLang"])();
Object(_translate_translate__WEBPACK_IMPORTED_MODULE_3__["fetchLang"])();

/***/ }),

/***/ "./src/speech/speech.js":
/*!******************************!*\
  !*** ./src/speech/speech.js ***!
  \******************************/
/*! exports provided: speechButtonHandler, yesNoButtonHandler, cardFactory, renderResult, updateCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speechButtonHandler", function() { return speechButtonHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yesNoButtonHandler", function() { return yesNoButtonHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardFactory", function() { return cardFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderResult", function() { return renderResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCard", function() { return updateCard; });
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const IS_SPEECH_REC_SUPPORTED = false
/* !!SpeechRecognition */
;
const QUESTIONS = [`Вам больше 20 лет?`, `Вы мужчина?`, `Имеете высше образование?`, `Имеете постоянное место работы?`, `Есть ли в имуществе автомобиль?`, `Больше двух раз  в год бываете за пределами РБ?`, `Есть ли пожелания?`];
let YES_STRING = 'да';
let NO_STRING = 'нет';
let lang;
let places;
let langSpeach;
const ANSWERS = new Array(QUESTIONS.length).fill('');
const CARD_WRAPPER = document.querySelector('#card-wrapper');
let place = document.querySelector("#start-text");
let words = document.querySelector("#start-text").innerText;
const speechRecognition = new SpeechRecognition();

function speechButtonHandler(index) {
  speechRecognition.start();

  speechRecognition.onresult = function (event) {
    ANSWERS[index] = event.results[0][0].transcript;
    console.log(ANSWERS[index]);
    speechRecognition.stop();
    updateCard(index);
  };
}

function yesNoButtonHandler(index, value) {
  ANSWERS[index] = value;
  updateCard(index);
}

function cardFactory(index) {
  const card = document.createElement('div');
  card.className = 'questions';
  const questionElement = document.createElement('p');
  questionElement.className = 'questionsNumber';
  questionElement.innerText = QUESTIONS[index];
  let answerElement;

  if (IS_SPEECH_REC_SUPPORTED) {
    answerElement = document.createElement('button');
    answerElement.className = 'say';
    answerElement.innerText = 'Говорите';
    answerElement.addEventListener('click', speechButtonHandler.bind(answerElement, index));
  } else {
    answerElement = document.createElement('div');
    answerElement.className = 'container';
    const yesButton = document.createElement('button');
    yesButton.className = 'da';
    const noButton = document.createElement('button');
    noButton.className = 'net';
    yesButton.innerText = YES_STRING;
    noButton.innerText = NO_STRING;
    yesButton.addEventListener('click', yesNoButtonHandler.bind(yesButton, index, YES_STRING));
    noButton.addEventListener('click', yesNoButtonHandler.bind(noButton, index, NO_STRING));
    answerElement.appendChild(yesButton);
    answerElement.appendChild(noButton);
  }

  card.appendChild(questionElement);
  card.appendChild(answerElement);
  return card;
}

function renderResult() {
  const result = document.createElement('div');
  result.className = 'result';
  const {
    yes,
    no
  } = ANSWERS.reduce((acc, val) => {
    if (val === YES_STRING) {
      acc.yes += 1;
    }

    if (val === NO_STRING) {
      acc.no += 1;
    }

    return acc;
  }, {
    yes: 0,
    no: 0
  });
  result.innerText = `Ответов ДА: ${yes} | Ответов НЕТ: ${no}`;
  return result;
}

function updateCard(currentIndex) {
  if (CARD_WRAPPER.firstChild) {
    CARD_WRAPPER.firstChild.remove();
  }

  const nextIndex = currentIndex + 1;
  const toRender = nextIndex > QUESTIONS.length - 1 ? renderResult() : cardFactory(nextIndex);
  CARD_WRAPPER.appendChild(toRender);
  /*   showLang(el);
    fetchLang(lang, toRender); */
}

updateCard(-1);


/***/ }),

/***/ "./src/translate/translate.js":
/*!************************************!*\
  !*** ./src/translate/translate.js ***!
  \************************************/
/*! exports provided: fetchLang, showLang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLang", function() { return fetchLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLang", function() { return showLang; });
const MY_KEY = 'trnsl.1.1.20200513T181152Z.4d4e85ca50535b2d.6b5a939dabd11a5f247e618137da5ca57ae3beea';
console.log(words);

function showLang(el) {
  console.log(el.options[el.selectedIndex].value);

  if (el.options[el.selectedIndex].value === 'en') {
    lang = 'ru-en';
    langSpeach = 'en';
    YES_STRING = 'yes';
    NO_STRING = 'no';
  } else {
    lang = 'en-ru';
    langSpeach = 'ru';
    YES_STRING = 'да';
    NO_STRING = 'нет';
  }

  speechRecognition.lang = langSpeach;
  return fetchLang(lang, words, places, place);
}

;

function fetchLang(lang, words, places, place) {
  fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + MY_KEY + '&text=' + words + '&lang=' + lang).then(response => {
    /* console.log(response.json()); */
    response.json().then(data => {
      console.log(data.text[0]);
      places = data.text[0];
      place.innerText = places;
      console.log(place);
    });
  }).catch(() => {
    console.log('Status Error');
  });
}



/***/ }),

/***/ "./src/zapros/zapros.js":
/*!******************************!*\
  !*** ./src/zapros/zapros.js ***!
  \******************************/
/*! exports provided: zaprosGolosom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zaprosGolosom", function() { return zaprosGolosom; });
let searchForm = document.querySelector('#search-form');
let searchFormInput = document.querySelector('input');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function zaprosGolosom() {
  if (SpeechRecognition) {
    searchForm.insertAdjacentHTML('beforeend', '<button type="button"><i class="fas fa-microphone"></i></button>');
    const microBtn = document.querySelector('button');
    const microIcon = document.querySelector('i');
    console.log('Hi, Chrome');
    let recognition = new SpeechRecognition();
    /*     recognition.continuous = true; */

    microBtn.addEventListener('click', () => {
      if (microIcon.classList.contains('fa-microphone')) {
        recognition.start();
      } else {
        recognition.stop();
      }
    });
    recognition.addEventListener('start', () => {
      console.log('Record Start');
      microIcon.classList.remove('fa-microphone');
      microIcon.classList.add('fa-microphone-slash');
    });
    recognition.addEventListener('end', () => {
      console.log('Record Finish');
      microIcon.classList.add('fa-microphone');
      microIcon.classList.remove('fa-microphone-slash');
    });
    recognition.addEventListener('result', event => {
      console.log(event);
      let resultCurrent = event.results[0][0].transcript;

      if (resultCurrent.includes(`найти`) == true) {
        searchFormInput.value = resultCurrent.slice(0, -5);
        console.log(searchFormInput.value);
        setTimeout(() => {
          searchForm.submit();
        }, 500);
      }

      ;
    });
  } else {
    console.log('no');
  }
}



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map