<template>
  <div>
    <Hero />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Portfolio from '~/components/PortfolioGrid.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Hero,
    Portfolio,
    Footer
  },
  methods: {
    message() {
      console.log('%cWhat are you looking for?', 'color: white; font-size: 18px; font-weight: bold;')
    }
  },
  mounted () {
    this.message()
  }
}
</script>

