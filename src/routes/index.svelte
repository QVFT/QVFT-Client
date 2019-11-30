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
  div.root {
    margin-top: -3rem;
  }
  div.fullScreen {
    width: 100%;
    background-size: cover !important;
    box-sizing: border-box;
  }

  div.fullScreen p {
    margin: 3rem 0;
    font-style: italic;
    font-size: 1.7rem;
    line-height: 3rem;
    text-align: justify;
    color: #eee;
    text-shadow: 0px 0px 1px black;
  }
  div.fullScreen > div.fullScreenContent {
    min-height: calc(100vh - 3rem); /* 3rem is nav height */
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.infoColumnSection {
    background-color: #f9f9f9;
    padding: 3rem 0;
    margin-bottom: 6rem;
  }

  div.logoWrapper {
    max-height: 18rem;
    max-width: 18rem;
    margin: 0 auto;
  }
  img.logo {
    height: 100%;
    width: 100%;
  }
  div.headingSpacer {
    width: 100%;
    height: 3rem;
  }
</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>
<div class="root">
  <div class="headingSpacer" />
  <div
    class="fullScreen"
    style="background: url('background.jpg') no-repeat center center fixed;">
    <div class="fullScreenContent">
      <div class="contentWrapper">
        <div class="logoWrapper">
          <img
            class="logo"
            src="logo-large.png"
            alt="Queen's Vertical Farming Team" />
        </div>
        <p>
          “The Queen's Vertical Farming Team's mission is to develop a
          functional, small scale vertical farm. Drawing inspiration from the
          best current commercial practices, our goal is to gain a foothold as
          an innovator in a rapidly-expanding industry.”
        </p>
      </div>
    </div>
  </div>
  <div class="infoColumnSection">
    <div class="contentWrapper">

      <h2>Who we are</h2>
      <p>
        The Queen's Vertical Farming Team is Canada's first post-secondary
        student-led vertical farming design team. This team allows members of
        all disciplines to engage in a rapidly-developing industry, increase
        their awareness of threats to the global food supply, and gain hands-on
        experience in food cultivation. Program-specific opportunities allow for
        students to gain experience with biochemistry, plant science,
        computer-aided design, computer modelling, data analysis, and systems
        design.
      </p>
      <InfoColumns />
    </div>
  </div>
  <div class="contentWrapper">
    <h2>Progress</h2>
    <Timeline {timeline} />
  </div>
</div>
