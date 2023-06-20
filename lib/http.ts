/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// CREATING A " FETCH " WRAPPER

import * as Effect from "@effect/io/Effect"

export class FetchError {
    readonly _tag = "FetchError";
    constructor(readonly error: unknown) { }
}

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
    Effect.tryCatchPromise(
        () => fetch(input, init),
        //------- If the fetch fails, we return a FetchError
        (error: unknown) => new FetchError(error)
    );

export class JsonBodyError {
    readonly _tag = "JsonBodyError";
    constructor(readonly error: unknown) { }
}

export const jsonBody = (input: Response) =>
    Effect.tryCatchPromise(
        (): Promise<unknown> => input.json(),
        //------- If the json parsing fails, we return a JsonBodyError
        (error: unknown) => new JsonBodyError(error)
    );