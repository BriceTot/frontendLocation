import * as api from '$lib/api';
import { page_size } from '$lib/constants';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies, url }) {
	//if the user is not connected, he is redirected to the login page
	if (!locals.user) throw redirect(307, '/login');

	const page = +(url.searchParams.get('page') ?? '1');

	const q = new URLSearchParams();
//set all options for the query
	q.set('limit', page_size);
	q.set('offset', (page - 1) * page_size);

	const locations= await api.get(`locations?${q}`, cookies.get('jwt'));

	//could have added a new route to the backend to get the number of document with a Location.countDocuments
	//in order to get less loading for the location page but I preferred to not modify the backend just for a minor route
	const fullLocations= await api.get(`locations?limit=100000`, cookies.get('jwt'));
	const locationsCount = fullLocations.length

	return {
		locations,
		pages: Math.ceil(locationsCount / page_size),
	};
}
