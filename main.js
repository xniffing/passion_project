import * as _LIT from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
export class DropDownCountry extends _LIT.LitElement {
    static get properties() {
        return {
            msg: String
        };
    }
    render() {
        return _LIT.html`
      <div>${this.msg}test 123</div>
    ;`
    }
}
customElements.define('drop-down-country', DropDownCountry);