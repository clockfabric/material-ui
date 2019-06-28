import React, { Component } from "react";
import { Header, Footer } from "./layouts";
import Exercises from "./excercises";

class App extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Header />
				<Exercises />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
