import { LightningElement } from "lwc";
import { NavigationMixin } from "Lightning/navigation";
export default class Day28NavidationDemo extends NavigationMixin(
  LightningElement
) {
  navClickHandler() {
    let pageref = {
      type: "standard__namedPage",
      attributes: {
        pageName: "home"
      }
    };
    this[NavigationMixin.Navigate](pageref);
  }
}
