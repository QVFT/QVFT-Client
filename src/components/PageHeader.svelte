<style>
  .pageHeader {
    font-size: 1.6rem;
    line-height: 1.2;
    background-clip: border-box;
    background-origin: padding-box;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: cover;
    box-sizing: border-box;
    box-shadow: 0px 3px 5px 0px rgba(34, 34, 34, 0.2);
    text-shadow: 0px 0px 1px #222;
  }

  .tint {
    background-color: rgba(0, 0, 0, 0.45);
  }
  h1 {
    margin: 0;
    padding: 0;
    color: white;
  }
  .contentWrapper {
    display: flex;
    align-items: center;
    height: 100%;
    min-height: 16rem;
  }
</style>

<div class="pageHeader" style="background-image: url('background.png');">
  <div class="tint">
    <div class="contentWrapper">
      <h1>
        <slot />
      </h1>
    </div>
  </div>
</div>
