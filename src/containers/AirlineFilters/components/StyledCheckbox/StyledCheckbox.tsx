import React from "react";
import Styles from "./StyledCheckbox.module.scss";
import Checkbox, { TProps as CheckboxProps } from "components/checkbox";

type TProps = CheckboxProps & Partial<{
	onlyButtonClick: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
	children: React.ReactChild;
	Checked: boolean
}>;
const StyledCheckbox: React.FunctionComponent<TProps> = ({
	children,
	value,
	onChange,
	id,
	name,
	onlyButtonClick,Checked
}) => (
	<div className={Styles["checkbox-item"]}>
		<Checkbox id={id} onChange={onChange} value={value} name={name} Checked={Checked}> 
			{children}
		</Checkbox>
		<button name={name} onClick={onlyButtonClick} className={Styles["only-button"]}>
			ТОЛЬКО
		</button>
	</div>
);
export default StyledCheckbox;
