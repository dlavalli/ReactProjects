import React from 'react';
import PropTypes from 'prop-types';

// The component attribute movie has to match the name specified where the component is called
// See the List.render() method
const Card = ({ movie }) => {
  return (
    <div className='card'>
      <img src={movie.img.src} className='card-img-top' alt={movie.img.alt} />
      <div className='card-body'>
        <h2 className='card-title'>{`# ${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Distributor: ${movie.distributor}`}</li>
        <li className='list-group-item'>{`Amount: ${movie.amount}`}</li>
      </ul>
    </div>
  );
};

// Definition of the Card information as refelected in the sample data.json file
// and as used in the react display section above
Card.propTypes = {

    // Now, we can validate propTypes in our component by importing the package
    // into the Card component and adding the validation
    movie: PropTypes.shape({

        // the validation for our props still isn't very specific. We can make this more specific
        // by also specifying the propTypes of all the fields of the movie prop
        title: PropTypes.string,
        distributor: PropTypes.string,
        year: PropTypes.number,
        amount: PropTypes.string,
        img: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
        }),
        ranking: PropTypes.number,

    // We can also indicate which props are required for React to render
    // the component by adding isRequired to the propTypes validation.
    }).isRequired,
};

export default Card;
