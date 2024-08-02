import React, { useEffect } from 'react'
import WorkDescription from '../Components/Works/WorkDescription'
import OurWorks from '../Components/Works/OurWorks'

const WorkPage = () => {
  
  useEffect(() => {
    document.title = 'Trekuartista | Our Works |';
  }, []);

  return (
    <>
        <WorkDescription />
        <OurWorks />
    </>
  )
}

export default WorkPage