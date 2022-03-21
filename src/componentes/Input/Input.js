import './Input.css';

function FormInput(props) {
    const {label, onChange, id, ...inputProps} = props
  return (
    <>
        <label>{label}</label>
        <input {...inputProps} className='form-control' onChange={onChange}></input>
    </>  
  );
}
 
export default FormInput; 