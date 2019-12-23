import React, {Component} from 'react';
import Pokecard from '../../components/Pokecard/Pokecard';
class PokemonList extends Component {
	/* static defaultProps => sets default values
	 */
	render() {
		return (
			<div className='PokemonList'>
				<h1>POKEMON DECK</h1>
				<p>Total experience : {this.props.experienceScore}</p>
				<p>{this.props.isWinner ? 'WINNER' : 'LOSER'}</p>
				<div className='PokemonList-cards'>
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
			</div>
		);
	}
}

export default PokemonList;
