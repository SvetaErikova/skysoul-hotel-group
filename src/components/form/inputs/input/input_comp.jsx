export const Input = ({ type, name, placeholder, required = false, text, rows, maxLength, ...props }) => {
	return (
		<label className="form--input">
			<input name={name} type={type} placeholder={placeholder} required={required} rows={rows} maxLength={maxLength} {...props} />
			<span>{text}</span>
			<div className="form--input_error">Ошибка заполнения</div>
		</label>
	);
};
