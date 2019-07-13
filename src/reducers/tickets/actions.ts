import { ISERVER_Ticket } from "data/tickets-typing";
import { ActionCreator } from "redux";
import ACTIONS_CONSTANTS, {
	TCurrencyTypes,
	TACTIONS_CONSTANTS
} from "reducers/tickets/constants";
import { ThunkAction } from "redux-thunk";
import { RootState } from "reducers";
import API from "api";
import { IExchangeAPI } from "api/types/ExchangeAPI";

export type TSetNewTickets = {
	type: TACTIONS_CONSTANTS["SetNewTickets"];
	payload: ISERVER_Ticket[];
};
export const SetNewTickets: ActionCreator<TSetNewTickets> = (
	newTickets: ISERVER_Ticket[]
) => ({ type: ACTIONS_CONSTANTS.SetNewTickets, payload: newTickets });

// Get new tickets data from server
export type TGetCurrencyRates = {
	type: TACTIONS_CONSTANTS["GetCurrencyRates"];
	payload: IExchangeAPI["rates"];
};
export const GetCurrencyRates = (): ThunkAction<
	void,
	RootState,
	null,
	TGetCurrencyRates
> => async dispatch => {
	const Rates = await API.getCurrencyRates();
	if (!Rates) {
		return console.error("Cant get currency");
	}
	dispatch({ type: ACTIONS_CONSTANTS.GetCurrencyRates, payload: Rates.rates });
};

export type TSetNewCurrency = {
	type: typeof ACTIONS_CONSTANTS.ChangeCurrency;
	payload: TCurrencyTypes;
};
export const SetNewCurrency = (
	newCurrency: TCurrencyTypes
): TSetNewCurrency => ({
	type: ACTIONS_CONSTANTS.ChangeCurrency,
	payload: newCurrency
});

export type TTicketStops = {
	type: TACTIONS_CONSTANTS["SetTicketStops"];
	payload: {stops:number, checked: boolean,only?:boolean,maxStops?:number};
};
export const SetTicketStops = ({stops, checked,only=false,maxStops}:TTicketStops['payload']): TTicketStops => ({
	type: ACTIONS_CONSTANTS.SetTicketStops,
	payload: {stops,checked,only,maxStops}
});
