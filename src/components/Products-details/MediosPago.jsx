import React from "react";
import "./mediospago.css";
import Pago from "../../assets/img/payModal.png";
import Pay2 from "../../assets/img/pay2.png";
import PayBF from "../../assets/img/payBaloEfe.png";

class MediosPago extends React.Component {
  render() {
    return (
      <div className="col-5 b">
        <p className="mt-4">MEDIOS DE PAGO</p>
        <div>
          <img src={Pago} />
          <img src={Pay2} />
          <img src={PayBF} />
        </div>
        <a href="">
          <p className="mt-5"> Más información </p>
        </a>

        <p>Garantía</p>
        <p>Compra protegida</p>
        <p>
          En caso de que surja algún problema o no recibas el producto tal como
          lo compraste, te devolveremos el dinero que pagaste.
        </p>
        <p>Garantía del vendedor</p>
        <p>Garantia por defecto de fabrica de (1) un mes.</p>

        <a href="">
          <p className="mt-5"> Más información </p>
        </a>
      </div>
    );
  }
}

export default MediosPago;
