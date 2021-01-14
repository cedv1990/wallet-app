import React from 'react';

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
                        ['#4dd0e1','#ab47bc','#4dd0e1','#ab47bc','#4dd0e1'].map(x => 
                            (
                                <div className="item">
                                    <div className="icon" style={{ color: x }}>
                                        <i className="fas fa-wallet"></i>
                                    </div>
                                    <div className="name">
                                        Cash
                                    </div>
                                    <div className="value">
                                        0,00
                                    </div>
                                    <div className="currency">
                                        COP
                                    </div>
                                </div>
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
                        data.map(({ title, body }) => (
                            <div className="card__container">
                                <h4>{ title }</h4>
                                <hr />

                                <div className="card__body">

                                    { body }

                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
        </>
    )
}
