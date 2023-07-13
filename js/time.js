
function currentTime() {
	let date = new Date()
	let hour = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	let time = document.querySelector('.time')
	// console.log(hour, min, sec)
	time.textContent = hour + " : " + min + " : " + sec	
}

setInterval(currentTime,1000)	

function plusZero(number) {
     if(number < 10){
     	return "0" + number
    }else{
    	return number

    }
}
