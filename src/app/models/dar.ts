export class Dar {
    id: number;
    uuid: any;
    number: string;
    createdOn: Date;
    modifiedOn: Date;
    title: string;
    description: string;
    validationRequestComment: string;
    validationRequestAnswer: string;
    disputeDate: Date;
    claimantFileCode: string;
    dateOpening: Date;
    datePrescription: Date;
    dateExtension: Date;
    dateARDispatch: Date;
    dateResponse: Date;
    dateReceipt: Date;
    dateClosing: Date;
    dateThirdPartyRequest: Date;
    allDocumentsReady: boolean;
    invocationArt23: boolean;
    invocationArt53: boolean;
    invocationOther: string;
    fees: number;
    internalComment: string;
    darState_id: number;
    darType_id: number;
    darClosingReason_id: number;
    claimant_id: number;
    administrativeUnit_id: number;
    assignee_id: number;
    createdBy_id: number;
    modifiedBy_id: number;
    validationRequestor_id: number;
    validator_id: number;
    disputeResult_id: number;
    extensionRequested: boolean;

    constructor() {
        this.createdOn = new Date();
        this.modifiedOn = new Date();
        this.title = '';
        this.description = '';
        this.validationRequestComment = '';
        this.validationRequestAnswer = '';
        this.disputeDate = new Date();
        this.claimantFileCode = '';
        this.dateOpening = new Date();
        this.datePrescription = new Date();
        this.dateExtension = new Date();
        this.dateARDispatch = new Date();
        this.dateResponse = new Date();
        this.dateReceipt = new Date();
        this.dateThirdPartyRequest = new Date();
        this.allDocumentsReady = false;
        this.invocationArt23 = false;
        this.invocationArt53 = false;
        this.invocationOther = '';
        this.fees = 0;
        this.internalComment = '';
        this.darState_id = 1;
        this.claimant_id = null;
        this.administrativeUnit_id = 1;
        this.disputeResult_id = null;
    }

}
