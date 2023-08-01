import React from "react";

import { Entrada, Actividad, BotonBar, CtrlPags } from ".././styles/styles.js";


const SearchBar = (props) => {
    const OnOff_div_CtrlPags = () => {
        const js_divCtrPag = document.getElementById('divCtrlPaginas')
        if (js_divCtrPag.style.visibility==='hidden') {
            js_divCtrPag.style.visibility = 'visible'
        } else {
            js_divCtrPag.style.visibility = 'hidden'
        }
    }
    return (
        <Actividad>
            <div style={{display:'grid',width:'100%'}}>
                <CtrlPags id='divCtrlPaginas' onClick={props.on_btn_click}></CtrlPags>
            </div>
            <Entrada 
                type='search' onChange={props.onChange} placeholder={`Por favor, tipee aquí alguna Raza que desee consultar`} value={props.suValor}
            ></Entrada>
            <BotonBar onClick={OnOff_div_CtrlPags}>P<br />{props.pagNum+1}</BotonBar>
        </Actividad>
    );
}


export default SearchBar;