<template>
  <div class="exchange">
      <ExchangeSection/>
  </div>
</template>

<script>
import ExchangeSection from '../components/sections/ExchangeSection'
export default {
    name: "Exchange",
    components: {
        ExchangeSection
    }
}
</script>

<style scoped>
  .exchange{
    max-width: 768px;
    margin: 0 auto;
  }
</style>
