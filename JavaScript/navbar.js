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
const countProducts = document.querySelector(".count");
const cardBtn = document.querySelector(".cart-shopping-link")
const shoppingEle = document.querySelector(".header__card-shopping");
const backBtn = document.querySelector(".back-cart")
// sidebar function
sidebar.addEventListener("click",function(){
    navBar.classList.add("active")
    document.querySelector("body").style.overflowY = 'hidden';
    overLay.classList.add("active")
})
close.addEventListener("click",function(){
    navBar.classList.remove("active");
    overLay.classList.remove("active");
    document.querySelector("body").style.overflowY = 'visible';
})
overLay.addEventListener("click",function(){
    navBar.classList.remove("active");
    this.classList.remove("active");
    document.querySelector("body").style.overflowY = 'visible';
})

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
    shoppingEle.classList.add("active")
    document.querySelector("body").style.overflowY = 'hidden';
    overLay.classList.add("active")
})
backBtn.addEventListener("click",function(){
    shoppingEle.classList.remove("active")
    document.querySelector("body").style.overflowY = 'visible';
    overLay.classList.remove("active")
})
overLay.addEventListener("click",function(){
    shoppingEle.classList.remove("active")
    document.querySelector("body").style.overflowY = 'visible';
    overLay.classList.remove("active")
})
let myPrice = 0

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
