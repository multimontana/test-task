import {CronJob, cronJob} from '@loopback/cron';
import {RateRepository} from '../repositories';
import {repository} from "@loopback/repository";
import {currencies} from "../_utils/currency";
const request = require('request')
@cronJob()
export class InsertCurrencyJob extends CronJob {
    constructor(
        @repository(RateRepository) public reportRepository: RateRepository,
    ) {
        super({
            name: 'my-job',
            onTick: async () => {
                await this.performMyJob();
            },
            cronTime: '0 12 * * *',
            start: true,
        });
    }

    async performMyJob() {
        currencies.map((item) => {
            request(`${process.env.CURRENCY_API_URL}/latest?base=${item}`, async (error: object, response: object, body: string) => {
                const currenciesResponse = JSON.parse(body);
                    await this.reportRepository.create({
                        ...currenciesResponse.rates,
                        [item]: 1,
                        currentCurrency: item,
                        currencyDate: (currenciesResponse.date).split('-').join('.')
                    })
            })
        })
    }
}