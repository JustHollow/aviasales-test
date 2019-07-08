import { RootState } from "reducers";
import { createSelector } from "reselect";
import { CurrencyTypes } from "./constants";
import { ISERVER_Tickets, ISERVER_Ticket } from "data/tickets-typing";

type TTicketStore = ReturnType<typeof TicketsStoreSelector>;
export const TicketsStoreSelector = (state: RootState) => state.tickets;

export const TicketsSelector = (state: RootState) =>
	TicketsStoreSelector(state).Tickets;
export const CurrentCurrencySelector = (state: RootState) =>
	TicketsStoreSelector(state).CurrentCurrency;
export const CurrencyRatesSelector = (state: RootState) =>
	TicketsStoreSelector(state).CurrencyRates;
export const TicketStopsSelector = (state: RootState) =>
	TicketsStoreSelector(state).TicketStops;

export const TicketWithCurrencySelector = createSelector(
	[TicketsSelector, CurrentCurrencySelector, CurrencyRatesSelector,TicketStopsSelector],
	(Tickets, CurrentCurrency, CurrencyRates,TicketStops) => {
		const filteredTickets = Tickets.filter(ticket=>TicketStops.includes(ticket.stops))
		return filteredTickets.map((ticket) => {
			const newTicket = { ...ticket };
			switch (CurrentCurrency) {
				case CurrencyTypes.EUR:
					newTicket.price =
						Math.round((newTicket.price / CurrencyRates.EUR) * 100) / 100;
					break;
				case CurrencyTypes.USD:
					newTicket.price =
						Math.round((newTicket.price / CurrencyRates.USD) * 100) / 100;
					break;
				default:
					return ticket;
			}
			return newTicket;
		});
	}
);
