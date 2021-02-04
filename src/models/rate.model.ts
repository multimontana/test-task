import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Rate extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'string',
    required: true,
  })
  currentCurrency: string;
  @property({
    type: 'number',
    required: true,
  })
  HKD: number;

  @property({
    type: 'number',
    required: true,
  })
  CAD: number;

  @property({
    type: 'number',
    required: true,
  })
  ISK: number;

  @property({
    type: 'number',
    required: true,
  })
  PHP: number;

  @property({
    type: 'number',
    required: true,
  })
  DKK: number;

  @property({
    type: 'number',
    required: true,
  })
  HUF: number;

  @property({
    type: 'number',
    required: true,
  })
  CZK: number;

  @property({
    type: 'number',
    required: true,
  })
  GBP: number;

  @property({
    type: 'number',
    required: true,
  })
  RON: number;

  @property({
    type: 'number',
    required: true,
  })
  SEK: number;

  @property({
    type: 'number',
    required: true,
  })
  IDR: number;

  @property({
    type: 'number',
    required: true,
  })
  HRK: number;

  @property({
    type: 'number',
    required: true,
  })
  RUB: number;

  @property({
    type: 'number',
    required: true,
  })
  INR: number;

  @property({
    type: 'number',
    required: true,
  })
  BRL: number;

  @property({
    type: 'number',
    required: true,
  })
  JPY: number;

  @property({
    type: 'number',
    required: true,
  })
  THB: number;

  @property({
    type: 'number',
    required: true,
  })
  CHF: number;

  @property({
    type: 'number',
    required: true,
  })
  EUR: number;

  @property({
    type: 'number',
    required: true,
  })
  MYR: number;

  @property({
    type: 'number',
    required: true,
  })
  BGN: number;

  @property({
    type: 'number',
    required: true,
  })
  TRY: number;

  @property({
    type: 'number',
    required: true,
  })
  CNY: number;

  @property({
    type: 'number',
    required: true,
  })
  NOK: number;

  @property({
    type: 'number',
    required: true,
  })
  NZD: number;

  @property({
    type: 'number',
    required: true,
  })
  ZAR: number;

  @property({
    type: 'number',
    required: true,
  })
  USD: number;

  @property({
    type: 'number',
    required: true,
  })
  MXN: number;

  @property({
    type: 'number',
    required: true,
  })
  SGD: number;

  @property({
    type: 'number',
    required: true,
  })
  AUD: number;

  @property({
    type: 'number',
    required: true,
  })
  ILS: number;

  @property({
    type: 'number',
    required: true,
  })
  KRW: number;

  @property({
    type: 'number',
    required: true,
  })
  PLN: number;

  @property({
    type: 'string',
    required: true,
  })
  currencyDate: string;

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Rate>) {
    super(data);
  }
}

export interface RateRelations {
  // describe navigational properties here
}

export type RateWithRelations = Rate & RateRelations;
