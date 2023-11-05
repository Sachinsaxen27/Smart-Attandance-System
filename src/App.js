import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Admin from "./Component/Admin/Admin";
import Student from "./Component/Student/Student";
// import Camera from './Component/CamerA/Camera';
import AdminData from "./Component/Admin/AdminData";
import AdminSignup from "./Component/Admin/AdminSignup";
import Studentsign from "./Component/Student/Studentsign";
import Studentdata from "./Component/Student/Studentdata";
import Admininfo from "./Component/Admin/Admininfo";
import StudentInfo from "./Component/Student/StudentInfo";
import Studentlist from "./Component/Admin/Studentlist";
import AdminList from "./Component/Admin/AdminList";
import More from "./Component/More";
import AttendanceState from "./ContextAPi/AttendanceState";
import Camera from "./Component/CamerA/Camera";
import Attendancelist from "./Component/Admin/AttendanceList.js";
import CheckAttendance from "./Component/Student/CheckAttendance";

function App() {
  return (
    <>
    <AttendanceState>
    <Router>
    <Navbar/>
    <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/more' element={<More/>}></Route>
          <Route exact path="/admin" element={<Admin/>}></Route> 
          <Route exact path="/student" element={<Student/>}></Route> 
          <Route exact path="/camera" element={ <Camera/>}></Route>
          <Route exact path="/admindata" element={<AdminData />}></Route>
          <Route exact path="/adminsignup" element={<AdminSignup />}></Route>
          <Route exact path="/studentsingup" element={<Studentsign/>}></Route>
          <Route exact path="/studentdata" element={<Studentdata/>}></Route>
          <Route exact path="/admininfo" element={<Admininfo/>}></Route>
          <Route excat path="/studentinfo" element={<StudentInfo/>}></Route>
          <Route exact path="/studlist" element={<Studentlist/>}></Route>
          <Route exact path="/adminlist" element={<AdminList/>}></Route>
          <Route exact path="/Attendancelist" element={<Attendancelist/>}></Route>
          <Route exact path="/checkStudnetA" element={<CheckAttendance/>}></Route>
    </Routes>
    </Router>
    </AttendanceState>
    </>
  );
}

export default App;
