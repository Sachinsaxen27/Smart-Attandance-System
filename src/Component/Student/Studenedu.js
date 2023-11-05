import React from 'react'
import { useContext } from 'react'
import AttendancenSApi from '../../ContextAPi/AttendanceSApi'


const Studenedu = (props) => {
    const {info}=props
    const context =useContext(AttendancenSApi)
    const {fgcolor,dbgcolor}=context
    return (
        <>
          <div style={{zIndex:1,position: "absolute",left: "30.7rem",backgroundColor:"ghostwhite"}}>
            <h5 className={`text-${fgcolor}`} style={{ position: "absolute", width:'10rem' }}>Eduction Details</h5><br />
            </div><br />
            <div className={`container  text-${fgcolor} fw-bold`} style={{backgroundColor:"transparent"}}>Current Education</div>
                            <div className="container">
                            <div className="row" >
                                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem", height: '7rem' }}>
                                    <div className="card-body">
                                        <h4 className={`card-title text-${fgcolor}`} style={{ position: "absolute" }}>Degree</h4><br /><br />
                                        <p className={`card-text text-${fgcolor}`}>{info.currentedu}</p>
                                    </div>
                                </div>
                                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h4 className={`card-title text-${fgcolor}`} style={{ position: "absolute" }}>Branch</h4><br /><br />
                                        <p className={`card-text text-${fgcolor}`}>{info.stdbranch}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className={`card col my-3 mx-1 bg-${dbgcolor}`} style={{ width: "18rem", height: '7rem' }}>
                                    <div className="card-body">
                                        <h4 className={`card-title text-${fgcolor}`} style={{ position: "absolute" }}>Year</h4><br /><br />
                                        <p className={`card-text text-${fgcolor}`}>{info.currentyear}</p>
                                    </div>
                                </div>
                                
                                {/* <div className="card col my-3 mx-1" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <img src={birthdate} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                        <h4 className="card-title" style={{ position: "absolute" }}>Date of Birth</h4><br /><br />
                                        <p className="card-text">Lorem, ipsum..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contain">HI</div>
                            <div className="row">
                                <div className="card col my-3 mx-1" style={{ width: "18rem", height: '7rem' }}>
                                    <div className="card-body">
                                        <img src={userpic} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                        <h4 className="card-title" style={{ position: "absolute" }}>Name</h4><br /><br />
                                        <p className="card-text">Lorem, ipsum..</p>
                                    </div>
                                </div>
                                <div className="card col my-3 mx-1" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <img src={birthdate} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                        <h4 className="card-title" style={{ position: "absolute" }}>Date of Birth</h4><br /><br />
                                        <p className="card-text">Lorem, ipsum..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="card col my-3 mx-1" style={{ width: "18rem", height: '7rem' }}>
                                    <div className="card-body">
                                        <img src={userpic} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                        <h4 className="card-title" style={{ position: "absolute" }}>Name</h4><br /><br />
                                        <p className="card-text">Lorem, ipsum..</p>
                                    </div>
                                </div>
                                <div className="card col my-3 mx-1" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <img src={birthdate} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                        <h4 className="card-title" style={{ position: "absolute" }}>Date of Birth</h4><br /><br />
                                        <p className="card-text">Lorem, ipsum..</p>
                                    </div>
                                </div> */}
                            </div>
                            </div>
                            
        </>
      )
}

export default Studenedu
