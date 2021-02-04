<template>
  <div class="header_content">
    <h5>Курс EUR на <span>2020.01.19</span></h5>
    <div class="slick_content">
      <VueSlickCarousel v-bind="settings" class="header_carousel" ref="carousel">
        <div class="currency" @click="currency('USD')" :class="{'active': activeCurrnecy == 'USD'}">USD</div>
        <div class="currency" @click="currency('RUB')" :class="{'active': activeCurrnecy == 'RUB'}">RUB</div>
        <div class="currency" @click="currency('HRK')" :class="{'active': activeCurrnecy == 'HRK'}">HRK</div>
        <div class="currency" @click="currency('NOK')" :class="{'active': activeCurrnecy == 'NOK'}">NOK</div>
        <div class="currency" @click="currency('EUR')" :class="{'active': activeCurrnecy == 'EUR'}">EUR</div>
        <div class="currency" @click="currency('JPY')" :class="{'active': activeCurrnecy == 'JPY'}">JPY</div>
        <div class="currency" @click="currency('CAD')" :class="{'active': activeCurrnecy == 'CAD'}">CAD</div>
        <div class="currency" @click="currency('BGN')" :class="{'active': activeCurrnecy == 'BGN'}">BGN</div>
        <div class="currency" @click="currency('CZK')" :class="{'active': activeCurrnecy == 'CZK'}">CZK</div>
        <div class="currency" @click="currency('DKK')" :class="{'active': activeCurrnecy == 'DKK'}">DKK</div>
        <div class="currency" @click="currency('GBP')" :class="{'active': activeCurrnecy == 'GBP'}">GBP</div>
        <div class="currency" @click="currency('HUF')" :class="{'active': activeCurrnecy == 'HUF'}">HUF</div>
        <div class="currency" @click="currency('PLN')" :class="{'active': activeCurrnecy == 'PLN'}">PLN</div>
        <div class="currency" @click="currency('RON')" :class="{'active': activeCurrnecy == 'RON'}">RON</div>
        <div class="currency" @click="currency('SEK')" :class="{'active': activeCurrnecy == 'SEK'}">SEK</div>
        <div class="currency" @click="currency('CHF')" :class="{'active': activeCurrnecy == 'CHF'}">CHF</div>
        <div class="currency" @click="currency('NOK')" :class="{'active': activeCurrnecy == 'NOK'}">NOK</div>
        <div class="currency" @click="currency('TRY')" :class="{'active': activeCurrnecy == 'TRY'}">TRY</div>
        <div class="currency" @click="currency('AUD')" :class="{'active': activeCurrnecy == 'AUD'}">AUD</div>
        <div class="currency" @click="currency('BRL')" :class="{'active': activeCurrnecy == 'BRL'}">BRL</div>
        <div class="currency" @click="currency('CAD')" :class="{'active': activeCurrnecy == 'CAD'}">CAD</div>
        <div class="currency" @click="currency('CNY')" :class="{'active': activeCurrnecy == 'CNY'}">CNY</div>
        <div class="currency" @click="currency('HKD')" :class="{'active': activeCurrnecy == 'HKD'}">HKD</div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: "Header",
    data: () => ({
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        responsive: [{
          breakpoint: 700,
          settings: {
            slidesToShow: 6,
          }
        },
          {
            breakpoint: 670,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      },
      activeCurrnecy: 'EUR'
    }),
    components: {VueSlickCarousel},
    methods: {
      currency(name) {
        this.activeCurrnecy = name
        this.$emit('doCurrencyFilter', this.activeCurrnecy)
      }
    },
  }
</script>

<style scoped>
  .header_content {
    background-color: #FFE782;
    padding: 30px 24px 0;
  }

  .header_content h5 {
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    color: #2B2D33;
    margin: 0 0 8px 0;
  }

  .slick_content {
    position: relative;
    padding: 0 10px;
  }

  .currency {
    display: -webkit-box !important;
    display: -moz-box !important;
    display: -ms-flexbox !important;
    display: -webkit-flex !important;
    display: flex !important;
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
    height: 48px;
    cursor: pointer;
    outline: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #CCAE68;
    width: 90px !important;
  }

  .currency.active {
    background: #FFFFFF;
    border-radius: 12px 12px 0 0;
    color: #2B2D33;

  }

</style>
