import { PartialType, OmitType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @IsString()
    @IsNotEmpty()
    readonly phone: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
}

export class UpdateCustomerDto extends PartialType(OmitType(CreateCustomerDto, ['name', 'lastName']),){}