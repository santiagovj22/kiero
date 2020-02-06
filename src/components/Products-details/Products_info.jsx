import React, { Fragment } from "react";
import "../../assets/css/products_info.css";
import axios from "axios";
import pago from "../../assets/img/payModal.png";
import Select from "react-select";
import useModal from 'use-react-modal'

const UnityAvaibles = [
  { label: "1 Unidad", value: 1 },
  { label: "2 Unidades", value: 2 },
  { label: "3 Unidades", value: 3 },
  { label: "4 Unidades", value: 4 },
  { label: "5 Unidades", value: 5 }
];



class productsImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedOption: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.setState({ selectedOption:1 });
  }
  
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };


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
        <div className="col-5 derecha">
          <div className="m-5">
          
           <h2 className='titulo'>{this.state.posts.title}</h2>
            <h2>$ {this.state.posts.price}</h2>
            <img className="pago mt-3" src={pago} />


            <div className="quantityMb">
            <Select
              className="drpUnitiesMb"
              options={UnityAvaibles}
              onChange={this.handleChange}
              defaultValue={UnityAvaibles[0]}
              isSearchable={false}
            >
              {" "}
            </Select>
          </div>

            <a href="">
              <p className="mt-2" >Más información</p>
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
