import React, { useEffect, useState } from 'react' 

const AdminList = () => {
    const initiallist=[]
    const [Admin,setMyAdmin]=useState(initiallist)
    const getinfo = async () => {
        const response = await fetch("http://localhost:5000/api/user/adminlist", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await response.json()
        setMyAdmin(json)
      }
    useEffect(()=>{
        getinfo()
        // eslint-disable-next-line 
    },[])
    const handeldelete= async(id)=>{
      const response=await fetch(`http://localhost:5000/api/user/admindelete/${id}`,{
        method:"DELETE",
        headers:{
        'Content-Type': 'application/json'
        }
      })
      const json=await response.json()
      // console.log(json)
      setMyAdmin(prevAdmins => prevAdmins.filter(admin => admin._id !== id));
    }
  return (
    <>
    <div className="container">
    <table className="table table-dark table-striped my-5">
  <thead>
    <tr>
      <th scope="col">SN#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact No.</th>
      {/* <th scope="col">Course</th>
      <th scope="col">Branch</th>
      <th scope="col" style={{position: "absolute",left: "49rem",width: "306px", textAlign: "center"}}>Year</th> */}
      <th scope="col">Update</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
    
      {Admin.map((Admins,index)=>{
         return <tr key={index}>
            <td>{index+1}</td>
            <td>{Admins.name}</td>
            <td>{Admins.email}</td>
            <td>{Admins.mobile}</td>
            {/* <td>{Admins.currentedu}</td>
            <td>{Admins.currentyear}</td>
            <td>{Admins.stdbranch}</td> */}
            <td  ><i className="fa-solid fa-pen-to-square" id='imagess'style={{cursor:"pointer"}} ></i></td>
            <td  ><i className="fa-solid fa-trash"  id='imagess'style={{cursor:"pointer"}} onClick={()=>{return handeldelete(Admins._id)}} ></i></td>
          </tr>
        })}
    </tbody>    
</table>
</div>
    </>
  )
}

export default AdminList
