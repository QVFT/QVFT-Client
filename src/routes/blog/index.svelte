<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  h2 a {
    text-decoration: none;
    color: black;
  }

  h2 a:hover {
    text-decoration: underline;
  }

  div.blog {
    padding-top: 2rem;
  }

  div.post {
    padding-bottom: 3.5rem;
    border-top: 2px solid #eee;
  }
  div.subtitle {
    margin: -0.5rem 0 1.2rem;
    color: #222;
  }

  div.subtitle,
  div.readMore {
    font-size: 0.85rem;
  }

  div.imageWrapper {
    height: 10rem;
    width: 80%;
    margin-bottom: 1.5rem;
    margin-left: 0.8rem;
  }

  div.imageWrapper img {
    max-height: 100%;
    max-width: 100%;
    height: 10rem;
    border: 1px solid #ddd;
    display: block;
    box-shadow: 2px 2px 5px #eee;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<h1>Build Progress</h1>
<p>
  Blog description... Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat.
</p>
<div class="blog">
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <div class="post">
      <h2>
        <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      </h2>
      <div class="subtitle">{post.author} &bullet; {post.date}</div>
      {#if post.image}
        <div class="imageWrapper">
          <img src={`blog/${post.image}`} alt={post.imageAlt} />
        </div>
      {/if}
      <p class="blurb">{post.blurb}</p>
      <div class="readMore">
        <a rel="prefetch" href="blog/{post.slug}">Read more</a>
      </div>
    </div>
  {/each}
</div>
