import { CreateHousingDto } from './housing.dto';
import { HousingDto } from './housing.entity';
import { HousingUnitService } from './housing-unit.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';

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
      createPost(@Body() createHousingtDto: CreateHousingDto){
        return this.housingService.createPost(createHousingtDto)
    }
    
      @ApiOperation({ summary: 'Get all posts', operationId: 'GetHousingUnit' })
      @ApiResponse({ status: 200, type: HousingDto })
      @Get()
      async findAllPost(): Promise<HousingDto[]> {
        return this.housingService.findAll();
      }
}
