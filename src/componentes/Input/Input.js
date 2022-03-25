import "./Input.css";

function FormInput(props) {
  const { labelText, labelclass, onChange, ...inputProps } = props;
  return (
    <>
      <label labelclass={labelclass}>{props.labelText}</label>
      <input {...inputProps} onChange={onChange}></input>
    </>
  );
}

export default FormInput;