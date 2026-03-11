import React, { useEffect } from 'react'
import OurWorks from '../Components/Works/OurWorks'

const WorkPage = () => {
  
  useEffect(() => {
    document.title = 'Trekuartista | Our Works |';
  }, []);

  return (
    <>
        <OurWorks />
    </>
  )
}

export default WorkPage