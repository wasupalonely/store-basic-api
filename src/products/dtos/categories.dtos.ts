import { OmitType, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;
}

export class UpdateCategoryDto extends PartialType(OmitType(CreateCategoryDto, ['name']),) {}