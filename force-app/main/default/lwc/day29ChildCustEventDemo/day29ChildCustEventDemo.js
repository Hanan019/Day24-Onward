import { LightningElement } from "lwc";

export default class Day29ChildCustEventDemo extends LightningElement {
  clickHandler() {
    ///1. create a custom event

    let mycustomevent = new CustomEvent("displaymsg");

    //2. dispatch the event
    this.dispatchEvent(mycustomevent);
  }
}
