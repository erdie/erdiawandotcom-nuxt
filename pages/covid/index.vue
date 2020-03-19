<template>
    <div class="covid">
        <div class="container">
        <h2>Kasus Covid19 di Indonesia</h2>
        <ul>
            <li>Terkonfirmasi: <b>{{alldata.confirmed.value}}</b></li>
            <li>Dalam Perawatan: <b>{{alldata.active.value}}</b></li>
            <li>Sembuh: <b>{{alldata.recovered.value}}</b></li>
            <li>Meninggal: <b>{{alldata.deaths.value}}</b></li>
        </ul>
        <small class="covid-date">
            <!-- Update terakhir: {{alldata.metadata.lastUpdatedAt}} <br> -->
            API dari <a href="https://indonesia-covid-19.mathdro.id/api" target="_blank" rel="noopener">Mathdroid</a>
        </small>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        loading: true,
        title: 'Kasus Covid19 di Indonesia'
    }),
    head () {
        return {
        title: this.title,
        meta: [
            { hid: 'description', name: 'description', content: 'Kasus Covid19 di Indonesia' }
        ]
    }},
    layout: 'journal',
    async asyncData() {
        const { data } = await axios.get('https://indonesia-covid-19.mathdro.id/api') 
        return {
            alldata: data
        }
    },
}
</script>

<style lang="sass">
    .covid
        padding: 90px 0 10px 0
        // height: 70vh
        margin: 0 15px
        h2
            color: #5b64a0
    @media (prefers-color-scheme: dark)
        .covid
            h2
                color: #51E3D4
            .covid-date
                a
                    color: #51E3D4
                    text-decoration: none
                a:hover
                    color: #5b64a0

</style>