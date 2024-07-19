import './App.css'

import SplitScreen from './components/SplitScreen.js'
import List from './components/lists/List'

import authors from './data/authors.js'
import SmallAuthorsListItems from './components/authors/SmallListItems'
import LargeAuthorsListItems from './components/authors/LargeListItems'
import ModalContainer from './components/modal/ModalContainer.js'

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
						<li> - MODALS - </li>
					</ul>
				</li>
			</ul>

			<br />
			<br />
			<br />
			<br />
			<br />

			<h2>SCREEN SPLITTER:</h2>

			<SplitScreen leftWidth={1} rightWidth={3}>
				<LeftSideComponent />
				<RightSideComponent />
			</SplitScreen>

			<br />
			<br />
			<br />
			<br />
			<br />

			<h2>LISTS</h2>
			<List items={authors} ItemListComponent={SmallAuthorsListItems} />
			<List items={authors} ItemListComponent={LargeAuthorsListItems} />

			<br />
			<br />
			<br />
			<br />
			<br />

			<h2>MODAL</h2>
			<ModalContainer />
		</>
	)
}

export default App
