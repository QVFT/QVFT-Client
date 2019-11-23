<script context="module">
  export async function preload() {
    const result = await this.fetch("index.json");
    const { timeline } = await result.json();
    return {
      timeline
    };
  }
</script>

<script>
  import Timeline from "../components/Timeline.svelte";
  import InfoColumns from "../components/InfoColumns.svelte";

  export let timeline = [];
</script>

<style>

</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>

<h1>Queen's Vertical Farming Team</h1>
<p>
  The Queen’s Vertical Farming Team’s mission is to develop a functional, small
  scale vertical farm based on the best current commercial practices, gaining a
  foothold as an innovator in a rapidly-expanding industry.
</p>
<InfoColumns />
<h2>Progress</h2>
<Timeline {timeline} />
