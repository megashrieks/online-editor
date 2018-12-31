import React, { Component } from "react";
import "./Sidebar.css";
export default class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<li>
					<i className="material-icons">home</i>
				</li>
				<li>
					<i className="material-icons">account_circle</i>
				</li>
				<li>
					<i className="material-icons">settings</i>
				</li>
			</div>
		);
	}
}
