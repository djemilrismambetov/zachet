// const TarifsCard = document.querySelectorAll('section-tarifs__card');
const PromotionImage = document.querySelector('.section-promotion__image')
// TarifsCard.onclick=function(){
//     window.location.href = '../html';
// };
const TransferToTariffs = document.querySelector('.add_more')
PromotionImage.addEventListener("click", function() {
    PromotionImage.style.width = "200px";
    PromotionImage.style.height = "200px";
  });

TransferToTariffs.onclick = function(){
    window.location.href = "../html/tarrifs.html"
}