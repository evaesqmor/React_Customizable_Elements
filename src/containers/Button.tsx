import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import Button from '../components/Button';

// Funcion que recibe el estado global
// de la aplicación y devuelve un JSON
// con las propiedades del componente
const mapStateToProps = (state: IGlobalState) => ({
    backgroundColor:state.backgroundColor
})

const mapDispatchToProps = (dispatch: Dispatch)=>({                                                                                                                                                                                                                                                                 
})

// Conexión con el componente original:
// De esta manera, el componente recibe
// el store de forma automática
export default connect(mapStateToProps, mapDispatchToProps)(Button);