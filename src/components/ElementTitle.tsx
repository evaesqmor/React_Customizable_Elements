/* eslint-disable use-isnan */
import * as React from 'react';

interface IElementTitleProps{
    elementTitle: string;
}
class ElementTitle extends React.Component<IElementTitleProps, {}>{

    public constructor(props:IElementTitleProps){
        super(props);
    }
    public render(){
        return (<h6 className="tag is-primary is-medium is-light col-8"><b>{this.props.elementTitle}</b></h6>);
    }
}

export default ElementTitle;