import React, { useContext, useEffect, useState } from 'react'
// import userpic from "./image/user.png"
import '../Compne.css'
import Basicdetails from './Basicdetails'
import Contactdetails from './Contactdetails'
import Eduction from './Eduction'
import AttendancenSApi from '../../ContextAPi/AttendanceSApi'
const Admininfo = () => {
    const context =useContext(AttendancenSApi)
    const{fgcolor,dbgcolor}=context
    const [page, setmyPage] = useState('basicDetails')
    // console.log(page)
    const [info, setMyinfo] = useState({})
  const getinfo = async () => {
    // console.log("Auth",localStorage.getItem('token'))
    const response = await fetch("http://localhost:5000/api/user/getadmin", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    // console.log(json)
    setMyinfo(json)
  }
  useEffect(() => {
    getinfo()
  }, [])
    return (
        <>
            <div className="container"><h3 className={` text-${fgcolor}`}>My Profile</h3></div><br />
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className={`card bg-${dbgcolor}`} style={{ width: "18rem", border: "none" }}>
                            <img src={info.image} className="card-img-top" style={{ height: "11rem", width: "14rem",top:'12px', left: "22px", position: "inherit" }} alt="User" />
                                <div className="card-body" style={{ position: "inherit", left: "27px" }}>
                                    <h5 className={`card-title text-${fgcolor}`} style={{ position: "absolute",left:'-6px'}} >{info.name}</h5><br />
                                    <p className={`card-text text-${fgcolor}`} style={{ position: "absolute" ,left:'-6px'}}>{info.email}</p>
                                </div><br />
                            </div></div>
                        <div className="row">
                            <div className={`card bg-${dbgcolor}`} style={{ width: "18rem", border: "none" }} >
                                <div className={`card bg-${dbgcolor}`} id='vrmenu' style={{ border: "none", height: "2.5rem", cursor: "pointer" }} onClick={() => { return setmyPage("basicDetails") }} >
                                    <div className="card-body">
                                        <p className={`text-${fgcolor}`}>Basic Details</p>
                                    </div>
                                </div>
                                <div className={`card bg-${dbgcolor}`} id='vrmenu' style={{ border: "none", height: "2.5rem", cursor: "pointer" }}>
                                    <div className="card-body">
                                       <p className={`text-${fgcolor}`}>Family Details</p> 
                                    </div>
                                </div> <div className={`card bg-${dbgcolor}`} id='vrmenu' style={{ border: "none", height: "2.5rem", cursor: "pointer" }} onClick={() => { return setmyPage('contactdetails') }}>
                                    <div className="card-body">
                                        <p className={`text-${fgcolor}`}>Contact Details</p>
                                    </div>
                                </div>
                                <div className={`card bg-${dbgcolor}`} id='vrmenu' style={{ border: "none", height: "2.5rem", cursor: "pointer" }} onClick={() => { return setmyPage('educationdetails') }}>
                                    <div className="card-body">
                                        <p className={`text-${fgcolor}`}>Eductiaon Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8" style={{ height: "calc(100vh - 9rem)", overflowY: "auto", overflowX: "hidden" }}>
                        {page==='basicDetails'&&<Basicdetails info={info} />}
                        {/* {page==='familydetails'&&<Familydetails  dbgcolor={dbgcolor} bgcolor={bgcolor} fgcolor={fgcolor} info={info} />} */}
                        {page==='contactdetails'&&<Contactdetails info={info}/>}
                        {/* {page==='educationdetails'&&<Eduction info={info} />} */}
                        {/* {info.map((info,index)=>{return <div className='col md-3' key={index}>  <Noteitem note={note} showalert={showalert} updatenotes={updatenotes}/></div>})} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admininfo
