export {};

declare global
{
    interface Array<T>
    {
        /**
         * Returns the number of elements which satisfy the condition.
         * @param predicate A function to test each element for a condition.
         */
        count(predicate: (item: T) => boolean): number;

        /**
         * Returns a new array from which duplicated elements of the original array are removed.
         * The elements of new array are sorted in ascending order.
         */
        distinct(): T[];

        /**
         * Returns a new array from which the elements equal to an element of `itemToExclude` are removed.
         * @param itemsToExclude An array whose elements are removed from new array.
         */
        except(itemsToExclude: readonly T[]): T[];

        /**
         * Returns the first element of this array, or an `undefined` if this array is empty.
         */
        first(): T | undefined;

        /**
         * Returns the last element of this array, or an `undefined` if this array is empty.
         */
        last(): T | undefined;

        /**
         * Applies a function to each element of this array and returns the maximum resulting value.
         * Throws an error if this array is empty.
         * @param selector A transform function to apply to each element.
         */
        max(selector: (item: T) => number): number;
        
        /**
         * Applies a function to each element of this array and returns the minimum resulting value.
         * Throws an error if this array is empty.
         * @param selector A transform function to apply to each element.
         */
        min(selector: (item: T) => number): number;

        //split(itemsPerArray: number): IterableIterator<T[]>;

        /**
         * Applies a function to each element of this array and returns the sum of resulting values.
         * @param selector A transform function to apply to each element.
         */
        sum(selector: (item: T) => number): number;
    }

    interface ReadonlyArray<T>
    {
        count(predicate: (item: T) => boolean): number;
        distinct(): T[];
        except(itemsToExclude: readonly T[]): T[];
        first(): T | undefined;
        last(): T | undefined;
        max(selector: (item: T) => number): number;
        min(selector: (item: T) => number): number;
        //split(itemsPerArray: number): IterableIterator<T[]>;
        sum(selector: (item: T) => number): number;
    }
}

if (Array.prototype.count == null)
{
    Array.prototype.count = function<T> (predicate: (item: T) => boolean): number
    {
        return this.reduce((count, item) => predicate(item) ? count + 1 : count, 0);
    }
}

if (Array.prototype.distinct == null)
{
    Array.prototype.distinct = function<T> (): T[]
    {
        const set = new Set<T>(this);
        return [...set.values()];
    };
}

if (Array.prototype.except == null)
{
    Array.prototype.except = function<T> (itemsToExclude: readonly T[]): T[]
    {
        return this.filter(item => !itemsToExclude.includes(item));
    }
}

if (Array.prototype.first == null)
{
    Array.prototype.first = function<T> (): T | undefined
    {
        return this.length !== 0 ? this[0] : undefined;
    }
}

if (Array.prototype.last == null)
{
    Array.prototype.last = function<T> (): T | undefined
    {
        return this.length !== 0 ? this[this.length - 1] : undefined;
    }
}

if (Array.prototype.max == null)
{
    Array.prototype.max = function<T> (selector: (item: T) => number): number
    {
        if (this.length === 0) throw Error("Array should not be empty.");
        return this.reduce((max, item) =>
            {
                const newValue = selector(item);
                return newValue > max ? newValue : max;
            },
            Number.NEGATIVE_INFINITY
        );
    }
}

if (Array.prototype.min == null)
{
    Array.prototype.min = function<T> (selector: (item: T) => number): number
    {
        if (this.length === 0) throw Error("Array should not be empty.");
        return this.reduce((min, item) =>
            {
                const newValue = selector(item);
                return newValue < min ? newValue : min;
            },
            Number.POSITIVE_INFINITY
        );
    }
}

if (Array.prototype.sum == null)
{
    Array.prototype.sum = function<T> (selector: (item: T) => number): number
    {
        return this.reduce((sum, item) => sum + selector(item), 0);
    }
}

