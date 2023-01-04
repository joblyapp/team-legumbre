import './App.css';
import NavPersonalizado from './componentes/puro/NavPersonalizado';
import HomeSectionContent from './componentes/HomeSectionContent';
import GalleryConteiner from './componentes/GalleryConteiner';
import SectionBanner from './componentes/SectionBanner';
import Footer from './componentes/Footer';

import { RegisterForm } from './componentes/Share';

function App() {

  return (
    <>
      <div className="App bg-[#ADF5FF] h-screen overflow-x-hidden">
        <NavPersonalizado tipoOscuro={false} className="z-50" />
        <HomeSectionContent></HomeSectionContent>
        <GalleryConteiner></GalleryConteiner>
        <SectionBanner/>
        <Footer/>
      </div>
      <RegisterForm />
    </>
  )
}

export default App
