import React, {Component} from 'react';
// const POKEMON_BASEURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKEMON_BASEURL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
class PokeCard extends Component {
	render() {
		let padPokemonIDToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);
		let imageSource = `${POKEMON_BASEURL}${padPokemonIDToThree(this.props.pokemonID)}.png`;
		return (
			<div className='Pokecard'>
				<h1 className='Pokecard-title'>{this.props.name}</h1>
				<img src={imageSource} alt={this.props.name} />
				<div className='Pokecard-data'>Type:{this.props.type}</div>
				<div className='Pokecard-data'>Experience:{this.props.experience}</div>
			</div>
		);
	}
}

export default PokeCard;
