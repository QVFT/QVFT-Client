<style>
  .pageHeader {
    height: 18rem;
    color: white;
    font-size: 1.8rem;
    background-size: cover !important;
  }

  .tint {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.45);
  }
  h1 {
    font-weight: normal !important;
  }
  .contentWrapper {
    display: flex;
    align-items: center;
    height: 100%;
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
