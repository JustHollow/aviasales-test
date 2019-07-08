import React from "react";
import Styles from "containers/AirlineCards/card.module.scss";

type TTicketInfoComponent = Record<"time" | "name" | "code" | "date", string>;

const TicketInfoComponent: React.FunctionComponent<
	TTicketInfoComponent
> = Ticket => (
		<div className={Styles["text-group"]}>
			<div className={Styles["text-group-time"]}>{Ticket.time}</div>
			<div className={Styles["text-group-airport"]}>
			{Ticket.code}, {Ticket.name}
			</div>
			<div className={Styles["text-group-date"]}>{Ticket.date} </div>
		</div>
);

export default TicketInfoComponent;
