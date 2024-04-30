import React from 'react'

function Hero() {
  return (
    <div>
        <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Yazid & Yasin  <span clsas="d-block">Furniture</span></h1>
								<p className="mb-4">Yazid & Yasin Furniture is a store that sells smart, elegant and modern furniture for home..</p>
								<p><a href="/shop" className="btn btn-secondary me-2">Shop Now</a><a href="/" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="images/couch.png" className="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Hero