<template>
  <div>
    <Navigation />
    <NavigationMobile />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import NavigationMobile from '~/components/Navigation-Mobile.vue'
import Footer from '~/components/Footer.vue'

export default {
    components: {
        Navigation,
        NavigationMobile,
        Footer
    },
}
</script>