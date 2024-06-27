import { useSelector, useDispatch } from "react-redux";
import { percentageDifference } from "../../utils/percentageDifference";
import { ReactComponent as ChartArrow } from "../../assets/svg/chart-arrow.svg";
import { setEuroCurrency, setUsdCurrency } from "../../redux/features/currencySlice";
import "./styles.scss";
import { ButtonUI } from "../UI";

const ActionsBlock = () => {
  const dispatch = useDispatch()
  const { euroCurrency, usdCurrency } = useSelector((state) => state.currency);

  const currencyInfo = (
    currencySymbol,
    className,
    firstCurrency,
    secondCurrency
  ) => {
    const check = parseInt(usdCurrency) >= 1 || parseInt(euroCurrency) >= 1;

    if (check) {
      console.log( typeof check);
      return (
        <p className={className}>
          {currencySymbol} {percentageDifference(firstCurrency, secondCurrency)}
          %
          <ChartArrow className="chart-arrow" />
        </p>
      );
    } else {
      return <p className="is-null">{currencySymbol} 0%</p>;
    }
  };

  const resetHandle = () => {
    dispatch(setEuroCurrency(""))
    dispatch(setUsdCurrency(""));
  }

  return (
    <div className="actions-block">
      <article>
        {currencyInfo("$", "first-currency", euroCurrency, usdCurrency)}
        {currencyInfo("€", "second-currency", usdCurrency, euroCurrency)}
      </article>
      <ButtonUI onClick={resetHandle}>Reset</ButtonUI>
    </div>
  );
};

export default ActionsBlock;
