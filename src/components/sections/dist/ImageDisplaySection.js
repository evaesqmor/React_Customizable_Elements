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
/* eslint-disable @typescript-eslint/no-useless-constructor */
var React = require("react");
var DisplayImage_1 = require("../DisplayImage");
var Selector_1 = require("../Selector");
var TextInput_1 = require("../TextInput");
var RangeSelector_1 = require("../RangeSelector");
var BoxTitle_1 = require("../BoxTitle");
var ElementTitle_1 = require("../ElementTitle");
var ElementSubtitle_1 = require("../ElementSubtitle");
var ImageDisplaySection = /** @class */ (function (_super) {
    __extends(ImageDisplaySection, _super);
    function ImageDisplaySection(props) {
        return _super.call(this, props) || this;
    }
    ImageDisplaySection.prototype.render = function () {
        var _this = this;
        var onChangeImageSelected = function (event) {
            _this.props.onChangeImageSelected(event.target.value);
        };
        var onChangeEffectSelected = function (event) {
            _this.props.onChangeEffectSelected(event.target.value);
            console.log("EFFECT: ", _this.props.effectSelected);
            var css_json = "";
            if (event.target.value === "original") {
                css_json = ".imageFilter{filter: none;}";
            }
            if (event.target.value === "grayscale") {
                css_json = ".imageFilter{filter: grayscale(100%);}";
            }
            if (event.target.value === "hue") {
                css_json = ".imageFilter{filter: hue-rotate(180deg);}";
            }
            if (event.target.value === "color_inversion") {
                css_json = ".imageFilter{filter: invert(100%);}";
            }
            if (event.target.value === "sepia") {
                css_json = ".imageFilter{filter: sepia(100%);}";
            }
            document.head.appendChild(document.createElement("style")).textContent = css_json;
        };
        var onChangeSaturation = function (event) {
            _this.props.onChangeSaturation(parseInt(event.target.value));
            var css_json = ".imageFilter{filter:saturate(" + (event.target.value + "%") + ")}";
            document.head.appendChild(document.createElement("style")).textContent = css_json;
        };
        var onChangeBrightness = function (event) {
            _this.props.onChangeBrightness(parseInt(event.target.value));
            var css_json = ".imageFilter{filter:brightness(" + (event.target.value + "%") + ")}";
            document.head.appendChild(document.createElement("style")).textContent = css_json;
        };
        var onChangeContrast = function (event) {
            _this.props.onChangeContrast(parseInt(event.target.value));
            var css_json = ".imageFilter{filter:contrast(" + (event.target.value + "%") + ")}";
            document.head.appendChild(document.createElement("style")).textContent = css_json;
        };
        return (React.createElement("div", { className: "card col col-5 mt-5 mb-5 container column" },
            React.createElement(BoxTitle_1["default"], { title: "Sección de imagen", boxContent: "En esta sección de la práctica modificaremos propiedades de una imagen." }),
            React.createElement("div", { className: "col-8 mb-4 container" },
                React.createElement(ElementTitle_1["default"], { elementTitle: "Introduce la URL de una imagen:" }),
                React.createElement(TextInput_1["default"], { onChangeText: onChangeImageSelected })),
            React.createElement("div", { className: "col-11 mb-4 container" },
                React.createElement(ElementTitle_1["default"], { elementTitle: "Imagen obtenida: " }),
                React.createElement(DisplayImage_1["default"], { imageSelected: this.props.imageSelected, imageRadius: this.props.imageRadius })),
            React.createElement("div", { className: "card-body form-group box bg-warning bg-opacity-50 container col-9" },
                React.createElement("div", { className: "mb-3" },
                    React.createElement(ElementSubtitle_1["default"], { elementSubtitle: "Efectos en la imagen" }),
                    React.createElement(Selector_1["default"], { onChangeEffectSelected: onChangeEffectSelected })),
                React.createElement("div", { className: "" },
                    React.createElement("div", { className: "d-inline-block mr-2" },
                        React.createElement(ElementSubtitle_1["default"], { elementSubtitle: "Ajustando la saturación: " }),
                        React.createElement(RangeSelector_1["default"], { onChangeRange: onChangeSaturation })),
                    React.createElement("div", { className: "d-inline-block mr-2" },
                        React.createElement(ElementSubtitle_1["default"], { elementSubtitle: "Ajustando el brillo: " }),
                        React.createElement(RangeSelector_1["default"], { onChangeRange: onChangeBrightness })),
                    React.createElement("div", { className: "d-inline-block" },
                        React.createElement(ElementSubtitle_1["default"], { elementSubtitle: "Ajustando el contraste: " }),
                        React.createElement(RangeSelector_1["default"], { onChangeRange: onChangeContrast }))))));
    };
    return ImageDisplaySection;
}(React.Component));
exports["default"] = ImageDisplaySection;
