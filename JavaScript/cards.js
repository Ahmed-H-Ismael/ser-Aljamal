"use strict"

const  hairContent = document.querySelector(".content");
const  hairShampoo= document.querySelector(".shampoocontent");
const  hairConditioner= document.querySelector(".conditionercontent");
const  hairMask= document.querySelector(".maskcontent");
const  hairstyling= document.querySelector(".hairstylingcontent");
const  hairOil= document.querySelector(".oilcontent");
const  hairTreatment= document.querySelector(".treatmentcontent");
const checkboxes = document.querySelectorAll(".form-check-input");
const  hairheader = document.querySelector("hairheaderx");
const  parent = document.querySelectorAll(".parent");
const allProducts =[
{
    id: 1,
    name: "Shampoo-Anti Dandruff",
    mainCategory: "shampoo",
    subCategory: "AntiDandruff & HairFall",
    img: "./Img/makeup-photo-1.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 2,
    name: "Shampoo-Beard",
    mainCategory: "shampoo",
    subCategory: "beard",
    img: "./Img/makeup-photo-2.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 3,
    name: "Shampoo-Tonic",
    mainCategory: "shampoo",
    subCategory: "tonic",
    img: "./Img/makeup-photo-3.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 4,
    name: "Shampoo-ShampooColor",
    mainCategory: "shampoo",
    subCategory: "shampoo Color",
    img: "./Img/makeup-photo-1.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 5,
    name: "conditioner-Anti Dandruff",
    mainCategory: "conditioner",
    subCategory: "AntiDandruff & HairFall",
    img: "./Img/makeup-photo-2.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 6,
    name: "conditioner-Beard",
    mainCategory: "conditioner",
    subCategory: "beard",
    img: "./Img/makeup-photo-3.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 7,
    name: "mask-Beard",
    mainCategory: "mask",
    subCategory: "beard",
    img: "./Img/makeup-photo-3.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 8,
    name: "mask-hair",
    mainCategory: "mask",
    subCategory: "hair",
    img: "./Img/makeup-photo-1.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 9,
    name: "oil-Beard",
    mainCategory: "oil",
    subCategory: "beard",
    img: "./Img/makeup-photo-2.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 10,
    name: "oil-hair",
    mainCategory: "oil",
    subCategory: "hair",
    img: "./Img/makeup-photo-3.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 11,
    name: "Hair-Styling",
    mainCategory: "Hair Styling",
    subCategory: "Hair Serum",
    img: "./Img/makeup-photo-1.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 12,
    name: "Hair-Tonic",
    mainCategory: "Hair Styling",
    subCategory: "Hair Tonic",
    img: "./Img/makeup-photo-2.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 13,
    name: "Hair-Colour",
    mainCategory: "Hair Styling",
    subCategory: "Hair Colour",
    img: "./Img/makeup-photo-3.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 14,
    name: "Hair-Gel",
    mainCategory: "Hair Styling",
    subCategory: "Hair Gel",
    img: "./Img/makeup-photo-1.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 15,
    name: "Hair-Spray",
    mainCategory: "Hair Styling",
    subCategory: "Hair Spray",
    img: "./Img/makeup-photo-2.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 16,
    name: "Hair-MatteClay",
    mainCategory: "Hair Styling",
    subCategory: "Hair Clay",
    img: "./Img/makeup-photo-3.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},{
    id: 17,
    name: "Hair-HeatProtector",
    mainCategory: "Hair Styling",
    subCategory: "Hair Protector",
    img: "./Img/makeup-photo-1.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 18,
    name: "Hair-Mousse",
    mainCategory: "Hair Styling",
    subCategory: "Mousse",
    img: "./Img/makeup-photo-2.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 19,
    name: "Treatment-Protein",
    mainCategory: "Treatment",
    subCategory: "Protein",
    img: "./Img/makeup-photo-3.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 20,
    name: "Treatment-ProteinSavanaBrazilian",
    mainCategory: "Treatment",
    subCategory: "ProteinS Brazilian",
    img: "./Img/makeup-photo-1.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},{
    id: 21,
    name: "Treatment-BrazillianBrush ",
    mainCategory: "Treatment",
    subCategory: "Brazillian Brush Hair",
    img: "./Img/makeup-photo-2.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 22,
    name: "Treatment-ProteinKit",
    mainCategory: "Treatment",
    subCategory: "Protein Kit",
    img: "./Img/makeup-photo-3.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
},
{
    id: 23,
    name: "Treatment-Botox",
    mainCategory: "Treatment",
    subCategory: "Botox",
    img: "./Img/makeup-photo-1.jpg",
    price:29999,
    nameItem:"laura chouette",
    oldPrice:31999,
}
]
const allProducthtml = function(myproduct){ 
    if (myproduct.length > 0) {
    myproduct.forEach(function(prod){
        const allProductscontent = `
        <div class="col-12 col-md-6 col-lg-3">
                <div class="cards__content mb-4">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                        <p class="cards__para mb-0">free shipping</p>
                        <div class="cards__icon">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        </div>
                        <img src="${prod.img}" class="card-img-top" alt="makeup">
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="cards__price mt-2">
                        <p class="cards__price-name mb-0">${prod.nameItem}</p>
                        <p class="cards__price-price">$ ${prod.price} <del>${prod.oldPrice}</del></p>
                        </div>
                        <div  class="cards__icon">
                        <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        `
        hairContent.insertAdjacentHTML("afterbegin",allProductscontent)
    })
}else{
    hairContent.innerHTML = "<h3>No Products Available</h3>";
}
}
allProducthtml(allProducts)


const finalRenderDataSrc ={}
let mainCategoryProduct = [...new Set(allProducts.map(item => item.mainCategory))];
let subCategoryProduct = [...new Set(allProducts.map(item => item.subCategory))];
mainCategoryProduct.forEach(function(subcat){
    finalRenderDataSrc[subcat] = allProducts.filter(p => p.mainCategory == subcat);
})
function RemoveItemFromArray(array , itemToRemove){
    const index = array.indexOf(itemToRemove);
    if (index > -1) {
      array.splice(index, 1); // Removes item at index
    }
}
function RenderFilterdProducts(finalRenderDataSrc,mainCatName,subCategory)
{
    for(const item of finalRenderDataSrc){
        let  allProductscontent = `
        <div class="col-12 col-md-6 col-lg-3">
        <div class="cards__content mb-4">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                        <p class="cards__para mb-0">free shipping</p>
                        <div class="cards__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.9" d="M16.3897 2.90675C15.6022 2.90711 14.8231 3.06857 14.1002 3.38121C13.3774 3.69384 12.7262 4.15105 12.1866 4.72469L12.143 4.76832L12.0994 4.72469C11.5595 4.1504 10.9077 3.69274 10.1843 3.3799C9.46077 3.06706 8.6809 2.90567 7.89268 2.90567C7.10446 2.90567 6.32459 3.06706 5.60111 3.3799C4.87763 3.69274 4.22586 4.1504 3.68597 4.72469C2.57867 5.90766 1.96259 7.46739 1.96259 9.08774C1.96259 10.7081 2.57867 12.2678 3.68597 13.4508L4.25317 14.0471L4.30407 14.098L11.6704 20.3662C11.8021 20.4789 11.9697 20.5408 12.143 20.5408C12.3163 20.5408 12.484 20.4789 12.6157 20.3662L19.9747 14.098L20.0329 14.0471L20.6001 13.4508C21.7074 12.2678 22.3234 10.7081 22.3234 9.08774C22.3234 7.46739 21.7074 5.90766 20.6001 4.72469C20.0581 4.1522 19.4054 3.69583 18.6816 3.38332C17.9578 3.07081 17.1781 2.90868 16.3897 2.90675ZM19.5457 12.4473L19.0075 13.0145L12.143 18.8319L5.27849 13.0145L4.7331 12.4473C3.88518 11.534 3.41395 10.3339 3.41395 9.08774C3.41395 7.84154 3.88518 6.64144 4.7331 5.72819C5.13776 5.29671 5.62661 4.9528 6.16942 4.71769C6.71224 4.48258 7.2975 4.36128 7.88904 4.36128C8.48059 4.36128 9.06585 4.48258 9.60866 4.71769C10.1515 4.9528 10.6403 5.29671 11.045 5.72819L11.6194 6.32448C11.6873 6.39485 11.7686 6.45083 11.8586 6.48907C11.9485 6.5273 12.0453 6.54701 12.143 6.54701C12.2408 6.54701 12.3375 6.5273 12.4275 6.48907C12.5174 6.45083 12.5987 6.39485 12.6666 6.32448L13.2338 5.72819C13.6384 5.29671 14.1273 4.9528 14.6701 4.71769C15.2129 4.48258 15.7982 4.36128 16.3897 4.36128C16.9813 4.36128 17.5665 4.48258 18.1093 4.71769C18.6522 4.9528 19.141 5.29671 19.5457 5.72819C20.3968 6.63984 20.8701 7.84055 20.8701 9.08774C20.8701 10.3349 20.3968 11.5356 19.5457 12.4473Z" />
                        </svg>
                        </div>
                        </div>
                        <img src="${item.img}" class="card-img-top" alt="makeup">
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="cards__price mt-2">
                        <p class="cards__price-name mb-0">${item.nameItem}</p>
                        <p class="cards__price-price">$ ${item.price} <del>${item.oldPrice}</del></p>
                        </div>
                        <div  class="cards__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 18">
                        <path d="M18.2707 4.47366H14.9972V2.32768C14.9972 1.09101 14.0152 0.108948 12.7785 0.108948H7.03161C5.79494 0.108948 4.81288 1.09101 4.81288 2.32768V4.47366H1.53934C1.13924 4.47366 0.81189 4.80102 0.81189 5.20112V13.5304C0.81189 15.5673 2.44866 17.2041 4.48552 17.2041H15.3246C17.3614 17.2041 18.9982 15.5673 18.9982 13.5304V5.20112C18.9982 4.80102 18.6708 4.47366 18.2707 4.47366ZM6.26778 2.32768C6.26778 1.89121 6.59514 1.56385 7.03161 1.56385H12.7785C13.215 1.56385 13.5423 1.89121 13.5423 2.32768V4.47366H6.26778V2.32768ZM17.5433 13.5304C17.5433 14.7671 16.5612 15.7492 15.3246 15.7492H4.48552C3.24886 15.7492 2.26679 14.7671 2.26679 13.5304V5.92857H4.81288V7.38347C4.81288 7.78357 5.14023 8.11093 5.54033 8.11093C5.94043 8.11093 6.26778 7.78357 6.26778 7.38347V5.92857H13.5423V7.38347C13.5423 7.78357 13.8697 8.11093 14.2698 8.11093C14.6699 8.11093 14.9972 7.78357 14.9972 7.38347V5.92857H17.5433V13.5304Z"/>
                        </svg>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        `
            if(mainCatName == 'shampoo'){
                hairShampoo.previousElementSibling.classList.remove("hidden")
                hairShampoo.previousElementSibling.textContent += subCategory
                hairShampoo.insertAdjacentHTML("afterbegin",allProductscontent);
            }else if(mainCatName == 'conditioner'){
                hairConditioner.previousElementSibling.classList.remove("hidden")
                hairConditioner.insertAdjacentHTML("afterbegin",allProductscontent)
            }else if(mainCatName == 'mask'){
                hairMask.previousElementSibling.classList.remove("hidden")
                hairMask.insertAdjacentHTML("afterbegin",allProductscontent)
            }else if(mainCatName == 'oil'){
                hairOil.previousElementSibling.classList.remove("hidden")
                hairOil.insertAdjacentHTML("afterbegin",allProductscontent)
            }else if(mainCatName == 'Hairstyling'){
                hairstyling.previousElementSibling.classList.remove("hidden")
                hairstyling.insertAdjacentHTML("afterbegin",allProductscontent)
            }else if(mainCatName == 'Treatment'){
                hairTreatment.previousElementSibling.classList.remove("hidden")
                hairTreatment.insertAdjacentHTML("afterbegin",allProductscontent)
            }
    }
    
}
let currentFilters = []
// Function to handle checkbox state changes
checkboxes.forEach(function(check){
    check.addEventListener("change",function(){
        hairContent.textContent = ``;
        let mainCatName = this.getAttribute('data-mainCat');
        let subCategory = this.getAttribute('data-subCat');
        if(check.checked){
            currentFilters.push(subCategory)
            finalRenderDataSrc[mainCatName] = allProducts.filter(p => p.mainCategory == mainCatName && p.subCategory == subCategory)
            RenderFilterdProducts(finalRenderDataSrc[mainCatName],mainCatName,subCategory)
        }else {
            RemoveItemFromArray(currentFilters,subCategory);
            hairShampoo.innerHTML = ``
            finalRenderDataSrc[mainCatName] = allProducts.filter(p => p.mainCategory == mainCatName 
                &&currentFilters.includes(p.subCategory) );
                
            if(currentFilters.length !=0){
                RenderFilterdProducts(finalRenderDataSrc[mainCatName],mainCatName,subCategory)
            }else{
                allProducthtml(allProducts)
            }
        }
    })
})
