import React from 'react'

function ChooseUs() {
  return (
    <div className="why-choose-section">
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-lg-6">
                <h2 className="section-title">Why Choose Us</h2>
                <p>Yazid & Yasin Furniture believes everyone should live in a home they love. Through technology and innovation, Yazid & Yasin Furniture makes it possible for shoppers to quickly and easily find exactly what they want from a selection of more than 100000 items across home furnishings, décor, home improvement, housewares and more. Committed to delighting its customers every step of the way, Yazid & Yasin Furniture is reinventing the way people shop for their homes – from product discovery to final delivery</p>

                <div className="row my-5">
                    <div className="col-6 col-md-6">
                        <div className="feature">
                            <div className="icon">
                                <img src="images/truck.svg" alt="Image" className="imf-fluid"/>
                            </div>
                            <h3>Fast &amp; Free Shipping</h3>
                            {/* <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p> */}
                        </div>
                    </div>

                    <div className="col-6 col-md-6">
                        <div className="feature">
                            <div className="icon">
                                <img src="images/bag.svg" alt="Image" className="imf-fluid"/>
                            </div>
                            <h3>Easy to Shop</h3>
                            {/* <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p> */}
                        </div>
                    </div>

                    <div className="col-6 col-md-6">
                        <div className="feature">
                            <div className="icon">
                                <img src="images/support.svg" alt="Image" className="imf-fluid"/>
                            </div>
                            <h3>24/7 Support</h3>
                            {/* <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p> */}
                        </div>
                    </div>

                    <div className="col-6 col-md-6">
                        <div className="feature">
                            <div className="icon">
                                <img src="images/return.svg" alt="Image" className="imf-fluid"/>
                            </div>
                            <h3>Hassle Free Returns</h3>
                            {/* <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p> */}
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-lg-5">
                <div className="img-wrap">
                    <img src="images/why-choose-us-img.jpg" alt="Image" className="img-fluid"/>
                </div>
            </div>
 
        </div>
    </div>
</div>
  )
}

export default ChooseUs