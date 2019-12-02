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
  div.fullScreen {
    width: 100%;
    background-clip: border-box;
    background-origin: padding-box;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: cover;
    box-sizing: border-box;
  }

  div.fullScreen p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 3rem;
    /* text-align: justify; */
    color: #eee;
    text-shadow: 0px 0px 1px #222;
  }
  div.fullScreen > div.fullScreenContent {
    min-height: calc(100vh - 3rem); /* 3rem is nav height */
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    box-sizing: border-box;
  }

  div.infoColumnSection {
    background-color: #f9f9f9;
    padding: 3rem 0;
    margin-bottom: 6rem;
  }

  div.logoWrapper {
    max-height: 14rem;
    max-width: 14rem;
    margin: 0 auto 3rem;
  }
  .logo > * {
    height: 100%;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>
<div class="root">
  <div class="fullScreen" style="background-image: url('background.jpg')">
    <div class="fullScreenContent">
      <div class="contentWrapper">
        <div class="logoWrapper">
          <picture class="logo">
            <source srcset="logo-white.webp" type="image/webp" />
            <source srcset="logo-white.png" type="image/png" />
            <img src="logo-white.png" alt="Queen's Vertical Farming Team" />
          </picture>
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
