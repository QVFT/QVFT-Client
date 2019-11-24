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
  h1 {
    font-size: 2.5rem;
    text-shadow: 0px 0px 2px white;
    line-height: 3rem;
  }
  p {
    text-shadow: 0px 0px 1px white;
  }

  div.root {
    margin-top: -3rem;
  }
  div.fullScreen {
    width: 100%;
    padding-top: 5rem;
    height: 100vh;
    background-size: cover !important;
    margin-bottom: 6rem;
    box-sizing: border-box;
  }

  div.fullScreen p {
    margin-top: 3rem;
    font-style: italic;
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
  div.fullScreen > div.fullScreenContent {
    height: 100%;
    background-color: #ffffff22;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.fullScreen > div.fullScreenContent > div.contentWrapper {
    margin-top: -10%;
  }
</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>
<div class="root">
  <div
    class="fullScreen"
    style="background: url('background.jpg') no-repeat center center fixed;">
    <div class="fullScreenContent">
      <div class="contentWrapper">
        <h1>Queen's Vertical Farming Team</h1>
        <p>
          “The Queen’s Vertical Farming Team’s mission is to develop a
          functional, small scale vertical farm based on the best current
          commercial practices, gaining a foothold as an innovator in a
          rapidly-expanding industry.”
        </p>
      </div>
    </div>
  </div>
  <div class="contentWrapper">
    <h2>Some heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <InfoColumns />
    <h2>Progress</h2>
    <Timeline {timeline} />
  </div>
</div>
