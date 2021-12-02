import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';
import Header from '../components/Header';
import { Dispatch } from 'redux';
import { HeaderActions} from '../actions/HeaderActions';

// Funcion que recibe el estado global
// de la aplicación y devuelve un JSON
// con las propiedades del componente
const mapStateToProps = (state: IGlobalState) => ({
    collapsed:state.collapsed,
    textContent:state.textContent,
})

const mapDispatchToProps = (dispatch: Dispatch)=>({
    onFilterClick:(collapsed:boolean) => {
        dispatch({type: HeaderActions.HEADER_COLLAPSED,payload:collapsed});
    }
})

// Conexión con el componente original:
// De esta manera, el componente recibe
// el store de forma automática
export default connect(mapStateToProps, mapDispatchToProps)(Header);