/**
 * 
 * @param {*} query 
 */
const {Client}    = require("pg");
const dbConfig		= require("../../config/db.config_pg.js");

// Create a connection to the database
const sql = new Client({
  host    : dbConfig.HOST,
  user    : dbConfig.USER,
  password: dbConfig.PASSWORD,
	database: dbConfig.DB,
	port		: dbConfig.PORT,
});

// open the PG connection
sql.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

exports.send = (query) => {
	try {
		return new Promise((resolve, reject) => {
			sql.query(query, (err, res) => {

				// console.log('sql.send :: query : ', query);

				if (err) {
					console.log('sql.send :: ERROR : ', err);
					console.log('sql.send :: query : ', query);
					reject(err);
				}
				else {
					// console.log('sql.send :: res : ', res);
					let res2 = (JSON.parse(JSON.stringify(res)));
					let d;
					if (Object.is(res2)) {
						d = [];
						for (let re of res2) {
							d.push(re);
						}
					}
					else //{
						d = res2;
					// }

					// console.log('sql.send :: data : ', d);
					resolve(d);
				}
			});
		});
	}
	catch (err) {
		console.log('error on send query');
		console.log('util.sql :: send : ', err);
		null;
	}
}
