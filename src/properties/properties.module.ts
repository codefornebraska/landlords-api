import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertiesRepository } from './properties.repository';
import { AuthModule } from '../auth/auth.module';
import { DcgisModule } from '../external/dcgis/dcgis.module';
import { ZillowModule } from '../external/zillow/zillow.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([PropertiesRepository]),
    DcgisModule,
    ZillowModule,
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
  exports: [PropertiesService],
})
export class PropertiesModule {}
