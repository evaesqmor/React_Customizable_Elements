import * as React from 'react';

interface IBoxTitleProps{
    title:string;
    boxContent:string;
}

class BoxTitle extends React.Component<IBoxTitleProps, {}>{

    public constructor(props:IBoxTitleProps){
        super(props);
    }

    public render(){
        return (<div className="mb-4 mt-2 box bg-secondary container col-10 text-white">
        <h1 className="h1 card-title">{this.props.title}</h1>
        <p className="card-text">{this.props.boxContent}</p>
    </div>);
    }

}

export default BoxTitle;