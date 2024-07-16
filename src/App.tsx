import './App.css'

import SplitScreen from './components/split-screen'

function LeftSideComponent() {
	return <h2>I am left</h2>
}

function RightSideComponent() {
	return <h2>I am right</h2>
}

function App() {
	return (
		<>
			<h1>REACT: INTERMEDIATE/ADVANCED PATTERNS</h1>
			<ul>
				<li>
					DESIGN PATTERNS: LAYOUT COMPONENTS:
					<ul>
						<li> - SCREEN SPLITTER - </li>
					</ul>
				</li>
			</ul>

			<SplitScreen leftWidth={1} rightWidth={3}>
				<LeftSideComponent/>
				<RightSideComponent/>
			</SplitScreen>
		</>
	)
}

export default App
