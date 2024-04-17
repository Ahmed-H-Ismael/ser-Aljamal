"use strict"
const sidebar = document.querySelector(".header__sidebar");
const navBar = document.querySelector(".header__ul");
const overLay = document.querySelector(".overlay")
const close = document.querySelector(".close");
const back = document.querySelector(".back")
const arrowRight = document.querySelector(".arrow-right")
const hairHover = document.querySelector(".hair-hover")
const category = document.querySelector(".header__category")
const navBtn= document.querySelector(".navsearch")
const headerLogo= document.querySelector(".header__logo .container")
const navbarSearch= document.querySelector(".navbar-search")

const priceLabel = document.querySelector(".price-value")
const plusBtn = document.querySelector(".plus")
const minusBtn = document.querySelector(".minus");
const inputLabel = document.querySelector(".input_checkout")
const pluscheckoutBTN = document.querySelector(".plus_checkout")
const minuscheckoutBTN = document.querySelector(".minus_checkout");
const countProducts = document.querySelector(".count");
const cardBtn = document.querySelector(".cart-shopping-link")
const shoppingEle = document.querySelector(".header__card-shopping");
const backBtn = document.querySelector(".back-cart")
//body function//
function hiddenbody(){
    document.querySelector("body").style.overflowY = 'hidden';
}
function visiblebody(){
    document.querySelector("body").style.overflowY = 'visible';
}
///overlay&navbar function
function addActive(){
    navBar.classList.add("active");
    overLay.classList.add("active");
} 
function removeActive(){
    navBar.classList.remove("active");
    overLay.classList.remove("active")
} 
// sidebar function
sidebar.addEventListener("click",function(){
    addActive()
    hiddenbody()
})
close.addEventListener("click",removeActive)

overLay.addEventListener("click",removeActive,visiblebody)

hairHover.addEventListener("mouseover",function(){
    category.classList.add("active")
})
category.addEventListener("mouseleave",function(){
    this.classList.remove("active")
})
arrowRight.addEventListener("click",function(){
    category.classList.add("active")
})

back.addEventListener("click",function(){
    category.classList.remove("active")  
})

back.addEventListener("click",function(){
    category.classList.remove("active")
})
navBtn.addEventListener("click",function(){
navbarSearch.classList.toggle("active");
headerLogo.classList.toggle("white")
})
// card function
cardBtn.addEventListener('click',function(){
    shoppingEle.classList.add("active");
    overLay.classList.add("active");
    hiddenbody()
})
backBtn.addEventListener("click",function(){
    shoppingEle.classList.remove("active");
    overLay.classList.remove("active");
    visiblebody()
})
overLay.addEventListener("click",function(){
    shoppingEle.classList.remove("active");
    overLay.classList.remove("active");
    visiblebody()
})
let myPrice = 0
let mycheckOut = 0
plusBtn.addEventListener("click",function(){
    myPrice = myPrice + 1
    priceLabel.value = myPrice
    countProducts.textContent = myPrice
})
minusBtn.addEventListener("click",function(){
    if(myPrice > 0){
        myPrice = myPrice - 1
        priceLabel.value = myPrice;
        countProducts.textContent = myPrice
    }
})
pluscheckoutBTN.addEventListener("click",function(){
    mycheckOut = mycheckOut + 1
    inputLabel.value = mycheckOut
})
minuscheckoutBTN.addEventListener("click",function(){
    if(mycheckOut > 0){
        mycheckOut = mycheckOut - 1
        inputLabel.value = mycheckOut;
    }
})
