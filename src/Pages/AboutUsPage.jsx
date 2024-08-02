import React, { useEffect } from 'react'
import FirstContentOfAbout from '../Components/About/FirstContentOfAbout'
import ServicesOnAbout from '../Components/About/ServicesOnAbout'
import ClientsOnAbout from '../Components/About/ClientsOnAbout'
import transition from '../transition'

const AboutUsPage = () => {
  useEffect(() => {
    document.title = 'Trekuartista | Creative Design Agency |';
  }, []);

  return (
    <>
        <FirstContentOfAbout />
        <ServicesOnAbout />
        <ClientsOnAbout />
    </>
  )
}

export default transition(AboutUsPage)