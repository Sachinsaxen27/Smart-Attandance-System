import React, { useContext, useEffect, useState } from 'react'
import Basicdetails from '../Admin/Basicdetails'
import Familydetails from '../Admin/Familydetails'
import Contactdetails from '../Admin/Contactdetails'
import Studenedu from './Studenedu'
import AttendancenSApi from '../../ContextAPi/AttendanceSApi'
const StudentInfo = (props) => {
    const context =useContext(AttendancenSApi)  
  const {fgcolor,dbgcolor}=context
  const [info, setMyinfo] = useState({})
  const getinfo = async () => {
    const response = await fetch("http://localhost:5000/api/student/getstudent", {
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
  const [page,setmyPage]=useState("")
    return (
        <>
            <div className="container"><h3 className={`text-${fgcolor}`}>My Profile</h3></div><br />
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className={`card bg-${dbgcolor}`} style={{ width: "18rem", border: "none" }}>
                            <img src={info.image} className="card-img-top" style={{ height: "11rem", width: "14rem", left: "20px", position: "inherit" ,padding: "12px" }} alt="User" />
                                <div className={`card-body bg-${dbgcolor}`} style={{ position: "inherit", left: "5px" }}>
                                    <h5 className={`card-title text-${fgcolor}`} style={{ position: "absolute" }} >{info.name}</h5><br />
                                    <p className={`card-text text-${fgcolor}`} style={{ position: "absolute" }}>{info.email}</p>
                                </div><br />
                            </div></div>
                        <div className="row">
                            <div className={`card bg-${dbgcolor}`} style={{ width: "18rem", border: "none" }} >
                                <div className={`card bg-${dbgcolor}`} id='vrmenu' style={{ border: "none", height: "2.5rem", cursor: "pointer" }} onClick={() => { return setmyPage("basicDetails") }} >
                                    <div className="card-body">
                                    <p className={`text-${fgcolor}`}>Basic Details</p>
                                    </div>
                                </div>
                                <div className={`card bg-${dbgcolor}`} id='vrmenu' style={{ border: "none", height: "2.5rem", cursor: "pointer" }} onClick={() => { return setmyPage('familydetails') }}>
                                    <div className="card-body">
                                    <p className={`text-${fgcolor}`}> Family Details</p>
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
                        {page==='familydetails'&&<Familydetails info={info} />}
                        {page==='contactdetails'&&<Contactdetails info={info}/>}
                        {page==="educationdetails" && <Studenedu info={info}/>}
                        {/* {page==='educationdetails'&&<Eduction  dbgcolor={dbgcolor} bgcolor={bgcolor} fgcolor={fgcolor} info={info} />} */}
                        {/* {info.map((info,index)=>{return <div className='col md-3' key={index}>  <Noteitem note={note} showalert={showalert} updatenotes={updatenotes}/></div>})} */}
                    </div>
                    {/* <div className="col-8" style={{ height: "calc(100vh - 9rem)", overflowY: "auto", overflowX: "hidden" }}>
                    {page==="basicDetails" && <StudentBasic info={info}/>}
                    {page==="familydetails" && <FamilyDetails info={info}/>}
                    {page==="contactdetails" && <StudentContact info={info}/>}
                    
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default StudentInfo
