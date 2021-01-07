/**
 * Util module
 * 	Commom procedures
 */
exports.getLength = (obj) => {
	return Object.keys(obj).length;
}

exports.checkisValid = (c) => {
	let len = Object.keys(c).length;

	console.log("checkisValid :: len : ", len, c.len);
	
	return (len >= c.len);
}

exports.composeQuery = (o) => {
    
	let obj = o.obj;
	let cmd = o.cmd;
	let keyNames = Object.keys(obj);
	let query = ""+obj.module+" "+cmd+" ";

	for (let i=0; i < obj.len; i++) {
		
		query += keyNames[i]+"='"+obj[keyNames[i]]+"'";
	
		if (i < obj.len -1)
			query += ", ";
	}
	
	return query;
}

exports.isValidAnsw = (arr) => {

	if ((Array.isArray(arr) && arr.length > 0))
		return true;    //se for um array e tiver elementos, valido
	else
		return false;   //se for um array for um array e estiver zerado, invalido;        
}
