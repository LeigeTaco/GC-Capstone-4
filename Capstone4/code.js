﻿var quantities = [0, 0, 0, 0, 0];
var choices = ["Coke", "Pepsi", "Royal Crown", "Ubuntu", "Shinola"];
var prices = [2.00, 2.00, 1.50, 3.00, 2.50];
var rowC = [0, 0, 0, 0, 0];
var cRow = 1;
function addToCart() {

    var quantity = parseInt(document.getElementById("quantity").value);
    var choice = parseInt(document.getElementById("choice").value);

    var list = document.getElementById("shopList");

    if (quantities[choice] === 0) {

        var row = list.insertRow(cRow);
        var name = row.insertCell(0);
        var count = row.insertCell(1);
        var cost = row.insertCell(2);

        quantities[choice] = quantities[choice] + quantity;
        rowC[choice] = cRow;
        cRow++;

        name.innerHTML = choices[choice];
        count.innerHTML = quantities[choice];
        cost.innerHTML = "$" + prices[choice] * quantities[choice]

    }
    else {

        alert("Item Already Entered!");
        //document.getElementById("shopList").innerHTML.getElementById("name").innerHTML = choices[choice];
        //document.getElementById("shopList").getElementById("count").innerHTML = quantities[choice];
        //document.getElementById("shopList").getElementById("sub").innerHTML = "$" + prices[choice] * quantities[choice];

    }
    var out = 0;
    for (var i = 0; i < 5; i++) {
        out = out + prices[i] * quantities[i];
    }
    document.getElementById("subtotal").innerText = "Subtotal: $" + out

}