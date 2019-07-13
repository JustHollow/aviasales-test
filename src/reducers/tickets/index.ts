import ACTIONS_CONSTANTS, {
	TCurrencyTypes,
	CurrencyTypes,
	TACTIONS_CONSTANTS
} from "reducers/tickets/constants";
import * as ACTIONS from "reducers/tickets/actions";
import { Reducer, combineReducers } from "redux";
import { ISERVER_Tickets, ISERVER_Ticket } from "data/tickets-typing";
import { IExchangeAPI } from "api/types/ExchangeAPI";
import { FindMaxInArrayOfObjects } from "utils/utilFunctions";

const Tickets: Reducer<ISERVER_Ticket[], ACTIONS.TSetNewTickets> = (
	state = [],
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

export const TicketStops: Reducer<
	number[],
	ACTIONS.TTicketStops | ACTIONS.TSetNewTickets
> = (state = [], action) => {
	switch (action.type) {
		case ACTIONS_CONSTANTS.SetNewTickets: {
			const maxStops = FindMaxInArrayOfObjects({
				arr: action.payload,
				key: "stops"
			});
			const newState = Array.from(Array(maxStops + 1), (v, i) => i);
			return newState;
		}

		case ACTIONS_CONSTANTS.SetTicketStops: {
			if (action.payload.stops === -1) {
				if (
					(action.payload.checked || action.payload.only) &&
					action.payload.maxStops
				) {
					const newState = Array.from(Array(action.payload.maxStops), (v, i) => i);
					return newState;
				} else {
					return [];
				}
			}

			if (action.payload.only) {
				return [action.payload.stops];
			}

			const newState = new Set(state);
			if (action.payload.checked) {
				newState.add(action.payload.stops);
			} else {
				newState.delete(action.payload.stops);
			}
			return Array.from(newState);
		}
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
