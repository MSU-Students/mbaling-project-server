import { Body, Controller, Get, Post, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { LoginUserDto, AccessTokenDto, RefreshDto, ChangePasswordDto } from 'src/user/user.dto';
import { UserDto } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.auth.guard';
import { LocalAuthGuard } from './local.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @ApiBody({ type: UserDto })
  @ApiOperation({ summary: 'Register User', operationId: 'register' })
  @ApiResponse({ status: 200, type: UserDto })
  @Post('/register')
  create(@Body() user: UserDto) {
    if (user.refreshToken == '') {
      return this.authService.register({
        ...user,
        refreshToken: undefined,
      });
    }
  }

  @ApiOperation({
    summary: 'Login User',
    operationId: 'login',
  })
  @ApiParam({
    name: 'user',
    type: LoginUserDto,
  })
  @UseGuards(LocalAuthGuard)
  @ApiResponse({
    status: 200,
    type: AccessTokenDto,
  })
  @Post('login')
  async login(@Request() req) {
    const { refreshToken, accessToken, userId } = await this.authService.login(
      req.user,
    );
    await this.userService.setCurrentRefreshToken(refreshToken, userId);
    return { refreshToken, accessToken };
  }

  @ApiOperation({
    summary: 'Change the password',
    operationId: 'changePassword',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiBody({
    type: ChangePasswordDto,
  })
  @Post('changepassword')
  async changePassword(@Request() req, @Body() info: ChangePasswordDto) {
    const user = await this.userService.findOne(req.user.userId);
    return this.authService.changePassword(user, info);
  }
  

  @ApiOperation({
    summary: 'Refresh Token',
    operationId: 'refreshToken',
  })
  @ApiBody({
    type: RefreshDto,
  })
  @ApiResponse({
    status: 200,
    type: AccessTokenDto,
  })
  @ApiBearerAuth()
  @Post('refresh_token')
  async refreshToken(@Request() req) {
    const accessToken = this.authService.getAccessToken(req.user);
    return { accessToken };
  }

  @ApiOperation({
    summary: 'logout given user',
    operationId: 'logout',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logOut(@Request() req) {
    await this.authService.removeRefreshToken(req.user.userId);
  }

  @ApiOperation({
    summary: 'get profile info',
    operationId: 'profile',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, type: UserDto })
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.userService.findOne(req.user.userId);
    return {
      ...user,
      password: undefined,
      refreshToken: undefined,
    };
  }
}