// Generated by https://quicktype.io

export interface IExchangeAPI {
    rates: Rates;
    base:  string;
    date:  string;
}

interface Rates {
    EUR: number;
    USD: number;
}
