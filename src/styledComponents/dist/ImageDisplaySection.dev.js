"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ImageDisplaySection = _interopRequireDefault(require("../containers/ImageDisplaySection"));

var _reactJss = _interopRequireDefault(require("react-jss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var classes = {
  imageFilter: {
    filter: "".concat(function (props) {
      return console.log("X", props.filter);
    })
  }
};

var _default = (0, _reactJss["default"])(classes)(_ImageDisplaySection["default"]);

exports["default"] = _default;