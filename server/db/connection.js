const { connect } = require("mongoose");
module.exports = () =>
	connect(
		"mongodb://localhost:27017/onlineeditordev",
		{ useNewUrlParser: true }
	);
