import React, {useEffect, useState,useRef } from 'react';
import { QrReader } from "react-qr-reader";
import Modal from "react-modal";
Modal.setAppElement("#root");
const Camera = (props) => {
  const [scanResult, setScanResult] = useState({text:"No Result"});
  const qrReaderRef = useRef(null);

  const [student, setMystudents]=useState([])
  const handleScan = (data) => {
    if (data) {
      setScanResult({text: data.text});
      if(data?.text !== 'No Result'){
        getinfo(data.text);
      }
    }
  };
  const getinfo = async (data) => {
    console.log("scanresult",data)
    try{
      const response = await fetch(`http://localhost:5000/api/student/findstudent/:${data}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },  
      });
      const json = await response.json()
      localStorage.setItem('data',JSON.stringify(json))
      console.log(localStorage.getItem('data'))
      setMystudents(json)
    //   console.log(json)
    }catch (error){
      console.log("error", error)
    }
  }
  const handleError = (error) => {
    console.error(error);
  };
  
//   const stopCamera = async () => {
//     // qrReaderRef.current?.stop();
//     // histroy(-1)

    // const stream = await navigator.mediaDevices.getUserMedia({
    //   audio: false,
    //   video: true,
    // });

//     stream.getTracks().forEach(function (track) {
//         track.stop();
//         track.enabled = false;
//     });
//     qrReaderRef.current.stopCamera()
//   };
  
  return (
    <>
    {/* scanResult.text === 'No Result' &&  */}
        <div style={{ height: '35rem', width: "40rem", left: "23rem", position: "absolute", overflowY: "hidden" ,top:'2rem'}}>
         <QrReader
            ref={qrReaderRef}
            onError={handleError}
            onResult={handleScan}
            style={{ width: '100%' }}
          />
        </div>
        <button>Turn Off Scanner</button>
      
      {scanResult && <p>Scan result:{JSON.stringify(scanResult.text)}</p>}
    </>
  );
};
export default Camera;
// import { QrReader } from "react-qr-reader";
// import { useLocation } from 'react-router-dom';
// import React, { useState } from 'react';

// const Camera =()=>{
//   // location=useLocation()
//   const[scanResult,setScanResult]=useState({text:'No Result'})

//   const handleScan = (data) => {
//     if (data) {
//       setScanResult({text:data.text})
//       console.log(scanResult.text)
//     }
//     if(scanResult.text){
//       getinfo(scanResult.text);
//       console.log("sdsad",scanResult.text);
//     }
//   };
//   const getinfo = async (data) => {
//     console.log("scanresult",data)
//     try{
//       const response = await fetch(`http://localhost:5000/api/student/findstudent/:${data}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },  
//       });
//       const json = await response.json()
//       localStorage.setItem('data',JSON.stringify(json))
//       console.log(json)
//     }catch (error){
//       console.log("error", error)
//     }
    
//   }

//   const handleClose = () => {
//     window.location.href = 'http://localhost:3000';
//     window.location.reload();
//   }
//   const handleError = (error) => {
//     console.error(error);
//   };
//    return(
//     <div>
//       <p>asdfsdf:{scanResult.text}</p>
//       <div style={{ height: '35rem', width: "40rem", left: "23rem", position: "absolute", overflowY: "hidden" ,top:'2rem'}}>
//           {<QrReader
//             onError={handleError}
//             onResult={handleScan}
//             style={{ width: '100%' }}
//           />}
//         </div>
//         <button onClick={handleClose}>Turn Off Scanner</button>
      
//     </div>
//     )
//   }

// export default Camera