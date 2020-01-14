<script>
  import { onMount } from "svelte";
  import PageHeader from "../components/PageHeader.svelte";
  onMount(async () => {
    gtag("config", "UA-93549235-6", { page_path: "/hiring" });
  });
</script>

<style>
  div.pdfWrapper {
    margin-top: 2rem;
    width: 100%;
    height: 95vh;
  }
  a.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: red;
    text-decoration: none;
    background-color: var(--themeColorDark);
    border-radius: 0.5rem;
    box-shadow: 1px 1px 2px 2px #dedededd;
  }
  .contentWrapper {
    margin-top: 2rem;
  }
  .mobile {
    display: none;
    justify-content: center;
  }
  @media (max-width: 700px) {
    .mobile {
      display: flex !important;
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
 <div class="contentWrapper desktop">
  <h2>Description</h2>
  <p>
    We are currently seeking four passionate, conscientious, creative thinkers to join our team for Winter 2020. We are hiring two mechanical designers, and two software engineers. Please see the Hiring Package for further details. Applications close Friday, January 17th at 11:59 PM.
  </p>
  <p>
    <a
      href="QVFT_Hiring.pdf"
      download
      on:click={() => gtag('event', 'download hiring package')}>
      Click to Download Hiring Package
    </a>
  </p>
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
  <div>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5uvv4FCd4I6nbvfFewKybUq8MBjRVlDWuwkxcO0t1d8tw8w/viewform?embedded=true" width="640" height="2891" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
</div>
<div class="contentWrapper mobile">
  <a class="button" href="QVFT_Hiring.pdf">View Hiring Package</a>
</div>
