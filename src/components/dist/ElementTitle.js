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
var ElementTitle = /** @class */ (function (_super) {
    __extends(ElementTitle, _super);
    function ElementTitle(props) {
        return _super.call(this, props) || this;
    }
    ElementTitle.prototype.render = function () {
        return (React.createElement("h6", { className: "tag is-primary is-medium is-light col-8" },
            React.createElement("b", null, this.props.elementTitle)));
    };
    return ElementTitle;
}(React.Component));
exports["default"] = ElementTitle;
