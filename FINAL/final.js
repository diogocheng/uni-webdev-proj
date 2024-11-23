function subchange() {

    document.getElementById("change").innerHTML = "<h1> HALlo </h1>";  /*From my point of view this line is not doing anything, but for no reason if I do not put it, it does not work.*/
    document.getElementById("change").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}


function checkcred() {

    var username = document.getElementById("username").value;
    var psw = document.getElementById("password").value;


    if (username == "admin" && psw == "123") {

        document.getElementById("loginform").action = "admin.html"


    }
    else {


        window.location = "login.html"
        alert("Wrong credentials please try again!");
    }



}
var input1 = document.getElementById("customam");
var total1 = document.getElementById("cart-subtotal")
var total2 = document.getElementById("cart-tax")
var total3 = document.getElementById("cart-total")

var a = 1;
function boxappear() {



    if (a == 1) {

        input1.style.display = "inline";

    }
    else {

        input1.style.display = "none";
    }

}

function addvalue() {


    document.getElementById("cart-subtotal").innerHTML = input1.value + "$";
    document.getElementById("cart-tax").innerHTML = input1.value * 0.05 + "$";
    document.getElementById("cart-total").innerHTML = input1.value * 1.05 + "$";
    document.getElementById("page3total").innerHTML = inpu1.value * 1.05 + "$"
    //alert( input1.value + "$ has been added to your sub-total ")

}




function ten() {
    alert("10$ has been added to your sub-total ")
    document.getElementById("cart-subtotal").innerHTML = 10;
    document.getElementById("cart-tax").innerHTML = 10 * 0.05;
    document.getElementById("cart-total").innerHTML = 10 * 1.05;
}
function tfive() {
    alert("25$ has been added to your sub-total ")
    document.getElementById("cart-subtotal").innerHTML = 25;
    document.getElementById("cart-tax").innerHTML = 25 * 0.05;
    document.getElementById("cart-total").innerHTML = 25 * 1.05;


}
function f() {
    alert("50$ has been added to your sub-total ")
    document.getElementById("cart-subtotal").innerHTML = 50;
    document.getElementById("cart-tax").innerHTML = 50 * 0.05;
    document.getElementById("cart-total").innerHTML = 50 * 1.05;

}



function terms() {
    var yes = document.getElementById("checkterms");

    if (yes.checked == true) {

        window.location = "paymentpage3.html"



    }
    else {

        window.location = "paymentpage2.html"
        alert("Please make sure to agree the terms and conditions")
    }


}

function codecheck() {




    var code = "dd"
    var code = document.getElementById("3digitcode").value;



    if (code.length == 3) {

        window.location = "paymentpage4.html";
    }
    else {
        window.location = "paymentpage3.html";
        alert("The CVV / CVC has to have 3 digits");
    }
}

function home() {


    window.location = "home.html";
}
function booking() {

    window.location = "home.html";
    alert("Reservation made with sucess!!");


}