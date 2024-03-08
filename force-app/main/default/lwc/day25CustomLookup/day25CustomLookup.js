import { LightningElement, wire } from "lwc";
import searchRecords from "@salesforce/apex/customLookupController.searchRecords";

export default class Day25CustomLookup extends LightningElement {
  apiName = "Accuont";
  searchValue = "A";
  objectLabel = "Account";
  iconName = "standard:account";

  @wire(searchRecords, {
    objectApiName: "$apiName",
    searchKey: "$searchValue"
  })
  outputsFunction({ data, error }) {
    if (data) {
      console.log("data  : ", data);
    } else if (error) {
      console.log("error....... : ", error);
    }
  }

  //   get showOutput() {
  //     return this.outputs.data;
  //   }
}
