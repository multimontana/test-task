import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
require('dotenv').config();

const config = {
  name: 'mongoDbSource',
  connector: process.env.CONNECTOR,
  url: process.env.URL,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  useNewUrlParser: true
}


// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDbSourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoDbSource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoDbSource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
