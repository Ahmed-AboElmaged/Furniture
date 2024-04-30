import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { CartProvider, useCart } from "react-use-cart";

function Cartt() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal, totalItems, emptyCart } = useCart();
  return (
  <div className="untree_co-section">
    <div className="container">

      <div className="col-md-12">

        <div className="row mb-12">
          <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Coupon Code</h2>
            <div className="p-3 p-lg-5 border bg-white">

              <label for="c_code" className="text-black mb-3">Enter your coupon code if you have one</label>
              <div className="input-group w-75 couponcode-wrap">
                <input type="text" className="form-control me-2" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-black btn-sm" type="button" id="button-addon2">Apply</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row mb-12">
          <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Your Order</h2>
            <div className="p-3 p-lg-5 border bg-white">
              <table className="table site-block-order-table mb-5">
                <thead className="thead-dark">
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </thead>
                <tbody>
                  {items.map((item) => (
                  <tr key={item.id}>

                   <>
         <td>{item.title}</td>
         <td><strong className="mx-2">x</strong>{item.quantity}</td>
 
         <td>${item.quantity * item.price}</td>
 </>
 
 </tr>
))} 

 <tr>
   <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
   <td>      </td>
   <td className="text-black">$0</td>
 </tr>

 <tr>
   <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
   <td>      </td>
   <td className="text-black font-weight-bold"><strong>${cartTotal}</strong></td>
 </tr>
            


                </tbody>
              </table>

              <div className="border p-3 mb-3">
                <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Direct Bank Transfer</a></h3>

                <div className="collapse" id="collapsebank">
                  <div className="py-2">
                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                  </div>
                </div>
              </div>

              <div className="border p-3 mb-3">
                <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Cheque Payment</a></h3>

                <div className="collapse" id="collapsecheque">
                  <div className="py-2">
                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                  </div>
                </div>
              </div>

              <div className="border p-3 mb-5">
                <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>

                <div className="collapse" id="collapsepaypal">
                  <div className="py-2">
                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <a onClick={() => emptyCart()} className="btn btn-black btn-lg py-3 btn-block text-center" href="/thankyou">Place Order</a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

   ) ;
}

function Apply() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal, totalItems, emptyCart } = useCart();
  return (
    <div>
      <CartProvider>
      <Navbar />
      <Cartt/>

      <Footer />
      </CartProvider>
    </div>
  )
}

export default Apply