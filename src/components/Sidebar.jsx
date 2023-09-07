import Button from './Button';

function Sidebar() {
	return (
		<aside className="step">
			<ul className="step__list">
				<li className="step__item">
					<Button className="step__btn">1</Button>
					<div className="step__info">
						<span> STEP 1</span>
						<p>YOUR INFO</p>
					</div>
				</li>
				<li className="step__item">
					<Button className="step__btn">1</Button>
					<div className="step__info">
						<span> STEP 2</span>
						<p>SELECT PLAN</p>
					</div>
				</li>
				<li className="step__item">
					<Button className="step__btn">1</Button>
					<div className="step__info">
						<span> STEP 3</span>
						<p>ADD-ONS</p>
					</div>
				</li>
				<li className="step__item">
					<Button className="step__btn">1</Button>
					<div className="step__info">
						<span> STEP 4</span>
						<p>SUMMARY</p>
					</div>
				</li>
			</ul>
		</aside>
	);
}

export default Sidebar;
