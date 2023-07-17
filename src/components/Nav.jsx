import { Link } from "react-router-dom"
import { Menu, Enlaces } from "../styles/styles.js";
import { Eop } from "../styles/styles.js";

const Nav = (props) => {
   return (
      <Menu>
         <Enlaces>
            <div></div>
            <Link to='/'><Eop onClick={props.onClick}>HOME</Eop></Link>
            <Link to='/form-breed'><Eop onClick={props.onClick}>FORM BREED</Eop></Link>
            <div></div>
         </Enlaces>
      </Menu>
   ); 
}

export default Nav;