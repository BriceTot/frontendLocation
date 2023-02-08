<script>
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';


	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>New location</title>
</svelte:head>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">New Location</h1>

				<ListErrors errors={form?.errors} />

				<form use:enhance method="POST" action="?/add">
					<fieldset class="form-group">
						<h5>Film name</h5>
						<input
							class="form-control form-control-lg"
							name="filmName"
							type="text"
							required
							placeholder="Film name"
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
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Film producer name</h5>
						<input
								class="form-control form-control-lg"
								name="filmProducerName"
								type="text"
								placeholder="Film producer name"
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Film director name</h5>
						<input
								class="form-control form-control-lg"
								name="filmDirectorName"
								type="text"
								placeholder="Film director name"
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Address</h5>
						<input
								class="form-control form-control-lg"
								name="address"
								type="text"
								placeholder="Address"
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Source location ID</h5>
						<input
								class="form-control form-control-lg"
								name="sourceLocationId"
								type="text"
								placeholder="Source location ID"
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>District</h5>
						<input
								class="form-control form-control-lg"
								name="district"
								type="number"
								placeholder="District"
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Yea</h5>
						<input
								class="form-control form-control-lg"
								name="year"
								type="number"
								placeholder="Year"
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Start date</h5>
						<input
								class="form-control form-control-lg"
								name="startDate"
								type="text"
								placeholder="Start date"
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>End date</h5>
						<input
								class="form-control form-control-lg"
								name="endDate"
								type="text"
								placeholder="End date"
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Longitude</h5>
						<input
								class="form-control form-control-lg"
								name="longitude"
								type="text"
								placeholder="Longitude"
						/>
					</fieldset>
					<fieldset class="form-group">
						<h5>Latitude</h5>
						<input
								class="form-control form-control-lg"
								name="latitude"
								type="text"
								placeholder="Latitude"
						/>
					</fieldset>
					<button class="btn btn-lg btn-primary pull-xs-right" type="submit">Add</button>
				</form>
			</div>
		</div>
	</div>
</div>