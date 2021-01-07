/**
 * 
 * @param {*} app 
 */
module.exports = app => {

	const clock     = require("../controllers/clock.controller");
	const packName  = "/app";
	const addr			= "clock";

	// app.post(packName  +"/"+addr+"/:h/:m"   , [clock.processAngle]);
	app.get (packName  +"/"+addr+"/:h/:m"   , [clock.processAngle]);

	app.all("*", (req, res) => {
		
		console.log("notAllowed :: ips [%s] : ip[%s] : path [%s] method [%s]: " ,req.ips, req.ip, req.path, req.method);
		
		res.status(404).json({message: "addr needs to macth: 'http://serverIp:3000"+packName+"/"+addr+"/hour/minute"});
	});
}
