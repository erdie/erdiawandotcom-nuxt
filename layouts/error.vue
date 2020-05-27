<template>
  <div v-if="loading">
    <Navigation />
    <NavigationMobile />
    <div class="error-status">
        <div class="error-status-group">
            <h1 class="title">
            {{ error.statusCode }}
            </h1>
            <h2 class="info">
            {{ error.message }}
            </h2>
            <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
            &#60; Back to Homepage
            </nuxt-link>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import NavigationMobile from '~/components/Navigation-Mobile.vue'
import Footer from '~/components/Footer.vue'

export default {
  props: ['error'],
  components: {
      Navigation,
      NavigationMobile,
      Footer
  },
  data: () => ({
    loading: true,
  }),
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

<style lang="sass" scoped>
    .error-status
        background-color: white
        text-align: center
        padding: 25px
        height: 80vh
        display: flex
        justify-content: center
        align-items: center
        .error-status-group
            .title
                margin-top: 15px
                font-size: 8em
                margin-bottom: 0px
                color: #474F85
            .info
                font-weight: 300
                color: #212121
                font-size: 20px
                margin: 0 0 40px 0
            .button
                margin-top: 50px
                text-decoration: none
                color: #333
                font-weight: bold
                color: #474F85
            .button:hover
                color: #51E3D4

    .light-mode body
        .error-status
            background-color: white
            text-align: center
            padding: 25px
            height: 80vh
            display: flex
            justify-content: center
            align-items: center
            .error-status-group
                .title
                    margin-top: 15px
                    font-size: 8em
                    margin-bottom: 0px
                    color: #474F85
                .info
                    font-weight: 300
                    color: #212121
                    font-size: 20px
                    margin: 0 0 40px 0
                .button
                    margin-top: 50px
                    text-decoration: none
                    color: #333
                    font-weight: bold
                    color: #474F85
                .button:hover
                    color: #51E3D4

    @media (prefers-color-scheme: dark)
        .error-status
            background-color: black
            .error-status-group
                .title
                    color: #51E3D4
                .info
                    color: white
                .button
                    color: #51E3D4
                .button:hover
                    color: #474F85
    .dark-mode body
        .error-status
            background-color: black
            .error-status-group
                .title
                    color: #51E3D4
                .info
                    color: white
                .button
                    color: #51E3D4
                .button:hover
                    color: #474F85
</style>
