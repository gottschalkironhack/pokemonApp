import * as React from 'react';
import styled from 'styled-components';

import Pokemon from './pokemon';
import type { PokemonList } from '../modules/pokemon';

type Props = {
  pokemons: PokemonList,
};

const PokemonContainer = styled.div`
  text-align: center;  
`;

const PokemonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
	row-gap: 15px;
	margin: auto;

	@media (min-width: 576px) {
		width: 100%;
		gap: 2.5%;
		row-gap: 15px;
		justify-content: center;
  }

	@media (min-width: 768px) {
		margin: auto;
		gap: 25px;
		row-gap: 15px;
		width: 650px;
		justify-content: flex-start;
  }
`;

const NoPokemonsData = styled.div`
	display: flex;
	height: 100vh;
	align-items: center;
	width: 100%;
	justify-content: center;
`;

const Pokemons = ({
	pokemons,
}: Props): React.ReactElement =>
	((pokemons && Array.isArray(pokemons) && pokemons.length > 0) ? (
		<PokemonContainer data-testid="pokemon-container">
			<h2>POKEMON</h2>
			<h4>Generation 1</h4>
			<p>{`${pokemons.length} pokemon`}</p>
			<PokemonWrapper>
				{ pokemons.map((pokemon) => (
					<Pokemon
						key={pokemon.name}
						name={pokemon.name}
					/>
				))}
			</PokemonWrapper>
		</PokemonContainer>
	) : <NoPokemonsData>No Pokemons found :(</NoPokemonsData>);

export default Pokemons;
