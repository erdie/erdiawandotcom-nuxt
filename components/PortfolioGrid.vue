<template>
    <section id="portfolio">
        <div class="container">
            <div class="title">
                <h2>My Works</h2>
                <small>For now, mostly website</small>
            </div>
            <div class="portfolio-grid item">
                <!-- <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                    <img src="../assets/portfolio/triv-dashboard.jpg" loading="lazy" alt="Triv Dashboard">
                    <h3>Triv Dashboard</h3>
                    <p>Tech Stack: SASS, HTML5, CSS3, JQUERY <br>
                        Frontend Dev: Anna Erdiawan & Ali Mahfud <br>
                        Demo: <a href="https://triv-dashboard.erdiawan.com" target="_blank" rel="noopener noreferrer">triv-dashboard.erdiawan.com</a>
                    </p>
                </div> -->
                <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                    <img src="~/assets/img/portfolio/tld-finder.jpg" rel="preload" loading="lazy" alt="Kalikesia">
                    <h3>TLD Finder</h3>
                    <p>Tech Stack: HTML5, CSS3, SASS, VUEJS, NUXT<br>
                        Frontend Dev: Anna Erdiawan<br>
                        Demo: <a href="https://tld-finder.erdiawan.com" target="_blank" rel="noopener noreferrer"><b>tld-finder.erdiawan.com</b></a><br>
                        Source Code: <a href="https://github.com/erdie/tld-finder" target="_blank"  rel="noopener noreferrer">Github</a>
                    </p>
                </div>
                <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                    <img src="~/assets/img/portfolio/devfest-jakarta.jpg"  rel="preload" loading="lazy" alt="DevFest 2019 Jakarta">
                    <h3>DevFest 2019 Jakarta</h3>
                    <p>Tech Stack: HTML5, CSS3, SASS, NUXT, VUE JS<br>
                        Frontend Dev: Anna Erdiawan<br>
                        Demo: <a href="https://devfest.gdgjakarta.org" target="_blank" rel="noopener noreferrer">devfest.gdgjakarta.org</a><br>
                        Source Code: <a href="https://github.com/gdgindonesia/devfest-19-landing" target="_blank"  rel="noopener noreferrer">Github</a>
                    </p>
                </div>
                <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                    <img src="~/assets/img/portfolio/digitaraya.jpg" rel="preload" loading="lazy" alt="Digitaraya">
                    <h3>Digitaraya</h3>
                    <p>Tech Stack: HTML5, CSS3, SASS, JQUERY<br>
                        Frontend Dev: Anna Erdiawan<br>
                        Demo: <a href="https://digitaraya.com" target="_blank" rel="noopener noreferrer">digitaraya.com</a><br>
                        <!-- Demo v1: <a href="https://v1.digitaraya.com" target="_blank" rel="noopener noreferrer">v1.digitaraya.com</a> (Wordpress) <br> -->
                        Source Code: <strong>Private</strong>
                    </p>
                </div>
                <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                    <img src="~/assets/img/portfolio/finest.jpg" rel="preload" loading="lazy" alt="Finest">
                    <h3>Finest</h3>
                    <p>Tech Stack: SASS, HTML5, CSS3, JQUERY <br>
                        Frontend Dev: Anna Erdiawan & Ade Armyatna<br>
                        Demo: <a href="https://finest.co.id" target="_blank" rel="noopener noreferrer">finest.co.id</a><br>
                        Source Code: <strong>Private</strong>
                    </p>
                </div>
            </div>
            <transition name="fade" mode="out-in">
                <div class="portfolio-grid item" key="3" v-show="isShowing">
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/kalikesia.jpg" rel="preload" loading="lazy" alt="Kalikesia">
                        <h3>Kalikesia</h3>
                        <p>Tech Stack: HTML5, CSS3, SASS, REACTJS, NEXTJS<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a target="_blank" rel="noopener noreferrer"><b>Unavailable</b></a><br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/triv-frontend.jpg" loading="lazy" alt="Triv Frontend">
                        <h3>Triv</h3>
                        <p>Tech Stack: SASS, HTML5, CSS3, JQUERY <br>
                            Frontend Dev: Anna Erdiawan & Ali Mahfud <br>
                            Demo: <a href="https://triv.id" target="_blank" rel="noopener noreferrer">triv.id</a><br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/digitarasa.jpg" loading="lazy" alt="Digitarasa by GoFood">
                        <h3>Digitarasa by GoFood</h3>
                        <p>Tech Stack: HTML5, CSS3, SASS<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="https://digitarasa.id" target="_blank" rel="noopener noreferrer">digitarasa.id</a><br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                    <!-- <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/founder-asia.jpg" loading="lazy" alt="FounderAsia">
                        <h3>Founder Asia</h3>
                        <p>Tech Stack: HTML5, CSS3, SASS, JQUERY<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="https://founderasia.com/" target="_blank" rel="noopener noreferrer">founderasia.com</a> <br>
                            Source Code: <strong> Private</strong>
                        </p>
                    </div> -->
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/exp-up.jpg" loading="lazy" alt="EXP-UP! Academy Esport">
                        <h3>EXP Esport Academy</h3>
                        <p>Tech Stack: HTML5, CSS3, SASS, JQUERY<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="https://exp-academy.id" target="_blank" rel="noopener noreferrer">exp-academy.id</a><br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/spt.jpg" loading="lazy" alt="Startup Pilihan Tempo">
                        <h3>Startup Pilihan Tempo</h3>
                        <p>Tech Stack: HTML5, CSS3, SASS, JQUERY<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="https://digitaraya.com/startuppilihantempo/" target="_blank" rel="noopener noreferrer">digitaraya.com/startuppilihantempo/</a><br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/digitaraya-tourism.jpg" loading="lazy" alt="Digitaraya Tourism Batch (One Pager)">
                        <h3>Digitaraya Tourism Batch (One Pager)</h3>
                        <p>Tech Stack: HTML5, CSS3, SASS, JQUERY<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="https://digitaraya.com/tiketcom-tourismbatch/" target="_blank" rel="noopener noreferrer">digitaraya.com/tiketcom-tourismbatch/</a> <br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/simona.jpg" loading="lazy" alt="Simona Ventures">
                        <h3>Simona Ventures</h3>
                        <p>Tech Stack: SASS, HTML5, CSS3, JQUERY<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="https://simona.ventures" target="_blank" rel="noopener noreferrer">simona.ventures</a><br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/simona-apacwomen.jpg" loading="lazy" alt="Simona Venture APAC Women ">
                        <h3>Simona Accelerator (One Pager)</h3>
                        <p>Tech Stack: SASS, HTML5, CSS3, JQUERY <br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="https://digitaraya.com/simona/" target="_blank" rel="noopener noreferrer">digitaraya.com/simona/</a><br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/lancong.jpg" loading="lazy" alt="Lancong">
                        <h3>Lancong.id</h3>
                        <p>Tech Stack: SASS, HTML5, CSS3, JQUERY<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="http://lancong.id" target="_blank" rel="noopener noreferrer">lancong.id</a><br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                    <!-- <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/kinesys.jpg" loading="lazy" alt="Kinesys Ventures">
                        <h3>Kinesys Ventures</h3>
                        <p>Tech Stack: SASS, HTML5, CSS3, JQUERY <br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="https://kinesysgroup.com" target="_blank" rel="noopener noreferrer">kinesysgroup.com</a><br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div> -->
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/mariviu.jpg" loading="lazy" alt="Mariviu">
                        <h3>Mariviu</h3>
                        <p>Tech Stack: WORDPRESS<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="https://mariviu.com" target="_blank" rel="noopener noreferrer">mariviu.com</a> <br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/chromplex.jpg" loading="lazy" alt="Chromplex">
                        <h3>Chromplex</h3>
                        <p>Tech Stack: WORDPRESS, MATERIAL LITE DESIGN<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="https://chromplex.com" target="_blank" rel="noopener noreferrer">chromplex.com</a> <br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                    <!-- <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/digiskul.jpg" loading="lazy" alt="Digiskul">
                        <h3>Digiskul</h3>
                        <p>Tech Stack: HTML5, CSS3, VUE JS<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Backend Dev: Rio Swarawan & Ali Mahfud<br>
                            Demo: <a href="http://digiskul.nuansa.id" target="_blank" rel="noopener noreferrer">digiskul.nuansa.id</a><br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div> -->
                    <div class="portfolio-card d:item__6 t:item__6 m:item__12">
                        <img src="~/assets/img/portfolio/perkim-sumbar.jpg" loading="lazy" alt="Perkim Sumbar">
                        <h3>Perkim Sumatera Barat</h3>
                        <p>Tech Stack: HTML5, CSS3, BOOTSTRAP<br>
                            Frontend Dev: Anna Erdiawan<br>
                            Demo: <a href="http://perkim.sumbarprov.go.id" target="_blank" rel="noopener noreferrer">perkim.sumbarprov.go.id</a><br>
                            Source Code: <strong>Private</strong>
                        </p>
                    </div>
                </div>
            </transition>
            <button @click="isShowing = !isShowing" v-show="!isShowing" class="btn btn-primary btn-show">
            Show All
            </button>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            isShowing: false
        }
    }
}
</script>

<style lang="sass" scoped>
    .btn-show
        display: block
        margin: 0 auto
        padding: 8px 25px
        transition: 0.3s
        margin-top: 15px
    .btn-show:hover
        opacity: 0.9
        transition: 0.3s
    .fade-enter-active,
    .fade-leave-active
        transition: opacity 1s
    .fade-enter,
    .fade-leave-to
        opacity: 0
</style>
