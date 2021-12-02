/* eslint-disable @typescript-eslint/no-useless-constructor */
import * as React from 'react';
import DisplayImage from '../DisplayImage';
import Selector from '../Selector';
import TextInput from '../TextInput';
import RangeSelector from '../RangeSelector';
import BoxTitle from '../BoxTitle';
import ElementTitle from '../ElementTitle';
import ElementSubtitle from '../ElementSubtitle';

interface IImageDisplaySectionProps{
    // Propiedades del componente
    imageSelected:string;
    imageRadius:number;
    effectSelected:string;
    saturation:number;
    brightness:number;
    contrast:number;

    // Funciones para realizar acciones sobre las propiedades del componente
    onChangeImageSelected:(imageSelected:string) => any;
    onChangeImageRadius:(imageRadius:number) =>any;
    onChangeEffectSelected:(effectSelected:string) => any;
    onChangeSaturation:(saturation:number) => any;
    onChangeBrightness:(brightness:number) => any;
    onChangeContrast:(contrast:number) => any;
}
interface IImageDisplaySectionState{
}
class ImageDisplaySection extends React.Component<IImageDisplaySectionProps, IImageDisplaySectionState>{
    constructor(props: IImageDisplaySectionProps){
        super(props);
    }
    public render(){
        const onChangeImageSelected = (event:React.ChangeEvent<HTMLInputElement>) =>{
            this.props.onChangeImageSelected(event.target.value);
        };
        const onChangeEffectSelected = (event:React.ChangeEvent<HTMLSelectElement>) =>{
            this.props.onChangeEffectSelected(event.target.value);
            console.log("EFFECT: ",this.props.effectSelected);
            var css_json = ``;
            if(event.target.value==="original"){
                css_json =  `.imageFilter{filter: none;}`;
            }
            if(event.target.value==="grayscale"){
                css_json =  `.imageFilter{filter: grayscale(100%);}`;
            }
            if(event.target.value==="hue"){
                css_json =  `.imageFilter{filter: hue-rotate(180deg);}`;
            }
            if(event.target.value==="color_inversion"){
                css_json =  `.imageFilter{filter: invert(100%);}`;
            }
            if(event.target.value==="sepia"){
                css_json =  `.imageFilter{filter: sepia(100%);}`;
            }
            document.head.appendChild(document.createElement("style")).textContent = css_json;
        }
        const onChangeSaturation = (event:React.ChangeEvent<HTMLInputElement>) =>{
            this.props.onChangeSaturation(parseInt(event.target.value));
            var css_json = `.imageFilter{filter:saturate(${event.target.value+"%"})}`;
            document.head.appendChild(document.createElement("style")).textContent = css_json;
        };
        const onChangeBrightness = (event:React.ChangeEvent<HTMLInputElement>) =>{
            this.props.onChangeBrightness(parseInt(event.target.value));
            var css_json = `.imageFilter{filter:brightness(${event.target.value+"%"})}`;
            document.head.appendChild(document.createElement("style")).textContent = css_json;
        };
        const onChangeContrast = (event:React.ChangeEvent<HTMLInputElement>) =>{
            this.props.onChangeContrast(parseInt(event.target.value));
            var css_json = `.imageFilter{filter:contrast(${event.target.value+"%"})}`;
            document.head.appendChild(document.createElement("style")).textContent = css_json;
        };
        return(<div className="card col col-5 mt-5 mb-5 container column">
            <BoxTitle title={"Sección de imagen"} boxContent={"En esta sección de la práctica modificaremos propiedades de una imagen."}/>
            <div className="col-8 mb-4 container">
                <ElementTitle elementTitle={"Introduce la URL de una imagen:"} />
                <TextInput onChangeText={onChangeImageSelected}/>
            </div>
            <div className="col-11 mb-4 container">
                <ElementTitle elementTitle={"Imagen obtenida: "}/>
                <DisplayImage imageSelected={this.props.imageSelected} imageRadius={this.props.imageRadius}/>
            </div>
            <div className="card-body form-group box bg-warning bg-opacity-50 container col-9">
                <div className="mb-3">
                    <ElementSubtitle elementSubtitle={"Efectos en la imagen"}/>
                    <Selector onChangeEffectSelected={onChangeEffectSelected}/>
                </div>
                <div className="">
                    <div className="d-inline-block mr-2">
                        <ElementSubtitle elementSubtitle={"Ajustando la saturación: "}/>
                        <RangeSelector onChangeRange={onChangeSaturation}/>
                    </div>
                    <div className="d-inline-block mr-2">
                        <ElementSubtitle elementSubtitle={"Ajustando el brillo: "}/>
                        <RangeSelector onChangeRange={onChangeBrightness}/>
                    </div>
                    <div className="d-inline-block">
                        <ElementSubtitle elementSubtitle={"Ajustando el contraste: "}/>
                        <RangeSelector onChangeRange={onChangeContrast}/>
                    </div>
                </div>
            </div>
        </div>);
    }
}
export default ImageDisplaySection;