<template>
    <div class="covid">
        <div class="container">
        <h2>Kasus Covid19 di Indonesia</h2>
        <small>(Total kasus di Indonesia)</small>
        <ul class="indonesia">
            <li class="confirmed">Terkonfirmasi: <b>{{alldata.jumlahKasus}}</b></li>
            <li class="active">Dalam Perawatan: <b>{{alldata.perawatan}}</b></li>
            <li class="recovered">Sembuh: <b>{{alldata.sembuh}}</b></li>
            <li class="deaths">Meninggal: <b>{{alldata.meninggal}}</b></li>
        </ul>
        <h3>Data Per Provinsi</h3>
        <small>(Total kasus Per Provinsi)</small>
        <input class="province-search" type="text" v-model="search" placeholder="Ketikkan nama provinsi">
        <ul v-for="cases in filterList" :key="cases.id">
            <h4>🔴{{cases.provinsi}}</h4>
            <ul class="province">
                <li class="confirmed">Terkonfirmasi Akumulatif: <strong>{{cases.kasusPosi}}</strong></li>
                <li class="recovered">Sembuh Akumulatif: <strong>{{cases.kasusSemb}}</strong></li>
                <li class="deaths">Meninggal Akumulatif: <strong>{{cases.kasusMeni}}</strong></li>
            </ul> 
        </ul>
        <small class="covid-date">
            API dari <a href="https://github.com/mathdroid/indonesia-covid-19-api" target="_blank" rel="noopener">Mathdroid</a> <br>
            Data berdasarkan situs resmi pemerintah Indonesia <a href="https://www.covid19.go.id/">covid19.go.id</a>
        </small>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import 'vue-css-donut-chart/dist/vcdonut.css'

export default {
    data: () => ({
        loading: true,
        title: 'Kasus Covid19 di Indonesia',
        dummy: [{ value: 25 }, { value: 25 }],
        search: ''
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
        let firstURL = 'https://indonesia-covid-19-api.now.sh/api/'
        let secondURL = 'https://indonesia-covid-19-api.now.sh/api/provinsi'

        const firstResponse = await axios.get(firstURL)
        const secondResponse = await axios.get(secondURL)

        return {
            alldata: firstResponse.data,
            provincedata: secondResponse.data.data
        }
        asyncData().catch((error) => {
            console.log(error)
        })
    },
    computed: {
        filterList: function() {
            let filtering = this.provincedata
            if (this.search){
                filtering = filtering.filter((cases) => {
                    return cases.provinsi.toLowerCase().match(this.search.toLowerCase())
                })
            } 
            return filtering
        }
    }
}
</script>

<style lang="sass">
    .covid
        padding: 90px 0 10px 0
        // height: 70vh
        margin: 0 15px
        h2
            color: #5b64a0
            margin-bottom: 0
        h3
            margin-bottom: 0
        h4
            margin: 0
        ul
            padding: 0
        .indonesia
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
        .province-search
            display: block
            margin: 10px 0
            padding: 5px 10px
            outline: none
            border: 1px solid #dedede
            min-width: 200px
            border-radius: 30px
            font-size: 12px
        .province
            list-style: none
            padding: 0
            li
                margin-left: 19px
            .confirmed
                strong
                    color: #f2c94c
            .active
                strong
                    color: #f5a623
            .recovered
                strong
                    color: #219653
            .deaths
                strong
                    color: #d8232a

    @media (prefers-color-scheme: dark)
        .covid
            h2
                color: #51E3D4
            h3
                color: #51E3D4
            .covid-date
                a
                    color: #51E3D4
                    text-decoration: none
                a:hover
                    color: #5b64a0

</style>