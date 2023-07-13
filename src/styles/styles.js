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
  background-color: aqua;
  margin-top: 2px;
  vertical-align: center;
  position: relative;
`;
const Entrada = styled.input`
  height: 44px;
  width: 100%;
  font-size: 3vw;
  position: fixed;
  bottom: 0%;
  left: 0%;
`;




export { 
  Actividad, Entrada, 
}
