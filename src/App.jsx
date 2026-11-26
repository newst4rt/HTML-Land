import Header from '/src/pages/Header'
import Main from '/src/pages/Main'
import { useState, useEffect } from 'react'

import 'highlight.js/styles/github-dark-dimmed.css';


export default function App() {

  const [showPlayBrowser, setShowPlayBrowser ] = useState(true)
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 850);

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth >= 850);
      console.log(isWideScreen)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return(
    <>
      <Header setShowPlayBrowser={setShowPlayBrowser} isWideScreen={isWideScreen}/>
      <Main showPlayBrowser={showPlayBrowser} setShowPlayBrowser={setShowPlayBrowser}/>
    </>
  )

}