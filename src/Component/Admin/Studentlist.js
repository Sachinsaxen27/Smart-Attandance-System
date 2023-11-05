import React, { useEffect, useRef, useState } from 'react'
import Tablelist from './Tablelist'
import QRCode from 'qrcode.react';
import { useContext } from 'react';
import AttendancenSApi from '../../ContextAPi/AttendanceSApi';
const Studentlist = () => {
  const initiallist = []
  const qref = useRef(null)
  const refcolse = useRef(null)
  const modalRef = useRef(null)
  const modalRefcolse = useRef(null)
  const [student, setMystudent] = useState(initiallist)
  const context=useContext(AttendancenSApi)
  const {showAlert}=context

  const getinfo = async () => {
    const response = await fetch("http://localhost:5000/api/user/detstudent", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json()
    setMystudent(json)
    // console.log(json)
  }
  useEffect(() => {
    getinfo()
    // eslint-disable-next-line 
  }, [])
  const handeldelete = async (id) => {
    // console.log("s00", id)
    if (window.confirm("Are you sure you want to delete this user?")){

      const response = await fetch(`http://localhost:5000/api/student/deletestudent/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await response.json()
    // console.log(json)
    showAlert(json,'success')
    setMystudent(prevstudent => prevstudent.filter(student => student._id !== id));
  } 
  }
  const handleUpdate = async (currentnote) => {
    // console.log("s", currentnote._id)
    }
  const [Myqrcode, setMyqrcode] = useState(null)
  const HandleQr = (mobile) => {
    qref.current.click()
    setMyqrcode(mobile)
    // console.log("QR", mobile)
  }
  const mydata = `${Myqrcode}`
  const [mYstudent, setMyStudents] = useState([])
  // console.log(typeof (mydata))
  const handeldownload = (studentdet) => {
    modalRef.current.click()
    setMyStudents(studentdet)
    // console.log("Download")
  }
  const closeModal1 = () => {
    refcolse.current.click()
  }
  const closeModal2 = () => {
    modalRefcolse.current.click()
  }
  return (
    <>
      <button ref={qref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <QRCode value={mydata} size={200} fgColor="#000000" bgColor="#ffffff" style={{ position: "relative", left: "9rem" }} />
            <div className="modal-footer">
              <button ref={refcolse} type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={closeModal1} >Close</button>
            </div>
          </div>
        </div>
      </div>
      <button ref={modalRef} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2">
      </button>
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="card" style={{ width: "18rem", border: 'none' }}>
              <img src={`${mYstudent.image}`} className="card-img-top" alt="..." style={{ height: "10rem", width: "10rem", padding: '12px' }} />
              <QRCode value={mydata} size={200} fgColor="#000000" bgColor="#ffffff" style={{ position: "absolute", left: "21rem", height: "10rem", width: "10rem" }} />
              <div className="card-body">
                <h5 className="card-title">{mYstudent.name}</h5>
                <p>{mYstudent.stdbranch}</p>
                <p>{mYstudent.currentedu}</p>
                <p>{mYstudent.currentyear}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={modalRefcolse} type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={closeModal2}>Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <table className="table table-dark table-striped my-5">
          <thead>
            <tr>
              <th scope="col">SN#</th>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Roll No.</th>
              <th scope="col">Course</th>
              <th scope="col">Branch</th>
              <th scope="col">Year</th>
              <th scope='col'>Update</th>
              <th scope="col">Delete</th>
              <th scope="col">Bar Code</th>
              <th scope="col">Download</th>

            </tr>
          </thead>
          <tbody>

            {student.map((students, index) => {
              return <tr key={index}>
                <Tablelist handleUpdate={handleUpdate} handeldelete={handeldelete} students={students} index={index} HandleQr={HandleQr} handeldownload={handeldownload} />
                {/* <Tablelist name={students.name}email={students.email}mobile={students.mobile}currentedu={students.currentedu}currentyear={students.currentyear}stdbranch={students.stdbranch} handleUpdate={handleUpdate} index={index}/> */}
              </tr>
            })} 
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Studentlist
