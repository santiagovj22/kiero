import React from 'react';
import axios from "axios";

class Imgprincipal extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          posts: [],
        };
      }

     
    
      async componentWillMount() {
        let { data } = await axios.get(`http://10.4.28.183:5000/products/2502209`);
        if (data.error) return console.error(data.message);
    
        this.setState({
          posts: data.data
        });
    
      }

   render(){
 
    
return(
          
            <div className="imgprincipal events-control" handleCLick={this.handleCLick}>
            <figure onMouseMove={this.handleMouseMove} style={this.state}>
     
                <img src={this.state.posts.files && this.state.posts.files[0].url} onClick={this.handleCLick} className="este" />
                    </figure>
            </div>

        )
    
      } }
    

export default Imgprincipal;
