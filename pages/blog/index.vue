<template>
      <section id="blog">
          <div class="container">
              <div class="blog item">
                  <div class="d:item__4 t:item__6 m:item__12" v-for="(post,index) in blogPosts" :key="post.slug + '_' + index">
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
                                <!-- <div>
                                    <span><img src="~/assets/img/erdi.jpg" alt="Anna Erdiawan"></span>
                                    <span>{{ post.author.first_name }}</span>
                                    <span>{{ post.author.last_name }}</span>
                                </div> -->
                                <div>
                                    <p><i class="icon-date"></i> {{distanceFromNow}}</p>
                                </div>
                            </div>
                            <div class="blog-desc">
                                <p>{{post.description.substring(0,200)+".."}}</p>
                            </div>
                        </div>
                    </nuxt-link>
                  </div>
              </div>
          </div>
      </section>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
    layout: 'journal',
    computed: mapState({
        blogPosts: state => state.blogPosts,
        distanceFromNow() {
            return moment(this.blogPosts.date).format('ll')
        }
    }),
}
</script>
