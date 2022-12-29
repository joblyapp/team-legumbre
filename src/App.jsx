import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavPersonalizado from './componentes/puro/NavPersonalizado'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-[#ADF5FF] h-screen">
      <NavPersonalizado tipoOscuro={true}/>
      
    </div>
  )
}

export default App
