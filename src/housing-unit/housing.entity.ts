import { UserDto } from 'src/user/user.entity';
import { IHousing } from './../interfaces/housing.interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from 'src/interfaces/users.interfaces'; 
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HousingDto implements IHousing {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'housing_id'
  })
  id?: number;

  
  @ApiProperty({ default: 'Nahed' })
  @Column({ length: 100 })
  name: string;

  @ApiProperty({ example: 1 })
  @Column({ nullable: true })
  userID: number

  @OneToOne(() => UserDto, user => user.housing,
  {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name: 'userID'})
  user?: UserDto

}
