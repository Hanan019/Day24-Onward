import { LightningElement } from "lwc";

export default class Day29ParentCustEventDemo extends LightningElement {
  displaymessage = false;
  displaymessageHandler() {
    this.displaymessage = true;
  }
}
