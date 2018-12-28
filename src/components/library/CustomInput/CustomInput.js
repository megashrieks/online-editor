import React, { useState, Component } from "react";
import "./CustomInput.css";
function inputHook(defaultvalue, changeWatcher, blurWatcher) {
	const [value, setValue] = useState(defaultvalue);
	return {
		value,
		onChange({ target: { value } }) {
			setValue(value);
			changeWatcher(value);
		},
		onBlur({ target: { value } }) {
			blurWatcher(value);
		}
	};
}

function watchHandler(props) {
	var changeWatcher = () => {};
	var blurWatcher = () => {};
	if (!!props.triggerOnChange) changeWatcher = props.watcher;
	else blurWatcher = props.watcher;
	var input = inputHook("", changeWatcher, blurWatcher);
	return input;
}

class CustomInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.defaultvalue,
			onChange: this.change(
				!!this.props.triggerOnChange ? this.props.watcher : () => {}
			),
			onBlur: this.change(
				!!!this.props.triggerOnChange ? this.props.watcher : () => {}
			)
		};
	}
	change = fn => ({ target: { value } }) => {
		this.setState({
			value
		});
		fn(value);
	};
	render() {
		var errorclass = !!this.props.error ? " error" : "";
		return (
			<label className={"custom-input" + errorclass}>
				<input {...this.state} disabled={!!this.props.disabled} />
				<div className="label">{this.props.label}</div>
				<div className="error-message">{this.props.errorMessage}</div>
			</label>
		);
	}
}
export { CustomInput };
