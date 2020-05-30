<template>
    <section id="blog">
        <div class="container">
            <div class="blog item">
                <div class="d:item__4 t:item__6 m:item__12" v-for="(post,index) in blogPosts" :key="post.slug + '_' + index">
                <nuxt-link :to="'/blog/' + post.slug">
                    <div v-if="loading" class="loading-card fadeIn animated">
                        <div class="loading-image"></div>
                        <div class="loading-title"></div>
                        <div class="loading-author"></div>
                        <div class="loading-desc"></div>
                        <div class="loading-desc"></div>
                        <div class="loading-desc"></div>
                        <div class="loading-desc"></div>
                        <div class="loading-desc-short"></div>
                    </div>
                    <div v-else class="blog-card fadeIn animated">
                        <figure>
                            <img v-if="post.featured_image" :src="post.featured_image.src" loading="lazy" :alt="post.featured_image.alt">
                            <img v-else :src="post.featured_image.src" loading="lazy" :alt="post.featured_image.src.alt" >
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
    data() {
        return {
            loading: false
        }
    },
    head() {
        const metadata = this.blogPosts
        return {
            title: `Anna Erdiawan | Blog, Opinion, How To, Tutorials, Notes, Articles`,
            meta: [
            {
                hid: `description`,
                name: 'description',
                content: `Anna Erdiawan's Blog, writes about web development, opinion, tutorials, how to and more`
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                property: 'og:url',
                content: 'https://erdiawan.com/blog',
            },
            {
                property: 'og:title',
                content: "Anna Erdiawan Blog",
            },
            {
                property: 'og:description',
                content: "Oh hi, this is Anna Erdiawan's blog",
            },
            {
                property: 'og:image',
                content: 'https://erdiawan.com/erdiawan-open-graph.jpg',
            },
            {
                property: 'fb:app_id',
                content: '988591554889425',
            },
            {
                property: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                property: 'twitter:url',
                content: 'https://erdiawan.com',
            },
            {
                property: 'twitter:title',
                content: "Anna Erdiawan Blog",
            },
            {
                property: 'twitter:description',
                content: "Oh hi, this is Anna Erdiawan's blog",
            },
            {
                property: 'twitter:image',
                content: 'https://erdiawan.com/erdiawan-open-graph.jpg',
            },
            ],
            link: [
                { rel: 'canonical', href: 'https://erdiawan.com/blog/' },
                { rel: 'shortcut icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'mask-icon', href: '/favicon.svg', color: '#ffffff' }
            ]
        }
    },
    computed: mapState({
        blogPosts: state => state.blogPosts
    }),
    methods: {
        moment: (date) => {
            return moment(date)
        },
        delay() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 2000)
        }
    },
    mounted() {
        this.delay()
    }
}
</script>
