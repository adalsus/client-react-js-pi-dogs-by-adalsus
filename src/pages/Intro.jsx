import adalsus from '../assets/ADALsus.svg';
import './Intro.css';
import { save_images_server } from '../js/fns/fnsApp.js'


function Intro() {
    {
        save_images_server();
        return (
            <div className="Intro">
                <header className="Intro-header">
                    <img src={adalsus} className="Intro-logo" alt="Adalberto Monar" />
                    <pre className="rAm">       ADALSUS presents its APP of ...       </pre>
                </header>
            </div>
        );
    }
}

//adalsus


export default Intro;