<template>
    <section id="hero">
        <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div class="container">
            <div class="hero-group container-flex justify-between align-center flex-column-mobile">
                <div class="hero-title">
                    <p class="hello animated animatedFadeInUp fadeInUp">Oh, Hi! 👋  I Am</p>
                    <div class="name hide-dark animated animatedFadeInUp fadeInUpName">
                        <img src="~/assets/img/erdiawan-2.svg" loading="lazy" alt="Anna Erdiawan">
                    </div>
                    <div class="name hide-light animated animatedFadeInUp fadeInUpName">
                        <img src="~/assets/img/erdiawan-3.svg" loading="lazy" alt="Anna Erdiawan">
                    </div>
                    <!-- <div class="name-type">
                        <h1>Anna Erdiawan</h1>
                    </div> -->
                    <div class="desc animated animatedFadeInUp fadeInUp">
                        <h3>Web Developer, IU/UX Enthusiast, Deep Understanding How SEO Works</h3>
                        <p>You can call me Erdi. Lives in Yogyakarta. Web Developer since 4 years ago who interested in IU/UX. Having been involved in building a media startup, I have a deep understanding of how SEO works.</p>

                        <p>I have a lot getting involved with the developer community and fans of Open Source technology. I love being part of the community since I was on campus and helping it grow in my city. Now I am organizing GDG Jogjakarta as a Co-Organizer.</p>
                    </div>
                </div>
                <div class="hero-image animated animatedFadeInUp fadeInUp">
                    <img src="~/assets/img/erdi.jpg" loading="lazy" alt="Anna Erdiawan">
                    <div class="btn-hire">
                        <a href="mailto:hi@erdiawan"><button class="btn btn-primary"><i class="icon-mail"></i> Send Me a Message</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-footer animated animatedFadeInUp fadeInUp">
            <div class="container">
                <div class="footer-group">
                    <div class="menu">
                        <ul>
                            <!-- <li class="active"><nuxt-link to="/">Home</nuxt-link></li> -->
                            <!-- <li><nuxt-link to="/#portfolio">Portfolio</nuxt-link></li> -->
                            <li><nuxt-link :to="{ path: '/',hash:'#portfolio'}">My Works</nuxt-link></li>
                            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                            <li><nuxt-link to="/covid">Covid19</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="social">
                        <p>Find me on social media</p>
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
    </section>
</template>
