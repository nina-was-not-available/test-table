export enum OptionValue {
    Country = 'country',
    City = 'city',
    Street = 'street',
    Home = 'home'
}

export type TOptionType = {
    value: OptionValue
    label: string
}
