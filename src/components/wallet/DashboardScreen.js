import React from 'react';
import { AccountItem } from './AccountItem';
import { Card } from './Card';

const data = [
    {
        title: 'Balance Trend',
        body: (
            <>
                <div className="summary">
                    <span>TODAY</span>
                    <p><b>0,00</b> <span>COP</span></p>
                </div>

                <div className="graph">

                </div>
            </>
        )
    },
    {
        title: 'Top expenses',
        body: (
            <>
            </>
        )
    },
    {
        title: 'Last records',
        body: (
            <>
            </>
        )
    }
]

export const DashboardScreen = () => {
    return (
        <>
            <div className="wallet__dashboard-container">
                <div className="wallet__dashboard-accounts">
                    {
                        ['#4dd0e1','#ab47bc','#4dd0e1','#ab47bc','#4dd0e1'].map((x, i) => 
                            (
                                <AccountItem
                                    key={ i }
                                    color={ x }
                                    currency="COP"
                                    value={ 5.836 }
                                    icon="fa-wallet"
                                    name="Cash"
                                />
                            )
                        )
                    }
                    <div className="item new">
                        <div className="icon">
                            <i className="fas fa-plus-circle"></i>
                        </div>
                        <div className="text">
                            Add account
                        </div>
                    </div>
                    <div className="space"></div>
                </div>

                <div className="wallet__dashboard-cards-container">
                    {
                        data.map(({ title, body }, i) => (
                            <Card key={ i } title={ title }>
                                { body }
                            </Card>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
