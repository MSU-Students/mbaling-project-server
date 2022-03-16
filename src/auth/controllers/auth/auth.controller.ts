import { AuthenticatedGuard } from './../../authenticated.guard';
import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req){
        console.log('Logged In')
        return req.user;
    }

    @UseGuards(AuthenticatedGuard)
    @Get('protected')
    getHello(@Request() req): string{
        console.log('Hello')
        return req.user;
    }
}

