<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<h1>Documentation for my own learning</h1>

{#each data.pages as page}
	<li><a href="/docs/{page.slug}">{page.title}</a></li>
{/each}

{@render children?.()}
