import angular from 'angular';
import SaveBookmarksModule from './save-bookmark/save-bookmark';
import {BookmarksActions} from './bookmarks.state'

import template from './bookmarks.html';
import './bookmarks.css';

class BookmarksController {
    constructor($ngRedux, BookmarksActions) {
        'ngInject';

        this.store = $ngRedux;
        this.BookmarksActions = BookmarksActions;
        // bind to this
    }

    $onInit() {
        this.store.subscribe(() => {
            this.bookmarks = this.store.getState().bookmarks;
            this.currentBookmark = this.store.getState().bookmark;
            this.currentCategory = this.store.getState().category;
        });

        this.store.dispatch(this.BookmarksActions.getBookmarks());
    }

    saveBookmark(bookmark) {
    }

    deleteBookmark(bookmark) {
    }

    selectBookmark(bookmark) {
        this.store.dispatch(
            this.BookmarksActions.selectBookmark(bookmark)
        );
    }

    resetSelectedBookmark() {
        this.store.dispatch(
            this.BookmarksActions.resetSelectedBookmark()
        );
    }

    onSave(bm) {
        this.saveBookmark(bm);
        this.resetSelectedBookmark();
    }
}

const BookmarksComponent = {
    template,
    controller: BookmarksController,
    controllerAs: 'bookmarksListCtrl'
};

const BookmarksModule = angular.module('bookmarks', [
    SaveBookmarksModule.name
])
    .factory('BookmarksActions', BookmarksActions)
    .component('bookmarks', BookmarksComponent);