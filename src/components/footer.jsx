import React from 'react';
import app from "../assets/app.png";
class Footer extends React.Component{

    render(){

        return(
            <div className="nav-footer">
          <div className="nav-footer-info">
            <div className="wrapper-info">
              <nav className="nav-info">
                <h1>© 2019 Kiero. Todos los derechos reservados.</h1>
                <button>Acerca de nosotros</button>
                <a href="https://www.kiero.co/terms.html">
                  Términos y condiciones
                </a>
                <a href="https://www.kiero.co/privacidad.html">
                  Política de privacidad
                </a>
              <button o>Contáctenos</button>
                <a href="https://www.kiero.co/help.html">Ayuda / PQR</a>
              </nav>
            </div>
            <div className="wrapper-app">
              <a className="hiperVi" href="https://www.kiero.co/app.html">
                <img src={app} alt='app kiero'/>
              </a>
            </div>
          </div>
        </div>
        );
    }
}
export default Footer;