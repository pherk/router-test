import { html, TemplateResult } from 'lit';
import '../src/n2lit-app.js';

export default {
  title: 'N2litApp',
  component: 'n2lit-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <n2lit-app style="--n2lit-app-background-color: ${backgroundColor}" .title=${title}></n2lit-app>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
