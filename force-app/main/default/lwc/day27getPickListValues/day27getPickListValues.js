import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import { LightningElement, wire } from "lwc";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";

export default class Day27getPickListValues extends LightningElement {
  //first we have to get the the recordType of the object.
  value;
  @wire(getObjectInfo, {
    objectApiName: ACCOUNT_OBJECT
  })
  accountprop;

  @wire(getPicklistValues, {
    recordTypeId: "$accountprop.data.defaultRecordTypeId",
    fieldApiName: ACCOUNT_INDUSTRY
  })
  industryPickList;
  //   industryPickList({ data, error }) {
  //     if (data) {
  //       console.log("industry data", data);
  //     } else if (error) {
  //       console.log(error);
  //     }
  //   }

  handleChange(event) {
    this.value = event.target.value;
  }
}
