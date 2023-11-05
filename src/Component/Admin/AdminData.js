import React, { useContext } from 'react'
import image from '../image/user-icon.png'
import userimage from '../image/adduser.svg'
import checklist from '../image/checklist.png'
import stdlist from '../image/list.png'
import dimage from '../image/duser.png'
import duserimage from '../image/dadduser.png'
import dchecklist from '../image/dchecklist.png'
import dstdlist from '../image/dlist.png'
import '../Compne.css'
import { useNavigate } from 'react-router-dom'
import AttendancenSApi from '../../ContextAPi/AttendanceSApi'
const AdminData = () => {
    const context = useContext(AttendancenSApi)
    const { bgcolor, fgcolor, dbgcolor } = context
    let history = useNavigate()

    return (
        <>
            <div className="row my-5">
                <div className={`card mx-5 bg-${dbgcolor} `} id="divhover" style={{ height: '14rem', cursor: 'pointer', position: 'absolute', top: '9rem', left: '7.3rem', width: "16rem" }} onClick={() => { return history('/admininfo') }}>
                    {bgcolor === 'dark' ? <img src={dimage} alt="user" style={{ position: "absolute", height: "4rem", width: "5rem", left: "85px", top: "33px" }} /> : <img src={image} alt="user" style={{ position: "absolute", height: "4rem", width: "5rem", left: "85px", top: "2rem" }} />}
                    <div className="card-body" >
                        <h5 className={`card-title text-${fgcolor}`} style={{ top: "6rem", position: "absolute", left: "80px" }} >My Profile</h5>
                        <p className={`card-text text-${fgcolor}`} style={{ top: "7.5rem", position: "absolute", left: "23px", fontSize: '14px' }} >Click here to view/edit your Profile.</p>
                    </div>
                </div>
                <div className={`card mx-5 bg-${dbgcolor} `} id="divhover" style={{ height: '14rem', cursor: 'pointer', position: 'absolute', top: '9rem', left: '31.5rem', width: "16rem" }} onClick={() => { return history('/studentsingup') }}>
                    {bgcolor === 'dark' ? <img src={duserimage} alt="user" style={{ position: "absolute", height: '91px', width: '90px', left: '85px', top: '9px' }} /> : <img src={userimage} alt="user" style={{ position: "absolute", height: "4rem", width: "5rem", left: "94px", top: "2rem" }} />}
                    <div className="card-body" >
                        <h5 className={`card-title text-${fgcolor}`} style={{ top: "5.8rem", position: "absolute", left: "52px" }}>New Registration</h5>
                        <p className={`card-text text-${fgcolor}`} style={{ top: "7.5rem", position: "absolute", left: "37px" }}>Create New User Account</p>
                    </div>
                </div>
                <div className={`card mx-5 bg-${dbgcolor} `} id="divhover" style={{ height: '14rem', cursor: 'pointer', position: 'absolute', top: '9rem', left: '56rem', width: "16rem" }} onClick={()=>{return history("/Attendancelist")}}>
                    {bgcolor === 'dark' ? <img src={dchecklist} alt="checklist" style={{ position: "absolute", height: "4rem", width: "5rem", left: "90px", top: "2rem" }} /> : <img src={checklist} alt="checklist" style={{ position: "absolute", height: "4rem", width: "5rem", left: "90px", top: "2rem" }} />}
                    <div className="card-body">
                        <h5 className={`card-title text-${fgcolor}`} style={{ top: "6rem", position: "absolute", left: "5rem" }}>Attendance</h5>
                        <p className={`card-text text-${fgcolor}`} style={{ top: "7.5rem", position: "absolute", left: "15px" }}>To Check all Student Attendance</p>
                    </div>
                </div>
                <div className={`card mx-5 bg-${dbgcolor} `} id="divhover" style={{ height: '14rem', cursor: 'pointer', position: 'absolute', top: '24rem', left: '7.3rem', width: "16rem" }} onClick={() => { return history('/studlist') }}>
                    {bgcolor === 'dark' ? <img src={dstdlist} alt="checklist" style={{ position: "absolute", height: "4rem", width: "5rem", left: "90px", top: "2rem" }} /> : <img src={stdlist} alt="checklist" style={{ position: "absolute", height: "4rem", width: "5rem", left: "90px", top: "2rem" }} />}
                    <div className="card-body">
                        <h5 className={`card-title text-${fgcolor}`} style={{ top: "6rem", position: "absolute", left: "4.7rem" }}>Student Info</h5>
                        <p className={`card-text text-${fgcolor}`} style={{ top: "7.5rem", position: "absolute", left: "37px" }}>To Check all Student Entry</p>
                    </div>
                </div>
                <div className={`card mx-5 bg-${dbgcolor} `} id="divhover" style={{ height: '14rem', cursor: 'pointer', position: 'absolute', top: '24rem', left: '31.5rem', width: "16rem" }} onClick={() => { return history('/adminlist') }}>
                    {bgcolor === 'dark' ? <img src={dstdlist} alt="checklist" style={{ position: "absolute", height: "4rem", width: "5rem", left: "90px", top: "2rem" }} /> : <img src={stdlist} alt="checklist" style={{ position: "absolute", height: "4rem", width: "5rem", left: "90px", top: "2rem" }} />}
                    <div className="card-body">
                        <h5 className={`card-title text-${fgcolor}`} style={{ top: "6rem", position: "absolute", left: "4.9rem" }}>Admin List</h5>
                        <p className={`card-text text-${fgcolor}`} style={{ top: "7.5rem", position: "absolute", left: "41px" }}>To Check all Admin List</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminData