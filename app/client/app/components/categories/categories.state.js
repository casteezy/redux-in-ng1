// Constants

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CURRENT_CATEGORY = 'GET_CURRENT_CATEGORY';

export
const initialCategories = [
    {id: 0, name: 'Hello Reducer'},
    {id: 1, name: 'Hello Reducer'},
    {id: 2, name: 'Hello Reducer'},
    {id: 3, name: 'Hello Reducer'},
];


// Reducers
// ALWAYS stateless, testable.

/**
 * @param state:
 * @param action: next action to take based on type
 */
export const categories = (state = initialCategories, {type, payload}) => {
    switch (type) {
        case GET_CATEGORIES:
            return payload || state;
        default:
            return state;
    }
};

export const category = (state = {}, {type, payload}) => {
    switch (type) {
        case GET_CURRENT_CATEGORY:
            return payload || state;
        default:
            return state;
    }
};