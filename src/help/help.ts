import { LitElement, css, html, customElement } from 'lit-element';

@customElement('nabu-help')
export class Help extends LitElement {
  static styles = css`
    .container {
      margin: 20px;
    }
  `;

  render() {
    return html`
      <h2>Hilfe</h2>
      <slot></slot>
    `;
  }
}
