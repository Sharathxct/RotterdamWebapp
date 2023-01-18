let images = document.querySelectorAll('.gallery img');
let popup=document.querySelector(".popupg")
let popupimg = document.querySelector(".popupg img")
for( img of images){
    img.onclick = function(){
        popup.style.display = 'block';
        popupimg.src = this.getAttribute('src')
    }
} 
document.querySelector('.popupg span').onclick = function(){
    popup.style.display = 'none';
}