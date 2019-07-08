export type ObjectKeys<T> = T extends { [k: string]: any } ? keyof T : never;
export type ObjectValues<T> = T extends { [key: string]: infer R } ? R : never;
