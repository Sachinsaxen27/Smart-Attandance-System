import React, { useContext } from 'react'
import userpic from "../image/user.png"
import birthdate from '../image/date.png'
import Genders from '../image/gender.png'
import AttendancenSApi from '../../ContextAPi/AttendanceSApi'
import duserpic from '../image/dduser.png'
import dbirthdate from '../image/ddate.png'
import dgender from '../image/dgender.png'


const Basicdetails = (props) => {
    const context = useContext(AttendancenSApi)
    const { fgcolor, dbgcolor } = context
    const { info } = props
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    }
    // console.log('date',formatDate(`${info.dob}`))
    return (
        <>
            <div><h5 className={`text-${fgcolor}`} style={{ position: "absolute", left: "31rem" }}>Basic Details</h5><br />
                <p className={`text-${fgcolor}`} style={{ fontSize: "14px", marginBottom: " 0px", position: "absolute", left: "31rem", top: "14rem" }}>Manage your personal information,including phone number and email address where you can be contacted.</p>
            </div><br />
            <div className="row">
                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem", height: '7rem' }}>
                    <div className="card-body">
                        {fgcolor==='white'?<img src={duserpic} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />:<img src={userpic} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />}
                        <h4 className={`card-title  text-${fgcolor}`} style={{ position: "absolute" }}>Name</h4><br /><br />
                        <p className={`card-text  text-${fgcolor}`}>{info.name}</p>
                    </div>
                </div>
                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem" }}>
                    <div className="card-body">
                        {fgcolor==="white"?<img src={dbirthdate} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />:<img src={birthdate} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />}
                        <h4 className={`card-title  text-${fgcolor}`} style={{ position: "absolute" }}>Date of Birth</h4><br /><br />
                        <p className={`card-text  text-${fgcolor}`}>{formatDate(`${info.dob}`)}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem", height: '7rem' }}>
                    <div className="card-body">
                        {fgcolor==='white'?<img src={dgender} alt="" style={{ height: '23px', position: "absolute", left: "44rem" }} />:<img src={Genders} alt="" style={{ height: '23px', position: "absolute", left: "44rem" }} />}
                        <h4 className={`card-title  text-${fgcolor}`} style={{ position: "absolute" }}>Gender</h4><br /><br />
                        <p className={`card-text  text-${fgcolor}`}>{info.gender}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basicdetails
