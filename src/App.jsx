import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppContext } from './context/ContextApi'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppContext>
        <h1>youtubeclone</h1>
      </AppContext>
    </>
  )
}

export default App
