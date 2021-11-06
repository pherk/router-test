import { LitElement, html, customElement, css } from 'lit-element';

@customElement('nabu-app')
export class App extends LitElement {
  static styles = css`
    .header {
      padding: 20px;
      font-size: 25px;
      text-align: center;
      background: white;
    }

    .topnav {
      background-color: #4f4c4c;
      overflow: hidden;
    }

    .topnav a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }

    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }

    .topnav a.active {
      background-color: #008cba;
      color: white;
    }
  `;

  render() {
    return html`
      <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/help">Hilfe</a>
        <a href="/about">Über</a>
      </div>
      <div class="header">
        <h2>Nabu 2.0</h2>
      </div>

      <slot></slot>
    `;
  }
}
