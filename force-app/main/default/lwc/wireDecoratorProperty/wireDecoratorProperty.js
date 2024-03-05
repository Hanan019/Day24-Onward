import { LightningElement, wire } from 'lwc';
import getAccountData from "@salesforce/apex/AccountHelper.getAccountData"


const columns = [
    { label: 'Acccount Name', fieldName: 'Name' },
    { label: 'Account Industry', fieldName: 'Industry' },
    { label: 'Account Rating', fieldName: 'Rating' },
];
export default class WireDecoratorProperty extends LightningElement {
    columns = columns;
    @wire(getAccountData) accounts;
    //accounts.data
    //accounts.error
}