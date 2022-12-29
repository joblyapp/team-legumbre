import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavPersonalizado from './componentes/puro/NavPersonalizado'
import './App.css'
import HomeSectionContent from './componentes/HomeSectionContent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-[#ADF5FF] h-screen">
      <NavPersonalizado tipoOscuro={false} className="z-50" />
      <HomeSectionContent></HomeSectionContent>
    </div>
    
  )
}

export default App
