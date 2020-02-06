
import React from "react";
import axios from "axios";

class Products extends React.Component {
    constructor(){
        super()
        this.state = {
            post : []
        }
    }
    componentWillMount(){
        axios.get('http://10.4.28.183:5000/products/1')
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
           const { post } = this.state;
          

                
        //    {
        //         post.map(item => {
        //             console.log(item)
        //         })
        //    }
        //    for (const [i,value] of elements.entries()) {
        //        posts.push(
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-7 izquierda ">
        //                 <div className="col-10 text im ">
        //                     <div className="imgprincipal" key={i}>
        //                         {value.description}
        //                     </div>
        //                 </div>
        //                 <div className="col-2 img mt-3">
        //                     <div className="mini" >
                

        //                         <img />
                            
        //                     </div>
        //                     {/* <div className="mini">
        //                     <img
        //                         src={
        //                         this.state.posts.files && this.state.posts.files[0].url
        //                         }
        //                     />
        //                     </div> */}
        //                 </div>
        //                 </div>
        //             </div>
        // </div>
           
        //        )
        //    }

                                     /* {post.data.files.map(item => {
                                console.log(item)
                            })} */
                            /* <div className = 'col-md-7'>
                                {post}
                            </div> */
        console.log(post.data)
            return(
                <div className='row'>
                    <h1>{post.title}</h1>
                    <div>
                        {post.data.files.map(item => {
                            
                        })}
                    </div>
                </div>
            )
        
        }
    }

    export default Products;
