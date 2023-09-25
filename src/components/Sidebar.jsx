import { NavLink, Outlet } from 'react-router-dom';
import Button from './Button';

function Sidebar() {
	return (
		<>
			<aside className="step">
				<ul className="step__list">
					<li>
						<NavLink className="step__item" to="/">
							<Button className="step__btn">1</Button>
							<div className="step__info">
								<span> STEP 1</span>
								<p>YOUR INFO</p>
							</div>
						</NavLink>
					</li>

					<li>
						<NavLink className="step__item" to="/plan">
							<Button className="step__btn">2</Button>
							<div className="step__info">
								<span> STEP 2</span>
								<p>SELECT PLAN</p>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink className="step__item" to="/add-ons">
							<Button className="step__btn">3</Button>
							<div className="step__info">
								<span> STEP 3</span>
								<p>ADD-ONS</p>
							</div>
						</NavLink>
					</li>

					<li>
						<NavLink className="step__item" to="summary">
							<Button className="step__btn">4</Button>
							<div className="step__info">
								<span> STEP 4</span>
								<p>SUMMARY</p>
							</div>
						</NavLink>
					</li>
				</ul>
			</aside>
			<Outlet />
		</>
	);
}

export default Sidebar;
