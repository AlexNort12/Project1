const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const navLinks = document.querySelectorAll('.nav__link');
let color = '';
let textColor = ''

if(localStorage.getItem('bg-color')!== null){
	color = localStorage.getItem('bg-color');
	header.style.backgroundColor = color;
	footer.style.backgroundColor = color;
}
if(localStorage.getItem('text-color') !== null){
	textColor = localStorage.getItem('text-color')
	navLinks.forEach((el) => {
		el.style.color = textColor

	})

}

function choiceDark() {
	console.log('функция')
	header.style.backgroundColor = "#0b5200";
	header.style.transition = "1s ease-out 0.5s"
    footer.style.backgroundColor = "#0b5200";
	footer.style.transition = "1s ease-out 0.5s"
	navLinks.forEach((el) => {
	     el.style.color = "white"
	     el.style.transition = "1s ease-out 0.5s"
	})





	localStorage.setItem("bg-color" , "#0b5200")
	localStorage.setItem("text-color", "white")


}
function choiceLight() {
	header.style.backgroundColor = "#e693ed";
	header.style.transition = "0.5s ease-out 0.5s"

	footer.style.backgroundColor = "#e693ed";
	footer.style.transition = "0.5s ease-out 0.5s"
	localStorage.setItem("bg-color" , "#e693ed")

  navLinks.forEach((el) => {	
	el.style.color = "black"
	el.style.transition = "1s ease-out 0.5s"

	localStorage.setItem("text-color", "black")})



}