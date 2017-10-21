var car=[];
var item=0;
var cars = function (model,manuf,price) {
	this.model = model;
	this.manuf = manuf;
	this.price = price;
}
	cars.prototype.display = function(){
	document.querySelector(".container").innerHTML += "<div class='one'>"+ item +" </div>";
	document.querySelector(".container").innerHTML += "<div class='two'>"+ this.model +" </div>";
	document.querySelector(".container").innerHTML += "<div class='three'>"+this.price+"$</div>";
	document.querySelector(".container").innerHTML += "<div class='four'>"+ "<img src='img/" +this.manuf+".png'"  +" </div>";
	
}


car[item] = new cars('F10','Ford','30,000$');

function update(){
var a = document.querySelector("#mod").value;
var b = document.querySelector("#make").value;
var c = document.querySelector("#price").value;
console.log(a +" "+ b +" " + c)	
item++;
car[item] = new cars(a,b,c);
car[item].display();
}
document.querySelector("#up").addEventListener('click',update);