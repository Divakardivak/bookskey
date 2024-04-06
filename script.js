// add popupoverlay,popup-box,add-button

document.addEventListener("DOMContentLoaded", function () {
    var popupoverlay = document.querySelector(".popup-overlay");
    var popupbox = document.querySelector(".popup-box");
    var addpopupbutton = document.getElementById("add-popup-button");
    // select cancel button
    var cancelpopup=document.getElementById("cancel-popup");

    addpopupbutton.addEventListener("click", function () {
        popupoverlay.style.display = "block";
        popupbox.style.display = "block";
    });

    cancelpopup.addEventListener("click",function(event) {

        event.preventDefault()
        popupoverlay.style.display = "none";
        popupbox.style.display = "none";
    });

// select container,add-book,book-title-input,book-author-input,book-discription-input
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input"); // Corrected variable name
var bookauthorinput = document.getElementById("book-author-input"); // Corrected variable name
var bookdiscriptioninput = document.getElementById("book-description-input"); // Corrected variable name

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdiscriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`;
    container.append(div);
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});
});

function deletebook(event)
{
    event.target.parentElement.remove()
}


