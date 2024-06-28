let v = document.getElementById("aH1");
let portC = document.getElementById("PageTitle");
alert ("WELCOME TO MY PORTFOLIO WEBSITE, Preferabl run on Laptop or Desktop ");
let Portfolio = ["Victor Isesele",
			"Programmer",
			"Chemical Engineer"];
let color = ["cornflowerblue", "red", 
			"yellow"
			];
let arr = ["IMAGES/NNPCI.jpg", "IMAGES/NYSCIV.jpg",
		"IMAGES/NNPCII.jpg"];		
 
var x = document.getElementById("ImgId");
var y = setInterval (change, 5000);
check = 0
function change (){
			x.src= arr[check];
			v.innerHTML=Portfolio[check];
		    portC.style.backgroundColor=color[check];
			check += 1;
			if (check == 3){
				check = 0;
		}	
		}
	


 
 