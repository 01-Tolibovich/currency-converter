import "./styles.scss";

const InputUI = ({ type, label, value, onChange}) => {
	return (
		<>
			<label>{label}</label>
			<input type={type || "text"} value={value} onChange={onChange} />
		</>
	);
};

export default InputUI;
