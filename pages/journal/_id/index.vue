<template>
    <div>
        <section id="blog-detail">
            <div class="container">
              <client-only>
                <div>
                    <div class="breadcrumb">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/journal">Journal</a></li>
                            <li><a v-bind:href="post.id">{{post.title.rendered}}</a></li>
                        </ul>
                    </div>
                    <div class="blog-title">
                        <div class="title">
                            <h1>{{post.title.rendered}}</h1>
                        </div>
                    </div>
                    <div class="blog-author">
                        <div>
                            <!-- <p>Anna Erdiawan</p> -->
                        </div>
                        <div>
                            <p>Published at {{distanceFromNow}}</p>
                        </div>
                    </div>
                    <div class="blog-image">
                        <img v-bind:src="post.jetpack_featured_media_url" alt="">
                    </div>
                    <div class="blog-article" v-html="post.content.rendered">
                      <no-ssr>
                        {{post.content.rendered}}
                      </no-ssr>
                    </div>
                </div>
              </client-only>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    layout: 'journal',
    async asyncData ({ store, route }) {
        let { data } = await axios.get('https://mariviu.com/wp-json/wp/v2/posts/' + route.params.id + '/')
        return {
            post: data
        }
    },
    // async asyncData ({ store, route }) {
    //     let { data } = await axios.get('https://chromplex.com/wp-json/wp/v2/posts?slug=' + route.params.slug + '/')
    //     return {
    //         post: data
    //     }
    // },
    head() {
        const metadata = this.post

        return {
            title: `${metadata.title.rendered}`,
            meta: [{
                hid: `iOSUrl`,
                property: 'al:ios:url',
                content: `${metadata.title.rendered} - ${metadata.excerpt.rendered}`
            },
            {
                hid: `description`,
                name: 'description',
                content: `${metadata.title.rendered} - ${metadata.excerpt.rendered}`
            }]
        }
    },
    computed: {
      distanceFromNow() {
          return moment(this.post.date_gmt).format("MMM Do YY")
      }
    }
}
</script>
