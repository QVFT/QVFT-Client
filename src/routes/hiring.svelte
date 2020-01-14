<script>
  import { onMount } from "svelte";
  import PageHeader from "../components/PageHeader.svelte";
  onMount(async () => {
    gtag("config", "UA-93549235-6", { page_path: "/hiring" });
  });

  const info = [
    {
      label: "2 Mechanical Designers",
      img: "Gears_Icon"
    },
    {
      label: "2 Software Engineers",
      img: "Laptop_Icon"
    }
  ];
</script>

<style>
  div.pdfWrapper {
    margin-top: 2rem;
    width: 100%;
    height: 66vh;
  }

  .contentWrapper {
    margin-top: 2rem;
  }
  div.infoColumns {
    margin: 2rem 0 1rem;
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
</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>

<PageHeader>Hiring</PageHeader>
<div class="contentWrapper">
  <h2>Description</h2>
  <p>
    Founded in Sep. 2019, QVFT is Canada's first student-led university vertical farming design team. Vertical farming is a hyper-efficient, sustainable food cultivation method  which is projected to become a major contributor to global food production in the coming decades.
    
    We are currently seeking four passionate, conscientious, creative thinkers to join our team for Winter 2020. We are hiring two mechanical designers, and two software engineers. Please see our Hiring Package for further details. Applications close Friday, January 17th at 11:59 PM.
  </p>
  <div class="infoColumns">
    {#each info as item}
      <div class="item">
        <div class="imageWrapper">
          <picture>
            <source srcset="{item.img}.webp" type="image/webp" />
            <source srcset="{item.img}.png" type="image/png" />
            <img src="{item.img}.png" alt={item.label} />
          </picture>
        </div>
        <div class="itemLabel">{item.label}</div>
      </div>
    {/each}
  </div>
  <div id="hiringPackageSecion">
    <h2>Hiring Package</h2>
    <div class="pdfWrapper">
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
  </div>
  <h2>Apply</h2>
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSd5uvv4FCd4I6nbvfFewKybUq8MBjRVlDWuwkxcO0t1d8tw8w/viewform?embedded=true"
    width="100%"
    height="488"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    title="Hiring form">
    Loading…
  </iframe>
</div>
