import { useState } from "react";
import './App.css';

const App = () => {
	const [valueInput, setValueInput] = useState('')
	const [list] = useState([
		{
			id: 1,
			name: 'Cassiano',
		},
		{
			id: 2,
			name: 'Suelen',
		},
		{
			id: 3,
			name: 'Joao',
		},
	]);

	return (
		<div className="App">
			<div>
				<input className="autocomplete__input" onChange={(e) => setValueInput(e.target.value)} value={valueInput || ''} />
				{valueInput !== '' && (
					<ul>
						{
							list.filter(person => person.name.toLowerCase().includes(valueInput.toLowerCase())).map(el => (
								<li onClick={() => setValueInput(el.name)} key={el.id}>{el.name}</li>
							))
						}
					</ul>
				)}
			</div>
		</div>
	);
}

export default App;
