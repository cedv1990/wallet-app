import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AddScreen } from '../components/wallet/AddScreen';
import { DashboardScreen } from '../components/wallet/DashboardScreen';
import { MenuBar } from '../components/wallet/MenuBar';
import { MoreScreen } from '../components/wallet/MoreScreen';
import { StatisticsScreen } from '../components/wallet/StatisticsScreen';

export const WalletRoutes = () => {
    return (
        <div
            className="wallet__main-content"
        >
            
            <MenuBar />

            <div className="wallet__body animate__animated animate__fadeIn animate__faster">

                <Switch>
                    <Route exact path="/dashboard" component={ DashboardScreen } />
                    <Route exact path="/month" component={ DashboardScreen } />
                    <Route exact path="/statistics" component={ StatisticsScreen } />
                    <Route exact path="/add" component={ AddScreen } />
                    <Route exact path="/more" component={ MoreScreen } />

                    <Redirect to="/dashboard" />
                </Switch>

            </div>

        </div>
    )
}
