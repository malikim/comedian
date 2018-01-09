import React from 'react'
import Header from '../../organisms/Projects/Templates/Header'
import DateRange from '../../organisms/Projects/Body/DateRange'
import UsersCard from '../../organisms/Projects/Body/UsersCard'

const ProjectsPage = () => {
  return (
    <div className='body'>
        <Header />
        <UsersCard />
    </div>
  )
}

export default ProjectsPage
