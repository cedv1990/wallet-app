import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { formatAMPM } from '../../utils/date';

export const DayRecord = ({ icon, color, name, note, value, time, accountColor }) => {
    return (
        <div className="record">
            <div className="icon" style={{ backgroundColor: color }}>
                <i className={ `fas ${icon}` }></i>
                <aside style={{ backgroundColor: accountColor }}></aside>
            </div>
            <div className="descriptions">
                <h5>{ name }</h5>
                <span>{ note }</span>
            </div>
            <div className="details">
                <h5 className={ value < 0 ? 'expense' : '' }>
                    <NumberFormat 
                        displayType={'text'} 
                        value={ value } 
                        decimalSeparator={ ',' } 
                        thousandSeparator={ '.' } 
                        fixedDecimalScale={ true }
                        decimalScale={ 2 }
                    />
                </h5>
                <span>{ formatAMPM(new Date(time)) }</span>
            </div>
        </div>
    )
}

DayRecord.propTypes = {
    color: PropTypes.string.isRequired, 
    icon: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    value: PropTypes.number.isRequired, 
    time: PropTypes.number.isRequired, 
    accountColor: PropTypes.string.isRequired
};