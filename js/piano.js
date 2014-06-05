soundManager.url = 'sound/';
soundManager.flashVersion = 9;
soundManager.useHTML5Audio = false;
soundManager.onready( function() {
	var i;
	for(i=0; i<=9; i++) {
		soundManager.createSound( {
			id		: 'sound'+i,
			type	: 'audio/mp3',
			url		: 'notes/note'+i+'.mp3',
			autoLoad: true,
			autoPlay: false,
			volume	: 100,
			multiShot:false
		} );
	}
} );

function hashcode(str){
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

var password = [];

function jouerNote(nPos) {

	if(password.length>=5)
		password.shift();
	password.push(nPos);

	if(hashcode(password.join())===-1477050156)
		window.location.replace("./secret.html?melody="+password.join());

}
