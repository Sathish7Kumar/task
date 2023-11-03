import React from 'react'
import { CourseData } from './CourseData'
import { StudentData } from './StudentData'

const AdminPage = () => {


    return (
        <>
            <h2>Admin Dashboard</h2>
            <div className=''>
                <div>
                <h2>Course - DB</h2>
                    <button>Add Course</button>
                    <button>Edit Course</button>
                    <h3>Course Details</h3>
                    {
                        CourseData.map((e, i) => {
                            return (
                                    <div key={i}>
                                        <p>{e.courseName} , assigned to {e.assignedTo} <button>Completed</button></p>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className=''>
                <div>
                    <h2>Student - DB</h2>
                    <button>Add Student</button>
                    <button>Edit Student</button>
                    <h3>Students Detail</h3>
                    {
                        StudentData.map((e, i) => {
                            return (
                                <div key={i}>
                                    <p>Name : {e.name} , Age : {e.age} , Course-Enrolled : {e.course} ,  Location : {e.area}  </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AdminPage