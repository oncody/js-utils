export default class TypeChecker {
    constructor() {
    }

    isNonNullObject(variable) {
        return variable && (typeof variable === 'object');
    }
}