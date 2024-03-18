import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";

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
  CreateAccDefValuesHandler() {
    //....
    const defaultValues = encodeDefaultFieldValues({
      Industry: "Energy",
      Rating: "Hot"
    });

    let pageRef = {
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Account",
        actionName: "new"
      },
      state: {
        defaultFieldValues: defaultValues
      }
    };
    this[NavigationMixin.Navigate](pageRef);
  }
}
