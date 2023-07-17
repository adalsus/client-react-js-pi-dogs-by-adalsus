import React from "react";

import { Entrada, Actividad } from ".././styles/styles.js";


const SearchBar = (props) => {
    return (
        <Actividad>
            <Entrada 
                type='search' onChange={props.onChange} placeholder={`Por favor, escriba aquí el nombre de alguna raza que desee consultar`} value={props.suValor}
            ></Entrada>
        </Actividad>
    );
}


export default SearchBar;