import React from 'react';
import "./registration.css";
const axios = require('axios');

class Login extends React.Component{
   
  constructor(props){
    super(props)
  }

    render(){
        return(
            <React.Fragment>
                <div className="main-login">
                    <h1>Iniciar sesión</h1>
                    <div className="ui_not-register">
                        ¿Eres nuevo en este sitio?
                <a className='txt-password' href="https://kiero.co/registration">  Regístrate</a>
            </div>
            <div className="btn_login-user">
              <div className="auth_social">
            
            </div> 
            <div className="auth_social">
            </div>
            <div className="auth_social"><h2><span>o</span></h2></div>
            <div className="auth_social">
             
            </div>
            
            <div className='lg-name'>
              <label className="label-login">Email</label>
            </div>
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <input
                  id="name"
                  type="text"
                  className="inp-Email"
                  placeholder="Correo electrónico"
                  aria-label="Correo electrónico"
                  aria-describedby="addon-wrapping"
                  autoComplete="off"
                  name="email"
                  onChange={this.handleEmailChange}
                ></input>
              </div>

            </div>
            <div className='lg-name'>
              {" "}
              <label className="label-login">Contraseña</label>
            </div>
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <input
                  id="passw"
                  type="password"
                  className="inp-Email"
                  placeholder="Contraseña"
                  aria-label="Contraseña"
                  aria-describedby="addon-wrapping"
                  autoComplete="off"
                  name="password"
                  onChange={this.handlePasswordChange}
                ></input>
              </div>
            </div>
            <div className="inp-forgetpassw">
              <a href="https://kiero.co/renovatePassword" className="txt-password">¿Olvidaste tu contraseña?</a>
            </div>

            <div className="container_fpu-login">
              <button onClick={this.handleSubmitUs} className="btn btn-login">
                Ingresar
              </button>
            </div>
            </div>
          </div> 
            </React.Fragment>
        );
    }
}
export default Login;