import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { CartProvider, useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal, totalItems, emptyCart } = useCart();

  if (isEmpty) return <h3 className="text-center"><br /><br /><br /><br /><br />Your cart is empty</h3>;

  return (
    <>


      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="product-thumbnail"><img src={item.images[0]} alt="Image" className="img-fluid" /></td>
                        <td className="product-name"><h2 className="h5 text-black">{item.title}</h2></td>
                        <td>{item.price} $</td>
                        <td>
                          <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ width: '100px' }}>
                            <div className="input-group-prepend">
                              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-outline-black decrease" type="button">&minus;</button>
                            </div>
                            <input type="text" className="form-control text-center quantity-amount" value={item.quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            <div className="input-group-append">
                              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-outline-black increase" type="button">+</button>


                            </div>
                          </div>

                        </td>
                        <td>{item.quantity * item.price} </td>
                        <td><a onClick={() => removeItem(item.id)} href="#" className="btn btn-black btn-sm">X</a></td>
                      </tr>
                    ))}



                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-danger" onClick={() => emptyCart()}>Update Cart</button>
                </div>
                <div className="col-md-6">
                  <a href="/shop" className="btn btn-secondary me-2">Continue Shopping</a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" for="coupon">Coupon</label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-black">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">{totalItems}</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">${cartTotal}</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <Link className="btn btn-black btn-lg py-3 btn-block" to="/apply">Proceed To Checkout</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}

function Carts() {
  return (
    <div>
      <CartProvider>
        <Navbar />
     
        <Cart />
        <Footer />
      </CartProvider>
    </div>
  )
}

export default Carts