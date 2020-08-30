type MultipletRecursive<T, N, TArgs extends T[], TReturn extends T[]> = {
    "t": TReturn;
    "f": MultipletRecursive<T, N, [T, ...TArgs], [T, ...TReturn]>;
}[TReturn extends { length: N } ? "t" : "f"];

export type Multiplet<T, N extends number> = MultipletRecursive<T, N, T[], []>;
