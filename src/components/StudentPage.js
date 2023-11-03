import React from 'react'
import { CourseData } from './CourseData';
import { Link } from 'react-router-dom';
import { StudentData } from './StudentData';

const StudentPage = () => {
  return (
    <>
    <div className=''>
        <div>
            <h1>Student- Profile</h1>
            <p>Name :</p>
            <p>Age :</p>
            <p>Area :</p>
            <p>Course Enrolled :</p>
        </div>
        <div>
            <p>See all the course we offering : <Link to='/course'>Click here</Link></p>
            {/* <label>Add more courses : </label>
            <input type="text"  />
            <button>Add</button> */}
        </div>
    </div>
    </>
  )
}

export default StudentPage