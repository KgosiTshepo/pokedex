import React, {Component} from 'react';
import PokemonList from '../../components/PokemonList/PokemonList';
class PokemonScore extends Component {
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
		let pokecardHand1 = [];
		let pokecardHand2 = [...this.props.pokemon]; //... breaks an array to individual elements
		while (pokecardHand1.length < pokecardHand2.length) {
			let randmonIndex = Math.floor(Math.random() * pokecardHand2.length);
			/*splice(start =>The index at which to start changing the array,
			 * number of elements in the array to remove from start,
			 * The elements to add to the array, beginning from start)
			 * */
			let randomPokemon = pokecardHand2.splice(randmonIndex, 1)[0];
			pokecardHand1.push(randomPokemon);
		}
		const initialValue = 0;
		//adds total experience for each pokecard
		let pokecardHand1Experience = pokecardHand1.reduce(
			(experience, pokemon) => experience + pokemon.base_experience,
			initialValue
		);
		let pokecardHand2Experience = pokecardHand2.reduce(
			(experience, pokemon) => experience + pokemon.base_experience,
			initialValue
		);
		return (
			<div>
				{/* <h1>Pokemon Score</h1> */}
				<PokemonList
					pokemon={pokecardHand1}
					experienceScore={pokecardHand1Experience}
					isWinner={pokecardHand1Experience > pokecardHand2Experience}
				/>
				<PokemonList
					pokemon={pokecardHand2}
					experienceScore={pokecardHand2Experience}
					isWinner={pokecardHand2Experience > pokecardHand1Experience}
				/>
			</div>
		);
	}
}

export default PokemonScore;
