import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavPersonalizado from './componentes/puro/NavPersonalizado'
import './App.css'
import HomeSectionContent from './componentes/HomeSectionContent';
import GalleryConteiner from './componentes/GalleryConteiner';
import SectionBanner from './componentes/SectionBanner';
import Footer from './componentes/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0)
  return (
    <>
    
    <div className="App bg-[#ADF5FF] h-screen overflow-x-hidden" onScroll={e  => setScrollY(e.target.scrollTop)}>
      <NavPersonalizado tipoOscuro={false} cambiar={true} scrollY={scrollY}/>
      <HomeSectionContent></HomeSectionContent>
      <GalleryConteiner></GalleryConteiner>
      <SectionBanner/>
      <Footer/>
    </div>
    </>
    
    
  )
}

export default App
