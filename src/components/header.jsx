import React from 'react';
import logo from '../assets/logo.png';

class Header extends React.Component {

    render() {
        return(
            <React.Fragment>
                <div className = "headerContainerEmpty">
                    <div className = "headerWr">
                        <header>
                            <img className = "logo " src = {logo} alt="logo"/>
                            <div className = "navegationHelp">
                                <a style = {{color: 'white'}} className = "hiperVi" href = "https://www.kiero.co/help.html className " class> Ayuda / PQR</a>
                            </div>
                        </header>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Header;