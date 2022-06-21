import { ErrorMessage, useField } from "formik";

export const Input = ({isbutton, title, inputWrapStyle, inputStyle, buttonStyle, buttonWrapperStyle, spanWrapperStyle, errorMessageStyles, ...props }) => {
	const [field] = useField(props);
	return (
    <>
		<div style={inputWrapStyle}>
			<input
				{...field}
				{...props}
				style={inputStyle}
			/>
		</div>
		<div style={errorContainer}>
			<ErrorMessage component="div" name={field.name} style={errorMessageStyles ?? errorMessage}/> 
		</div>
    </>
	);
};

export default Input

const errorMessage = {
    color: "var(--red)",
    position: "absolute",
    marginTop: "-2rem",
    fontSize: "0.9em",
}

const errorContainer = {
    position: "relative",
}