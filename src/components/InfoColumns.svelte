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
      img: "ourTeam.jpg"
    }
  ];
</script>

<style>
  div.infoColumns {
    display: flex;
    justify-content: center;
    margin: 3rem 0;
    flex-wrap: wrap;
  }

  div.imageWrapper {
    height: 5rem;
    width: 5rem;
    margin-bottom: 1.5rem;
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
    font-size: 0.9rem;
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
