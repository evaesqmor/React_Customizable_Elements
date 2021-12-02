/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import * as React from 'react';
import RangeSelector from './RangeSelector';

/*interface IHeaderClasses<T>{
    main:T;
}*/

interface IHeaderProps{
    textContent:string;
    collapsed:boolean;
    onFilterClick:(collapsed:boolean) => any;
    //classes: IHeaderClasses<string>;
}

interface IHeaderState{
    buttonRadius:number;
}

class Header extends React.Component<IHeaderProps, IHeaderState>{

    constructor(props: IHeaderProps){
        super(props);
        this.state = {buttonRadius:0}
    }

    public onChangeRange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const targetRadius = parseInt(event.target.value);
        this.setState({buttonRadius:targetRadius});
    }

    public render(){
        const onClick = () => {
            this.props.onFilterClick(!!!this.props.collapsed)
        };
        console.log("CONTENT: ", this.props.textContent);
        return(
        <div>
            <button className="btn btn-primary" style={{borderRadius:this.state.buttonRadius}} onClick={onClick}>
                Ahora Collapsed</button>
            {!!!this.props.collapsed?
            <RangeSelector onChangeRange={this.onChangeRange}/>
            :null}
        </div>);
    }
}

export default Header;