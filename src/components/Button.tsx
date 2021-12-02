import * as React from 'react';

interface IButtonProps{
    buttonText:string;
    type:string;
    backgroundColor:string;
    onClick:()=>void;

}

class Button extends React.Component<IButtonProps, {}>{

    public constructor(props:IButtonProps){
        super(props);
    }

    public render(){
        return (<button className="button btn is-primary" onClick={this.props.onClick} style={{fontWeight:this.props.type==="bold"?'bold':'inherit',
        fontStyle:this.props.type==="cursive"?'italic':'inherit',
        textDecoration:this.props.type==="underlined"?'underline':'inherit'}}>
            {this.props.buttonText}
        </button>);
    }

}

export default Button;