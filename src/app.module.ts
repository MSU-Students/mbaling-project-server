import { MediaService } from './media/media.service';
import { MediaController } from './media/media.controller';
import { HousingDto } from './housing-unit/housing.entity';
import { PostformService } from './postform/postform.service';
import { PostformController } from './postform/postform.controller';
import { UserService } from './user/user.service';
import { UserController } from 'src/user/user.controller';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDto } from './user/user.entity';
import { PostDto } from './entities/post.entity';
import { HousingUnitController } from './housing-unit/housing-unit.controller';
import { HousingUnitService } from './housing-unit/housing-unit.service';
import { MediaDto } from './media/media.dto';

@Module({
  imports: ([AuthModule,
    TypeOrmModule.forFeature([
      UserDto,
      PostDto,
      HousingDto,
      MediaDto
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mbalingdb',
      entities: [UserDto, PostDto, HousingDto,MediaDto
      ],
      // synchronize: true, 
      // dropSchema: true,

    })
  ]),
  
  controllers: [UserController, PostformController, HousingUnitController, MediaController],
  providers: [UserService, PostformService, HousingUnitService, MediaService],
})
export class AppModule {}
