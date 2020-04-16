<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    dailychart: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  watch: {
    dailychart(after) {
      if (after != null) {
        this.renderChart(this.dailychart, this.options)
      }
    }
  }
}
</script>