<template>
    <div>
        <Header @doCurrencyFilter="filterByRate"/>
        <div class="exchange_info">
            <div class="exchange__info-header">
                <div class="date_picker">
                    <img src="@/assets/shape.svg" alt="shape">
                    <date-picker
                            v-model="date"
                            valueType="format"
                            :disabled-date="disabledBeforeToday"
                            :clearable="false"
                            format="YYYY.MM.DD"
                    ></date-picker>
                </div>
                <div class="currency__input-block">
                    <input type="number" @input="changeRate()" v-model="rate_num">
                    <span>EUR</span>
                </div>
            </div>
            <div class="exchange_cards" v-if="getRates.length">
                <VueSlickCarousel v-bind="settings" class="exchange_carousel" ref="carousel">
                    <div v-if="key !== 'id' && key !== 'currentCurrency'" v-for="(key) in Object.keys(getRates[0])"
                         :key="key" class="exchange__cards-item">
                        <div>{{ rate_num }} <span>{{ currency.where.or[0].currentCurrency }} =</span></div>
                        <div>{{parsedNum(getRates[0][key])}} <span>{{ key }}</span></div>
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
    </div>
</template>

<script>
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import {mapActions, mapGetters, mapMutations} from "vuex";
    import Header from '../organisms/Header'

    export default {
        name: "ExchangeSection",
        data() {
            return {
                currency: {
                    offset: 0,
                    limit: 100,
                    skip: 0,
                    where: {
                        or: [{
                            currentCurrency: 'EUR',
                        }]
                    },
                },
                rate_num: 1,
                rate: 1,

                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                    slidesPerRow: 2,
                    variableWidth: true,
                    arrows: true,
                    responsive: [{
                        breakpoint: 558,
                        settings: {
                            slidesPerRow: 1
                        }
                    }]
                },
                date: null,
            };
        },
        components: {
            DatePicker,
            VueSlickCarousel,
            Header
        },
        computed: {
            ...mapGetters(['getRates'])
        },
        methods: {
            ...mapActions(['getRatesAction']),
            ...mapMutations(['CHANGE_RATE']),
            changeRate() {
                this.CHANGE_RATE(this.rate_num);
            },
            parsedNum(num) {
                return this.rate_num !== '' ? this.rate_num > 0 ? parseFloat(this.rate_num * num).toFixed(2) : parseFloat(this.rate_num).toFixed(2) : ''
            },
            filterByRate(val) {
                this.currency.where.or[0].currentCurrency = val
                this.getRatesAction(JSON.stringify(this.currency)).then((res) => {
                    if (res) {
                        this.CHANGE_RATE(this.rate_num)
                    }
                })
            },
            doDateFilter() {
                this.currency.where.or[0].currencyDate = this.date
                this.getRatesAction(JSON.stringify(this.currency)).then((res) => {
                    if (res) {
                        this.CHANGE_RATE(this.rate_num)
                    }
                })
            },
            disabledBeforeToday(date) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                return date > new Date(today.getTime());
            },
        },
        watch: {
            date() {
                this.doDateFilter()
            }
        },
        mounted() {
            this.getRatesAction(JSON.stringify(this.currency))
        }
    }
</script>

<style scoped>
    .exchange_info {
        position: relative;
        background: #FFFFFF;
        padding: 30px 15px 78px;
    }

    .exchange__info-header {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: justify;
        -moz-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 10px;
    }

    .date_picker {
        position: relative;
    }

    .date_picker > img {
        position: absolute;
        left: 0;
        z-index: 5;
    }

    .currency__input-block input {
        border: none;
        border-bottom: 1px solid #D9D9D9;
        width: 120px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #2B2D33;
        outline: none;
        text-align: right;
        margin-right: 9px;
        background-color: transparent;
    }

    .currency__input-block input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none;
    }

    .exchange_cards {
        margin-top: 23px;
    }

    .currency__input-block span {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #B9B9B9;
    }

    .exchange__cards-item {
        background: #FFFFFF;
        box-shadow: 0px 3px 6px rgb(157 157 157 / 16%);
        border-radius: 12px;
        padding: 18px 36px 17px 30px;
        width: 39vw !important;
        margin: 0 10px 18px;
        outline: none;
    }

    .exchange__cards-item > div:nth-child(1) {
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.0171429px;
        color: #2B2D33;
        margin-bottom: 20px;
    }

    .exchange__cards-item > div:nth-child(1) span {
        color: #D9D9D9;
    }

    .exchange__cards-item > div:nth-child(2) {
        font-weight: 300;
        font-size: 48px;
        line-height: 56px;
        letter-spacing: 0.0342857px;
        color: #2B2D33;
    }

    .exchange__cards-item > div:nth-child(2) span {
        font-size: 27px;
    }

    .slick_button {
        background: #FFFFFF;
        box-shadow: 0px 5px 6px rgb(157 157 157 / 16%);
        border-radius: 8px;
        width: 112px;
        height: 34px;
        border: none;
        outline: none;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -moz-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #2B2D33;
        cursor: pointer;
    }

    .exchange__cards-buttons {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -moz-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 18px;
        padding: 0 10px;
    }

    .exchange__cards-buttons > button.disabled {
        color: #787878;
        background: #EFEFEF;

    }

    .exchange__cards-buttons > button.disabled svg path {
        fill: #787878;
    }

    .slick_button > svg {
        margin: 0 7px;
    }

    .showNext {
        margin-right: 18px;
    }

    .showNext > svg {
        transform: rotate(
                180deg
        );
    }

    @media only screen and (max-width: 700px) {
        .exchange__cards-item > div:nth-child(1) {
            font-size: 18px;
            line-height: 21px;
        }

        .exchange__cards-item > div:nth-child(2) {
            font-size: 36px;
            line-height: 42px;
        }

        .exchange__cards-item > div:nth-child(2) {
            font-size: 36px;
            line-height: 42px;
        }
    }

    @media only screen and (max-width: 558px) {
        .exchange__cards-item {
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 498px) {
        .currency__input-block input {
            font-size: 14px;
        }

        .currency__input-block input {
            width: 98px;
            margin-right: 7px;
        }

        .currency__input-block span {
            font-size: 14px;
            line-height: 16px;
        }

        .slick_content {
            padding: 0;
        }
    }

</style>
