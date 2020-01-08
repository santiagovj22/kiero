import React from 'react';

class Registration extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div>
        
        <form >
          <div className="main-login">
            <h1>Crear Cuenta</h1>

            <div className="auth_social">

              </div> 

              <div className="auth_social">
    
                </div>
                <div className="auth_social"><h2><span>o</span></h2></div>
            <div className="auth_social">
             
            </div>

            <div className="fullName lg-name">
              <label htmlFor="fullName" className='label-login'>Nombres</label>
              <input
                type="text"
                name="fullName"
                size="50px"
              
              />
       
            </div>
            <div className="fullName">
              <label htmlFor="lastName" className='label-login'>Apellidos</label>
              <input
                type="text"
                name="lastName"
              
              />
            
            </div>

            <div className="email">
              <label htmlFor="email" className='label-login'>Correo</label>
              <input
                type="email"
                name="email"
              
              />
            
            </div>
            <div className="password">
              <label htmlFor="password" className='label-login'>Contraseña</label>
              <input
                type="password"
                name="password"
                
              />
            
            </div>
            <div className="info">
              <small></small>
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
                <button className="btn btn-register ">
                  
                  Crear tu cuenta en Kiero{" "}
                  <span className="fa fa-thumbs-up"></span>
                </button>
              </div>
              <div className="btn_login-user">
            </div>
            </div>
          </div>
        </form>
     
      </div>

            </React.Fragment>
        );
    }
}

export default Registration