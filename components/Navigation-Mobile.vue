<template>
     <nav id="navigation-mobile">
        <div class="container">
            <div class="navigation-group container-flex justify-between">
                <div class="menu container-flex align-center">
                    <div class="brand">
                        <a href="/"><img src="~/assets/img/erdiawan-4.svg" alt="Anna Erdiawan"></a>
                    </div>
                    <div class="icon-menu" v-on:click="showMobileMenu = !showMobileMenu">
                        <ul v-bind:class="{active: showMobileMenu}">
                            <li><a href="/">Home</a></li>
                            <li><a href="../#portfolio">portfolio</a></li>
                            <li><a href="/journal">Journal</a></li>
                            <li class="active"><a href="/covid">Covid19</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container social-mobile">
            <div class="social">
                <small>Find me on social media</small>
                <ul>
                    <li><a href="http://fb.me/aerdiawan" target="_blank" rel="noopener"><i class="icon-facebook"></i></a></li>
                    <li><a href="https://instagram.com/aerdiawan" target="_blank" rel="noopener"><i class="icon-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/erdiawan/" target="_blank" rel="noopener"><i class="icon-linkedin"></i></a></li>
                    <li><a href="https://gitlab.com/erdie" target="_blank" rel="noopener"><i class="icon-gitlab"></i></a></li>
                    <li><a href="https://github.com/erdie" target="_blank" rel="noopener"><i class="icon-github"></i></a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data: function() {
        return{
            showMobileMenu: false
        }
    }
}
</script>