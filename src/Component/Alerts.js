import React, { useContext} from 'react'
import AttendancenSApi from '../ContextAPi/AttendanceSApi'

const Alerts = (props) => {
  const context=useContext(AttendancenSApi)
  const {alert}=context

return (
  <div style={{height:"47px"}}>
      {alert.msg &&<div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert" style={{width:'27rem',left:'55rem',height: "3.4rem",top:'3rem',zIndex:1}}>
        {alert.msg} 
        </div>}
      </div>
)
  }
export default Alerts