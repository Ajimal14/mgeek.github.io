var car=[];
var item=0;
var cars = function (model,manuf,price) {
	this.model = model;
	this.manuf = manuf;
	this.price = price;
}
	cars.prototype.display = function(){
	document.querySelector(".container").innerHTML += "<div class='disc'>"+" is Priced at "+this.price+" From " +this.manuf+"<br>" + " </div>";
	document.querySelector(".container").innerHTML += "<div class='img'>"+ this.model +" </div>";

}
function update(){
var a = document.querySelector("#mod").value;
var b = document.querySelector("#make").value;
var c = document.querySelector("#price").value;
console.log(a +" "+ b +" " + c)
item++;
car[item] = new cars('a','b','c');
}
for(i=1;i<=car.length;i++){
car[i].display();
}
document.querySelector("#up").addEventListener('click',update);