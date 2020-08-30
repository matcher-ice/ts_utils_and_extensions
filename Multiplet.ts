type MutilpletRecursive<N, T, TArgs extends T[], TReturn extends T[]> = {
    "t": TReturn;
    "f": MutilpletRecursive<N, T, [T, ...TArgs], [T, ...TReturn]>;
}[TReturn extends { length: N } ? "t" : "f"];

export type Mutilplet<N extends number, T> = MutilpletRecursive<N, T, T[], []>;
