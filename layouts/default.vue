<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'erdiawan.com - Anna Erdiawan Personal Site'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Portfolio, Story, Idea, and Journey of Anna Erdiawan' }
      ]
    }
  }
}
</script>