import React,{ useState,useEffect } from 'react' 
import CheckTable from './CheckTable'

const CheckAttendance = () => {
    const [mylist,setMyAlist]=useState([])
    const [info, setMyinfo] = useState({})
    const getinfo = async () => {
        try{

            const response = await fetch("http://localhost:5000/api/student/getstudent", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
            });
            const json = await response.json()
            setMyinfo(json)
            //   console.log(json)
        }catch(error){
            console.error(error)
        }
    }
    const getinfo2 = async () => {
        const response = await fetch(`http://localhost:5000/api/student/getstudentA/${info.rollnumber}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setMyAlist(json)
    }
    useEffect(()=>{
        getinfo()
        // eslint-disable-next-line 
    },[])
    useEffect(()=>{
        if(info.rollnumber){
            getinfo2()
        }
        // eslint-disable-next-line 
    })
    // console.log(info.rollnumber)
    return (
        <>
        <div className="container">
        <table className="table table-dark table-striped my-5">
          <thead>
            <tr>
              <th scope="col">SN#</th>
              <th scope="col">Name</th>
              <th scope="col">Roll No.</th>
              <th scope="col">Course</th>
              <th scope="col">Branch</th>
              <th scope="col">Year</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>

            {mylist.map((students, index) => {
              return <tr key={index}>
                <CheckTable students={students} index={index}/>
              </tr>
            })} 
          </tbody>
        </table>
      </div>
        </>
    )
}

export default CheckAttendance
