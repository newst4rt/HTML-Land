export const htmlAttributeDescription = [
  {
    attribute: "id",
    description: "Specifies a unique id for an HTML element. The id must be unique within the document and is used to target the element with CSS, JavaScript, and fragment links."
  },
  {
    attribute: "class",
    description: "Specifies one or more space-separated class names for an element. Classes are used to point to a class in a style sheet and can be used by JavaScript to select and manipulate elements."
  },
  {
    attribute: "name",
    description: "Specifies a name for the element. Depending on the element it is used as the key of submitted form data, as the name of a metadata entry, as a browsing context name, or as a reference target such as for image maps."
  },
  {
    attribute: "value",
    description: "Specifies the value of the element. Depending on the element it is the value that is submitted with a form, the current value of a gauge or progress bar, the machine-readable value of a data element, or the ordinal number of a list item."
  },
  {
    attribute: "disabled",
    description: "A boolean attribute that disables the element. A disabled element is unusable, not focusable, and its value is not submitted with the form. Only has an effect on form-related elements such as button, fieldset, select, option, optgroup, textarea, and link."
  },
  {
    attribute: "lang",
    description: "Specifies the language of the element's content as a language tag, for example en or de. Used by browsers, search engines, and screen readers."
  },
  {
    attribute: "xmlns",
    description: "Specifies the XML namespace of the document or element, for example http://www.w3.org/2000/svg for SVG or http://www.w3.org/1998/Math/MathML for MathML."
  },
  {
    attribute: "href",
    description: "Specifies the URL that the element links to or loads a resource from. For base it is the base URL for all relative URLs in the document."
  },
  {
    attribute: "target",
    description: "Specifies where to open the linked document or display the response, such as _self, _blank, _parent, or _top, or the name of a browsing context."
  },
  {
    attribute: "rel",
    description: "Specifies the relationship between the current document and the linked resource, such as stylesheet, icon, preload, noopener, or nofollow."
  },
  {
    attribute: "type",
    description: "Specifies the type of the element or resource. Depending on the element this is a MIME type (script, link, source, embed, object, style), a button type (button, submit, reset), or the numbering type of an ordered list (1, a, A, i, I)."
  },
  {
    attribute: "media",
    description: "Specifies a media query that the resource is intended for, for example (min-width: 600px). The resource is only applied or loaded if the query matches."
  },
  {
    attribute: "as",
    description: "Specifies the type of content that is loaded by a link element with rel=\"preload\" or rel=\"prefetch\", such as script, style, font, image, or fetch."
  },
  {
    attribute: "crossorigin",
    description: "Specifies how the element handles cross-origin requests. Accepts anonymous (no credentials) or use-credentials (cookies and credentials are sent)."
  },
  {
    attribute: "hreflang",
    description: "Specifies the language of the linked resource as a language tag, for example en or de."
  },
  {
    attribute: "integrity",
    description: "Contains a cryptographic hash of the resource (Subresource Integrity). The browser checks that the fetched file matches this hash and refuses to use it if it does not."
  },
  {
    attribute: "referrerpolicy",
    description: "Specifies which referrer information is sent when fetching the resource or following the link, such as no-referrer, origin, or strict-origin-when-cross-origin."
  },
  {
    attribute: "sizes",
    description: "Specifies the intended display size of an image or icon. For img and source it is a list of media conditions with slot widths that helps the browser pick from srcset; for link it lists icon dimensions such as 32x32."
  },
  {
    attribute: "content",
    description: "Specifies the value of the metadata entry defined by the name, http-equiv, or charset attribute of a meta element."
  },
  {
    attribute: "charset",
    description: "Specifies the character encoding of the document. The only valid value is utf-8."
  },
  {
    attribute: "http-equiv",
    description: "Specifies a pragma directive that acts like an HTTP header for a meta element, such as content-type, refresh, or content-security-policy."
  },
  {
    attribute: "nonce",
    description: "Specifies a cryptographic one-time token that is used by a Content Security Policy to allow an inline script or style element."
  },
  {
    attribute: "cite",
    description: "Specifies the URL of a document or message that explains the quotation or the reason for an edit. Applies to blockquote, q, del, and ins."
  },
  {
    attribute: "start",
    description: "Specifies the number at which an ordered list starts counting. The value is always an integer, even if the list uses letters or Roman numerals."
  },
  {
    attribute: "reversed",
    description: "A boolean attribute that specifies that the items of an ordered list are numbered in descending order."
  },
  {
    attribute: "download",
    description: "Specifies that the linked resource is downloaded instead of opened. An optional value suggests a file name for the downloaded file."
  },
  {
    attribute: "ping",
    description: "Specifies a space-separated list of URLs that receive a POST request when the link is followed. Used for tracking link clicks."
  },
  {
    attribute: "dir",
    description: "Specifies the text direction of the element's content: ltr (left to right), rtl (right to left), or auto (determined by the content)."
  },
  {
    attribute: "datetime",
    description: "Specifies a machine-readable date and time in a valid format such as 2026-11-07 or 2026-11-07T14:30. For del and ins it marks when the change was made."
  },
  {
    attribute: "alt",
    description: "Specifies alternative text that is shown if the image or area cannot be displayed and is read by screen readers."
  },
  {
    attribute: "coords",
    description: "Specifies the coordinates of the clickable region of an area element. The meaning of the numbers depends on the shape attribute."
  },
  {
    attribute: "shape",
    description: "Specifies the shape of the clickable region of an area element: rect, circle, poly, or default."
  },
  {
    attribute: "src",
    description: "Specifies the URL of the resource to embed or load, such as an image, audio, video, script, frame, or track file."
  },
  {
    attribute: "preload",
    description: "Hints to the browser how much of an audio or video file should be loaded in advance: none, metadata, or auto."
  },
  {
    attribute: "controls",
    description: "A boolean attribute that makes the browser display its default playback controls for the audio or video element."
  },
  {
    attribute: "autoplay",
    description: "A boolean attribute that starts playing the audio or video automatically as soon as possible. Browsers may block autoplay unless the media is muted."
  },
  {
    attribute: "loop",
    description: "A boolean attribute that makes the audio or video start over again every time it ends. For a marquee it is the number of times the content scrolls."
  },
  {
    attribute: "muted",
    description: "A boolean attribute that mutes the audio of the audio or video element by default."
  },
  {
    attribute: "srcset",
    description: "Specifies a comma-separated list of image URLs with width (w) or pixel density (x) descriptors, from which the browser selects the most suitable image."
  },
  {
    attribute: "width",
    description: "Specifies the width of the element in pixels, without a unit. Applies to elements such as img, video, canvas, iframe, embed, object, svg, and source."
  },
  {
    attribute: "height",
    description: "Specifies the height of the element in pixels, without a unit. Applies to elements such as img, video, canvas, iframe, embed, object, svg, and source."
  },
  {
    attribute: "loading",
    description: "Specifies when the browser loads the image or frame: eager (immediately) or lazy (deferred until it is near the viewport)."
  },
  {
    attribute: "decoding",
    description: "Provides a hint to the browser how an image should be decoded: sync, async, or auto."
  },
  {
    attribute: "usemap",
    description: "Specifies the name of an image map (prefixed with #) that is applied to the image or object. It refers to the name attribute of a map element."
  },
  {
    attribute: "ismap",
    description: "A boolean attribute that specifies that the image is a server-side image map. The coordinates of a click are sent to the server."
  },
  {
    attribute: "kind",
    description: "Specifies the kind of text track: subtitles, captions, descriptions, chapters, or metadata."
  },
  {
    attribute: "srclang",
    description: "Specifies the language of the text track data as a language tag. Required if kind is subtitles."
  },
  {
    attribute: "label",
    description: "Specifies a user-readable title for the element. Used for text tracks, option groups, and options."
  },
  {
    attribute: "default",
    description: "A boolean attribute that specifies that the text track is enabled by default, unless the user's preferences indicate otherwise."
  },
  {
    attribute: "poster",
    description: "Specifies the URL of an image that is shown while the video is loading or until the user starts playback."
  },
  {
    attribute: "playsinline",
    description: "A boolean attribute that specifies that the video is played inline within the page instead of automatically opening in fullscreen (relevant on mobile devices)."
  },
  {
    attribute: "srcdoc",
    description: "Specifies the HTML content of the page that is shown in the iframe. Overrides the src attribute."
  },
  {
    attribute: "allow",
    description: "Specifies a permissions policy for the iframe, for example which features such as camera, microphone, geolocation, or fullscreen the embedded page may use."
  },
  {
    attribute: "sandbox",
    description: "Enables extra restrictions for the content of the iframe. Space-separated tokens such as allow-scripts or allow-forms selectively lift individual restrictions."
  },
  {
    attribute: "allowfullscreen",
    description: "A boolean attribute that allows the content of the iframe to be displayed in fullscreen mode."
  },
  {
    attribute: "data",
    description: "Specifies the URL of the resource that is embedded by the object element."
  },
  {
    attribute: "form",
    description: "Associates the element with a form by the form's id, even if the element is not placed inside that form element."
  },
  {
    attribute: "viewBox",
    description: "Defines the position and dimension of the SVG viewport in user space as four numbers: min-x, min-y, width, and height."
  },
  {
    attribute: "fill",
    description: "Defines the color that is used to paint the inside of an SVG shape or text."
  },
  {
    attribute: "stroke",
    description: "Defines the color that is used to paint the outline of an SVG shape or text."
  },
  {
    attribute: "display",
    description: "Specifies how a math element is displayed: block (on its own line, centered) or inline (within the flow of text)."
  },
  {
    attribute: "async",
    description: "A boolean attribute that loads the script in parallel with the HTML parsing and executes it as soon as it is available."
  },
  {
    attribute: "defer",
    description: "A boolean attribute that loads the script in parallel with the HTML parsing and executes it after the document has been parsed."
  },
  {
    attribute: "nomodule",
    description: "A boolean attribute that prevents the script from being executed in browsers that support ES modules. Used to provide fallbacks for old browsers."
  },
  {
    attribute: "span",
    description: "Specifies the number of columns that the col or colgroup element spans. The default value is 1."
  },
  {
    attribute: "colspan",
    description: "Specifies the number of columns that a table cell spans. The default value is 1."
  },
  {
    attribute: "rowspan",
    description: "Specifies the number of rows that a table cell spans. The default value is 1."
  },
  {
    attribute: "headers",
    description: "Specifies a space-separated list of the ids of the th elements that apply to this table cell."
  },
  {
    attribute: "scope",
    description: "Specifies which cells a table header cell applies to: row, col, rowgroup, or colgroup."
  },
  {
    attribute: "abbr",
    description: "Specifies a short description or abbreviation of the content of a table header cell."
  },
  {
    attribute: "formaction",
    description: "Specifies the URL that processes the form data on submission. Overrides the action attribute of the form."
  },
  {
    attribute: "formenctype",
    description: "Specifies how form data is encoded when it is submitted, for example application/x-www-form-urlencoded or multipart/form-data. Overrides the enctype attribute of the form."
  },
  {
    attribute: "formmethod",
    description: "Specifies the HTTP method (get or post) used when submitting the form data. Overrides the method attribute of the form."
  },
  {
    attribute: "formtarget",
    description: "Specifies where to display the response after submitting the form, such as _self, _blank, _parent, or _top. Overrides the target attribute of the form."
  },
  {
    attribute: "popovertarget",
    description: "Specifies the id of a popover element that the button controls, for example to show, hide, or toggle it."
  },
  {
    attribute: "formnovalidate",
    description: "A boolean attribute that specifies that the form data should not be validated on submission. Overrides the novalidate attribute of the form."
  },
  {
    attribute: "action",
    description: "Specifies the URL that processes the form data when the form is submitted."
  },
  {
    attribute: "method",
    description: "Specifies the HTTP method that is used when submitting the form data: get, post, or dialog."
  },
  {
    attribute: "enctype",
    description: "Specifies how form data is encoded when it is submitted with the post method, for example application/x-www-form-urlencoded, multipart/form-data, or text/plain."
  },
  {
    attribute: "autocomplete",
    description: "Specifies whether the browser may automatically fill in the field or fields based on earlier user input. Accepts values such as on, off, or specific tokens like email or username."
  },
  {
    attribute: "accept-charset",
    description: "Specifies the character encodings that are used for the form submission, as a space-separated list. The default is the encoding of the document."
  },
  {
    attribute: "novalidate",
    description: "A boolean attribute that specifies that the form data should not be validated when it is submitted."
  },
  {
    attribute: "for",
    description: "Specifies which element the label or output element belongs to. For a label it is the id of the form control, for an output it is a space-separated list of the ids of the elements that contribute to the result."
  },
  {
    attribute: "min",
    description: "Specifies the minimum value of the range. Used by the meter element."
  },
  {
    attribute: "max",
    description: "Specifies the maximum value of the range. Used by the meter and progress elements."
  },
  {
    attribute: "low",
    description: "Specifies the upper boundary of the low range of a meter. Values below it are considered low."
  },
  {
    attribute: "high",
    description: "Specifies the lower boundary of the high range of a meter. Values above it are considered high."
  },
  {
    attribute: "optimum",
    description: "Specifies the optimal value of a meter. It indicates which part of the range is considered good."
  },
  {
    attribute: "selected",
    description: "A boolean attribute that specifies that the option is pre-selected when the page loads."
  },
  {
    attribute: "size",
    description: "Specifies the number of visible options in a select list. Values greater than 1 display the list as a scrollable box. For the deprecated font element it is the font size."
  },
  {
    attribute: "multiple",
    description: "A boolean attribute that allows the user to select more than one option in a select element."
  },
  {
    attribute: "required",
    description: "A boolean attribute that specifies that the field must be filled out or an option must be selected before the form can be submitted."
  },
  {
    attribute: "placeholder",
    description: "Specifies a short hint that describes the expected value of the field. The hint is displayed in the field before the user enters a value."
  },
  {
    attribute: "rows",
    description: "Specifies the visible number of text lines of a textarea."
  },
  {
    attribute: "cols",
    description: "Specifies the visible width of a textarea in average character widths. For the deprecated frameset element it is the list of column widths."
  },
  {
    attribute: "minlength",
    description: "Specifies the minimum number of characters required in the field."
  },
  {
    attribute: "maxlength",
    description: "Specifies the maximum number of characters allowed in the field."
  },
  {
    attribute: "wrap",
    description: "Specifies how the text in a textarea is wrapped when the form is submitted: soft (no line breaks are inserted) or hard (line breaks are inserted)."
  },
  {
    attribute: "dirname",
    description: "Specifies that the text direction (ltr or rtl) of the field is submitted along with the form data, using the given value as the field name."
  },
  {
    attribute: "readonly",
    description: "A boolean attribute that specifies that the field is read-only. The value cannot be changed by the user, but the field remains focusable and is submitted with the form."
  },
  {
    attribute: "open",
    description: "A boolean attribute that specifies that the details or dialog element is open and its content is visible to the user."
  },
  {
    attribute: "shadowrootmode",
    description: "Specifies that the template creates a declarative shadow root for its parent element. Accepts open or closed."
  },
  {
    attribute: "shadowrootdelegatesfocus",
    description: "A boolean attribute that specifies that the declarative shadow root delegates focus to its first focusable element."
  },
  {
    attribute: "shadowrootclonable",
    description: "A boolean attribute that specifies that the declarative shadow root is copied when the host element is cloned."
  },
  {
    attribute: "color",
    description: "Specifies the text color of the deprecated font element as a color name or hex value. Use the CSS color property instead."
  },
  {
    attribute: "face",
    description: "Specifies the font family of the deprecated font element as a comma-separated list of names. Use the CSS font-family property instead."
  },
  {
    attribute: "behavior",
    description: "Specifies how the content of the deprecated marquee element moves: scroll, slide, or alternate."
  },
  {
    attribute: "direction",
    description: "Specifies the direction in which the content of the deprecated marquee element moves: left, right, up, or down."
  },
  {
    attribute: "scrollamount",
    description: "Specifies how many pixels the content of the deprecated marquee element moves per step."
  },
  {
    attribute: "scrolldelay",
    description: "Specifies the delay in milliseconds between each step of the deprecated marquee element."
  },
  {
    attribute: "scrolling",
    description: "Specifies whether scrollbars are shown in the deprecated frame element: yes, no, or auto."
  },
  {
    attribute: "noresize",
    description: "A boolean attribute that prevents the user from resizing the deprecated frame element."
  }
];
