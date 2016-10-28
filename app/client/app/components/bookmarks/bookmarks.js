import angular from 'angular';
import SaveBookmarksModule from './save-bookmark/save-bookmark';

import template from './categories.html';
import './bookmarks.css';

class BookmarksController {
    constructor($ngRedux, BookmarksModel) {
        'ngInject';

        this.store = $ngRedux;
        this.BookmarksModel = BookmarksModel;
        // bind to this
    }

    $onInit() {
        this.BookmarksModel.getBookmarks()
            .then(result => this.bookmarks = result);
        this.deleteBookmark = this.BookmarksModel.deleteBookmark;

        this.store.subscribe(() => {
            this.currentCategory = this.store.getState().category;
        });

        this.reset();
    }

    createBookmark() {
        this.createBookmark = this.initNewBookmark();
    }

    editBookmark(bookmark) {
        this.createBookmark = bookmark;
    }

    initNewBookmark() {

    }
}