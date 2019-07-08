import ACTIONS_CONSTANTS, {
	TCurrencyTypes,
	CurrencyTypes,
	TACTIONS_CONSTANTS
} from "reducers/tickets/constants";
import * as ACTIONS from "reducers/tickets/actions";
import { Reducer, combineReducers } from "redux";
import { ISERVER_Tickets, ISERVER_Ticket } from "data/tickets-typing";
import { IExchangeAPI } from "api/types/ExchangeAPI";
import TicketsJSON from "data/tickets.json";

const Tickets: Reducer<ISERVER_Ticket[], ACTIONS.TSetNewTickets> = (
	state = TicketsJSON.tickets,
	action
) => {
	switch (action.type) {
		case ACTIONS_CONSTANTS.SetNewTickets:
			return action.payload;
		default:
			return state;
	}
};

const CurrentCurrency: Reducer<TCurrencyTypes, ACTIONS.TSetNewCurrency> = (
	state = CurrencyTypes.RUB,
	action
) => {
	switch (action.type) {
		case ACTIONS_CONSTANTS.ChangeCurrency:
			return action.payload;
		default:
			return state;
	}
};

const CurrencyRates: Reducer<
	IExchangeAPI["rates"],
	ACTIONS.TGetCurrencyRates
> = (state = { EUR: 70, USD: 60 }, action) => {
	switch (action.type) {
		case ACTIONS_CONSTANTS.GetCurrencyRates:
			return action.payload;
		default:
			return state;
	}
};

export const TicketStops: Reducer<number[], ACTIONS.TTicketStops> = (
	state = [0, 1, 2, 3, 4],
	action
) => {
	switch (action.type) {
		case ACTIONS_CONSTANTS.SetTicketStops:
			if (action.payload.only) {
				return [action.payload.stops];
			}
			if (action.payload.stops === -1) {
				if (action.payload.checked) {
					return [0, 1, 2, 3, 4];
				} else {
					return [];
				}
			}
			const newState = new Set(state);
			if (action.payload.checked) {
				newState.add(action.payload.stops);
			} else {
				newState.delete(action.payload.stops);
			}
			return Array.from(newState);
		default:
			return state;
	}
};
export default combineReducers({
	Tickets,
	CurrentCurrency,
	CurrencyRates,
	TicketStops
});
