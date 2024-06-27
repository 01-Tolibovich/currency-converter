import "./styles.scss";

const ButtonUI = ({type, children, ...rest}) => {

  return (
    <button className="button-ui" {...rest}>{children}</button>
  )
}

export default ButtonUI;
