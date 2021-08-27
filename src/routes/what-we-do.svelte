<script>
  import PageHeader from "../components/PageHeader.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    gtag("config", "UA-93549235-6", { page_path: "/what-we-do" });
  });
</script>

<style>
  div.imageWrapper {
    margin: 2rem auto;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    max-width: 600px;
    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.2);
  }

  div.imageWrapper.large {
    max-width: 90%;
  }

  div.imageWrapper.padding {
    padding: 1rem;
  }

  div.imageWrapper a.attribution {
    position: absolute;
    right: 2px;
    bottom: 0;
    color: white;
    font-weight: 300;
    font-size: 0.7rem;
  }

  div.imageWrapper a.attribution:not(:hover) {
    text-decoration: none;
  }

  div.imageWrapper div.dark_attribution {
    position: absolute;
    right: 2px;
    bottom: 0;
    color: black;
    font-weight: 300;
    font-size: 0.7rem;
  }

  div.imageWrapper div.dark_attribution:not(:hover) {
    text-decoration: none;
  }

  picture.diagram > * {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  picture.diagram,
  source,
  img {
    width: 100% !important;
    height: 100% !important;
  }
  div.pdfWrapper {
    margin-top: 2rem;
    width: 100%;
    height: 90vh;
  }
</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>

<PageHeader>What We Do</PageHeader>
<h2>System Guide</h2>
<div class="contentWrapper">
  <p>
    <a
      href="QVFT_System_Guide.pdf"
      download
      on:click={() => gtag('event', 'download system guide')}>
      Download our System Guide here
    </a>
  </p>
  <div class="pdfWrapper">
    <object
      width="100%"
      height="100%"
      title="System Guide"
      data="QVFT_System_Guide.pdf"
      type="application/pdf">
      <embed
        title="System Guide"
        width="100%"
        src="QVFT_System_Guide.pdf"
        type="application/pdf" />
    </object>
  </div>
  <h2>Background</h2>
  <p>
    A global trend of increasing concern is the diminishing supply of arable
    land per capita. The United Nations Food and Agriculture Organization (FAO)
    projects that by 2050, this supply will fall to one third of the amount
    available in 1970. This is a combined result of climate change, freshwater
    depletion, urbanization, soil depletion, soil degradation, and a world
    population expected to increase from 7.7 billion (2019) to 9.7 billion
    (2050).
  </p>
  <p>
    An emerging technology which is addressing these concerns is vertical
    farming, a food cultivation method in which crops grow in an indoor, urban,
    climate-controlled facility. This approach is associated with dramatically
    reduced water consumption, slashed transportation costs, massive
    improvements in per-acre land productivity, increased plant productivity,
    and the freedom to cultivate crops in any location, year-round.
  </p>

  <h2>Aeroponics</h2>
  <p>
    QVFT employs an aeroponic cultivation method, in which nutrients are
    dissolved in water (fertigation) and misted diectly onto roots via spray
    nozzles (irrigation). Crops rest on a thin, porous substrate, through which
    their roots dangle in a basin below. Requiring no soil, this approach allows
    the grower near-complete control over the specific nutrient mix a plant
    receives. Aeroponics are a key component of controlled-environment
    agriculture.
  </p>
   <div class="imageWrapper large padding">
    <picture class="CAD Model">
      <source srcset="CAD Model.webp" type="image/webp" />
      <!-- <source srcset="CAD Model.png" type="image/png" /> -->
      <!-- <img src="CAD Model.png" alt="CAD Model" />  -->
      <img src="CAD Model.webp" alt="CAD Model" />
    </picture>
    <div class="dark_attribution" rel="noopener noreferrer" target="_blank">
      QVFT
    </div>
     
  </div>
  <h2>Controlled-Environment Agriculture (CEA)</h2>
  <p>
    CEA is a method of optimizing plant growth conditions by means of an
    integrated, software-controlled sensory network. Our proposed system (see
    below) aims to control, monitor, and maximize farming yield by comparing
    realtime environmental data to pre-set environmental targets, and adjusting
    the internal growing environment accordingly. The CEA system will serve as
    the central control hub for the lighting, irrigation, fertigation,
    ventilation, and climate control systems.
  </p>
  <div class="imageWrapper padding">
    <picture class="diagram">
      <source srcset="CEA-diagram.webp" type="image/webp" />
      <source srcset="CEA-diagram.png" type="image/png" />
      <img src="CEA-diagram.png" alt="CEA system digram" />
    </picture>
    <div class="dark_attribution" rel="noopener noreferrer" target="_blank">
      QVFT
    </div>
  </div>
  <h2>Lighting</h2>
  <p>
    Studies have found that the growth of indoor plants can be manipulated by
    adjustments to the intensity and wavelength of LED lights. Our plant science
    team is conducting research which aims to optimize these parameters for each
    given crop. Tying into the development of the broader CEA system, the
    ultimate goal of these efforts is to boost plant productivity.
  </p>
  <h2>Crop Selection</h2>
  <p>
    As vertical farming is a cost-intensive cultivation method, current industry
    practices focus on small, premium crops that have short growth cycles and
    high automation potential. Examples include leafy greens such as baby
    lettuce, spinach, and kale, which have a brief growth cycle of roughly 50–65
    days. QVFT will focus exclusively on the cultivation of leafy greens, as the
    commercial farming systems from which we draw inspiration are designed
    specifically for such purposes. Starting in February 2020, we will cultivate
    a small batch of baby lettuce as a litmus test for our prototype. This will
    provide feedback regarding the efficacy of our system and identify areas of
    improvement for when we scale our model in the following school year.
  </p>
</div>

  <div class="imageWrapper">
    <picture class="diagram">
      <source srcset="ZipGrow.webp" type="image/webp" />
      <source srcset="ZipGrow.jpg" type="image/jpeg" />
      <img src="ZipGrow.webp" alt="Queen's Vertical Farming Team" />
    </picture>
    <a
      class="attribution"
      rel="noopener noreferrer"
      href="https://zipgrow.com/"
      target="_blank">
      ZipGrow.com
    </a>
  </div>
