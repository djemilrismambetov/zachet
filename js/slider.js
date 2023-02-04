const tariffRange = document.getElementById('tariffRange');
const tariffPrice = document.getElementById('tariffPrice');
tariffRange.addEventListener('input', function () {
  tariffPrice.innerHTML = this.value;
});