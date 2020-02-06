import React, { Fragment } from "react";
import axios from "axios";
import "../../assets/css/detalles.css";
import MediosPago from "./MediosPago";
import Productosrecomendados from "./Productosrecomendados";

class Detalles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  async componentWillMount() {
    let { data } = await axios.get("http://10.4.28.183:5000/products/2502209");
    if (data.error) console.error(data.message);
    this.setState({
      posts: data.data
    });
  }

  render() {
    return (
      <Fragment>
        <div className="container ">
          <div className="row ">
            <div className="col-7 d">
              <p className="mt-4 title-description">PRODUCTOS RECOMENDADOS</p>
              <Productosrecomendados />
              <p className="mt-5 title-description">DETALLE DEL PRODUCTO</p>
              <h2>Titulo</h2>
              <p>{this.state.posts.title} </p>
              <h2>Descripciòn</h2>
              <p>{this.state.posts.description}</p>
              <h2>Informacion</h2>
              <p>
                Kit de tarjeta de memoria Micro SD TF macho a hembra SD
                Extensión Soft Flat FPC Cable Extender 10cm Puede extender la
                ranura para tarjeta TF desde adentro hacia afuera Y luego
                conectar la tarjeta SD para el móvil y Tablet La tarjeta de
                memoria no incluida Soft Flat FPC Cable Longitud 10cm Aprox
              </p>
              <h2>caracteristica</h2>
              <p>Largo: {this.state.posts.height}</p>
              <p>Ancho: {this.state.posts.width}</p>
              <p>Alto: {this.state.posts.height}</p>
              <p>Peso: {this.state.posts.weight}</p>

              <p>SPICEIMPORTS</p>
              <p>*Este producto viene desde Estados Unidos</p>
              <p>*(Entrega de 3 a 7 habiles)</p>
              <p>*Envio gratis</p>


              <h2>ME RETRACTÉ DE MI COMPRA!</h2>
              <p>
                En caso de ya que no quieras el producto que recibiste puedes
                realizar la devolución de esté, en un periodo no mayor a 5 días
                calendario desde su fecha de entrega, por ende el cliente deberá
                asumir el valor del retorno a una de las direcciones que se le
                indicára, el valor del envío varía según el peso y el tamaño del
                paquete.
              </p>

              <h2>PREGUNTAS Y RESPUESTAS</h2>
              <div className="container">
                <div className="row btn">
                  <button
                    type="button"
                    className="btn btn-danger boton col-3 mr-3"
                  >
                    Envios
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger boton col-3 mr-3"
                  >
                    medios de pago
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger boton col-3 mr-3"
                  >
                    garantia
                  </button>
                </div>
              </div>
              <div className="input-group mb-3 mt-5 col-11 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Preguntanos ..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-danger boton "
                    id="button-addon2"
                  >
                    Preguntar
                  </button>
                </div>
              </div>
              <p>ULTIMAS PREGUNTAS</p>
              <p>Se el primero en preguntar ...</p>
            </div>
            <MediosPago />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Detalles;
