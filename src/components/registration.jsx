import React from 'react';
import { Link } from 'react-router-dom';
import userAuthService from "../services/userAuthService";

class Registration extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      first_name : "",
      last_name : "",
      email : "",
      password : "",
      confirmPass : ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    let response = await userAuthService.register(this.state);

    if(!response.error) {

      console.log(response.id);
      await userAuthService.setId(response.id)
      await userAuthService.setHardAuth()

        return await prompt('aqui estoy');
        
    }
    
  }

    render(){
        return(
            <React.Fragment>
                 
                    <div className="main-login">
                    <h1 className = "h3 mb-3 font-weight-normal">Sign up</h1>
                          <div className="auth_social"></div>
                      <div className="auth_social">
                      </div>
                    <form onSubmit = {this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="first_name">Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          placeholder = "Ingresa tu Nombre"
                          size="50px"
                          onChange = {this.handleChange}
                          value = {this.state.first_name}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="last_name">Apellido</label>
                        <input
                          type="text"
                          className = "form-control"
                          name="last_name"
                          placeholder = "Ingresa tu apellido"
                          onChange = {this.handleChange}
                          value = {this.state.last_name}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Correo</label>
                        <input
                          type="email"
                          className = "form-control"
                          name="email"
                          placeholder = "Ingresa tu correo"
                          onChange = {this.handleChange}
                          value = {this.state.email}
                          required
                        />
                      
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                          type="password"
                          className = "form-control"
                          name="password"
                          placeholder = "Ingresa tu contrasena"
                          onChange = {this.handleChange}
                          value = {this.state.password}
                          required
                        />
                      </div>

                      <div className = "form-group">
                        <label htmlFor = "confirmPass">Confirmar Contraseña</label>
                        <input 
                         type = "password"
                         name = "confirmPass"
                         className = "form-control" 
                         placeholder = "confirma contrasena"
                         onChange = {this.handleChange}
                         value = {this.state.confirmPass}
                         required />
                      </div>

                      <div className="text-center">
                        Creando una cuenta, usted ha aceptado los{" "}
                        <a
                          href="https://www.kiero.co/terms.html"
                        >
                          Términos y condiciones
                        </a>{" "}
                        y las{" "}
                        <a
                          href="https://www.kiero.co/privacidad.html"
                        >
                          Políticas de privacidad
                        </a>{" "}
                        de Kiero.
                      </div>
                      <div style={{ marginTop: "40px", paddingBottom: "30px"}}>
                        <div className="container_fpu container ">
                          <button  type = "submit" className="btn btn-register" onClick = {this.handleClick}>
                            Crea tu cuenta en Kiero
                          </button>
                         <Link to = "/listcategory"></Link>
                        </div>
                        <Link to = "/login">
                            Ya tengo una cuenta, Inicia sesion
                          </Link>
                      </div> 
                      </form>
                    </div>
                
            </React.Fragment>
        );
    }
}

export default Registration