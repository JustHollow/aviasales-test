import React from "react";
import Card from "components/card";
import Styles from "containers/AirlineCards/card.module.scss";
import PlaneImage from "containers/AirlineCards/images/plane.svg";
import { ISERVER_Ticket } from "data/tickets-typing";
import TicketTextInformation from "containers/AirlineCards/components/TicketTextInformation";
import BuyTicketButton from "../BuyTicketButton/index";

const TicketTextInformationMemo = React.memo(TicketTextInformation);
type TAirlineCard = { ticket_data: ISERVER_Ticket };
const AirlineCard: React.FunctionComponent<TAirlineCard> = ({
	ticket_data
}) => {
	return (
		<Card>
			<div className={Styles.card}>
				<BuyTicketButton Price={ticket_data.price} />
				<div className={Styles["vertical-line"]} />
				<div className={Styles["ticket--information"]}>
					<TicketTextInformationMemo
						code={ticket_data.origin}
						name={ticket_data.origin_name}
						date={ticket_data.departure_date}
						time={ticket_data.departure_time}
					/>
					<div className={Styles["ticket-stops"]}>
						<div className={Styles["ticket-stops-text"]}>
							{ticket_data.stops > 0 &&
								`${ticket_data.stops} пересадк${
									ticket_data.stops === 1 ? "а" : "и"
								}`}
						</div>
						<img src={PlaneImage} alt="its a plane" />
					</div>
					<TicketTextInformationMemo
						code={ticket_data.destination}
						name={ticket_data.destination_name}
						date={ticket_data.arrival_date}
						time={ticket_data.arrival_time}
					/>
				</div>
			</div>
		</Card>
	);
};
export default AirlineCard;
