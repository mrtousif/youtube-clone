/* eslint-disable @typescript-eslint/prefer-function-type */
export interface Type<T = any> extends Function {
    new (...args: any[]): T;
}
