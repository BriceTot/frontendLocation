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

	const locationsCount= await api.get(`locations/get/count`, cookies.get('jwt'));

	return {
		locations,
		pages: Math.ceil(locationsCount / page_size),
	};
}
