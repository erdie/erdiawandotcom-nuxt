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
                        <div>
                            <span><img v-bind:src="blogPost.author.avatar" alt="Anna Erdiawan"></span>
                            <span>{{ blogPost.author.name }}</span>
                        </div>
                        <div>
                            <p><i class="icon-date"></i> {{ moment(blogPost.date).format('ll') }}</p>
                        </div>
                    </div>
                    <div class="blog-image">
                        <img v-bind:src="blogPost.featured_image.src" :alt="blogPost.featured_image.alt">
                    </div>
                    <div class="blog-article">
                        <article v-html="$md.render(blogPost.body)"></article>
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
    name: 'blog-post',
    head() {
        const metadata = this.blogPost
        return {
            title: `${metadata.title}`,
            meta: [
            {
                hid: `description`,
                name: 'description',
                content: `${metadata.description}`
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                property: 'og:url',
                content: `https://erdiawan.com/blog/`+`${metadata.slug}`,
            },
            {
                property: 'og:title',
                content: `${metadata.title}`,
            },
            {
                property: 'og:description',
                content: `${metadata.description}`,
            },
            {
                property: 'og:image',
                content: 'https://erdiawan.com'+`${metadata.featured_image.src}`,
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
                content: `https://erdiawan.com/blog/`+`${metadata.slug}`,
            },
            {
                property: 'twitter:title',
                content: `${metadata.title}`,
            },
            {
                property: 'twitter:description',
                content: `${metadata.description}`,
            },
            {
                property: 'twitter:image',
                content: 'https://erdiawan.com'+`${metadata.featured_image.src}`,
            }],
            link: [
                { rel: 'canonical', href: 'https://erdiawan.com/blog/'+`${metadata.slug}`+`/` },
                { rel: 'shortcut icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'mask-icon', href: '/favicon.svg', color: '#ffffff' }
            ]
        }
    },
    async asyncData({ params, payload }) {
        if (payload) return { blogPost: payload };
        else
        return {
            blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
        };
    },
    methods: {
        moment: (date) => {
            return moment(date);
        }
    }
}
</script>
