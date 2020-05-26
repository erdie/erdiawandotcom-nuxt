<template>
    <nav id="navigation" class="animated fadeIn">
        <div class="container">
            <div class="navigation-group container-flex justify-between">
                <div class="menu container-flex align-center">
                    <div class="brand">
                        <nuxt-link to="/"><img src="~/assets/img/erdiawan-4.svg" alt="Anna Erdiawan"></nuxt-link>
                    </div>
                    <ul>
                        <!-- <li class="active"><nuxt-link to="/">Home</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/#portfolio">Portfolio</nuxt-link></li> -->
                        <li><nuxt-link :to="{ path: '/',hash:'#portfolio'}">My Works</nuxt-link></li>
                        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                        <li><nuxt-link to="/covid">Covid19</nuxt-link></li>
                    </ul>
                </div>
                <div class="social">
                    <div class="dark-mode-toggle">
                        <select v-model="$colorMode.preference">
                            <option value="system">
                                <span v-if="$colorMode.preference === 'light'"><i>☀️ </i> </span>
                                <span v-else=""><i>🌙 </i></span>
                                System
                            </option>
                            <option value="light"><i class="icon-sun"></i>☀️ Light</option>
                            <option value="dark"><i class="icon-moon"></i>🌙 Dark</option>
                        </select>
                    </div>
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
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="sass" scoped>
    #navigation
        .navigation-group
            .social
                display: flex
                justify-content: flex-start
                flex-direction: row
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
                    display: flex
                    flex-direction: column
                    align-items: center
                    justify-content: center
                    margin-right: 20px
                    select
                        -webkit-appearance: none
                        appearance: none
                        background-color: transparent
                        color: white
                        outline: none
                        border-radius: 30px
                        padding: 0px 10px 3px 10px
                        transition: 0.3s
                        border: 1px solid rgba(222, 222, 222, 0.2)
                        option
                            padding: 10px 20px
                    select:hover
                        background-color: rgba(255, 255, 255, 0.1)
                        transition: 0.3s
</style>
