const TarifsCard = document.querySelectorAll('section-tarifs__card');
const PromotionImage = document.querySelector(“.section-promotion__image”);
TarifsCard.onclick=function(){
    window.location.href = '../html';
};
PromotionImage.onclick = function(){
    PromotionImage.classList.toggle("max-size")
}

