import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `my-element2`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyElement2 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get observedAttribute() {
    return ['alt', 'sticky'];
  }
  constructor() {
    super()
    console.log('constructor')
  }
  disconnectedCallback() {
    console.log('disconnectedCallback')
  }
  ready() {
    console.log('ready')
  }
  adoptedCallback() {
    console.log('adoptedCallback')
  }
  attributeChangedCallback() {
    console.log('attributeChangedCallback')
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'my-element2',
      },
    };
  }
}

console.log(MyElement2.prototype)
window.customElements.define('my-element2', MyElement2);
