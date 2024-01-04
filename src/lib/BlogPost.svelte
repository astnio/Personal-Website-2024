<script lang="ts">
	export let post: any;
</script>

<article>
	<h2>{post.title}</h2>
	<p>{post.contentSnippet}</p>
	<a href={post.link}>Read More</a>
</article>
