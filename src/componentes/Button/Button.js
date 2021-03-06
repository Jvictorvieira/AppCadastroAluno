function Button(props) {
  return (
      <button className={`${props.style}`} onClick={props.onClick} >{props.children}</button>
  );
}
 
export default Button; 
