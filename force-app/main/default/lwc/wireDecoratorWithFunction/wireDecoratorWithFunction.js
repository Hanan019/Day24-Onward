import { LightningElement, wire } from 'lwc';
import getAccountData from "@salesforce/apex/AccountHelper.getAccountData";

const columns = [
    { label: 'Acccount Name', fieldName: 'Name' },
    { label: 'Account Industry', fieldName: 'Industry' },
    { label: 'Account Rating', fieldName: 'Rating' },
];
export default class WireDecoratorWithFunction extends LightningElement {
    accounts;
    errors;
    columns = columns;
    // Creating a method to deal with the data processing.
    @wire(getAccountData) accountFunction({ data, error }) {
        if (data) {
            console.log(data); 

            let updatedAccounts = data.map(currItem => {
                let updatedObject = {};
                if (!Object.prototype.hasOwnProperty.call(currItem, "Rating")) {
                    updatedObject = {...currItem, Rating: "Hot"};
                } 
                else{
                    updatedObject = {...currItem};
                }                
                return updatedObject;
            });

            console.log("Updated Acounts : ", updatedAccounts); 
            this.accounts = [...updatedAccounts];
            this.errors = null;
        } else if (error) {
            console.log(error);
            this.errors = error;
            this.accounts = null;
        }
    }
}
