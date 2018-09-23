import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class MyFirstApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <iron-ajax
        auto
        url="https://raw.githubusercontent.com/luchianenco/angular-flash-cards/master/tsconfig.json"
        params='{"any":"data"}'
        handle-as="json"
        on-response="handleResponse"
        debounce-duration="300">
      </iron-ajax>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'my-first-app'
      }
    };
  }
  handleResponse() {
    debugger;
  }
}

window.customElements.define('my-first-app', MyFirstApp);
