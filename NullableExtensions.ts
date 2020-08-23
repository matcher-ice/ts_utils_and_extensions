export function isNotNull<T>(item: T): item is NonNullable<T>
{
    return item != null;
}