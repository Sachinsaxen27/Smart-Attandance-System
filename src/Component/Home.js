import React,{useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import graduate from './image/graduate.png'
import admin from './image/management.png'
import whitemang from './image/whitemang.png'
import dgraduate from './image/dgraduate.png'
import dcamera from './image/dcamera.png'
import wcamera from './image/wcamera.png'
import AttendancenSApi from '../ContextAPi/AttendanceSApi'
const Home = (props) => {
    const context =useContext(AttendancenSApi)
    const{bgcolor,fgcolor,dbgcolor}=context
  // console.log('dsds',Date().toLocaleDateString())
    let history=useNavigate()
    const handleclickadmin=()=>{
        history('./admin')

    }
    const handleclickstudent=()=>{
        history('/student')
    }
    const handleclickcamera=()=>{
    // window.open('/camera')
    history('/camera')
    }
    
    useEffect(()=>{
        // console.log('ues')
        if(localStorage.getItem('token')){
            history('/admindata')
        }else if(localStorage.getItem('student')){
            let student = JSON.parse(localStorage.getItem('student'))
            // console.log(student);
        }
           // eslint-disable-next-line
      },[])
    //   console.log(dbgcolor)
  return (
    <>
    <div  className="row my-5">
       
            <div className={`card mx-5 bg-${dbgcolor} `} style={{height:'14rem',cursor:'pointer',position:'absolute',top:'11rem',left:'6.5rem',width: "16rem"}} onClick={handleclickadmin}>
                {bgcolor==='dark'?<img src={whitemang} alt="user" style={{position: "absolute",height: "5rem",width: "6rem",left: "85px",top: "33px"}} />:<img src={admin} alt="user" style={{position: "absolute",height: "5rem",width: "6rem",left: "85px",top: "33px"}} />}
                    <div className="card-body" >
                        <h5 className={`card-title text-${fgcolor}`} style={{top: "115px",position: "absolute",left:"80px"}}>My Profile</h5>
                        <p className={`card-text text-${fgcolor}`} style={{top: "140px",position: "absolute",left:"19px",fontSize:'14px'}}>Click here to view/edit your Profile.</p>
                    </div>
                   
            </div>
            <div className={`card mx-5 bg-${dbgcolor}`}   style={{height:'14rem',cursor:'pointer',position:'absolute',top:'11rem',left:'31.8rem',width: "16rem"}}  onClick={handleclickstudent}>
            {bgcolor==='dark'?<img src={dgraduate} alt="user" style={{position: "absolute",height: "75px",width: "80px",left: "94px",top: "33px"}} />:<img src={graduate} alt="user" style={{position: "absolute",height: "75px",width: "80px",left: "94px",top: "33px"}} />}
                    <div className="card-body" >
                        <h5 className={`card-title text-${fgcolor}`}  style={{top: "115px",position: "absolute",left:"70px"}}>Student Login</h5>
                        <p className={`card-text text-${fgcolor}`} style={{top: "140px",position: "absolute",left:"52px",fontSize:'14px'}}>Create New User Account</p>
                    </div>
            </div>
            <div className={`card mx-5 bg-${dbgcolor} `}  style={{height:'14rem',cursor:'pointer',position:'absolute',top:'11rem',left:'57rem',width: "16rem" }}  onClick={handleclickcamera}>
                {bgcolor==='dark'?<img src={dcamera}  alt="checklist" style={{position: "absolute",height: "93px",width: "100px",left: "72px",top: "25px"}} />:<img src={wcamera}  alt="checklist" style={{position: "absolute",height: "70px",width: "76px",left: "84px",top: "40px"}}/>}
                    <div className="card-body">
                        <h5 className={`card-title text-${fgcolor}`} style={{top: "115px",position: "absolute",left:"75px"}}>Attendance</h5>
                        <p className={`card-text text-${fgcolor}`} style={{top: "140px",position: "absolute",left:"32px",fontSize:'14px'}}>To Check all Student Attendance</p>
                    </div>
            </div>
        </div>
        {/* bg-${dbgcolor} */}
    </>
  )
}
// absolute
export default Home
