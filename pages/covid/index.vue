<template>
    <div class="covid">
        <div class="container">
        <div class="covid-title">
            <h1>Kasus Covid19 di Indonesia</h1>
            <small>(Total kasus di Indonesia)</small>
        </div>
        <div class="item">
            <div class="d:item__8 t:item__8 m:item__12">
                <line-chart
                v-if="loaded" 
                :chartdata="chartdata"
                :options="options"/>
                <!-- <line-chart :chart-data="datacollection"></line-chart> -->
                <ul class="indonesia">
                    <li class="confirmed"><b>{{alldata.jumlahKasus}}</b><br>Terkonfirmasi</li>
                    <li class="active"><b>{{alldata.perawatan}}</b><br>Dalam Perawatan</li>
                    <li class="recovered"><b>{{alldata.sembuh}}</b><br>Sembuh</li>
                    <li class="deaths"><b>{{alldata.meninggal}}</b><br>Meninggal</li>
                </ul>
            </div>
            <div class="d:item__4 t:item__4 m:item__12">
                <div class="province-group">
                    <h3>Data Per Provinsi</h3>
                    <small>(Total kasus Per Provinsi)</small>
                    <input class="province-search" type="text" v-model="search" placeholder="Ketikkan nama provinsi">
                    <ul v-for="cases in filterList" :key="cases.id">
                        <h4>📍{{cases.provinsi}}</h4>
                        <ul class="province">
                            <li class="confirmed">Terkonfirmasi Akumulatif: <strong>{{cases.kasusPosi}}</strong></li>
                            <li class="recovered">Sembuh Akumulatif: <strong>{{cases.kasusSemb}}</strong></li>
                            <li class="deaths">Meninggal Akumulatif: <strong>{{cases.kasusMeni}}</strong></li>
                        </ul> 
                    </ul>
                </div>
            </div>
        </div>
        <small class="covid-date">
            API dari <a href="https://github.com/mathdroid/indonesia-covid-19-api" target="_blank" rel="noopener">Mathdroid</a> <br>
            Data berdasarkan situs resmi pemerintah Indonesia <a href="https://www.covid19.go.id/">covid19.go.id</a>
        </small>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import LineChart from './Chart'

export default {
    name: 'LineChartContainer',
    components: { LineChart },
    layout: 'journal',
    data() {
        return {
            loading: true,
            title: 'Kasus Covid19 di Indonesia',
            search: '',
            loaded: true,
            chartdata: null,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    head () {
        return {
        title: this.title,
        meta: [
            { hid: 'description', name: 'description', content: 'Kasus Covid19 di Indonesia' }
        ]
    }},
    async asyncData() {
        let firstURL = 'https://indonesia-covid-19-api.now.sh/api/'
        let secondURL = 'https://indonesia-covid-19-api.now.sh/api/provinsi'
        let thirdURL = 'https://indonesia-covid-19.mathdro.id/api/harian'

        const firstResponse = await axios.get(firstURL)
        const secondResponse = await axios.get(secondURL)
        const thirdResponse = await axios.get(thirdURL)

        const compileKasusKumulatif = thirdResponse.data.data.map(compile => {
            return compile.jumlahKasusKumulatif
        })

        const compileDalamPerawatan = thirdResponse.data.data.map(compile => {
            return compile.jumlahpasiendalamperawatan
        })

        const compilePasienSembuh = thirdResponse.data.data.map(compile => {
            return compile.jumlahPasienSembuh
        })

        const compilePasienMeninggal = thirdResponse.data.data.map(compile => {
            return compile.jumlahPasienMeninggal
        })

        const compileHari = thirdResponse.data.data.map(compile => {
            return compile.harike
        })

        //Convert Array to Object
        // const compileKasusKumulatifObject = Object.assign({}, compileKasusKumulatif)

        console.log(compileKasusKumulatif)

        return {
            alldata: firstResponse.data,
            provincedata: secondResponse.data.data,
            dataKasusKumulatif: compileKasusKumulatif,
            dataDalamPerawatan: compileDalamPerawatan,
            dataPasienSembuh: compilePasienSembuh,
            dataPasienMeninggal: compilePasienMeninggal,
            dataLabels: compileHari
        }
        
        asyncData().catch((error) => {
            console.log(error)
        })
    },
    mounted () {
      this.fillData()
    },
    methods: {
        fillData () {
            this.chartdata = {
            labels: this.dataLabels,
            datasets: [
                {
                label: 'Pasien Sembuh',
                backgroundColor: '#219653',
                data: this.dataPasienSembuh
                },
                {
                label: 'Pasien Meninggal',
                backgroundColor: '#d8232a',
                data: this.dataPasienMeninggal
                },
                {
                label: 'Pasien Dalam Perawatan',
                backgroundColor: '#f5a623',
                data: this.dataDalamPerawatan
                },
                {
                label: 'Kasus Kumulatif',
                backgroundColor: '#f2c94c',
                data: this.dataKasusKumulatif
                }
            ]
            }
            this.loaded = true
      }
    },
    computed: {
        filterList () {
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
        h1
            color: #5b64a0
            margin-bottom: 0
        h3
            margin-bottom: 0
        h4
            margin: 0
        ul
            padding: 0
        .covid-title
            text-align: center
            margin-bottom: 20px
        .indonesia
            list-style: none
            padding: 0
            display: flex
            text-align: center
            width: 100%
            li
                flex: 1
                padding: 10px 0 20px 0
                margin: 10px
                border-radius: 5px
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
                b
                    font-size: 30px
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
        .province-group
            height: 520px
            overflow-y: scroll
            padding-left: 10px
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