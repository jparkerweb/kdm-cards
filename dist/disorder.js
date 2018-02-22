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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var cardJSON = __webpack_require__(1)
console.log(cardJSON)
var app = new Vue({
    el: '#app',
    data: {
        cards: cardJSON,
        msg: "hello"
    }
})

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"disorders":[{"name":"Aichmophobia","survivor_effect":"You cannot activate or <b>depart</b> with axes, swords, spears, daggers, scythes, or katars in your gear grid."},{"name":"Anxiety","survivor_effect":"At the start of each showdown, gain the <b>priority target</b> token unless you have <b>stinky</b> gear in your gear grid."},{"name":"Apathetic","survivor_effect":"You cannot use or gain survival. You cannot gain courage. Cure this disorder if you have 8+ understanding."},{"name":"Binge Eating","survivor_effect":"You cannot <b>depart</b> unless you have <b>consumable</b> gear in your gear grid. You must <b>consume</b> if a choice to <b>consume</b> arises."},{"name":"Coprolalia","survivor_effect":"All your gear is <b>noisy</b>. You are always a threat unless you are knocked down, even if an effect says otherwise."},{"name":"Fear of the Dark","survivor_effect":"You retire.<br/>If you gain this disorder during a hunt or showdown, you put on a brave face until you return to the settlement, vowing never to leave the Lantern Hoard again."},{"name":"Hemophobia","survivor_effect":"During the showdown, whenever a survivor (including you) gains a bleeding token, you are knocked down."},{"name":"Hoarder","survivor_effect":"Whenever you are a <b>returning</b> survivor, archive 1 resource gained from the last showdown and gain +1 courage."},{"name":"Honorable","survivor_effect":"You cannot attack a monster from its blind spot or if it is knocked down."},{"name":"Hyperactive","survivor_effect":"During the showdown, you must move at least 1 space every round."},{"name":"Immortal","survivor_effect":"While you are insane, convert all damage dealt to your hit locations to brain damage.<br/>You are so busy reveling in your own glory that you cannot spend survival while insane."},{"name":"Indecision","survivor_effect":"If you are the event revealer of hunt events that call on you to make a roll, roll twice and use the lower result."},{"name":"Monster Panic","survivor_effect":"Whenever you suffer brain damage from an <b>Intimidate</b> action, suffer 1 additional brain damage."},{"name":"Post-Traumatic Stress","survivor_effect":"Next settlement phase, you do not contribute or participate in any endeavors. Skip the next hunt to recover."},{"name":"Prey","survivor_effect":"You may not spend survival unless you are insane."},{"name":"Quixotic","survivor_effect":"If you are insane when you <b>depart</b>, gain +1 survival and +1 Strength token."},{"name":"Rageholic","survivor_effect":"Whenever you suffer a severe injury, also suffer the <b>frenzy</b> brain trauma."},{"name":"Secretive","survivor_effect":"When you are a <b>returning survivor</b>, you quickly become preoccuiped with your own affairs. You must skip the next hunt to deal with them."},{"name":"Seizures","survivor_effect":"During the showdown, whenever you suffer damage to your head location, you are knocked down."},{"name":"Squeamish","survivor_effect":"You cannot <b>depart</b> with any <b>stinky</b> gear in your gear grid. If a status or effect would cause you to become stinky, lose all your survival."},{"name":"Traumatized","survivor_effect":"Whenever you end your act adjacent to a monster, you are knocked down."},{"name":"Vestiphobia","survivor_effect":"You cannot wear armor at the body location. If you are wearing armor at the body location when you gain this disorder, archive it as you tear it off your person!"},{"name":"Weak Spot","survivor_effect":"When you gain this disorder, roll a random hit location and record it. You cannot <b>depart</b> unless you have armor at this hit location."}]}

/***/ })
/******/ ]);