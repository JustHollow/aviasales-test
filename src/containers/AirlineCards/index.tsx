import React from "react";
import { connect } from "react-redux";
import { RootState } from "reducers";
import * as TicketsActions from "reducers/tickets/actions";
import * as TicketsSelectors from "reducers/tickets/selectors";
import AirlineCard from "containers/AirlineCards/components/AirlineCard";

type TmapStateToProps = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: RootState) => {
	const Tickets = TicketsSelectors.TicketWithCurrencySelector(state);
	return { Tickets };
};

type TProps = TmapStateToProps & {};
const AirLineCards: React.FunctionComponent<TProps> = ({ Tickets }) => {
	// console.log(CurrencySelector);
	return (
		<div>
			{Tickets.map(ticket => (
				<AirlineCard
					key={
						ticket.arrival_date +
						ticket.arrival_time +
						ticket.departure_date +
						ticket.departure_time
					}
					ticket_data={ticket}
				/>
			))}
		</div>
	);
};

export default connect(
	mapStateToProps,
	TicketsActions
)(AirLineCards);
