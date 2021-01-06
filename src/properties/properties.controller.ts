import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { GetPropertiesFilterDto } from './dto/get-properties-filter.dto';
import { Property } from './property.entity';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('properties')
// @UseGuards(AuthGuard())
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {
  }

  @Get()
  getProperties(
    @Query(ValidationPipe) filterDto: GetPropertiesFilterDto,
    @GetUser() user: User,
  ): Promise<Property[]> {
    return this.propertiesService.getProperties(filterDto, user);
  }
}
