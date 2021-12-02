// Importando contenedores
import InputDisplaySection from './containers/InputDisplaySection';
import ImageDisplaySection from './containers/ImageDisplaySection';
// createStore de Redux
import { Action, createStore } from 'redux';
// Importando el estado inicial
import IGlobalState, { initialState } from './state/globalState';
// Importando Provider: Poner a disposición
// las variables de estado
import { Provider } from 'react-redux';
// Importando Payload
import { HeaderActions, IHeaderActions } from './actions/HeaderActions';
import { ITextActions, TextActions } from './actions/TextActions';
import { IImageActions, ImageActions } from './actions/ImageActions';
// Importando estilo
import './assets/scss/main.scss';

// reducer es un método que recibe un estado, una acción, y calcula un nuevo estado.
const reducer = (state: IGlobalState = initialState, action: Action)=>{
  switch(action.type){
    case HeaderActions.HEADER_COLLAPSED:
      const collapsedAction = action as IHeaderActions;
      return {...state, collapsed:collapsedAction.payload}
    case TextActions.TEXT_CHANGED:
      const textChangedAction = action as ITextActions;
      return {...state, textContent:textChangedAction.payload}
    case TextActions.FONTSIZE_CHANGED:
      const fontSizeChangedAction = action as ITextActions;
      return {...state, fontSize:fontSizeChangedAction.payload_fontsize}
    case TextActions.COLOR_CHANGED:
      const colorChangedAction = action as ITextActions;
      return {...state, color:colorChangedAction.payload_color,complementary:colorChangedAction.payload_complementary}
    case TextActions.COLLAPSED:
      const colorSelectorChangedAction = action as ITextActions;
      return {...state, collapsed:colorSelectorChangedAction.payload_collapsed}
    case TextActions.FONT_FAMILY_CHANGED:
      const fontChangedAction = action as ITextActions;
      return {...state, activeFontFamily:fontChangedAction.payload_font_family}
    case TextActions.BOLD_SELECTED:
      const boldSelected = action as ITextActions;
      return {...state, bold:boldSelected.payload_bold}
    case TextActions.CURSIVE_SELECTED:
      const cursiveSelected = action as ITextActions;
      return {...state, cursive:cursiveSelected.payload_cursive}
    case TextActions.UNDERLINED_SELECTED:
      const underlinedSelected = action as ITextActions;
      return {...state, underlined:underlinedSelected.payload_underlined}
    case ImageActions.IMAGE_CHANGED:
      const imageChanged = action as IImageActions;
      return {...state, imageSelected:imageChanged.payload_image_source}
    case ImageActions.IMAGE_RADIUS:
      const imageRadius = action as IImageActions;
      return {...state, imageRadius:imageRadius.payload_image_radius}
    case ImageActions.EFFECT_CHANGED:
        const effectChanged = action as IImageActions;
        return {...state, effectSelected:effectChanged.payload_effect}
    case ImageActions.SATURATION:
        const saturation = action as IImageActions;
        return {...state, saturation:saturation.payload_saturation}
  }
  return state;
}
// Importando estado inicial de la aplicación: Almacenado en una variable 'store'. Gestionamos
// los cambios mediante un Reducer.
const store = createStore(reducer,initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App columns bg-warning bg-opacity-75">
      <InputDisplaySection/>
      <ImageDisplaySection/>
      </div>
    </Provider>
  );
}
export default App;