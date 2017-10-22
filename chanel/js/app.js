var p = [];
var currentProducts = [];
var product = function(productMake,productName,productPrice,productImage){
this.name = productName;
this.price = productPrice;
this.image = productImage;
this.make=productMake;
  }
var createProduct = function(productMake,productName,productPrice,productImage)
{
  var ob = new product(productMake,productName,productPrice,productImage);
  p.push(ob);
}
createProduct('Chanel','Leather Jacket','35000','jean');
createProduct('Gucci','White Kicks','35000','jean');
createProduct('Nokia','Nokia 3','35000','nokia');
createProduct('Nokia','Nokia 6','55000','nokia');
createProduct('Nokia','Nokia 7','15000','nokia');
createProduct('Oneplus','Oneplus 3T','35000','one');
createProduct('Oneplus','Oneplus 2','35000','one');
createProduct('Nokia','Nokia 3','35000','nokia');
createProduct('Nokia','Nokia 6','55000','nokia');
createProduct('Nokia','Nokia 7','15000','nokia');
createProduct('Oneplus','Oneplus 3','35000','one');
createProduct('Oneplus','Oneplus 3T','35000','one'); 
createProduct('Oneplus','Oneplus 2','35000','one');
createProduct('Oneplus','Oneplus 3','35000','one');
createProduct('Oneplus','Oneplus 3T','35000','one');
createProduct('LG','LG G!','35000','one');
createProduct('LG','LG G! 5','35000','one');
createProduct('LG','LG G!5','35000','one');
createProduct('LG','LG G!','35000','one');
createProduct('LG','LG G7','35000','one');
createProduct('LG','LG G!','35000','one');
createProduct('LG','LG G!','35000','one');

//This Will Accept an Array and Display The Array Elements On Screen
var displayProduct = function(products) {
  document.querySelector('.container').innerHTML = " ";
  for(a in products){
      var temp = document.createElement('div');
      temp.className = 'productDisplay';
      temp.innerHTML = '<img src="img/'+products[a].image+'.jpg">'+"<h1>"+products[a].name+"</h1>"+"<h2>"+products[a].price+"</h2>";
      document.querySelector('.container').appendChild(temp);     
  }
}
displayProduct(p);
  currentProducts = p;
//This Will Accept a String Input and Compare it with the Make Of The Phone To Sort The Data
var findProduct = function(newProduct){
  var newArray = p.filter(function(products){return products.make == newProduct});
  currentProducts = newArray;
  displayProduct(newArray); 
  } 
//This Will Delete The Elements of The Current Array
var pop= function(){
  currentProducts.pop();
  displayProduct(currentProducts);
  }