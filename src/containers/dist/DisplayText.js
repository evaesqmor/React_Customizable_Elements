"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var DisplayText_1 = require("../components/DisplayText");
// Funcion que recibe el estado global
// de la aplicación y devuelve un JSON
// con las propiedades del componente
var mapStateToProps = function (state) { return ({
    textContent: state.textContent,
    fontSize: state.fontSize,
    color: state.color,
    bold: state.bold,
    cursive: state.cursive,
    underlined: state.underlined,
    fontFamily: state.activeFontFamily
}); };
var mapDispatchToProps = function (dispatch) { return ({}); };
// Conexión con el componente original:
// De esta manera, el componente recibe
// el store de forma automática
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DisplayText_1["default"]);
