import React from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='pageLayout'>
      <div className='jss1'>
        <main>
          <div>
            Welcome to the landing page!
          </div>
        </main>
      </div>
      <Sidebar />
    </div>
  )
}

export default Home