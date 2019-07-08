import React from "react";
import Styles from "./BuyTicketButton.module.scss";
import AirlinesLogo from "containers/AirlineCards/images/turkish-airlines.png";
import { TCurrencyTypes, CurrencyTypes } from "reducers/tickets/constants";
import { connect } from "react-redux";
import { RootState } from "reducers";
import { CurrentCurrencySelector } from "reducers/tickets/selectors";

type TmapStateToProps = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: RootState) => ({
	CurrentCurrency:CurrentCurrencySelector(state)
});

type TProps = TmapStateToProps & { Price: number};
const BuyTicketButton: React.FunctionComponent<TProps> = ({
	Price,
	CurrentCurrency	
}) => {
	const CurrencySymbol = (() => {
		switch (CurrentCurrency) {
			case CurrencyTypes.RUB:
				return "₽";
			case CurrencyTypes.USD:
				return "$";
			case CurrencyTypes.EUR:
				return "€";
			default:
				return "₽";
		}
	})();
	return (
		<div className={Styles["buy--ticket"]}>
			<div className={Styles["buy--ticket-logo"]}>
				<img src={AirlinesLogo} alt="Turkish Airlines logo" />
			</div>
			<div>
				<button className={Styles["buy--button"]}>
					Купить
					<br />
					за {Price}
					{CurrencySymbol}
				</button>
			</div>
		</div>
	);
};

export default connect(mapStateToProps)(BuyTicketButton);
