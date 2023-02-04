// const TarifsCard = document.querySelectorAll('section-tarifs__card');
const PromotionImage = document.querySelector('.section-promotion__image')
// TarifsCard.onclick=function(){
//     window.location.href = '../html';
// };
const TarifsCard = document.querySelector('.section-tarifs__card')
PromotionImage.onclick = function(){
    PromotionImage.classList.toggle("max-size")
}

TarifsCard.onclick = function(){
    window.location.href = "../html/tarrifs.html"
}