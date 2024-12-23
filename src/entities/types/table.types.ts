import {OptionValue} from "./option.types.ts";

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
