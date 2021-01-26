import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useForm } from '../../hooks/useForm';
import { valueTypes } from '../../types/value-type';

export const AddScreen = () => {

    const [selected, setSelected] = useState('expense');

    const handleTypeClick = type => () => {
        setSelected(type);
    };

    const [ formValues, handleInputChange ] = useForm({
        value: 0
    });

    const cleanNumber = n => n.replace(/\s|\.|-|\+/gm, '').replace(/^0+/gm, '');

    const handleChange = e => {
        let val = cleanNumber(e.target.value);
        if (val === '') {
            val = '0';
        }
        e.target.value = val;
        handleInputChange(e);
    };

    const { value } = formValues;

    const { color, sign } = valueTypes[selected];

    return (
        <div className="add__value-container" style={{ "--add-value-color": color }}>
            <div className="add__value-type">
                {
                    Object.keys(valueTypes).map(k => (
                        <div
                            key={ k }
                            className={ k === selected ? 'selected' : '' }
                            onClick={ handleTypeClick(k) }
                        >
                            <div>{ k }</div>
                        </div>
                    ))
                }
            </div>

            <div className="add__value">
                <div className="add__value-currency">COP</div>
                <div className="add__value-amount">
                    <NumberFormat
                        value={ value } 
                        displayType={'input'} 
                        name="value"
                        prefix={ ` ${ sign } ` }
                        thousandSeparator={'.'} 
                        decimalSeparator={ ','}
                        decimalScale={0}
                        onChange={ handleChange }
                        defaultValue={ 0 }
                    />
                </div>
            </div>
        </div>
    )
}
