/**
 * Clock Angle
 * 	procedures
 */
const Clock = require("../models/clock.model.js");

exports.processAngle = (req, res) => {

	// console.log('req: ',req.params.h);
	// console.log('req: ',req.params.m);

	Clock.getAngle(req.params, (err, data) => {
    if (err) {
			res.status(500).json({ message: "ERROR"});
		} else {
			res.json(data);
		}
	});
	
}
