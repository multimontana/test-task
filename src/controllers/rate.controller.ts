import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Rate} from '../models';
import {RateRepository} from '../repositories';

export class RateController {
  constructor(
    @repository(RateRepository)
    public rateRepository : RateRepository,
  ) {}

  @post('/rates')
  @response(200, {
    description: 'Rate model instance',
    content: {'application/json': {schema: getModelSchemaRef(Rate)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rate, {
            title: 'NewRate',
            exclude: ['id'],
          }),
        },
      },
    })
    rate: Omit<Rate, 'id'>,
  ): Promise<Rate> {
    return this.rateRepository.create(rate);
  }

  @get('/rates/count')
  @response(200, {
    description: 'Rate model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async data(
    @param.where(Rate) where?: Where<Rate>,
  ): Promise<Count> {
    return this.rateRepository.count(where);
  }

  @get('/rates')
  @response(200, {
    description: 'Array of Rate model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rate, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Rate) filter?: Filter<Rate>,
  ): Promise<Rate[]> {
    return this.rateRepository.find(filter);
  }

  @patch('/rates')
  @response(200, {
    description: 'Rate PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rate, {partial: true}),
        },
      },
    })
    rate: Rate,
    @param.where(Rate) where?: Where<Rate>,
  ): Promise<Count> {
    return this.rateRepository.updateAll(rate, where);
  }

  @get('/rates/{id}')
  @response(200, {
    description: 'Rate model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rate, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Rate, {exclude: 'where'}) filter?: FilterExcludingWhere<Rate>
  ): Promise<Rate> {
    return this.rateRepository.findById(id, filter);
  }

  @patch('/rates/{id}')
  @response(204, {
    description: 'Rate PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rate, {partial: true}),
        },
      },
    })
    rate: Rate,
  ): Promise<void> {
    await this.rateRepository.updateById(id, rate);
  }

  @put('/rates/{id}')
  @response(204, {
    description: 'Rate PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rate: Rate,
  ): Promise<void> {
    await this.rateRepository.replaceById(id, rate);
  }

  @del('/rates/{id}')
  @response(204, {
    description: 'Rate DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rateRepository.deleteById(id);
  }
}
