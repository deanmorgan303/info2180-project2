window.onload= function(){ 
 var puzzle_area=$('#puzzlearea');
 var c= puzzle_area.children(); 
 var x = 0; // horizantal position
 var y = 0; // vertical position
 var count= 0; 
 var xaxis ;
 var yaxis ; 
 var value ; 
 var blankx=300;
 var blanky=300;
 
 function move(piece){ 
      x=blankx;
	  y=blanky ;
	  o=c[piece];
	  new_pos=$(c[piece]).position();
	  console.log(new_pos);
	  c[piece].style.left= x+"px";
	  c[piece].style.top= y+"px"; 
	  blankx=new_pos["left"];
	  blanky=new_pos["top"]; 
 }   
 
 
 for (var i = 0; i<c.length; i++){
 
      $(c[i]).first().addClass("puzzlepiece"); 
	  c[i].style.backgroundSize="400px 400px";
      c[i].style.left = x + "px";
      c[i].style.top = y + "px";
       console.log(x + " " + y);
      x+=100;
      count+= 1;
  if (count%4 == 0){
    y += 100;
    x=0; 
  } 
  }
 x=0; //horizontal position reset 
 y=0; // vertical position reset 
 count=0;// counter reset
   for(var t=0;t<c.length;t++){ 
   //function to set the position of the image  
     xaxis=x+"px";
	 yaxis=y+"px"; 
     value= xaxis+ " "+ yaxis; 
	 console.log(value);
	 c[t].style.backgroundPosition= value ; 
      x=x-100;
	  count=count + 1; 
	  if (count % 4 == 0){
		  x=0;
		  y=y-100;
	  }
   } 
   for(var g=0;g<c.length;g++){ 
       console.log(g);
	   move(g);
  
	   }
	   
   }
   
  
  