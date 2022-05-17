import { CreateHousingDto } from './housing.dto';
import { HousingDto } from './housing.entity';
import { HousingUnitService } from './housing-unit.service';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { UserDto } from 'src/user/user.entity';

@Controller('housing-unit')
export class HousingUnitController {

    
    constructor(
        private housingService: HousingUnitService,
        private authService: AuthService,
      ) {}
    
      @ApiBody({ type: HousingDto })
      @ApiOperation({ summary: 'Add new post', operationId: 'AddHousingUnit' })
      @ApiResponse({ status: 200, type: HousingDto })
      @Post('/create')
      createPost(@Body() createHousingtDto: HousingDto){
        return this.housingService.createPost(createHousingtDto)
    }
    
      @ApiOperation({ summary: 'Get all posts', operationId: 'GetHousingUnit' })
      @ApiResponse({ status: 200, type: HousingDto })
      @Get()
      async findAllPost(): Promise<HousingDto[]> {
        return this.housingService.findAll();
      }

  @ApiOperation({ summary: 'Get user by name', operationId: 'GetHousingName' })
  @ApiResponse({ status: 200, type: HousingDto })
  @Get(':name')
  async findOne(@Param('name') name: string): Promise<HousingDto> {
    const housingunit = await this.housingService.findByName(name);
    return {
      ...housingunit,
    };
  }
}
