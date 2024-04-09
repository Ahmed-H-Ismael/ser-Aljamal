const tabLabel = document.querySelectorAll(".myaccount__details-header ul li");
const tabContent = document.querySelectorAll(".myaccount__details-content > div");
tabLabel.forEach(function(myTab){
    let mydata = myTab.getAttribute("data-tab")
    myTab.addEventListener("click",function(){
        tabContent.forEach(function(mycontent){
            mycontent.classList.remove("active")
        })
    document.querySelector(mydata).classList.add("active")
    })
})