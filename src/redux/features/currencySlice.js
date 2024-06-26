import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	euroExchangeRate: 1.07,
	euroCurrency: 0,
	usdCurrency: 0,
};

export const currencySlice = createSlice({
	name: "currency",
	initialState,

	reducers: {
		setEuroCurrency: (state, action) => {
			state.euroCurrency = action.payload;
			state.usdCurrency = (action.payload * state.euroExchangeRate).toFixed(2);
		},
		setUsdCurrency: (state, action) => {
			state.usdCurrency = action.payload;
			state.euroCurrency = (action.payload / state.euroExchangeRate).toFixed(2);
		},
	},
});

export const { setEuroCurrency, setUsdCurrency } = currencySlice.actions;

export default currencySlice.reducer;
