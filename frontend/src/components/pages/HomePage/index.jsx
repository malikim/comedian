import React from 'react'
import Header from '../../organisms/Home/Templates/Header'
import Projects from '../../organisms/Home/Body/Projects'
import Users from '../../organisms/Home/Body/Users'

const HomePage = () => {
  return (
    <div className='body'>
        <Header />
        <Projects />
        <Users />
    </div>
  )
}

export default HomePage
