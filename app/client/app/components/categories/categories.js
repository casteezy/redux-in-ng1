import { categories, category, GET_CATEGORIES, GET_CURRENT_CATEGORY } from './categories.state';

class CategoriesController {

    constructor($timeout, store) {
        this.categories = []; // ? not in original code
        this.$timeout = $timeout;
        this.store = store;
    }

    $onInit() {
        // Separate set from get state
        this.unsubscribe = this.store.subscribe(() => {
           this.categories = this.store.getState();
        });
        this.store.dispatch({type: GET_CATEGORIES});

        this.$timeout(() => {
            const payload = [
                { id: 0, name: 'Redux' }
            ];

            this.store.dispatch({type: GET_CATEGORIES, payload});
        }, 3000);

        // Will fail
        this.$timeout(() => {
            const payload = [
                { id: 0, name: 'Uh Oh!' }
            ];

            this.store.dispatch({type: GET_CATEGORIES, payload});
        }, 6000);
    }

    onCategorySelected(currentCat) {
        this.currentCategory = category(this.currentCategory, { type: GET_CURRENT_CATEGORY });
    }

    isCurrentCategory(cat) {
        return this.currentCategory &&
                this.currentCategory.id === cat.id;
    }
}