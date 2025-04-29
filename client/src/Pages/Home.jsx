import React from 'react'
import Header from '../Componenets/Header'
import VideoSlider from '../Componenets/VideoSlider'
import Features from '../Componenets/Features'
import PieChart from '../Componenets/pieChart'
import MapBarSection from '../Componenets/MapBar'

function Home() {
  return (
    <div>
         <Header/>
         <VideoSlider/>
         <PieChart/>
         <MapBarSection/>
         <Features/>
    </div>
  )
}

export default Home