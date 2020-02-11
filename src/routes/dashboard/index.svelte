<script>
  import { onMount } from "svelte";
  import PageHeader from "../../components/PageHeader.svelte";

  import Chart from "chart.js";

  onMount(() => {
    var ctx = document.getElementById("myChart").getContext("2d");

    data: var myLineChart = new Chart(ctx, {
      type: "line",
      data: [{ x: 10, y: 20 }, { x: 15, y: 10 }]
    });
  });
</script>

<PageHeader>Dashboard</PageHeader>
<div class="contentWrapper">
  <h3>Overview</h3>
  <div>
    <canvas id="myChart" width="400" height="400" />
  </div>
</div>
