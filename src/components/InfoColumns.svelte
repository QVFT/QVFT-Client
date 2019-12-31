<script>
  const info = [
    {
      label: "Fully Automated Aeroponic Vertical Farm",
      img: "fullyAutomated"
    },
    {
      label: "Premium Produce",
      img: "premiumProduce"
    },
    {
      label: "23 Dedicated Farmers",
      img: "ourTeam"
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
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--darkGrey);
  }
</style>

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
