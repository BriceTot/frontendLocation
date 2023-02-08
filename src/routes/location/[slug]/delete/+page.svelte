<script>
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Delete location</title>
</svelte:head>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">Are you sure you want to delete this location</h1>

				<ListErrors errors={form?.errors} />

				<form use:enhance method="POST" action="?/delete">
					<button class="btn btn-outline-danger" type="submit">Yes, Delete it</button>
				</form>
			</div>
		</div>
	</div>
</div>