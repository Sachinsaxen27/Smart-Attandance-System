import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AttendancenSApi from '../../ContextAPi/AttendanceSApi';
import '../Compne.css'


const AdminSignup = () => {
  const context=useContext(AttendancenSApi)
  const {fgcolor,dbgcolor,showAlert}=context
  const [credintial, setMycredintial] = useState({ name: "", email: "", address: "", mobile: "", dob: "", password: "",gender:""})
  const [image,setImage]=useState("")
  let history = useNavigate()
  const retrivedata=async()=>{
    const response = await fetch('http://localhost:5000/api/user/adminlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credintial.email, password: credintial.password })
        });
        const json = await response.json()
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            showAlert("Login Successfully", 'success')
            history('/admindata')
        }
        else {
            showAlert("Invalid Credenital", 'error')
            history('/admin')
        }
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/user/adminSingup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credintial.name, email: credintial.email, password: credintial.password, address:credintial.address, mobile: credintial.mobile, dob: credintial.dob,gender: credintial.gender, image:image })
    });
    const json = await response.json()
    if (json.success) {
      localStorage.setItem('token', json.authtoken)
      showAlert("Successfully Sign Up", "success")
      history('/admin')
    }
    
  }
  // history('/admindata')
  const handleChange = (e) => {
    setMycredintial({ ...credintial, [e.target.name]: e.target.value })
    
  }
  const convertobase64=(e)=>{
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
          setImage(reader.result)
    }
    reader.onerror = error => {
        showAlert("Error",'danger')
    }
  }
  useEffect(()=>{
    if(localStorage.getItem('token')){
      retrivedata()
    }
    // eslint-disable-next-line
  },[])
  return (
    <>
      <form className='container my-5'>
    <div className="container text-center">
      <h2 className={`text-${fgcolor} fw-bold`}>Teacher Sing-Up Form</h2>
    <div className="row">
    <div className="col-6 border border-dark" style={{width:"34.2rem",marginRight:"10px"}}>
        <h5 className={`text-${fgcolor} fw-semibold`}>Personal Details</h5>
        <div className="mb-3">
          <label htmlFor="image" className={`form-label text-${fgcolor} fw-semibold`}>Add Photo</label>
          <input className="form-control" type="file" id="image" name='image' onChange={convertobase64}/>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className={`form-label text-${fgcolor} fw-semibold`}>Full Name</label>
          <input type="text" className="form-control" value={credintial.name} id="name" name='name' onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className={`form-label text-${fgcolor} fw-semibold`}>Gender</label>
          <input type="text" className="form-control" value={credintial.gender} id="gender" name='gender' onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className={`form-label text-${fgcolor} fw-semibold`}>Date of Birth</label>
          <input type="date" className="form-control" value={credintial.dob} id="dob" name='dob' onChange={handleChange} />
        </div>
    </div>
    <div className="col-6 border border-dark" style={{width:"34.2rem",marginRight:"10px"}}>
      <h5 className={`text-${fgcolor} fw-semibold`}>Contact Details</h5>
        <div className="mb-3">
          <label htmlFor="mobile" className={`form-label text-${fgcolor} fw-semibold`}>Mobile No</label>
          <input type="number" className="form-control" value={credintial.mobile} id="mobile" name='mobile' onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className={`form-label text-${fgcolor} fw-semibold`}>Email address</label>
          <input type="email" className="form-control" value={credintial.email} id="email" name='email' aria-describedby="emailHelp" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className={`form-label text-${fgcolor} fw-semibold`}>Password</label>
          <input type="password" className="form-control" value={credintial.password} id="password" name='password' onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className={`form-label text-${fgcolor} fw-semibold`}>Address</label>
          <input type="text" className="form-control" value={credintial.address} id="address" name='address' onChange={handleChange} />
        </div>
    </div>
  </div>
        <button type="submit" className={`btn btn-${dbgcolor}`} onClick={handlesubmit} style={{position:'absolute',top:"36.55rem",right:"40.6rem"}}>Submit</button>
    </div>
      </form>
    </>
  )
}

export default AdminSignup

