import { createContext, useContext, useReducer, useRef, useState } from 'react';
const StateContext = createContext();
const initialState = {
	personalInfo: {
		name: '',
		email: '',
		number: '',
	},
	plan: {},
};

function reducer(state, action) {
	switch (action.type) {
		case 'info/saved':
			return {
				...state,
				personalInfo: {
					...state.personalInfo,
					name: action.payload.name,
					email: action.payload.email,
					number: action.payload.number,
				},
			};
		case 'plan/saved':
			return {
				...state,
				plan: action.payload,
			};
		case 'back':
			return {
				...state,
			};
		default:
			throw new Error('Unknow action type');
	}
}

function StateProvider({ children }) {
	const [user, setUser] = useState({ name: '', email: '', number: '' });
	const [isActive, setIsActive] = useState(0);
	const [period, setPeriod] = useState(false);
	const [plan, setPlan] = useState(null);
	let duration = useRef('monthly');
	const [state, dispatch] = useReducer(reducer, initialState);
	function handleCheck(e) {
		if (e.target.checked) {
			duration.current = 'yearly';
		} else {
			duration.current = 'monthly';
		}
		setPeriod(cur => !cur);
	}
	function savePlan(type, amount, period) {
		dispatch({
			type: 'plan/saved',
			payload: { type: type, amount: amount, period: period },
		});
	}
	return (
		<StateContext.Provider
			value={{
				user: user,
				setUser: setUser,
				savePlan: savePlan,
				dispatch,
				handleCheck,
				isActive,
				setIsActive,
				duration,
				setPlan,
				plan,
			}}
		>
			{children}
		</StateContext.Provider>
	);
}
function useStateCustom() {
	const context = useContext(StateContext);
	if (context === undefined)
		throw new Error('Cities Context was used outside CitiesProvider');
	return context;
}

export { StateProvider, useStateCustom };
