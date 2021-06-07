export default class BrowserCache {
    constructor() {
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        let value = localStorage.getItem(key);
        if(!value) {
            return null;
        }

        return JSON.parse(value);
    }
}
