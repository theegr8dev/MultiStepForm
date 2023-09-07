import PersonalInfo from './PersonalInfo';
import Sidebar from './Sidebar';
function App() {
	return (
		<main>
			<section className="container">
				<Sidebar />
				<PersonalInfo />
			</section>
		</main>
	);
}

export default App;
