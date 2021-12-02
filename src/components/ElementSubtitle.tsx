/* eslint-disable use-isnan */
import * as React from 'react';

interface IElementSubtitleProps{
    elementSubtitle: string;
}
class ElementSubtitle extends React.Component<IElementSubtitleProps, {}>{

    public constructor(props:IElementSubtitleProps){
        super(props);
    }
    public render(){
        return (<p><b>{this.props.elementSubtitle}</b></p>);
    }

}

export default ElementSubtitle;