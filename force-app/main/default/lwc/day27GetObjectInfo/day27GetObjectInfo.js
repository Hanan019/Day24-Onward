import { getObjectInfos } from "lightning/uiObjectInfoApi";
import { LightningElement, wire } from "lwc";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import CONTACT_OBJECT from "@salesforce/schema/Contact";

export default class Day27GetObjectInfo extends LightningElement {
  accountinfo;
  accounterror;
  @wire(getObjectInfos, {
    objectApiNames: [ACCOUNT_OBJECT, CONTACT_OBJECT]
  })
  OutputFunction({ data, error }) {
    if (data) {
      console.log("Account Info Data", data);
      this.accountinfo = data;
      this.accounterror = null;
    } else if (error) {
      console.log("the errors in fethcing the data", error);
      this.accounterror = error;
      this.accountinfo = data;
    }
  }
}
