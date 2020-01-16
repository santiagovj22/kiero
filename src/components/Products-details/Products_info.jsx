import React, { Fragment } from "react";
import "./products_info.css";
import axios from "axios";
import pago from "../../assets/img/payModal.png";
import { Modal, ModalContent } from "../Modal/Modal";
import Select from "react-select";
import Sticky from "@wicked_query/react-sticky";
import { isMobile } from "react-device-detect";
import Button from "../../components/Products-details/Button/Button";

class productsImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      showModal: null,
      selectedOption: null,
      sesionUser: "Iniciar sesión",
      sesionOut: "Registrarse"
    };

    this.handleChange = this.handleChange.bind(this);
    this.BuyProductBTN = this.BuyProductBTN.bind(this);
  }
  componentDidMount() {
    this.setState({ selectedOption: 1 });
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  BuyProductBTN() {
    try {
      let pausedPro = localStorage.getItem("gato");
      if (pausedPro === "false") {
      } else {
        let URI = urlShow();
        var amout = this.state.selectedOption.value
          ? this.state.selectedOption.value
          : 1;
        let d = new Date();
        d.setTime(d.getTime() + 20 * 60 * 1000);
        cookie.save("product_url", URI, {
          path: "/",
          expires: d,
          domain: ".kiero.co"
        });
        cookie.save("product_amount", amout, {
          path: "/",
          expires: d,
          domain: ".kiero.co"
        });
        if (
          cookie.load("usuario") === undefined ||
          cookie.load("usuario") === null
        ) {
          window.location.href = `https://kiero.co/login`;
        } else {
          window.location.href = `https://pagos.kiero.co/#/way-to-pay/${URI}/${amout}/${
            cookie.load("usuario").id
          }`;
        }

        function urlShow() {
          var id2 = "";
          const idproduct = window.location.href;
          const countid = idproduct.indexOf("?id-");
          const id = idproduct.substring(countid + 4, countid + 4 + 10);
          if (id.includes("-")) {
            var countid2 = id.indexOf("-");
            id2 = id.substring(0, countid2);
          }
          return id2;
        }
      }
    } catch (error) {
      console.log("error to buy: " + error);
    }
  }

  async componentWillMount() {
    let { data } = await axios.get("http://localhost:5000/products/2");
    if (data.error) console.error(data.message);
    this.setState({
      posts: data.data
    });
  }

  render() {
    const isModal = this.state.showModal;
    const modalText = <h2 class="c-modal__subtitle">Tarjetas de credito</h2>;
    const imgCreditCard = (
      <img class="c-modal__imgModal" src={ImgModal} alt="logo pay"></img>
    );
    const imgPay2 = (
      <img class="c-modal__imgModal" src={ImgPayOnline} alt="logo pay2"></img>
    );
    const imgEfecty = (
      <img
        class="c-modal__imgModal"
        src={ImgEfectBaloto}
        alt="logo efecty baloto"
      ></img>
    );
    const txtTransfBank = (
      <h2 class="c-modal__subtitle">Transferencia desde tu banco</h2>
    );
    const bankMessage = (
      <h6 class="c-modal__h6Mod">
        El banco incluirá los intereses de las cuotas en el resumen de tu
        tarjeta
      </h6>
    );
    const modalImgEnvio = (
      <img class="c-modal__imgModal2" src={imgEnvio} alt="logo pay2"></img>
    );
    const textTransOnline = <h6 class="c-modal__subtitle">Traspaso Online</h6>;
    const textFinishBuy = (
      <h6 class="c-modal__h6Mod">
        cuando termines tu compra, te daremos las instrucciones para que sepas
        cómo y dónde pagarla
      </h6>
    );

    const UnityAvaibles = [
      { label: "1 Unidad", value: 1 },
      { label: "2 Unidades", value: 2 },
      { label: "3 Unidades", value: 3 },
      { label: "4 Unidades", value: 4 },
      { label: "5 Unidades", value: 5 }
    ];

    return (
      <Fragment>
        <div className="col-5 derecha">
          <div className="m-5">
            <h4>
              <p>{this.state.posts.titulo}</p>
            </h4>

            <h2>{this.state.posts.price}</h2>
            <img className="pago mt-3" src={pago} />

            <div
              className="btn-group mt-4"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  1 Unidad
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="#">
                    2 Unidades
                  </a>
                  <a className="dropdown-item" href="#">
                    3 Unidades
                  </a>
                  <a className="dropdown-item" href="#">
                    4 Unidades
                  </a>
                  <a className="dropdown-item" href="#">
                    5 Unidades
                  </a>
                </div>
              </div>
            </div>

            <a href="">
              <p className="mt-2">Más información</p>
            </a>
            <button type="button" className="btn btn-danger">
              comprar
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default productsImage;
