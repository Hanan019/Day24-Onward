import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
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

  accListHandler() {
    let pageRef =
      // Navigates to account list with the filter set to RecentlyViewedAccounts.
      {
        type: "standard__objectPage",
        attributes: {
          objectApiName: "Account",
          actionName: "list"
        },
        state: {
          filterName: "PlatinumandGoldSLACustomers"
        }
      };
    this[NavigationMixin.Navigate](pageRef);
  }
  CreateAccountHandler() {
    let pageref =
      //this function will be used when
      //we dont want to populate the default values.
      {
        type: "standard__objectPage",
        attributes: {
          objectApiName: "Account",
          actionName: "new"
        }
      };
    this[NavigationMixin.Navigate](pageref);
  }
}
