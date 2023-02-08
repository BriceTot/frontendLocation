import { fail, redirect } from '@sveltejs/kit';

//remove the cookies and the user from the data
/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }) {
	if (!locals.user) throw redirect(307, '/');
	cookies.delete('jwt', { path: '/' });
	locals.user=null;
	throw redirect(307, '/');
}
