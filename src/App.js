import './App.css';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import StudentPage from './components/StudentPage';
import Register from './components/Register';
import { useState } from 'react';
import { StudentData } from './components/StudentData';
import { CourseData } from './components/CourseData';
import Course from './components/Course';

function App() {

  const [isloggedIn , setIsloggedIn] = useState(false)

  const handleLogin = () => {
    setIsloggedIn(true);
  };

  return (
    <>
    {
      isloggedIn ?
      <>
      <Router>
      <Routes>
        <Route path='/student' element={<StudentPage/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<AdminPage/>}/>
      </Routes>
      </Router>
      </> 
      : 
      <>
      <Login onLogin={handleLogin} />
      </>
    }
    </>
  );
}

export default App;
