<template>
    <div class="covid">
        <div class="container">
        <h2>Kasus Covid19 di Indonesia</h2>
        <ul>
            <li class="confirmed">Terkonfirmasi: <b>{{alldata.jumlahKasus}}</b></li>
            <li class="active">Dalam Perawatan: <b>{{alldata.perawatan}}</b></li>
            <li class="recovered">Sembuh: <b>{{alldata.sembuh}}</b></li>
            <li class="deaths">Meninggal: <b>{{alldata.meninggal}}</b></li>
        </ul>
        <!-- <h3>Detail</h3>
        <ul v-for="cases in allcases" :key="cases.id">
            <li>Kasus nomor: {{cases.no}}</li>
        </ul> -->
        <small class="covid-date">
            <!-- Update terakhir: {{alldata.metadata.lastUpdatedAt}} <br> -->
            API dari <a href="https://github.com/mathdroid/indonesia-covid-19-api" target="_blank" rel="noopener">Mathdroid</a> <br>
            Data berdasarkan dari situs resmi pemerintah Indonesia <a href="https://www.covid19.go.id/">covid19.go.id</a>
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
        const { data } = await axios.get('https://indonesia-covid-19-api.now.sh/api/')
        return {
            alldata: data
        }
    }
    // async asyncData() {
    //     const { datacases } = await axios.get('https://indonesia-covid-19-api.now.sh/api/kasus/') 
    //     return {
    //         allcases: datacases
    //     }
    // }
}
</script>

<style lang="sass">
    .covid
        padding: 90px 0 10px 0
        // height: 70vh
        margin: 0 15px
        h2
            color: #5b64a0
        ul
            list-style: none
            padding: 0
            .confirmed
                b
                    color: #f2c94c
            .active
                b
                    color: #f5a623
            .recovered
                b
                    color: #219653
            .deaths
                b
                    color: #d8232a
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