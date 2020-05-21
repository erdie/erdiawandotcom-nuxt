<template>
  <div>
    <Hero />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Portfolio from '~/components/PortfolioGrid.vue'
import Footer from '~/components/Footer.vue'

export default {
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        }
    },
    head: {
        meta: [
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'og:url',
            content: 'https://erdiawan.com',
        },
        {
            property: 'og:title',
            content: "erdiawan.com - Hi, I'm Erdi!",
        },
        {
            property: 'og:description',
            content: "Oh hi, this is Anna Erdiawan's personal site. I'm a Web developer interested in UI and UX.",
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
            content: "erdiawan.com - Hi, I'm Erdi!",
        },
        {
            property: 'twitter:description',
            content: "Oh hi, this is Anna Erdiawan's personal site. I'm a Web developer interested in UI and UX.",
        },
        {
            property: 'twitter:image',
            content: 'https://erdiawan.com/erdiawan-open-graph.jpg',
        }],
        link: [
            { rel: 'canonical', href: 'https://erdiawan.com' },
            { rel: 'shortcut icon', type: 'image/svg+xml', href: 'favicon.svg?v=1' },
            { rel: 'shortcut icon', type: 'image/svg+xml', href: 'favicon.svg' },
            { rel: 'mask-icon', href: 'favicon.svg', color: '#ffffff' },
            { rel: 'apple-touch-icon', sizes: '512x512', href: 'favicon.png?v=1' }
        ]
    },
    components: {
        Hero,
        Portfolio,
        Footer
    },
    methods: {
        message() {
        console.log('%cWhat are you looking for?', 'color: red; font-size: 18px; font-weight: bold;')
        }
    },
    mounted () {
        this.message()
    }
}
</script>

