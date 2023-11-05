import React, { useContext } from 'react'

import fatherpic from '../image/father.png'
import motherpic from '../image/mother.png'
import contactno from '../image/phone.png'
import dfather from '../image/dfather.png'
import dmother from '../image/dmother.png'
import dmobile from '../image/dphone.png'
import AttendancenSApi from '../../ContextAPi/AttendanceSApi'
const Familydetails = (props) => {
    const { info } = props
    const context = useContext(AttendancenSApi)
    const { fgcolor, dbgcolor } = context
    return (
        <>
            <div><h5 className={`text-${fgcolor}`} style={{ position: "absolute", left: "31rem" }}>Family Details</h5><br />
                <p className={`text-${fgcolor}`} style={{ fontSize: "14px", marginBottom: " 0px", position: "absolute", left: "31rem", top: "13rem" }}>Manage your personal information,including phone number and email address where you can be contacted.</p>
                {/* <div className="container" style={{position:'absolute',left:'30.3rem'}}><h5  style={{position:"absolute"}}>Personal Information</h5> */}
            </div><br />
            <div className="row">
                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem", height: '7rem' }}>
                    <div className="card-body">
                        {fgcolor==='white'?<img src={dfather} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />:<img src={fatherpic} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />}
                        <h4 className={`card-title text-${fgcolor}`} style={{ position: "absolute" }}> Father Name</h4><br /><br />
                        <p className={`card-text text-${fgcolor}`}>{info.fathername}</p>
                    </div>
                </div>
                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem" }}>
                    <div className="card-body">
                        {fgcolor==='white'?<img src={dmother} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />:<img src={motherpic} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />}
                        <h4 className={`card-title text-${fgcolor}`} style={{ position: "absolute" }}>Mother Name</h4><br /><br />
                        <p className={`card-text text-${fgcolor}`}>{info.mothername}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem", height: '7rem' }}>
                    <div className="card-body">
                        {fgcolor==='white'?<img src={dmobile} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />:<img src={contactno} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />}
                        <h4 className={`card-title text-${fgcolor}`} style={{ position: "absolute" }}>Father Coontact No.</h4><br /><br />
                        <p className={`card-text text-${fgcolor}`}>{info.fathermobile}</p>
                    </div>
                </div>
                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem" }}>
                    <div className="card-body">
                        {fgcolor==='white'?<img src={dmobile} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />:<img src={contactno} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />}
                        <h4 className={`card-title text-${fgcolor}`} style={{ position: "absolute" }}>Mother Coontact No.</h4><br /><br />
                        <p className={`card-text text-${fgcolor}`}>{info.mothermobile}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Familydetails
