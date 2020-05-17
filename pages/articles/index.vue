<template>
  <div>
      <section id="blog">
          <div class="container">
              <div class="blog item">
                  <div class="d:item__4 t:item__6 m:item__12" v-for="(post,index) in posts" :key="post.slug + '_' + index">
                    <nuxt-link :to="'/blog/' + post.slug">
                        <div v-if="loading" class="loading-card">
                            <div class="loading-image"></div>
                            <div class="loading-title"></div>
                            <div class="blog-author"></div>
                            <div class="blog-desc"></div>
                        </div>
                        <div v-else class="blog-card">
                            <figure>
                                <img v-if="post.featured_image" :src="post.featured_image" alt="">
                                <img v-else src="http://via.placeholder.com/500x500" alt="" >
                            </figure>
                            <div class="blog-title">
                                <h2>{{ post.title }}</h2>
                            </div>
                            <div class="blog-author">
                                <div>
                                    <span><img src="~/assets/img/erdi.jpg" alt="Anna Erdiawan"></span>
                                    <span>{{ post.author.first_name }}</span>
                                    <span>{{ post.author.last_name }}</span>
                                </div>
                                <div>
                                    <p><i class="icon-date"></i> {{distanceFromNow}}</p>
                                </div>
                            </div>
                            <div class="blog-desc">
                                <p>{{post.summary.substring(0,200)+".."}}</p>
                            </div>
                        </div>
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
            posts: [],
            moment: moment,
            loading: false
        }
    },
    methods: {
        getPosts() {
            this.loading = true
            butter.post.list({
                page: 1,
                page_size: 10
            }).then(res => {
                this.posts = res.data.data
                this.loading = false
            })
        },
        url() {
            butter.post.list({
            page: 1,
            page_size: 10
            }).then(res => {
                return res.data.data.map((post) => {
                // console.log('/blog/' + post.slug)
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
            return moment(this.posts.published).format('ll')
        }
    }
}
</script>
