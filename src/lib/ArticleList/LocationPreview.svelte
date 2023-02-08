<script>
	export let location;
	export let user;
</script>

<div class="article-preview">

	<h3>{location.filmName}</h3>
	<h5>{location.filmType}</h5>
	<a href="/location/{location._id}">view</a>
	{#if user.role === 'admin'}
		<a href="/location/{location._id}/delete">delete</a>
	{/if}
</div>
