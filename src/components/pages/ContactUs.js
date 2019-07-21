import React, { Component } from 'react'

class ContactUs extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <form className="col-lg-5 p-5">
        <h1 className="mb-4">Contact us</h1>
        <div className="row">
        <div className="col-md-5 mb-3">
      <label>First name</label>
      <input type="text" className="form-control"placeholder="First name" required/>
    </div>
    <div className="col-md-5 mb-3">
      <label>Last name</label>
      <input type="text" className="form-control"placeholder="Last name" required/>
    </div>
    </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <textarea className="form-control" id="validationTextarea" placeholder="Message" required></textarea>
  <button type="submit" className="btn float-right btn-primary mt-3">Submit</button>
</form>
      </div>
    )
  }
}
export default ContactUs