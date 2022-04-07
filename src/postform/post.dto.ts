import { ApiProperty } from "@nestjs/swagger";

export interface Posts {
    id?: number;
    photo: string;
    title: string;
    fee: string;
    negotiable: boolean;
    pkBox: boolean;
    pcBox: boolean;
    description: string;
 
   }
   
export class CreatePostDto implements Posts{

    
    @ApiProperty({example: 'hello'})
    photo: string;
 

    @ApiProperty({example: 'hello'})
    title: string;

    @ApiProperty({example: 'hello'})
    fee: string;

    @ApiProperty({example: 0})
    negotiable: boolean;

    @ApiProperty({example: 0})
    pkBox: boolean;

    @ApiProperty({example: 0})
    pcBox: boolean;

    @ApiProperty({example: `Example Description`})
    description: string;

    

}