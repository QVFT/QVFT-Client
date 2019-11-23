<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid #eee;
    font-weight: 300;
    font-size: 0.9rem;
  }

  nav div.contentWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: inline-block;
    padding: 0;
    margin: 0 0.8rem;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: 95%;
    margin-left: 2.5%;
    height: 2px;
    background-color: #a5ce44;
    display: block;
    bottom: -1px;
  }

  a {
    position: relative;
    text-decoration: none;
    height: 3rem;
    display: flex;
    align-items: center;
    color: black;
  }

  img.logo {
    height: 2rem;
    width: 2rem;
  }
</style>

<nav>
  <div class="contentWrapper">
    <div class="logo">
      <li>
        <a class:selected={!segment} href=".">
          <img class="logo" src="logo.png" alt="QVFT" />
        </a>
      </li>
    </div>
    <ul>
      <li>
        <a class:selected={segment === 'about'} href="about">About</a>
      </li>
      <li>
        <a class:selected={segment === 'team'} href="team">Our Team</a>
      </li>
      <li>
        <a
          class:selected={segment === 'about-vertical-farming'}
          href="about-vertical-farming">
          About Vertical Farming
        </a>
      </li>
    </ul>
  </div>

</nav>
