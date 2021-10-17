import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <section className='pokemon'>
        <img src={pokemon.image} alt={pokemon.name} />
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>Average Weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        </div>
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
  }).isRequired,
}

export default Pokemon;
