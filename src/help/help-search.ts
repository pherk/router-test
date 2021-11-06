import { LitElement, html, customElement } from 'lit-element';

@customElement('nabu-help-search')
export class HelpSearch extends LitElement {
  render() {
    return html`
      <h3>Patienten-Suche</h3>
      <p>Es lohnt sich auch einen Blick in SPZ-Wiki zu werfen ;-)</p>
    `;
  }
}

