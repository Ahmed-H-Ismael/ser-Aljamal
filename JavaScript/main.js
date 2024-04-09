"use strict"

// new products function
const productsarrivals = document.querySelector(".arrivals");
const productssales = document.querySelector(".sales");
const productstrending = document.querySelector(".trending");
const listarr = document.querySelectorAll(".arrive li");
const listsales = document.querySelectorAll(".sale li");
const listTreanding = document.querySelectorAll(".trend li");
const cartContent = document.querySelectorAll(".cards__content");
const allProductsimg = ["./Img/makeup-photo-1.jpg","./Img/makeup-photo-2.jpg","./Img/makeup-photo-3.jpg"];
const newProducts =[
    {
        id: 1,
        name: "Shampoo-Anti Dandruff",
        mainCategory: "skin",
        img: [allProductsimg[0]],
        price:29999,
        nameItem:"laura chouette",
        oldPrice:31999,
        button:"collapseOne"
    },
    {
        id: 2,
        name: "Shampoo-Anti Dandruff",
        mainCategory: "hair",
        subCategory: "Anti Dandruff & Hair Fall",
        img: [allProductsimg[1]],
        price:29999,
        nameItem:"laura chouette",
        oldPrice:31999,
        button:"collapseOne"
    },
    {
        id: 3,
        name: "Shampoo-Beard",
        mainCategory: "nail",
        subCategory: "Beard",
        img: [allProductsimg[2]],
        price:29999,
        nameItem:"laura chouette",
        oldPrice:31999,
        button:"collapseOne"
    },
    {
        id: 4,
        name: "Shampoo-Tonic",
        mainCategory: "makeup",
        subCategory: "Tonic",
        img: [allProductsimg[0]],
        price:29999,
        nameItem:"laura chouette",
        oldPrice:31999,
        button:"collapseOne"
    },
    {
        id: 5,
        name: "Shampoo-ShampooColor",
        mainCategory: "health&hygiene",
        subCategory: "Shampoo Color",
        img: [allProductsimg[1]],
        price:29999,
        nameItem:"laura chouette",
        oldPrice:31999,
        button:"collapseOne"
    },
    {
        id: 6,
        name: "conditioner-Anti Dandruff",
        mainCategory: "fregance",
        subCategory: "Anti Dandruff & Hair Fall",
        img: [allProductsimg[2]],
        price:29999,
        nameItem:"laura chouette",
        oldPrice:31999,
        button:"collapseTwo"
    },
]
function displayProductsArrivals(products) {
    if (products.length > 0) {
      const product_details = products.map((product) => `
                <div class="col">
                <div class=" cards__content ms-3">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <p class="cards__para mb-0">free shipping</p>
                            <div class="cards__icon">
                                 <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <img src="${product.img}" class="card-img-top" alt="makeup">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="cards__price mt-2">
                                <p class="cards__price-name mb-0">${product.nameItem}</p>
                                <p class="cards__price-price" >$ ${product.price} <del>$${product.oldPrice}</del></p>
                            </div>
                            <div  class="cards__icon">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
              ).join("");
  
        productsarrivals.innerHTML = product_details;
    } else {
        productsarrivals.innerHTML = "<h3>No Products Available</h3>";
    }
  }
  function displayProductsSales(products) {
    if (products.length > 0) {
      const product_details = products.map((product) => `
                <div class="col">
                <div class=" cards__content ms-3">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <p class="cards__para mb-0">free shipping</p>
                            <div class="cards__icon">
                            <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <img src="${product.img}" class="card-img-top" alt="makeup">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="cards__price mt-2">
                                <p class="cards__price-name mb-0">${product.nameItem}</p>
                                <p class="cards__price-price" >$ ${product.price} <del>$${product.oldPrice}</del></p>
                            </div>
                            <div  class="cards__icon">
                            <i class="fa-solid fa-bag-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
              ).join("");
  
        productssales.innerHTML = product_details;
    } else {
        productssales.innerHTML = "<h3>No Products Available</h3>";
    }
  }
  function displayProductsTrending(products) {
    if (products.length > 0) {
      const product_details = products.map((product) => `
                <div class="col">
                <div class=" cards__content ms-3">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <p class="cards__para mb-0">free shipping</p>
                            <div class="cards__icon">
                            <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                        <img src="${product.img}" class="card-img-top" alt="makeup">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="cards__price mt-2">
                                <p class="cards__price-name mb-0">${product.nameItem}</p>
                                <p class="cards__price-price" >$ ${product.price} <del>$${product.oldPrice}</del></p>
                            </div>
                            <div  class="cards__icon">
                            <i class="fa-solid fa-bag-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
              ).join("");
  
        productstrending.innerHTML = product_details;
    } else {
        productstrending.innerHTML = "<h3>No Products Available</h3>";
    }
  }
listarr.forEach(function(list){
    list.addEventListener("click",function(e){ 
        removeActive()
        list.classList.add("active");
        let itemclick = this.getAttribute('data-item');
        if(itemclick === "all"){
            list.classList.add("active");
            displayProductsArrivals(newProducts);
            let child = productsarrivals.children[0];
            child.classList.remove("col-width");
            setTimeout(function(){
                location.reload();
            }, 9);
        }else{
            displayProductsArrivals(newProducts.filter((p) => p.mainCategory === itemclick));
            let child = productsarrivals.children[0];
            child.classList.add("col-width");
        }

    })
})
listsales.forEach(function(list){
    list.addEventListener("click",function(e){ 
        removeActive()
        list.classList.add("active");
        let itemclick = this.getAttribute('data-sales');
        if(itemclick === "all"){
            displayProductsSales(newProducts);
            let child = productssales.children[0];
            child.classList.remove("col-width");
            setTimeout(function(){
                location.reload();
            }, 9);
        }else{
            displayProductsSales(newProducts.filter((p) => p.mainCategory === itemclick));
            let child = productssales.children[0];
            child.classList.add("col-width");
        }
    })
})
listTreanding.forEach(function(list){
    list.addEventListener("click",function(e){  
        removeActive()
        list.classList.add("active");
        let itemclick = this.getAttribute('data-trending');
        if(itemclick === "all"){
            displayProductsTrending(newProducts);
            let child = productstrending.children[0];
            child.classList.remove("col-width");
            setTimeout(function(){
                location.reload();
            }, 9);
        }else{
            displayProductsTrending(newProducts.filter((p) => p.mainCategory === itemclick));
            let child = productstrending.children[0];
            child.classList.add("col-width");
        }

    })
})
displayProductsArrivals(newProducts);
displayProductsSales(newProducts);
displayProductsTrending(newProducts);
function removeClass(x){
    x.forEach(function(pro){
        pro.classList.remove("active")
    })
}
function removeActive(){
    listarr.forEach(function(active){
        active.classList.remove("active")
    })
    listsales.forEach(function(active){
        active.classList.remove("active")
    })
    listTreanding.forEach(function(active){
        active.classList.remove("active")
    })
}