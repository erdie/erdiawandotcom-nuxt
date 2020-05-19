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
                            <img v-if="post.featured_image" :src="post.featured_image.src" :alt="post.featured_image.alt">
                            <img v-else :src="post.featured_image.src" :alt="post.featured_image.src.alt" >
                        </figure>
                        <div class="blog-title">
                            <h2>{{ post.title }}</h2>
                        </div>
                        <div class="blog-author">
                            <div>
                                <span><img v-bind:src="post.author.avatar" alt="Anna Erdiawan"></span>
                                <span>{{ post.author.name }}</span>
                            </div>
                            <div>
                                <p><i class="icon-date"></i> {{moment(post.date).format('ll')}}</p>
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
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
    layout: 'journal',
    name: 'blog',
    head() {
        const metadata = this.blogPosts
        return {
            title: `erdiwan.com - Erdiwan Anna Blog`,
            meta: [
            {
                hid: `description`,
                name: 'description',
                content: `Ini merupakan halaman blog Erdiawan Anna`
            }]
        }
    },
    computed: mapState({
        blogPosts: state => state.blogPosts
    }),
    methods: {
        moment: (date) => {
            return moment(date)
        }
    }
}
</script>
