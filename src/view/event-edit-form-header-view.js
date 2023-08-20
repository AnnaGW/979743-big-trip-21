// heder формы
import { createEventEditHeaderTemplate } from '../templates/event-edit-form-header-template';
import { createElement } from '../render';

export default class EventEditHeaderView {
  getTemplate() {
    return createEventEditHeaderTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
