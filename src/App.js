import React, { Component } from 'react';
import Header from './Component/Jobs/header.js';
import JobList from './Component/Jobs/jobList.js';
import JobsFooter from './Component/Jobs/footer.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="ptext">
					<p>
						VAIUS Careers partner with other recruiters, agencies, and top
						startups that need to locate and hire exceptional talent. We
						specialize in connecting top tier talent with great direct hire
						opportunities in US & Canada.
					</p>
				</div>
				<JobList />
				<JobsFooter />
			</div>
		);
	}
}

export default App;
