import React, { useState } from "react";
import Styles from "./checkbox.module.scss";
import CheckboxArrow from "./checkboxArrow.svg";

export type TProps = Partial<{
	name: string;
	id: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	Checked: boolean;
}>;
export const Checkbox: React.FunctionComponent<TProps> = ({
	children,
	name = "",
	onChange,
	Checked
}) => {
	const [checked, setChecked] = useState<boolean>(() => {
		if (typeof Checked === "boolean") return Checked;
		return false;
	});
	const checkboxCheck = typeof Checked === "boolean" ? Checked : checked
	const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event);
		}
			setChecked(event.target.checked);
	};

	const isCheckboxArrowVisible: React.CSSProperties = {
		visibility: checkboxCheck ? "visible" : "hidden"
	};

	return (
		<div className={Styles.component}>
			<label>
				<input
					type="checkbox"
					name={name}
					checked={checkboxCheck}
					onChange={handleCheck}
				/>
				<div className={Styles["pseudo-checkbox"]}>
					<img
						src={CheckboxArrow}
						alt="Checkbox"
						style={isCheckboxArrowVisible}
					/>
				</div>
				<div className={Styles.child}>{children}</div>
			</label>
		</div>
	);
};
export default Checkbox;
