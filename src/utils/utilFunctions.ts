import { ObjectKeys } from "./utilTypes";

type TFindMaxInArrayOfObjects<T, K extends keyof T> = { arr: T; key: ObjectKeys<T[K]>; minValue?: number };
export const FindMaxInArrayOfObjects = <T extends any[], K extends keyof T>({
	arr,
	key,
	minValue = 0
}: TFindMaxInArrayOfObjects<T, K>): number =>
	arr.reduce((acc, val) => (val[key] > acc ? val[key] : acc), minValue);
