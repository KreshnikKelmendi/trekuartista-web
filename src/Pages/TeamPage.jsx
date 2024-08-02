import React, { useEffect } from 'react'
import DescriptionTeam from '../Components/TeamPage/DescriptionTeam'
import Team from '../Components/TeamPage/Team'
import transition from '../transition'

const TeamPage = () => {
  useEffect(() => {
    document.title = 'Meet the Team at Trekuartista';
  }, []);
  return (
    <>
        <DescriptionTeam />
        <Team />
    </>
  )
}

export default transition(TeamPage)