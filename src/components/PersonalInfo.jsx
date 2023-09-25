import Button from './Button';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useStateCustom } from '../contexts/StateContext';

function PersonalInfo() {
	const navigate = useNavigate();
	const { user, setUser, dispatch } = useStateCustom();

	function handleClick(e) {
		e.preventDefault();
		if (!user.name && !user.email && !user.number) return;
		dispatch({
			type: 'info/saved',
			payload: { name: user.name, email: user.email, number: user.number },
		});
		navigate('/plan');
	}
	return (
		<div className="step--content info">
			<Header>
				<h1>Personal info</h1>
				<p>Please provide your name, email address, and phone number.</p>
			</Header>
			<form className="form" onSubmit={handleClick}>
				<div className="form-container">
					<div className="form--label">
						<label htmlFor="name">Name</label>
						<p className={!user.name ? 'error-message' : ''}>
							This field is required
						</p>
					</div>

					<input
						type="text"
						id="name"
						name="name"
						className={`form--input ${!user.name ? 'error' : ''} `}
						placeholder="e.g. Stephen King"
						onChange={e => setUser({ ...user, name: e.target.value })}
						value={user.name}
					/>
				</div>
				<div className="form-container">
					<div className="form--label">
						<label htmlFor="email">Email Address</label>
						<p className={!user.email ? 'error-message' : ''}>
							This field is required
						</p>
					</div>

					<input
						type="email"
						id="email"
						name="email"
						className={`form--input ${!user.email ? 'error' : ''} `}
						placeholder="e.g. stephenking@lorem.com"
						onChange={e => setUser({ ...user, email: e.target.value })}
						value={user.email}
					/>
				</div>
				<div className="form-container">
					<div className="form--label">
						<label htmlFor="phone">Phone Number</label>
						<p className={!user.number ? 'error-message' : ''}>
							This field is required
						</p>
					</div>

					<input
						type="tel"
						id="phone"
						name="phone"
						className={`form--input ${!user.number ? 'error' : ''} `}
						placeholder="e.g. +1 234 567 890"
						onChange={e => setUser({ ...user, number: e.target.value })}
						value={user.number}
					/>
				</div>
				<div className="btns">
					<Button className="btn next--btn">Next Step</Button>
				</div>
			</form>
		</div>
	);
}

export default PersonalInfo;
