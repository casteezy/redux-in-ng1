import angular from 'angular';
import CategoryItemModule from './category-item/category-item'
import {category, CategoriesActions} from './categories.state';

import template from './categories.html';
import './categories.css';

class CategoriesController {

    constructor($timeout, $ngRedux, CategoriesActions) {
        'ngInject';
        this.$timeout = $timeout;
        this.store = $ngRedux;
        this.CategoriesActions = CategoriesActions;
    }

    $onInit() {
        // Separate set from get state
        this.unsubscribe = this.store.subscribe(() => {
            this.categories = this.store.getState();
        });
        this.store.dispatch(
            this.CategoriesActions.getCategories());

        this.$timeout(() => {
            const categories = [
                {id: 0, name: 'Redux'},
                {id: 1, name: 'Angular'},
            ];

            this.store.dispatch(
                this.CategoriesActions.getCategories(categories)
            );
        }, 3000);

        // Will fail
        this.$timeout(() => {
            const categories = [
                {id: 0, name: 'Uh Oh!'}
            ];

            this.store.dispatch(
                this.CategoriesActions.getCategories(categories)
            );
        }, 6000);
    }

    onCategorySelected(currentCat) {
        this.currentCategory = category(this.currentCategory,
            this.CategoriesActions.selectCategory(currentCat));
    }

    isCurrentCategory(cat) {
        return this.currentCategory &&
            this.currentCategory.id === cat.id;
    }
}

const CategoriesComponent = {
    template,
    controller: CategoriesController,
    controllerAs: 'categoriesListCtrl'
};

const CategoriesModule = angular.module('categories', [
        CategoryItemModule.name
    ])
        .factory('CategoriesActions', CategoriesActions)
        .component('categories', CategoriesComponent)
    ;