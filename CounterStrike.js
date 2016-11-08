"use strict";
 
        var punkte=0;
		var zähler=0;
		document.getElementById("anzahl").innerHTML="punkte:"+punkte;
		
		function buttenclicken(){
		  if(startZeit){
			  var zeit = (new Date().getMilliseconds() - startZeit)/1000;
			  document.getElementById("tacho").innerHTML="Das sind "+zähler/zeit
		  }else{
			  startZeit = new Date();
		  }
		  punkte++;
		  document.getElementById("anzahl").innerHTML="punkte:"+punkte;
		  
		}