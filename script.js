var products; // declaring variables 
var quantities;
var price;

products = []; //arrays to store these 3 values when they are picked by the user
quantities = [];
price = [];


function addCheese(){ // when the user picks cheese it adds it to the order
 products.push('Cheese');
  quantities.push(parseInt(document.getElementById('item2quantity').value));
 price.push("9.50");
  displayCart(); // displays cheese in the cart if the user picks it 
}
function addPepperoni(){ // When the user picks Pepperoni it adds it to the order
  products.push("Pepperoni ");
   quantities.push(parseInt(document.getElementById('item2quantity').value));
  price.push("13.00");
   displayCart();// displays pepperoni in the cart if the user picks it 
 }

 function addFishcatch(){// When the user picks fish catch it adds it to the order
   products.push("Fish Catch ");
   quantities.push(parseInt(document.getElementById('item3quantity').value));
   price.push("12.50");
   displayCart();// displays fish catch in the cart if the user picks it 
 }



 function addvegeterian(){// When the user picks vegeterian it adds it to the order
  products.push("vegeterian");
  quantities.push(parseInt(document.getElementById('extraitem1quantity').value));
  price.push("11.50");
  displayCart();// displays vegeterian in the cart if the user picks it 
 
}


function addCaesarSalad(){ // When the user picks caesar salad it adds it to the order
  products.push("Caesar Salad");
  quantities.push(parseInt(document.getElementById('extraitem2quantity').value));
  price.push("4.95");
  displayCart();// displays caesar salad in the cart if the user picks it 
 
}

function addRusticChips(){// When the user picks rustic chips it adds it to the order
  products.push("Rustic Chips");
  quantities.push(parseInt(document.getElementById('extraitem2quantity').value));
  price.push("3.95");
  displayCart();// displays rustic chips in the cart if the user picks it 
 
}

function addWildgarlicbread(){// When the user picks garlic bread it adds it to the order
  products.push("Wild garlic bread");
  quantities.push(parseInt(document.getElementById('extraitem2quantity').value));
  price.push("3.75");
  displayCart(); // displays wild garlic bread in the cart if the user picks it 
 

}
function displayCart(){ // displays the customers order 
    let cartdata = '<table><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>'; // the users order will displayed in a table 
    let total = 0;
  for (let i=0; i<products.length; i++){
    total += quantities[i] * price[i];
    cartdata += "<tr><td>" + products[i] + "</td><td>" + quantities[i] + "</td><td>" + price[i] + "</td><td>" + quantities[i] * price[i] + "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
  }
  cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>';// gives a total of the order so the customer knows what to pay
  document.getElementById('cart').innerHTML = cartdata
}


function delElement(a){
  products.splice(a, 1);
  quantities.splice(a, 1);
  price.splice(a, 1);
  displayCart()
  
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
