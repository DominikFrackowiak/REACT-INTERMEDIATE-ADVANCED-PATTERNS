import './App.css'

import SplitScreen from './components/split-screen'
import List from './components/lists/List'

import authors from './data/authors.js'
import SmallAuthorsListItems from './components/authors/SmallListItems'
import LargeAuthorsListItems from './components/authors/LargeListItems'

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
						<li> - LISTS - </li>
					</ul>
				</li>
			</ul>

			<h2>SCREEN SPLITTER:</h2>

			<SplitScreen leftWidth={1} rightWidth={3}>
				<LeftSideComponent />
				<RightSideComponent />
			</SplitScreen>

			<h2>LISTS</h2>
			<List items={authors} ItemListComponent={SmallAuthorsListItems} />
			<List items={authors} ItemListComponent={LargeAuthorsListItems} />
		</>
	)
}

export default App
