import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import environment from '../environments/environment';

type Props = {
    name: string,
};

const POKEMON_IMAGE_URL = environment.pokemonImageUrl;

const PokemonCard = styled.div`
	width: 100%;
	border: solid 1px black;
	box-sizing: border-box;
	border-radius: 3px;
	padding: 40px;
	background: white;
	text-align: center;
	&:hover{
		cursor: pointer;
		background: gray;
	}
	@media (min-width: 576px) {
		width: 47.5%;
		padding: 20px;
  }
	@media (min-width: 768px) {
		width: 200px;
		margin: 0;
  }
`;

const PokemonImg = styled.div`
		margin: 15px 0;
		&:hover { 
			cursor: pointer
		}
`;

const PokemonName = styled.p`
	margin: 0;
	font-family: sans-serif;
	font-size: 12px;
	&:first-letter {
		text-transform: capitalize;
	}
`;

const Pokemon = ({
	name,
}: Props): React.ReactElement => {
	const imageUrl = `${POKEMON_IMAGE_URL}${name}.gif`;

	return (
		<PokemonCard>
			<PokemonImg>
				<Link href={`/pokemon/${name}`}>
					<img src={imageUrl} width={50} height={50} alt={name} />
				</Link>
			</PokemonImg>
			<PokemonName>{name}</PokemonName>
		</PokemonCard>
	);
};

export default Pokemon;
