<template>
    <section id="hero">
        <div class="container">
            <div class="hero-group container-flex justify-between align-center flex-column-mobile">
                <div class="hero-title">
                    <p>Hello I Am</p>
                    <div class="name hide-dark">
                        <img src="~/assets/img/erdiawan-2.svg" loading="lazy" alt="Anna Erdiawan">
                    </div>
                    <div class="name hide-light">
                        <img src="~/assets/img/erdiawan-3.svg" loading="lazy" alt="Anna Erdiawan">
                    </div>
                    <!-- <div class="name-type">
                        <h1>Anna Erdiawan</h1>
                    </div> -->
                    <p class="desc">You can call me Erdi. Live in Yogyakarta, i'm Web developer since 4 years ago. Interested with User Interface, User Interaction and User Experience.</p>
                    <p class="desc">I love being a part of community. Now i manage a community called GDG Jogjakarta as a Co-Manager. GDG Jogjakarta is Google Developer Group community based in Yogyakarta.</p>
                </div>
                <div class="hero-image">
                    <img src="~/assets/img/erdi.jpg" loading="lazy" alt="Anna Erdiawan">
                    <div class="btn-hire">
                        <a href="mailto:hi@erdiawan"><button class="btn btn-primary"><i class="icon-mail"></i> Send Me a Message</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-footer">
            <div class="container">
                <div class="footer-group">
                    <div class="menu">
                        <ul>
                            <li class="active"><nuxt-link to="/">Home</nuxt-link></li>
                            <!-- <li><nuxt-link to="/#portfolio">Portfolio</nuxt-link></li> -->
                            <li><nuxt-link :to="{ path: '/',hash:'#portfolio'}">My Works</nuxt-link></li>
                            <li><nuxt-link to="/journal">Journal</nuxt-link></li>
                            <li><nuxt-link to="/covid">Covid19</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="social">
                        <p>Find me on social media</p>
                        <ul>
                            <li><a href="http://fb.me/aerdiawan" target="_blank" rel="noopener"><i class="icon-facebook"></i></a></li>
                            <li><a href="https://instagram.com/aerdiawan" target="_blank" rel="noopener"><i class="icon-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/erdiawan/" target="_blank" rel="noopener"><i class="icon-linkedin"></i></a></li>
                            <li><a href="https://gitlab.com/erdie" target="_blank" rel="noopener"><i class="icon-gitlab"></i></a></li>
                            <li><a href="https://github.com/erdie" target="_blank" rel="noopener"><i class="icon-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>