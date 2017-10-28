var item = 0;
var quantity = 0;
var additionalFlavors = 0
var order = {}
var jsonOrder = 0 
var addOption1 = 0
var addOption2 = 0
var cart = [];

function changeProductSing() {
	document.getElementById("product-pic").src = "one_birthday.png";
	document.getElementById("option1").disabled=true;
	document.getElementById("option2").disabled=true;
	item = "Birthday Cake, One-pack";
	addOption1 = "none";
	addOption2 = "none";
}

function changeProductSix() {
	document.getElementById("product-pic").src = "birthday_cake.png";
	document.getElementById("option1").disabled=false;
	document.getElementById("option2").disabled=false;
	item = "Birthday Cake, Six-pack";
}

function changeProductTwelve() {
	document.getElementById("product-pic").src = "birthday_cake.png";
	document.getElementById("option1").disabled=false;
	document.getElementById("option2").disabled=false;
	item = "Birthday Cake, Twelve-pack";
}

function setaddOption1() {
	var obj = document.getElementById("option1");
	addOption1 = obj.options[obj.selectedIndex].text;
}

function setaddOption2() {
	var obj = document.getElementById("option2");
	addOption2 = obj.options[obj.selectedIndex].text;
}

function setQuantity() {
	var obj = document.getElementById("quantity");
	quantity = obj.options[obj.selectedIndex].text;
}

function newOrder() {
	order = [{product:item, number: quantity, option1: addOption1, option2: addOption2}];
	localStorage.setItem("cart", JSON.stringify(order));
}





