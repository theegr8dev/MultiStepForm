import Button from './Button';
import Header from './Header';

function PersonalInfo() {
	return (
		<div className=" step--content info">
			<Header>
				<h1>Personal info</h1>
				<p>Please provide your name, email address, and phone number.</p>
			</Header>
			<form className="form">
				<div className="form-container">
					<label htmlFor="name" className="form--label">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="form--input"
						placeholder="e.g. Stephen King"
					/>
				</div>
				<div className="form-container">
					<label htmlFor="email" className="form--label">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="form--input"
						placeholder="e.g. stephenking@lorem.com"
					/>
				</div>
				<div className="form-container">
					<label htmlFor="phone" className="form--label">
						Phone Number
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						className="form--input"
						placeholder="e.g. +1 234 567 890"
					/>
				</div>
			</form>
			<Button className="btn next--btn">Next Step</Button>
		</div>
	);
}

export default PersonalInfo;
