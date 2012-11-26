define({
    var Movie = (function(){
		var name = '';
		var director = '';
		var year = '';
		return{ 
			play: function(){ return "playing" + this.name + "film." },
			stop: function(){ return "the Movie has been stopped"}
		}
	});
});