import Header from './Header';
import Button from './Button';
import CheckBox from './CheckBox';

function AddOns() {
	return (
		<div className="step--content add-on">
			<Header>
				<h1>Pick add ons</h1>
				<p>Add-ons help enhance your gaming experinece</p>
			</Header>
			<section className="add-ons">
				<label className="add-on__card" htmlFor="online-service">
					<CheckBox id="online-service" name="online-service" />
					<div className="add-on__detail">
						<p>Online service</p>
						<span>Access to multiplayer games</span>
					</div>
					<p className="add-on__price">+$1/mo</p>
				</label>
				<label className="add-on__card" htmlFor="larger-storage">
					<CheckBox id="larger-storage" name="larger-storage" />
					<div className="add-on__detail">
						<p>Larger storage</p>
						<span>Extra 1Tb of cloud save</span>
					</div>
					<p className="add-on__price">+$2/mo</p>
				</label>
				<label className="add-on__card" htmlFor="customizable-profile">
					<CheckBox
						id="customizable-profile"
						name="customizable-profile"
					/>
					<div className="add-on__detail">
						<p>Customizable profile</p>
						<span>Custom theme on your profile </span>
					</div>
					<p className="add-on__price">+$2/mo</p>
				</label>
			</section>
			<div className="btns">
				<Button>Go Back</Button>
				<Button className="btn next--btn">Next Step</Button>
			</div>
		</div>
	);
}

export default AddOns;
