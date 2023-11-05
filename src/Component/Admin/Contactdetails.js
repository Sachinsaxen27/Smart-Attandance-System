import React, { useContext } from 'react'
import userpic from "../image/user.png"
import emailpic from '../image/email.png'
import mobileno from '../image/phone.png'
import dmobile from '../image/dphone.png'
import demail from '../image/demail.png'
import duserpic from '../image/dduser.png'
import AttendancenSApi from '../../ContextAPi/AttendanceSApi'
const Contactdetails = (props) => {
    const context = useContext(AttendancenSApi)
    const { fgcolor, dbgcolor } = context
    const { info } = props
    return (
        <>
            <div><h5 className={`text-${fgcolor}`} style={{ position: "absolute", left: "31rem" }}>Contact Details</h5><br />
                <p className={`text-${fgcolor} fst-italic`} style={{ fontSize: "14px", marginBottom: " 0px", position: "absolute", left: "31rem", top: "14rem" }}>Manage your personal information,including phone number and email address where you can be contacted.</p>
            </div><br />
            <div className="row">
                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem", height: '7rem' }}>
                    <div className="card-body">
                        {fgcolor === 'white' ? <img src={dmobile} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} /> : <img src={mobileno} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />}
                        <h4 className={`card-title text-${fgcolor}`} style={{ position: "absolute" }}>Contact No</h4><br /><br />
                        <p className={`card-text  text-${fgcolor}`}>{info.mobile}</p>
                    </div>
                </div>
                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem" }}>
                    <div className="card-body">
                        {fgcolor === 'white' ? <img src={demail} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} /> : <img src={emailpic} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />}
                        <h4 className={`card-title text-${fgcolor}`} style={{ position: "absolute" }}>Email Address</h4><br /><br />
                        <p className={`card-text  text-${fgcolor}`}>Lorem, ipsum..</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem", height: '7rem' }}>
                    <div className="card-body">
                        {fgcolor==='white'?<img src={duserpic} alt="" style={{ height: '23px', position: "absolute", left: "43.8rem" }} />:<img src={userpic} alt="" style={{ height: '23px', position: "absolute", left: "43.8rem" }} />}
                        <h4 className={`card-title text-${fgcolor}`} style={{ position: "absolute" }}>Gender</h4><br /><br />
                        <p className={`card-text  text-${fgcolor}`}>Lorem, ipsum..</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactdetails
