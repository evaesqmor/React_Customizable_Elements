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
var BoxTitle = /** @class */ (function (_super) {
    __extends(BoxTitle, _super);
    function BoxTitle(props) {
        return _super.call(this, props) || this;
    }
    BoxTitle.prototype.render = function () {
        return (React.createElement("div", { className: "mb-4 mt-2 box bg-secondary container col-10 text-white" },
            React.createElement("h1", { className: "h1 card-title" }, this.props.title),
            React.createElement("p", { className: "card-text" }, this.props.boxContent)));
    };
    return BoxTitle;
}(React.Component));
exports["default"] = BoxTitle;
