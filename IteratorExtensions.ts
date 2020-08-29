function take<T>(iterator: IterableIterator<T>, numElements: number): readonly T[]
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