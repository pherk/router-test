import { LitElement, html, customElement, css } from 'lit-element';

@customElement('nabu-action')
export class Action extends LitElement {
  static styles = css`
    .container {
      margin: 20px;
    }
        button{
            padding: 0.5rem 1rem;
        }

        .wrapper{
            height: 100vh;
        }
        label{
            width:100px;
            display: inline-block;
        }
        fx-trigger{
            display: inline-block;
            margin:0.3rem 0;
        }
  `;

  render() {
    return html`
      <div class="container">
		    <h1>Action!</h1>
        <fx-trigger>
          <button onclick="location.href='/login'">logout</button>
<!--                    <fx-toggle case="loginCase"></fx-toggle> -->
          </fx-trigger>
      </div>
    `;
  }
}


