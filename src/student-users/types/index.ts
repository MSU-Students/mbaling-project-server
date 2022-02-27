import { Exclude } from "class-transformer";

export interface StudentUser{
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    middlename: string;
    birthdate: string;
}

export class SerializeStudentUser{

    username: string;
    @Exclude()
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    middlename: string;
    birthdate: string;

}