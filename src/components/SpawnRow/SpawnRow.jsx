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
        <div className="boolElement" key={`${x}`}>
            <input 
                type="checkbox" 
                onChange={(e) => addBool(e.target)} 
                checked={Array.isArray(boolAtt) && boolAtt.includes(x)}
                id={`${id} ${x}`} value={x}
            />
            <label htmlFor={`${id} ${x}`}>{x}</label>
        </div>
        ))}
    </> 
    )
}

export default function SpawnRow({prop, attDesc}) {
    const key = `spawnrow:${prop.id}`;

    const saved = useMemo(() => {
        try { 
            return JSON.parse(localStorage.getItem(key)) ?? {}; 
        } catch { 
            return {}; 
        }
    }, [key]);

    const [active, setActive] = useState(saved.active ?? false);
    const [initRow, setInitRow] = useState(saved.initRow ?? false);
    const [strAtt, setStrAtt] = useState(saved.strAtt ?? [{ inputSection: "id", inputValue: "" }]);
    const [boolAtt, setBoolAtt] = useState(saved.boolAtt ?? [""]);
    const [isAdding, setIsAdding] = useState(false);
    const [styleRow, setStyleRow] = useState(saved.styleRow ?? false);
    const [displayCode, setDisplayCode ] = useState(saved.displayCode ?? prop.code);
    const [htmlElement, setHtmlElement ] = useState(prop.component())

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ active, initRow, strAtt, boolAtt, styleRow, displayCode }));
    }, [key, active, initRow, strAtt, boolAtt, styleRow, displayCode]);

    useEffect(() => {

        let _inputValue = ""
        let _boolValue = ""

        strAtt.map((it) => {
            if (it.inputValue) {
                _inputValue += `${it.inputSection}=\"${it.inputValue}\" `
            }
        })

        boolAtt.map((it) => {
            if (it) {
                _boolValue += ` ${it}`;
            }
        })

        setDisplayCode(prop.code.replace(new RegExp(
            "\\s*(?=\\/?>)", 
            ''
            ), 
            ` ${_inputValue.slice(0, -1)}${_boolValue}`
        ))

        setHtmlElement(
            cloneElement(
                prop.component(), {
                ...Object.fromEntries(strAtt.filter(it => it.inputValue !== '' ).map(it => [it.inputSection, it.inputValue])),
                ...Object.fromEntries(boolAtt.filter(Boolean).map(attr => [attr, true]))
                }
            )
        )

    }, [strAtt,boolAtt])

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