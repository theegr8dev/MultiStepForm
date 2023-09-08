import '../css/CustomCheckBox.css';
function CheckBox({ id, name }) {
	return (
		<div className="custom-checkbox">
			<input type="checkbox" id={id} name={name} />
			<span className="checkmark"></span>
		</div>
	);
}

export default CheckBox;
