import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export const AccountItem = ({ icon, color, name, value, currency }) => {
    return (
        <div className="item">
            <div className="icon" style={{ color }}>
                <i className={`fas ${icon}`}></i>
            </div>
            <div className="name">
                { name }
            </div>
            <div className="value">
                <NumberFormat 
                    displayType={'text'} 
                    value={ value } 
                    decimalSeparator={ ',' } 
                    thousandSeparator={ '.' } 
                    fixedDecimalScale={ true }
                    decimalScale={ 2 }
                />
            </div>
            <div className="currency">
                { currency }
            </div>
        </div>
    )
}

AccountItem.propTypes = {
    icon: PropTypes.string.isRequired, 
    color: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    value: PropTypes.number.isRequired, 
    currency: PropTypes.string.isRequired
};
