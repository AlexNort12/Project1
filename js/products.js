let adder_li = document.createElement("li");
adder_li.classList.add("products__item");
let creature_title = document.createElement("h3");
let text_title = document.createTextNode("texture");
creature_title.appendChild(text_title);
let spawn = document.querySelector(".products__list");
let creater_img = document.createElement("img");
creater_img.src = "img/DK.jpg";
creater_img.style.width = "50px";
let basket_none = document.querySelectorAll(".products__item")[0]
let btn = document.createElement("button")
let btn_text = document.createTextNode("Удалить")
btn.appendChild(btn_text)
btn.setAttribute("onclick", "Delete()")



function Delete(){
	btn.parentNode.remove()
}


// wefweggerg

function update(){
	spawn.appendChild(adder_li);
	adder_li.appendChild(creature_title);
	adder_li.appendChild(creater_img);
	basket_none.classList.add("upt")
	adder_li.appendChild(btn)
}