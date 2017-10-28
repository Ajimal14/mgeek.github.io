var mainArray = [];
var currentArr = [];
var typeArr = [];
let sex = ['mens','womens'];
let sizes = ['s','m','l','xl'];
let colors = ["white","black","red","yellow","blue","grey","brown"];
let types = ['Shirt','Tshirt','Jacket','Tshirt','Fragnance','Bags','Boots','Heels'];

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
createProduct("shirt","mens","Crew Neck","item-men","500","s","white");
createProduct("shirt","mens","Matte Black","item-men2","500","s","white");
createProduct("shirt","mens","Salmon Shed","item-men3","500","s","white");

createProduct("tshirt","mens","Matte Grey","tshirt1","3500","m","grey")
createProduct("tshirt","mens","Classic White Tshirt","tshirt2","3500","m","white")
createProduct("tshirt","mens","Pastel Lemon Tshirt","tshirt3","3500","m","yellow")
createProduct("tshirt","mens","Solid Black Tshirt","tshirt4","3500","m","black")
createProduct("tshirt","mens","Navy Noon Tshirt","tshirt5","3500","m","blue")
createProduct("tshirt","mens","Black Henley","tshirt6","3500","m","black")
createProduct("tshirt","mens","Pastel Grey Henley","tshirt7","3500","m","grey")
createProduct("tshirt","mens","Pastel Salmon Tshirt","tshirt8","3500","m","pink")
createProduct("tshirt","mens","Maroon Tshirt","tshirt9","3500","m","red")
createProduct("tshirt","mens","Pastel Green Tshirt","tshirt10","3500","m","green")
createProduct("tshirt","mens","Maroon Henley","tshirt11","3500","m","red");

createProduct("tshirt","womens","AF T-Shirt","item-women","500","l","priceink");
createProduct("tshirt","womens","Insta Filter","item-women2","500","l","priceink");
createProduct("tshirt","womens","Panda Cute","item-women3","500","l","priceink");

createProduct("jacket","womens","Wine Red","jacket1-2","5600","s","red");
createProduct("jacket","womens","Maroon Sew","jacket2-2","5600","s","red");
createProduct("jacket","womens","Raw Brown","jacket3-2","5600","s","brown");
createProduct("jacket","womens","Baby Pink","jacket4-2","5600","s","pink");
createProduct("jacket","womens","Silver Hay","jacket5-2","5600","s","grey");
createProduct("jacket","womens","Shade Grey","jacket6-2","5600","s","grey");
createProduct("jacket","womens","Solid Black","jacket7-2","5600","s","black");
createProduct("jacket","womens","Galaxy Black","jacket8-2","5600","s","black");
createProduct("jacket","womens","Hay Brown","jacket9-2","5600","s","brown");

createProduct("jacket","mens","Long Coat","mjacket1","5600","s","black");
createProduct("jacket","mens","Army Jacket","mjacket2","5600","s","red");
createProduct("jacket","mens","Cota","mjacket3","5600","s","red");
createProduct("jacket","mens","Flash Jack","mjacket4","5600","s","red");
createProduct("jacket","mens","Knitter Dan","mjacket5","5600","s","red");
createProduct("jacket","mens","Knitters Jack","mjacket6","5600","s","red");
createProduct("jacket","mens","Oxford Jacket","mjacket7","5600","s","red");
createProduct("jacket","mens","Button Up","mjacket8","5600","s","red")

createProduct("boots","mens","Conad","shoes1-1","5600","s","white");
createProduct("boots","mens","Grey Sneakers","shoes2-1","5600","s","grey");
createProduct("boots","mens","High Tops","shoes3-1","5600","s","brown");
createProduct("boots","mens","Sports","shoes4-1","5600","s","red");
createProduct("boots","mens","Matte Bells","shoes5-1","5600","s","black");
createProduct("boots","mens","Rubims","shoes7-1","5600","s","black");
createProduct("boots","mens","Traverller","shoes8-1","5600","s","brown");
createProduct("boots","mens","Menalad","shoes9-1","5600","s","white");
createProduct("boots","mens","Rubims","shoes10-1","5600","s","khaki");
createProduct("boots","mens","Menalad","shoes11-1","5600","s","black");


createProduct("heels","womens","Gracia Si","heel1","5600","s","white");
createProduct("heels","womens","Gem Toels","heel2","5600","s","white");
createProduct("heels","womens","Sizzle","heel3","5600","s","white");
createProduct("heels","womens","Executive","heel4","5600","s","white");
createProduct("heels","womens","Parallels","heel5","5600","s","white");
createProduct("heels","womens","Point Elcama","heel6","5600","s","white");
createProduct("heels","womens","Weaven Heaven","heel7","5600","s","white");
createProduct("heels","womens","Sin Fruit","heel8","5600","s","white");

createProduct("bags","womens","Brown Velet","purse1","5600","","brown");
createProduct("bags","womens","Chain Melame","purse2","5600","","white");
createProduct("bags","womens","Classic Black","purse3","5600","","black");
createProduct("bags","womens","Madame Carry","purse4","5600","","black");
createProduct("bags","womens","Chain Black Rose","purse5","5600","","black");
createProduct("bags","womens","Cross Black","purse6","5600","","black");
createProduct("bags","womens","Cross Offwhite","purse7","5600","","white");
createProduct("bags","womens","Black Rose","purse8","5600","","black");
createProduct("bags","womens","Pearl White","purse9","5600","","white");
createProduct("bags","womens","Case Capade","purse10","5600","","black");

createProduct("bags","mens","Duffle Charm","mensbag1","5600","s","black");
createProduct("bags","mens","Laptop Traverller","mensbag2","5600","s","black");
createProduct("bags","mens","Cross","mensbag3","5600","s","black");
createProduct("bags","mens","Messenger","mensbag4","5600","s","black");
createProduct("bags","mens","Clean","mensbag5","5600","s","black");
createProduct("bags","mens","Bagpack","mensbag6","5600","s","black");
createProduct("bags","mens","Duffle Small","mensbag7","5600","s","black");
createProduct("bags","mens","Traverller","mensbag8","5600","s","black");
createProduct("bags","mens","Silver","mensbag9","5600","s","white");
createProduct("bags","mens","Maroon","mensbag10","5600","s","red");

createProduct("fragnance","womens","Laevs","wperfume1","2500","m","white");
createProduct("fragnance","womens","Laevs","wperfume2","2500","m","white");
createProduct("fragnance","womens","Laevs","wperfume3","2500","m","white");
createProduct("fragnance","womens","Laevs","wShirtperfume4","2500","m","white");
createProduct("fragnance","womens","Laevs","wperfume5","2500","m","white");
createProduct("fragnance","womens","Laevs","wperfume6","2500","m","white");
createProduct("fragnance","womens","Laevs","wperfume7","2500","m","white");

createProduct("fragnance","mens","Laevs","mperfume1","2500","m","white");
createProduct("fragnance","mens","Laevs","mperfume2","2500","m","white");
createProduct("fragnance","mens","Laevs","mperfume3","2500","m","white");
createProduct("fragnance","mens","Laevs","mperfume4","2500","m","white");
createProduct("fragnance","mens","Laevs","mperfume5","2500","m","white");

// These are the Generic Filter Functions That Will Filter The Items On The Array Of Objects
var gender = (inp) => { return currentArr.filter(item => item.gender === inp); }
var type = (inp) => { return typeArr.filter(item => item.type === inp); }
var size = (inp) => { return currentArr.filter(item => item.size === inp); }
var color = (inp) => { return currentArr.filter(item => item.color === inp); }
typeArr = mainArray;
currentArr = mainArray;
//This Function Display All The Elements of Array Using the .map method on array we pass 'arr'
//and By Using Template Strings Outputs The Data On The Screen 
showProducts = (arr) => {
document.querySelector(".rightMainContent").innerHTML = arr.map(item => `<div class="item"><img src="img/products/${item.image}.jpg">
<div class="description"><h1>${item.name}</h1><h3>${item.gender} ${item.type}</h3></div></div>`).join('');
}
//Initially Displaying Products
showProducts(currentArr);
//This Function Evaluates The URL For id Attribute thrown by Index.html
// a href="shop.html#'idname'"
(()=>{
    if(document.location.href.includes('men')){
        currentArr =  gender("mens");
        showProducts(currentArr);
    }
    else if (document.location.href.includes("women")){
        currentArr = gender("womens");
        showProducts(currentArr);    
    }
    else if (document.location.href.includes("dress")){
        currentArr = type("dress");
        showProducts(currentArr);    
    }
    else if (document.location.href.includes("fragnance")){
        currentArr = type("fragnance");
        showProducts(currentArr);    
    }
    else if (document.location.href.includes("jackets")){
        currentArr = type("jacket");
        showProducts(currentArr);    
    }
    else if (document.location.href.includes("shirt")){
        currentArr = type("shirt");
        showProducts(currentArr);
    }
    else if (document.location.href.includes("boots")){
     currentArr = type("boots");
     showProducts(currentArr);
     }
    else if (document.location.href.includes("tops")){
    currentArr = gender("womens").filter((a)=>a.type == "tshirt");
     showProducts(currentArr);
     }
    else if (document.location.href.includes("heels")){
    currentArr = type("heels");
    showProducts(currentArr);
    }
    else if (document.location.href.includes("mfrag")){
    currentArr = gender("mens").filter((a)=>a.type == "fragnance");
    showProducts(currentArr);
    }
    else if (document.location.href.includes("wfrag")){
    currentArr = gender("womens").filter((a)=>a.type == "fragnance");
    showProducts(currentArr);
    }
    else if (document.location.href.includes("mjacket")){ 
    currentArr = gender("mens").filter((a)=>a.type == "jacket");
    showProducts(currentArr);
    }
    else if (document.location.href.includes("wjacket")){ 
    currentArr = gender("womens").filter((a)=>a.type == "jacket");
    showProducts(currentArr);
    }

    else if (document.location.href.includes("mbag")){ 
        currentArr = gender("mens").filter((a)=>a.type == "bags");
    showProducts(currentArr);
    }
    else if (document.location.href.includes("wbag")){ 
    currentArr = gender("womens").filter((a)=>a.type == "bags");
    showProducts(currentArr);
    }
    currentArr = mainArray;
})();
//this IIFE(implicitly invoked function expression) sets the color pickers color according to their ids
// To Add Color Just Set The Id of the Div the Color You Want to Set and add class 'colorpicker'
// <div class="colorpicker" id="white"></div>
(()=> {
let nodeList = [...document.querySelectorAll(".colorpicker")];
nodeList.map((a)=>a.style.backgroundColor = a.id);
})();

(()=> {
let nodeList = document.querySelectorAll(".item");
Array.prototype.slice.call(nodeList).map((a)=> a.style.backgroundColor = a.id);
})();
(()=>{ document.querySelector('#categoryDrop').innerHTML = types.map((a)=> `<h4>${a}</h4>`).join('')})();

//This Code Uses The Event Method To Pick The H4 Element and Run The Filter Functions on them
//This Method Keeps The Dom Clean For Less Ambiguity
$(".sidebar h4,.colorpicker").click(function(event) {
    var text = event.target.innerText;
    	var a = event.target.id; //this is just for using color filter
        if(sex.includes(text)) {
   	 			typeArr = gender(text);
                showProducts(typeArr); 		
   	 			}
    	else if(sizes.includes(text)) {
            	showProducts(size(text));
    			}
        else if (colors.includes(a)) {
                showProducts( color(a));
            }
        else  if(types.includes(text)) 
            {
                showProducts(type(text.toLowerCase()));
                currentArr = type(text.toLowerCase());
                }
//This IIFE Replaces The Empty Array With a PlaceHolder Text
    (function(){
        //currentArr = mainArray;
	let a = document.querySelector(".rightMainContent").innerHTML;
	if (a == "") {
    document.querySelector('.error').textContent = "Sorry No Product Matcing Your Criteria";
	showProducts(currentArr);
    }
    })();
    $(".removeFilters").click(()=> {
        showProducts(currentArr);
    });
    });