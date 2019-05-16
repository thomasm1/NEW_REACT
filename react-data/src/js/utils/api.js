var axios = require('axios');//promise-based http requests component

/*Github requires a client id after a certain number of queries -- might need this to make it work and bypass rate limiting.
var id = 'CLIENT_ID';
var sec = 'CLIENT_SECRET';
var params = '?client_id=' + id + '&client_secret=' + sec;*/


module.exports = {
	fetchPopularRepos: function(location){
		//console.log(location);
		//var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+location:Java&sort=stars&order=desc&type=Repositories');
		//var encodedURI = window.encodeURI('https://www.THOMAS.com/rest-api/well-stats-text-JSON.php?api=' + location);
		//var encodedURI = window.encodeURI('//www.THOMAS.com/rest-api/util-stats-text.php?format=json');
		var encodedURI = window.encodeURI('../../data/util1.json');



		return axios.get(encodedURI)
		.then(function (response){
			return response.data.items;//items is the wrapper in the JSON file
		});
	}
}