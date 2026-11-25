import { useState, useEffect } from 'react';


/* SpawnRow by an Object */

export default function SpawnRowAttribute({idx, inputs, inputValue, inputSection, setInputs, htmlAttributes, isAdding, setIsAdding, attDesc}) {

    const [explainAttribute, setExplainAttribute ] = useState(false)

    function spawnExplanationForAttributes(key) {

        console.log(attDesc)
        if (explainAttribute) {
            setExplainAttribute(false)
            return
        }

        attDesc.map((x) => {
            if (x.attribute === key) {
                setExplainAttribute(x.description)
                console.log(explainAttribute)
            }
        })
    }

    const [isRemoving, setIsRemoving] = useState(false);

    function handleRemove() {
        if (inputs.length < 1) return;
        setIsRemoving(true);
        setIsAdding(false)
    }
    function handleAnimationEnd({e}) {
        if (isRemoving && e.animationName === 'slideOut') {
            setIsRemoving(false);
            removeInput(idx);
        } else if (isAdding) {
             e.currentTarget.classList.remove("isNew"); 
        }
    }

    function removeInput(index) {
        if (inputs.length > 1) {
            if (explainAttribute) {
                setExplainAttribute(false)
            }
            setInputs(previous =>
                previous.filter((_, i) => i !== index)
            );
        }
    }

    function updateInput(index, key, value) {
        setInputs(previous =>
            previous.map((item, i) =>
                i === index
                    ? { ...item, [key]: value }
                    : item
            )
        );
    }

    function SelectOption({ idx, data = [], usedAttributes = [] }) {
        const used = new Set(
            usedAttributes
            .filter((_, i) => i !== idx)
            .map(item => item.inputSection)
        );
        return data
            .filter(x => !used.has(x))
            .map(x => <option key={x} value={x}>{x}</option>);
    }

    function addRow() {
        setIsAdding(true);
        const used = new Set(inputs.map(i => i.inputSection));
        const available = htmlAttributes.find(attr => !used.has(attr)) || htmlAttributes[0];
        setInputs([...inputs, { inputSection: available, inputValue: '' }]);
    }

    useEffect(() => {
        setExplainAttribute(false);
    }, [inputSection]);

    return(
        <>
            <div className={`form-row ${isRemoving ? 'removing ' : ''}${idx === inputs.length-1 && isAdding ? 'isNew' : ''}`} onAnimationEnd={(e) => {handleAnimationEnd({e})}} >
                <button type="button" className={`${inputSection}-attribute bt-exp`} onClick={() => spawnExplanationForAttributes(inputSection)}>{explainAttribute ? "❌" : "❓"}</button>

                <label><select size="1" value={inputSection} onChange={(e) => updateInput(idx, "inputSection", e.target.value)}
                ><SelectOption idx={idx} data={htmlAttributes} usedAttributes={inputs}/></select></label>
                <div className="attribute-textbox">
                    <input type="text" value={inputValue} onChange={(e) => updateInput(idx, "inputValue", e.target.value)} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                    }}}/>
                    {inputs.length > 1 ? (<button type="button" className="minusbtn"onClick={() => handleRemove()}>-</button>) : (undefined)}       
                    <button className={`plusbtn ${inputs.length > htmlAttributes.length-1 ? "disabled" : "active"}`} type="button" onClick={addRow}>+</button>
                </div>
            </div>
            { explainAttribute && 
                <div className="explain-attribute">
                    <span>
                        {explainAttribute}
                    </span>
                </div>


            }
        </>
    )

}