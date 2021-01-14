import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ title, children }) => {
    return (
        <div className="card__container">
            <h4>{ title }</h4>
            <hr />

            <div className="card__body">

                { children }

            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired
};