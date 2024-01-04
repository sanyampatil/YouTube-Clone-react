import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { AppContext } from './context/ContextApiOne'
import Feed from './components/Feed'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import LeftNavMenuItem from './components/LeftNavMenuItem'
import SearchResultVideoCard from './components/SearchResultVideoCard'
import SearchResult from './components/SearchResult'
import SeggestionVideoCard from './components/SeggestionVideoCard'
import VideoDetail from './components/VideoDetail'
import VideoCard from './components/VideoCard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App () {
  const [count, setCount] = useState(0)

  return (
    <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header />  
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResult />}
                        />
                        <Route path="/video/:id" element={<VideoDetail />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
  )
}

export default App
