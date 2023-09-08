import Button from './Button';
import Header from './Header';

function Summary() {
	return (
		<div className="step--content summary">
			<Header>
				<h1>Finishing up</h1>
				<p>Double-check everything looks OK before confirmning</p>
			</Header>
			<section>
				<div className="summary__container">
					<div className="summary__plan">
						<div>
							<h2>Arcade (Monthly)</h2>
							<a href="#/">Change</a>
						</div>
						<span>$9/mo</span>
					</div>
					<div className="summary__add-ons">
						<div>
							<p>Online service</p>
							<span>$1/mo</span>
						</div>
						<div>
							<p>Larger storage</p>
							<span>$2/mo</span>
						</div>
					</div>
				</div>
				<div className="total">
					<p>Total (per month)</p>
					<span>+$12/mo</span>
				</div>
			</section>
			<div className="btns">
				<Button>Go Back</Button>
				<Button className="btn confirm--btn">Confirm</Button>
			</div>
		</div>
	);
}

export default Summary;
