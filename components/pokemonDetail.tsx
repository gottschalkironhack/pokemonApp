import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { getPokemonByName } from '../services/pokemonApi';
import { type PokemonInDetail, pokemonAbilities, pokemonTypes } from '../modules/pokemon';
import environment from '../environments/environment';

const POKEMON_IMAGE_URL = environment.pokemonImageUrl;

type Props = {
  name: string,
}

const MessageWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const PokemonCard = styled.div`
  position: relative;
	color: gray;
	font-size: 12px;
  font-family: sans-serif;
  border: solid 1px gray;
  width: 250px;
  height: 300px;
  padding: 20px;
  margin: auto;
	& div {
		margin-top: 10px;
	}
`;

const CloseDetailCard = styled.div`
	margin: 0;
  position: absolute;
  right: 10px;
  top: 0;
  a {
    text-decoration: none;
    color: gray;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const InfoTitle = styled.span`
  font-weight: 600;
`;

const InfoValue = styled.span`
  padding-left: 4px;
  font-weight: 400;
`;

const PokemonName = styled.div`
	text-align: center;
	&:first-letter {
		text-transform: capitalize;
	}
`;

const PokemonDetail = ({ name }: Props): React.ReactElement => {
	const [pokemon, setPokemon] = React.useState<PokemonInDetail | null>(null);
	const [error, setError] = React.useState<string | null>(null);
	React.useEffect(() => {
		if (!name) return;
		getPokemonByName(name)
			.then(data => setPokemon(data))
			.catch(err => setError(err));
	}, [name]);

	if (error) return (
		<MessageWrapper data-testid="message-wrapper">
			There has been an error loading pokemon data...
		</MessageWrapper>
	);

	if (!pokemon) return (
		<MessageWrapper data-testid="message-wrapper">
			loading pokemon data...
		</MessageWrapper>
	);

	const imageUrl = `${POKEMON_IMAGE_URL}${name}.gif`;

	return (
		<PokemonCard data-testid="pokemon-detail-card">
			<CloseDetailCard><Link href="/">X</Link></CloseDetailCard>
			<ImgWrapper>
				<Image loader={() => imageUrl} src={imageUrl} width={80} height={80} alt={name} />
			</ImgWrapper>
			<PokemonName>{pokemon.name}</PokemonName>
			<div>
				<InfoTitle>ID:</InfoTitle>
				<InfoValue>{pokemon.id}</InfoValue>
			</div>
			<div>
				<InfoTitle>Type:</InfoTitle>
				<InfoValue>{pokemonTypes(pokemon).join(' | ')}</InfoValue>
			</div>
			<div>
				<InfoTitle>Height:</InfoTitle>
				<InfoValue>{pokemon.height}</InfoValue>
			</div>
			<div>
				<InfoTitle>Habilities</InfoTitle>
				<InfoValue>
					<ul>
						{pokemonAbilities(pokemon).map(ability =>
							<li key={`${pokemon.id}${ability}`}>{ability}</li>)}
					</ul>
				</InfoValue>
			</div>
		</PokemonCard>
	);
};

export default PokemonDetail;
