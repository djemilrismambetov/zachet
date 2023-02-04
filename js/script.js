// const TarifsCard = document.querySelectorAll('section-tarifs__card');
const PromotionImage = document.querySelector('.section-promotion__image')
// TarifsCard.onclick=function(){
//     window.location.href = '../html';
// };
const TransferToTariffs = document.querySelector('.add_more')
const PromoteFlex = document.querySelector('section-promotion')
PromotionImage.onclick = function() {
    PromotionImage.classList.toggle("max-size")
    PromoteFlex.classList.add("flex_center")
}
TransferToTariffs.onclick = function(){
    window.location.href = "../html/tarrifs.html"
}