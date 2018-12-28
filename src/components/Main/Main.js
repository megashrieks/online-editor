import React, { Component } from "react";
import { SessionProvider } from "../context/SessionContext";
export default class Main extends Component {
	render() {
		return <SessionProvider />;
	}
}
