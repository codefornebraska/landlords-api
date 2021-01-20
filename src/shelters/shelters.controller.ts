import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {SheltersService} from "./shelters.service";
import {GetSheltersFilterDto} from "./dto/get-shelters-filter.dto";
import {Shelter} from "./shelter.entity";
import {GetUser} from "../auth/get-user.decorator";
import {User} from "../auth/user.entity";

@Controller('shelters')
export class SheltersController {
    constructor(private sheltersService: SheltersService) {
    }

    @Get()
    getMeals(
        @Query(ValidationPipe) filterDto: GetSheltersFilterDto,
        @GetUser() user: User
    ): Promise<Shelter[]> {
        return this.sheltersService.getShelters(filterDto, user)
    }
}
