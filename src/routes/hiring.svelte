<script>
  import { onMount } from "svelte";
  import PageHeader from "../components/PageHeader.svelte";
  onMount(async () => {
    gtag("config", "UA-93549235-6", { page_path: "/hiring" });
  });

  const info = [
    {
      label: "Mechanical Designer",
      img: "Gears_Icon"
    },
    {
      label: "Stack Developer",
      img: "Laptop_Icon"
    },
    {
      label: "Mechatronics Engineer",
      img: "circuit"
    },
    {
      label: "Plant Science Researcher",
      img: "premiumProduce"
    },
    {
      label: "Business Operations Manager",
      img: "ourTeam"
    }
  ];
</script>

<style>
  div.pdfWrapper {
    margin-top: 2rem;
    width: 100%;
    height: 100vh;
  }

  .contentWrapper {
    margin-top: 2rem;
  }
  div.infoColumns {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  div.imageWrapper {
    height: 6rem;
    width: 6rem;
    margin-bottom: 1.8rem;
  }
  div.imageWrapper img {
    max-width: 100%;
    max-height: 100%;
  }
  div.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 12rem;
    text-align: center;
    padding: 2rem;
  }
  div.itemLabel {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--darkGrey);
  }

  iframe {
    margin-bottom: 2rem;
  }

  .mobile {
    display: none;
    justify-content: center;
  }

  div.buttonWrapper {
    text-align: center;
  }
  a.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: white;
    text-decoration: none;
    background-color: var(--themeColorDark);
    border-radius: 0.5rem;
    box-shadow: 1px 1px 2px 2px #dedededd;
  }

  .mobile {
    display: none;
  }

  div#hiringPackageSection {
    margin-bottom: 5rem;
  }

  @media (max-width: 700px) {
    .mobile {
      display: block !important;
    }
    .desktop {
      display: none;
    }
  }
</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>

<PageHeader>Hiring</PageHeader>
<div class="contentWrapper">
  <h2>Description</h2>
  <p>
    Founded in September 2019, QVFT is Canada's first student-led university
    vertical farming design team. Vertical farming is a hyper-efficient,
    sustainable food cultivation method which is projected to become a major
    contributor to global food production in the coming decades. We are now
    seeking passionate, creative, and driven individuals to join us for the 2022-23 school year. 
    Individual roles are described in the Hiring Package below. Apply before 11:59 PM on Friday, April 8th, 2022.
  </p>
  <div class="infoColumns">
    {#each info as item}
      <div class="item">
        <div class="imageWrapper">
          <picture>
            <source srcset="{item.img}.webp" type="image/webp" />
            <source srcset="{item.img}.png" type="image/png" />
            <img src="{item.img}.webp" alt={item.label} />
          </picture>
        </div>
        <div class="itemLabel">{item.label}</div>
      </div>
    {/each}
  </div>
  <div id="hiringPackageSection">
    <h2>Hiring Package</h2>
    <div class="pdfWrapper desktop">
      <object
        width="100%"
        height="100%"
        title="Hiring"
        data="QVFT_Hiring.pdf"
        type="application/pdf">
        <embed
          title="Hiring"
          width="100%"
          src="QVFT_Hiring.pdf"
          type="application/pdf" />
      </object>
    </div>
    <div class="buttonWrapper mobile">
      <a class="button" href="QVFT_Hiring.pdf">View Hiring Package</a>
    </div>
  </div>
  <h2>Apply</h2>
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSfbKJlzjCGh976nVuWFvEgq_wuXRZx3LbAuxfEn124YAWMZpg/viewform?usp=sf_link?embedded=true"
    width="100%"
    height="1000"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    title="Hiring form">
    Loading…
  </iframe>
  
</div>
