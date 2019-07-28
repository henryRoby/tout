import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from 'react-alice-carousel';
import Carousel from 'nuka-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
// import { Carousel } from 'react-responsive-carousel';
import ReactImageMagnify from 'react-image-magnify';
import axios from 'axios';
export default class Produit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profil: [],
            slideIndex: 0
        };


    }
    componentDidMount() {
        console.log(this.props)
        axios.get("http://localhost:8070/produit").then(res => {
            console.log(res.data)
            this.setState({ profil: res.data })
            console.log(this.state.profil)

        })
    }
    render() {
      
        return (
            <div  className="container ">
             <div className="row">
             {this.state.profil.length > 0 ? (this.state.profil.map(prof => {
                        const url1 = "http://localhost:8070/public/" + prof.file1
                        const url2 = "http://localhost:8070/public/" + prof.file2
                        const url3 = "http://localhost:8070/public/" + prof.file3
                        const style={
                            width: "18rem"
                        }
                        return (
                           <div className="col-md-4">
                        <div id="card"class="card">
{/*                            
                            <   ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: url,
                                width: 400,
                                height: 200,
                            },
                            largeImage: {
                                src: url,
                                width: 1200,
                                height: 1800,
                                
                            }
                        }} />
                             */}
                           <div id="image"className="row"> 
                           <div className="col-md-3"><img class="card-img-top" id="larg"src={url1} alt="Card image cap" /> </div>
                           <div className="col-md-3">  <img class="card-img-top" id="larg"src={url2} alt="Card image cap" /></div>
                           <div className="col-md-3"> <img class="card-img-top" id="larg"src={url3} alt="Card image cap" /> </div>
                           
                               
                               
                           </div>
                              
                                <div class="card-body">
                                    <h5 class="card-title">{prof.nom}</h5>
                                    <p class="card-text">{prof.description}</p>
                                    <a href="#" >{prof.prix}</a><br></br>
                                    <button class="btn btn-primary" onClick={()=>{
                                        localStorage.setItem("555",prof.nom)
                                       window.location="/panier"
                                        
                                    }

                                    }>Ajouter au panier</button>
                                </div>
                            </div>
                           </div>
                        // <div id="card" class="card" style={style}>
                        //   <img class="card-img-top" src={url} id="larg"alt="Card image cap"/>
                        //   <div class="card-body">
                        //   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        //   </div>
                        // </div>

                            
                           
                          


                        )
                    }
                    )) : ''}
             </div>
                   



            </div>
        )
    }
}

// import React from 'react';
// import Carousel from 'nuka-carousel';
 
// export default class extends React.Component {
//   state = {
//     slideIndex: 0
//   };
 
//   render() {
//     return (
//       <Carousel
//         slideIndex={this.state.slideIndex}
//         afterSlide={slideIndex => this.setState({ slideIndex })}
//       >
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
//         <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
//       </Carousel>
//     );
//   }
// }