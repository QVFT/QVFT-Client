<style>
  .arrowLeft {
    z-index: 6;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 1.7rem;
    border-right: 16px solid white;
  }

  .arrowLeftBorder {
    z-index: 2;
    width: 0;
    height: 0;
    border-top: 18px solid transparent;
    border-bottom: 18px solid transparent;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 1.7rem;
    border-right: 18px solid #cdcdcd;
  }
</style>

<div aria-hidden="true" class="arrowLeft" />
<div aria-hidden="true" class="arrowLeftBorder" />
