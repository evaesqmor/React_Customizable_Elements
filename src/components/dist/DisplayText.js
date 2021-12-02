"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* eslint-disable use-isnan */
var React = require("react");
var DisplayText = /** @class */ (function (_super) {
    __extends(DisplayText, _super);
    function DisplayText(props) {
        return _super.call(this, props) || this;
    }
    DisplayText.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("p", { style: { fontSize: this.props.fontSize, color: this.props.color, fontFamily: this.props.fontFamily,
                        fontWeight: this.props.bold ? 'bold' : 'inherit', fontStyle: this.props.cursive ? 'italic' : 'inherit',
                        textDecoration: this.props.underlined ? 'underline' : 'inherit' }, placeholder: "Escribe algo" }, this.props.textContent === "" || this.props.textContent === "NaN" ? "Escribe algo en la entrada de texto que está encima de este display." : this.props.textContent))));
    };
    return DisplayText;
}(React.Component));
exports["default"] = DisplayText;
