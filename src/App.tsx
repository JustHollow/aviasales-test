import React from "react";
import Logo from "images/logo.svg";
import CreateStore from "store";
import { Provider } from "react-redux";

import AirlineCards from "containers/AirlineCards";
import AirlineFilters from "containers/AirlineFilters";
import Styles from "App.module.scss";
const ReduxStore = CreateStore({});

function App() {
	return (
		<Provider store={ReduxStore}>
			<div className={Styles.App}>
				<img src={Logo} className={Styles.logo} alt="logo" />
				<div className={Styles.filters}>
					<AirlineFilters />
				</div>
				<div className={Styles.tickets}>
					<AirlineCards />
				</div>
			</div>
		</Provider>
	);
}

export default App;
