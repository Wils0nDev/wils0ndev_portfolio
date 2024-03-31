import { useState } from 'react'
import { Divider, Stack} from '@mui/material';
import { Nabvar } from './components/Nabvar'
import { Home } from './pages/Home/Home'
import About from './pages/About/About'
import { Projects } from './pages/Projects/Projects'
import { Technologys } from './pages/Technologys/Technologys';
import { Contact } from './pages/Contact/Contact';
import { Footer } from './components/Footer';


function App() {

  return (
    <>
    <Stack >
      <Nabvar  />
        <Home />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Technologys />
        <Divider />
        <Contact />
        <Divider />
      </Stack>
      <Footer />
    </>
  )
}

export default App