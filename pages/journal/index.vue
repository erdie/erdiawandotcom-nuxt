<template>
  <div>
    <Navigation />
    <NavigationMobile />
    <ComingSoon />
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import NavigationMobile from '~/components/Navigation-Mobile.vue'
import ComingSoon from '~/components/ComingSoon.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    NavigationMobile,
    ComingSoon,
    Footer
  }
}
</script>