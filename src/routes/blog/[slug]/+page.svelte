<script lang="ts">
  let { data } = $props();
</script>

<article class="article-detail">
  <header>
    <h1>{data.post.title}</h1>
    <p class="meta-info">Por <strong>{data.post.author}</strong> el {data.post.date}</p>
    {#if data.post.image}
      <img src={data.post.image} alt={data.post.title} class="hero-img" />
    {/if}
  </header>

  <div class="content">
    {@html data.post.content}
  </div>
  
  <a href="/blog" class="back-btn">← Volver al Blog</a>
</article>

<style>
  .article-detail {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 20px;
  }
  .hero-img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 20px;
  }
  .meta-info {
    color: #6b7280;
    margin-top: 10px;
  }
  .content {
    margin-top: 30px;
    line-height: 1.7;
  }
  .back-btn {
    display: inline-block;
    margin-top: 40px;
    color: #2563eb;
    text-decoration: none;
  }
</style>