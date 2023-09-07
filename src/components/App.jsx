import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import Sidebar from './Sidebar';
function App() {
	return (
		<main>
			<section className="container">
				<Sidebar />
				{/* <PersonalInfo /> */}
				<Plan />
			</section>
		</main>
	);
}

export default App;
