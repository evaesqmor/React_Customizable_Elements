"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// Importando contenedores
var InputDisplaySection_1 = require("./containers/InputDisplaySection");
var ImageDisplaySection_1 = require("./containers/ImageDisplaySection");
// createStore de Redux
var redux_1 = require("redux");
// Importando el estado inicial
var globalState_1 = require("./state/globalState");
// Importando Provider: Poner a disposición
// las variables de estado
var react_redux_1 = require("react-redux");
// Importando Payload
var HeaderActions_1 = require("./actions/HeaderActions");
var TextActions_1 = require("./actions/TextActions");
var ImageActions_1 = require("./actions/ImageActions");
// Importando estilo
require("./assets/scss/main.scss");
// reducer es un método que recibe un estado, una acción, y calcula un nuevo estado.
var reducer = function (state, action) {
    if (state === void 0) { state = globalState_1.initialState; }
    switch (action.type) {
        case HeaderActions_1.HeaderActions.HEADER_COLLAPSED:
            var collapsedAction = action;
            return __assign(__assign({}, state), { collapsed: collapsedAction.payload });
        case TextActions_1.TextActions.TEXT_CHANGED:
            var textChangedAction = action;
            return __assign(__assign({}, state), { textContent: textChangedAction.payload });
        case TextActions_1.TextActions.FONTSIZE_CHANGED:
            var fontSizeChangedAction = action;
            return __assign(__assign({}, state), { fontSize: fontSizeChangedAction.payload_fontsize });
        case TextActions_1.TextActions.COLOR_CHANGED:
            var colorChangedAction = action;
            return __assign(__assign({}, state), { color: colorChangedAction.payload_color, complementary: colorChangedAction.payload_complementary });
        case TextActions_1.TextActions.COLLAPSED:
            var colorSelectorChangedAction = action;
            return __assign(__assign({}, state), { collapsed: colorSelectorChangedAction.payload_collapsed });
        case TextActions_1.TextActions.FONT_FAMILY_CHANGED:
            var fontChangedAction = action;
            return __assign(__assign({}, state), { activeFontFamily: fontChangedAction.payload_font_family });
        case TextActions_1.TextActions.BOLD_SELECTED:
            var boldSelected = action;
            return __assign(__assign({}, state), { bold: boldSelected.payload_bold });
        case TextActions_1.TextActions.CURSIVE_SELECTED:
            var cursiveSelected = action;
            return __assign(__assign({}, state), { cursive: cursiveSelected.payload_cursive });
        case TextActions_1.TextActions.UNDERLINED_SELECTED:
            var underlinedSelected = action;
            return __assign(__assign({}, state), { underlined: underlinedSelected.payload_underlined });
        case ImageActions_1.ImageActions.IMAGE_CHANGED:
            var imageChanged = action;
            return __assign(__assign({}, state), { imageSelected: imageChanged.payload_image_source });
        case ImageActions_1.ImageActions.IMAGE_RADIUS:
            var imageRadius = action;
            return __assign(__assign({}, state), { imageRadius: imageRadius.payload_image_radius });
        case ImageActions_1.ImageActions.EFFECT_CHANGED:
            var effectChanged = action;
            return __assign(__assign({}, state), { effectSelected: effectChanged.payload_effect });
        case ImageActions_1.ImageActions.SATURATION:
            var saturation = action;
            return __assign(__assign({}, state), { saturation: saturation.payload_saturation });
    }
    return state;
};
// Importando estado inicial de la aplicación: Almacenado en una variable 'store'. Gestionamos
// los cambios mediante un Reducer.
var store = redux_1.createStore(reducer, globalState_1.initialState);
function App() {
    return (React.createElement(react_redux_1.Provider, { store: store },
        React.createElement("div", { className: "App columns bg-warning bg-opacity-75" },
            React.createElement(InputDisplaySection_1["default"], null),
            React.createElement(ImageDisplaySection_1["default"], null))));
}
exports["default"] = App;
