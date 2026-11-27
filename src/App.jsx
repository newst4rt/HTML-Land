import Header from '/src/pages/Header'
import Main from '/src/pages/Main'
import { useState, useEffect, useRef } from 'react'

import 'highlight.js/styles/github-dark-dimmed.css';


export default function App() {

  const [ showPlayBrowser, setShowPlayBrowser ] = useState(true)
  const [ isWideScreen, setIsWideScreen ] = useState(window.innerWidth >= 850);
  const deleteLocalStorage = useRef(false)

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth >= 850);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return(
    <>
      <Header setShowPlayBrowser={setShowPlayBrowser} isWideScreen={isWideScreen} deleteLocalStorage={deleteLocalStorage}/>
      <Main showPlayBrowser={showPlayBrowser} setShowPlayBrowser={setShowPlayBrowser} deleteLocalStorage={deleteLocalStorage}/>
    </>
  )

}