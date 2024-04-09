const compareImg = document.querySelector(".Comparison__img")
const imgs = document.querySelectorAll(".colors span")
let myproduct = ["./Img/cream1.jpg","./Img/cream2.jpg","./Img/cream3.jpg","./Img/cream4.jpg"];
let index = 0


imgs.forEach(function(myimg){
    myimg.addEventListener("click",function(){
        compareImg.src = myproduct[index]
        index++
        if (index >= myproduct.length) {
            index = 0;
        }
    })
})

