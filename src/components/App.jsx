import { useReducer, useState } from 'react';
import AddOns from './AddOns';
import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import Sidebar from './Sidebar';
import Summary from './Summary';
import ThankYou from './ThankYou';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StateProvider } from '../contexts/StateContext';

function App() {
	return (
		<main>
			<section className="container">
				<StateProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Sidebar />}>
								<Route path="/" element={<PersonalInfo />} />
								<Route path="plan" element={<Plan />} />
								<Route path="add-ons" element={<AddOns />} />
								<Route path="summary" element={<Summary />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</StateProvider>
				{/* <ThankYou /> */}
			</section>
		</main>
	);
}

export default App;
