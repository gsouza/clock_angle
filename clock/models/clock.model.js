/**
 *  Clock model behavior file
 */
const sql 	= require("./sql.model_pg");			//to postgres database
// const sql 	= require("./sql.model");				//to mysql database
const util	= require("../common/util.common");
const Angle = require('./clock.calcangle');

// constructor
const Clock = function(data) {
  this.hour 		= data.hour 		|| '';
  this.minute 	= data.minute		|| '';
  this.angle 		= data.angle	  || '';
  this.len      = Object.keys(this).length; //this must be kept after last propriety, close to the end
  this.module   = 'stored';
};

Clock.insert = async (data) => {
	
	let c = new Clock(data);
	let query = "INSERT INTO "+c.module+"(hour,minute,angle) VALUES("+c.hour+","+c.minute+","+c.angle+") ";

	let res = await sql.send(query);      
  if (!res) {
    console.log("Clock.insert :: error: ", err);
    result(err, null);
    return false;
  }

  return res.insertId;
};

Clock.getbyId = async (data) => {
  
  let query = "SELECT * FROM "+new Clock({}).module+" ";

  if (data && data.params && data.params.id) {
    query += " WHERE id='"+data.params.id+"'";
  }
  query += " ; ";
	
	console.log('query: ', query);
  
  let res = await sql.send(query);

  return res;
};

Clock.getbyValues = async (params) => {
  
	let query = "SELECT angle FROM "+new Clock({}).module+" WHERE hour='"+params.h+"' AND minute='"+params.m+"'; ";
	
	// console.log('query: ', query);
  
  let res = await sql.send(query);

	return res.rows;
};

Clock.update = async (id, obj) => {
 
  if (!obj || !id) {
    console.log("Clock.update :: ERROR : returning ");
    return;
  }

  const query = "UPDATE "+util.composeQuery({obj: obj, cmd: "SET"})+" WHERE id='"+id+"'; ";
  
  let res = await sql.send(query);
  
  if (res.affectedRows == 0) {
    return false;
  }

	// console.log("Clock.update :: ", { id: id }, query );	
	return id;
};

Clock.remove = async (id) => {
  
	if (!id) return;
	
  let query = "DELETE FROM "+new Clock({}).module+" WHERE id='"+id+"'; ";
// console.log("query: ", query);
  let res = await sql.send(query);

  if (res.affectedRows == 0) {
    return false;
	}
	
	return res;
};


Clock.getAngle = async (params, result) => {
	
	try {
		let robj = {};

		if (Number.isInteger(parseInt(params.h)) && Number.isInteger(parseInt(params.m))) {		
			
			let res = await Clock.getbyValues(params);
			
			if (util.isValidAnsw(res)) {	//dado já existente
				robj = {angle: res[0].angle};
				console.log('res :', res);
			}
			else {
				const a = new Angle();
				let ret = a.get_angle(params.h, params.m);
				
				if (ret.status) {
					let data = {hour : params.h, minute: params.m, angle: ret.angle};
					
					await Clock.insert(data);

					robj = {angle: ret.angle};
				}
				else {
					robj = {err: ret.err};
				}
			}
		}
		else {
			robj = {err: 'wrong input'};
		}

		result(null, robj);
	}
	catch(err) {
		console.log("Clock.getAngle :: Error ", err);
	}
}


module.exports = Clock;