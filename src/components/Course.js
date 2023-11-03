import React from 'react'
import { CourseData } from './CourseData'

const Course = () => {
  return (
    <>
    <div>
        <div>
            <h3>All Courses </h3>
                {
                 CourseData.map((e,i)=>{
                    return(
                        <ul key={i}>
                            <li>{e.courseName} <button>Add this course</button></li>
                        </ul>
                    )
                 })
                }
        </div>
    </div>
    </>
  )
}

export default Course