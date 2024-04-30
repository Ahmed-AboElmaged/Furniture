import React from 'react'
import Putton from './Putton'

function Checkin() {
    return (
        <div>
           
        <div className="untree_co-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="border p-4 rounded" role="alert">
                        Already have an account?  <a href="/login">Click here</a> to Sign in
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-mb-5 mb-md-0">
                        <h2 className="h2 mb-3 text-black text-center">Create New account</h2>
                        <h2 className="h3 mb-3 text-black">Enter Details</h2>
                        <div className="p-3 p-lg-5 border bg-white">
                            <div className="form-group">
                                <label for="c_country" className="text-black">Country <span className="text-danger">*</span></label>
                                <select id="c_country" className="form-control">
                                    <option value="1">Select a country</option>
                                    <option value="2">Cairo</option>
                                    <option value="3">Alexandria</option>
                                    <option value="4">Giza</option>
                                    <option value="5">Aِlgharbia</option>
                                    <option value="6">Dakahlia</option>
                                    <option value="7">Suez</option>
                                    <option value="8">Asyut</option>
                                    <option value="9">Aswan</option>
                                </select>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label for="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_fname" name="c_fname" />
                                </div>
                                <div className="col-md-6">
                                    <label for="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_lname" name="c_lname" />
                                </div>
                            </div>



                            <div className="form-group row">
                                <div className="col-md-12">
                                    <label for="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Street address" />
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label for="c_state_country" className="text-black">State / Country <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_state_country" name="c_state_country" />
                                </div>
                                <div className="col-md-6">
                                    <label for="c_postal_zip" className="text-black">Posta / Zip <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_postal_zip" name="c_postal_zip" />
                                </div>
                            </div>

                            <div className="form-group row mb-5">
                                <div className="col-md-6">
                                    <label for="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_email_address" name="c_email_address" />
                                </div>
                                <div className="col-md-6">
                                    <label for="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_phone" name="c_phone" placeholder="Phone Number" />
                                </div>
                            </div>


                            <div className="form-group">
                                <label for="c_create_account" className="text-black" data-bs-toggle="collapse" href="#create_an_account" role="button" aria-expanded="false" aria-controls="create_an_account"><input type="checkbox" value="1" id="c_create_account" /> Create an account?</label>
                                <div className="collapse" id="create_an_account">
                                    <div className="py-2 mb-4">
                                        <p className="mb-3">Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                        <div className="form-group">
                                            <label for="c_account_password" className="text-black">Account Password <span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="c_account_password" name="c_account_password" placeholder="" />
                                        </div>
                                        <div className="col-md-12">
                                            <label for="password confirmation" className="text-black">password confirmation <span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" id="password confirmation" name="password confirmation" placeholder="password confirmation" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <label for="c_ship_different_address" className="text-black" data-bs-toggle="collapse" href="#ship_different_address" role="button" aria-expanded="false" aria-controls="ship_different_address"><input type="checkbox" value="1" id="c_ship_different_address" /> Ship To A Different Address?</label>
                                <div className="collapse" id="ship_different_address">
                                    <div className="py-2">

                                        <div className="form-group">
                                            <label for="c_diff_country" className="text-black">Country <span className="text-danger">*</span></label>
                                            <select id="c_diff_country" className="form-control">
                                                <option value="1">Select a country</option>
                                                <option value="2">Cairo</option>
                                                <option value="3">Alexandria</option>
                                                <option value="4">Giza</option>
                                                <option value="5">Aِlgharbia</option>
                                                <option value="6">Dakahlia</option>
                                                <option value="7">Suez</option>
                                                <option value="8">Asyut</option>
                                                <option value="9">Aswan</option>
                                            </select>
                                        </div>


                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label for="c_diff_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_diff_fname" name="c_diff_fname" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="c_diff_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_diff_lname" name="c_diff_lname" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label for="c_diff_companyname" className="text-black">Company Name </label>
                                                <input type="text" className="form-control" id="c_diff_companyname" name="c_diff_companyname" />
                                            </div>
                                        </div>

                                        <div className="form-group row  mb-3">
                                            <div className="col-md-12">
                                                <label for="c_diff_address" className="text-black">Address <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_diff_address" name="c_diff_address" placeholder="Street address" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label for="c_diff_state_country" className="text-black">State / Country <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_diff_state_country" name="c_diff_state_country" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="c_diff_postal_zip" className="text-black">Posta / Zip <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_diff_postal_zip" name="c_diff_postal_zip" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-5">
                                            <div className="col-md-6">
                                                <label for="c_diff_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_diff_email_address" name="c_diff_email_address" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="c_diff_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_diff_phone" name="c_diff_phone" placeholder="Phone Number" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="form-group">
                                <label for="c_order_notes" className="text-black md-5" >Any Notes</label>
                                <textarea name="c_order_notes" id="c_order_notes" cols="30" rows="5" className="form-control" placeholder="Write your notes here..."></textarea>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Putton/>
        </div>
    )
}

export default Checkin