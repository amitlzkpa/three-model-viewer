/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { v4 } from 'uuid';

export class PuppeteerHelper {
  constructor(page, rootSelector) {
    this.page = page;
    this.rootSelector = rootSelector;
  }

  textContent() {
    return this.page.evaluate(
      (rootSelector) => document.querySelector(rootSelector).shadowRoot.textContent,
      this.rootSelector
    );
  }

  textContentOf(selector) {
    return this.page.evaluate(
      (rootSelector, selector) => document.querySelector(rootSelector).shadowRoot.querySelector(selector).textContent,
      this.rootSelector,
      selector
    );
  }

  clickOn(selector) {
    return this.page.evaluate(
      (rootSelector, selector) =>
        document
          .querySelector(rootSelector)
          .shadowRoot.querySelector(selector)
          .click(),
      this.rootSelector,
      selector
    );
  }

  async listenFor(type) {
    const onCustomEvent = jest.fn();
    const functionName = v4() + type;

    await this.page.exposeFunction(functionName, (e) => {
      onCustomEvent(e);
    });

    await this.page.evaluate(
      (rootSelector, type, functionName) =>
        document.querySelector(rootSelector).addEventListener(type, (e) => window[functionName]({ detail: e.detail })),
      this.rootSelector,
      type,
      functionName
    );
    return onCustomEvent;
  }

  async setAttribute(name, value) {
    await this.page.evaluate(
      (rootSelector, name, value) => {
        if (value) {
          document.querySelector(rootSelector).setAttribute(name, value);
        } else {
          document.querySelector(rootSelector).removeAttribute(name);
        }
      },
      this.rootSelector,
      name,
      value
    );
  }

  async attributeOf(selector, name) {
    return this.page.evaluate(
      (rootSelector, selector, name) =>
        document
          .querySelector(rootSelector)
          .shadowRoot.querySelector(selector)
          .getAttribute(name),
      this.rootSelector,
      selector,
      name
    );
  }

  visibility(selector) {
    return this.page.evaluate(
      (rootSelector, selector) =>
        window
          .getComputedStyle(document.querySelector(rootSelector).shadowRoot.querySelector(selector))
          .getPropertyValue('visibility'),
      this.rootSelector,
      selector
    );
  }

  focus(selector) {
    return this.page.evaluate(
      (rootSelector, selector) =>
        document
          .querySelector(rootSelector)
          .shadowRoot.querySelector(selector)
          .focus(),
      this.rootSelector,
      selector
    );
  }

  async type(selector, text) {
    await this.focus(selector);
    await this.page.keyboard.type(text);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 200);
    });
  }
}
