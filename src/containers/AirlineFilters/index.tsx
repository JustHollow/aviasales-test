import Card from "components/card";
import React from "react";
import { connect } from "react-redux";
import { RootState } from "reducers";
import * as TicketsActionsRedux from "reducers/tickets/actions";
import { CurrencyTypes, TCurrencyTypes } from "reducers/tickets/constants";
import * as TicketsSelectors from "reducers/tickets/selectors";
import { AnyAction, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Styles from "./airlineFilters.module.scss";
import CurrencyButton from "./components/CurrencyButton/index";
import StyledCheckbox from "./components/StyledCheckbox/StyledCheckbox";

const CurrencyButtonMemo = React.memo(
	CurrencyButton,
	(prevProps, nextProps) => {
		return prevProps.active === nextProps.active;
	}
);
const StyledCheckboxMemo = React.memo(StyledCheckbox);
type TmapStateToProps = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: RootState) => {
	const TransfersCount = TicketsSelectors.TicketsSelector(state).reduce(
		(max, ticket) => (ticket.stops > max ? ticket.stops : max),
		1
	);
	const TransferStops = TicketsSelectors.TicketStopsSelector(state);
	const CurrentCurrency = TicketsSelectors.CurrentCurrencySelector(state);
	return { TransfersCount, CurrentCurrency, TransferStops };
};

type TmapDispatchToProps = ReturnType<typeof mapDispatchToProps>;
const mapDispatchToProps = (
	dispatch: ThunkDispatch<RootState, {}, AnyAction>
) => {
	return { TicketsActions: bindActionCreators(TicketsActionsRedux, dispatch) };
};

type TProps = TmapStateToProps & TmapDispatchToProps & {};
const AirlineFilters: React.FunctionComponent<TProps> = ({
	TransfersCount,
	CurrentCurrency,
	TicketsActions,
	TransferStops
}) => {
	const handleCurrencyChange = (e: React.MouseEvent<HTMLButtonElement>) => {
		TicketsActions.SetNewCurrency(e.currentTarget.value as TCurrencyTypes);
	};
	const handleStopsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const stopValue = Number(event.currentTarget.name);
		TicketsActions.SetTicketStops({
			stops: stopValue,
			checked: event.currentTarget.checked
		});
	};
	const handleStopsOnlyClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const stopValue = Number(event.currentTarget.name);
		TicketsActions.SetTicketStops({
			stops: stopValue,
			checked: true,
			only: true
		});
	};
	const Transfers: JSX.Element[] = [
		<StyledCheckbox
			Checked={TransferStops.length === 5}
			key="all"
			onChange={handleStopsChange}
			onlyButtonClick={handleStopsOnlyClick}
			name="-1"
		>
			Все
		</StyledCheckbox>,
		<StyledCheckbox
			Checked={TransferStops.includes(0)}
			key="0"
			onChange={handleStopsChange}
			onlyButtonClick={handleStopsOnlyClick}
			name="0"
		>
			Без пересадок
		</StyledCheckbox>
	];
	for (let i = 1; i <= TransfersCount; i++) {
		Transfers.push(
			<StyledCheckbox
				Checked={TransferStops.includes(i)}
				onChange={handleStopsChange}
				onlyButtonClick={handleStopsOnlyClick}
				key={`TicketStops ${i}`}
				name={String(i)}
			>{`${i} пересадк${i === 1 ? "а" : "и"}`}</StyledCheckbox>
		);
	}

	return (
		<Card>
			<div className={Styles["filter-module"]}>
				<div className={Styles["Upper-header"]}>Валюта</div>
				<div>
					<CurrencyButtonMemo
						onClick={handleCurrencyChange}
						active={CurrentCurrency === CurrencyTypes.RUB}
						value={CurrencyTypes.RUB}
					>
						RUB
					</CurrencyButtonMemo>
					<CurrencyButtonMemo
						onClick={handleCurrencyChange}
						active={CurrentCurrency === CurrencyTypes.USD}
						value={CurrencyTypes.USD}
					>
						USD
					</CurrencyButtonMemo>
					<CurrencyButtonMemo
						onClick={handleCurrencyChange}
						active={CurrentCurrency === CurrencyTypes.EUR}
						value={CurrencyTypes.EUR}
					>
						EUR
					</CurrencyButtonMemo>
				</div>
			</div>
			<div className={Styles["filter-module"]}>
				<div className={Styles["Upper-header"]}>Количество пересадок</div>
				<div>{Transfers}</div>
			</div>
		</Card>
	);
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AirlineFilters);
