<template>
  <section>
    <div class="container-card">
      <div class="error-status">
        <img src="~/assets/img/erdiawan-2.svg" alt="Erdiawan" class="logo" />
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
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style lang="sass" scoped>
  .error-status
    border-radius: 15px
    background-color: white
    text-align: center
    padding: 25px
    margin: 30px 0
    .title
      margin-top: 15px
      font-size: 5em
      margin-bottom: 10px
    .info
      font-weight: 300
      color: #9aabb1
      font-size: 20px
      margin: 0 0 20px 0
    .button
      margin-top: 50px
      text-decoration: none
      color: #333
      font-weight: bold
</style>
