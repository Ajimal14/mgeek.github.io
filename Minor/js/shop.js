var mainArray = [];
var currentArr = [];
var product = function(type,gender,name,image,price,size,color){
this.type = type;
this.gender = gender;
this.name = name;
this.image = image;
this.price = price;
this.size = size;
this.color = color;
}
var createProduct = (type,gender,name,image,price,size,color) => {
	var ob = new product(type,gender,name,image,price,size,color);
	mainArray.push(ob);
}
createProduct("shoes","male","el parado","one","2500","s","24","red");
createProduct("shirt","male","el darado","one","3500","m","24","pink");
createProduct("shirt","male","el farado","one","500","s","24","white");
createProduct("shoes","female","el garado","one","5600","s","24","white");
createProduct("socks","female","el harado","one","9800","m","24","red");
createProduct("shirt","female","el jarado","one","1000","s","24","pink");
createProduct("shirt","female","el karado","one","500","l","24","pink");
createProduct("shirt","female","el qarado","one","2500","m","24","pink");
createProduct("shoes","female","el warado","one","2500","m","24","white");
currentArr = mainArray;
var type = (inp) => { return currentArr.filter(item => item.type === inp); }
var size = (inp) => { return currentArr.filter(item => item.size === inp); }
var color = (inp) => { return currentArr.filter(item => item.color === inp); }
var gender = (inp) => { return mainArray.filter(item => item.gender === inp); }
showProducts = (arr) => {
document.querySelector(".rightMainContent").innerHTML = arr.map(item => `<div class="item"><h1>${item.name}</h1><h3>${item.price}</h3></div>`).join('');
}
showProducts(mainArray);
//this fuckin piece of shit worked i am happy as fuck!!!!!
$(".sidebar h4").click(function(event) {
    var text = $(event.target).text();
    	if(text === 'male' || text === 'female') {
    			currentArr = gender(text);
   	 			showProducts(currentArr); 		
   	 			}
    	else if(text === 's' || text === 'm' || text === 'l' || text === 'xl') {
    			showProducts(size(text));
    			}
     	else  {
     			currentArr = type(text.toLowerCase());
    			showProducts(currentArr);
    	}
    });