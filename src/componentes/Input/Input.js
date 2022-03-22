import "./Input.css";

function FormInput(props) {
  const { labelText, labelClass, onChange, id, ...inputProps } = props;
  return (
    <>
      <label labelClass={labelClass}>{props.labelText}</label>
      <input {...inputProps} onChange={onChange}></input>
    </>
  );
}

export default FormInput;