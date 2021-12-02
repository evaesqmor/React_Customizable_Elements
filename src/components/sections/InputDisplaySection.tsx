/* eslint-disable eqeqeq */
/* eslint-disable use-isnan */
/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import * as React from 'react';
import { GetColorName } from 'hex-color-to-color-name';
import rgbHex from 'rgb-hex';
import {SwatchesPicker} from 'react-color';
// Importando componentes
import TextInput from '../TextInput';
import NumberInput from '../NumberInput';
import FontPicker from 'font-picker-react';
import Button from '../../containers/Button';
import DisplayText from '../../containers/DisplayText';
import BoxTitle from '../BoxTitle';
import ElementTitle from '../ElementTitle';
import ElementSubtitle from '../ElementSubtitle';

interface IInputDisplaySectionProps{
    // Propiedades del componente
    textContent:string;
    fontSize:number;
    color:string;
    collapsed: boolean;
    activeFontFamily: any;
    complementary:any;
    bold:boolean;
    cursive:boolean;
    underlined:boolean;

    // Funciones para realizar acciones sobre las propiedades del componente
    onChangeText:(textContent:string) => any;
    onChangeFontSize:(fontSize:number) => any;
    onChangeColor:(color:string, complementary:any) => any;
    onFilterClick:(collapsed:boolean) => any;
    onChangeFont:(activeFontFamily:any)=>any;
    onBoldClick:(bold:boolean)=>any;
    onCursiveClick:(cursive:boolean)=>any;
    onUnderlinedClick:(underlined:boolean)=>any;
}
interface IInputDisplaySectionState{
}
class InputDisplaySection extends React.Component<IInputDisplaySectionProps, IInputDisplaySectionState>{
    constructor(props: IInputDisplaySectionProps){
        super(props);
    }
    calculateComplementaryColor(color:any){
        let complementary = "#"+rgbHex(255-color.rgb.r, 255-color.rgb.g, 255-color.rgb.b);
        return complementary;
    }
    public render(){
        const onChangeText = (event:React.ChangeEvent<HTMLInputElement>) =>{
            this.props.onChangeText(event.target.value)
        };
        const onChangeFontSize = (event:React.ChangeEvent<HTMLInputElement>) =>{
            this.props.onChangeFontSize(parseInt(event.target.value));
        };
        const onChangeColor = (color:any) => {
            let complementary = this.calculateComplementaryColor(color);
            this.props.onChangeColor(color.hex, complementary);
        };
        const onClick = () => {
            this.props.onFilterClick(!!!this.props.collapsed)
        };
        const onChangeFont = (nextFont:any) =>{
            this.props.onChangeFont(nextFont.family);
        };
        const onBoldClick = () =>{
            this.props.onBoldClick(!!!this.props.bold);
        }
        const onCursiveClick = () =>{
            this.props.onCursiveClick(!!!this.props.cursive);
        }
        const onUnderlinedClick = () =>{
            this.props.onUnderlinedClick(!!!this.props.underlined);
        }
        return(
        <div className="card col-5 container mt-5 mb-5 column text-center">
            <BoxTitle title={"Sección de Texto"} boxContent={"En esta sección de la práctica es posible modificar las propiedades de un texto que podemos introducir, así como su tipo de fuente, tamaño, envoltura o color."}/>
            <div className="card-body">
                <div className="col-8 mb-3 d-inline-block">
                    <ElementTitle elementTitle={"Introduce un texto: "}/>
                    <TextInput onChangeText={onChangeText}/>
                </div>
                <div className="col-7 d-inline-block">
                    <div className="container card" style={{backgroundColor:this.props.complementary}}>
                        <DisplayText/>
                    </div>
                </div>
                <div className="box bg-warning bg-opacity-50 m-5">
                    <div className="form-group">
                        <div>
                            <ElementSubtitle elementSubtitle={"Color del texto:"+GetColorName(this.props.color)}/>
                            {this.props.collapsed?
                            <div>
                                <Button onClick={onClick} buttonText={"Abrir paleta"} type={""}/>
                            </div>:
                            <div className="d-inline-block col-sm-2 position-sticky dropdown-button">
                                <Button onClick={onClick} buttonText={"Color Seleccionado"} type={""}/>
                                <SwatchesPicker color={this.props.color} onChange={onChangeColor}/>
                            </div>}
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <div className="d-inline-block mr-4 col-5">
                            <ElementSubtitle elementSubtitle={"Tamaño de fuente: "+this.props.fontSize}/>
                            <NumberInput onChangeNumber={onChangeFontSize}/>
                        </div>
                        <div className="d-inline-block col-5">
                            <ElementSubtitle elementSubtitle={"Fuente del texto: "+this.props.activeFontFamily}/>
                            <FontPicker
                                apiKey="AIzaSyDPtqHOkdnMVZb6wrHcyz1Mwyn0Au-HCbI"
                                activeFontFamily={this.props.activeFontFamily}
                                onChange={onChangeFont}/>
                        </div>
                        <div className="mt-3">
                            <ElementSubtitle elementSubtitle={"Envoltura del texto: "}/>
                            <div className="btn-group col-8" role="group" aria-label="Basic example">
                                <Button onClick={onBoldClick} buttonText={"Negrita"} type={"bold"} />
                                <Button onClick={onCursiveClick} buttonText={"Cursiva"} type={"cursive"}/>
                                <Button onClick={onUnderlinedClick} buttonText={"Subrayado"} type={"underlined"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default InputDisplaySection;


