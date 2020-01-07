import React from 'react';
import logo from '../img/logo.png';

class Header extends React.Component {

    render() {
        return(
            <React.Fragment>
                <div className = "headerContainerEmpty">
                    <div className = "headerWr">
                        <header>
                            <img className = "logo " src = {logo} alt="logo"/>
                            <div className = "navegationHelp">
                                <a style = {{color: 'black'}} className = "hiperVi" href = "https://www.kiero.co/help.html"> Ayuda / PQR</a>
                            </div>
                        </header>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Header;