import * as React from 'react';

interface ITextInputProps{
    onChangeText:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}

class TextInput extends React.Component<ITextInputProps, {}>{

    public constructor(props:ITextInputProps){
        super(props);
    }

    public render(){
        return (<input type="text" className="input is-primary is-small position-static" placeholder="" onChange={this.props.onChangeText}/>);
    }

}

export default TextInput;