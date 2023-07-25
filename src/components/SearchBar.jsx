import React from "react";

import { Entrada, Actividad, BotonBar } from ".././styles/styles.js";


const SearchBar = (props) => {
    return (
        <Actividad>
            <Entrada 
                type='search' onChange={props.onChange} placeholder={`Por favor, tipee aquí alguna Raza que desee consultar`} value={props.suValor}
            ></Entrada>
            <BotonBar>P<br />{props.pagNum+1}</BotonBar>
        </Actividad>
    );
}


export default SearchBar;