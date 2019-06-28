import React, { Component } from "react";
import { Header, Footer } from "./layouts";
import Exercises from "./excercises";

class App extends Component {
	state = {
		count: 1,
		leftPaneMessage: "Left Pane"
	};

	handleClick = () => {
		this.setState({ count: this.state.count + 1 });
		this.setState({
			leftPaneMessage: "Login clicked " + this.state.count + " times..."
		});
	};

	render() {
		return (
			<React.Fragment>
				<Header handleClick={this.handleClick} />
				<Exercises leftPaneMessage={this.state.leftPaneMessage} />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
