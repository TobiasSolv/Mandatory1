<script>
	let { data } = $props();
</script>

<h1>{data.page.title}</h1>
<div>{@html data.page.file}</div>
