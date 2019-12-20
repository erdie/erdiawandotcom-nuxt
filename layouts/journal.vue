<template>
  <div v-if="loading">
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
  data: () => ({
    loading: true,
    title: 'erdiawan.com - Journal of Anna Erdiawan'
  }),
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'List Journal of Anna Erdiawan' }
      ]
    }
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>