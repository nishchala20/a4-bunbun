//define variables
var item = 0;
var quantity = 0;
var additionalFlavors = 0;
var jsonOrder = 0 ;
var addOption1 = 0;
var addOption2 = 0;
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
function updateCart()
{
	var cartArray = JSON.parse(localStorage.getItem("cart")) || [];
	var x;
	if(cartArray == []) 
		x=0;
	else {
		x=cartArray.length; 
	}

	document.getElementById("cartCount").innerHTML = x;
}
//creating final order
function newOrder() {
	var order = {"product":item, "number": quantity, "option1": addOption1, "option2": addOption2};
    var arr = JSON.parse(localStorage.getItem("cart")) || [];
    arr.push(order);
	localStorage.setItem("cart", JSON.stringify(arr));

	updateCart();
}
