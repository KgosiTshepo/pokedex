import React, {Component} from 'react';
import Pokecard from '../../components/Pokecard/Pokecard';
class PokemonList extends Component {
	/* static defaultProps => sets default values
	 */
	static defaultProps = {
		pokemon: [
			{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
			{id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
			{id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
			{id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
			{id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
			{id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
			{id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
			{id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
		]
	};
	render() {
		return (
			<div className='PokemonList'>
				<h1>POKEMON DECK</h1>
				{this.props.pokemon.map(pokemon => (
					<Pokecard
						key={pokemon.id}
						pokemonID={pokemon.id}
						name={pokemon.name}
						type={pokemon.type}
						experience={pokemon.base_experience}
					/>
				))}
			</div>
		);
	}
}

export default PokemonList;
