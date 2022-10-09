import React from 'react'
import Api_fetch from './components/Api_fetch'
import Body from './components/Body'
import SideNavBar from './components/SideNavBar'
import TopNavBar from './components/TopNavBar'





function App() {

  return (

    <div className='flex'>
      <SideNavBar className="hidden " />
      <div className='w-screen '>
        <TopNavBar />
        <Body />
      </div>
    </div>
  )
}

export default App
