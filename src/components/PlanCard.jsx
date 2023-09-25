import { useStateCustom } from '../contexts/StateContext';

function PlanCard({ plan, isActive, setIsActive, num, duration, setPlan }) {
	const active = num === isActive;

	if (active) {
		setPlan(plan);
	}
	function handleToggle() {
		setIsActive(num);
	}

	return (
		<div
			className={`plan-card ${active && 'active-plan'}`}
			onClick={handleToggle}
		>
			<div className="plan-img">
				<img src={plan.img} alt="arcade" />
			</div>
			<p>{plan.level}</p>
			<span>
				${plan.sub[duration]}/{duration === 'monthly' ? 'mo' : 'yr'}
			</span>
		</div>
	);
}

export default PlanCard;
