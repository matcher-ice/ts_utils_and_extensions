type MutilpletRecursive<N, T, TArgs extends T[], TReturn extends T[]> = {
    0: TReturn;
    1: MutilpletRecursive<N, T, [T, ...TArgs], [T, ...TReturn]>;
}[TReturn extends {length: N} ? 0 : 1];

export type Mutilplet<N extends number, T> = MutilpletRecursive<N, T, T[], []>;
