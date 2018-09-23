The DOM tree is ![depth first traversal](depth-first-tree.png) [by definition](https://dom.spec.whatwg.org/#trees).
An example can be `document.querySelectorAll()` or even event bubbling.

Concepts

- Tree / Node
- [Selectors](https://drafts.csswg.org/selectors/)
- AbortController
- Node tree / Shadow tree
- Shadow root attached to a host in Node tree (called light tree)
- Shadow tree contains slots
- Slots, Slotables
- Elements
- Interfaces
- Ranges, TreeWalker

::slotted()

- Events in Shadow DOM

# Questions

before lesson
- How do you think about intereview with Polymer developer next Thursday?

# Links

https://dom.spec.whatwg.org/#trees
https://github.com/praveenpuglia/shadow-dom-in-depth
https://developer.mozilla.org/en-US/docs/Web/API/AbortController
https://github.com/tc39/proposal-cancellation#status
https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal
http://robdodson.me/shadow-dom-css-cheat-sheet/
https://developers.google.com/web/fundamentals/web-components/shadowdom
https://medium.com/dev-channel/focus-inside-shadow-dom-78e8a575b73
https://developer.mozilla.org/en-US/docs/Web/Web_Components
https://github.com/mdn/web-components-examples
https://blog.sessionstack.com/how-javascript-works-the-internals-of-shadow-dom-how-to-build-self-contained-components-244331c4de6e - before lesson

https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201/#toc-style-host
http://w3c.github.io/webcomponents/publish/shadow/WD-shadow-dom-20151008
https://css-tricks.com/almanac/selectors/r/root/