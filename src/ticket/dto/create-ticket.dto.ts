import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { ActionDto } from "./action.dto";

export class CreateTicketDto {
    readonly referenceNumber : string;
    readonly region : string;
    readonly topic : string;
    readonly status : string;
    readonly createdAt : Date;
    @ValidateNested()  // Validates the nested CustomerDto
    @Type(() => ActionDto)
    readonly actions : ActionDto[];
}
