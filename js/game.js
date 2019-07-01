// JavaScript Document

/*function addPlayer() {
	var alplayer = new Alplayer(
	document.getElementById("name").value,
	document.getElementById("litpoints").value,
	document.getElementById("prestige").value

	);
	alplayer.push(Alplayer);
	doReport();
}

var alplayer = [];

function Alplayer(name, litpoints, prestige){
	this.name = name;
	this.litpoints = litpoints;
	this.prestige = prestige;
	this.doReport = function () {
		return this.name + 'and' + this.litpoints
	}
}

function doReport() {
	output ="";
	for(var i = 0; i< alplayer.length; i++){
		output += (i+1) + ")" + alplayer[i].doReport() + ";";
	}
	document.getElementById("output").innerHTML = output;
}
*/

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollLeft: target.offset().left
        }, 700);
    }
});

// Add Player

$(function(){
    $("#addPlayer").on('click',function(){
        var r= $('<button class="rulesbutton waves-effect waves-light green darken-1 z-depth-2">Franzi</button><br>');
        $("#playerpool").prepend(r);
    });
});