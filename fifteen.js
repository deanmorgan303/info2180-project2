window.onload= function(){ 
 var puzzle_area=$('#puzzlearea');
 var shuffle_button=document.getElementById("shufflebutton");
 var c= puzzle_area.children(); 
 var x = 0; // horizantal position
 var y = 0; // vertical position
 var count= 0; 
 var xaxis ;
 var yaxis ; 
 var value ; 
 var blankx=300;
 var blanky=300;
 var tile_pos;
 var tile_x;
 var tile_y;
 console.log(c);
 
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
  function is_movable(tile){
	    tile_pos=$(c[tile]).position();
		tile_x=tile_pos["left"];
		tile_y=tile_pos["top"];
		let move_left=blankx -100;
		let move_right=blankx +100;
		let move_up=blanky-100;
		let move_down=blanky+100;
       if(tile_x == move_left && blanky==tile_y || tile_x == move_right && blanky==tile_y||tile_y == move_up||tile_y == move_down ){
		   move(tile);
	   } 
	   //else if(tile_y == move_up ||tile_y == move_down ) {
		  //move(tile); 
	   //}
  } 
  function suffler(N){ 
      pos= Math.floor(Math.random() * N);
	  console.log(pos);
	  is_movable(pos);
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
    shuffle_button.onclick=function(){
    for(var l=0; l<c.length;l++){ 
	 console.log("in loop");
		suffler(15);
		} 
	}
	/*for(let f=0; f<c.length;f++){
	 let c_change=c[f] ;
       c_change.onmouseover=function(){
		 c.forEach(function( item){
				item.classList.add("movablepiece");
				});
	  } 
	}*/ 
	//c[0].onmouseover=function (){
		//c[0].classList.add("movablepiece");
	//}
	c[0].onclick=function(){
			is_movable(0);
		} 
	c[1].onclick=function(){
			is_movable(1);
		} 
	c[2].onclick=function(){
			is_movable(2);
		} 
     c[3].onclick=function(){
			is_movable(3);
		} 
    c[4].onclick=function(){
			is_movable(4);
		} 
     c[5].onclick=function(){
			is_movable(5);
		} 
     c[6].onclick=function(){
			is_movable(6);
		}  
    c[7].onclick=function(){
			is_movable(7);
		}
    c[8].onclick=function(){
			is_movable(8);
		} 
    c[9].onclick=function(){
			is_movable(9);
		} 
    c[10].onclick=function(){
			is_movable(10);
		} 
    c[11].onclick=function(){
			is_movable(11);
		} 	
    c[12].onclick=function(){
			is_movable(12);
		}
    c[13].onclick=function(){
			is_movable(13);
		}  		
	c[14].onclick=function(){
			is_movable(14);
		} 
   }
   
  
  