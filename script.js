var arrBtns = document.querySelectorAll(".accordion");

// arrBtns.forEach(function(value) {
//     value.addEventListener("click", function() {
//         value.nextElementSibling.classList.toggle("show");
//     });
// });

//1 способ
// document.querySelector(".wrapper").addEventListener("click", function(event) {
//     if (event.target.tagName == "BUTTON") {
//         event.target.nextElementSibling.classList.toggle("show");
//     }
// });

//2 способ
// document.querySelector(".wrapper").addEventListener("click", function(event) {
//     if (event.target.classList.contains == "accordion") {
//         event.target.nextElementSibling.classList.toggle("show");
//     }
// });



//3 способ
document.querySelector(".wrapper").addEventListener("click", function(event) {
    if (event.target.matches("button")) {
        event.target.nextElementSibling.classList.toggle("show");
    }
}); // ------------------------- ЗАПОМНИТЬ ---------------------------------------




//<!--механизм всплытия события -->
// и как решить проблему 
//(stopPropagation) <- он есть(хорошо), но он отменяет стандартный цикл событий(плохо)

// document.querySelector("#item1").addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log(this);
// });
// document.querySelector("#item2").addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log(this);
// });
// document.querySelector("#item3").addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log(this);
// });

//1:22:28

// itemsArr = document.querySelectorAll(".items");

// itemsArr.forEach(function(value) {
//     value.addEventListener("click", function() {
//         console.log(this);
//     })
// });

document.querySelector(".items").addEventListener("click", function(event) {
    // console.log(this);
    console.log(event.target);
});