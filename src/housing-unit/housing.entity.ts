import { IHousing } from './../interfaces/housing.interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from 'src/interfaces/users.interfaces'; 
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  
  @ApiProperty({ default: '123' })
  @Column({ length: 100 })
  userId: string;
}
