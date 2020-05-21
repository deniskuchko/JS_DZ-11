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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _speech_speech__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speech/speech */ "./src/speech/speech.js");
/* harmony import */ var _translate_translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate/translate */ "./src/translate/translate.js");



Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getMessage"])(); // Speech functions

Object(_speech_speech__WEBPACK_IMPORTED_MODULE_1__["speechApi"])(); //createItems();
//deleteItem();
//Translate functions

Object(_translate_translate__WEBPACK_IMPORTED_MODULE_2__["translateApi"])();

/***/ }),

/***/ "./src/speech/speech.js":
/*!******************************!*\
  !*** ./src/speech/speech.js ***!
  \******************************/
/*! exports provided: speechApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speechApi", function() { return speechApi; });
let searchForm = document.querySelector('#search-form');
let searchFormInput = document.querySelector('input');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let newArr = []; //Хранение всех вопросов 

let answerCollect = new Set(); // Хранения всех ответов

function createItems() {
  // Генерирование по одному вопросу через цикл
  for (let i = 0; i < 10; i++) {
    let block = document.createElement('div');
    block.className = `cont${i + 1}`;
    block.innerText = `Вопрос под номером ${i + 1}`;
    document.getElementById('container').appendChild(block);
    newArr.push(block);
  }
}

function deleteItem() {
  //Удаление вопроса после ответа
  newArr.shift();
}

document.getElementById('kviz').addEventListener('click', createItems);
console.log(newArr);

function speechApi() {
  if (SpeechRecognition) {
    searchForm.insertAdjacentHTML('beforeend', '<button type="button"><i class="fas fa-microphone"></i></button>');
    const microBtn = document.querySelector('button');
    const microIcon = document.querySelector('i');
    console.log('Hi, Chrome');
    let recognition = new SpeechRecognition();
    recognition.continuous = true;
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
      /* console.log(event.results)[0][0]; */

      for (let answer of event.results) {
        console.log('Answer --', answer[0].transcript);
        answerCollect.add(answer[0].transcript); //добавление нового ответа
      }

      if (answerCollect.size < 10) {
        // Удаление вопроса на странице
        deleteItem();
        document.getElementById('container').innerHTML = ' ';
        newArr.map(elem => {
          document.getElementById('container').appendChild(elem);
        });
      }
      /* let resultCurrent = event.results[0][0].transcript;
      searchFormInput.value = resultCurrent;
      setTimeout(()=>{
          searchForm.submit();
      }, 500) */


      console.log('Все ответы -', answerCollect);
    });
  } else {
    console.log('no');
  }
}

;


/***/ }),

/***/ "./src/translate/translate.js":
/*!************************************!*\
  !*** ./src/translate/translate.js ***!
  \************************************/
/*! exports provided: translateApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateApi", function() { return translateApi; });
const MY_KEY = 'trnsl.1.1.20200510T121507Z.4e0c22fb2adef5e4.46cb825344b5b2307f6a92a87a1bd8fe2f755942';
let words = document.querySelector('#start-text').innerText;

function translateApi() {
  fetch('1https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + MY_KEY + '&text=' + words + '&lang=ru-en').then(response => {
    /*  console.log(response.json()); */
    response.json().then(data => {
      console.log(data.text[0]);
      document.querySelector('#end-text').innerText = data.text[0];
    });
  }).catch(() => {
    console.log('Status Error!!!');
  });
}



/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: getMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessage", function() { return getMessage; });
const getMessage = () => {
  confirm("Hello World");
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map