import * as RequestManager from "../../Mitto/Messaging/Manager/RequestManager";
import { Request } from "../../Mitto/Messaging/Request"
import { JobStartRequest } from "../../Messaging/Request/JobStartRequest"
import { ACKResponse } from "../../Mitto/Messaging/Response/ACKResponse";

export class StartJob {
    private ProjectID: string;

    constructor(pProjectID: string) {
        this.ProjectID = pProjectID;
    }

    public Send(pCallback: (r: ACKResponse) => void) {
        RequestManager.DoRequest(
            new Request(
                new JobStartRequest(this.ProjectID),
                pCallback
            )
        );
    }
}