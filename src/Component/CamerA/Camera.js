import React, {useState } from 'react';
import { QrReader } from "react-qr-reader";
import Modal from "react-modal";

Modal.setAppElement("#root");
const Camera = (props) => {
  const now = new Date();
  const DateTime = now.toLocaleDateString()
  const [scanResult, setScanResult] = useState({ text: "No Result" });
  // const qrReaderRef = useRef(null);
  let scancode = '';
  const [student, setMystudents] = useState([])
  const handleScan = (data) => {
    if (data) {
      setScanResult({ text: data.text });
      if (data?.text !== 'No Result' && data.text !== scancode) {
        scancode = data.text
        getinfo(data.text);
      }
    }
  };

  const getinfo = async (data) => {
    try {
      const response = await fetch(`http://localhost:5000/api/student/findstudent/${data}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json()
      if (json !== null) {
        ;
        setMystudents(json);
        localStorage.setItem('student', JSON.stringify(json));
        // if(student!==null){
        addatten(json, DateTime)
        // }

      } else {
        console.log('API returned null data');
      }
    }
    catch (error) {
      console.error("error", error)
    }
  }
  const addatten = async (data, formattedDate) => {
    try {
      const response = await fetch('http://localhost:5000/api/attendance/addattendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          currentedu: data.currentedu,
          currentyear: data.currentyear,
          stdbranch: data.stdbranch,
          rollnumber: scancode,
          date: formattedDate
        })
      });
      const json = await response.json()
      // console.log(json)
      // console.info("Attendance mark successfully");
      setTimeout(() => { handleClose(); }, 1500);
    } catch (error) {
      console.error(error)
    }
  }
  const handleError = (error) => {
    console.error(error);
  };
  const handleClose = () => {
    window.location.href = 'http://localhost:3000/';
  }
  console.log(scanResult)
  console.log(student)
  return (
    <>
      {/* scanResult.text === 'No Result' &&  */}
      <div style={{ height: '35rem', width: "40rem", left: "23rem", position: "absolute", overflowY: "hidden", top: '2rem' }}>
        <QrReader
          // ref={qrReaderRef}
          onError={handleError}
          onResult={handleScan}
          style={{ width: '100%' }}
        />
      </div>
      <button onClick={handleClose}>Turn Off Scanner</button>


      {/* {scanResult && <p>Scan result:{JSON.stringify(scanResult.text)}</p>} */}
    </>
  );
};
export default Camera;