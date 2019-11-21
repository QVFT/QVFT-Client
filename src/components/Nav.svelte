<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid #eee;
    font-weight: 300;
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
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-flex;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #a5ce44;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0 0.5rem;
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
      <!-- <li>
        <a class:selected={segment === 'about'} href="about">about</a>
      </li> -->

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a rel="prefetch" class:selected={segment === 'blog'} href="blog">
          Blog
        </a>
      </li>
    </ul>
  </div>

</nav>
