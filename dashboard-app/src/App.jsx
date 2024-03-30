import './Styles/App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import { useState } from 'react'


function App() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () =>{
      setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <>
      <div className="dashboard">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Home/>
      </div>
    </>
  )
}

export default App
