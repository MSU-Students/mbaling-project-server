import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentUser{

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'student_id'
    })
    id: number
    
    @Column({
        default:'',
        nullable: false})
    username: string;

    @Column({
        default:'',
        nullable: false})
    password: string;

    @Column({
        default:'',
        name: 'email_address',
        nullable: false})
    email: string;

    @Column({
        default:'',
        nullable: false})
    firstname: string;

    @Column({
        default:'',
        nullable: false})
    lastname: string;

    @Column({
        default:'',
        nullable: false})
    middlename: string;

    @Column({
        default:'',
        nullable: false})
    birthdate: string;

    @Column({
        default:'',
        nullable: false})
    degree: string;

    @Column({
        default:'',
        nullable: false})
    department: string;

    @Column({
        default:'',
        nullable: false})
    college: string;
}