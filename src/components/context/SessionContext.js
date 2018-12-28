import React, { createContext, Component } from "react";
var Context = createContext();
class SessionProvider extends Component {
	state = { loggedIn: false };
	changeLoginState = value => {
		return new Promise((resolve, reject) => {
			try {
				this.setState(
					{
						loggedIn: value
					},
					resolve
				);
			} catch (e) {
				reject();
			}
		});
	};
	render() {
		return (
			<Context.Provider
				value={{
					loggedIn: this.state.loggedIn,
					changeLoginState: this.changeLoginState
				}}
			>
				{this.props.children}
			</Context.Provider>
		);
	}
}
export { SessionProvider, Context };
