import React from 'react';
import PropTypes from 'prop-types';
import { DayRecord } from './DayRecord';

export const Day = ({ date, data }) => {
    return (
        <div className="day">
            <span>{ date }</span>
            <div className="records">
                {
                    data.map((d, i) => (
                        <DayRecord
                            key={ i }
                            {...d}
                        />
                    ))
                }
            </div>
        </div>
    )
}

Day.propTypes = {
    date: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};