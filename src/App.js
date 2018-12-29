import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Main />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
