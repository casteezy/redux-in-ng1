class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer;
        this.initialState = initialState;
        this.listeners = [];
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => listener());
    }

    /**
     * Automatically propagate state change notification to listeners.
     * @return an unsubscribe function for the listener
     */
    subscribe(listener) {
        // Favor immutable operators
        this.listeners = [...this.listeners, listener];

        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
}

export default Store;