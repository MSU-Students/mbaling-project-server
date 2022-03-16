import { JwtModule } from '@nestjs/jwt';
import { SessionSerializer } from './session.serializer';
import { LocalStrategy } from './utils/LocalStrategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './../student-users/services/students/students.service';
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { StudentUser } from 'src/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
    TypeOrmModule.forFeature([StudentUser]),
    JwtModule.register({
      secret: 'SECRET',
      signOptions: { expiresIn: '60s'}
    }),
    PassportModule.register({session: true})
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    },
    {
      provide: 'STUDENT_SERVICE',
      useClass: StudentsService
    },
    LocalStrategy, SessionSerializer
  ]
})
export class AuthModule {}
