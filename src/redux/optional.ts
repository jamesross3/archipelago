export interface IOptional<T> {
    data: T | undefined;
}

export function newAbsentOptional<T>(): IOptional<T> {
    return { data: undefined };
}

export function newOptional<T>(data: T): IOptional<T> {
    return { data };
}
