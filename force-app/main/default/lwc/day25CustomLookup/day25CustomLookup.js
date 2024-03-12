import { LightningElement, wire } from "lwc";
import searchRecords from "@salesforce/apex/customLookupController.searchRecords";

const DELAY = 300;
export default class Day25CustomLookup extends LightningElement {
  apiName = "Account";
  searchValue;
  objectLabel = "Account";
  iconName = "standard:account";
  delayTimeout;
  selectedRecord = {
    selectedId: "",
    selectedName: ""
  };
  displayOptions = false;
  @wire(searchRecords, {
    objectApiName: "$apiName",
    searchKey: "$searchValue"
  })
  outputs;
  get isRecordSelected() {
    return this.selectedRecord.selectedId === "" ? false : true;
  }

  get showOutput() {
    return this.outputs.data;
  }
  changeHandler(event) {
    window.clearTimeout(this.delayTimeout);
    let enteredValue = event.target.value;

    // Debouncing: execute search after a delay
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    this.delayTimeout = setTimeout(() => {
      this.searchValue = enteredValue;
      this.displayOptions = true;
    }, DELAY);
  }

  clickHandler(event) {
    let selectedId = event.currentTarget.dataset.item;
    console.log("selectedId ", selectedId);
    let outputRecord = this.outputs.data.find(
      (currItem) => currItem.Id === selectedId
    );
    this.selectedRecord = {
      selectedId: outputRecord.Id,
      selectedName: outputRecord.Name
    };
    this.displayOptions = false;
  }

  removalSelectionHandler(event) {
    this.selectedRecord = {
      selectedId: "",
      selectedName: ""
    };
    this.displayOptions = false;
  }
}
