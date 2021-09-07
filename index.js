var plusIconOne = document.querySelector(".plus-icon-one")
var plusIconTwo = document.querySelector(".plus-icon-two")
var plusIconThree = document.querySelector(".plus-icon-three")
var minusIconOne = document.querySelector(".minus-icon-one")
var minusIconTwo = document.querySelector(".minus-icon-two")
var minusIconThree = document.querySelector(".minus-icon-three")
var questionTextOne = document.querySelector(".question-text-one")
var questionTextTwo = document.querySelector(".question-text-two")
var questionTextThree = document.querySelector(".question-text-three")

const plusIconUrl = "https://img.icons8.com/android/24/000000/plus.png";
const minusIconUrl = "https://img.icons8.com/material-outlined/24/000000/delete-sign.png"

plusIconOne.addEventListener("click", function() {
    // console.log("clicked")
    questionTextOne.style.display = "block";
    questionTextTwo.style.display = "none";
    questionTextThree.style.display = "none";
    replaceIcons(plusIconTwo, plusIconThree);
    replaceURL(plusIconOne, questionTextOne)
})

plusIconTwo.addEventListener("click", function() {
    // console.log("clicked")
    questionTextTwo.style.display = "block";
    questionTextOne.style.display = "none";
    questionTextThree.style.display = "none";
    replaceIcons(plusIconOne, plusIconThree);
    replaceURL(plusIconTwo, questionTextTwo)
})

plusIconThree.addEventListener("click", function() {
    console.log("clicked")
    questionTextThree.style.display = "block";
    questionTextOne.style.display = "none";
    questionTextTwo.style.display = "none";
    replaceIcons(plusIconTwo, plusIconOne);
    replaceURL(plusIconThree, questionTextThree)
    }
)

function replaceURL(icon, questionText){
    icon.src = minusIconUrl;
    if(icon.src = minusIconUrl) {
        icon.addEventListener("click", function() {
            questionText.style.display = "none"
            icon.src = plusIconUrl;
        })
    }
}

function replaceIcons(icon1, icon2){
    icon1.src = plusIconUrl;
    icon2.src = plusIconUrl;
}