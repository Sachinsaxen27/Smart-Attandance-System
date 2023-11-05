import React, { useContext } from 'react'
import './Compne.css'
import leftarr from './image/left.png'
import rightarr from './image/right.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AttendancenSApi from '../ContextAPi/AttendanceSApi'
import Alert from './Alerts.js'
const Navbar = (props) => {
    const context = useContext(AttendancenSApi)
    const { ModeChange, bgcolor, images, showAlert, butn, darkimg,Navimage } = context
    let location = useLocation()
    let history = useNavigate()
    const handledown = () => {
        var content = document.getElementById('dropdowncontent')
        if (content.style.display === 'none') {
            content.style.display = 'block';
        }
        // else {
        //     content.style.display = 'none';
        // }
        setTimeout(() => {
            content.style.display = 'none';
        },3000);
    }
    const handlelogout = () => {
        localStorage.clear();
        document.getElementById('dropdowncontent').style.display = 'none';
        showAlert('Logout Successfully', 'success')
        history('/')
    }
    const handleBack = () => {
        if (location.pathname === '/admindata' || location.pathname === '/studentdata') {

        }
        else {
            history(-1)
        }
    }
    const handleforword = () => {
        history(+1)

    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${bgcolor} bg-${bgcolor}`}>
                <div className="container-fluid">
                    <img src={Navimage} alt="NavImage" style={{height:"50px "}} />
                    <Link className="navbar-brand">Attendance</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {location.pathname === '/' && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/more">Future Scope Object</Link>
                            </li>
                        </ul>}
                    </div>

                    {(localStorage.getItem('token')) && <img src={images} alt="" style={{ height: "20px", width: "22px", position: "absolute", right: "150px", cursor: "pointer" }} onClick={handledown} />}
                    <div id="dropdowncontent" style={{ display: 'none', backgroundColor: 'white', position: "absolute", left: " 75rem" ,width:"50px"}} role='button' onClick={handlelogout}><li>Logout</li></div>
                </div>
                <div className='form-check form-switch mx-2' style={{ position: 'absolute', left: '68rem' }}>
                    <button className={`bg-${bgcolor}`} onClick={ModeChange} style={{ border: 'none' }}>< i className={darkimg.text} style={{ color: darkimg.type }} /></button>
                </div>
            </nav>
            <div className="d-flex mb-3">
                <button disabled={location.pathname === '/'} display={null} onClick={handleBack} className={`p-2 bg-${butn}`} style={{ border: 'none', backgroundColor: 'grey' }}><img src={leftarr} alt='Back' style={{ height: '2rem' }} /></button>
                <Alert />
                <button onClick={handleforword} className={`ms-auto p-2 bg-${butn}`} style={{ border: 'none', backgroundColor: 'grey' }}><img src={rightarr} alt='Back' style={{ height: '2rem' }} /></button>
            </div>
        </>
    )
}

export default Navbar
