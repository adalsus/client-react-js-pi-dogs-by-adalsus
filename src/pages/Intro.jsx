import adalsus from '../assets/ADALsus.svg';
import './Intro.css';

function Intro() {
    return (
        <div className="Intro">
            <header className="Intro-header">
                <img src={adalsus} className="Intro-logo" alt="Adalberto Monar" />
                <pre className="rAm">       ADALSUS presents its APP of ...       </pre>
            </header>
        </div>
    );
}

//adalsus


export default Intro;