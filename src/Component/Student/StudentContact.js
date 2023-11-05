import React from 'react'
// import userpic from "../image/user.png"
import emailpic from '../image/email.png'
import mobileno from '../image/phone.png'

const StudentContact = (props) => {
    const {info}=props
    return (
        <>
          <div><h5 style={{ position: "absolute", left: "31rem" }}>Contact Details</h5><br />
                                <p style={{ fontSize: "14px", marginBottom: " 0px", position: "absolute", left: "31rem", top: "13   rem" }}>Manage your personal information,including phone number and email address where you can be contacted.</p>
                                {/* <div className="container" style={{position:'absolute',left:'30.3rem'}}><h5  style={{position:"absolute"}}>Personal Information</h5> */}
                            </div><br />    
                            <div className="row">
                                <div className="card col my-3 mx-1" style={{ width: "18rem", height: '7rem' }}>
                                    <div className="card-body">
                                        <img src={mobileno} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                        <h4 className="card-title" style={{ position: "absolute" }}>Contact No</h4><br /><br />
                                        <p className="card-text">{info.mobile}</p>
                                    </div>
                                </div>
                                <div className="card col my-3 mx-1" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <img src={emailpic} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                        <h4 className="card-title" style={{ position: "absolute" }}>Email Address</h4><br /><br />
                                        <p className="card-text">{info.email}</p>
                                    </div>
                                </div>
                            </div> 
        </>
      )
}

export default StudentContact
