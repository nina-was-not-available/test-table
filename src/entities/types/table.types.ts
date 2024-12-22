import {OptionValue} from "./option.types.ts";

// export type TTableType = {
//     [key: string | OptionValue]: string[]
// }
//
// export type TTableStateType = TTableType & {
//     idx: number
// }

export type TTableStateType = {
    [key: string | OptionValue]: string[] | string;
};

export type TTableCol = {
    heading: string | OptionValue
    values: string[]
}

export type TTableType = {
    first: TTableCol
    second: TTableCol
    third: TTableCol
    fourth: TTableCol
    id: string
}