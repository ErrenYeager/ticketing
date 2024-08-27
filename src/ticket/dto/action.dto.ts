import { IsString } from "class-validator";

export class ActionDto {
    @IsString()
    callerId : string;

    @IsString()
    author : string;

    @IsString()
    note : string;

    @IsString()
    contactId : string;

    @IsString()
    contactFile : string;
}
