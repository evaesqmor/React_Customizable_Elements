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
/* eslint-disable eqeqeq */
/* eslint-disable use-isnan */
/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-useless-constructor */
var React = require("react");
var hex_color_to_color_name_1 = require("hex-color-to-color-name");
var rgb_hex_1 = require("rgb-hex");
var react_color_1 = require("react-color");
// Importando componentes
var TextInput_1 = require("../TextInput");
var NumberInput_1 = require("../NumberInput");
var font_picker_react_1 = require("font-picker-react");
var Button_1 = require("../../containers/Button");
var DisplayText_1 = require("../../containers/DisplayText");
var BoxTitle_1 = require("../BoxTitle");
var ElementTitle_1 = require("../ElementTitle");
var ElementSubtitle_1 = require("../ElementSubtitle");
var InputDisplaySection = /** @class */ (function (_super) {
    __extends(InputDisplaySection, _super);
    function InputDisplaySection(props) {
        return _super.call(this, props) || this;
    }
    InputDisplaySection.prototype.calculateComplementaryColor = function (color) {
        var complementary = "#" + rgb_hex_1["default"](255 - color.rgb.r, 255 - color.rgb.g, 255 - color.rgb.b);
        return complementary;
    };
    InputDisplaySection.prototype.render = function () {
        var _this = this;
        var onChangeText = function (event) {
            _this.props.onChangeText(event.target.value);
        };
        var onChangeFontSize = function (event) {
            _this.props.onChangeFontSize(parseInt(event.target.value));
        };
        var onChangeColor = function (color) {
            var complementary = _this.calculateComplementaryColor(color);
            _this.props.onChangeColor(color.hex, complementary);
        };
        var onClick = function () {
            _this.props.onFilterClick(!!!_this.props.collapsed);
        };
        var onChangeFont = function (nextFont) {
            _this.props.onChangeFont(nextFont.family);
        };
        var onBoldClick = function () {
            _this.props.onBoldClick(!!!_this.props.bold);
        };
        var onCursiveClick = function () {
            _this.props.onCursiveClick(!!!_this.props.cursive);
        };
        var onUnderlinedClick = function () {
            _this.props.onUnderlinedClick(!!!_this.props.underlined);
        };
        return (React.createElement("div", { className: "card col-5 container mt-5 mb-5 column text-center" },
            React.createElement(BoxTitle_1["default"], { title: "Sección de Texto", boxContent: "En esta sección de la práctica es posible modificar las propiedades de un texto que podemos introducir, así como su tipo de fuente, tamaño, envoltura o color." }),
            React.createElement("div", { className: "card-body" },
                React.createElement("div", { className: "col-8 mb-3 d-inline-block" },
                    React.createElement(ElementTitle_1["default"], { elementTitle: "Introduce un texto: " }),
                    React.createElement(TextInput_1["default"], { onChangeText: onChangeText })),
                React.createElement("div", { className: "col-7 d-inline-block" },
                    React.createElement("div", { className: "container card", style: { backgroundColor: this.props.complementary } },
                        React.createElement(DisplayText_1["default"], null))),
                React.createElement("div", { className: "box bg-warning bg-opacity-50 m-5" },
                    React.createElement("div", { className: "form-group" },
                        React.createElement("div", null,
                            React.createElement(ElementSubtitle_1["default"], { elementSubtitle: "Color del texto:" + hex_color_to_color_name_1.GetColorName(this.props.color) }),
                            this.props.collapsed ?
                                React.createElement("div", null,
                                    React.createElement(Button_1["default"], { onClick: onClick, buttonText: "Abrir paleta", type: "" })) :
                                React.createElement("div", { className: "d-inline-block col-sm-2 position-sticky dropdown-button" },
                                    React.createElement(Button_1["default"], { onClick: onClick, buttonText: "Color Seleccionado", type: "" }),
                                    React.createElement(react_color_1.SwatchesPicker, { color: this.props.color, onChange: onChangeColor })))),
                    React.createElement("div", { className: "form-group mt-3" },
                        React.createElement("div", { className: "d-inline-block mr-4 col-5" },
                            React.createElement(ElementSubtitle_1["default"], { elementSubtitle: "Tamaño de fuente: " + this.props.fontSize }),
                            React.createElement(NumberInput_1["default"], { onChangeNumber: onChangeFontSize })),
                        React.createElement("div", { className: "d-inline-block col-5" },
                            React.createElement(ElementSubtitle_1["default"], { elementSubtitle: "Fuente del texto: " + this.props.activeFontFamily }),
                            React.createElement(font_picker_react_1["default"], { apiKey: "AIzaSyDPtqHOkdnMVZb6wrHcyz1Mwyn0Au-HCbI", activeFontFamily: this.props.activeFontFamily, onChange: onChangeFont })),
                        React.createElement("div", { className: "mt-3" },
                            React.createElement(ElementSubtitle_1["default"], { elementSubtitle: "Envoltura del texto: " }),
                            React.createElement("div", { className: "btn-group col-8", role: "group", "aria-label": "Basic example" },
                                React.createElement(Button_1["default"], { onClick: onBoldClick, buttonText: "Negrita", type: "bold" }),
                                React.createElement(Button_1["default"], { onClick: onCursiveClick, buttonText: "Cursiva", type: "cursive" }),
                                React.createElement(Button_1["default"], { onClick: onUnderlinedClick, buttonText: "Subrayado", type: "underlined" }))))))));
    };
    return InputDisplaySection;
}(React.Component));
exports["default"] = InputDisplaySection;
