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
    max-width: 500px;
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
  picture.diagram > * {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.3);
  }
</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>

<PageHeader>What We Do</PageHeader>
<div class="contentWrapper">
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
  <div class="imageWrapper">
    <picture class="diagram">
      <source srcset="diagram.webp" type="image/webp" />
      <source srcset="diagram.jpg" type="image/jpg" />
      <img src="diagram.jpg" alt="Queen's Vertical Farming Team" />
    </picture>
    <a
      class="attribution"
      rel="noopener noreferrer"
      href="https://aerofarms.com/"
      target="_blank">
      AeroFarms.com
    </a>
  </div>
  <h2>Aeroponic System</h2>
  <p>
    QVFT employs an aeroponic cultivation method, in which nutrients are dissolved in water (fertigation) and misted diectly onto roots via spray nozzles (irrigation). Crops rest on a thin, porous substrate, through which their roots dangle in a basin below. Requiring no soil, this approach allows the grower near-complete control over the specific nutrient mix a plant receives. Aeroponics are a key component of controlled-environment agriculture.
  </p>
  <h2>Controlled-Environment Agriculture (CEA)</h2>
  <p>
    CEA is a method of optimizing plant growth conditions by means of an integrated, software-controlled sensory network. Our proposed system (see below) aims to control, monitor, and maximize farming yield by comparing realtime environmental data to pre-set environmental targets, and adjusting the internal growing environment accordingly. The CEA system will serve as the central control hub for the lighting, irrigation, fertigation, ventilation, and climate control systems.
  </p>
  <div class="imageWrapper">
    <picture class="diagram">
      <source srcset="CEA-diagram.webp" type="image/webp" />
      <source srcset="CEA-diagram.png" type="image/png" />
      <img src="CEA-diagram.png" alt="CEA system digram" />
    </picture>
  </div>
  <h2>Lighting</h2>
  <p>
    Studies have found that the growth of indoor plants can be manipulated by
    adjustments to the intensity and wavelength of LED lights. Our plant
    science team is conducting research which aims to optimize these parameters for each given
    crop. Tying into the development of the broader CEA system, the ultimate goal of these efforts is to boost plant productivity.
  </p>
  <h2>Crop Selection</h2>
  <p>
    As vertical farming is a cost-intensive cultivation method, current industry practices focus on small, premium crops that have short growth cycles and high automation potential. Examples include leafy greens such as baby lettuce, spinach, and kale, which have a brief growth cycle of roughly 50–65 days. QVFT will focus exclusively on the cultivation of leafy greens, as the commercial farming systems from which we draw inspiration are designed specifically for such purposes. Starting in February 2020, we will cultivate a small batch of baby lettuce as a litmus test for our prototype. This will provide feedback regarding the efficacy of our system and identify areas of improvement for when we scale our model in the following school year.
  </p>
</div>
