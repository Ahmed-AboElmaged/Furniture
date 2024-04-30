// import axios from 'axios'
// import React, { Component } from 'react'
// import Navbar from '../Navbar'
// import Footer from '../Footer'

// class AllProducts extends Component {
//     state = {
//         shop: []
//     }
//     componentDidMount() {
//         axios.get('/js/Api.json')
//         .then((item) => {
//             this.setState(
//                 {
//                     shop:item.data
//                 } 
//             )
//         } )
//     }
//   render() {
//     return (
//       <div>
//         <Navbar/>
//         <div className="untree_co-section product-section before-footer-section" >
//             <div className="container" >
// 		      	<div className="row" >
//                        {this.state.shop.map((item)=>
//                         <div className="col-12 col-md-4 col-lg-3 mb-5">
// 						<a className="product-item" href="#">
// 							<img src={item.images[0]} className="img-fluid product-thumbnail"/>
// 							<h3 className="product-title">{item.title}</h3>
// 							<strong className="product-price">$ {item.price}</strong>

// 							<span className="icon-cross">
// 								<img src="images/cross.svg" className="img-fluid"/>
// 							</span>
// 						</a>
// 					</div>
//                                )};
//                           </div>     
//                 </div>
//                 </div>
//         <Footer/>
//       </div>
//     )
//   }
// }

// export default AllProducts
