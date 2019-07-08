import React from "react";
import classnames from "classnames";
import Styles from "./CurrencyButton.module.scss";
import { TCurrencyTypes } from "reducers/tickets/constants";

type TProps = Partial<{
	value: TCurrencyTypes;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	active: boolean;
	children: React.ReactChild
}>;
const CurrencyButton: React.FunctionComponent<TProps> = ({
	children,
	value,
	active,
	onClick
}) => (
	<button
		onClick={onClick}
		className={classnames(Styles["currency-buttons"], {
			[Styles["currency-buttons-active"]]: active
		})}
		value={value}
	>
		{children}
	</button>
);

export default CurrencyButton