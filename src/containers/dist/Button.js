"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Button_1 = require("../components/Button");
// Funcion que recibe el estado global
// de la aplicación y devuelve un JSON
// con las propiedades del componente
var mapStateToProps = function (state) { return ({
    backgroundColor: state.backgroundColor
}); };
var mapDispatchToProps = function (dispatch) { return ({}); };
// Conexión con el componente original:
// De esta manera, el componente recibe
// el store de forma automática
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Button_1["default"]);
