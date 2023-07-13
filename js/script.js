let buyf = 0;
let allprice = 0
let oneprice = document.querySelector(".shop__price").innerHTML
const basket = document.getElementById('btn')
const price_in_basket = document.querySelector(".price")
// localStorage.clear()
oneprice = parseInt(oneprice)
console.log(oneprice)
if (localStorage.getItem("key_for_allprice")!== null ||
	localStorage.getItem("key_for_buyf")!== null ){
	allprice = localStorage.getItem("key_for_allprice")
	buyf = localStorage.getItem("key_for_buyf")
	price_in_basket.innerHTML = allprice
	buyf = parseInt(buyf)
    if(!buyf){
     	basket.style.background = 'silver';
		basket.innerHTML = 'Купить'
		buyf = 0;
	
    }else{
    	basket.style.background = 'lime';
		basket.innerHTML = 'В корзине';
		buyf = 1;
		
    }
}
function buy() {
	if(!buyf) {
		basket.style.background = 'lime';
		basket.innerHTML = 'В корзине';
		buyf = 1;
		allprice = +allprice + oneprice
	} else {
		basket.style.background = 'silver';
		basket.innerHTML = 'Купить'
		buyf = 0;
		allprice = +allprice - oneprice
	}
	console.log(allprice)
	price_in_basket.innerHTML = allprice
	localStorage.setItem("key_for_allprice",allprice)
	localStorage.setItem("key_for_buyf", buyf)
}
