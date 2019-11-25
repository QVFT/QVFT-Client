<script>
  const info = [
    {
      label: "Fully Automated Aeroponic Vertical Farm",
      img: "fullyAutomated.png"
    },
    {
      label: "Premium Produce",
      img: "premiumProduce.png"
    },
    {
      label: "23 Dedicated Farmers",
      img: "ourTeam.png"
    }
  ];
</script>

<style>
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
    font-weight: bold;
    font-size: 1.1rem;
  }
</style>

<div class="infoColumns">
  {#each info as item}
    <div class="item">
      <div class="imageWrapper">
        <img alt={item.label} src={item.img} />
      </div>
      <div class="itemLabel">{item.label}</div>
    </div>
  {/each}
</div>
