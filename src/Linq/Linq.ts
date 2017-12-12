export class List<T> {
    private _elements: T[]

    /**
     * Defaults the elements of the list
     */
    constructor(elements: T[] = []) {
        this._elements = elements
    }
    public Add(value: T): void {
        this._elements.push(value);
    }


    public Where(
        predicate: (value?: T, index?: number, list?: T[]) => boolean
    ): List<T> {

        return new List<T>(this._elements.filter(predicate))
    }
}