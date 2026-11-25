import { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/common';
import CopyButtonPlugin from 'highlightjs-copy';
import 'highlightjs-copy/dist/highlightjs-copy.min.css';

hljs.addPlugin(new CopyButtonPlugin({
    hook: (text, el) => {
        console.log("el" + el + "| text:" + text)
        return el.dataset.copyText || text;
    }
}));

export default function CodeBlock({ code, language = 'javascript' }) {
    const codeRef = useRef(null);

    useEffect(() => {
        if (!codeRef.current) return;

        delete codeRef.current.dataset.highlighted;
        codeRef.current.textContent = code;
        codeRef.current.dataset.copyText = code;
        hljs.highlightElement(codeRef.current);
    }, [code, language]);

    return (
        <pre>
            <code ref={codeRef} className={`language-${language.toLowerCase()}`}>
                {code}
            </code>
        </pre>
    );
}