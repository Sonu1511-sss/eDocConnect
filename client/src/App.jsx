import React from 'react'
import Navbar from './Componenets/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import UserLogin from './Componenets/UserLogin'
import UserProfile from './Componenets/UserProfile'
import Footer from './Componenets/Footer'
import WelocomToLogin from './Pages/WelocomToLogin'
import HospitalProfile from './Pages/HospitalProfile'
import HosptalLogin from './Componenets/HosptalLogin'
import DoctorLogin from './Componenets/DoctorLogin'
import { Toaster } from 'react-hot-toast';
import PatientRegistration from './Pages/PatientProfile'
import UpdateDocument from './Pages/UpdateDocument'

function App() {
  return (
    <div>
       <Toaster />
      <Navbar/>
      <Routes>
      <Route path='/' element= { <Home/>}/>
      <Route path='/UserLogin' element= { <UserLogin/>}/>
      <Route path='/UserProfile' element= { <UserProfile/>}/>
      <Route path='/WelcomeLogin' element= { <WelocomToLogin/>}/>
      <Route path='/HospitalProfile' element= { <HospitalProfile/>}/>
      <Route path='/HospitalLogin' element= { <HosptalLogin/>}/>
      <Route path='/DoctorLogin' element= { <DoctorLogin/>}/>
      <Route path='/PatientProfile' element= { <PatientRegistration/>}/>
      <Route path='/update-document' element= { <UpdateDocument/>}/>

      

    




      </Routes>
      <Footer/>
    </div>
  )
}

export default App