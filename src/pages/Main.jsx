import '/src/components/SpawnRow.css'
import '/src/pages/Main.css'
import SpawnRow from '/src/components/SpawnRow/SpawnRow'
import MosaicComponent from '/src/components/MosaicComponent'
import HtmlLandLogo from '/src/assets/logo.png';

export default function Main({showPlayBrowser, setShowPlayBrowser, isWideScreen}) {

    return(
        <>

            

            <div className="intro">
                <h1>HTML – LAND</h1>
                <img className="htmlland-logo" src={HtmlLandLogo} alt="HTML-LAND Logo" />

            </div>
            <MosaicComponent showPlayBrowser={showPlayBrowser} setShowPlayBrowser={setShowPlayBrowser} />

        </>

    )

}