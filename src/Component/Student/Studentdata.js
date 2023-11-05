import React, { useContext } from 'react'
import image from '../image/user-icon.png'
import duser from '../image/duser.png'
import checklist from '../image/checklist.png'
import '../Compne.css'
import { useNavigate } from 'react-router-dom'
import AttendancenSApi from '../../ContextAPi/AttendanceSApi'
const Studentdata = (props) => {    
    const context =useContext(AttendancenSApi)
    const {dbgcolor,fgcolor}=context
  let history= useNavigate()
  return (
    <div>
      <div className="row my-5">
            <div className={`card mx-5 bg-${dbgcolor} `} id="divhover" style={{height:'14rem',cursor:'pointer',position:'absolute',top:'11rem',left:'17.3rem',width: "16rem"}} onClick={()=>{return history('/studentinfo')}}>
                <img src={fgcolor==='white'?duser:image} alt="user" style={{position: "absolute",height: "4rem",width: "5rem",left: "85px",top: "2rem"}} />
                    <div className="card-body" >
                        <h5 className={`card-title text-${fgcolor}`} style={{top: "6rem",position: "absolute",left:"80px"}} >My Profile</h5>
                        <p className={`card-text text-${fgcolor}`} style={{top: "7.5rem",position: "absolute",left:"23px",fontSize:'14px'}} >Click here to view/edit your Profile.</p>
                    </div>
            </div>
            <div className={`card mx-5 bg-${dbgcolor} `}     id="divhover"  style={{height:'14rem',cursor:'pointer',position:'absolute',top:'11rem',left:'45.5rem',width: "16rem"}} onClick={()=>{return history('/checkStudnetA')}} >
                <img src={checklist}  alt="checklist" style={{position: "absolute",height: "4rem",width: "5rem",left: "90px",top: "2rem"}}/>
                    <div className="card-body">
                        <h5 className={`card-title text-${fgcolor}`} style={{top: "6rem",position: "absolute",left:"3.5rem"}}> Your Attendance</h5>
                        <p className={`card-text text-${fgcolor}`} style={{top: "7.5rem",position: "absolute",left:"15px"}}>To Check all Student Attendance</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Studentdata
