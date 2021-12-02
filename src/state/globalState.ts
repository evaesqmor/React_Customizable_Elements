
// Definiendo los estados para las
// propiedades de los componentes
interface IGlobalState {
    /*Propiedades de las secciones*/
    collapsed:boolean;
    /*Propiedades de los colores*/
    color:string;
    complementary:any;
    /*Propiedades de una entrada de texto*/
    textContent: string;
    fontSize: number;
    activeFontFamily: any;
    bold:boolean;
    cursive:boolean;
    underlined:boolean;
    /*Propiedades de una imagen*/
    imageSelected:string;
    imageRadius:number;
    effectSelected:string;
    saturation:number;
    brightness:number;
    contrast:number;
    /*Propiedades de un botón*/
    backgroundColor:string;
}

// Exportamos el estado global
export default IGlobalState;

// Definimos un estado inicial para las
// propiedades de los componentes
export const initialState: IGlobalState = {
    /*Estado incial de las propiedades de la sección de texto*/
    textContent: "Escribe algo...",
    fontSize:28,
    color:"#880e4f",
    complementary:"#77f1b0",
    collapsed:true,
    activeFontFamily: "Rubik",
    bold:false,
    cursive:false,
    underlined:false,
    /*Estado incial de las propiedades de la sección de imagenes*/
    imageSelected:"https://www.duketravel.nl/wp-content/uploads/2020/01/Sevilla-3.jpg",
    imageRadius:0,
    effectSelected:"original",
    saturation:0,
    brightness:0,
    contrast:0,
    backgroundColor:""
}
