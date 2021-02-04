<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

  body {
    margin: 0;
  }

  #app {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
  }

  .mx-input-wrapper {
    width: 121px;
  }

  .mx-input-wrapper input {
    font-size: 18px;
    line-height: 21px;
    color: #2B2D33;
    padding-left: 24px;
    padding-right: 0;
    width: 100%;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid #D9D9D9;
    border-radius: 0;
    height: 25px;
    background-color: transparent;
  }

  .mx-input:hover, .mx-input:focus {
    border-color: #D9D9D9 !important;
  }

  .mx-icon-calendar, .mx-icon-clear {
    left: 0;
  }

  .mx-input-wrapper:hover .mx-icon-clear,
  .mx-icon-calendar > svg, mx-icon-clear > svg {
    opacity: 0;
  }

  .mx-icon-calendar {
    z-index: 11;
  }

  .header_carousel button.slick-prev:before {
    content: url('./assets/slick_left.svg') !important;
    background: transparent;
  }

  .header_carousel button.slick-next:before {
    content: url('./assets/slick_right.svg') !important;
    background: transparent;
  }

  .header_carousel button.slick-prev.slick-disabled {
    display: none !important;
  }

  .header_carousel button.slick-next.slick-disabled {
    display: none !important;
  }

  .header_carousel button {
    top: 19px;
  }

  .exchange_carousel button.slick-prev,
  .exchange_carousel button.slick-next {
    bottom: -70px;
    top: auto;
    width: 112px;
    height: 34px;
    background: #FFFFFF;
    box-shadow: 0px 5px 6px rgb(157 157 157 / 16%);
    border-radius: 8px;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  .exchange_carousel button.slick-prev {
    left: 41%;
    transform: translate(-50%, -50%);
    margin-right: 20px;
  }

  .exchange_carousel button.slick-next {
    margin-left: 20px;
    right: 26%;
    transform: translate(-50%, -50%);
  }

  .exchange_carousel button.slick-next {
    flex-direction: row-reverse;
  }

  .exchange_carousel button.slick-prev.slick-disabled,
  .exchange_carousel button.slick-next.slick-disabled {
    background: #EFEFEF;
  }

  .exchange_carousel button.slick-prev.slick-disabled:after,
  .exchange_carousel button.slick-next.slick-disabled:after {
    color: #787878;
  }

  .exchange_carousel button.slick-prev.slick-disabled:before,
  .exchange_carousel button.slick-next.slick-disabled:before {
    content: url('./assets/chevron-disabled.svg') !important;
    opacity: 1;
  }

  .exchange_carousel button.slick-next.slick-disabled:before {
    transform: rotate(180deg);
  }

  .exchange_carousel button.slick-prev.slick-disabled:before {
    transform: rotate(0);
  }

  .exchange_carousel button.slick-prev:before,
  .exchange_carousel button.slick-next:before {
    content: url('./assets/chevron.svg') !important;
    background: transparent;
    line-height: 0;
    opacity: 1;
  }

  .exchange_carousel button.slick-next:after,
  .exchange_carousel button.slick-prev:after {
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #2B2D33;
    cursor: pointer;

  }

  .exchange_carousel button.slick-prev:before {
    transform: rotate(180deg);
  }

  .exchange_carousel button.slick-next:after {
    content: 'Далее' !important;
    margin-right: 10px;
  }

  .exchange_carousel button.slick-prev:after {
    content: 'Назад' !important;
    margin-left: 10px;
  }

  .exchange_info .slick-slide > div {
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
  }

  @media only screen and (max-width: 750px) {
    .exchange_carousel button.slick-next {
      right: 25%;
      transform: translate(-51%, -50%);
    }
  }

  @media only screen and (max-width: 720px) {
    .exchange_carousel button.slick-prev {
      left: 40%;
      transform: translate(-48%, -50%);
    }

    .exchange_carousel button.slick-next {
      right: 24%;
    }
  }

  @media only screen and (max-width: 700px) {
    .exchange_carousel button.slick-prev {
      transform: translate(-51%, -50%);
    }

    .exchange_carousel button.slick-next {
      right: 23%;
    }

  }

  @media only screen and (max-width: 650px) {
    .exchange_carousel button.slick-next {
      right: 21%;
    }

    exchange_carousel button.slick-prev {
      transform: translate(-55%, -50%);
    }
  }

  @media only screen and (max-width: 620px) {
    .exchange_carousel button.slick-prev {
      transform: translate(-59%, -50%);
    }

    exchange_carousel button.slick-next {
      right: 20%;
    }
  }

  @media only screen and (max-width: 600px) {
    .exchange_carousel button.slick-next {
      right: 18%;
    }
  }

  @media only screen and (max-width: 560px) {
    .exchange_carousel button.slick-next {
      transform: translate(-42%, -50%);
    }

    .exchange_carousel button.slick-prev {
      transform: translate(-63%, -50%);
    }
  }

  @media only screen and (max-width: 530px) {
    .exchange_carousel button.slick-prev {
      left: 34%;
    }

    .exchange_carousel button.slick-next {
      transform: translate(0, -50%);
    }
  }

  @media only screen and (max-width: 380px) {
    .exchange_carousel button.slick-next {
      right: 25px;
    }

    .exchange_carousel button.slick-prev {
      left: 27%;
    }
  }

  @media only screen and (max-width: 370px) {
    .exchange_carousel button.slick-prev {
      left: 32%;
    }

    .exchange_carousel button.slick-next {
      right: 25px;
    }
  }

  @media only screen and (max-width: 498px) {
    .mx-datepicker, .mx-input-wrapper {
      width: 98px !important;
    }

    .mx-input-wrapper input {
      font-size: 14px;
    }
  }
</style>
