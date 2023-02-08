import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals}) {
	if (!locals.user) throw redirect(307, '/login');

	if (locals.user.role !== 'admin') throw redirect(307, '/not_allowed');
}

/** @type {import('./$types').Actions} */
export const actions = {
	delete: async ({ params, cookies, request }) => {
		const data = await request.formData();

		const body = await api.del(`locations/${params.slug}`, cookies.get('jwt'));


		if (body.errors) {
			return fail(401, body);
		}

		throw redirect(307, `/location/`);
	}
};
