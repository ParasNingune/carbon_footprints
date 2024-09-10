import React from 'react'
import "../Styles/Homepage.css"
import NavBar from '../Components/NavBar'
import backgroundImg from "../assets/background.jpg"

export default function HomePage() {
  return (
    <div className='main-body'>
      <img src='https://i.pinimg.com/564x/4f/2c/ee/4f2cee3de5b873546d1224a0a617066c.jpg' />
      <NavBar />

      <div className='text-box'>
        <h1>Project Kasukabe helps you understand how your daily choices impact <br></br>
          climate change.
        </h1>

        <p>
            A carbon footprint is a measure of the total greenhouse gas emissions, primarily carbon dioxide (CO₂), caused by human activities.
            <br/>In the context of coal mining in India, it accounts for emissions generated during the extraction, processing, transportation, and combustion of coal.
            <br/>These emissions significantly contribute to global warming and climate change. By understanding the carbon footprint of mining operations, companies
            <br/>and individuals can identify ways to reduce environmental impact. Our carbon footprint calculator for Indian coal mines helps measure these emissions,
            <br/>providing insights that can guide sustainable practices and cleaner energy transitions.
        </p>
      </div>
    </div>
  )
}
