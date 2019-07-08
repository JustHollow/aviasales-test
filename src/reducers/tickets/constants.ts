import { ObjectValues } from "utils/utilTypes";

export type TACTIONS_CONSTANTS = typeof ACTIONS_CONSTANTS;
const ACTIONS_CONSTANTS = {
	ChangeCurrency: "@tickets/ChangeCurrency",
	GetCurrencyRates: "@tickets/GetCurrencyRates",
	SetNewTickets: "@tickets/SetNewTickets",
	SetTicketStops: "@tickets/SetTicketStops"
} as const;

export type TCurrencyTypes = ObjectValues<typeof CurrencyTypes>;
export const CurrencyTypes = { RUB: "RUB", EUR: "EUR", USD: "USD" } as const;

export default ACTIONS_CONSTANTS;
