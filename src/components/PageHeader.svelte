<style>
  .pageHeader {
    min-height: 18rem;
    color: white;
    font-size: 1.8rem;
    line-height: 1.2;
    background-clip: border-box;
    background-origin: padding-box;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: cover;
    box-sizing: border-box;
  }

  .tint {
    min-height: 18rem;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.45);
  }
  h1 {
    font-weight: normal !important;
    margin: 0;
    padding: 0;
  }
  .contentWrapper {
    display: flex;
    align-items: center;
    height: 100%;
    min-height: 18rem;
  }
</style>

<div class="pageHeader" style="background-image: url('background.jpg');">
  <div class="tint">
    <div class="contentWrapper">
      <h1>
        <slot />
      </h1>
    </div>
  </div>
</div>
