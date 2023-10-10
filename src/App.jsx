import React from 'react'
import GetData from './Components/GetData/GetData'
import ShowList from './Components/ShowResult/ShowList'

const App = () => {
  return (
    <>
    <header className='text-center'>
      this is header 
      <nav>
        this is nav
      </nav>
    </header>
    <main className='text-center'>
      this is main
    </main>
    <GetData/>
    {/* <ShowList/> */}
    </>
  )
}

export default App