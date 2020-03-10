<template>
    <div>
        <section id="blog">
            <div class="container">
                <div class="blog item">
                    <div class="d:item__4 t:item__6 m:item__12" v-for="post in posts" :key="post.id">
                        <!-- <a v-bind:href="post.link"> -->
                            <div class="blog-card">
                                <!-- <nuxt-link :to="'/journal/'+post.slug"> -->
                                <nuxt-link :to="{ name: 'journal-id', params: { id: post.id, slug: post.slug } }">
                                <img v-bind:src="post.jetpack_featured_media_url" alt="">
                                </nuxt-link>
                                <div class="blog-title">
                                    <h2>{{post.title.rendered}}</h2>
                                </div>
                                <div class="blog-author">
                                    <small><strong>Posted on </strong> {{post.date_gmt.substring(0,10)}}</small>
                                </div>
                                <div class="blog-desc">
                                    <p>{{post.excerpt.rendered.substring(0,200)+".."}}</p>
                                </div>
                            </div>
                        <!-- </a> -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'journal',
    async asyncData() {
        const { data } = await axios.get('https://chromplex.com/wp-json/wp/v2/posts') 
        return {
            posts: data
        }
    },
}
</script>