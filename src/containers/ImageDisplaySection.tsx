import {connect} from 'react-redux';
import { Dispatch } from "redux";
import { ImageActions } from '../actions/ImageActions';
import ImageDisplaySection from "../components/sections/ImageDisplaySection";
import IGlobalState from "../state/globalState";

const mapStateToProps = (state: IGlobalState) => ({
    imageSelected:state.imageSelected,
    imageRadius:state.imageRadius,
    effectSelected:state.effectSelected,
    saturation:state.saturation,
    brightness:state.brightness,
    contrast:state.contrast
});

const mapDispatchToProps = (dispatch: Dispatch)=>({
    onChangeImageSelected:(imageSelected:string) => {
        dispatch({type: ImageActions.IMAGE_CHANGED,payload_image_source:imageSelected});
    },
    onChangeImageRadius:(imageRadius:number) => {
        dispatch({type: ImageActions.IMAGE_CHANGED,payload_image_radius:imageRadius});
    },
    onChangeEffectSelected:(effectSelected:string) => {
        dispatch({type: ImageActions.EFFECT_CHANGED,payload_effect:effectSelected});
    },
    onChangeSaturation:(saturation:number) => {
        dispatch({type: ImageActions.SATURATION,payload_saturation:saturation});
    },
    onChangeBrightness:(brightness:number)=>{
        dispatch({type: ImageActions.BRIGHTNESS,payload_brightness:brightness});
    },
    onChangeContrast:(contrast:number)=>{
        dispatch({type: ImageActions.CONTRAST,payload_contrast:contrast});
    }
});

// Conexión con el componente original: De esta manera, el componente recibe
// el store de forma automática
export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplaySection);