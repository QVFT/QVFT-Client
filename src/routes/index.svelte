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
  import { onMount } from "svelte";

  import Timeline from "../components/Timeline.svelte";
  import InfoColumns from "../components/InfoColumns.svelte";
  import SponsorImages from "../components/SponsorImages.svelte";

  onMount(async () => {
    gtag("config", "UA-93549235-6", { page_path: "/" });
  });

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
    font-weight: 500;
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

  div.infoColumnSection,
  div.timelineSection {
    background-color: #f9f9f9;
    padding: 3rem 0;
  }

  div.partnersSection {
    margin-bottom: 6rem;
    padding: 3rem 0 1rem;
  }

  div.logoWrapper {
    max-height: 24rem;
    max-width: 24rem;
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
  <div class="fullScreen" style="background-image: url('background.webp')">
    <div class="fullScreenContent">
      <div class="contentWrapper">
        <div class="logoWrapper">
          <picture class="logo">
            <source srcset="logo-white.webp" type="image/webp" />
            <source srcset="logo-white.png" type="image/png" />
            <img src="logo-white.webp" alt="Queen's Vertical Farming Team" />
          </picture>
          
         
       </div>
        <!--
        <p>
          “The Queen's Vertical Farming Team's mission is to develop a
          functional, small scale vertical farm. Drawing inspiration from the
          best current commercial practices, our goal is to gain a foothold as
          an innovator in a rapidly-expanding industry.”
        </p>
       -->
      </div>
    </div>
  </div>
  <div class="infoColumnSection">
    <div class="contentWrapper">

      <h2>Who we are</h2>
      <p>
        The Queen's Vertical Farming Team is Canada's first undergraduate engineering team of its kind. Recognizing this rapidly emerging industry, QVFT is designing and building a functional, software-automated aeroponic vertical farm on Queen's University campus. The majority of existing research in this field is conducted privately and is thus inaccessible to the public. Through its open-source approach, QVFT aims to democratize vertical farming knowledge and research. Our 25 alumni and 13 current members come from diverse academic disciplines and represent all four years of study.    
      </p>
      <InfoColumns />
    </div>
  </div>
  <div class="partnersSection">
    <div class="contentWrapper">
      <h2>Our partners</h2>
      <!-- <p>QVFT is made possible by the support of our partners.</p> -->
      <SponsorImages />
    </div>
  </div>
  <div class="timelineSection">
    <div class="contentWrapper">
      <h2>Timeline</h2>
      <Timeline {timeline} />
    </div>
  </div>
</div>
