import { configureStore } from "@reduxjs/toolkit";
import currencyReduser from "../features/currencySlice";

export const store = configureStore({
	reducer: {
		currency: currencyReduser,
	},
});
