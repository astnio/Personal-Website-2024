<script lang="ts">
	export let postData: any;
	// const postDetails = postData.props.data;
	console.log('Post.svelte', postData);
</script>

<div class="flex mx-auto max-w-screen-lg">
	{#if postData}
		<div>
			<h1 class="h1">{postData.title}</h1>
			<hr class="mb-4 mt-6" />
			<p>{postData.body}</p>
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
