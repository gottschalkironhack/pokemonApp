import ky from 'ky';

import environment from '../environments/environment';

const API_URL = environment.apiUrl;

export const getPokemons = () =>
	new Promise((resolve, reject) =>
		ky.get(`${API_URL}/?limit=100`, {
			timeout: false,
			headers: {
				accept: 'application/javascript, application/json',
				'content-type': 'application/json',
			},
		})
			.then((response) => {
				if (response.status > 399) {
					reject(response);
				} else {
					response.json()
						.then((body) => resolve(body))
						.catch(reject);
				}
			})
			.catch(e => {
				reject(e);
			}));

export const getPokemonByName = (name) =>
	new Promise((resolve, reject) =>
		ky.get(`${API_URL}/${name}`, {
			timeout: false,
			headers: {
				accept: 'application/json', 'content-type': 'application/json',
			},
		})
			.then((response) => {
				if (response.status > 399) {
					reject(response);
				} else {
					response.json()
						.then((body) => {
							resolve(body);
						}).catch(reject);
				}
			})
			.catch(e => reject(e)));
