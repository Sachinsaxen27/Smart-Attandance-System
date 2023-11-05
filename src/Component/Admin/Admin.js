import { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import AttendancenSApi from "../../ContextAPi/AttendanceSApi";
import adminlogin from '../image/adminlogin.jpg'
import '../Compne.css'
const Admin = () => {
    const context = useContext(AttendancenSApi)
    const { dbgcolor,  showAlert } = context
    const [credintial, setMycredintial] = useState({ email: "", password: "" })
    let history = useNavigate()
    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/user/adminlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credintial.email, password: credintial.password })
        });
        const json = await response.json()
        // console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            // console.log("Login Successfully", 'success')
            showAlert("Login Successfully", 'success')
            history('/admindata')
        }
        else {
            // console.log("Invalid Credenital", 'danger')
            showAlert("Invalid Credenital", 'danger')
            history('/admin')
        }
    }
    const handleChange = (e) => {
        setMycredintial({ ...credintial, [e.target.name]: e.target.value })
    }
    const Handleclick=()=>{
        showAlert("Enter Your Roll Number as email or password is your Date of Birth",'info')
    }
    return (
<div className={`container text-center bg-${dbgcolor}`} style={{ width: "63rem",borderRadius:"26px"}}>
                    <div className="row" style={{ height: "31.25rem" }}>
                    <div className="col-6">
                        <img src={adminlogin} alt="login" style={{ width: "470px", height: "470px", position: "absolute", left: '13rem',borderRadius:"25px",top:'8.5rem' }} />
                    </div>
                    <div className="col-6">
                        <form className='container my-5 ' >
    
                                <div className="card" style={{ width: "18rem", left: '72px', top: "70px" }}>
                                    <div className="card-header text-end">
                                        <h6 id="loginheader" onClick={Handleclick} style={{cursor:"pointer"}}>Need help ?</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-3">
                                        <input type="email" className="form-control" value={credintial.email} id="email" name='email' aria-describedby="emailHelp" onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="password" name='password' value={credintial.password} onChange={handleChange} />
                                    </div>
                                    <p style={{fontSize:'12px'}}>Don't Have an account then click on <Link className={` text-${dbgcolor}`} to="/adminsignup">Sign Up</Link> Here</p>
                                    <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Login</button>
                                    </div>
                                </div>
                            
                        </form>
                    </div>
                </div>
            </div>
    )
}
export default Admin
