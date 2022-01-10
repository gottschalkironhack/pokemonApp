import * as React from 'react';
import { useRouter } from 'next/router';

import PokemonDetail from '../../components/pokemonDetail';

const PokemonName = () => {
	const router = useRouter();
	const { pokemonName } = router.query;
	return (
		<PokemonDetail
			name={pokemonName && !Array.isArray(pokemonName)
				? String(pokemonName)
				: ''}
		/>
	);
};

export default PokemonName;
