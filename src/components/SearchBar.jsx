import React from "react";

import { Entrada, Actividad } from ".././styles/styles.js";


const SearchBar = () => {
    return (
        <Actividad>
            <Entrada 
                type='search' placeholder={`Por favor, escriba aquí el nombre de alguna raza que desee consultar`}
            ></Entrada>
        </Actividad>
    );
}


export default SearchBar;