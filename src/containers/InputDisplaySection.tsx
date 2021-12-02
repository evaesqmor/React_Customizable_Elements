import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import { TextActions } from '../actions/TextActions';
import InputDisplaySection from '../components/sections/InputDisplaySection';

// Funcion que recibe el estado global de la aplicación y devuelve un JSON
// con las propiedades del componente
const mapStateToProps = (state: IGlobalState) => ({
    textContent:state.textContent,
    fontSize:state.fontSize,
    color:state.color,
    complementary:state.complementary,
    collapsed:state.collapsed,
    activeFontFamily: state.activeFontFamily,
    bold:state.bold,
    cursive:state.cursive,
    underlined:state.underlined
})

const mapDispatchToProps = (dispatch: Dispatch)=>({
    onChangeText:(textContent:string) => {
        dispatch({type: TextActions.TEXT_CHANGED,payload:textContent});
    },
    onChangeFontSize:(fontSize:number) => {
        dispatch({type: TextActions.FONTSIZE_CHANGED,payload_fontsize:fontSize});
    },
    onChangeColor:(color:string, complementary:any)=>{
        dispatch({type: TextActions.COLOR_CHANGED,payload_color:color,payload_complementary:complementary});
    },
    onFilterClick:(collapsed:boolean)=>{
        dispatch({type: TextActions.COLLAPSED, payload_collapsed:collapsed});
    },
    onChangeFont:(activeFontFamily:any)=>{
        dispatch({type: TextActions.FONT_FAMILY_CHANGED, payload_font_family:activeFontFamily});
    },
    onBoldClick:(bold:boolean)=>{
        dispatch({type: TextActions.BOLD_SELECTED, payload_bold:bold});
    },
    onCursiveClick:(cursive:boolean)=>{
        dispatch({type: TextActions.CURSIVE_SELECTED, payload_cursive:cursive});
    },
    onUnderlinedClick:(underlined:boolean)=>{
        dispatch({type: TextActions.UNDERLINED_SELECTED, payload_underlined:underlined});
    }
})

// Conexión con el componente original: De esta manera, el componente recibe
// el store de forma automática
export default connect(mapStateToProps, mapDispatchToProps)(InputDisplaySection);