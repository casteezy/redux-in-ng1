import { categories, category, GET_CATEGORIES, GET_CURRENT_CATEGORY } from './categories.state';

class CategoriesController {

    constructor($timeout, store) {

        this.$timeout = $timeout;
        this.store = store;
    }

    $onInit() {
        // Separate set from get state
        this.store.dispatch({type: GET_CATEGORIES})
        this.categories = this.store.getState();

        this.$timeout(() => {
            const payload = [
                { id: 0, name: 'Redux' }
            ];

            this.store.dispatch({type: GET_CATEGORIES, payload});
            this.categories = this.store.getState();
        }, 3000);

        // Will fail
        this.$timeout(() => {
            const payload = [
                { id: 0, name: 'Uh Oh!' }
            ];

            this.store.dispatch({type: GET_CATEGORIES, payload});
            this.categories = this.store.getState();
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