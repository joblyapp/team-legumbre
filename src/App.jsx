import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomeSectionContent from './componentes/HomeSectionContent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomeSectionContent></HomeSectionContent>
    </div>
  )
}

export default App
