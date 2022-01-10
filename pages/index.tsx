import * as React from 'react';
import Head from 'next/head';

import Pokemons from '../components/pokemons';
import { getPokemons } from '../services/pokemonApi';
import type { PokemonList } from '../modules/pokemon';

type Props = {
  pokemons: PokemonList,
}

const HomePage = (props: Props) => {
	const [pokemons, setPokemons] = React.useState(props.pokemons);
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		getPokemons()
			.then(data => setPokemons(data.results))
			.catch(err => setError(err));
	}, []);

	if (error) {
		return <p>Failed to load.</p>;
	}

	if (!pokemons) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<Head>
				<title>Pokemon</title>
				<meta
					name="description"
					content="a list of amazing pokemons"
				/>
			</Head>
			<Pokemons pokemons={pokemons} />
		</>
	);
};

export async function getStaticProps() {
	const pokemonList = await getPokemons();
	const { results } = await pokemonList;

	if (!pokemonList) return {
		redirect: {
			destination: '/no-data',
		},
	};

	// renders 404 error page
	if (pokemonList.length === 0) return { notFound: true };

	return {
		props: {
			pokemons: results,
		},
		revalidate: 10,
	};
}

export default HomePage;
