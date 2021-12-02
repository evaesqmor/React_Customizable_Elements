import * as React from 'react';

interface ISelectorProps{
    onChangeEffectSelected:(event:React.ChangeEvent<HTMLSelectElement>)=>void;
}

class Selector extends React.Component<ISelectorProps, {}>{

    public constructor(props:ISelectorProps){
        super(props);
    }

    public render(){
        return (
        <div className="input-group is-primary">
            <select className="form-select input is-primary" onChange={this.props.onChangeEffectSelected}>
                <option value="original">Imagen original</option>
                <option value="grayscale">Escala de grises</option>
                <option value="sepia">Sepia</option>
                <option value="hue">Hue</option>
                <option value="color_inversion">Invertir colores</option>
            </select>
        </div>
        );
    }

}

export default Selector;