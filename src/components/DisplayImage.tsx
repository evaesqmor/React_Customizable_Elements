import * as React from 'react';

interface IDisplayImageProps{
    imageSelected:string;
    imageRadius:number;
}

interface IDisplayImageState{
    imageInitial:string;
}

class DisplayImage extends React.Component<IDisplayImageProps, IDisplayImageState>{

    public constructor(props:IDisplayImageProps){
        super(props);
        this.state={imageInitial:this.props.imageSelected}
    }
    public render(){
        return (
        <div >
            <img className="img-fluid col-10 imageFilter"
            src={this.props.imageSelected!==undefined?
                this.props.imageSelected:this.state.imageInitial}
            alt="No se encuentra la imagen" style={{borderRadius:this.props.imageRadius}} />
        </div>
        );
    }
}

export default DisplayImage;