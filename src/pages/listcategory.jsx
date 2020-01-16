import React, { Component } from 'react';

import axios from 'axios';

class ListCategory extends Component {
    constructor(){
        super()
        this.state = {
            post : []
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/photos')
        .then(res => {
            this.setState({
                post : res.data
            })
        })
        .catch(error => {
            console.log(error)
        })
        
    }
     
        render() {
           const {post} = this.state;
           const elements = post;
           const posts = [];
           for (const [i,value] of elements.entries()) {
               posts.push(
                <div className = 'row'>
                    <div className = ' col-md-4'>
                            <div className="card" style={{width: "288px"}} key = {i}>
                            <img className="card-img-top" src={value.url} alt="Card cap"/>
                            <div className="card-body"> 
                                
                            <h5 className="card-title">{value.title}</h5>
               <p className="card-text">{value.albumId}</p>
                                <a href="a" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        </div>
                </div>
               )
           }
            return(
                
                        <div className='row'>
                            <div className = 'col-md-7'>
                                {posts}
                            </div>
                        </div>
            )
        }
    }
export default ListCategory;