<script>
  export let blog = [];
</script>

<style>
  div.blogPreview {
    margin-top: 2rem;
  }
  div.postPreview {
    border-top: 1px solid #eee;
    padding: 1.5rem 0;
  }

  div.postPreview a {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }

  div.postPreview a:hover {
    text-decoration: underline;
  }

  div.postPreview:last-child {
    border-bottom: 1px solid #eee;
  }
  div.readMore {
    margin: 2rem 0 3rem;
    font-size: 0.9rem;
  }
</style>

<div class="blogPreview">
  {#each blog as post}
    <div class="postPreview">
      <a rel="prefetch" href="/blog/{post.slug}">{post.title}</a>
      &bullet;
      <span>{post.date}</span>
    </div>
  {/each}
</div>
<div class="readMore">
  <a rel="prefetch" href="blog">See all posts</a>
</div>
