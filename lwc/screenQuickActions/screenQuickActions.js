import { LightningElement, api, wire } from "lwc";
import { CloseActionScreenEvent } from 'lightning/actions';
export default class RecordContextAction extends LightningElement {
	@api recordId;
	@api objectApiName;
	getInfo = false;

	handleGetInfo() {
		const getInfo = true;
		this.getInfo = getInfo;
	}

	handleCancel() {
		this.dispatchEvent(new CloseActionScreenEvent());
	}
}