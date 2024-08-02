import React, { useEffect } from 'react'
import SpaceOffice from '../Components/Contact/SpaceOffice'
import ContactForm from '../Components/Contact/ContactForm'
import Map from '../Components/Contact/Map'
import transition from '../transition'
import ZoomParallax from '../Components/Contact/ZoomParallax'
import ShuffleHero from '../Components/Contact/ShufleHero'

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Trekuartista';
  }, []);

  return (
    <>
      {/* <SpaceOffice /> */}
      {/* <ZoomParallax /> */}
      {/* <ShuffleHero /> */}
      <SpaceOffice />
      <ContactForm />
      <Map />
    </>
  )
}

export default transition(ContactPage)