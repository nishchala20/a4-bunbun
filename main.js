//define variables
var item = 0;
var quantity = 0;
var additionalFlavors = 0
var order = {}
var jsonOrder = 0 
var addOption1 = 0
var addOption2 = 0
var cart = [];

//changing the picture & setting the item
function changeProductSing() {
	document.getElementById("product-pic").src = "images/one_birthday.png";
	document.getElementById("option1").disabled=true;
	document.getElementById("option2").disabled=true;
	item = "Birthday Cake, One-pack";
	addOption1 = "none";
	addOption2 = "none";
}

//changing the picture, setting the item, and enabling the drop-down
function changeProductSix() {
	document.getElementById("product-pic").src = "images/birthday_cake.png";
	document.getElementById("option1").disabled=false;
	document.getElementById("option2").disabled=false;
	item = "Birthday Cake, Six-pack";
}

//changing the picture, setting the item, and enabling the drop-down
function changeProductTwelve() {
	document.getElementById("product-pic").src = "images/birthday_cake.png";
	document.getElementById("option1").disabled=false;
	document.getElementById("option2").disabled=false;
	item = "Birthday Cake, Twelve-pack";
}

//setting the additional choices
function setaddOption1() {
	var obj = document.getElementById("option1");
	addOption1 = obj.options[obj.selectedIndex].text;
}

function setaddOption2() {
	var obj = document.getElementById("option2");
	addOption2 = obj.options[obj.selectedIndex].text;
}

//setting the quantity
function setQuantity() {
	var obj = document.getElementById("quantity");
	quantity = obj.options[obj.selectedIndex].text;
}

//creating final order
function newOrder() {
	order = [{product:item, number: quantity, option1: addOption1, option2: addOption2}];
	localStorage.setItem("cart", JSON.stringify(order));
}
