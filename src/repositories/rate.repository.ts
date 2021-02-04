import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbSourceDataSource} from '../datasources';
import {Rate, RateRelations} from '../models';

export class RateRepository extends DefaultCrudRepository<
  Rate,
  typeof Rate.prototype.id,
  RateRelations
> {
  constructor(
    @inject('datasources.mongoDbSource') dataSource: MongoDbSourceDataSource,
  ) {
    super(Rate, dataSource);
  }
}
