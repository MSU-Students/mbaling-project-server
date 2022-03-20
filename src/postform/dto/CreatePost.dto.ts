import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePostDto implements CreatePostDto{

    
    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    photo: string;
 

    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    title: string;

    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    fee: string;

    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    negotiable: boolean;

    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    pkBox: boolean;

    @ApiProperty({example: 'hello'})
    @IsNotEmpty()
    pcBox: boolean;

    @ApiProperty({example: ``})
    @IsNotEmpty()
    description: string;

}