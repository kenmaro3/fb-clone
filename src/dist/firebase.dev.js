"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.provider = exports.auth = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyCDK7esjSr9Mfn5YGpcrUqDhgWIQDV95W4",
  authDomain: "facebook-clone-98d55.firebaseapp.com",
  databaseURL: "https://facebook-clone-98d55.firebaseio.com",
  projectId: "facebook-clone-98d55",
  storageBucket: "facebook-clone-98d55.appspot.com",
  messagingSenderId: "238095553836",
  appId: "1:238095553836:web:a29e3e6134d9b6403c8889",
  measurementId: "G-XMTLBRS49N"
};

var firebaseApp = _firebase["default"].initializeApp(firebaseConfig);

var db = firebaseApp.firestore();

var auth = _firebase["default"].auth();

exports.auth = auth;
var provider = new _firebase["default"].auth.GoogleAuthProvider();
exports.provider = provider;
var _default = db;
exports["default"] = _default;