const commonString = ['id', 'class', 'name', 'value'];
const commonBool = ['disabled'];

/* BLACKLISTED

autoFocus – reason: strange behavior

*/

export const htmlElements = [
  {
      name: 'Input Type',
      description: 'different types for the HTML <input> element.',
      attributeDescriptions: "inputTypeDescription",
      elements: [
        {
          id: 'input-1',
          code: '<input type="button" />',
          component: () => <input type="button" />,
          attributes: {
            string: [...commonString, 'form'],
            bool: [...commonBool]
          }
        },
        {
          id: 'input-2',
          code: '<input type="checkbox" />',
          component: () => <input type="checkbox" />,
          attributes: {
            string: [...commonString, 'form'],
            bool: [...commonBool, 'checked', 'required']
          }
        },
        {
          id: 'input-3',
          code: '<input type="color" />',
          component: () => <input type="color" />,
          attributes: {
            string: [...commonString, 'autocomplete', 'list', 'form'],
            bool: [...commonBool]
          }
        },
        {
          id: 'input-4',
          code: '<input type="date" />',
          component: () => <input type="date" />,
          attributes: {
            string: [...commonString, 'min', 'max', 'step', 'autocomplete', 'list', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        },
        {
          id: 'input-5',
          code: '<input type="datetime-local" />',
          component: () => <input type="datetime-local" />,
          attributes: {
            string: [...commonString, 'min', 'max', 'step', 'autocomplete', 'list', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        },
        {
          id: 'input-6',
          code: '<input type="email" />',
          component: () => <input type="email" />,
          attributes: {
            string: [...commonString, 'placeholder', 'autocomplete', 'pattern', 'minlength', 'maxlength', 'size', 'list', 'form'],
            bool: [...commonBool, 'required', 'multiple', 'readonly']
          }
        },
        {
          id: 'input-7',
          code: '<input type="file" />',
          component: () => <input type="file" />,
          attributes: {
            // 'value' intentionally omitted: cannot be set for type="file"
            string: ['id', 'class', 'name', 'accept', 'capture', 'form'],
            bool: [...commonBool, 'multiple', 'required']
          }
        },
        {
          id: 'input-8',
          code: '<input type="hidden" />',
          component: () => <input type="hidden" />,
          attributes: {
            string: [...commonString, 'autocomplete', 'form'],
            bool: [...commonBool]
          }
        },
        {
          id: 'input-9',
          code: '<input type="image" />',
          component: () => <input type="image" />,
          attributes: {
            // 'value' not applicable for type="image"
            string: ['id', 'class', 'name', 'src', 'alt', 'form', 'formaction', 'formenctype', 'formmethod', 'formtarget', 'width', 'height'],
            bool: [...commonBool, 'formnovalidate']
          }
        },
        {
          id: 'input-10',
          code: '<input type="month" />',
          component: () => <input type="month" />,
          attributes: {
            string: [...commonString, 'min', 'max', 'step', 'autocomplete', 'list', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        },
        {
          id: 'input-13',
          code: '<input type="number" />',
          component: () => <input type="number" />,
          attributes: {
            string: [...commonString, 'min', 'max', 'step', 'placeholder', 'autocomplete', 'list', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        },
        {
          id: 'input-14',
          code: '<input type="password" />',
          component: () => <input type="password" />,
          attributes: {
            string: [...commonString, 'placeholder', 'autocomplete', 'pattern', 'minlength', 'maxlength', 'size', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        },
        {
          id: 'input-15',
          code: '<input type="radio" />',
          component: () => <input type="radio" />,
          attributes: {
            string: [...commonString, 'form'],
            bool: [...commonBool, 'checked', 'required']
          }
        },
        {
          id: 'input-16',
          code: '<input type="range" />',
          component: () => <input type="range" />,
          attributes: {
            string: [...commonString, 'min', 'max', 'step', 'autocomplete', 'list', 'form'],
            bool: [...commonBool]
          }
        },
        {
          id: 'input-17',
          code: '<input type="reset" />',
          component: () => <input type="reset" />,
          attributes: {
            // form* attributes only apply to submit and image
            string: [...commonString, 'form'],
            bool: [...commonBool]
          }
        },
        {
          id: 'input-18',
          code: '<input type="search" />',
          component: () => <input type="search" />,
          attributes: {
            string: [...commonString, 'placeholder', 'autocomplete', 'pattern', 'minlength', 'maxlength', 'size', 'list', 'dirname', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        },
        {
          id: 'input-19',
          code: '<input type="submit" />',
          component: () => <input type="submit" />,
          attributes: {
            string: [...commonString, 'form', 'formaction', 'formenctype', 'formmethod', 'formtarget'],
            bool: [...commonBool, 'formnovalidate']
          }
        },
        {
          id: 'input-20',
          code: '<input type="tel" />',
          component: () => <input type="tel" />,
          attributes: {
            string: [...commonString, 'placeholder', 'autocomplete', 'pattern', 'minlength', 'maxlength', 'size', 'list', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        },
        {
          id: 'input-21',
          code: '<input type="text" />',
          component: () => <input type="text" />,
          attributes: {
            string: [...commonString, 'placeholder', 'autocomplete', 'pattern', 'minlength', 'maxlength', 'size', 'list', 'dirname', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        },
        {
          id: 'input-22',
          code: '<input type="time" />',
          component: () => <input type="time" />,
          attributes: {
            string: [...commonString, 'min', 'max', 'step', 'autocomplete', 'list', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        },
        {
          id: 'input-23',
          code: '<input type="url" />',
          component: () => <input type="url" />,
          attributes: {
            string: [...commonString, 'placeholder', 'autocomplete', 'pattern', 'minlength', 'maxlength', 'size', 'list', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        },
        {
          id: 'input-24',
          code: '<input type="week" />',
          component: () => <input type="week" />,
          attributes: {
            string: [...commonString, 'min', 'max', 'step', 'autocomplete', 'list', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        }
      ]
  },
  {
      name: 'Document metadata',
      description: 'Elements that define document-level information. They are not visible; rendering them inside the page is not meaningful.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'html-1',
          code: '<html></html>',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;html&gt;</code>,
          attributes: {
            string: [...commonString, 'lang', 'xmlns'],
            bool: [...commonBool]
          }
        },
        {
          id: 'head-1',
          code: '<head></head>',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;head&gt;</code>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'title-1',
          code: '<title>Title</title>',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;title&gt;</code>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'base-1',
          code: '<base />',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;base&gt;</code>,
          attributes: {
            string: [...commonString, 'href', 'target'],
            bool: [...commonBool]
          }
        },
        {
          id: 'link-1',
          code: '<link />',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;link&gt;</code>,
          attributes: {
            string: [...commonString, 'href', 'rel', 'type', 'media', 'as', 'crossorigin', 'hreflang', 'integrity', 'referrerpolicy', 'sizes'],
            bool: [...commonBool]
          }
        },
        {
          id: 'meta-1',
          code: '<meta />',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;meta&gt;</code>,
          attributes: {
            string: [...commonString, 'content', 'charset', 'http-equiv'],
            bool: [...commonBool]
          }
        },
        {
          id: 'style-1',
          code: '<style>p { color: red; }</style>',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;style&gt;</code>,
          attributes: {
            string: [...commonString, 'media', 'type', 'nonce'],
            bool: [...commonBool]
          }
        }
      ]
  },
  {
      name: 'Content sectioning',
      description: 'Elements that structure the content of a page into logical sections.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'body-1',
          code: '<body>Content</body>',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;body&gt;</code>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'address-1',
          code: '<address>Contact details</address>',
          component: () => <address>Contact details</address>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'article-1',
          code: '<article>Article</article>',
          component: () => <article>Article</article>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'aside-1',
          code: '<aside>Side note</aside>',
          component: () => <aside>Side note</aside>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'footer-1',
          code: '<footer>Footer area</footer>',
          component: () => <footer>Footer area</footer>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'header-1',
          code: '<header>Header area</header>',
          component: () => <header>Header area</header>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'h1-1',
          code: '<h1>Heading 1</h1>',
          component: () => <h1>Heading 1</h1>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'h2-1',
          code: '<h2>Heading 2</h2>',
          component: () => <h2>Heading 2</h2>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'h3-1',
          code: '<h3>Heading 3</h3>',
          component: () => <h3>Heading 3</h3>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'h4-1',
          code: '<h4>Heading 4</h4>',
          component: () => <h4>Heading 4</h4>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'h5-1',
          code: '<h5>Heading 5</h5>',
          component: () => <h5>Heading 5</h5>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'h6-1',
          code: '<h6>Heading 6</h6>',
          component: () => <h6>Heading 6</h6>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'hgroup-1',
          code: '<hgroup><h1>Title</h1><p>Subtitle</p></hgroup>',
          component: () => <hgroup><h1>Title</h1><p>Subtitle</p></hgroup>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'main-1',
          code: '<main>Main content</main>',
          component: () => <main>Main content</main>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'nav-1',
          code: '<nav>Navigation</nav>',
          component: () => <nav>Navigation</nav>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'search-1',
          code: '<search>Search area</search>',
          component: () => <search>Search area</search>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'section-1',
          code: '<section>Section</section>',
          component: () => <section>Section</section>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        }
      ]
  },
  {
      name: 'Text content',
      description: 'Block-level elements that organize text and group content.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'blockquote-1',
          code: '<blockquote>Quote</blockquote>',
          component: () => <blockquote>Quote</blockquote>,
          attributes: {
            string: [...commonString, 'cite'],
            bool: [...commonBool]
          }
        },
        {
          id: 'dd-1',
          code: '<dd>Description</dd>',
          // requires <dl> as parent element
          component: () => <dl><dd>Description</dd></dl>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'div-1',
          code: '<div>Container</div>',
          component: () => <div>Container</div>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'dl-1',
          code: '<dl><dt>Term</dt><dd>Description</dd></dl>',
          component: () => <dl><dt>Term</dt><dd>Description</dd></dl>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'dt-1',
          code: '<dt>Term</dt>',
          // requires <dl> as parent element
          component: () => <dl><dt>Term</dt></dl>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'figcaption-1',
          code: '<figcaption>Image caption</figcaption>',
          // requires <figure> as parent element
          component: () => <figure><figcaption>Image caption</figcaption></figure>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'figure-1',
          code: '<figure><figcaption>Caption</figcaption></figure>',
          component: () => <figure><figcaption>Caption</figcaption></figure>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'hr-1',
          code: '<hr />',
          component: () => <hr />,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'li-1',
          code: '<li>List item</li>',
          // requires <ul>, <ol> or <menu> as parent element
          component: () => <ul><li>List item</li></ul>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'menu-1',
          code: '<menu><li>Item</li></menu>',
          component: () => <menu><li>Item</li></menu>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'ol-1',
          code: '<ol><li>Item</li></ol>',
          component: () => <ol><li>Item</li></ol>,
          attributes: {
            string: [...commonString, 'start', 'type'],
            bool: [...commonBool, 'reversed']
          }
        },
        {
          id: 'p-1',
          code: '<p>Absatz</p>',
          component: () => <p>Absatz</p>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'pre-1',
          code: '<pre>Preformatted text</pre>',
          component: () => <pre>Preformatted text</pre>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'ul-1',
          code: '<ul><li>Item</li></ul>',
          component: () => <ul><li>Item</li></ul>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        }
      ]
  },
  {
      name: 'Inline text semantics',
      description: 'Elements that define the meaning, structure or style of words and phrases.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'a-1',
          code: '<a href="#">Link</a>',
          component: () => <a href="#" onClick={(e) => e.preventDefault()}>Link</a>,
          attributes: {
            string: [...commonString, 'href', 'target', 'rel', 'download', 'hreflang', 'type', 'referrerpolicy', 'ping'],
            bool: [...commonBool]
          }
        },
        {
          id: 'abbr-1',
          code: '<abbr title="HyperText Markup Language">HTML</abbr>',
          component: () => <abbr title="HyperText Markup Language">HTML</abbr>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'b-1',
          code: '<b>Bold</b>',
          component: () => <b>Bold</b>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'bdi-1',
          code: '<bdi>Text</bdi>',
          component: () => <bdi>Text</bdi>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'bdo-1',
          code: '<bdo dir="rtl">Text</bdo>',
          component: () => <bdo dir="rtl">Text</bdo>,
          attributes: {
            string: [...commonString, 'dir'],
            bool: [...commonBool]
          }
        },
        {
          id: 'br-1',
          code: '<br />',
          component: () => <br />,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'cite-1',
          code: '<cite>Title of a work</cite>',
          component: () => <cite>Title of a work</cite>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'code-1',
          code: '<code>const x = 1;</code>',
          component: () => <code>const x = 1;</code>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'data-1',
          code: '<data value="42">A value</data>',
          component: () => <data value="42">A value</data>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'dfn-1',
          code: '<dfn>Definition</dfn>',
          component: () => <dfn>Definition</dfn>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'em-1',
          code: '<em>Emphasized</em>',
          component: () => <em>Emphasized</em>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'i-1',
          code: '<i>Italic</i>',
          component: () => <i>Italic</i>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'kbd-1',
          code: '<kbd>Ctrl + C</kbd>',
          component: () => <kbd>Ctrl + C</kbd>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'mark-1',
          code: '<mark>Highlighted</mark>',
          component: () => <mark>Highlighted</mark>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'q-1',
          code: '<q>Short quote</q>',
          component: () => <q>Short quote</q>,
          attributes: {
            string: [...commonString, 'cite'],
            bool: [...commonBool]
          }
        },
        {
          id: 'rp-1',
          code: '<rp>(</rp>',
          // requires <ruby> as parent element
          component: () => <ruby>漢<rp>(</rp></ruby>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'rt-1',
          code: '<rt>kan</rt>',
          // requires <ruby> as parent element
          component: () => <ruby>漢<rt>kan</rt></ruby>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'ruby-1',
          code: '<ruby>漢<rt>kan</rt></ruby>',
          component: () => <ruby>漢<rt>kan</rt></ruby>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 's-1',
          code: '<s>Struck through</s>',
          component: () => <s>Struck through</s>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'samp-1',
          code: '<samp>Program output</samp>',
          component: () => <samp>Program output</samp>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'small-1',
          code: '<small>Fine print</small>',
          component: () => <small>Fine print</small>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'span-1',
          code: '<span>Text</span>',
          component: () => <span>Text</span>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'strong-1',
          code: '<strong>Important</strong>',
          component: () => <strong>Important</strong>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'sub-1',
          code: '<sub>subscript</sub>',
          component: () => <sub>subscript</sub>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'sup-1',
          code: '<sup>superscript</sup>',
          component: () => <sup>superscript</sup>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'time-1',
          code: '<time datetime="2026-11-07">November 7, 2026</time>',
          component: () => <time dateTime="2026-11-07">November 7, 2026</time>,
          attributes: {
            string: [...commonString, 'datetime'],
            bool: [...commonBool]
          }
        },
        {
          id: 'u-1',
          code: '<u>Underlined</u>',
          component: () => <u>Underlined</u>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'var-1',
          code: '<var>x</var>',
          component: () => <var>x</var>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'wbr-1',
          code: '<wbr />',
          component: () => <wbr />,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        }
      ]
  },
  {
      name: 'Image and multimedia',
      description: 'Elements for images, audio, video and image maps.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'area-1',
          code: '<area alt="Area" shape="rect" coords="0,0,50,50" />',
          // requires <map> as parent element
          component: () => <map name="demo"><area alt="Area" shape="rect" coords="0,0,50,50" /></map>,
          attributes: {
            string: [...commonString, 'alt', 'coords', 'shape', 'href', 'target', 'download', 'rel', 'referrerpolicy', 'ping'],
            bool: [...commonBool]
          }
        },
        {
          id: 'audio-1',
          code: '<audio controls></audio>',
          component: () => <audio controls></audio>,
          attributes: {
            string: [...commonString, 'src', 'preload', 'crossorigin'],
            bool: [...commonBool, 'controls', 'autoplay', 'loop', 'muted']
          }
        },
        {
          id: 'img-1',
          code: '<img alt="Example image" />',
          component: () => <img alt="Example image" />,
          attributes: {
            string: [...commonString, 'src', 'alt', 'srcset', 'sizes', 'width', 'height', 'loading', 'decoding', 'crossorigin', 'referrerpolicy', 'usemap'],
            bool: [...commonBool, 'ismap']
          }
        },
        {
          id: 'map-1',
          code: '<map name="demo"><area alt="Area" shape="rect" coords="0,0,50,50" /></map>',
          component: () => <map name="demo"><area alt="Area" shape="rect" coords="0,0,50,50" /></map>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'track-1',
          code: '<track />',
          // requires <audio> or <video> as parent element
          component: () => <video controls><track /></video>,
          attributes: {
            string: [...commonString, 'src', 'kind', 'srclang', 'label'],
            bool: [...commonBool, 'default']
          }
        },
        {
          id: 'video-1',
          code: '<video controls></video>',
          component: () => <video controls></video>,
          attributes: {
            string: [...commonString, 'src', 'poster', 'width', 'height', 'preload', 'crossorigin'],
            bool: [...commonBool, 'controls', 'autoplay', 'loop', 'muted', 'playsinline']
          }
        }
      ]
  },
  {
      name: 'Embedded content',
      description: 'Elements that embed external content such as other pages, plugins, pictures, vector graphics or math.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'embed-1',
          code: '<embed />',
          component: () => <embed />,
          attributes: {
            string: [...commonString, 'src', 'type', 'width', 'height'],
            bool: [...commonBool]
          }
        },
        {
          id: 'iframe-1',
          code: '<iframe></iframe>',
          component: () => <iframe></iframe>,
          attributes: {
            string: [...commonString, 'src', 'srcdoc', 'width', 'height', 'allow', 'loading', 'referrerpolicy', 'sandbox'],
            bool: [...commonBool, 'allowfullscreen']
          }
        },
        {
          id: 'object-1',
          code: '<object></object>',
          component: () => <object></object>,
          attributes: {
            string: [...commonString, 'data', 'type', 'width', 'height', 'form', 'usemap'],
            bool: [...commonBool]
          }
        },
        {
          id: 'picture-1',
          code: '<picture><source /><img alt="Example image" /></picture>',
          component: () => <picture><source /><img alt="Example image" /></picture>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'source-1',
          code: '<source />',
          // requires <picture>, <audio> or <video> as parent element
          component: () => <picture><source /><img alt="Example image" /></picture>,
          attributes: {
            string: [...commonString, 'src', 'srcset', 'type', 'media', 'sizes', 'width', 'height'],
            bool: [...commonBool]
          }
        },
        {
          id: 'svg-1',
          code: '<svg width="50" height="50"><circle cx="25" cy="25" r="20" /></svg>',
          component: () => <svg width="50" height="50"><circle cx="25" cy="25" r="20" /></svg>,
          attributes: {
            string: [...commonString, 'width', 'height', 'viewBox', 'xmlns', 'fill', 'stroke'],
            bool: [...commonBool]
          }
        },
        {
          id: 'math-1',
          code: '<math><mi>x</mi></math>',
          component: () => <math><mi>x</mi></math>,
          attributes: {
            string: [...commonString, 'display', 'xmlns'],
            bool: [...commonBool]
          }
        }
      ]
  },
  {
      name: 'Scripting',
      description: 'Elements for scripts and the drawing surface.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'canvas-1',
          code: '<canvas></canvas>',
          component: () => <canvas></canvas>,
          attributes: {
            string: [...commonString, 'width', 'height'],
            bool: [...commonBool]
          }
        },
        {
          id: 'noscript-1',
          code: '<noscript>JavaScript is disabled</noscript>',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;noscript&gt;</code>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'script-1',
          code: '<script></script>',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;script&gt;</code>,
          attributes: {
            string: [...commonString, 'src', 'type', 'crossorigin', 'integrity', 'referrerpolicy', 'nonce'],
            bool: [...commonBool, 'async', 'defer', 'nomodule']
          }
        }
      ]
  },
  {
      name: 'Demarcating edits',
      description: 'Elements that mark text which was added to or removed from the document.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'del-1',
          code: '<del>Deleted</del>',
          component: () => <del>Deleted</del>,
          attributes: {
            string: [...commonString, 'cite', 'datetime'],
            bool: [...commonBool]
          }
        },
        {
          id: 'ins-1',
          code: '<ins>Inserted</ins>',
          component: () => <ins>Inserted</ins>,
          attributes: {
            string: [...commonString, 'cite', 'datetime'],
            bool: [...commonBool]
          }
        }
      ]
  },
  {
      name: 'Table content',
      description: 'Elements for tabular data.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'caption-1',
          code: '<caption>Table caption</caption>',
          // requires <table> as parent element
          component: () => <table><caption>Table caption</caption></table>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'col-1',
          code: '<col />',
          // requires <colgroup> in <table> as parent element
          component: () => <table><colgroup><col /></colgroup></table>,
          attributes: {
            string: [...commonString, 'span'],
            bool: [...commonBool]
          }
        },
        {
          id: 'colgroup-1',
          code: '<colgroup><col /></colgroup>',
          // requires <table> as parent element
          component: () => <table><colgroup><col /></colgroup></table>,
          attributes: {
            string: [...commonString, 'span'],
            bool: [...commonBool]
          }
        },
        {
          id: 'table-1',
          code: '<table><tbody><tr><td>Cell</td></tr></tbody></table>',
          component: () => <table><tbody><tr><td>Cell</td></tr></tbody></table>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'tbody-1',
          code: '<tbody><tr><td>Cell</td></tr></tbody>',
          // requires <table> as parent element
          component: () => <table><tbody><tr><td>Cell</td></tr></tbody></table>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'td-1',
          code: '<td>Cell</td>',
          // requires <table><tbody><tr> as parent elements
          component: () => <table><tbody><tr><td>Cell</td></tr></tbody></table>,
          attributes: {
            string: [...commonString, 'colspan', 'rowspan', 'headers'],
            bool: [...commonBool]
          }
        },
        {
          id: 'tfoot-1',
          code: '<tfoot><tr><td>Footer</td></tr></tfoot>',
          // requires <table> as parent element
          component: () => <table><tfoot><tr><td>Footer</td></tr></tfoot></table>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'th-1',
          code: '<th>Header cell</th>',
          // requires <table><tbody><tr> as parent elements
          component: () => <table><tbody><tr><th>Header cell</th></tr></tbody></table>,
          attributes: {
            string: [...commonString, 'colspan', 'rowspan', 'headers', 'scope', 'abbr'],
            bool: [...commonBool]
          }
        },
        {
          id: 'thead-1',
          code: '<thead><tr><th>Header</th></tr></thead>',
          // requires <table> as parent element
          component: () => <table><thead><tr><th>Header</th></tr></thead></table>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'tr-1',
          code: '<tr><td>Cell</td></tr>',
          // requires <table><tbody> as parent elements
          component: () => <table><tbody><tr><td>Cell</td></tr></tbody></table>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        }
      ]
  },
  {
      name: 'Forms',
      description: 'Elements for building forms (the <input> element has its own group above).',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'button-1',
          code: '<button>Click me</button>',
          component: () => <button>Click me</button>,
          attributes: {
            string: [...commonString, 'type', 'form', 'formaction', 'formenctype', 'formmethod', 'formtarget', 'popovertarget'],
            bool: [...commonBool, 'formnovalidate']
          }
        },
        {
          id: 'datalist-1',
          code: '<datalist><option value="A" /></datalist>',
          component: () => <datalist><option value="A" /></datalist>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'fieldset-1',
          code: '<fieldset><legend>Title</legend></fieldset>',
          component: () => <fieldset><legend>Title</legend></fieldset>,
          attributes: {
            string: [...commonString, 'form'],
            bool: [...commonBool]
          }
        },
        {
          id: 'form-1',
          code: '<form><input /></form>',
          component: () => <form onSubmit={(e) => e.preventDefault()}><input /></form>,
          attributes: {
            string: [...commonString, 'action', 'method', 'enctype', 'target', 'autocomplete', 'accept-charset', 'rel'],
            bool: [...commonBool, 'novalidate']
          }
        },
        {
          id: 'label-1',
          code: '<label>Caption</label>',
          component: () => <label>Caption</label>,
          attributes: {
            string: [...commonString, 'for', 'form'],
            bool: [...commonBool]
          }
        },
        {
          id: 'legend-1',
          code: '<legend>Title</legend>',
          // requires <fieldset> as parent element
          component: () => <fieldset><legend>Title</legend></fieldset>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'meter-1',
          code: '<meter value="0.6"></meter>',
          component: () => <meter value="0.6"></meter>,
          attributes: {
            string: [...commonString, 'min', 'max', 'low', 'high', 'optimum', 'form'],
            bool: [...commonBool]
          }
        },
        {
          id: 'optgroup-1',
          code: '<optgroup label="Group"><option>A</option></optgroup>',
          // requires <select> as parent element
          component: () => <select><optgroup label="Group"><option>A</option></optgroup></select>,
          attributes: {
            string: [...commonString, 'label'],
            bool: [...commonBool]
          }
        },
        {
          id: 'option-1',
          code: '<option>Option</option>',
          // requires <select> as parent element
          component: () => <select><option>Option</option></select>,
          attributes: {
            string: [...commonString, 'label'],
            bool: [...commonBool, 'selected']
          }
        },
        {
          id: 'output-1',
          code: '<output>42</output>',
          component: () => <output>42</output>,
          attributes: {
            string: [...commonString, 'for', 'form'],
            bool: [...commonBool]
          }
        },
        {
          id: 'progress-1',
          code: '<progress value="40" max="100"></progress>',
          component: () => <progress value="40" max="100"></progress>,
          attributes: {
            string: [...commonString, 'max'],
            bool: [...commonBool]
          }
        },
        {
          id: 'select-1',
          code: '<select><option>A</option></select>',
          component: () => <select><option>A</option></select>,
          attributes: {
            string: [...commonString, 'size', 'autocomplete', 'form'],
            bool: [...commonBool, 'multiple', 'required']
          }
        },
        {
          id: 'textarea-1',
          code: '<textarea></textarea>',
          component: () => <textarea></textarea>,
          attributes: {
            string: [...commonString, 'placeholder', 'rows', 'cols', 'minlength', 'maxlength', 'wrap', 'dirname', 'autocomplete', 'form'],
            bool: [...commonBool, 'required', 'readonly']
          }
        }
      ]
  },
  {
      name: 'Interactive elements',
      description: 'Elements that let users show, hide or interact with content.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'details-1',
          code: '<details><summary>Title</summary>Content</details>',
          component: () => <details><summary>Title</summary>Content</details>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool, 'open']
          }
        },
        {
          id: 'dialog-1',
          code: '<dialog open>Dialog</dialog>',
          component: () => <dialog open>Dialog</dialog>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool, 'open']
          }
        },
        {
          id: 'summary-1',
          code: '<summary>Title</summary>',
          // requires <details> as parent element
          component: () => <details><summary>Title</summary>Content</details>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        }
      ]
  },
  {
      name: 'Web components',
      description: 'Elements for use with Web Components and shadow DOM.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'slot-1',
          code: '<slot>Fallback</slot>',
          component: () => <slot>Fallback</slot>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'template-1',
          code: '<template></template>',
          component: () => <template></template>,
          attributes: {
            string: [...commonString, 'shadowrootmode'],
            bool: [...commonBool, 'shadowrootdelegatesfocus', 'shadowrootclonable']
          }
        }
      ]
  },
  {
      name: 'Deprecated elements',
      description: 'Obsolete elements that should no longer be used. Some still render in browsers, others do not.',
      attributeDescriptions: "htmlAttributeDescription",
      elements: [
        {
          id: 'acronym-1',
          code: '<acronym title="HyperText Markup Language">HTML</acronym>',
          component: () => <acronym title="HyperText Markup Language">HTML</acronym>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'big-1',
          code: '<big>Big</big>',
          component: () => <big>Big</big>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'center-1',
          code: '<center>Centered</center>',
          component: () => <center>Centered</center>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'dir-1',
          code: '<dir><li>Item</li></dir>',
          component: () => <dir><li>Item</li></dir>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'font-1',
          code: '<font>Font</font>',
          component: () => <font>Font</font>,
          attributes: {
            string: [...commonString, 'color', 'face', 'size'],
            bool: [...commonBool]
          }
        },
        {
          id: 'marquee-1',
          code: '<marquee>Scrolling text</marquee>',
          component: () => <marquee>Scrolling text</marquee>,
          attributes: {
            string: [...commonString, 'behavior', 'direction', 'scrollamount', 'scrolldelay', 'loop'],
            bool: [...commonBool]
          }
        },
        {
          id: 'nobr-1',
          code: '<nobr>No line break</nobr>',
          component: () => <nobr>No line break</nobr>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'strike-1',
          code: '<strike>Struck through</strike>',
          component: () => <strike>Struck through</strike>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'tt-1',
          code: '<tt>Monospaced text</tt>',
          component: () => <tt>Monospaced text</tt>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'param-1',
          code: '<param />',
          // requires <object> as parent element
          component: () => <object><param /></object>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'frame-1',
          code: '<frame />',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;frame&gt;</code>,
          attributes: {
            string: [...commonString, 'src', 'scrolling'],
            bool: [...commonBool, 'noresize']
          }
        },
        {
          id: 'frameset-1',
          code: '<frameset></frameset>',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;frameset&gt;</code>,
          attributes: {
            string: [...commonString, 'cols', 'rows'],
            bool: [...commonBool]
          }
        },
        {
          id: 'noframes-1',
          code: '<noframes>No frames</noframes>',
          // Placeholder: this tag cannot be meaningfully rendered inside the page
          component: () => <code>&lt;noframes&gt;</code>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'rb-1',
          code: '<rb>漢</rb>',
          // requires <ruby> as parent element
          component: () => <ruby><rb>漢</rb><rt>kan</rt></ruby>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'rtc-1',
          code: '<rtc><rt>kan</rt></rtc>',
          // requires <ruby> as parent element
          component: () => <ruby>漢<rtc><rt>kan</rt></rtc></ruby>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'xmp-1',
          code: '<xmp>Preformatted text</xmp>',
          component: () => <xmp>Preformatted text</xmp>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'listing-1',
          code: '<listing>Preformatted text</listing>',
          component: () => <listing>Preformatted text</listing>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'noembed-1',
          code: '<noembed>Embedding not supported</noembed>',
          component: () => <noembed>Embedding not supported</noembed>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'blink-1',
          code: '<blink>Blinking text</blink>',
          component: () => <blink>Blinking text</blink>,
          attributes: {
            string: [...commonString],
            bool: [...commonBool]
          }
        },
        {
          id: 'basefont-1',
          code: '<basefont />',
          component: () => <basefont />,
          attributes: {
            string: [...commonString, 'color', 'face', 'size'],
            bool: [...commonBool]
          }
        },
        {
          id: 'bgsound-1',
          code: '<bgsound />',
          component: () => <bgsound />,
          attributes: {
            string: [...commonString, 'src', 'loop'],
            bool: [...commonBool]
          }
        },
        {
          id: 'image-1',
          code: '<image />',
          component: () => <image />,
          attributes: {
            string: [...commonString, 'src', 'alt', 'width', 'height'],
            bool: [...commonBool]
          }
        },
        {
          id: 'keygen-1',
          code: '<keygen />',
          component: () => <keygen />,
          attributes: {
            string: [...commonString, 'form'],
            bool: [...commonBool]
          }
        },
        {
          id: 'applet-1',
          code: '<applet></applet>',
          component: () => <applet></applet>,
          attributes: {
            string: [...commonString, 'width', 'height'],
            bool: [...commonBool]
          }
        }
      ]
  }
];