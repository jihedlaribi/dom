// console.log(document)
// console.log(document.getElementById("total").innerHTML)
// console.log(document.getElementsByClassName("like"))
// console.log(document.getElementsByTagName("p"))
// console.log(document.querySelectorAll(".like"))
// console.log(document.querySelector(".like"))
const btnsAddTag = document.getElementsByClassName("plus");
const btsDelTag = document.getElementsByClassName("minus")
const btsRemoveTag = document.getElementsByClassName("delete")
const btsLikeTag = document.getElementsByClassName("like")

for (var i = 0; i < btnsAddTag.length; i++) {
    btnsAddTag[i].addEventListener("click", increment);
    btsDelTag[i].addEventListener("click", decrement);
    btsRemoveTag[i].addEventListener("click", deleteEV);
    btsLikeTag[i].addEventListener("click", likeTag);

}

function increment(event) {
    var btnPlus = event.target;
    var divElt = btnPlus.parentElement;
    var quantityTag = divElt.querySelector("p");
    var quantity = Number(quantityTag.innerHTML);
    quantity++;
    quantityTag.innerHTML = quantity;
    var priceTag = divElt.parentElement.parentElement.querySelector(".price");
    var unitPriceTag =
        divElt.parentElement.parentElement.querySelector(".unitPrice");
    var unitPrice = Number(unitPriceTag.innerHTML);
    var price = unitPrice * quantity;
    priceTag.innerHTML = price;
}

var checkTags = document.querySelectorAll(".check");
for (var j = 0; j < checkTags.length; j++) {
    checkTags[j].onclick = totalPrice;
}

function totalPrice(event) {
    var checkTag = event.target;
    var priceTag = checkTag.parentElement.parentElement.querySelector(".price");
    console.log(priceTag);
    var price = Number(priceTag.innerHTML);
    console.log(price);
    var totalTag = document.getElementById("total");

    var total = Number(totalTag.innerHTML);
    var btnPlus = checkTag.parentElement.parentElement.querySelector(".plus")
    var btnMinus = checkTag.parentElement.parentElement.querySelector(".minus")

    if (checkTag.checked === true) {
        //  total = total + priceF

        total += price;
        btnPlus.setAttribute("disabled", true);
        btnMinus.setAttribute("disabled", true);

    } else {
        total = total - price;
        btnPlus.removeAttribute("disabled")
        btnMinus.removeAttribute("disabled")
    }
    totalTag.innerHTML = total;
}

function decrement(event) {
    var btnDel = event.target;
    var divElt = btnDel.parentElement;
    var quantityTag = divElt.querySelector("p");
    var quantity = Number(quantityTag.innerHTML);
    if (quantity != 0) {
        quantity--;
    }
    quantityTag.innerHTML = quantity;
    var priceTag = divElt.parentElement.parentElement.querySelector(".price");
    var unitPriceTag =
        divElt.parentElement.parentElement.querySelector(".unitPrice");
    var unitPrice = Number(unitPriceTag.innerHTML);
    var price = unitPrice * quantity;
    priceTag.innerHTML = price;
}

function deleteEV(event) {
    var block = event.target.parentElement.parentElement.parentElement.parentElement;
    var total = Number(document.querySelector("#total").innerHTML);
    total -= Number(block.querySelector(".price").innerHTML);
    document.querySelector("#total").innerHTML = total;
    console.log(total);

    block.parentNode.removeChild(block);
}

function likeTag(event) {
    var like = event.target;
    console.log('like')
    if (like.style.color == 'red') {
        like.style.color = '#424242'
    } else {
        like.style.color = 'red'

    }



}