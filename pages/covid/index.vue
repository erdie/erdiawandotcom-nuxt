<template>
    <div class="covid" v-if="loading">
        <div class="container">
        <div class="covid-title">
            <h1>Kasus Covid19 di Indonesia</h1>
            <small>( Data berdasarkan situs resmi pemerintah Indonesia untuk penanganan covid19. API oleh <a href="https://github.com/mathdroid/indonesia-covid-19-api" target="_blank" rel="noopener noreferrer">Mathdroid</a> )</small>
        </div>
        <div class="item">
            <div class="d:item__8 t:item__8 m:item__12">
                <div class="globalcases item">
                    <ul>
                        <li><small class="textinfo"><b>Kasus Global: </b></small></li>
                        <li>
                            <small class="confirmed">
                                Terkonfirmasi <b>{{allGlobaldata.confirmed.value.toLocaleString()}}</b>
                            </small>
                        </li>
                        <li>
                            <small class="recovered">
                                Sembuh <b>{{allGlobaldata.recovered.value.toLocaleString()}}</b>
                            </small>
                        </li>
                        <li>
                            <small class="death">
                                Meninggal <b>{{allGlobaldata.deaths.value.toLocaleString()}}</b>
                            </small>
                        </li>
                        <li>
                            <small>(Data oleh <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" target="_blank" rel="noopener noreferrer">CSSE JHU</a>)</small>
                        </li>
                    </ul>
                </div>
                <small class="notes"><i class="icon-information"></i> Data tanggal <b>{{getCurrentDate}}</b>. Status:
                <b v-html="statusTerbaru"></b></small>
                <line-chart
                v-if="loaded"
                :chartdata="chartdata"
                :options="options"/>
                <div class="indonesia item">
                    <div class="cases confirmed d:item__4 t:item__4 m:item__6">
                        <b>{{alldata.jumlahKasus.toLocaleString()}}</b>
                        <br>Terkonfirmasi <br>
                        <small><strong>+{{dataKasusBaru}}</strong><span class="blink">baru</span></small>
                    </div>
                    <div class="cases active d:item__4 t:item__4 m:item__6">
                        <b>{{alldata.perawatan.toLocaleString()}}</b>
                        <br>Dalam Perawatan <br>
                        <small><strong>+{{dataPerawatanBaru}}</strong><span class="blink">baru</span></small>
                    </div>
                    <div class="cases recovered d:item__4 t:item__4 m:item__6">
                        <b>{{alldata.sembuh.toLocaleString()}}</b>
                        <br>Sembuh <br>
                        <small><strong>+{{dataSembuhBaru}}</strong><span class="blink">baru</span></small>
                    </div>
                    <div class="cases deaths d:item__4 t:item__4 m:item__6">
                        <b>{{alldata.meninggal.toLocaleString()}}</b>
                        <br>Meninggal <br>
                        <small><strong>+{{dataMeninggalBaru}}</strong><span class="blink">baru</span></small>
                    </div>
                    <div class="cases speciment d:item__4 t:item__4 m:item__6">
                        <b>{{dataSpesimenDiperiksa.toLocaleString()}}</b>
                        <br>Spesimen Dites <br>
                        <small><strong>+{{dataSpesimenBaru}}</strong><span class="blink">baru</span></small>
                    </div>
                    <div class="cases tested d:item__4 t:item__4 m:item__6">
                        <b>{{dataOrangDiperiksa.toLocaleString()}}</b>
                        <br>Orang Dites<br>
                        <small><strong>+{{dataDiperiksaBaru}}</strong><span class="blink">baru</span></small>
                    </div>
                </div>
                <line-chart
                v-if="loaded"
                :dailychart="dailychart"
                :options="options"/>
                <!-- <small class="notes">* Data tanggal <b>{{getCurrentDate}}</b> diupdate setiap pukul 16.15 WIB</small> -->
            </div>
            <div class="d:item__4 t:item__4 m:item__12">
                <div class="province-group">
                    <h3>Data Per Provinsi</h3>
                    <small>(Total kasus Per Provinsi)</small>
                    <label for="search">
                        <input class="province-search" id="search" type="text" v-model="search" placeholder="Ketikkan nama provinsi">
                    </label>
                    <div v-if="!filterList.length"><small>Data tidak ditemukan</small></div>
                    <div class="province-list">
                        <ul v-for="cases in filterList" :key="cases.id">
                            <h4>📍{{cases.provinsi}}</h4>
                            <ul class="province">
                                <li class="confirmed">Terkonfirmasi Akumulatif: <strong>{{cases.kasusPosi.toLocaleString()}}</strong></li>
                                <li class="recovered">Sembuh Akumulatif: <strong>{{cases.kasusSemb.toLocaleString()}}</strong></li>
                                <li class="deaths">Meninggal Akumulatif: <strong>{{cases.kasusMeni.toLocaleString()}}</strong></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import LineChart from '~/components/LineChart'

export default {
    components: {
        LineChart
    },
    layout: 'journal',
    data() {
        return {
            loading: true,
            search: '',
            loaded: true,
            chartdata: null,
            dailychart: null,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    head () {
        return {
            title: 'Data Kasus COVID-19 di Indonesia',
            meta: [
                { hid: 'description', name: 'description', content: 'Data kasus COVID-19 di Indonesia dalam angka dan grafik atau kurva.' }
            ],
            link: [
                { rel: 'canonical', href: 'https://erdiawan.com/covid/' },
                { rel: 'shortcut icon', type: 'image/svg+xml', href: '/favicon.svg?v=1' },
                { rel: 'shortcut icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'mask-icon', href: '/favicon.svg', color: '#ffffff' },
                { rel: 'apple-touch-icon', sizes: '512x512', href: '/favicon.png?v=1' }
            ]
        }
    },
    async asyncData() {
        //Collect API
        let firstURL = 'https://indonesia-covid-19.mathdro.id/api/'
        let secondURL = 'https://indonesia-covid-19.mathdro.id/api/provinsi'
        let thirdURL = 'https://indonesia-covid-19.mathdro.id/api/harian'
        let fourthURL = 'https://covid19.mathdro.id/api'

        //Collect response
        const firstResponse = await axios.get(firstURL)
        const secondResponse = await axios.get(secondURL)
        const thirdResponse = await axios.get(thirdURL)
        const fourthResponse = await axios.get(fourthURL)

        //Compile for Main Chart
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

        //jumlah spesimen diperiksa
        const compileSpesimenDiperiksa = thirdResponse.data.data.map(compile => {
            return compile.jumlahSpesimenDiperiksa
        })

        if (compileSpesimenDiperiksa[compileSpesimenDiperiksa.length-1] == null) {
            var lastCompileSpesimenDiperiksa = compileSpesimenDiperiksa[compileSpesimenDiperiksa.length-2]
        } else {
            var lastCompileSpesimenDiperiksa = compileSpesimenDiperiksa[compileSpesimenDiperiksa.length-1]
        }

        //jumlah orang diperiksa
        const compileOrangDiperiksa = thirdResponse.data.data.map(compile => {
            return compile.jumlahKasusDiperiksa
        })

        if (compileOrangDiperiksa[compileOrangDiperiksa.length-1] == null) {
            var lastCompileOrangDiperiksa = compileOrangDiperiksa[compileOrangDiperiksa.length-2]
        } else {
            var lastCompileOrangDiperiksa = compileOrangDiperiksa[compileOrangDiperiksa.length-1]
        }

        //Compile for Daily Case
        const compileHari = thirdResponse.data.data.map(compile => {
            return compile.harike
        })

        const compileDailyCase = thirdResponse.data.data.map(compile => {
            return compile.jumlahKasusBaruperHari
        })

        //Get last data from Harian
        //penambahan kasus baru
        const compileKasusBaru = thirdResponse.data.data.map(compile => {
            return compile.jumlahKasusBaruperHari
        })

        if (compileKasusBaru[compileKasusBaru.length-1] == null) {
            var lastCompileKasusBaru = compileKasusBaru[compileKasusBaru.length-2]
        } else {
            var lastCompileKasusBaru = compileKasusBaru[compileKasusBaru.length-1]
        }

        //penambahan sembuh baru
        const compileSembuhBaru = thirdResponse.data.data.map(compile => {
            return compile.jumlahKasusSembuhperHari
        })

        if (compileSembuhBaru[compileSembuhBaru.length-1] == null) {
            var lastCompileSembuhBaru = compileSembuhBaru[compileSembuhBaru.length-2]
        } else {
            var lastCompileSembuhBaru = compileSembuhBaru[compileSembuhBaru.length-1]
        }

        //penambahan dalam perawatan baru
        const compilePerawatanBaru = thirdResponse.data.data.map(compile => {
            return compile.jumlahKasusDirawatperHari
        })

        if (compilePerawatanBaru[compilePerawatanBaru.length-1] == null) {
            var lastCompilePerawatanBaru = compilePerawatanBaru[compilePerawatanBaru.length-2]
        } else {
            var lastCompilePerawatanBaru = compilePerawatanBaru[compilePerawatanBaru.length-1]
        }

        //penambahan meninggal baru
        const compileMeninggalBaru = thirdResponse.data.data.map(compile => {
            return compile.jumlahKasusDirawatperHari
        })

        if (compileMeninggalBaru[compileMeninggalBaru.length-1] == null) {
            var lastCompileMeninggalBaru = compileMeninggalBaru[compileMeninggalBaru.length-2]
        } else {
            var lastCompileMeninggalBaru = compileMeninggalBaru[compileMeninggalBaru.length-1]
        }

        //penambahan spesimen diperiksa baru
        const compileSpesimenBaru = thirdResponse.data.data.map(compile => {
            return compile.spesimenDiperiksaBaruHarian
        })

        if (compileSpesimenBaru[compileSpesimenBaru.length-1] == null) {
            var lastCompileSpesimenBaru = compileSpesimenBaru[compileSpesimenBaru.length-2]
        } else {
            var lastCompileSpesimenBaru = compileSpesimenBaru[compileSpesimenBaru.length-1]
        }

        //penambahan orang diperiksa baru
        const compileDiperiksaBaru = thirdResponse.data.data.map(compile => {
            return compile.kasusDiperiksaBaruHarian
        })

        if (compileDiperiksaBaru[compileDiperiksaBaru.length-1] == null) {
            var lastCompileDiperiksaBaru = compileDiperiksaBaru[compileDiperiksaBaru.length-2]
        } else {
            var lastCompileDiperiksaBaru = compileDiperiksaBaru[compileDiperiksaBaru.length-1]
        }

        //persentase kematian
        const compilePersentaseMeninggal = thirdResponse.data.data.map(compile => {
            return compile.persentasePasienMeninggal
        })

        if (compilePersentaseMeninggal[compilePersentaseMeninggal.length-1] == null) {
            var lastCompilePersentaseMeninggal = compilePersentaseMeninggal[compilePersentaseMeninggal.length-2].toFixed(1)
        } else {
            var lastCompilePersentaseMeninggal = compilePersentaseMeninggal[compilePersentaseMeninggal.length-1].toFixed(1)
        }

        //persentase sembuh
        const compilePersentaseSembuh = thirdResponse.data.data.map(compile => {
            return compile.persentasePasienSembuh
        })

        if (compilePersentaseSembuh[compilePersentaseSembuh.length-1] == null) {
            var lastCompilePersentaseSembuh = compilePersentaseSembuh[compilePersentaseSembuh.length-2].toFixed(1)
        } else {
            var lastCompilePersentaseSembuh = compilePersentaseSembuh[compilePersentaseSembuh.length-1].toFixed(1)
        }

        //persentase dalam perawatan
        const compilePersentasePerawatan = thirdResponse.data.data.map(compile => {
            return compile.persentasePasiendalamPerawatan
        })

        if (compilePersentasePerawatan[compilePersentasePerawatan.length-1] == null) {
            var lastCompilePersentasePerawatan = compilePersentasePerawatan[compilePersentasePerawatan.length-2].toFixed(1)
        } else {
            var lastCompilePersentasePerawatan = compilePersentasePerawatan[compilePersentasePerawatan.length-1].toFixed(1)
        }


        // Status
        if (compileKasusBaru[compileKasusBaru.length-1] == null) {
            var statusUpdate = '<span style="color:red;">belum diperbaharui</span>.'
        } else {
            var statusUpdate = '<span style="color:green;">telah diperbaharui</span>.'
        }

        //Get current and yesterday date
        const today = new Date()
        const yesterday = new Date(new Date().setDate(new Date().getDate()-1))

        const ddToday = String(today.getDate()).padStart(2, '0')
        const ddYesterday = String(yesterday.getDate()).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0')
        const yyyy = today.getFullYear()

        const todayDate = ddToday + '/' + mm + '/' + yyyy
        const yesterdayDate = ddYesterday + '/' + mm + '/' + yyyy

        if (compileKasusBaru[compileKasusBaru.length-1] == null) {
            var showDate = ddYesterday + '/' + mm + '/' + yyyy
        } else {
            var showDate = ddToday + '/' + mm + '/' + yyyy
        }

        // console.log(showDate)

        return {
            alldata: firstResponse.data,
            allGlobaldata: fourthResponse.data,
            allDailycase: compileDailyCase,
            provincedata: secondResponse.data.data,
            dataKasusKumulatif: compileKasusKumulatif,
            dataDalamPerawatan: compileDalamPerawatan,
            dataPasienSembuh: compilePasienSembuh,
            dataPasienMeninggal: compilePasienMeninggal,
            dataSpesimenDiperiksa: lastCompileSpesimenDiperiksa,
            dataOrangDiperiksa: lastCompileOrangDiperiksa,
            dataLabels: compileHari,
            dataKasusBaru: lastCompileKasusBaru,
            dataSembuhBaru: lastCompileSembuhBaru,
            dataPerawatanBaru: lastCompilePerawatanBaru,
            dataMeninggalBaru: lastCompileMeninggalBaru,
            dataSpesimenBaru: lastCompileSpesimenBaru,
            dataDiperiksaBaru: lastCompileDiperiksaBaru,
            dataPersentaseMeninggal: lastCompilePersentaseMeninggal,
            dataPersentaseSembuh: lastCompilePersentaseSembuh,
            dataPersentasePerawatan: lastCompilePersentasePerawatan,
            getCurrentDate: showDate,
            statusTerbaru: statusUpdate
        }

        asyncData().catch((error) => {
            console.log(error)
        })
    },
    mounted () {
      this.fillLineChart(),
      this.fillBarChart()
    },
    methods: {
        start () {
          this.loading = true
        },
        finish () {
          this.loading = false
        },
        fillLineChart () {
            this.chartdata = {
            labels: this.dataLabels,
            datasets: [
                {
                label: 'Meninggal',
                borderColor: '#d8232a',
                borderWidth: 2,
                pointBackgroundColor: '#d8232a',
                pointBorderWidth: 1,
                backgroundColor: 'rgba(216, 35, 42, 0.3)',
                data: this.dataPasienMeninggal
                },
                {
                label: 'Sembuh',
                borderColor: '#219653',
                borderWidth: 2,
                pointBackgroundColor: '#219653',
                pointBorderWidth: 1,
                backgroundColor: 'rgba(33, 150, 83, 0.3)',
                data: this.dataPasienSembuh
                },
                {
                label: 'Dalam Perawatan',
                borderColor: '#f2c94c',
                borderWidth: 2,
                pointBackgroundColor: '#f2c94c',
                pointBorderWidth: 1,
                backgroundColor: 'rgba(242, 201, 76, 0.3)',
                data: this.dataDalamPerawatan
                },
                {
                label: 'Terkonfirmasi',
                borderColor: '#f5a623',
                borderWidth: 2,
                pointBackgroundColor: '#f5a623',
                pointBorderWidth: 1,
                backgroundColor: 'rgba(245, 166, 35, 0.3)',
                data: this.dataKasusKumulatif
                }
            ]
            }
            this.loaded = true
      },
      fillBarChart () {
            this.dailychart = {
            labels: this.dataLabels,
            datasets: [
                {
                label: 'Penambahan Kasus Baru Perhari',
                borderColor: '#4285F4',
                borderWidth: 2,
                pointBackgroundColor: '#4285F4',
                pointBorderWidth: 1,
                backgroundColor: 'rgba(66, 133, 244, 0.3)',
                data: this.allDailycase
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

<style lang="sass" scoped>
    .covid
        padding: 90px 0 10px 0
        margin: 0 15px
        h1
            color: #5b64a0
            margin-bottom: 0
            line-height: 1.2
        h3
            margin-bottom: 0
            margin: 0
        h4
            margin: 0
        ul
            padding: 0
        .covid-title
            text-align: center
            margin-bottom: 20px
            small
                font-weight: 300
        .globalcases
            padding: 5px 15px 10px 8px
            border-radius: 8px
            margin: 10px 5px 15px 5px
            border: 1px solid #dedede
            font-size: 15px
            ul
                list-style: none
                margin: 0
                li
                    display: inline-block
                    margin: 0 8px
            .confirmed
                b
                    color: #f5a623
            .recovered
                b
                    color: #219653
            .death
                b
                    color: #d8232a
        .indonesia
            list-style: none
            padding: 0
            display: flex
            text-align: center
            width: 100%
            margin: 15px 0
            .cases
                padding: 10px 0 20px 0
                border-radius: 8px
                box-shadow: 0px 0px 0px 1px rgba(222,222,222,1)
                transform: scale(0.95)
                font-weight: 300
                transition: 0.3s
                background-color: white
                b
                    font-size: 30px
                    font-weight: 600
                small
                    display: block
                    padding-top: 10px
                    font-size: 11px
            .cases:hover
                transition: 0.3s
                transform: scale(0.93)
                z-index: 1
            .confirmed
                b
                    color: #f5a623
            .active
                b
                    color: #f2c94c
            .recovered
                b
                    color: #219653
            .deaths
                b
                    color: #d8232a
            .speciment
                b
                    color: #f7e19f
            .tested
                b
                    color: #f36f74
        .notes
            font-size: 11px
            margin: -5px 0 10px 0
            display: block
            text-align: center
            line-height: 2
        .province-group
            padding-left: 10px
            .province-list
                height: 1060px
                overflow-y: scroll
                ul
                    font-family: system-ui
                    line-height: 1.5
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
            font-size: 14px
            li
                margin-left: 19px
                font-weight: 300
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
            h1
                color: #51E3D4
            h3
                color: #51E3D4
            .indonesia
                .cases
                    background-color: rgba(72, 72, 74, 1)
                    box-shadow: none
            .globalcases
                background-color: rgba(72, 72, 74, 1)
                border: none
                ul
                    li
                        small
                            a
                                color: #51e3d4
                            a:hover
                                color: #474f85
            .covid-title
                small
                    a
                        color: #51E3D4
                        text-decoration: none
                    a:hover
                        color: #5b64a0
    .dark-mode body
        .covid
            h1
                color: #51E3D4
            h3
                color: #51E3D4
            .indonesia
                .cases
                    background-color: #1b1e3a
                    box-shadow: none
            .globalcases
                background-color: #1b1e3a
                border: none
                ul
                    li
                        small
                            a
                                color: #51e3d4
                            a:hover
                                color: #474f85
            .covid-title
                small
                    a
                        color: #51E3D4
                        text-decoration: none
                    a:hover
                        color: #5b64a0
    .light-mode body
        .covid
            h1, h3
                color: #474F85
            .covid-title
                small
                    a
                        color: #474F85
                    a:hover
                        color: #51E3D4
            .globalcases
                background-color: white
                border: 1px solid  #dedede
                ul
                    li
                        small
                            a
                                color: #474F85
                            a:hover
                                color: #51E3D4
            .indonesia
                .cases
                    background-color: white
                    box-shadow: 0px 0px 0px 1px #dedede
    .blink
        background-color: red
        padding: 0 5px 4px 5px
        border-radius: 3px
        color: white
        margin-left: 5px
        margin-top: -5px
        font-size: 8px
        font-weight: 500
        animation: blink-animation 2s steps(5, start) infinite
        -webkit-animation: blink-animation 2s steps(5, start) infinite
    @keyframes blink-animation
        to
            visibility: hidden
    @-webkit-keyframes blink-animation
        to
            visibility: hidden
</style>
