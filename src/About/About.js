import React from 'react'

function About() {
  return (
    <div>
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
<div class="we-help-section">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-lg-7 mb-5 mb-lg-0">
						<div class="imgs-grid">
							<div class="grid grid-1"><img src="images/img-grid-1.jpg" alt="Untree.co"/></div>
							<div class="grid grid-2"><img src="images/img-grid-2.jpg" alt="Untree.co"/></div>
							<div class="grid grid-3"><img src="images/img-grid-3.jpg" alt="Untree.co"/></div>
						</div>
					</div>
					<div class="col-lg-5 ps-lg-5">
						<h2 class="section-title mb-4">We Help You Make Modern Interior Design</h2>
						<p>Yazid & Yasin Furniture is a store that sells smart, elegant and modern furniture for home, The brand is going to provide a new experience in the digital world making it more comfy to orders items and get friendly after sale support as well, So it’s always a pleasure to order anything from your place at Yazid & Yasin Furniture.</p>

						<ul class="list-unstyled custom-list my-4">
							<li>FAST SHIPPING<img src="images/footer-011-pzeae1vonfrt3owvhg6gh89hwsmoyrhpvcgb428ymw.png" alt="Image" className="imf-fluid"/></li>
							<li>AFTER SALE SUPPORT<img src="images/footer-021-pzead9oigv6uytq20z45yu6btu6plhvyg58t2dtvfc.png" alt="Image" className="imf-fluid"/></li>
							<li>CASH ON DELIVERY<img src="images/footer-031-pzeacqvqo6h4imhd2qzmkyx3y4rdbjtbpk73gulqvs.png" alt="Image" className="imf-fluid"/></li>
							<li>15 DAY SATISFACTION GUARANTEE<img src="images/footer-051-pzeab0ue54478czh50690ekoqp957iz1h151sl5qag.png" alt="Image" className="imf-fluid"/></li>
						</ul>
						<p><a herf="#" class="btn">Explore</a></p>
					</div>
				</div>
			</div>
		</div>
</div>
  )
}

export default About