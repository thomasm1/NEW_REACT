const express = require('express');
const mongojs = require('mongojs');

const app = express();
const db = mongojs('constituents',['charts']);

app.get('/chart.json',(req,res) =>{
	 db.charts.find({_id:mongojs.ObjectId("5a6a33e31af05fd7d2767748")}, (err,r) =>{
	// db.carbon1.find({_id:mongojs.ObjectId("5a6811e095690cdc17efd2b1")}, (err,r) =>{	
	if(err){
			res.sendStatus(404);
		}else{
			res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");
  		res.send(JSON.stringify(r[0]));
		}
	});
});


app.listen(3002, function(){
	console.log("Gas Constituents on port 3002 ...");
});
