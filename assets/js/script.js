var i = 0;
var grid = document.getElementsByTagName("div");
grid[i].style.border = "2px solid red";
console.log(grid);

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            // left arrow;
			i == 0 || i == 3 || i == 6? i = i :i--;
			grid[i+1].style.border = "1px solid #333";
			grid[i].style.border = "2px solid red";
			// console.log(grid[i]);
			grid[i].innerHTML = parseInt(++grid[i].innerHTML);
            break;
			
        case 38:
            //up arrow;
			i == 0 || i == 1 || i == 2? i = i :i = i-3;
			grid[i+3].style.border = "1px solid #333";
			grid[i].style.border = "2px solid red";
			// console.log(grid[i]);

			grid[i].innerHTML = parseInt(++grid[i].innerHTML);
            break;
			
        case 39:
            // right arrow;
			i == 8 || i == 5 || i == 2? i = i :i++;
			grid[i-1].style.border = "1px solid #333";
			grid[i].style.border = "2px solid red";
			// console.log(grid[i]);
			grid[i].innerHTML = parseInt(++grid[i].innerHTML);
            break;
			
        case 40:
            // down arrow;
			i == 8 || i == 7 || i == 6? i = i :i = i+3;
			grid[i-3].style.border = "1px solid #333";
			grid[i].style.border = "2px solid red";
			grid[i].innerHTML = parseInt(++grid[i].innerHTML);
            break;
    }
	
	var result={};
	for (var j = 0; j < grid.length; j++)
		{
			var char = grid[j].innerHTML;
			if(result[char]>0)
		   {
			   result[char]++;
		   }
		   else{
			    
				result[char] =1;
		   }
		}
		console.log(result);
		if (result[char] == 9){
			alert("You Win");
			setTimeout (function(){
				document.location.reload();
			}, 800);
		}
};

function restart(){
	document.location.reload();
}
