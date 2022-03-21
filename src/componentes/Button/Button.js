import './Button.css';

function Button(props) {
  return (
      <button className={`btn ${props.color}`} onClick={props.onClick} >{props.children}</button>
  );
}
 
export default Button; 
