import React from 'react'
import fatherpic from '../image/father.png'
import motherpic from '../image/mother.png'
import contactno from '../image/phone.png'
// import AttendancenSApi from '../../ContextAPi/AttendanceSApi'

const FamilyDetail = (props) => {

    // const context =useContext(AttendancenSApi)
    // const {ModeChange,bgcolor,images}=context
    const {info}=props
  return (
    <>
    <div><h5 style={{ position: "absolute", left: "31rem" }}>Family Details</h5><br />
                          <p style={{ fontSize: "14px", marginBottom: " 0px", position: "absolute", left: "31rem", top: "10rem" }}>Manage your personal information,including phone number and email address where you can be contacted.</p>
                          {/* <div className="container" style={{position:'absolute',left:'30.3rem'}}><h5  style={{position:"absolute"}}>Personal Information</h5> */}
                      </div><br />
                      <div className="row">
                          <div className="card col my-3 mx-1" style={{ width: "18rem", height: '7rem' }}>
                              <div className="card-body">
                                  <img src={fatherpic} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                  <h4 className="card-title" style={{ position: "absolute" }}> Father Name</h4><br /><br />
                                  <p className="card-text">{info.fathername}</p>
                              </div>
                          </div>
                          <div className="card col my-3 mx-1" style={{ width: "18rem" }}>
                              <div className="card-body">
                                  <img src={motherpic} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                  <h4 className="card-title" style={{ position: "absolute" }}>Mother Name</h4><br /><br />
                                  <p className="card-text">{info.mothername}</p>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="card col my-3 mx-1" style={{ width: "18rem", height: '7rem' }}>
                              <div className="card-body">
                                  <img src={contactno} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                  <h4 className="card-title" style={{ position: "absolute" }}>Father Contact No.</h4><br /><br />
                                  <p className="card-text">{info.fathermobile}</p>
                              </div>
                          </div>
                          <div className="card col my-3 mx-1" style={{ width: "18rem" }}>
                          <div className="card-body">
                                  <img src={contactno} alt="" style={{ height: '23px', position: "absolute", left: "20rem" }} />
                                  <h4 className="card-title" style={{ position: "absolute" }}>Mother Coontact No.</h4><br /><br />
                                  <p className="card-text">{info.mothermobile}</p>
                              </div>
                          </div>
                      </div>
  </>
  )
}

export default FamilyDetail
