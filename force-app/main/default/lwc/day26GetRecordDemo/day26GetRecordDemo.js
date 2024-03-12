import { LightningElement, api, wire } from "lwc";
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_REVENUE from "@salesforce/schema/Account.AnnualRevenue";
import {
  getFieldDisplayValue,
  getFieldValue,
  getRecord
} from "lightning/uiRecordApi";
export default class Day26GetRecordDemo extends LightningElement {
  @api recordId;
  accName;
  accRevenue;

  @wire(getRecord, {
    recordId: "$recordId",
    fields: [ACCOUNT_NAME, ACCOUNT_REVENUE]
  })
  outputFunction({ data, error }) {
    if (data) {
      console.log("data ", data);
      //this.accName = data.fields.Name.value;...>this is manual Traversing..
      //this.accRevenue = data.fields.AnnualRevenue.value;
      this.accName = getFieldValue(data, ACCOUNT_NAME);
      this.accRevenue = getFieldDisplayValue(data, ACCOUNT_REVENUE);
      //getFieldDisplayValue. .. to return the value in the localized fronate.
    } else if (error) {
      console.log("error ", error);
    }
  }
}
