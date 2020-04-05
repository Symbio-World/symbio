export type JsonValue =
  | null
  | boolean
  | number
  | string
  | JsonValue[]
  | { [prop: string]: JsonValue }

export type Json = { [prop: string]: JsonValue }

export type DirtyJsonValue =
  | JsonValue
  | undefined
  | { [prop: string]: DirtyJsonValue }
export type DirtyJson = { [prop: string]: DirtyJsonValue }
