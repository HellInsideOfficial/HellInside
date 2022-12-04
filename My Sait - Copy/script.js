var width = 400; // ширина картинки
var list = document.querySelector(".images");
var pictures = document.querySelectorAll(".images>li");  
var position = 0;  
document.querySelector(".prev").onclick = function() {
    position += width; 
    position = Math.min(position, 0)
    list.style.marginLeft = position + "px";
};
document.querySelector(".next").onclick = function() {
    position -= width; 
    position = Math.max(position, -width * (pictures.length - 1));
    list.style.marginLeft = position + "px";
};
var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");
themeButton.onclick = function() {
page.classList.toggle("lightTheme");
page.classList.toggle("darkTheme");
};