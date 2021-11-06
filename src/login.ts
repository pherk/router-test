import { LitElement, html, customElement, css } from 'lit-element';

@customElement('nabu-login')
export class Login extends LitElement {
  static styles = css`
    .container {
      margin: 20px;
    }
        button{
            padding: 0.5rem 1rem;
        }

        .container{
            height: 100vh;
        }
        label{
            width:100px;
            display: inline-block;
        }
        fx-control, fx-trigger{
            display: inline-block;
            margin:0.3rem 0;
        }
        input{
            height: 1.5rem;
        }
        .login{
            width:320px;
            position: absolute;
            top:50%;
            left:50%;
            transform: translateX(-50%) translateY(-50%);
            padding: 2rem;
            border:thin solid #666;
        }
  `;

  render() {
    return html`
      <div class="container">
        <h1>Welcome!</h1>
          <section class="login">
                    <fx-control ref="user">
                        <label>User</label>
                        <input type="text" autofocus>
                    </fx-control>
                    <fx-control ref="password" update-event="enter">
                        <label>Password</label>
                        <input type="password" class="widget">
                        <fx-send submission="login" event="value-changed"></fx-send>
                    </fx-control>

                    <fx-trigger>
                        <button>Login</button>
                        <fx-send if="inprogress eq 'false'" submission="login"></fx-send>
                    </fx-trigger>
          </section>
          <section>
                    <fx-output ref="user"><label slot="label">User</label></fx-output>
          </section>

      </div>
    `;
  }
}

