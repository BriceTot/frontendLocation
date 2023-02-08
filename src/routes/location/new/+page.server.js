import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params, cookies }) {
	if (!locals.user) throw redirect(307, '/login');

	//verify that the user user is an admin else it redirect him to another page as he is not allowed to get here
	if (locals.user.role !== 'admin') throw redirect(307, '/not_allowed');
}

/** @type {import('./$types').Actions} */
export const actions = {
	add: async ({ params, cookies, request }) => {
		const data = await request.formData();

		const body = await api.post(`locations`, {
			geolocation: {
				coordinates: [
					+(data.get('longitude')),
					+(data.get('latitude'))
				],
				type: "Point"
			},
			filmType: data.get('filmType'),
			filmProducerName: data.get('filmProducerName'),
			endDate: data.get('endDate'),
			filmName: data.get('filmName'),
			district: +(data.get('district')),
			sourceLocationId: data.get('sourceLocationId'),
			filmDirectorName: data.get('filmDirectorName'),
			address: data.get('address'),
			startDate: data.get('startDate'),
			year: +(data.get('year'))
		}, cookies.get('jwt'));


		if (body.errors) {
			return fail(401, body);
		}

		throw redirect(307, `/location/`);
	}
};
