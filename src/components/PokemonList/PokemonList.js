import React, {Component} from 'react';
import Pokecard from '../../components/Pokecard/Pokecard';
class PokemonList extends Component {
	/* static defaultProps => sets default values
	 */
	render() {
		let title = this.props.isWinner ? (
			<h1 className='PokemonList-winner'>Winning Hand</h1>
		) : (
			<h1 className='PokemonList-loser'>Losing Hand</h1>
		);
		return (
			<div className='PokemonList'>
				{title}
				<h4>Total experience : {this.props.experienceScore}</h4>

				{/* <p>{this.props.isWinner ? 'WINNER' : 'LOSER'}</p> */}
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
