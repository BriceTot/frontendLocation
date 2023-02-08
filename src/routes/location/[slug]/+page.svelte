<script>
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;


	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Details location</title>
</svelte:head>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">Details</h1>

				<ListErrors errors={form?.errors} />

				<form use:enhance method="POST" action="?/edit">
					<fieldset class="form-group">
						<h5>Film name</h5>
						<input
							class="form-control form-control-lg"
							name="filmName"
							type="text"
							required
							placeholder="Film name"
							value={data.location.filmName}
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Film type</h5>
						<input
							class="form-control form-control-lg"
							name="filmType"
							type="text"
							required
							placeholder="Film type"
							value={data.location.filmType}
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Film producer name</h5>
						<input
								class="form-control form-control-lg"
								name="filmProducerName"
								type="text"
								placeholder="Film producer name"
								value={data.location.filmProducerName}
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Film director name</h5>
						<input
								class="form-control form-control-lg"
								name="filmDirectorName"
								type="text"
								placeholder="Film director name"
								value={data.location.filmDirectorName}
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Address</h5>
						<input
								class="form-control form-control-lg"
								name="address"
								type="text"
								placeholder="Address"
								value={data.location.address}
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Source location ID</h5>
						<input
								class="form-control form-control-lg"
								name="sourceLocationId"
								type="text"
								placeholder="Source location ID"
								value={data.location.sourceLocationId}
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>District</h5>
						<input
								class="form-control form-control-lg"
								name="district"
								type="number"
								placeholder="District"
								value={data.location.district}
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Yea</h5>
						<input
								class="form-control form-control-lg"
								name="year"
								type="number"
								placeholder="Year"
								value={data.location.year}
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Start date</h5>
						<input
								class="form-control form-control-lg"
								name="startDate"
								type="text"
								placeholder="Start date"
								value={data.location.startDate}
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>End date</h5>
						<input
								class="form-control form-control-lg"
								name="endDate"
								type="text"
								placeholder="End date"
								value={data.location.endDate}
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Longitude</h5>
						<input
								class="form-control form-control-lg"
								name="longitude"
								type="text"
								placeholder="Longitude"
								value={data.location.geolocation.coordinates[0]}
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Latitude</h5>
						<input
								class="form-control form-control-lg"
								name="latitude"
								type="text"
								placeholder="Latitude"
								value={data.location.geolocation.coordinates[1]}
						/>
					</fieldset>
					{#if $page.data.user.role==='admin'}
						<button class="btn btn-lg btn-primary pull-xs-right" type="submit">Edit</button>
					{/if}
				</form>
			</div>
		</div>
	</div>
</div>