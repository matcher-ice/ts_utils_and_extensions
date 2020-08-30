type MutilpletRecursive<T, N, TArgs extends T[], TReturn extends T[]> = {
    "t": TReturn;
    "f": MutilpletRecursive<T, N, [T, ...TArgs], [T, ...TReturn]>;
}[TReturn extends { length: N } ? "t" : "f"];

export type Mutilplet<T, N extends number> = MutilpletRecursive<T, N, T[], []>;
