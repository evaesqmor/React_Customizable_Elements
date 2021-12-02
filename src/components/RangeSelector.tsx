import * as React from 'react';

interface IRangeSelectorProps{
    onChangeRange:(event:React.ChangeEvent<HTMLInputElement>)=>void;

}

class RangeSelector extends React.Component<IRangeSelectorProps, {}>{

    public constructor(props:IRangeSelectorProps){
        super(props);
    }

    public render(){
        return (<input type="range" className="form-range form-control-sm" onChange={this.props.onChangeRange} min="0" max="100"/>);
    }

}

export default RangeSelector;