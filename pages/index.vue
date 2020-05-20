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
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        }
    },
    components: {
        Hero,
        Portfolio,
        Footer
    },
    methods: {
        message() {
        console.log('%cWhat are you looking for?', 'color: red; font-size: 18px; font-weight: bold;')
        }
    },
    mounted () {
        this.message()
    }
}
</script>

