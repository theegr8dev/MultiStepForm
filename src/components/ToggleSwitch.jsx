function ToggleSwitch({ onChange }) {
	return (
		<label className="switch">
			<input type="checkbox" onChange={onChange} />
			<span className="slider"></span>
		</label>
	);
}

export default ToggleSwitch;
