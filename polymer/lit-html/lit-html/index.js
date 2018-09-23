import {LitElement, html, property} from '@polymer/lit-element'

class MyElement extends LitElement {
  @property()
  foo = 'foo'

  render() {
    return html`
      <style>
        :host([hidden]) {
          display: none;
        }
      </style>
      <h4>Foo: ${this.foo}</h4>
      <slot></slot>
    `
  }

}
customElements.define('my-element', MyElement)

