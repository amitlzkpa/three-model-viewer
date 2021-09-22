import { LitElement, html, customElement, TemplateResult, property } from 'lit-element';
import i18n from '../../services/i18n';

@customElement('my-hello')
export class MyHello extends LitElement {
  @property({ type: String })
  private to!: string;

  render(): TemplateResult {
    return html`
      <div>${i18n.t('hello.salutation')} ${this.to}!</div>
    `;
  }
}
