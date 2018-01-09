import React from 'react'
import Header from '../../organisms/Home/Templates/Header'
import Projects from '../../organisms/Home/Body/Projects'
import Users from '../../organisms/Home/Body/Users'

const HomePage = () => {
  return (
    <div className='body'>
        <Header />
        <div className="home-wrap">
          <Projects />
          <Users />
        </div>
    </div>
  )
}

export default HomePage
