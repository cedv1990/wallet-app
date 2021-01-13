import React from 'react';
import { NavLink } from 'react-router-dom';
// import { noteLogout, startNewNote } from '../../actions/notes';
// import { JournalEntries } from './JournalEntries';

export const MenuBar = () => {
    return (
        <aside className="wallet__menubar">
            <div className="wallet__menubar-navbar">

                <NavLink
                    exact
                    to="/dashboard"
                    activeClassName="selected"
                    className="wallet__menubar-item"
                >
                    <i className="fas fa-house-user"></i>
                    <span>Dashboard</span>
                </NavLink>

                <NavLink
                    exact
                    to="/month"
                    activeClassName="selected"
                    className="wallet__menubar-item"
                >
                    <i className="fas fa-list"></i>
                    <span>Month</span>
                </NavLink>

                <NavLink
                    exact
                    to="/add"
                    activeClassName="selected"
                    className="wallet__menubar-item new"
                >
                    <i className="fas fa-plus-circle"></i>
                </NavLink>

                <NavLink
                    exact
                    to="/statistics"
                    activeClassName="selected"
                    className="wallet__menubar-item"
                >
                    <i className="fas fa-chart-line"></i>
                    <span>Statistics</span>
                </NavLink>

                <NavLink
                    exact
                    to="/more"
                    activeClassName="selected"
                    className="wallet__menubar-item"
                >
                    <i className="fas fa-ellipsis-h"></i>
                    <span>More</span>
                </NavLink>
            </div>

            {/* <JournalEntries /> */}
        </aside>
    )
}