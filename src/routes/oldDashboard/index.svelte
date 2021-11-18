<script>
  import { onMount } from "svelte";
  import PageHeader from "../../components/PageHeader.svelte";
	import Select from 'svelte-select';
  import Chart from "chart.js";
  import Handsontable from './Handsontable.svelte'

  //List of environmental variables for drop-down menu
  const items = [
    {value: 'ph', label: '💦 Water PH Level', group: 'Savory'},
		{value: 'temp', label: '🌡️ Temperature', group: 'Sweet'},
    {value: 'light', label: '💡 Light Level', group: 'Sweet'}
	];

  //value selected in drop-down menu
  let selectedValue = "Choose Target";

  let waterData = [
		['Time','Value','Notes',],
		['09:00','15','Morning for the plants',],
		['13:00','23','different time setting for 1pm',],
		['21:00','45','Evening environmental variable setting',]
  ]
  
  let tempData = [
		['Time','Value','Notes',],
		['10:00','15','Morning for the plants',],
		['12:30','20','different time setting for 1pm',],
		['21:00','15','Evening environmental variable setting',]
  ]
  
  let lightData = [
		['Time','Value','Notes',],
		['04:00','15','Morning for the plants',],
		['13:33','3','different time setting for 1pm',],
		['21:05','88','Evening environmental variable setting',]
	]

  onMount(() => {
    //collect data and display charts for viewing of environmental variables
    function setupCharts(){
      //get canvas elements used for charts
      let water = document.getElementById("waterChart").getContext("2d");
      let light = document.getElementById("lightChart").getContext("2d");
      let temp = document.getElementById("tempChart").getContext("2d");

      //fill charts with sample data
      //TODO: replace with database API calls
      const waterData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Water PH Levels',
              backgroundColor: 'rgb(176,224,230)',
              borderColor: 'rgb(100,149,237)',
              data: [0, 20, 15, 8, 6, 7, 2]
          }]
      }
      const tempData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Temperature',
              backgroundColor: 'rgb(240,128,128)',
              borderColor: 'rgb(255,0,0)',
              data: [0, 10, 5, 2, 20, 30, 1]
          }]
      }
      const lightData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Light Levels',
              backgroundColor: 'rgb(250,250,210)',
              borderColor: 'rgb(255,215,0)',
              data: [0, 7, 65, 2, 15, 0, 1]
          }]
      }

      //Change font size of charts for better display
      const chartOptions = {
        legend: {
          labels: {
              defaultFontSize: 16
            }
          }
      }

      //display line charts with data and options as defined above
      let waterChart = new Chart(water, {
        type: 'line',
        data: waterData,
        options: chartOptions
      });
      let tempChart = new Chart(temp, {
        type: 'line',
        data: tempData,
        options: chartOptions
      });
      let lightChart = new Chart(light, {
        type: 'line',
        data: lightData,
        options: chartOptions
      });
    }

    setupCharts();

  });

</script>

<PageHeader>Dashboard</PageHeader>
<div class="contentWrapper">
  <!-- Embedded Dashboard Page-->
  <!-- <iframe src="https://directorqvft.pythonanywhere.com/" style="position: fixed; top: 0px; bottom: 0px; right: 0px; width: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999; height: 100%;" title="Dashboard"></iframe>-->

  <!-- Not sure if we want to keep this stuff below or -->
  <!-- Embedded youtube stream -->
  <h1>Our Farm</h1> 
  <iframe title="lofi hip hop radio - beats to relax/study to" width="800" height="400" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
  
  <h1>View & Set Targets</h1> 

  <!-- Dropdown menu for selecting environmental variables -->
  <Select {items} isClearable={false} bind:selectedValue></Select> 

  <!-- charts containing environmental variable data-->
  <div>
    <div hidden={selectedValue.value != 'ph'}><canvas id="waterChart" width="16" height="9" /> </div>
    <div hidden={selectedValue.value != 'temp'}><canvas id="tempChart" width="16" height="9" /></div>
    <div hidden={selectedValue.value != 'light'}><canvas id="lightChart" width="16" height="9" /></div>
  </div>
  
  <div>
    <div hidden={selectedValue.value != 'ph'} > <br><Handsontable data={waterData}/> </div>
    <div hidden={selectedValue.value != 'temp'} > <br><Handsontable data={tempData}/> </div>
    <div hidden={selectedValue.value != 'light'} > <br><Handsontable data={lightData}/> </div>
  </div>
</div>
