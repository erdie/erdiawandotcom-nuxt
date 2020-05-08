<template>
  <div>
      <section id="blog">
          <div class="container">
              <div class="blog item">
                  <div class="d:item__4 t:item__6 m:item__12" v-for="(post,index) in posts" :key="post.slug + '_' + index">
                    <nuxt-link :to="'/blog/' + post.slug">
                      <!-- <a v-bind:href="post.link"> -->
                          <div class="blog-card">
                              <!-- <nuxt-link :to="'/journal/'+post.slug"> -->
                              <figure>
                                <img v-if="post.featured_image" :src="post.featured_image" alt="">
                                <img v-else src="http://via.placeholder.com/500x500" alt="" >
                              </figure>
                              <div class="blog-title">
                                  <h2>{{ post.title }}</h2>
                              </div>
                              <div class="blog-author">
                                  <small><strong><i class="icon-date"></i> </strong> {{distanceFromNow}}</small>
                              </div>
                              <div class="blog-desc">
                                  <p>{{post.summary.substring(0,200)+".."}}</p>
                              </div>
                          </div>
                      <!-- </a> -->
                    </nuxt-link>
                  </div>
              </div>
          </div>
          <div class="powered-by">
            <small>This Blog Powered by</small>
            <a href="https://buttercms.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.buttercms.com/JSSDbrHPSnGlLUcyHTn5" alt="">
            </a>
          </div>
      </section>
    </div>
</template>

<script>
import moment from 'moment'
import Butter from 'buttercms'
const butter = Butter('b1b4910662f0264ee73a62f21934b2e0a2c84d4e')
const params = {
  "preview": 1,
  "page": 1,
  "page_size": 10,
  "locale": 'en',
  "levels": 2
}

export default {
  layout: 'journal',
  name: 'blog-home',
  head() {
    return {
        title: `erdiawan.com - Journal of Anna Erdiawan`,
        meta: [
        {
            hid: `description`,
            name: 'description',
            content: `List of Journal Anna Erdiawan`
        }]
    }
  },
  data() {
    return {
      // page_title: 'Blog',
      posts: [],
      moment: moment
    }
  },
  methods: {
    getPosts() {
      butter.post.list({
        page: 1,
        page_size: 10
      }).then(res => {
        this.posts = res.data.data
      })
    },
    url () {
        butter.post.list({
        page: 1,
        page_size: 10
        }).then(res => {
            return res.data.data.map((post) => {
              console.log(post.slug)
              return '/blog/' + post.slug
            })
          })
      }
  },
  created() {
    this.getPosts()
  },
  mounted() {
    this.url()
  },
  computed: {
    distanceFromNow() {
         return moment(this.posts.created).startOf('hour').fromNow()
    }
  }
}
</script>
