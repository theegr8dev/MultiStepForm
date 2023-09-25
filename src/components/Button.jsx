function Button({ children, className, onClick }) {
	return (
		<button className={className} onClick={onClick} type="submit">
			{children}
		</button>
	);
}

export default Button;
