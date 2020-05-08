<template>
  <div>
        <section id="blog-detail">
            <div class="container">
              <client-only>
                <div>
                    <div class="breadcrumb">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                            <li><a v-bind:href="post.slug">{{post.data.title}}</a></li>
                        </ul>
                    </div>
                    <div class="blog-title">
                        <div class="title">
                            <h1>{{ post.data.title }}</h1>
                        </div>
                    </div>
                    <div class="blog-author">
                        <!-- <div>
                            <span>{{ post.data.author.first_name }}</span>
                            <span>{{ post.data.author.last_name }}</span>
                        </div> -->
                        <div>
                            <p><i class="icon-date"></i> {{distanceFromNow}}</p>
                        </div>
                    </div>
                    <div class="blog-image">
                        <img v-bind:src="post.data.featured_image" alt="post.data.featured_image.alt">
                    </div>
                    <div class="blog-article" v-html="post.data.body"></div>
                    <nuxt-link
                      v-if="post.meta.previous_post"
                      :to="/blog/ + post.meta.previous_post.slug"
                      class="btn"
                    >
                      {{ post.meta.previous_post.title }}
                    </nuxt-link>
                    <nuxt-link
                      v-if="post.meta.next_post"
                      :to="/blog/ + post.meta.next_post.slug"
                      class="btn"
                    >
                      {{ post.meta.next_post.title }}
                    </nuxt-link>
                </div>
              </client-only>
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
  name: 'blog-post',
  head() {
    const metadata = this.post
    return {
        title: `${metadata.data.seo_title}`,
        meta: [
        {
            hid: `description`,
            name: 'description',
            content: `${metadata.data.meta_description}`
        }]
    }
  },
  data() {
    return {
      post: {
        data: {
          author: {}
        },
        meta: {}
      }
    }
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then((res) => {
          console.log(res.data)
          this.post = res.data
        })
        .catch((res) => {
          console.log(res)
        })
    }
  },
  watch: {
    $route(to, from) {
      this.getPost()
    }
  },
  created() {
    this.getPost()
  },
  computed: {
    distanceFromNow() {
         return moment(this.post.created).startOf('hour').fromNow()
    }
  }
}
</script>
