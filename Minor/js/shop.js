var mainArray = [];
var currentArr = [];
let sex = ['male','female'];
let sizes = ['s','m','l','xl'];
let colors = ["white","black","red","yellow","blue"];
let types = ['topwear','bottoms','fragnance','footwear'];
//Constructor Function For Object Justification
var product = function(type,gender,name,image,price,size,color){
this.type = type;
this.gender = gender;
this.name = name;
this.image = image;
this.price = price;
this.size = size;
this.color = color;
}
//Object Creator And Stacker
var createProduct = (type,gender,name,image,price,size,color) => {
	var ob = new product(type,gender,name,image,price,size,color);
	mainArray.push(ob);
}
createProduct("footwear","male","Old White Sneakers","one","2500","s","red");
createProduct("topwear","male","Classic Polo","one","3500","m","pink");
createProduct("topwear","male","Crew Neck","one","500","s","white");
createProduct("footwear","female","Brass Flats","one","5600","s","white");
createProduct("footwear","female","Heels","one","9800","m","red");
createProduct("topwear","female","Tranches","one","1000","s","pink");
createProduct("bottoms","female","Classic V Neck","one","500","l","priceink");
createProduct("bottoms","female","Black Down","one","2500","m","pink");
createProduct("footwear","female","Sports","one","2500","m","white");
currentArr = mainArray;

// These are the Generic Filter Functions That Will Filter The Items On The Array Of Objects
var gender = (inp) => { return mainArray.filter(item => item.gender === inp); }
var type = (inp) => { return currentArr.filter(item => item.type === inp); }
var size = (inp) => { return currentArr.filter(item => item.size === inp); }
var color = (inp) => { return currentArr.filter(item => item.color === inp); }

//This Function Display All The Elements of Array Using the .map method on array we pass 'arr'
//and By Using Template Strings Outputs The Data On The Screen 
showProducts = (arr) => {
document.querySelector(".rightMainContent").innerHTML = arr.map(item => `<div class="item"><h1>${item.name}</h1><h3>${item.price}</h3></div>`).join('');
}
//Initially Displaying Products
showProducts(mainArray);

//this IIFE(implicitly invoked function expression) sets the color pickers color according to their ids
// To Add Color Just Set The Id of the Div the Color You Want to Set and add class 'colorpicker'
// <div class="colorpicker" id="white"></div>
(()=> {
let nodeList = document.querySelectorAll(".colorpicker");
Array.prototype.slice.call(nodeList).map((a)=>a.style.backgroundColor = a.id);
})();

(()=> {
let nodeList = document.querySelectorAll(".item");
Array.prototype.slice.call(nodeList).map((a)=> a.style.backgroundColor = a.id);
})();

//This Code Uses The Event Method To Pick The H4 Element and Run The Filter Functions on them
//This Method Keeps The Dom Clean For Less Ambiguity
$(".sidebar h4,.colorpicker").click(function(event) {
    var text = $(event.target).text();
    	var a = event.target.id; //this is just for using color filter
        if(sex.includes(text)) {
    			currentArr = gender(text);
   	 			showProducts(currentArr); 		
   	 			}
    	else if(sizes.includes(text)) {
                currentArr = size(text)
    		 	showProducts(currentArr);
    			}
        else if (colors.includes(a)) {
            console.log(a);
                currentArr = color(a);
                showProducts(currentArr);
            }
     	else  {
                currentArr = type(text.toLowerCase());
                showProducts(currentArr);
                }
//This IIFE Replaces The Empty Array With a PlaceHolder Text
    (function(){
	let a = document.querySelector(".rightMainContent").innerHTML;
	if (a == "") {
		document.querySelector(".rightMainContent").innerHTML = '<h1>Fuckk OFF You Little Peice of SHit Nothing here</h1>';
	 }
    })();
    });