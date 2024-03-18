import { useState } from 'react'
import { Divider } from '@mui/material';
import { Nabvar } from './components/Nabvar'
import { Home } from './pages/Home/Home'
import About from './pages/About/About'
import { Projects } from './pages/Projects/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <Nabvar  />
      <div className='w-full h-screen max-w-full '>
        <Home />
        <About />
        <Projects />
        <Divider />

      </div>
      </div>
    </>
  )
}

export default App
