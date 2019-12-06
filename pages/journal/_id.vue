<template>
    <div>
        <section id="blog-detail">
            <div class="container">
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
                            <p>Published at {{post.date_gmt.substring(0,10)}}</p>
                        </div>
                    </div>
                    <div class="blog-image">
                        <img v-bind:src="post.jetpack_featured_media_url" alt="">
                    </div>
                    <div class="blog-article" v-html="post.content.rendered">
                        {{post.content.rendered}}
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
    async asyncData ({ store, route }) { 
        let { data} = await axios.get('https://chromplex.com/wp-json/wp/v2/posts/' + route.params.id + '/') 
        return {
            post: data
        }
    }
}
</script>