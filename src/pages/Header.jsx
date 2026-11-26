import '/src/pages/Header.css';
import { useState, useEffect } from 'react';
import Logo from '/src/assets/logo.png'
import leftArrow from '/src/assets/left-arrow.png'




export default function Header({setShowPlayBrowser, isWideScreen}) {

    function openMenu(e) {
        arrowState && setArrowState(false)  

        const leftMenu = document.querySelector('.leftMenu')
        const menuIcon = document.querySelectorAll('.menu-icon')

        menuIcon.forEach((x) => { 
            x.classList.toggle("change")
        })

        leftMenu.classList.toggle("disable")
    }

    function togglePopup() {
        const resetPop = document.querySelector('.reset-popup')
        resetPop.classList.toggle("disabled")
    }

    const [ arrowState, setArrowState ] = useState(true)

    useEffect(() => {
        const checkMosaicRoot = document.querySelector('.mosaic-root')
        checkMosaicRoot && setArrowState(false)        
    }, [])

    return(
        <header>
            <nav>
                <div className="menubtn" onClick={(e) => openMenu(e)}>
                    <div className="menu-icon bar1"></div>
                    <div className="menu-icon bar2"></div>
                    <div className="menu-icon bar3"></div>
                    { arrowState &&
                        <div className="start-arrow">
                            <img className="leftArrow-logo" src={leftArrow} alt="START ARROW" />
                            <a className="start-text">  START </a>
                                
                        </div>
                    }

                </div>

                <ul>
                    <a className="topnav-icon" href="#"></a>
                </ul>
                <div className="nav-right">
                    { isWideScreen ?
                    <a className="playbrowser-ref" onClick={() => setShowPlayBrowser(prev => !prev)}>
                        <span class="tooltiptext">Toggle Playbrowser</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 48 48">
                        {/* Icon from Plump free icons by Streamline - https://creativecommons.org/licenses/by/4.0/ */}
                            <g fill="none" stroke="currentColor" stroke-width="3">
                                <path stroke-linejoin="round" d="M3 24a21 21 0 1 0 42 0a21 21 0 1 0-42 0"/>
                                <path stroke-linejoin="round" d="M15 24a9 21 0 1 1 18 0a9 21 0 1 1-18 0"/>
                            <path stroke-linecap="round" d="M4.5 31h39m-39-14h39"/>
                            </g>
                        </svg>
                    </a>
                    :
                    <a className="playbrowser-ref"></a>
                    }

                    <a target="_blank" rel="noopener noreferrer" className="github-ref" href="https://github.com/newst4rt/HTML-Land">
                        {/* Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE  */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.5 10.5 0 0 1 12 6.32a10.5 10.5 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"/>
                        </svg>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" className="buymeacoffee-ref" href="https://buymeacoffee.com/newst4rt">
                        {/* Icon from Iconoir by Luca Burgio - https://github.com/iconoir-icons/iconoir/blob/main/LICENSE */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5">
                            <path d="M16 6.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.822-.017l-2.918-2.94a2.28 2.28 0 0 1 0-3.214a2.277 2.277 0 0 1 3.232 0L12 4.78l.106-.107A2.276 2.276 0 0 1 16 6.28Z"/>
                            <path stroke-linecap="round" d="m18 20l3.824-3.824a.6.6 0 0 0 .176-.424V10.5a1.5 1.5 0 0 0-3 0V15"/>
                            <path stroke-linecap="round" d="m18 16l.858-.858a.485.485 0 0 0-.126-.776l-.443-.221a2 2 0 0 0-2.308.374l-.895.895a2 2 0 0 0-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 0 1 2 15.752V10.5a1.5 1.5 0 1 1 3 0V15"/>
                            <path stroke-linecap="round" d="m6 16l-.858-.858a.484.484 0 0 1 .126-.776l.443-.221a2 2 0 0 1 2.308.374l.895.895a2 2 0 0 1 .586 1.414V20"/>
                            </g>
                        
                        </svg>
                    </a>
                    <a className="reset-localstorage" onClick={() => togglePopup()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
                        <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/>
                        </svg>
                    </a>
                </div>
            </nav>
            <div className="reset-popup disabled">
                <form>
                    <label>
                        Reset Current Session ?    
                    </label>
                    <br/>
                    <button className="reset-answerbtn yes" onClick={(e) => {
                        togglePopup()
                        localStorage.clear()
                        }} >Yes</button>
                    <button className="reset-answerbtn no" onClick={(e) => {
                        e.preventDefault()
                        togglePopup()
                        }}  >No</button> 
                </form>
            </div>

        </header>
    )

}