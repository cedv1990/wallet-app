import React from 'react';
import { Day } from './Day';

export const MonthScreen = () => {

    const date = new Date(Date.now());

    const data = [
        {
            date: '14 January',
            data: [
                {
                    icon: 'fa-car',
                    name: 'Vehicle',
                    note: 'Nota del registro',
                    value: -5000000,
                    time: date.getTime(),
                    color: 'red',
                    accountColor: '#00e676'
                },
                {
                    icon: 'fa-building',
                    name: 'Apto',
                    note: '',
                    value: 1500000,
                    time: date.setHours(date.getHours() - 2),
                    color: 'red',
                    accountColor: '#00e676'
                }
            ]
        },
        {
            date: '13 January',
            data: [
                {
                    icon: 'fa-tools',
                    name: 'Moto',
                    note: '',
                    value: 250000,
                    time: date.setHours(date.getHours() - 1),
                    color: 'red',
                    accountColor: '#00e676'
                }
            ]
        }
    ];

    return (
        <>
            <h3 className="wallet__body-title month__title">
                Month <br />
                <input
                    className="input-search"
                    type="text"
                    placeholder="Search"
                />
            </h3>
            <div className="wallet__body-content month__content">
                {
                    data.map((d, i) => (<Day key={ i } {...d} />))
                }
            </div>
        </>
    )
}
