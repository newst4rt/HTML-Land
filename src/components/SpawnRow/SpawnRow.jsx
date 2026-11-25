import CodeBlock from '/src/components/CodeBlock';
import { useState, cloneElement, useEffect, useMemo } from 'react';
import SpawnRowAttribute from '/src/components/SpawnRow/SpawnRowAttribute';


function SpawnRowBoolAttribute({id, htmlAttributes, boolAtt, setBoolAtt}) {
    
    
    function addBool(target) {
        if (target.checked) {
            setBoolAtt([...boolAtt, target.value]
            );
        } else {
            setBoolAtt(boolAtt.filter((x) => x !== target.value))
        }

    }

    return(   
    <>
        {htmlAttributes.map((x) => (
        <div className="boolElement" key={`${id}-${x}`}>
            <input 
                type="checkbox" 
                onChange={(e) => addBool(e.target)} 
                checked={boolAtt.includes(x)}
                id={`${id} ${x}`} value={x}
            />
            <label htmlFor={`${id} ${x}`}>{x}</label>
        </div>
        ))}

    </> )
}

export default function SpawnRow({prop, attDesc}) {

    const key = `spawnrow:${prop.id}`;

    const load = () => {
        try { return JSON.parse(sessionStorage.getItem(key)) ?? {}; } catch { return {}; }
    };
    const saved = load();

    const [active, setActive]   = useState(saved.active ?? false);
    const [initRow, setInitRow] = useState(saved.initRow ?? false);
    const [strAtt, setStrAtt]   = useState(saved.strAtt ?? [{ inputSection: "id", inputValue: "" }]);
    const [boolAtt, setBoolAtt] = useState(saved.boolAtt ?? [""]);
    const [isAdding, setIsAdding] = useState(false);
    const [styleRow, setStyleRow] = useState(saved.styleRow ?? false);
    /* const [htmlElement, setHtmlElement] = useState */

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify({ active, initRow, strAtt, boolAtt, styleRow }));
    }, [key, active, initRow, strAtt, boolAtt, styleRow]);



    let displayCode = prop.code;

    strAtt.map((it) => {
        if (it.inputValue) {
            if (displayCode.includes(`${it.inputSection}=`)) {
                displayCode = displayCode.replace(/${it.inputSection}="[^"]*"/, `${it.inputSection}="${it.inputValue}"`);
            } else {
                displayCode = displayCode.replace(/\s*\/?>/, ` ${it.inputSection}="${it.inputValue}"/>`);
            }
        }
    })

    boolAtt.map((it) => {
        if (it) {
            if (!displayCode.includes(` ${it}`)) {
                displayCode = displayCode.replace(/\s*\/?>/, ` ${it}/>`);
            } else {
            }
        }
    })

    const baseElement = useMemo(() => prop.component(), [prop]);
    const htmlElement = cloneElement(baseElement, {
            ...Object.fromEntries(strAtt.filter(it => it.inputValue !== '' ).map(it => [it.inputSection, it.inputValue])),
            ...Object.fromEntries(boolAtt.filter(Boolean).map(attr => [attr, true]))
        })

    return(
        <>
            <div className="html-container">
                <div className={"grid-row " + prop.id}>
                    <div className="column-one">
                        {htmlElement}
                    </div>
                    <div className="column-two">
                        <CodeBlock code={displayCode} language="HTML" />
                        <button className="toggle-arrow" onClick={initRow ?  () => setActive(!active) : setInitRow(true)}>
                            {active ? '▼' : '◀'}
                        </button>
                    </div>
                </div>
                {initRow ? (
                <div className={`grid-row hidden ${prop.id} ${active ? '' : 'disabled'}`}>
                    <div className="empty-column-1"></div>
                        <div className="data-column-2">
                            <form>
                                <label className="exp-title">HTML ATTRIBUTES</label>
                                {strAtt.map((input, index) => (
                                    <SpawnRowAttribute
                                            key={input.inputSection}
                                            idx={index}
                                            inputs={strAtt}
                                            inputValue={input.inputValue}
                                            inputSection={input.inputSection}
                                            setInputs={setStrAtt}
                                            htmlAttributes={prop.attributes.string}
                                            isAdding={isAdding}
                                            setIsAdding={setIsAdding}
                                            attDesc={attDesc}
                                        />
                                ))}
                            </form>

                            <form>
                                
                                <label className="exp-title bool-attr">BOOLEAN ATTRIBUTES</label>
                                <div className="form-row">
                                    <SpawnRowBoolAttribute
                                        id={prop.id}
                                        htmlAttributes={prop.attributes.bool}
                                        boolAtt={boolAtt}
                                        setBoolAtt={setBoolAtt}
                                    />

                                </div>    
                            </form>
                            {
                                /* 
                                <div className="row-style">
                                <label className="exp-title">CSS STYLE SHEET</label>
                                <button className="toggle-arrow" onClick={() => setStyleRow(!styleRow)}>
                                    {styleRow ? '▼' : '◀'}
                                </button>
                                </div>
                                <div className="form-row">
                                    <textarea className={styleRow ? null : "disabled"}></textarea>
                                </div>
                                */
                            }
                        </div>


                </div>
                ) : null}
            </div>
        </>
    )
}