import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const MoreScreen = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    };

    const { name } = useSelector(state => state.auth);

    return (
        <>
            <h3 className="wallet__body-title">More</h3>
            <div className="wallet__body-content">
                Contenido { name }

                <button
                    className="btn"
                    onClick={ handleLogout }
                >
                    Logout
                </button>
            </div>
        </>
    )
}
