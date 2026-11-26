import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import { htmlElements } from '/src/assets/HTML-Tags/FormElements'
import { htmlAttributeDescription } from '/src/assets/HTML-Tags/DescriptionAttributes'
import SpawnRow from '/src/components/SpawnRow/SpawnRow'
import '/src/components/SpawnRow.css'
import { useEffect, useRef, useState } from 'react';
import  MosaicSubComponent  from '/src/components/MosaicWindow/MosaicSubComponent.jsx'
import FallBeamBackground from '/src/components/BackGround/FallBeamBackground.jsx'
import { defaultHTML, defaultCSS } from '/src/components/PlayBrowser/DefaultValues.js'

import './CodeBlock.css';
import './MosaicComponent.css';


export default function MosaicComponent() {


  function addTab(name) {
    if (!activeTabs.includes(name)) {
      setActiveTabs([...activeTabs, name])
      setCurrentTab(activeTabs.length)
    } else {
      const index = activeTabs.findIndex((x) => x === name);
      setCurrentTab(index)
    }
  }

  function TabScrollController({id ,pos}) {

     return (
          <button
            type="button"
            name={pos}
            className={ id == "1" ? `tab-scroll ${pos}-control ${showTabScroll ? "enabled" : "disabled"}` : `tabsub-scroll ${pos}-control ${showSubTabScroll ? "enabled" : "disabled"}`}
            onClick={(x) => {
              const pos = document.querySelector('.main-tab-bar')  
              pos?.scrollBy({ left: x.target.name === "left" ? -160 : 160, behavior: 'smooth' })}
            }
            
              
            aria-label={`Scroll tabs to the ${pos}`}
          >
            {pos === "right" ? "›" : "‹"}
          </button>
    );
  }

  function tabBarHandler() {

    if (currentTab < 1) return;
    
    const mosaicSplitRow = document.querySelector('.mosaic-split.-row')
    const mosaicSplitColumn = document.querySelector('.mosaic-split.-column')
    if (!mosaicSplitRow || !mosaicSplitColumn) return;

    const mosaicWindowSizeRow = parseFloat(mosaicSplitRow.style.left)
    const mosaicWindowSizeColumn = parseFloat(mosaicSplitColumn.style.top)
    if (isNaN(mosaicWindowSizeRow) || isNaN(mosaicWindowSizeColumn)) return;


    windowSize.current = ([mosaicWindowSizeRow, 100-mosaicWindowSizeRow])
    windowSizeColumn.current = ([mosaicWindowSizeColumn, 100-mosaicWindowSizeColumn])

    const strip = document.querySelector('.main-tab-bar')
    if (!strip || !strip.children?.length) return;

    const toolBarWidth = strip.clientWidth

    const childStrip = Array.from(strip.children);
    let tabWidth = 0
      childStrip.forEach((x) => {
        const xClassName = x.className
        if (xClassName.includes("mosaic-tab-button")) {
          tabWidth += x.clientWidth
        }
      })

      if (tabWidth > toolBarWidth) {
        if (!showTabScroll) {
          setShowTabScroll(true)
        }
      } else {
        if (showTabScroll) {
          setShowTabScroll(false)
        }
      }
  }

  function handleTabClick(e, index, tabKey, check) {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
      
      if (tabKey && !changeSubTabName) {
        
        setChangeSubTabName(tabKey); 
      }
      return;
    }

    if (check === '__hidden__') {
      setCurrentTab(index);  
    } else {
      setCurrentSubTab(index);
    }
    clickTimeoutRef.current = setTimeout(() => {
    clickTimeoutRef.current = null;
    }, 250);
  };



  const key = `mosaic-session`;


  const load = () => {
        try { return JSON.parse(localStorage.getItem(key)) ?? {}; } catch { return {}; }
    };
  const saved = load();
  const [activeTabs, setActiveTabs] = useState(saved.activeTabs ?? ['__hidden__'])
  const [subActiveTabs, setSubActiveTabs] = useState(saved.subActiveTabs ?? ["__subhidden__", "PAGE-1", "PAGE-2", "+"])
  const [currentTab, setCurrentTab] = useState(saved.currentTab ?? 1)
  const [currentSubTab, setCurrentSubTab] = useState(saved.currentSubTab ?? 1)

  const [showTabScroll, setShowTabScroll ] = useState(saved.showTabScroll ?? false)
  const [showSubTabScroll, setShowSubTabScroll ] = useState(saved.showSubTabScroll ?? false)

  const windowSize = useRef(saved.windowSize?.current ?? [60, 40])
  const windowSizeColumn = useRef(saved.windowSizeColumn?.current ?? [50, 50])
  const index = useRef(null);
  const spawnBoxName = htmlElements.map((x) => x.name)
  const clickTimeoutRef = useRef(null); 

  const [htmlValue, setHtmlValue] = useState(saved.htmlValue ?? {"PAGE-1" : defaultHTML, "PAGE-2": ""})
  const [cssValue, setCssValue] = useState(saved.cssValue ?? {"PAGE-1" : defaultCSS, "PAGE-2": ""})
  const [reactBrowser, setReactBrowser] = useState(saved.reactBrowser ?? "")
  const [changeSubTabName, setChangeSubTabName ] = useState(false)


  /*const spawnBoxName = inputType[0].name */

  const spawnBoxDescription = htmlElements.map((x) => x.description) 


  useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ activeTabs, currentTab, subActiveTabs, currentSubTab, showTabScroll, showSubTabScroll, windowSize, htmlValue, cssValue, reactBrowser, index }));
    }, [key, activeTabs, subActiveTabs, currentTab, currentSubTab, showTabScroll, showSubTabScroll, htmlValue, cssValue, reactBrowser, index, ]);

  useEffect(() => {
      tabBarHandler();
  }, [activeTabs, currentTab]);

  useEffect(() => {
      if (subActiveTabs[currentSubTab] === "+") {
        let subLen = subActiveTabs.length-1
        setCurrentSubTab(subLen);
        for (let i = 1; i < 100; i++) {
          if (!subActiveTabs.includes(`PAGE-${i}`)) {
            subLen = i
            break
          }
        }

        setSubActiveTabs(prevEle => [
            ...prevEle.slice(0, -1),
            `PAGE-${subLen}`,
            "+"
      ]);
    }
  }, [currentSubTab])

  return (
    <main>
      <div className="leftMenu disable">
          <h4>HTML-TAGs</h4>
          {spawnBoxName.map((x) => (
            <a key={x} onClick={() => addTab(x)}>
              {x}
            </a>
          ))}
      </div>
      { activeTabs.length > 1 ?
        <div className="mosaic-container" style={{ height: '100vh', width: '100%' }}>
          <Mosaic
            className="mosaic-custom-theme bp5-button"
            renderTabTitle={({ tabKey }) => tabKey}
            onChange={tabBarHandler}
            renderTabButton={(props) => {
              const { index, tabKey, isActive, onTabClick, onTabClose, connectDragSource, renderTabTitle: renderTitle } = props;
              
              return (
                <div
                  ref={connectDragSource}
                  className={`mosaic-tab-button${isActive ? ' -active' : ''} ${tabKey === "__hidden__" ? 'hidden' : ''}${tabKey === "JAVASCRIPT||CSS" ? 'hidden' : ''}`}
                  onClick={onTabClick}
                >
                  <span className="mosaic-tab-button-content">
                    {renderTitle ? renderTitle(props) : tabKey}
                  </span>
                  <span onClick={(e) => {
                    e.stopPropagation();
                    setActiveTabs(activeTabs.filter((x) => x !== tabKey))
                    onTabClose(tabKey, index)
                    }}
                    className={
                      `mosaic-tab-close-button 
                      -inactive-tab`
                    } 
                    title="Close tab"
                  >
                      <span className="bp5-icon-cross bp5-icon"></span>
                  </span>

                </div>

              );
            }}

            showTabDragButton={() => true}
            renderTabToolbar={({ tabs, activeTabIndex, path, DraggableTab }) => {

            const handleSubmit = (e, tabKey) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const changeTarget = formData.get('newTabName');
              setChangeSubTabName(false)
              if (subActiveTabs.includes(changeTarget)) {
                e.target.firstChild.style.border = "1px solid red"
                return
              }
              if (changeTarget !== tabKey) { 
                setSubActiveTabs(prevEle => prevEle.map(x => x === tabKey ? changeTarget : x ))
                setHtmlValue(prevEle => {
                  const updated = { ...prevEle };
                  updated[changeTarget] = updated[tabKey];
                  delete updated[tabKey];
                  return updated;
                })
                setCssValue(prevEle => {
                  const updated = { ...prevEle };
                  updated[changeTarget] = updated[tabKey];
                  delete updated[tabKey];
                  return updated;
                })
              }}

              const visibleTabs = tabs
                  .map((tabKey, index) => ({ tabKey, index }))
                  .filter(({ tabKey }) => tabKey !== '__hidden__' && tabKey !== '__subhidden__');

              return (
                <>
                  <div className="mosaic-tab-bar">

                  </div>

                  <div className="mosaic-tab-bar">
                    <div className="mosaic-tab-bar-controls left">
                        <TabScrollController id={tabs[0] === '__hidden__' ? "1" : "0"} pos="left" />
                    </div>
                    <div className={`mosaic-tab-bar-tabs${tabs[0] === '__hidden__' ? " main-tab-bar" : tabs[0] === '__subhidden__' ? " main-subtab-bar" : ""}`} style={{ flexWrap: 'nowrap', display: 'flex' }}>
                      {visibleTabs.map(({ tabKey, index }) => {
                        const isActive = index === activeTabIndex;
                        const isPageTab = subActiveTabs.includes(tabKey);

                        return (
                              <button
                                key={tabKey}
                                type="button"
                                className={`mosaic-tab-button${isActive ? ' -active' : ''}`}
                                onClick={(e) => handleTabClick(e, index, tabKey, tabs[0])}

                              >
                                { changeSubTabName === tabKey ? 
                                    <>
                                      <form onSubmit={(e) => handleSubmit(e, tabKey)}>
                                        <input type="text" name="newTabName" size={Math.max(tabKey.length, 1)} className="sub-formula-input" defaultValue={tabKey}></input> 
                                        <input type="button" className="sub-formula-button" type="submit" value="✓"></input>
                                      </form>
                                    </>
                                  : 
                                    <>
                                      <span className="mosaic-tab-button-content">{tabKey}</span>
                                  
                                      {/* Close Button */}
                                      <span
                                        className="mosaic-tab-close-button -can-close -inactive-tab"
                                        title="Close tab"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          sessionStorage.clear();
                                          if (isPageTab) { 
                                            setSubActiveTabs((prev) => prev.filter((x) => x !== tabKey)) 
                                            if (subActiveTabs.length-2 === currentSubTab) {
                                              setCurrentSubTab(prev => prev-1)
                                            }
                                            
                                          } else { 
                                            setActiveTabs((prev) => prev.filter((x) => x !== tabKey))
                                          } 
                                        }}
                                      >

                                        <span className="bp5-icon-cross bp5-icon"></span>
                                      </span>
                                    </>
                                }

                              </button>
                            )}

                        )}
                    </div>
                    <div className="mosaic-tab-bar-controls right">
                      { tabs[0] === '__hidden__' && <TabScrollController id={tabs[0] === '__hidden__' ? "1" : "0"}  pos="right" />}

                    </div>
                  </div>
                </>
              );
              }}
            renderTile={(id, path) => {


              return (
                <MosaicWindow path={path} title={id}>
                  { id === '__hidden__' && (
                    <div className="__hidden__"></div>
                  )}
                  { spawnBoxName.includes(id) && (
                    <div className="spawnBox">
                      <div className="title-container">
                          <a className="title-spawnbox">{id}</a>
                          <a className="desc-spawnbox">
                            {(() => {
                              index.current = spawnBoxName.findIndex((x) => x === id);
                              return spawnBoxDescription[index.current]
                            })()}
                          </a>
                      </div>
                      <br />
                      {(() => {

                        return index.current !== -1 && htmlElements[index.current].elements.map((x) => (
                          <SpawnRow key={x.id} prop={x} attDesc={htmlAttributeDescription} />
                        ));
                      })()}
                      <br /><br />
                    </div>
                  )}
                  { id === 'playbrowser' &&
                    <>
                      <style>
                        {cssValue[subActiveTabs[currentSubTab]] || ''}
                      </style>
                      <div className="browser-container" dangerouslySetInnerHTML={{ __html: htmlValue[subActiveTabs[currentSubTab]] || '' }}>

                      </div>
                    </>
                  }
                  { id && subActiveTabs.includes(id) &&
                    <MosaicSubComponent idx={id} htmlValue={htmlValue[id]} setHtmlValue={setHtmlValue} cssValue={cssValue[id]} setCssValue={setCssValue} />
                  }

                  
              </MosaicWindow>
              )}
            }
            initialValue={{
              type: 'split',
              direction: 'row',
              splitPercentages: window.innerWidth >= 850 ?  windowSize.current : [100, 100],
              children: [
                {
                  type: 'tabs',
                  tabs: activeTabs,
                  activeTabIndex: currentTab,
                },

                ...(window.innerWidth >= 850
                  ? [
                      {
                        type: 'split',
                        direction: 'column',
                        splitPercentages: windowSizeColumn.current,
                        children: [
                          'playbrowser',
                          {
                            type: 'tabs',
                            direction: 'row',
                            tabs: subActiveTabs,
                            activeTabIndex: currentSubTab,
                          },
                        ],
                      },
                    ]
                  : []),
              ],
            }}
          />
        </div>
      : <FallBeamBackground beamColorClass="indigo-400" />}
    </main>  
  );
}