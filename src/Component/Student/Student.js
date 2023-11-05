import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import loginimg from '../image/phishing.webp'
import '../Compne.css'
import AttendancenSApi from "../../ContextAPi/AttendanceSApi";
const Student = () => {
    const context=useContext(AttendancenSApi)
    const {showAlert ,dbgcolor}=context
    const [credintial, setMycredintial] = useState({ email: "", password: "" })
    let history = useNavigate()
    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/student/studentlogin', {
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
            showAlert("Login Successfully", 'success')
            history('/studentdata')
        }
        else {
            showAlert("Invalid Credenital", 'danger')
            history('/student')
        }
    }
    const handleChange = (e) => {
        setMycredintial({ ...credintial, [e.target.name]: e.target.value })
    }
    const Handleclick=()=>{
        showAlert("Enter Your Roll Number as email or password is your Date of Birth",'info')
    }
    // const myArray = JSON.parse(localStorage.getItem('data'));
    // console.log("This is Local",myArray.name)
    return (
        <>
            <div className={`container text-center bg-${dbgcolor}`} style={{ width: "63rem",borderRadius:'29px' }}>
                <div className="row" style={{ height: "31.25rem" }}>
                    <div className="col-6">
                        <img src={loginimg} alt="login" style={{ width: "470px", height: "470px", position: "absolute", left: '13.2rem',top:'8.7rem',borderRadius:'28px' }} />
                    </div>
                    <div className="col-6">

                        <form className='container my-5 ' >
    
                                <div className="card" style={{ width: "18rem", left: '72px', top: "88px" }}>
                                    <div className="card-header text-end">
                                        <h6 id="loginheader" onClick={Handleclick} style={{cursor:"pointer"}}>Need help ?</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <input type="email" className="form-control" value={credintial.email} id="email" name='email' aria-describedby="emailHelp" onChange={handleChange} placeholder="Username/RollNo"/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" id="password" name='password' value={credintial.password} onChange={handleChange} placeholder="*****"/>
                                        </div>
                                        <button type="submit" className="btn btn-dark" onClick={handlesubmit}>Login</button>
                                    </div>
                                </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Student
