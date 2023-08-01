import styled from 'styled-components';

/*
//a minimalist set of CSS resets

//default to border-box
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

//adjust typography defaults
body {
  margin: 1rem;
  font-family: sans-serif;
  line-height: 1.5;
}

//images and videos max out at full width
img,
video {
  height: auto;
  max-width: 100%;
}
*/

const Actividad = styled.div`
  //display: contents;
  background-color: transparent;
  margin-top: 2px;
  vertical-align: center;
  position: relative;
`;
const Entrada = styled.input`
  height: 44px;
  width: 95%;
  font-size: 3.5vw;
  position: fixed;
  bottom: 0%;
  left: 0%;
`;
const BotonBar = styled.button`
  height: 44px;
  font-size: small;
  width: 5%;
  position: fixed;
  bottom: 0%;
  right: 0%;
  padding: 0%;
  border-radius: 0%;
`;
const CtrlPags = styled.div`
  position: fixed;
  bottom: 44px;
  justify-self: center;
`;

const Menu = styled.div`
  width: 100%;
`;
const Enlaces = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Eop = styled.div`
  color: gold;
  font-weight: bold;
  font-size: x-large;
`;

const Div_Dogs = styled.div`
  display: grid;
  grid-template-columns: 49.75% 49.75%;
  grid-gap: 2.5px;
`;
const Card_Dog = styled.div`
`;

export { 
  Actividad, Entrada, BotonBar, CtrlPags, 
  Menu, Enlaces,
  Eop, 
  Div_Dogs, Card_Dog
}
