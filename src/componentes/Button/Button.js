import './Button.css';

function Button(props) {
  return (
      <button className={`btn ${props.style}`} onClick={props.onClick} >{props.children}</button>
  );
}
 
export default Button; 
