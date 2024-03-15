import {
  getObjectInfo,
  getPicklistValues,
  getPicklistValuesByRecordType
} from "lightning/uiObjectInfoApi";
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

  //this method allows to access all the picklist values on the object and their values.
  @wire(getPicklistValuesByRecordType, {
    recordTypeId: "$accountprop.data.defaultRecordTypeId",
    objectApiName: ACCOUNT_OBJECT
  })
  accountInfoFunction;
  //   accountInfoFunction({ data, error }) {
  //     if (data) {
  //       console.log("Account Picklist ", data);
  //     } else if (error) {
  //       console.log("Account error ", error);
  //     }
  //   }
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
