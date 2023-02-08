<script>
	import { page } from '$app/stores';
	import ArticleList from '$lib/ArticleList/index.svelte';
	import Pagination from './Pagination.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: p = +($page.url.searchParams.get('page') ?? '1');

</script>

<svelte:head>
	<title>Locations</title>
</svelte:head>

<div class="home-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-9">
				{#if $page.data.user.role==='admin'}
					<a href="/location/new">Add a new location</a>
				{/if}
				<ArticleList locations={data.locations} />
				<Pagination pages={data.pages} {p} href={(p) => `location/?page=${p}`} />
			</div>
		</div>
	</div>
</div>
