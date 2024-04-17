"use strict"
const productType = document.querySelectorAll(".product_type");
const productEle = document.querySelectorAll(".products__details-imgs");
const productPhoto = document.querySelectorAll(".products_photo img");
const productImg = document.querySelector(".products__img-img img");
const productImgELE = document.querySelector(".products__img-img");
const productRotate = document.querySelectorAll(".rotate img")
// change the photo line in the right side
productType.forEach(function(pro){
    let myProduct = pro.getAttribute("data-product");
    pro.addEventListener("click",function(e){
        e.preventDefault()
        removeClass()
        pro.classList.add("active");
        document.querySelector(`.${myProduct}`).classList.add("active");
         
    })

})
const removeClass = function(){
    productType.forEach(function(pro){
        pro.classList.remove("active");
    })
    productEle.forEach(function(ele){
        ele.classList.remove("active");
    })
}
// change the photo line in the left side
productPhoto.forEach(function(myphoto){
    myphoto.addEventListener("click",function(){
        let photo = this.src;
        productImg.src = photo;
        productRotate.forEach(function(prorotate){
            prorotate.src = photo;
        })
    })
})
function removeimg(imgrotate){


}

productRotate.forEach(function(img){

let imgdata = img.getAttribute("data-rotate");
img.addEventListener("click",function(){
    productImg.src = img.src;
        removeimg()
        productImg.classList.add(imgdata)
})
})
function removeimg(){
    productRotate.forEach(function(img){
    let imgdata = img.getAttribute("data-rotate");  
    productImg.classList.remove(imgdata)
    })
    
}
////related products
const relatedProductsELE = document.querySelector(".related__products");
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
function displayProductsrelated(products) {
    if (products.length > 0) {
      const product_details = products.map((product) => `
                <div class="col-6 col-md-4 col-lg-3">
                <div class=" cards__content ms-3 mb-3">
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
        relatedProductsELE.innerHTML = product_details;
    } 
  }
  displayProductsrelated(newProducts);