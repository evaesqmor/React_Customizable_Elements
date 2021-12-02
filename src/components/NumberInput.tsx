import * as React from 'react';

interface INumberInputProps{
    onChangeNumber:(event:React.ChangeEvent<HTMLInputElement>)=>void;

}

class NumberInput extends React.Component<INumberInputProps, {}>{

    public constructor(props:INumberInputProps){
        super(props);
    }

    public render(){
        return (<input type="number" className="form-control form-control-sm input is-primary m-2 position-static" onChange={this.props.onChangeNumber} min="22"/>);
    }

}

export default NumberInput;