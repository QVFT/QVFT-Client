<script>
  const info = [
    {
      url: "https://www.queensu.ca/innovationcentre/",
      img: "DDQIC",
      width: "14rem"
    },
    {
      url: "https://www.bmahydroponics.com/",
      img: "BMA",
      width: "19rem"
    },
    {
      url: "https://zipgrow.com/",
      img: "ZipGrow Logo",
      width: "13rem"
    },
    {
      url: "https://www.igrow.news/",
      img: "igrow",
      width: "10rem"
    },
    {
      url: "https://engsoc.queensu.ca/index.php/get-involved/clubs/",
      img: "engsoc",
      width: "13rem"
    },
    {
      url: "http://simbl.ca/",
      img: "SIMBL Logo",
      width: "7rem"
    },
    {
      url: "https://aerok.ca/",
      img: "Aerok",
      width: "11rem"
    }
  ];
</script>

<style>
  div.infoColumns {
    margin: 2rem 0 -2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  div.imageWrapper,
  div.imageWrapper picture,
  div.imageWrapper img,
  div.imageWrapper source {
    max-width: 100%;
    max-height: 100%;
  }

  a.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 2rem;
    transition: all 0.5s ease;
  }

  a.item:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }
</style>

<div class="infoColumns">
  {#each info as item}
    <a
      class="item"
      target="_blank"
      rel="noopener noreferrer"
      href={item.url}
      style={`width: ${item.width || '6rem'};`}>
      <div class="imageWrapper">
        <picture>
          <source srcset="partners/{item.img}.webp" type="image/webp" />
          <source srcset="partners/{item.img}.png" type="image/png" />
          <img src="partners/{item.img}.webp" alt={item.label} />
        </picture>
      </div>
    </a>
  {/each}
</div>
