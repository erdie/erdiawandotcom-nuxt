<template>
    <div>
        <div class="item">
            <h4>Kasus Global:</h4>
            <div class="d:item__4 t:item__4 m:item__6">
                <b>{{allGlobaldata}}</b> Terkonfirmasi
            </div>
            <div class="d:item__4 t:item__4 m:item__6">
                <b>{{allGlobaldata}}</b> Dalam Perawatan
            </div>
            <div class="d:item__4 t:item__4 m:item__6">
                <b>{{allGlobaldata}}</b> Meninggal
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData() {
        let fourthURL = 'https://covid19.mathdro.id/api'
        const fourthResponse = await axios.get(fourthURL)

        // const compileConfirmed = fourthResponse.data.data.map(compile => {
        //     return compile.confirmed
        // })

        // const compileRecovered = fourthResponse.data.data.map(compile => {
        //     return compile.recovered
        // })

        // const compileDeath = fourthResponse.data.data.map(compile => {
        //     return compile.deaths
        // })

        console.log(fourthResponse)

        return {
            allGlobaldata: fourthResponse.data
        }

        asyncData().catch((error) => {
            console.log(error)
        })
    }
}
</script>

<style lang="sass">

</style>