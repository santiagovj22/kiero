import React from 'react';
import { Link } from 'react-router-dom';
class Registration extends React.Component{
   
    render(){
        return(
            <React.Fragment>
              <div>    
                  <form >
                    <div className="main-login">
                    <h1 className = "h3 mb-3 font-weight-normal">Sign up</h1>
                          <div className="auth_social"></div>
                      <div className="auth_social">
                      </div>
                    <form>
                      <div className="form-group">
                        <label htmlFor="first_name">Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          placeholder = "Ingresa tu Nombre"
                          size="50px"
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
                          <button  type = "submit" className="btn btn-register">
                            Crea tu cuenta en Kiero
                          </button>
                        </div>
                       
                      </div>
                      
                      </form>
                    </div>
                  </form>
                </div>

            </React.Fragment>
        );
    }
}

export default Registration