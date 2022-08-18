import { LightningElement, api } from "lwc";
import { CloseActionScreenEvent } from 'lightning/actions';

export default class ScreenQuickActions extends LightningElement {

    @api recordId;
    @api objectApiName;
    getInfo = false;

    handleGetInfo() {
        this.getInfo = true;
    }

    handleCancel() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}