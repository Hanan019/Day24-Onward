import { LightningElement, wire } from "lwc";
import getContactList from "@salesforce/apex/contactController.getContactList";
export default class ContactList extends LightningElement {
  @wire(getContactList) contacts;

  selectionHandler(event) {
    let selectedContactId = event.detail;

    this.selectedContactId = this.contacts.data.find(
      (currItem) => currItem.Id === selectedContactId
    );
  }
}
