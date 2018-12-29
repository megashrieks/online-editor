import React, { createContext, Component } from "react";
import { Redirect } from "react-router-dom";
var Context = createContext();
class SessionProvider extends Component {
	state = { loggedIn: false };
	changeLoginState = value => {
		return new Promise(resolve => {
			this.setState(
				{
					loggedIn: value
				},
				resolve
			);
		});
	};
	invalidLogin = () => {
		return <Redirect to="/login" />;
	};
	render() {
		return (
			<Context.Provider
				value={{
					loggedIn: this.state.loggedIn,
					changeLoginState: this.changeLoginState,
					invalidLogin: this.invalidLogin
				}}
			>
				{this.props.children}
			</Context.Provider>
		);
	}
}
export { SessionProvider, Context };
