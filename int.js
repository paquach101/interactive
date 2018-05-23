	var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    var myMusic;
    var mySound;
    var myMusic;

		var i = 1;

		window.setInterval(function(){
			document.body.style.backgroundColor = colors[i];
			i++;
			if (i === colors.length){
				i=0;
			}
		}, 500);

function myFunction(x){
    var op = x.option[x.selectedIndex];
    var el = document.getElementById("myDiv");
    if (el.style.opacity !== undefined) {
        el.style.opacity = opacity;
    } else {
        alert("hi");
    }
}


//    from {left: 0px;}
    // to {right: 900px;}

            //10% {
                //transform: rotate(40deg);
                //opacity: .8;
           // }
           // 20% {
               // transform: rotate(80deg);
                //opacity: .5
          //  }
           // 30% {
            //    transform: rotate(120deg);
                opacity: .3
           // }
           // 40% {
               // transform: rotate(180deg);
           // }
            //50% {
                //transform: rotate(200deg);
           // }
            //100% {
               // transform: rotateZ(3600deg);
            //}
