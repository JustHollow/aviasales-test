import axios, { AxiosResponse } from "axios";
import { IExchangeAPI } from "api/types/ExchangeAPI";

const CurrencyRateUrl =
	"https://api.exchangeratesapi.io/latest?base=RUB&symbols=USD,EUR";

const API = {
	async getCurrencyRates() {
		try {
			const Response: AxiosResponse<IExchangeAPI> = await axios(
				CurrencyRateUrl
			);
			return Response.data;
		} catch (err) {
            console.log('Cant get Current Currency');
            return null
		}
	}
};

export default API;
