//////////////////////////////// Constants ////////////////////////////////

export const GET_BOOKMARKS = 'GET_SELECTED_BOOKMARK';
export const GET_SELECTED_BOOKMARK = 'GET_SELECTED_BOOKMARK';
export const RESET_SELECTED_BOOKMARK = 'RESET_SELECTED_BOOKMARK';




//////////////////////////////// Actions ////////////////////////////////
export const BookmarksActions = ($ngRedux) => {
    "use strict";
    "ngInject";
    const getBookmarks = (bookmarks) => {
        return { type: GET_BOOKMARKS, payload: bookmarks }
    };

    const resetSelectedBookmark = () => {
        return {type: RESET_SELECTED_BOOKMARK }
    };

    const selectBookmark = (bookmark = initialBookmark) => {
        const { category } = $ngRedux.getState(),
            payload = bookmark.id ? bookmark : Object.assign({}, bookmark, {category: category.name});
        return {type: GET_SELECTED_BOOKMARK, payload }
    };

    return {
        getBookmarks,
        resetSelectedBookmark,
        selectBookmark
    }
};


//////////////////////////////// Reducers ////////////////////////////////

const initialBookmarks = [
    {'id': 1, 'title': 'AngularJS', 'url': '#', 'category': 'Development' },
    {'id': 2, 'title': 'AngularJS', 'url': '#', 'category': 'Development' },
    {'id': 3, 'title': 'AngularJS', 'url': '#', 'category': 'Development' },
    {'id': 4, 'title': 'AngularJS', 'url': '#', 'category': 'Development' },
    {'id': 5, 'title': 'AngularJS', 'url': '#', 'category': 'Development' },
    {'id': 6, 'title': 'AngularJS', 'url': '#', 'category': 'Development' },
    {'id': 7, 'title': 'AngularJS', 'url': '#', 'category': 'Development' },
];

export const bookmarks = (state = initialBookmarks, {type, payload}) => {
    "use strict";
    switch (type) {
        case GET_BOOKMARKS:
            return payload || state;
        default:
            return state;
    }
};

const initialBookmark = { id: null, name: '', url: '', category: null }

export const bookmark = (state = initialBookmark, {type, payload}) => {
    "use strict";
    switch (type) {
        case GET_SELECTED_BOOKMARK:
            return payload || state;
        case RESET_SELECTED_BOOKMARK:
            return initialBookmark;
        default:
            return state;
    }
};