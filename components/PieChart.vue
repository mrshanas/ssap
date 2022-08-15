<template>
  <Pie :chart-options="chartOptions" :chart-data="chartData" />
</template>

<script>
import { Pie } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, CategoryScale, ArcElement);

export default {
  components: { Pie },
  data() {
    const labels = this.$props.labels;
    const data = this.$props.stats;
    return {
      chartData: {
        labels,
        // datacollection: {},
        datasets: [
          {
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#00D8FF",
              "#DD1B16",
              "#52D726",
              "#FF7300",
              "#7CDDDD",
              "#007ED6",
            ],
            data,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  props: ["stats", "labels"],
};
</script>
