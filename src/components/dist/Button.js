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
var React = require("react");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        return _super.call(this, props) || this;
    }
    Button.prototype.render = function () {
        return (React.createElement("button", { className: "button btn is-primary", onClick: this.props.onClick, style: { fontWeight: this.props.type === "bold" ? 'bold' : 'inherit',
                fontStyle: this.props.type === "cursive" ? 'italic' : 'inherit',
                textDecoration: this.props.type === "underlined" ? 'underline' : 'inherit' } }, this.props.buttonText));
    };
    return Button;
}(React.Component));
exports["default"] = Button;
