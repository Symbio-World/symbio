// TODO move to ts-lib and use Json and DirtyJson types
export type Leaf = boolean | number | string | null | undefined
export type Value = Leaf | Value[] | Tree
export type Tree = { [key: string]: Value }

export type PathItem = string | number
export type Path = PathItem[]
export type PathValuePair = { path: Path; value: Leaf | [] | {} }
