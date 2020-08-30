export function take<T>(iterator: IterableIterator<T>, numElements: number): readonly T[]
{
    const ret: T[] = [];
    for (let i = 0; i < numElements; ++i)
    {
        const result = iterator.next();
        if (result.done) break;
        ret.push(result.value);
    }
    return ret;
}

export function firstOrDefault<T>(iterator: IterableIterator<T>, predicate: (item: T) => boolean): T | undefined
{
    for (const item of iterator)
    {
        if (predicate(item))
        {
            return item;
        }
    }
    return undefined;
}