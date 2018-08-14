var quantities = [0, 0, 0, 0, 0];
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

        var qChoose = "q" + choice;
        var pChoose = "p" + choice;
        document.getElementById(qChoose).value = quantities[choice];
        document.getElementById(pChoose).value = "$" + prices[choice] * quantities[choice];

        name.innerHTML = choices[choice];
        count.innerHTML = qChoose + ".value";
        cost.innerHTML = pChoose + ".value";

    }
    else {

        alert("Item Already Entered!");

        quantities[choice] = quantities[choice] + quantity;

        var qChoose = "q" + choice;
        var pChoose = "p" + choice;
        document.getElementById(qChoose).value = quantities[choice];
        document.getElementById(pChoose).value = "$" + prices[choice] * quantities[choice];

    }
    var out = 0;
    for (var i = 0; i < 5; i++) {
        out = out + prices[i] * quantities[i];
    }
    document.getElementById("subtotal").innerText = "Subtotal: $" + out

}