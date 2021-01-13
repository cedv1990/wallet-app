import { types } from '../types/types';

const initialState = {
    categories: [],
    active: null //{ id: 'skjfnv1233r4', title:'', body: '', imageUrl: '', date: 12342345r4 }
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.catActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            };

        case types.catAddNew:
            return {
                ...state,
                categories: [action.payload, ...state.categories]
            };

        case types.catLoad:
            return {
                ...state,
                categories: [...action.payload]
            };

        case types.catUpdated:
            return {
                ...state,
                categories: state.categories.map(
                    cat => cat.id === action.payload.id
                        ? action.payload.category
                        : cat
                )
            };

        case types.catDelete:
            return {
                ...state,
                active: null,
                categories: state.categories.filter(cat => cat.id !== action.payload)
            };

        case types.catLogoutCleaning:
            return {
                ...state,
                active: null,
                categories: []
            };

        default:
            return state;
    }
};