import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppContext } from './context/ContextApi'
import Feed from './components/Feed'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import LeftNavMenuItem from './components/LeftNavMenuItem'
import SearchResultVideoCard from './components/SearchResultVideoCard'
import SearchResult from './components/SearchResult'
import SeggestionVideoCard from './components/SeggestionVideoCard'
import VideoDetail from './components/VideoDetail'
import VideoCard from './components/VideoCard'


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
