import React from 'react'
import userpic from "../image/user.png"
import birthdate from '../image/date.png'
import Genders from '../image/gender.png'

const StudentBasic = (props) => {
    const {info}=props
    // console.log("info.name",info)
    const  formatDate=(dateString)=> {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    }
    // console.log('date',formatDate(`${info.dob}`))
  return (
    <>
      <div><h5 style={{ position: "absolute", left: "31rem" }}>Basic Details</h5><br />
                            <p style={{ fontSize: "14px", marginBottom: " 0px", position: "absolute", left: "31rem", top: "13rem" }}>Manage your personal information,including phone number and email address where you can be contacted.</p>
                            {/* <div className="container" style={{position:'absolute',left:'30.3rem'}}><h5  style={{position:"absolute"}}>Personal Information</h5> */}
                        </div><br />
                        <div className="row">
                            <div className="card col my-3 mx-1" style={{ width: "18rem", height: '7rem' }}>
                                <div className="card-body">
                                    <img src={userpic} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                    <h4 className="card-title" style={{ position: "absolute" }}>Name</h4><br /><br />
                                    <p className="card-text">Lorem</p>
                                </div>
                            </div>
                            <div className="card col my-3 mx-1" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <img src={birthdate} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                    <h4 className="card-title" style={{ position: "absolute" }}>Date of Birth</h4><br /><br />
                                    <p className="card-text">{formatDate(`${info.dob}`)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card col my-3 mx-1" style={{ width: "18rem", height: '7rem' }}>
                                <div className="card-body">
                                    <img src={Genders} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                    <h4 className="card-title" style={{ position: "absolute" }}>Gender</h4><br /><br />
                                    <p className="card-text">{info.gender}</p>
                                </div>
                            </div>
                            <div className="card col my-3 mx-1" style={{ width: "18rem", border: 'none' }}>

                            </div>
                        </div>
    </>
  )
}

export default StudentBasic
