export type JsonValue =
  | null
  | boolean
  | number
  | string
  | JsonValue[]
  | { [prop: string]: JsonValue }

export type JsonMap = { [prop: string]: JsonValue }

export type DirtyJsonValue =
  | JsonValue
  | undefined
  | { [prop: string]: DirtyJsonValue }
export type DirtyJsonMap = { [prop: string]: DirtyJsonValue }
