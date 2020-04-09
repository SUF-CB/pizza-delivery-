var products; // declaring variables 
var quantities;
var price;

products = [];
quantities = [];
price = [];


function addCheese(){ // when the user picks cheese it adds it to the order
 products.push('Cheese');
  quantities.push(parseInt(document.getElementById('item2quantity').value));
 price.push("9.50");
  displayCart(); // displays cheese in the cart if the user picks it 
}
function addPepperoni(){
  products.push("Pepperoni ");
   quantities.push(parseInt(document.getElementById('item2quantity').value));
  price.push("13.00");
   displayCart();
 }

 function addFishcatch(){
   products.push("Fish Catch ");
   quantities.push(parseInt(document.getElementById('item3quantity').value));
   price.push("12.50");
   displayCart();
 }



 function addvegeterian(){
  products.push("vegeterian");
  quantities.push(parseInt(document.getElementById('extraitem1quantity').value));
  price.push("11.50");
  displayCart();
}


function addCaesarSalad(){
  products.push("Caesar Salad");
  quantities.push(parseInt(document.getElementById('extraitem2quantity').value));
  price.push("4.95");
  displayCart();
}

function addRusticChips(){
  products.push("Rustic Chips");
  quantities.push(parseInt(document.getElementById('extraitem2quantity').value));
  price.push("3.95");
  displayCart();
}

function addWildgarlicbread(){
  products.push("Wild garlic bread");
  quantities.push(parseInt(document.getElementById('extraitem2quantity').value));
  price.push("3.75");
  displayCart();

}
function displayCart(){
    let cartdata = '<table><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>'; 
    let total = 0;
  for (let i=0; i<products.length; i++){
    total += quantities[i] * price[i];
    cartdata += "<tr><td>" + products[i] + "</td><td>" + quantities[i] + "</td><td>" + price[i] + "</td><td>" + quantities[i] * price[i] + "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
  }
  cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>';
  document.getElementById('cart').innerHTML = cartdata
}


function delElement(a){
  products.splice(a, 1);
  quantities.splice(a, 1);
  price.splice(a, 1);
  displayCart()
  
}
