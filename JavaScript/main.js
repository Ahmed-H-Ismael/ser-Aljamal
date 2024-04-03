"use strict"
const sidebar = document.querySelector(".header__sidebar");
const navBar = document.querySelector(".header__ul");
const overLay = document.querySelector(".overlay")
const close = document.querySelector(".close");
const back = document.querySelector(".back")
const arrowRight = document.querySelector(".arrow-right")
const hairHover = document.querySelector(".hair-hover")
const category = document.querySelector(".header__category")
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.9" d="M16.3897 2.90675C15.6022 2.90711 14.8231 3.06857 14.1002 3.38121C13.3774 3.69384 12.7262 4.15105 12.1866 4.72469L12.143 4.76832L12.0994 4.72469C11.5595 4.1504 10.9077 3.69274 10.1843 3.3799C9.46077 3.06706 8.6809 2.90567 7.89268 2.90567C7.10446 2.90567 6.32459 3.06706 5.60111 3.3799C4.87763 3.69274 4.22586 4.1504 3.68597 4.72469C2.57867 5.90766 1.96259 7.46739 1.96259 9.08774C1.96259 10.7081 2.57867 12.2678 3.68597 13.4508L4.25317 14.0471L4.30407 14.098L11.6704 20.3662C11.8021 20.4789 11.9697 20.5408 12.143 20.5408C12.3163 20.5408 12.484 20.4789 12.6157 20.3662L19.9747 14.098L20.0329 14.0471L20.6001 13.4508C21.7074 12.2678 22.3234 10.7081 22.3234 9.08774C22.3234 7.46739 21.7074 5.90766 20.6001 4.72469C20.0581 4.1522 19.4054 3.69583 18.6816 3.38332C17.9578 3.07081 17.1781 2.90868 16.3897 2.90675ZM19.5457 12.4473L19.0075 13.0145L12.143 18.8319L5.27849 13.0145L4.7331 12.4473C3.88518 11.534 3.41395 10.3339 3.41395 9.08774C3.41395 7.84154 3.88518 6.64144 4.7331 5.72819C5.13776 5.29671 5.62661 4.9528 6.16942 4.71769C6.71224 4.48258 7.2975 4.36128 7.88904 4.36128C8.48059 4.36128 9.06585 4.48258 9.60866 4.71769C10.1515 4.9528 10.6403 5.29671 11.045 5.72819L11.6194 6.32448C11.6873 6.39485 11.7686 6.45083 11.8586 6.48907C11.9485 6.5273 12.0453 6.54701 12.143 6.54701C12.2408 6.54701 12.3375 6.5273 12.4275 6.48907C12.5174 6.45083 12.5987 6.39485 12.6666 6.32448L13.2338 5.72819C13.6384 5.29671 14.1273 4.9528 14.6701 4.71769C15.2129 4.48258 15.7982 4.36128 16.3897 4.36128C16.9813 4.36128 17.5665 4.48258 18.1093 4.71769C18.6522 4.9528 19.141 5.29671 19.5457 5.72819C20.3968 6.63984 20.8701 7.84055 20.8701 9.08774C20.8701 10.3349 20.3968 11.5356 19.5457 12.4473Z" />
                            </svg>
                            </div>
                        </div>
                        <img src="${product.img}" class="card-img-top" alt="makeup">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="cards__price mt-2">
                                <p class="cards__price-name mb-0">${product.nameItem}</p>
                                <p class="cards__price-price" >$ ${product.price} <del>$${product.oldPrice}</del></p>
                            </div>
                            <div  class="cards__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 18">
                                    <path d="M18.2707 4.47366H14.9972V2.32768C14.9972 1.09101 14.0152 0.108948 12.7785 0.108948H7.03161C5.79494 0.108948 4.81288 1.09101 4.81288 2.32768V4.47366H1.53934C1.13924 4.47366 0.81189 4.80102 0.81189 5.20112V13.5304C0.81189 15.5673 2.44866 17.2041 4.48552 17.2041H15.3246C17.3614 17.2041 18.9982 15.5673 18.9982 13.5304V5.20112C18.9982 4.80102 18.6708 4.47366 18.2707 4.47366ZM6.26778 2.32768C6.26778 1.89121 6.59514 1.56385 7.03161 1.56385H12.7785C13.215 1.56385 13.5423 1.89121 13.5423 2.32768V4.47366H6.26778V2.32768ZM17.5433 13.5304C17.5433 14.7671 16.5612 15.7492 15.3246 15.7492H4.48552C3.24886 15.7492 2.26679 14.7671 2.26679 13.5304V5.92857H4.81288V7.38347C4.81288 7.78357 5.14023 8.11093 5.54033 8.11093C5.94043 8.11093 6.26778 7.78357 6.26778 7.38347V5.92857H13.5423V7.38347C13.5423 7.78357 13.8697 8.11093 14.2698 8.11093C14.6699 8.11093 14.9972 7.78357 14.9972 7.38347V5.92857H17.5433V13.5304Z"/>
                                </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.9" d="M16.3897 2.90675C15.6022 2.90711 14.8231 3.06857 14.1002 3.38121C13.3774 3.69384 12.7262 4.15105 12.1866 4.72469L12.143 4.76832L12.0994 4.72469C11.5595 4.1504 10.9077 3.69274 10.1843 3.3799C9.46077 3.06706 8.6809 2.90567 7.89268 2.90567C7.10446 2.90567 6.32459 3.06706 5.60111 3.3799C4.87763 3.69274 4.22586 4.1504 3.68597 4.72469C2.57867 5.90766 1.96259 7.46739 1.96259 9.08774C1.96259 10.7081 2.57867 12.2678 3.68597 13.4508L4.25317 14.0471L4.30407 14.098L11.6704 20.3662C11.8021 20.4789 11.9697 20.5408 12.143 20.5408C12.3163 20.5408 12.484 20.4789 12.6157 20.3662L19.9747 14.098L20.0329 14.0471L20.6001 13.4508C21.7074 12.2678 22.3234 10.7081 22.3234 9.08774C22.3234 7.46739 21.7074 5.90766 20.6001 4.72469C20.0581 4.1522 19.4054 3.69583 18.6816 3.38332C17.9578 3.07081 17.1781 2.90868 16.3897 2.90675ZM19.5457 12.4473L19.0075 13.0145L12.143 18.8319L5.27849 13.0145L4.7331 12.4473C3.88518 11.534 3.41395 10.3339 3.41395 9.08774C3.41395 7.84154 3.88518 6.64144 4.7331 5.72819C5.13776 5.29671 5.62661 4.9528 6.16942 4.71769C6.71224 4.48258 7.2975 4.36128 7.88904 4.36128C8.48059 4.36128 9.06585 4.48258 9.60866 4.71769C10.1515 4.9528 10.6403 5.29671 11.045 5.72819L11.6194 6.32448C11.6873 6.39485 11.7686 6.45083 11.8586 6.48907C11.9485 6.5273 12.0453 6.54701 12.143 6.54701C12.2408 6.54701 12.3375 6.5273 12.4275 6.48907C12.5174 6.45083 12.5987 6.39485 12.6666 6.32448L13.2338 5.72819C13.6384 5.29671 14.1273 4.9528 14.6701 4.71769C15.2129 4.48258 15.7982 4.36128 16.3897 4.36128C16.9813 4.36128 17.5665 4.48258 18.1093 4.71769C18.6522 4.9528 19.141 5.29671 19.5457 5.72819C20.3968 6.63984 20.8701 7.84055 20.8701 9.08774C20.8701 10.3349 20.3968 11.5356 19.5457 12.4473Z" />
                            </svg>
                            </div>
                        </div>
                        <img src="${product.img}" class="card-img-top" alt="makeup">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="cards__price mt-2">
                                <p class="cards__price-name mb-0">${product.nameItem}</p>
                                <p class="cards__price-price" >$ ${product.price} <del>$${product.oldPrice}</del></p>
                            </div>
                            <div  class="cards__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 18">
                                    <path d="M18.2707 4.47366H14.9972V2.32768C14.9972 1.09101 14.0152 0.108948 12.7785 0.108948H7.03161C5.79494 0.108948 4.81288 1.09101 4.81288 2.32768V4.47366H1.53934C1.13924 4.47366 0.81189 4.80102 0.81189 5.20112V13.5304C0.81189 15.5673 2.44866 17.2041 4.48552 17.2041H15.3246C17.3614 17.2041 18.9982 15.5673 18.9982 13.5304V5.20112C18.9982 4.80102 18.6708 4.47366 18.2707 4.47366ZM6.26778 2.32768C6.26778 1.89121 6.59514 1.56385 7.03161 1.56385H12.7785C13.215 1.56385 13.5423 1.89121 13.5423 2.32768V4.47366H6.26778V2.32768ZM17.5433 13.5304C17.5433 14.7671 16.5612 15.7492 15.3246 15.7492H4.48552C3.24886 15.7492 2.26679 14.7671 2.26679 13.5304V5.92857H4.81288V7.38347C4.81288 7.78357 5.14023 8.11093 5.54033 8.11093C5.94043 8.11093 6.26778 7.78357 6.26778 7.38347V5.92857H13.5423V7.38347C13.5423 7.78357 13.8697 8.11093 14.2698 8.11093C14.6699 8.11093 14.9972 7.78357 14.9972 7.38347V5.92857H17.5433V13.5304Z"/>
                                </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.9" d="M16.3897 2.90675C15.6022 2.90711 14.8231 3.06857 14.1002 3.38121C13.3774 3.69384 12.7262 4.15105 12.1866 4.72469L12.143 4.76832L12.0994 4.72469C11.5595 4.1504 10.9077 3.69274 10.1843 3.3799C9.46077 3.06706 8.6809 2.90567 7.89268 2.90567C7.10446 2.90567 6.32459 3.06706 5.60111 3.3799C4.87763 3.69274 4.22586 4.1504 3.68597 4.72469C2.57867 5.90766 1.96259 7.46739 1.96259 9.08774C1.96259 10.7081 2.57867 12.2678 3.68597 13.4508L4.25317 14.0471L4.30407 14.098L11.6704 20.3662C11.8021 20.4789 11.9697 20.5408 12.143 20.5408C12.3163 20.5408 12.484 20.4789 12.6157 20.3662L19.9747 14.098L20.0329 14.0471L20.6001 13.4508C21.7074 12.2678 22.3234 10.7081 22.3234 9.08774C22.3234 7.46739 21.7074 5.90766 20.6001 4.72469C20.0581 4.1522 19.4054 3.69583 18.6816 3.38332C17.9578 3.07081 17.1781 2.90868 16.3897 2.90675ZM19.5457 12.4473L19.0075 13.0145L12.143 18.8319L5.27849 13.0145L4.7331 12.4473C3.88518 11.534 3.41395 10.3339 3.41395 9.08774C3.41395 7.84154 3.88518 6.64144 4.7331 5.72819C5.13776 5.29671 5.62661 4.9528 6.16942 4.71769C6.71224 4.48258 7.2975 4.36128 7.88904 4.36128C8.48059 4.36128 9.06585 4.48258 9.60866 4.71769C10.1515 4.9528 10.6403 5.29671 11.045 5.72819L11.6194 6.32448C11.6873 6.39485 11.7686 6.45083 11.8586 6.48907C11.9485 6.5273 12.0453 6.54701 12.143 6.54701C12.2408 6.54701 12.3375 6.5273 12.4275 6.48907C12.5174 6.45083 12.5987 6.39485 12.6666 6.32448L13.2338 5.72819C13.6384 5.29671 14.1273 4.9528 14.6701 4.71769C15.2129 4.48258 15.7982 4.36128 16.3897 4.36128C16.9813 4.36128 17.5665 4.48258 18.1093 4.71769C18.6522 4.9528 19.141 5.29671 19.5457 5.72819C20.3968 6.63984 20.8701 7.84055 20.8701 9.08774C20.8701 10.3349 20.3968 11.5356 19.5457 12.4473Z" />
                            </svg>
                            </div>
                        </div>
                        <img src="${product.img}" class="card-img-top" alt="makeup">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="cards__price mt-2">
                                <p class="cards__price-name mb-0">${product.nameItem}</p>
                                <p class="cards__price-price" >$ ${product.price} <del>$${product.oldPrice}</del></p>
                            </div>
                            <div  class="cards__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 18">
                                    <path d="M18.2707 4.47366H14.9972V2.32768C14.9972 1.09101 14.0152 0.108948 12.7785 0.108948H7.03161C5.79494 0.108948 4.81288 1.09101 4.81288 2.32768V4.47366H1.53934C1.13924 4.47366 0.81189 4.80102 0.81189 5.20112V13.5304C0.81189 15.5673 2.44866 17.2041 4.48552 17.2041H15.3246C17.3614 17.2041 18.9982 15.5673 18.9982 13.5304V5.20112C18.9982 4.80102 18.6708 4.47366 18.2707 4.47366ZM6.26778 2.32768C6.26778 1.89121 6.59514 1.56385 7.03161 1.56385H12.7785C13.215 1.56385 13.5423 1.89121 13.5423 2.32768V4.47366H6.26778V2.32768ZM17.5433 13.5304C17.5433 14.7671 16.5612 15.7492 15.3246 15.7492H4.48552C3.24886 15.7492 2.26679 14.7671 2.26679 13.5304V5.92857H4.81288V7.38347C4.81288 7.78357 5.14023 8.11093 5.54033 8.11093C5.94043 8.11093 6.26778 7.78357 6.26778 7.38347V5.92857H13.5423V7.38347C13.5423 7.78357 13.8697 8.11093 14.2698 8.11093C14.6699 8.11093 14.9972 7.78357 14.9972 7.38347V5.92857H17.5433V13.5304Z"/>
                                </svg>
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
// function removeActive(){
//     listarr.forEach(function(active){
//         active.classList.remove("active")
//     })
//     listsales.forEach(function(active){
//         active.classList.remove("active")
//     })
//     listTreanding.forEach(function(active){
//         active.classList.remove("active")
//     })
// }