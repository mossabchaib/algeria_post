import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Modal() {
  return (
    <div>
      
      <form style={{height:'500px'}}>
                        <div className="mb-3">
                          <label className="form-label" >Name</label>
                          <input className="form-control" id="basic-form-name" type="text" placeholder="Name"/>
                        </div>
                        <div className="mb-3">
                          <label className="form-label" >Email address</label>
                          <input className="form-control" id="basic-form-email" type="email" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input className="form-control" id="basic-form-password" type="password" placeholder="Password"/>
                        </div>
                        <div className="mb-3">
                          <label className="form-label" >Date of Birth</label>
                          <input className="form-control" id="basic-form-dob" type="date"/>
                        </div>
                        <div className="mb-3">
                          <label className="form-label" >Gender</label>
                          <select className="form-select" id="basic-form-gender" aria-label="Default select example">
                            <option >Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <div className="form-check">
                            <input className="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault"/>
                            <label className="form-check-label mb-0" >Personal Account</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault"/>
                            <label className="form-check-label mb-0" >Business Account</label>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Upload Image</label>
                          <input className="form-control" type="file"/>
                        </div>
                        <div className="mb-3">
                          <label className="form-label" >Description</label>
                          <textarea className="form-control" id="basic-form-textarea"  placeholder="Description"></textarea>
                        </div>
                        <div className="mb-3 form-check">
                          <input className="form-check-input" id="basic-form-checkbox" type="checkbox"/>
                          <label className="form-check-label" >Remember me</label>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                      </form>
                    
    </div>
  )
}
