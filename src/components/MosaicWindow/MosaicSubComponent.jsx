import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

import '/src/components/MosaicComponent.css';





function HtmlEditor({idx, htmlValue, setHtmlValue}) {

return <Editor key={idx} options={{ automaticLayout: true }} theme="vs-dark" height="100%" defaultLanguage="html" value={htmlValue} onChange={(e) => setHtmlValue(prev => ({...prev, [idx]: e}))} />
}

function CssEditor({idx, cssValue, setCssValue}) {

return <Editor key={idx} options={{ automaticLayout: true }} theme="vs-dark" height="100%" defaultLanguage="css" value={cssValue} onChange={(e) => setCssValue(prev => ({...prev, [idx]: e}))} />;
}

export default function MosaicSubComponent({idx, htmlValue, setHtmlValue, cssValue, setCssValue}) {

    const [mosaicValue, setMosaicValue] = useState({
        direction: 'column',
        type: 'tabs',
        tabs: ['HTML', 'CSS'],
        activeTabIndex: 0,
    });

    const renderTile = (id, path) => {

        return (
        <MosaicWindow path={path} title={id}>
            
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
            {id === 'HTML' && <HtmlEditor idx={idx} htmlValue={htmlValue} setHtmlValue={setHtmlValue} />}
            {id === 'CSS' && <CssEditor idx={idx} cssValue={cssValue} setCssValue={setCssValue} />}
            </div>
        </MosaicWindow>
        );
    };


    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <Mosaic
            className="mosaic-custom-theme bp5-button"
            value={mosaicValue}            
            canClose={(tabKey, tabs, index, path) => {
                if (tabKey === 'HTML' || tabKey === 'CSS') return "noClose";
            }}
            
            onChange={(next) => {
            setMosaicValue(next);
            }}
            renderTile={renderTile}

            showTabDragButton={() => true}     // sicherstellen, dass Drag-Handle da ist
        />
        </div>
    );
    }