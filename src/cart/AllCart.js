import { CartProvider, useCart } from "react-use-cart";
import ApiData from "./ApiData";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Page() {
  const { addItem } = useCart();
  return (
    <div>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container"  >
          <div className="row" >
          {ApiData.map((item)=>
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
						<a onClick={() => addItem(item)}  className="product-item" >
							<img src={item.images[0]} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">{item.title}</h3>
							<strong className="product-price">$ {item.price}</strong>

							<div className="icon-cross">
              <button ><img src="images/cross.svg" className="img-fluid"/></button>
								
							</div>
						</a>
					</div>
                               )};
      </div>
      </div>
      </div>
    </div>
  );
}



function AllCart() {
  return (
    <CartProvider>
      <Navbar/>
      <Page />
     
      <Footer/>
    </CartProvider>
  );
}
export default AllCart;

// function Cart() {
//   const {
//     isEmpty,
//     totalUniqueItems,
//     items,
//     updateItemQuantity,
//     removeItem,
//   } = useCart();

//   if (isEmpty) return <p>Your cart is empty</p>;

//   return (
//     <>
//       <h1>Cart ({totalUniqueItems})</h1>

//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.quantity} x {item.name} &mdash;
//             <button
//               onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
//             >
//               -
//             </button>
//             <button
//               onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
//             >
//               +
//             </button>
//             <button onClick={() => removeItem(item.id)}>&times;</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// {ApiData.map((p) => (
//   <div key={p.id}>
//      <button onClick={() => addItem(p)}>Add to cart</button>
//   </div>
//   ))}