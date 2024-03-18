import { LightningElement, api } from "lwc";

export default class ContactItem extends LightningElement {
  @api contact;
  clickHandler(event) {
    //prevent the anchor element from navigation
    event.preventDefault();

    //1. create a custom event
    const selectionevent = new CustomEvent("selection", {
      detail: this.contact.Id
    });
    //2. dispatch the event
    this.dispatchEvent(selectionevent);
  }
}
