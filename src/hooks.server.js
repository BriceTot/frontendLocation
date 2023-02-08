import * as api from '$lib/api';

//handle the token associated to a user to retrieve it and give the user information to each page
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const jwt = event.cookies.get('jwt');
	let body = jwt ? await api.get('users/me', jwt) : null;
	if (body !==null && body.errors){
		body=null;
	}
	event.locals.user = body;
	return resolve(event);
}
