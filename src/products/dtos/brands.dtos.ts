import { PartialType, OmitType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateBrandDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    image: string;
}

export class UpdateBrandDto extends PartialType(OmitType(CreateBrandDto, ['name']),) {}