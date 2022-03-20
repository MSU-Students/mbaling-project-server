import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PostEntity {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'post_id'
    })
    id: number

    
    @Column({
        default:'',
        nullable: false})
    photo: string;

    @Column({
        default:'',
        nullable: false})
    title: string;

    @Column({
        default:'',
        nullable: false})
    fee: string;

    @Column('bool')
    negotiable: boolean;

    @Column('bool')
    pkBox: boolean;

    @Column('bool')
    pcBox: boolean;

    @Column({
        default:'',
        nullable: false})
    description: string;



}