<template>
     <nav id="navigation-mobile">
        <div class="container">
            <div class="navigation-group container-flex justify-between">
                <div class="menu container-flex align-center">
                    <div class="brand">
                        <nuxt-link to="/"><img src="~/assets/img/erdiawan-4.svg" alt="Anna Erdiawan"></nuxt-link>
                    </div>
                    <div class="icon-menu" v-on:click="showMobileMenu = !showMobileMenu">
                        <ul v-bind:class="{active: showMobileMenu}">
                            <!-- <li class="active"><nuxt-link to="/">Home</nuxt-link></li> -->
                            <!-- <li><nuxt-link to="/#portfolio">Portfolio</nuxt-link></li> -->
                            <li><nuxt-link :to="{ path: '/',hash:'#portfolio'}">My Works</nuxt-link></li>
                            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                            <!-- <li><nuxt-link to="/covid">Covid19</nuxt-link></li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container social-mobile">
            <div class="social">
                <div class="sub-social">
                    <small>Find me on social media</small>
                    <ul>
                        <li><a href="http://fb.me/aerdiawan" target="_blank" rel="noopener noreferrer" aria-label="Facebook" aria-hidden="true"><i class="icon-facebook"></i></a></li>
                        <!-- <li><a href="https://instagram.com/aerdiawan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" aria-hidden="true"><i class="icon-instagram"></i></a></li> -->
                        <li><a href="https://www.linkedin.com/in/erdiawan/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" aria-hidden="true"><i class="icon-linkedin"></i></a></li>
                        <!-- <li><a href="https://gitlab.com/erdie" target="_blank" rel="noopener noreferrer" aria-label="Gitlab" aria-hidden="true"><i class="icon-gitlab"></i></a></li> -->
                        <li><a href="https://github.com/erdie" target="_blank" rel="noopener noreferrer " aria-label="Github" aria-hidden="true"><i class="icon-github"></i></a></li>
                        <li><a href="https://twitter.com/aerdiawan_" target="_blank" rel="noopener noreferrer" aria-label="Twitter" aria-hidden="true"><i class="icon-twitter"></i></a></li>
                    </ul>
                </div>
                <DarkModeToggle />
            </div>
        </div>
    </nav>
</template>

<script>
import DarkModeToggle from '~/components/DarkModeToggle.vue'

export default {
    components: {
        DarkModeToggle
    },
    data: function() {
        return{
            showMobileMenu: false
        }
    }
}
</script>

<style lang="sass" scoped>
    #navigation-mobile
        .social-mobile
            .social
                display: flex
                justify-content: flex-start
                flex-direction: row
                justify-content: space-between
                padding: 5px 15px
                p
                    color: #ffffff
                    display: block
                ul
                    list-style: none
                    padding-left: 0
                    li
                        display: inline-block
                        margin: 0 5px
            .dark-mode-toggle
                margin-right: 0
</style>
