import Button from './Button';
import Header from './Header';
import ToggleSwitch from './ToggleSwitch';
import arcade from '../assets/images/icon-arcade.svg';
import advance from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import '../css/ToggleSwitch.css';
import { useNavigate } from 'react-router-dom';

import { useStateCustom } from '../contexts/StateContext';
import PlanCard from './PlanCard';
const Plans = [
	{
		img: arcade,
		level: 'Arcade',
		sub: {
			monthly: 9,
			yearly: 90,
		},
	},
	{
		img: advance,
		level: 'Advance',
		sub: {
			monthly: 12,
			yearly: 120,
		},
	},
	{
		img: pro,
		level: 'Pro',
		sub: {
			monthly: 15,
			yearly: 150,
		},
	},
];
function Plan() {
	const navigate = useNavigate();

	const {
		isActive,
		setIsActive,
		duration,
		setPlan,
		handleCheck,
		plan,
		savePlan,
	} = useStateCustom();

	function handleClick() {
		savePlan(plan.level, plan.sub[duration.current], duration.current);
		navigate('/add-ons');
	}

	return (
		<div className="step--content plan-container">
			<Header>
				<h1>Select your plan</h1>
				<p>You have the option of monthly or yearly billing</p>
			</Header>
			<div className="plans">
				{Plans.map((plan, i) => (
					<PlanCard
						plan={plan}
						num={i}
						isActive={isActive}
						setIsActive={setIsActive}
						key={i}
						duration={duration.current}
						setPlan={setPlan}
					/>
				))}
			</div>
			<div className="period">
				<span>Monthly</span>
				<ToggleSwitch onChange={handleCheck} />
				<span>Yearly</span>
			</div>
			<div className="btns">
				<Button onClick={() => navigate(-1)}>Go Back</Button>
				<Button className="btn next--btn" onClick={handleClick}>
					Next Step
				</Button>
			</div>
		</div>
	);
}

export default Plan;
