import React, { useEffect,useState } from 'react'
import AttendanceTable from './AttendanceTable';
import Filters from './Filters';

const Attendancelist = () => {
  const [attendancelist, setMyAlist] = useState([])
  const[dates,setMydates]=useState(null)
  const[texts,setMytext]=useState(null)
  const [datas,setMydatas]=useState(null)

  const getinfo = async () => {
    const response = await fetch("http://localhost:5000/api/attendance/attendancelist", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json()
    setMyAlist(json)
  }
    const getinfo2 = async () => {
      const response = await fetch(`http://localhost:5000/api/attendance/datelist/${dates}T00:00:00.000Z`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json()
      // console.log(json.length)
      setMyAlist(json)
    }
    const getinfo3 = async () => {
      const response = await fetch(`http://localhost:5000/api/attendance/filterattendance/${datas?.course}/${datas?.year}/${datas?.branch}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json()
      // console.log(json.length)
      setMyAlist(json)
    }

  useEffect(() => {
    if(dates===null && datas===null){
      getinfo()
    }
    if(dates!==null){
      getinfo2() 
    }
    if(attendancelist.length===0 && dates!==null){
      setMytext("No Attendance For This Date")
    }else{
      setMytext(null)
    }
    // eslint-disable-next-line
  }, [dates,attendancelist.length])
  
  const [imag, setMyimag] = useState("fa-solid fa-arrow-down")
  const handeldown = () => { 
    var content = document.getElementById('dropdowncontents')
    if (content.style.display === 'none') {
      content.style.display = 'block';
      setMyimag("fa-sharp fa-solid fa-arrow-up")
    }
    else {
      content.style.display = 'none';
      setMyimag("fa-sharp fa-solid fa-arrow-down")
    }
  }
  const handelchange=(e)=>{
    setMydates(e.target.value)
  }
  const handelsubmit=(data)=>{
    setMydatas(data)
  }
  // console.log(datas)
  useEffect(()=>{
    if(datas!==null){
      getinfo3()
    }
    // eslint-disable-next-line
  },[datas])
  return (
    <>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button" onClick={handeldown}>Filter <i className={imag}></i></button>
      </div>
      <div id='dropdowncontents' style={{ display: 'none' }}>
        <Filters handelsubmit={handelsubmit} />
      </div>
      <div style={{position:'absolute',right:'8rem'}}>
      <input type="date" name="date" id="date" value={dates || ''} onChange={handelchange}/>
      </div>
      <div className="container">
        <table className="table table-dark table-striped my-5">
          <thead>
            <tr>
              <th scope="col">SN#</th>
              <th scope="col">Name</th>
              <th scope="col">Roll No.</th>
              <th scope="col">Course</th>
              <th scope="col">Year</th>
              <th scope="col">Branch</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {attendancelist.map((attend, index) => {
              return <tr key={index}>
                <AttendanceTable attend={attend} index={index} />
              </tr>
            })}
          </tbody>
        </table>
      </div>
      {texts!==null && <h3 style={{position:"absolute",left:'31rem'}}>{texts}</h3>}
    </>
  )
}

export default Attendancelist
