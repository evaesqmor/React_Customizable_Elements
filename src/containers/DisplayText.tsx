import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import DisplayText from '../components/DisplayText';

// Funcion que recibe el estado global
// de la aplicación y devuelve un JSON
// con las propiedades del componente
const mapStateToProps = (state: IGlobalState) => ({
    textContent:state.textContent,
    fontSize:state.fontSize,
    color:state.color,
    bold:state.bold,
    cursive:state.cursive,
    underlined:state.underlined,
    fontFamily: state.activeFontFamily
})

const mapDispatchToProps = (dispatch: Dispatch)=>({
                                                                                                                                                                                                                                                                                                        
})

// Conexión con el componente original:
// De esta manera, el componente recibe
// el store de forma automática
export default connect(mapStateToProps, mapDispatchToProps)(DisplayText);