import Button from './Button';
import Header from './Header';
import ToggleSwitch from './ToggleSwitch';
import arcade from '../assets/images/icon-arcade.svg';
import advance from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import '../css/ToggleSwitch.css';

function Plan() {
	return (
		<div className="step--content plan-container">
			<Header>
				<h1>Select your plan</h1>
				<p>You have the option of monthly or yearly billing</p>
			</Header>
			<div className="plans">
				<div className="plan-card">
					<div className="plan-img">
						<img src={arcade} alt="arcade" />
					</div>
					<p>Arcade</p>
					<span>$9/mo</span>
				</div>
				<div className="plan-card">
					<div className="plan-img">
						<img src={advance} alt="arcade" />
					</div>
					<p>Advanced</p>
					<span>$12/mo</span>
				</div>
				<div className="plan-card">
					<div className="plan-img">
						<img src={pro} alt="arcade" />
					</div>
					<p>Pro</p>
					<span>$15/mo</span>
				</div>
			</div>
			<div className="period">
				<span>Monthly</span>
				<ToggleSwitch />
				<span>Yearly</span>
			</div>
			<div className="btns">
				<Button>Go Back</Button>
				<Button className="btn next--btn">Next Step</Button>
			</div>
		</div>
	);
}

export default Plan;
