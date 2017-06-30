// /app/index.js
import React from 'react';
import ReactDOM from 'react-dom';
// import WelcomeMessage from './components/WelcomeMessage.jsx';

import GoogleMap from 'react-google-maps';

import Map from './components/Map'
import Place from './components/Place'
// import SCSS from './styles/app.scss';  

const appData = {	
	title: 'React Demo App'
}

class App extends React.Component{
	render() {
		//parent pass location to child
		const location = {
			lag: 40.75,
			lng: -74
		}

		return (
			<div>
				This is React App! 
				<div style={{width:300, height:600, background:'red'}}>
					map receive parent location property
					<Map center = {location} /> 
				</div>
				<Place /> 
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('container')
);
