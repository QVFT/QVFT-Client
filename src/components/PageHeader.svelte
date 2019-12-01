<style>
  .pageHeader {
    min-height: 18rem;
    color: white;
    font-size: 1.8rem;
    line-height: 1.2;
    background-size: cover !important;
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

<div
  class="pageHeader"
  style="background: url('background.jpg') no-repeat center center fixed;">
  <div class="tint">
    <div class="contentWrapper">
      <h1>
        <slot />
      </h1>
    </div>
  </div>
</div>
