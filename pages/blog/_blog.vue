<template>
    <div>
        <section id="blog-detail">
            <div class="container">
                <div>
                    <div class="breadcrumb">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                            <li><a v-bind:href="blogPost.slug">{{blogPost.title}}</a></li>
                        </ul>
                    </div>
                    <div class="blog-title">
                        <div class="title">
                            <h1>{{ blogPost.title }}</h1>
                        </div>
                    </div>
                    <div class="blog-author">
                        <!-- <div>
                            <span><img src="~/assets/img/erdi.jpg" alt="Anna Erdiawan"></span>
                            <span>{{ post.data.author.first_name }}</span>
                            <span>{{ post.data.author.last_name }}</span>
                        </div> -->
                        <div>
                            <p><i class="icon-date"></i> {{blogPost.date}}</p>
                        </div>
                    </div>
                    <!-- <div class="blog-image">
                        <img v-bind:src="post.data.featured_image" alt="post.data.featured_image.alt">
                    </div> -->
                    <div class="blog-article">
                        <article>{{blogPost.body}}</article>
                    </div>
                    <!-- <nuxt-link
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
                    </nuxt-link> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    layout: 'journal',
    async asyncData({ params, payload }) {
        if (payload) return { blogPost: payload };
        else
        return {
            blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
        };
    },
    // computed: {
    //     distanceFromNow() {
    //         return moment(this.blogPosts.date).format('ll')
    //     }
    // }
}
</script>
