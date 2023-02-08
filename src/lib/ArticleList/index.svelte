<script>
	import { page } from '$app/stores';
	import LocationPreview from './LocationPreview.svelte';

	export let locations;
</script>

{#if locations.length === 0}
	<div class="location-preview">No locations are here... yet.</div>
{:else}
	<div>
		{#each locations as location (location.id)}
			<LocationPreview {location} user={$page.data.user} />
		{/each}
	</div>
{/if}
