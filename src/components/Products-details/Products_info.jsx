import React, { Fragment } from "react";
import "../../assets/css/products_info.css";
import axios from "axios";
import pago from "../../assets/img/payModal.png";

class productsImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentWillMount() {
    let { data } = await axios.get("http://localhost:5000/products/2");
    if (data.error) console.error(data.message);
    this.setState({
      posts: data.data
    });
  }

  render() {
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
