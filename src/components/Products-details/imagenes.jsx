import React from "react";
import "./imagenes.css";
import beleza from "../../assets/belleza.jpg";
import axios from "axios";

class Imagenes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }

  async componentWillMount() {
    let { data } = await axios.get(`http://localhost:5000/products/5`);
    if (data.error) console.error(data.message);
    this.setState({
      posts: data.data
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 blanco"></div>
          <div className="col-4 s">
            <div className="col-lg-12  titu">
              <div className=" grande">
                <img src={beleza} />
              </div>
              <div className="explora mt-3">
                <p className="exp">
                  EXPLORA
                  <h2 className="exp">JUGUETES</h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-4 e">
            <div className="col-lg-3 col-md-1 img1">
              {" "}
              <img
                src={this.state.posts.files && this.state.posts.files[0].url}
              />
            </div>
            <div className="col-lg-3 col-md-1 img2">
              {" "}
              <img
                src={this.state.posts.files && this.state.posts.files[0].url}
              />
            </div>
            <div className="col-lg-3 col-md-1 img3">
              {" "}
              <img
                src={this.state.posts.files && this.state.posts.files[0].url}
              />
            </div>
            <div className="col-lg-3 col-md-1 img4">
              {" "}
              <img
                src={this.state.posts.files && this.state.posts.files[0].url}
              />
            </div>

            <div className="col-lg-3 col-md-1 img5">
              {" "}
              <img
                src={this.state.posts.files && this.state.posts.files[0].url}
              />
            </div>
            <div className="col-lg-3 col-md-1 img6">
              {" "}
              <img
                src={this.state.posts.files && this.state.posts.files[0].url}
              />
            </div>
            <div className="col-lg-3 col-md-1 img7">
              {" "}
              <img
                src={this.state.posts.files && this.state.posts.files[0].url}
              />
            </div>
            <div className="col-lg-3 col-md-1 img8">
              {" "}
              <img
                src={this.state.posts.files && this.state.posts.files[0].url}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Imagenes;
