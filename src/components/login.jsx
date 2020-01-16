import React from 'react';
import "./registration.css";
import { Link, Redirect } from "react-router-dom";
//const axios = require('axios');

class Login extends React.Component{
   
  constructor(props) {
    super(props)
    
    this.state = {
      email: "",
      password: ""
    }
    this.handleInput = this.handleInput.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.state[e.target.name] = e.target.value;
  }

    render(){
        return(
            <React.Fragment>
                <div className="main-login">
                  <h1 className ="h3 mb-3 font-weight-normal">Sign in</h1>
                    <div className="ui_not-register">
                        ¿Eres nuevo en este sitio?
                        <Link to = "/register" className='txt-password'>  Regístrate</Link>
                    </div>
              <div className="btn_login-user">
                <div className="auth_social">
                    {/* Login with google */}
                </div> 
              <div className="auth_social">
                    {/* Login with facebook  */}
                </div>
            <div className="auth_social"><h2><span>o</span></h2></div>
                <br/>
                <form onSubmit = {this.handleSubmit}>
                      <div className='form-group'>
                      <label htmlFor = "email">Email</label>
                      <input type = "email"
                             className = "form-control"
                             name = "email" 
                             placeholder = "enter email"
                             onChange = {this.handleInput}
                             required>
                       </input>
                  </div>
                  <div className='form-group'>
                    <label htmlFor = "password">Password</label>
                    <input type = "password"
                           className = "form-control" 
                           name = "password" 
                           placeholder = "enter password"
                           onChange = {this.handleInput}
                           required>
                    </input>
                  </div>
                  <div className="inp-forgetpassw">
                    <Link to = "/forgetPassword" className="txt-password">¿Olvidaste tu contraseña?</Link>
                  </div>

                  <div className="container_fpu-login">
                    <button  type = "submit" className="btn btn-login">
                      Ingresar
                    </button>
                  </div>
                </form>
           
            </div>
          </div> 
            </React.Fragment>
        );
    }
}
export default Login;