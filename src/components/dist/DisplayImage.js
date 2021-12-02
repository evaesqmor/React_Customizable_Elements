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
var DisplayImage = /** @class */ (function (_super) {
    __extends(DisplayImage, _super);
    function DisplayImage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { imageInitial: _this.props.imageSelected };
        return _this;
    }
    DisplayImage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("img", { className: "img-fluid col-10 imageFilter", src: this.props.imageSelected !== undefined ?
                    this.props.imageSelected : this.state.imageInitial, alt: "No se encuentra la imagen", style: { borderRadius: this.props.imageRadius } })));
    };
    return DisplayImage;
}(React.Component));
exports["default"] = DisplayImage;
