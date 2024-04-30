import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div>
            <Navbar />
            {/* <!-- Start Hero Section --> */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}
            <div className="untree_co-section">
                <div className="container">
                    <div className="form-group row mb-5">
                        <div className="col-md-10">
                            <label for="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="c_email_address" name="c_email_address" />
                        </div>
                        <div className="col-md-10">
                            <label for="c_account_password" className="text-black">Account Password <span className="text-danger">*</span></label>
                            <input type="password" className="form-control" id="c_account_password" name="c_account_password" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="form-group mt-5 text-center">
                    <Link className="btn btn-success btn-lg py-3 " to="/">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Login