import './App.css'
import Navbar from './components/navbar/Navbar'

import Binfo from './components/briefinfo/Binfo';
import FrontPage from './components/frontpage/FrontPage';
import Cmps from './components/cmps/Cmps';
import Process from './components/process/Process';
function App() {

  

  return (
    <>

      <div className="main-cont">
        <Navbar />
        <FrontPage/>
        <Cmps/>
        <Process />
        <Binfo/>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default App
