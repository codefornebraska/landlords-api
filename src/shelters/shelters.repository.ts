import {EntityRepository, Repository} from "typeorm";
import {Shelter} from "./shelter.entity";
import {GetSheltersFilterDto} from "./dto/get-shelters-filter.dto";
import {User} from "../auth/user.entity";

@EntityRepository(Shelter)
export class SheltersRepository extends Repository<Shelter> {
    async getShelters(filterDto: GetSheltersFilterDto, user: User): Promise<Shelter[]> {
        const {status, search} = filterDto;
        const query = this.createQueryBuilder('shelter');
        if (filterDto.limit) {
            query.limit(filterDto.limit)
        }

        const shelters = await query.getMany()
        return shelters;
    }
}
