<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  watch: {
    chartdata(after) {
      if (after != null) {
        this.renderChart(this.chartdata, this.options)
      }
    }
  }
}
</script>