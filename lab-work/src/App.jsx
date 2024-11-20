import './App.css'
import {useState} from 'react'
import Welcome from './components/welcome'
import Staff from './components/staff'
import Navbar from './components/navbar'
import Courses from './components/courses'

const App = () => {

 const [activeComponent, setActiveComponent] = useState('Welcome')

 const handleNav = (ev, link) => {
   ev.preventDefault();
   setActiveComponent(link)
 }

const renderComponent = () =>{
  switch(activeComponent){
    case 'Staff':
      return <Staff />;
    case 'Students':
      return <Students />;
    case 'Courses':
      return <Courses />;
    case 'Welcome':
      return <Welcome />;
    default:
      return <Welcome />;
  }
}

return (
    <>
    <Navbar handleNav={handleNav} />
    <main>
      {renderComponent()}
    </main>
    </>
  )
}

export default App
