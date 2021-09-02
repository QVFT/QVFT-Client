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
    height: 66vh;
  }
</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>

<PageHeader>What We Do</PageHeader>
<div class="contentWrapper">
  <h2>Background</h2>
  <p>
    A global trend of increasing concern is the diminishing supply of arable land per capita. Due to trends such as climate change, freshwater depletion, and soil degradation, arable land per capita will fall to one-third of the amount available in 1970 by 2050. The unsustainable practices of conventional agriculture exacerbate these issues. In addition, the world population is expected to increase from 7.7 billion (2019) to 9.7 billion (2050). The intersection of these climate and population challenges means that global food security depends on our ability to adapt to increased demand and develop better farming techniques. 
  </p>
  <p>
    Vertical farming is a cultivation practice in which crops are grown in an indoor, climate- controlled facility. This approach is associated with dramatically reduced water consumption (~95%), minimal transportation costs, and massive improvements in per-acre land productivity. Vertical farming can grow nutritious, organic produce in any location, at any time of year. Given these advantages, this technology is projected to become a major contributor to global food production in the coming decades. The vertical farming industry’s global market value is projected to grow from $2.23 billion in 2018 to $12.77 billion by 2026, representing a compounded annual growth rate of 24.6%.
  </p>

  <h2>Aeroponic System</h2>
  <p>
    QVFT employs an aeroponic cultivation method, in which plants grow without soil and are fed by a nutrient-enriched mist. Crops rest in thin, plastic root cups, through which their roots hang into a basin below. Aeroponic vertical farming lends well to automation and can allow for near- complete control over the plant growth environment. The system is broadly divided into five zones: mixing tank, nutrient zone, supply line, growth zone, and return line.
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
  
  <h2>Automation Subsystem & Software Stack</h2>
  <p>
    The automation subsystem is an electromechanical feedback control system that automatically maintains optimal growth conditions using interconnected sensors (inputs) and actuators (outputs). These components interact through a logical framework programmed into their Arduino microcontrollers. At the same time, sensor readings will be continuously logged by a computer located on-site. The computer will reformat the data to be human-readable and then upload it to a website via Ethernet.
  </p>
  <p>
  The software stack entails the database, back-end, and front-end and ultimately aims to provide a publicly accessible repository of real-time vertical farming data. This repository achieves three objectives: (i) Allows technicians to remotely monitor farm equipment, which improves operations and resource allocation efficiency. (ii) Provides a record for future tuning and improvement of the farm by comparing data to commercial vertical farms and conventional producers. (iii) Creates a public knowledge base to assist other groups with vertical farming research. The majority of vertical farming research is currently conducted by private companies and is thus inaccessible to the public. QVFT’s mission is to democratize and advance scientific knowledge in this rapidly developing field.
  </p>

  <div class="imageWrapper padding">
    <picture class="diagram">
      <source srcset="CEA-diagram.webp" type="image/webp" />
      <source srcset="CEA-diagram.png" type="image/png" />
      <img src="CEA-diagram.webp" alt="CEA system digram" />
    </picture>
    <div class="dark_attribution" rel="noopener noreferrer" target="_blank">
      QVFT
    </div>
  </div>

  <div class="imageWrapper padding">
    <picture class="Automation_and_Circuits">
      <source srcset="Automation_and_Circuits.webp" type="image/webp" />
      <img src="Automation_and_Circuits.webp" />
    </picture>
    <div class="dark_attribution" rel="noopener noreferrer" target="_blank">
      QVFT
    </div>
  </div>


  <h2>System Guide</h2>

  <p>
    <a
      href="QVFT_System_Guide.pdf"
      download
      on:click={() => gtag('event', 'download system guide')}>
      Download our complete System Guide here
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

</div>


