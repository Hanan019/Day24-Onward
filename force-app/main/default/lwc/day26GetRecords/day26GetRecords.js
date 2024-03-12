import { LightningElement, wire } from "lwc";
import { getRecords } from "lightning/uiRecordApi";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import CONTACT_NAME_FIELD from "@salesforce/schema/Contact.Name";

export default class Day26GetRecords extends LightningElement {
  outputs;
  errors;
  @wire(getRecords, {
    records: [
      {
        recordIds: ["0015j00001aSxhiAAC", "0015j00001XkcovAAB"],
        fields: [ACCOUNT_NAME_FIELD]
      },
      {
        recordIds: ["0035j00001MmXInAAN"],
        fields: [CONTACT_NAME_FIELD]
      }
    ]
  })
  outputFunction({ data, error }) {
    if (data) {
      console.log("data ", data);
      this.outputs = data;
      this.errors = null;
    } else if (error) {
      console.log("error ", error);
      this.errors = error;
      this.data = null;
    }
  }
}
