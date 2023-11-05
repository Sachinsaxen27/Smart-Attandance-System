import React,{useRef, useState} from 'react'

const Filters = (props) => {
  const fromRef=useRef(null)
  const {handelsubmit}=props
  const [cred, setMycred] = useState({ year: "", branch: "", course: "" })
  const handleChange = (e) => {
    setMycred({ ...cred, [e.target.name]: e.target.value })

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handelsubmit(cred)
    // console.log(`Selected year: ${cred.year}, selected branch: ${cred.branch},Selected Course:${cred.course}`);
  };
  const handelreset=(e)=>{
    e.preventDefault()
    fromRef.current.reset()
    setMycred({ year: "", branch: "", course: "" })
    handelsubmit(cred)
  }

  return (
    <>
          <form ref={fromRef} onSubmit={handleSubmit}>
        <div className="d-flex justify-content-evenly">
          <div className='p-2 '>
            <h6>Course Year</h6>
            <div>
              <input type="radio" id="year" name="year" value="1st" checked={cred.year === "1st"} onChange={handleChange} />
              <label htmlFor="year">1</label>
            </div>
            <div>
              <input type="radio" id="year2" name="year" value="2nd" checked={cred.year === "2nd"} onChange={handleChange} />
              <label htmlFor="year2">2</label>
            </div>
            <div>
              <input type="radio" id="year3" name="year" value="3rd" checked={cred.year === "3rd"} onChange={handleChange} />
              <label htmlFor="year3">3</label>
            </div>
            <div>
              <input type="radio" id="year4" name="year" value="4th" checked={cred.year === "4th"} onChange={handleChange} />
              <label htmlFor="year4">4</label>
            </div>
          </div>
          <div className='p-2'>
            <h6>Course Branch</h6>
            <div>
              <input type="radio" id="branch1" name="branch" value="CSE" checked={cred.branch === "CSE"} onChange={handleChange} />
              <label htmlFor="branch1">Computer Science Engineering</label>
            </div>
            <div>
              <input type="radio" id="branch2" name="branch" value="EC" checked={cred.branch === "EC"} onChange={handleChange} />
              <label htmlFor="branch2">Electronics and Communication</label>
            </div>
            <div>
              <input type="radio" id="branch3" name="branch" value="ME" checked={cred.branch === "ME"} onChange={handleChange} />
              <label htmlFor="branch3">Mechanical Engineering</label>
            </div>
            <div>
              <input type="radio" id="branch4" name="branch" value="CE" checked={cred.branch === "CE"} onChange={handleChange} />
              <label htmlFor="branch4">Civil Engineering</label>
            </div>
            <div>
              <input type="radio" id="branch5" name="branch" value="HR" checked={cred.branch === "HR"} onChange={handleChange} />
              <label htmlFor="branch5">HR</label>
            </div>
            <div>
              <input type="radio" id="branch6" name="branch" value="Finance" checked={cred.branch === "Finance"} onChange={handleChange} />
              <label htmlFor="branch6">Finance</label>
            </div>
          </div>
          <div className='p-2'>
            <h6>Course</h6>
            <div>
              <input type="radio" id="coursePolytechnic" name="course" value="Polytechnic" checked={cred.course === "Polytechnic"} onChange={handleChange} />
              <label htmlFor="coursePolytechnic">Polytechnic</label>
            </div>
            <div>
              <input type="radio" id="courseBtech" name="course" value="Btech" checked={cred.course === "Btech"} onChange={handleChange} />
              <label htmlFor="courseBtech">B.Tech</label>
            </div>
            <div>
              <input type="radio" id="courseMBA" name="course" value="MBA" checked={cred.course === "MBA"} onChange={handleChange} />
              <label htmlFor="courseMBA">MBA</label>
            </div>
          </div>
        </div>
        <button type="reset" style={{ position: 'absolute', left: '65rem',top:'19rem' }} onClick={handelreset}>Reset</button>
        <button type="submit" style={{ position: 'absolute', left: '70rem',top:'19rem' }} >Submit</button>
      </form>
    </>
  )
}

export default Filters
