import { useSelector, useDispatch } from "react-redux";
import { setEuroCurrency, setUsdCurrency } from "../../redux/features/currencySlice";

import "./styles.scss";
import InputUI from "../UI/inputUI/InputUI";
import { useState } from "react";

const InputSection = () => {
	const dispatch = useDispatch();
	const { euroCurrency, usdCurrency } = useSelector(state => state.currency);
	const [validationText, setValidationText] = useState({
		usd: false,
		euro: false,
	});

	const inputFieldProcessing = (e, firstCurrency, secondCurrency, setCurrency ) => {
		const validation = e.target.value;

		if (validation === "" || /^-?\d*[.,]?\d*$/.test(validation)) {
			setValidationText(prevState => ({ ...prevState, [firstCurrency]: false }));
			setValidationText(prevState => ({ ...prevState, [secondCurrency]: false }));

			dispatch(setCurrency(validation));
		} else {
			setValidationText(prevState => ({ ...prevState, [firstCurrency]: true }));
		}
	}

	const euroChangeHandle = e => {
		inputFieldProcessing(e, "euro", "usd", setEuroCurrency)
	};

	const usdChangeHandle = e => {
		inputFieldProcessing(e, "usd", "euro", setUsdCurrency)
	};

	const inputField = (currency, currencyValue, setCureencyValue, validationText) => {
		return (
			<div className="input-item">
				<InputUI label={`${currency} :`} type="text" value={currencyValue} onChange={setCureencyValue} />
				{validationText &&  <small className={`validation-text ${validationText ? "show" : ""}`}>Enter a number</small>}
			</div>
		);
	};

	return (
		<section className="input-section">
			{inputField("$ USD", usdCurrency, usdChangeHandle, validationText.usd)}
			{inputField("€ EURO", euroCurrency, euroChangeHandle, validationText.euro)}
		</section>
	);
};

export default InputSection;
