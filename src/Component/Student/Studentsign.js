import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AttendancenSApi from '../../ContextAPi/AttendanceSApi'
const Studentsign = () => {
  const context = useContext(AttendancenSApi)
  const { showAlert, fgcolor, butn } = context
  const [credintial, setMycredintial] = useState({ name: "", rollnumber: "", email: "", address: "", mobile: "", dob: "", password: "", image: null, currentedu: "", currentyear: "", stdbranch: "", fathername: "", mothername: "", fathermobile: "", mothermobile: "", gender: "", city: "" })
  const [image, setImage] = useState("")
  let history = useNavigate()
  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Submit")
    const response = await fetch('http://localhost:5000/api/student/studentSingup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credintial.name, rollnumber: credintial.rollnumber, fathername: credintial.fathername, mothername: credintial.mothername, fathermobile: credintial.fathermobile, mothermobile: credintial.mothermobile, gender: credintial.gender, email: credintial.email, password: credintial.password, address: credintial.address, mobile: credintial.mobile, dob: credintial.dob, image: image, currentedu: credintial.currentedu, currentyear: credintial.currentyear, stdbranch: credintial.stdbranch, city: credintial.city })
    });
    const json = await response.json()
    // console.log(json)
    if (json.success) {
      // console.log("Successfully Sign Up", "success")
      showAlert("Account Has been Created Successfully", 'success')
      history('/admindata')
    }
    else {
      showAlert("Invalid Details", 'error')
    }
  }
  const handleChange = (e) => {
    setMycredintial({ ...credintial, [e.target.name]: e.target.value })
  }
  const convertobase64 = (e) => {
    // console.log(e)
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result)
    }
    reader.onerror = error => {
      console.error("Error", error)
      showAlert('Image Upload is Declined', "error")
    }
  }
  return (
    <>
      <h1 className={`text-center text-${fgcolor}`}>Student Sing-Up Form</h1>
      <form className='container my-5'>
        <div className="container text-center">
          <div className="row">
            <div className="col-6 border border-dark" style={{ width: "34.2rem", marginRight: "10px" }}>
              <h5 className='text-center'>Student Info</h5>
              <div className="mb-3">
                <label htmlFor='image' className={`form-label text-${fgcolor} fw-semibold`} >Add Photo</label>
                <input style={{ backgroundColor: 'transparent' }} className="form-control" type="file" id="image" name='image' onChange={convertobase64} required />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className={`form-label text-${fgcolor} fw-semibold`}>Full Name</label>
                <input style={{ backgroundColor: 'transparent' }} type="text" className={`form-control bg-${butn}`} value={credintial.name} id="name" name='name' onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className={`form-label text-${fgcolor}`}>Email address</label>
                <input style={{ backgroundColor: 'transparent' }} type="email" className="form-control" value={credintial.email} id="email" name='email' aria-describedby="emailHelp" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className={`form-label text-${fgcolor}`}>Password</label>
                <input style={{ backgroundColor: 'transparent' }} type="password" className="form-control" value={credintial.password} id="password" name='password' onChange={handleChange} />
              </div>
            </div>
            <div className="col-6 border border-dark">
              <h5 className='text-center'>Education Info</h5>
              <div className="mb-3">
                <label htmlFor="rollnumber" className={`form-label text-${fgcolor}`}>Roll Number</label>
                <input type='number' style={{ backgroundColor: 'transparent' }} className="form-control" value={credintial.rollnumber} id="rollnumber" name='rollnumber' onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="currentedu" className={`form-label text-${fgcolor} `} > <h5> Student Course :</h5></label>
                <input style={{ backgroundColor: 'transparent' }} type="text" className="form-control " value={credintial.currentedu} id="currentedu" name='currentedu' onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="stdbranch" className={`form-label text-${fgcolor}`} ><h5>Branch:</h5></label>
                <input style={{ backgroundColor: 'transparent' }} type="text" className="form-control" value={credintial.stdbranch} id="stdbranch" name='stdbranch' onChange={handleChange} />

              </div>
              <div className="mb-3">
                <label htmlFor="currentyear" className={`form-label text-${fgcolor}`}>
                  <h5>Current Year:</h5>
                </label>
              <input style={{backgroundColor:'transparent'}} type="text" className="form-control" value={credintial.currentyear} id="currentyear" name='currentyear' onChange={handleChange} />
              </div>

            </div>
            <div className="col-6 border border-dark my-2" style={{ width: "34.2rem", marginRight: "10px" }}>
              <div className="mb-3">
                <h5 className='text-center'>Contact Info</h5>
                <label htmlFor="city" className={`form-label text-${fgcolor}`}>City</label>
                <input style={{ backgroundColor: 'transparent' }} type="text" className="form-control" value={credintial.city} id="city" name='city' onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className={`form-label text-${fgcolor}`}>Address</label>
                <input style={{ backgroundColor: 'transparent' }} type="text" className="form-control" value={credintial.address} id="address" name='address' onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className={`form-label text-${fgcolor}`}>Gender</label>
                <input style={{ backgroundColor: 'transparent' }} type="text" className="form-control" value={credintial.gender} id="gender" name='gender' onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className={`form-label text-${fgcolor}`}>Mobile No</label>
                <input style={{ backgroundColor: 'transparent' }} type="number" className="form-control" value={credintial.mobile} id="mobile" name='mobile' onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className={`form-label text-${fgcolor}`}>Date of Birth</label>
                <input style={{ backgroundColor: 'transparent' }} type="date" className="form-control" value={credintial.dob} id="dob" name='dob' onChange={handleChange} />
              </div>
            </div>
            <div className="col-6 border border-dark my-2">
              <h5 className='text-center '>Family Info</h5>
              <div className="mb-3">
                <label htmlFor="fathername" className={`form-label text-${fgcolor}`}>Father Names</label>
                <input style={{ backgroundColor: 'transparent' }} type="text" className="form-control" id="fathername" name='fathername' value={credintial.fathername} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="fathermobile" className={`form-label text-${fgcolor}`}>Father Mobile No</label>
                <input style={{ backgroundColor: 'transparent' }} type="number" className="form-control" value={credintial.fathermobile} id="fathermobile" name='fathermobile' onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="mothername" className={`form-label text-${fgcolor}`}>Mother Name</label>
                <input style={{ backgroundColor: 'transparent' }} type="text" className="form-control" id="mothername" name='mothername' value={credintial.mothername} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="mothermobile" className={`form-label text-${fgcolor}`}>Mother Mobile No</label>
                <input style={{ backgroundColor: 'transparent' }} type="number" className="form-control" value={credintial.mothermobile} id="mothermobile" name='mothermobile' onChange={handleChange} />
              </div>

            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Studentsign
