/**
 * Pokemon module:
 * Definition of Pokemon types and pokemon related functions
 *
 */

export type PokemonInList = {
	name: string,
	url: string,
};

export type PokemonList = Array<PokemonInList>;

type PokemonAbility = {
	ability: {
		name: string,
		url: string,
	},
	is_hidden: boolean,
	slot: number,
};

type PokemonType = {
	slot: number,
	type: { name: string, url: string },
};

export type PokemonInDetail = {
	name: string
	abilities: Array<PokemonAbility>,
	height: number,
	id: number,
	types: Array<PokemonType>
};

export const pokemonAbilities = (pokemon: PokemonInDetail): Array<string> =>
	pokemon.abilities.map(pokemonAbility =>
		pokemonAbility.ability.name);

export const pokemonTypes = (pokemon: PokemonInDetail): Array<string> =>
	pokemon.types.map(pokemonType =>
		pokemonType.type.name);
