export class SubRequest {
    id: string;
    description: string;
    initialMessageAttached: boolean;
    dateDispatch: Date;
    dateEstimatedDelivery: Date;
    dateDunning: Date;
    dateDelivery: Date;
    createdOn: Date;
    modifiedOn: Date;
    dar_id: number;
    subRequestResult_id: number;
    administrativeUnit_id: number;
    createdBy_id?: number;
    modifiedBy_id?: number;
}
