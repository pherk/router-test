import { LitElement, html, customElement } from 'lit-element';

@customElement('nabu-help-home')
export class HelpHome extends LitElement {
  render() {
    return html`
      <p>Es lohnt sich auch einen Blick in SPZ-Wiki zu werfen ;-)</p>
      <ul>
       <li><a href="./help/search">Patienten-Suche</a></li>
      </ul>
    `;
  }
}

