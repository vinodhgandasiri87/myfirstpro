// Increase Quantity
function increase(button) {
    let qty = button.parentElement.querySelector(".qty");
    qty.innerText = parseInt(qty.innerText) + 1;
}

// Decrease Quantity
function decrease(button) {
    let qty = button.parentElement.querySelector(".qty");
    let value = parseInt(qty.innerText);

    if (value > 1) {
        qty.innerText = value - 1;
    }
}

// Generate Restaurant Receipt
function bill() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let food = document.getElementById("food");
    let qty = document.getElementById("qty").value;
    let address = document.getElementById("address").value;

    if(name=="" || phone=="" || qty=="" || address==""){
        alert("Please fill all details.");
        return;
    }

    let foodName = food.options[food.selectedIndex].text;
    let price = parseInt(food.value);

    let total = price * qty;

    document.getElementById("receipt").innerHTML = `
    <h2>🧾 Restaurant Receipt</h2>
    <hr>

    <p><b>Name :</b> ${name}</p>

    <p><b>Phone :</b> ${phone}</p>

    <p><b>Food :</b> ${foodName}</p>

    <p><b>Price :</b> ₹${price}</p>

    <p><b>Quantity :</b> ${qty}</p>

    <p><b>Address :</b> ${address}</p>

    <hr>

    <h2>Total Bill : ₹${total}</h2>

    <h3>✅ Thank You! Visit Again.</h3>
    `;

    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("qty").value="";
    document.getElementById("address").value="";
}

// Add to Cart Button
let cart = [];

document.querySelectorAll(".cart-btn").forEach(function(button){

    button.addEventListener("click",function(){

        let card = this.closest(".card");

        let food = card.querySelector("h3").innerText;

        let price = card.querySelector("p").innerText;

        let qty = card.querySelector(".qty").innerText;

        cart.push({
            food:food,
            price:price,
            quantity:qty
        });

        alert(food + " added to cart!");
    });

});