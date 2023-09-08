import AddOns from './AddOns';
import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import Sidebar from './Sidebar';
import Summary from './Summary';
import ThankYou from './ThankYou';
function App() {
	return (
		<main>
			<section className="container">
				<Sidebar />
				{/* <PersonalInfo /> */}
				{/* <Plan /> */}
				<AddOns />
				{/* <Summary /> */}
				{/* <ThankYou /> */}
			</section>
		</main>
	);
}

export default App;
