/* eslint-disable use-isnan */
import * as React from 'react';

interface IDisplayTextProps{
    fontFamily:any;
    textContent:string;
    fontSize:number;
    color:string;
    bold:boolean;
    cursive:boolean;
    underlined:boolean;
}
class DisplayText extends React.Component<IDisplayTextProps, {}>{

    public constructor(props:IDisplayTextProps){
        super(props);
    }
    public render(){
        return (
        <div>
            <div>
                <p style={{fontSize:this.props.fontSize, color:this.props.color, fontFamily:this.props.fontFamily,
                fontWeight:this.props.bold?'bold':'inherit',fontStyle:this.props.cursive?'italic':'inherit',
                textDecoration:this.props.underlined?'underline':'inherit'}} placeholder="Escribe algo">
                    {this.props.textContent===""||this.props.textContent==="NaN"?"Escribe algo en la entrada de texto que está encima de este display.":this.props.textContent}
                </p>
            </div>
        </div>
        );
    }

}

export default DisplayText;